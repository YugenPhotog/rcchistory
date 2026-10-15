import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.js';

const originalFetch = globalThis.fetch;
let upstream;
globalThis.fetch = (...args) => {
  if (!upstream) throw new Error('Unexpected outbound call: tests must remain offline');
  return upstream(...args);
};
after(() => { globalThis.fetch = originalFetch; });
const origin = 'https://austin-academics.pages.dev';
const env = { ANTHROPIC_API_KEY: 'offline-test-placeholder' };
const request = (body, headers = { Origin: origin }) => new Request('https://example.invalid/feedback', {
  method: 'POST', headers, body: typeof body === 'string' ? body : JSON.stringify(body)
});
const student = { questionId: 'kant-duty', questionText: 'What makes an action morally worthy?', studentAnswer: 'An action has moral worth when a person acts from duty rather than only following an inclination or expecting a reward. The reason for acting matters, even when the outward action looks the same.' };

test('preflight preserves CORS headers', async () => {
  const response = await worker.fetch(new Request('https://example.invalid/feedback', { method: 'OPTIONS' }), env);
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.equal(response.headers.get('access-control-allow-methods'), 'POST, OPTIONS');
});
test('GET remains rejected', async () => {
  const response = await worker.fetch(new Request('https://example.invalid/'), env);
  assert.equal(response.status, 405);
  assert.equal(await response.text(), 'Method not allowed');
});
test('unapproved origin remains rejected', async () => {
  assert.equal((await worker.fetch(request(student, { Origin: 'https://example.invalid' }), env)).status, 403);
});
test('invalid JSON remains rejected', async () => {
  const response = await worker.fetch(request('{'), env);
  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: 'Invalid JSON' });
});
test('missing fields remain rejected', async () => {
  const response = await worker.fetch(request({ questionId: 'kant-duty' }), env);
  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: 'Missing required fields' });
});
test('valid request preserves upstream settings and feedback shape', async () => {
  upstream = async (url, options) => {
    assert.equal(url, 'https://api.anthropic.com/v1/messages');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['x-api-key'], env.ANTHROPIC_API_KEY);
    assert.equal(options.headers['anthropic-version'], '2023-06-01');
    const body = JSON.parse(options.body);
    assert.equal(body.model, 'claude-sonnet-5-5');
    assert.deepEqual(body.thinking, { type: 'between_tools' });
    assert.equal(body.max_tokens, 400);
    assert.match(body.system, /^You are Immanuel Kant/);
    assert.ok(body.messages[0].content.includes(student.studentAnswer));
    assert.equal(body.messages[0].role, 'user');
    assert.deepEqual(Object.keys(body).sort(), ['max_tokens', 'messages', 'model', 'system', 'thinking']);
    return Response.json({ content: [{ type: 'text', text: 'You have identified the importance of acting from duty.' }] });
  };
  try {
    const response = await worker.fetch(request(student), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), origin);
    assert.deepEqual(await response.json(), { feedback: 'You have identified the importance of acting from duty.' });
  } finally { upstream = undefined; }
});
test('upstream failure retains error handling', async () => {
  upstream = async () => new Response('simulated upstream failure', { status: 500 });
  try {
    const response = await worker.fetch(request(student), env);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'Upstream API error: simulated upstream failure' });
  } finally { upstream = undefined; }
});
test('empty upstream content returns an empty string', async () => {
  upstream = async () => Response.json({ content: [] });
  try {
    const response = await worker.fetch(request(student), env);
    assert.deepEqual(await response.json(), { feedback: '' });
  } finally { upstream = undefined; }
});
test('network failure retains error handling', async () => {
  upstream = async () => { throw new Error('simulated connection failure'); };
  try {
    const response = await worker.fetch(request(student), env);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'API request failed: simulated connection failure' });
  } finally { upstream = undefined; }
});

for (const allowedOrigin of [origin, 'https://austin-academics.com']) {
  test('preflight and POST allow ' + allowedOrigin, async () => {
    const preflight = await worker.fetch(new Request('https://example.invalid/feedback', {
      method: 'OPTIONS', headers: { Origin: allowedOrigin }
    }), env);
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get('access-control-allow-origin'), allowedOrigin);
    assert.equal(preflight.headers.get('vary'), 'Origin');
    upstream = async () => Response.json({ content: [{ type: 'text', text: 'Feedback.' }] });
    try {
      const response = await worker.fetch(request(student, { Origin: allowedOrigin }), env);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('access-control-allow-origin'), allowedOrigin);
      assert.equal(response.headers.get('vary'), 'Origin');
    } finally { upstream = undefined; }
  });
}

test('reply skips a non-text first block and selects the first text block', async () => {
  upstream = async () => Response.json({ content: [
    { type: 'thinking', thinking: 'Internal reasoning.' },
    { type: 'text', text: 'You have identified the importance of acting from duty.' },
    { type: 'text', text: 'Later text must not replace the first text block.' }
  ] });
  try {
    const response = await worker.fetch(request(student), env);
    assert.deepEqual(await response.json(), { feedback: 'You have identified the importance of acting from duty.' });
  } finally { upstream = undefined; }
});

for (const content of [undefined, [{ type: 'thinking', thinking: 'No text available.' }]]) {
  test('missing text returns an empty string: ' + JSON.stringify(content), async () => {
    upstream = async () => Response.json({ content });
    try {
      const response = await worker.fetch(request(student), env);
      assert.deepEqual(await response.json(), { feedback: '' });
    } finally { upstream = undefined; }
  });
}
