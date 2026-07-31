import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const banks = [];
const errors = [];
const warnings = [];
const globalIds = new Set();
const categories = ["explain", "use", "connect"];
const moves = ["cause", "comparison", "context", "consequence", "evidence"];

function fail(message) { errors.push(message); }
function warn(message) { warnings.push(message); }

for (let chapter = 2; chapter <= 6; chapter += 1) {
  const bankPath = path.join(root, "banks", `chapter-${String(chapter).padStart(2, "0")}.json`);
  let bank;
  try { bank = JSON.parse(fs.readFileSync(bankPath, "utf8")); }
  catch (error) { fail(`Chapter ${chapter}: JSON parse failed: ${error.message}`); continue; }
  banks.push(bank);
  if (bank.chapter !== chapter) fail(`Chapter ${chapter}: bank chapter mismatch`);
  if (bank.practiceOnly !== true) fail(`Chapter ${chapter}: practiceOnly is not true`);
  if (!Array.isArray(bank.sourceFiles) || !bank.sourceFiles.length) fail(`Chapter ${chapter}: missing source inventory`);
  const counts = Object.fromEntries(categories.map(cat => [cat, bank.questions.filter(q => q.category === cat).length]));
  if (bank.questions.length < 30 || bank.questions.length > 45) fail(`Chapter ${chapter}: total outside 30–45`);
  if (counts.explain < 15 || counts.explain > 20) fail(`Chapter ${chapter}: Explain outside 15–20`);
  if (counts.use < 8 || counts.use > 12) fail(`Chapter ${chapter}: Use outside 8–12`);
  if (counts.connect < 7 || counts.connect > 10) fail(`Chapter ${chapter}: Connect outside 7–10`);
  const stems = new Set();
  const positions = { a: 0, b: 0, c: 0, d: 0 };
  let maxStem = 0;
  let maxChoiceRatio = 0;
  let immediateShorter = 0;
  for (const q of bank.questions) {
    if (globalIds.has(q.id)) fail(`Duplicate global ID: ${q.id}`);
    globalIds.add(q.id);
    const normalizedStem = q.stem.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (stems.has(normalizedStem)) fail(`${q.id}: duplicate stem`);
    stems.add(normalizedStem);
    if (q.chapter !== chapter) fail(`${q.id}: wrong chapter`);
    if (!categories.includes(q.category)) fail(`${q.id}: invalid category`);
    if (!moves.includes(q.thinkingMove)) fail(`${q.id}: invalid thinking move`);
    if (q.status !== "approved" || q.practiceOnly !== true) fail(`${q.id}: invalid status/boundary`);
    if (!Array.isArray(q.lectureIds) || !q.lectureIds.length) fail(`${q.id}: missing lecture IDs`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) fail(`${q.id}: does not have four choices`);
    if (new Set(q.choices.map(c => c.id)).size !== 4) fail(`${q.id}: duplicate choice IDs`);
    if (q.choices.some(c => !c.text?.trim() || !c.feedback?.trim())) fail(`${q.id}: incomplete choice or feedback`);
    if (!q.choices.some(c => c.id === q.correctChoiceId)) fail(`${q.id}: correct choice does not resolve`);
    if (positions[q.correctChoiceId] !== undefined) positions[q.correctChoiceId] += 1;
    if (!Array.isArray(q.walkthrough) || q.walkthrough.length < 3 || q.walkthrough.length > 5) fail(`${q.id}: walkthrough not 3–5 steps`);
    if (!q.transferStrategy?.trim()) fail(`${q.id}: missing transfer strategy`);
    if (!q.sourceAlignment?.lectureClaim?.trim()) fail(`${q.id}: missing source claim`);
    if (!q.accessibilityNotes?.trim()) fail(`${q.id}: missing accessibility notes`);
    if (/\bnot\b.{0,35}\b(no|never|not)\b/i.test(q.stem)) fail(`${q.id}: possible double negative in stem`);
    if (/\b(all|none) of the above\b/i.test(q.choices.map(c => c.text).join(" "))) fail(`${q.id}: all/none of the above`);
    maxStem = Math.max(maxStem, q.stem.length);
    const lengths = q.choices.map(c => c.text.length);
    maxChoiceRatio = Math.max(maxChoiceRatio, Math.max(...lengths) / Math.max(1, Math.min(...lengths)));
    if (Math.max(q.conciseCorrectFeedback.length, q.conciseIncorrectFeedback.length) < q.walkthrough.join(" ").length) immediateShorter += 1;
  }
  if (maxStem > 220) warn(`Chapter ${chapter}: longest stem is ${maxStem} characters`);
  if (maxChoiceRatio > 1.7) fail(`Chapter ${chapter}: maximum choice-length ratio ${maxChoiceRatio.toFixed(2)} exceeds 1.70`);
  if (immediateShorter !== bank.questions.length) fail(`Chapter ${chapter}: immediate feedback is not shorter for every item`);
  if (Math.max(...Object.values(positions)) - Math.min(...Object.values(positions)) > 2) warn(`Chapter ${chapter}: correct positions uneven ${JSON.stringify(positions)}`);
  bank.validation = { counts, maxStem, maxChoiceRatio, positions };
}

const landingHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const practiceHtml = fs.readFileSync(path.join(root, "practice.html"), "utf8");
const css = fs.readFileSync(path.join(root, "historian-practice.css"), "utf8");
const js = fs.readFileSync(path.join(root, "practice.js"), "utf8");
for (const required of ["<html lang=\"en\">", "<h1", "<main", "<footer", "class=\"skip-link\"", "aria-live=\"polite\"", "<fieldset", "<legend"]) {
  if (!practiceHtml.includes(required)) fail(`Shared app missing ${required}`);
}
for (const required of ["<html lang=\"en\">", "<h1", "<main", "<footer", "class=\"skip-link\""]) {
  if (!landingHtml.includes(required)) fail(`Landing page missing ${required}`);
}
for (let chapter = 2; chapter <= 6; chapter += 1) {
  if (!landingHtml.includes(`practice.html?chapter=${chapter}`)) fail(`Landing page missing Chapter ${chapter} link`);
}
if (!landingHtml.includes('https://austin-academics.com/hist101-think-like-a-historian/og.png')) fail("Landing page missing social image metadata");
if (!fs.existsSync(path.join(root, "og.png"))) fail("Social image file is missing");
if (!landingHtml.includes('class="landing-banner-image" src="og.png"')) fail("Landing page is missing the visible banner image");
if (!landingHtml.includes('historian-practice.css')) fail("Landing page is missing the current stylesheet");
for (const required of [":focus-visible", "prefers-reduced-motion", "@media (max-width: 20rem)"]) {
  if (!css.includes(required)) fail(`Styles missing ${required}`);
}
for (const required of ["localStorage", "try", "catch", "URLSearchParams", "safeReturnUrl", "chooseQuestion", "defaultScaffold"]) {
  if (!js.includes(required)) fail(`Application logic missing ${required}`);
}
if (/sk-[A-Za-z0-9_-]{20,}|api[_-]?key\s*[:=]/i.test(`${landingHtml}\n${practiceHtml}\n${css}\n${js}\n${banks.map(b => JSON.stringify(b)).join("\n")}`)) fail("Possible secret or API key found");

const report = {
  timestamp: new Date().toISOString(),
  result: errors.length ? "FAIL" : "PASS",
  chapters: banks.map(b => ({ chapter: b.chapter, total: b.questions.length, ...b.validation })),
  errors,
  warnings
};
fs.writeFileSync(path.join(root, "audits", "validation-results.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
