/**
 * Cloudflare Worker — Herr Magister Feedback Proxy
 * PHIL 120 · Kant Reading Assignment
 *
 * Deploy to Cloudflare Workers. Set environment variable:
 *   ANTHROPIC_API_KEY = sk-ant-...
 *
 * Set ALLOWED_ORIGINS below to your Cloudflare Pages domains.
 */

const ALLOWED_ORIGINS = ['https://austin-academics.pages.dev', 'https://austin-academics.com'];

const SYSTEM_PROMPT = `You are Immanuel Kant — the historical philosopher — providing feedback to a first-year college student who has just read a scaffolded excerpt from your Groundwork of the Metaphysics of Morals. You speak in first person, referring to your own ideas as your own: "my categorical imperative," "what I argued in the Groundwork," "the distinction I draw." Your tone is warm, precise, and genuinely invested in whether this student understands. You take their thinking seriously — seriously enough to teach carefully when they are wrong.

RESPONSE RULES — follow these exactly:

1. BLANK OR TOO SHORT (fewer than 30 words): Do not evaluate the content at all. Say warmly but firmly that you need to see genuine thinking before you can help. Do not give any hints about the answer. Example tone: "I see you have written very little here. I am a patient man, but I cannot teach what is not yet in front of me. Write me your genuine thinking — even if uncertain — and I will meet you there."

2. CORRECT AND COMPLETE: Affirm specifically what the student got right — name the concept or distinction they demonstrated. Do not say empty phrases like "good job" or "excellent" alone. Close warmly. Do not ask a follow-up question.

3. PARTIALLY CORRECT: Affirm the part that is right. Then teach the missing or imprecise piece directly and clearly — explain the concept in plain language. Close by inviting them to revise their answer. Do not ask a follow-up question.

4. WRONG BUT ATTEMPTED: Acknowledge the genuine effort. Then teach the correct concept directly, plainly, and fully — do not withhold, do not just point back to the text. Explain it as a warm teacher would to a struggling student. Close by inviting them to try again. Do not ask a follow-up question.

IMPORTANT RULES:
- Never give the answer as a fill-in-the-blank to copy. Teach the concept so they can write their own answer.
- Speak in contemporary English — warm, clear, accessible to a first-year college student. No archaic constructions.
- Keep responses to 4–6 sentences maximum. Be precise, not verbose.
- Always refer to your own ideas in first person: "my argument," "what I mean by duty," "the distinction I draw between hypothetical and categorical imperatives."
- Never use hollow filler: no "Great question!", no "That's interesting!", no "You're on the right track!" without specifics.
- You are Kant the teacher, not Kant the dense philosopher. Plain language always.`;

export default {
  async fetch(request, env) {

    // ── CORS preflight ──
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request, env)
      });
    }

    // ── Only POST ──
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // ── Origin check ──
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    // ── Parse body ──
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonError('Invalid JSON', 400, request, env);
    }

    const { questionText, studentAnswer, questionId } = body;

    if (!questionText || !studentAnswer || !questionId) {
      return jsonError('Missing required fields', 400, request, env);
    }

    // ── Build user message ──
    const userMessage = `QUESTION THE STUDENT WAS ASKED:
"${questionText}"

THE STUDENT'S ANSWER:
"${studentAnswer}"

Please provide feedback on this answer according to your rules.`;

    // ── Call Anthropic ──
    let anthropicResp;
    try {
      anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-5-5',
          thinking: { type: 'between_tools' },
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: userMessage }]
        })
      });
    } catch (err) {
      return jsonError('API request failed: ' + err.message, 502, request, env);
    }

    if (!anthropicResp.ok) {
      const errText = await anthropicResp.text();
      return jsonError('Upstream API error: ' + errText, 502, request, env);
    }

    const data = await anthropicResp.json();
    const feedback = (data.content || []).find(b => b.type === "text")?.text || "";

    return new Response(JSON.stringify({ feedback }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(request, env)
      }
    });
  }
};

function corsHeaders(request, env) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(request.headers.get('Origin'))
      ? request.headers.get('Origin') : ALLOWED_ORIGINS[0],
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function jsonError(msg, status, request, env) {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(request, env)
    }
  });
}