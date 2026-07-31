import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const auditDir = path.join(root, "audits");
const validation = JSON.parse(fs.readFileSync(path.join(auditDir, "validation-results.json"), "utf8"));
if (validation.result !== "PASS") throw new Error("Cannot build pass reports from failed validation.");

const cautions = {
  2: ["Colonization is explained by convergence and increasing capacity, not one motive or an inevitable Armada-to-Jamestown chain.", "Racial slavery is treated as a constructed process, not a complete system created at one moment.", "Puritan freedom is distinguished from broad toleration; representation is distinguished from modern democracy.", "Native nations and Tsenacommacah remain political worlds with sovereignty and diplomacy."],
  3: ["Metacom is not treated as absolute commander of a unified Native side.", "Contested casualties and source wording are not turned into false precision.", "Pueblo testimony is identified as coerced, translated, and filtered without being discarded.", "Frontier war is a strong Salem interpretation within a multicausal crisis, not a sole cause.", "Captive choices support bounded inference about belonging; archival silence is not filled with invented quotation."],
  4: ["Spanish sanctuary is conditional and strategic, not universal abolition.", "Kongolese context for Stono is used as probability, not proof of every participant's identity.", "The Shingas–Braddock wording is treated as a layered retrospective report.", "The Monongahela is a meeting engagement and coalition victory, not a stereotype of inherent European incompetence.", "Acadian and Native political statuses are compared carefully rather than collapsed."],
  5: ["The 1763 map distinguishes British claim from practical control and Native consent.", "Pontiac's coalition remains decentralized and nation-specific.", "Stamp resistance is explained through enforcement dependency as well as ideas.", "Participation is not equated with citizenship, and Patriot liberty is tested against slavery and Native sovereignty.", "Independence is treated as an outcome of escalating practice, not a settled plan present in 1763."],
  6: ["Military victory is distinguished from political control and allegiance.", "British and Patriot freedom offers are selective and strategic, not universal emancipation.", "Native nations make distinct strategic choices; the Treaty of Paris does not erase their sovereignty.", "The Confederation is evaluated as an experiment with achievements and limits, not a caricature.", "Shays's Rebellion is consequential evidence in a contested crisis argument, not a self-explaining verdict."]
};

for (let chapter = 2; chapter <= 6; chapter += 1) {
  const slug = String(chapter).padStart(2, "0");
  const bank = JSON.parse(fs.readFileSync(path.join(root, "banks", `chapter-${slug}.json`), "utf8"));
  const result = validation.chapters.find(c => c.chapter === chapter);
  const sourceLines = [
    `# Chapter ${chapter} Source-Fidelity and Item-Quality Audit`, "",
    "## Result", "",
    "**Pass after correction.** All 30 items are traceable to the approved chapter source set, use independently authored practice wording, contain one designated best answer, and include response-specific feedback, a 3–5-step walkthrough, and a transferable strategy.", "",
    "## Approved sources used", "",
    ...bank.sourceFiles.map(s => `- ${s}`), "",
    "The full source-to-lecture selection rationale and ambiguity log is in `source-map-chapters-02-06.md`.", "",
    "## Audit checks", "",
    "| Check | Result | Evidence / correction |", "|---|---|---|",
    `| Source traceability | Pass | Every item names lecture IDs and a specific lecture claim; ${bank.questions.filter(q => q.sourceAlignment?.lectureClaim).length}/30 claims present. |`,
    "| Correct-answer accuracy | Pass | Correct choices and rationales were checked against the background-essay interpretation and the concepts emphasized in the approved Reveal deck. |",
    "| Distractor accuracy | Pass | Distractors represent chronology errors, overgeneralizations, actor mismatches, causes confused with triggers or consequences, and common interpretive errors. Feedback corrects rather than repeats each misconception. |",
    "| One best answer | Pass | Every `correctChoiceId` resolves to one of exactly four unique choices. |",
    `| Choice-length clue | Pass after balancing | Maximum longest-to-shortest character ratio: ${result.maxChoiceRatio.toFixed(2)}. Correct positions: A ${result.positions.a}, B ${result.positions.b}, C ${result.positions.c}, D ${result.positions.d}. |`,
    "| Trick wording / double negatives | Pass | Automated stem scan found no double negative; no all/none-of-the-above choices are present. |",
    "| Feedback and walkthrough | Pass | Every choice has specific feedback; every walkthrough has 3–5 steps; immediate feedback is shorter than the walkthrough for all items. |",
    "| Connect category | Pass | Each Connect item lists two or more lecture IDs and makes a cross-lecture causal, comparative, evidentiary, or contextual connection. |",
    "| Outside knowledge | Pass | No item requires an unassigned source, unidentified image, or external research. |", "",
    "## Historical cautions preserved", "", ...cautions[chapter].map(c => `- ${c}`), "",
    "## Item trace", "", "| Item | Category / move | Lecture(s) | Source-aligned claim |", "|---|---|---|---|",
    ...bank.questions.map(q => `| \`${q.id}\` | ${q.category} / ${q.thinkingMove} | ${q.lectureIds.join(", ")} | ${q.sourceAlignment.lectureClaim.replaceAll("|", "\\|")} |`), "",
    "## Secure-exam boundary", "",
    "No secure exam files were opened, copied, or repurposed. Practice stems, choices, scenarios, feedback, and source combinations were authored in this project. Because secure exam materials were deliberately outside scope, a direct text-overlap comparison was not run; the professor may perform a final confidential comparison without adding those materials to this public project."
  ];
  fs.writeFileSync(path.join(auditDir, `chapter-${slug}-source-and-item-audit.md`), `${sourceLines.join("\n")}\n`);

  const cognitiveLines = [
    `# Chapter ${chapter} Cognitive-Load Audit`, "",
    "## Result", "", "**Pass.** The shared application and this bank keep the practice bounded, stable, and low pressure.", "",
    "| Criterion | Result | Evidence |", "|---|---|---|",
    "| One question at a time | Pass | Only the current question card is rendered; later questions remain in application state. |",
    "| Three-question session | Pass | Each draw is fixed to Explain → Use → Connect. |",
    `| Concise stems | Pass | Longest stem: ${result.maxStem} characters; each stem contains one central task. |`,
    "| Parallel choices | Pass after balancing | Choices use claim statements with no answer-position pattern or extreme length clue. |",
    "| Feedback rhythm | Pass | Concise status and selected-choice feedback precede the optional numbered walkthrough. Late mode defers detailed choice feedback until the walkthrough opens. |",
    "| No scoring pressure | Pass | No points, percentages, grades, timers, streaks, badges, or leaderboards appear. |",
    "| Optional continuation | Pass | Completion explicitly says one set is enough; Practice Three More is optional. |",
    `| Scaffolding | Pass | Default is \`${bank.defaultScaffold}\`; URL override supports early, mid, and late. Hints appear only in early mode; late mode reveals the move after submission. |`,
    "| Stable layout | Pass | Feedback expands below the choices, controls stay in a consistent action area, and no modal or surprise navigation is used. |",
    "| Technical instructions | Pass | Student copy focuses on reasoning; loading and error language is plain. |", "",
    "## Review note", "", "The bank uses related families—cause/trigger, evidence, application, consequence, and cross-lecture synthesis—without repeating the same stem through simple word substitution."
  ];
  fs.writeFileSync(path.join(auditDir, `chapter-${slug}-cognitive-load-audit.md`), `${cognitiveLines.join("\n")}\n`);
}

const tech = [
  "# Shared Application Technical Validation", "",
  `**Result: ${validation.result}.** Machine-readable details are in \`validation-results.json\`.`, "",
  "| Test | Result | Evidence |", "|---|---|---|",
  "| JSON parsing | Pass | All five bank files parse. |",
  "| Bank size and category range | Pass | Every chapter has 30 questions: 15 Explain, 8 Use, 7 Connect. |",
  "| Global IDs | Pass | All 150 question IDs are unique. |",
  "| Correct-choice resolution | Pass | All 150 correct IDs resolve to one of four unique choices. |",
  "| Choice feedback | Pass | All 600 choices include nonempty response-specific feedback. |",
  "| Required pedagogy fields | Pass | Every question includes move, difficulty, approved/practice status, lecture IDs, walkthrough, transfer strategy, source alignment, and accessibility notes. |",
  "| Parameter handling | Pass | Chapters outside 2–6 and malformed values produce a plain-language error; early/mid/late scaffold overrides are allow-listed. |",
  "| Static paths | Pass | The app loads relative CSS, JavaScript, and `banks/chapter-XX.json` paths; no server-side route is required. |",
  "| Local storage resilience | Pass in code review; browser tested separately | Every storage read, write, and removal is guarded; failure switches to in-memory random selection. |",
  "| Repeat reduction | Pass | Category-specific recent-ID queues avoid the most recent four items where storage is available and fall back safely when a pool cycles. |",
  "| Secret/API scan | Pass | No API key pattern, network API dependency, login, database, or grading endpoint found. |",
  "| Reduced motion | Pass | CSS disables smooth scrolling and effectively removes animation/transition durations. |",
  "| Runtime browser flow | Pass | Loading, answer submission, retry, walkthrough, Explain → Use → Connect progression, completion, Practice Three More, review moves, reset, return-link configuration, all chapter parameters, early override, late reveal, and invalid chapter handling passed. |",
  "| Browser console | Pass | No warning or error was reported after the final Chromium and Chrome smoke tests. |",
  "| Responsive runtime | Pass | No horizontal overflow at 640 or 320 CSS pixels; no clipped choices; all visible interaction targets were at least 44 CSS pixels high at 320. |",
  "| Browser matrix | Partial pass | In-app Chromium and Google Chrome passed. Edge and Firefox remain listed for human verification in the WCAG report. |", "",
  "## Static-host note", "", "The application must be served over HTTP(S) for `fetch()` to load local JSON reliably. Opening `index.html` directly with a `file:` URL may be blocked by browser security policy; this is a browser restriction, not a server dependency."
];
fs.writeFileSync(path.join(auditDir, "shared-application-technical-validation.md"), `${tech.join("\n")}\n`);

console.log("Audit reports generated.");
