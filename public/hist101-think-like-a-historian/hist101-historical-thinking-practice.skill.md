---
name: hist101-historical-thinking-practice
description: >
  Generate accessible, student-facing "Think Like a Historian" practice pages for HIST 101.
  Produces a reusable static HTML/CSS/JavaScript application plus chapter-specific JSON question banks
  that present three ungraded, untimed questions per session in the sequence Explain → Use → Connect.
  Each question provides immediate response-specific feedback, an expandable reasoning walkthrough,
  and a transferable historical-thinking strategy. ALWAYS use when Chief asks to build, revise, audit,
  or expand HIST 101 historical-thinking practice pages, guided exam preparation pages, practice-only
  question banks, or Cloudflare-hosted micro-practice tools. This skill is separate from the secure
  exam-bank generator and MUST preserve a strict practice-only / secure-exam boundary. Every generated
  student-facing page must pass mandatory historical-accuracy, cognitive-load, technical, and WCAG 2.2
  Level AA audits before delivery.
---

# HIST 101 Historical Thinking Practice Page Generator

Create a low-pressure, student-facing practice system that teaches first-year students how to reason
through HIST 101 exam-style questions.

The product is not a graded quiz, not a secure exam, and not a conversational AI tutor.

It is a static, browser-based guided-practice experience built from:

- HTML;
- CSS;
- JavaScript;
- chapter-specific JSON question banks.

No AI API call is required for normal operation.

The governing instructional principle is:

> **Practice should teach the reasoning process without becoming another assignment.**

The student sees only three questions at a time:

> **Explain → Use → Connect**

The student receives immediate, accurate, prewritten feedback and may choose to practice three more.

---

# 1. COURSE CONTEXT

HIST 101 Y1 is a hybrid U.S. History to 1877 course for a mixed first-year population that may include:

- capable first-year college students;
- advanced high-school students;
- students with weak academic preparation;
- students who completed the reading carefully;
- students who arrive with incomplete understanding of the reading.

The course separates instructional functions:

- textbook reading and chapter quizzes provide factual breadth;
- lecture provides structure, explanation, narrative, interpretation, and historical thinking;
- classroom exams assess independent historical reasoning;
- practice pages provide guided rehearsal before those exams.

The practice system must therefore help students recognize and perform the historical-thinking moves
used in lecture and on exams.

---

# 2. PURPOSE AND BOUNDARY

## This skill produces

1. A reusable static practice application:
   - `index.html`
   - `practice.css`
   - `practice.js`

2. One or more chapter question banks:
   - `banks/chapter-02.json`
   - `banks/chapter-03.json`
   - and so forth

3. A human-readable review copy of the question bank.

4. Audit reports:
   - historical accuracy and source alignment;
   - cognitive load and first-year readability;
   - WCAG 2.2 Level AA;
   - technical validation.

## This skill does not produce

- secure exam questions;
- Canvas exam banks;
- QTI exam packages;
- live AI-generated tutoring;
- open-ended chatbot responses;
- high-stakes assessment;
- grades, scores, leaderboards, badges, streaks, countdowns, or timers.

The practice bank and secure exam bank must remain separate.

Practice items may assess the same concepts and reasoning patterns as exam items, but they must not
duplicate secure exam stems, choices, wording, or exact scenarios.

---

# 3. APPROVED STUDENT EXPERIENCE

Treat these defaults as settled unless Chief explicitly changes them.

## Student-facing title

> **Think Like a Historian**

Chapter pages may use:

> **Think Like a Historian: Chapter 2**

## Session length

Each session presents exactly three questions:

1. **Explain**
2. **Use**
3. **Connect**

## Assessment climate

The experience is:

- ungraded;
- untimed;
- low pressure;
- retry-friendly;
- focused on reasoning rather than scoring.

Do not display:

- a percentage;
- a letter grade;
- a points total;
- a red failure screen;
- a countdown;
- a streak;
- a leaderboard;
- punitive language.

## Session actions

The interface should support:

- `Check My Reasoning`
- `Try Again`
- `Continue`
- `Walk Me Through It`
- `Practice Three More`
- `Review the Five Historical-Thinking Moves`
- `Return to Chapter Module` when a destination URL is supplied
- `Reset Practice` when useful

## Feedback rhythm

Immediate feedback must be concise.

Detailed reasoning belongs behind an expandable `Walk Me Through It` control.

The student should be able to keep the question and answer choices visible while reading feedback.

---

# 4. HISTORICAL-THINKING FRAMEWORK

The practice system uses the same five moves introduced in the course:

## Cause

> Why did this happen?

Students distinguish:

- underlying cause;
- immediate trigger;
- background condition;
- consequence;
- coincidence.

## Comparison

> How is this similar or different?

Students identify:

- meaningful similarities;
- meaningful differences;
- appropriate bases of comparison;
- limits of a simple contrast.

## Context

> What larger process shaped it?

Students connect an event or claim to:

- political structures;
- imperial systems;
- economic pressures;
- social relationships;
- geography;
- chronology;
- broader cultural or ideological developments.

## Consequence

> What changed because of it?

Students identify:

- immediate effects;
- long-term effects;
- intended consequences;
- unintended consequences;
- continuity amid change.

## Evidence

> Which evidence best supports the explanation?

Students distinguish:

- relevant from irrelevant evidence;
- strong from weak evidence;
- primary evidence from assertion;
- evidence from interpretation;
- evidence that supports from evidence that merely accompanies a claim.

---

# 5. THE THREE PRACTICE CATEGORIES

## Explain

Purpose:

> Help students identify and defend the strongest historical explanation.

Explain questions normally assess:

- cause;
- comparison;
- context;
- consequence;
- evidence;
- interpretation;
- strongest explanation;
- best-supported claim;
- cause versus trigger;
- significance.

Examples of stems:

- Which factor best explains...?
- Which comparison most clearly shows...?
- Which broader development provides the best context for...?
- Which consequence was most significant because...?
- Which evidence best supports the claim that...?

## Use

Purpose:

> Ask students to apply a learned historical model to a new but bounded case.

Use questions normally assess:

- actor perspective;
- likely political choice;
- policy application;
- regional application;
- prediction grounded in a taught pattern;
- inference from a known framework;
- application of a causal model.

Examples of stems:

- Which actor would most likely support...?
- Which colony or region best fits this description?
- Based on the lecture model, what would most likely happen next?
- Which policy would most likely intensify this conflict?
- Which earlier argument is being applied here?

Do not create free-floating counterfactual speculation. The answer must follow from a framework students
were taught.

## Connect

Purpose:

> Help students synthesize multiple lectures, cases, or themes within a chapter.

Connect questions normally assess:

- continuity and change;
- links between two lectures;
- recurring causal patterns;
- comparison across cases;
- development across time;
- chapter-level argument;
- one lecture creating conditions for another.

Examples of stems:

- Which development best connects...?
- Which pattern appears in both...?
- How did the first development create conditions for the second?
- Which claim is supported by evidence from two lectures?
- Which pair best demonstrates continuity or change?

For a chapter practice page, Connect questions should usually remain within the chapter. Cumulative
cross-chapter synthesis belongs primarily to secure exams.

---

# 6. SOURCE HIERARCHY

Use sources in this order.

1. Approved professor background essay
   - scholarly authority;
   - factual and interpretive foundation;
   - defines acceptable nuance and uncertainty.

2. Approved Reveal lecture deck
   - determines what students actually encountered in class;
   - identifies visible frameworks, examples, and emphases.

3. Historian's Notebook or Study Buddy notes
   - indicates what students were expected to retain and review.

4. Assigned textbook chapter
   - supports factual verification and necessary context;
   - does not automatically determine classroom emphasis.

5. Assigned documentary, primary source, workshop, or activity
   - may support questions when it was part of the student learning experience.

## Source-alignment rule

Every question must assess content students had a fair opportunity to learn.

The practice system may simplify language, but it may not introduce a substantive interpretation that
students did not encounter in approved course materials.

Before finalizing a question, ask:

> **Could I identify the exact lecture, source, activity, or reading that taught the reasoning needed here?**

If not, revise or remove the item.

---

# 7. QUESTION-BANK DESIGN

## Pilot bank

For an initial prototype, generate:

- 5 Explain questions;
- 5 Use questions;
- 5 Connect questions.

Total: 15 questions.

## Full chapter bank

A mature chapter bank may contain approximately:

- 30–40 Explain questions;
- 15–20 Use questions;
- 10–15 Connect questions.

Total: approximately 55–75 practice-only items.

These are targets, not quotas. Stop before quality declines.

## Session draw

Each session randomly selects:

- 1 Explain question;
- 1 Use question;
- 1 Connect question.

Do not repeat a question within the same session.

When the student selects `Practice Three More`, draw a new set. Where browser storage is enabled,
prefer questions the student has not recently seen, but do not create a prominent progress score.

## Question families

Build related but non-identical item families around important lecture concepts.

A single concept may be practiced through:

- strongest cause;
- cause versus trigger;
- evidence for the cause;
- application to another case;
- comparison with a second region;
- consequence;
- synthesis across lectures.

Do not pad the bank with trivial paraphrases.

---

# 8. REQUIRED QUESTION OBJECT SCHEMA

Each JSON question must use a stable, machine-readable structure.

Recommended schema:

```json
{
  "id": "ch02-explain-001",
  "chapter": 2,
  "lectureIds": ["ch02-lec01"],
  "category": "explain",
  "thinkingMove": "cause",
  "difficulty": "foundational",
  "status": "approved",
  "practiceOnly": true,
  "stem": "Which factor best explains why Virginia expanded rapidly after tobacco became profitable?",
  "choices": [
    {
      "id": "a",
      "text": "Virginia discovered large deposits of gold.",
      "feedback": "This was an early hope, but Virginia did not discover a profitable gold supply."
    },
    {
      "id": "b",
      "text": "Tobacco increased demand for land and labor.",
      "feedback": "This is the strongest answer because it explains a chain of expansion, labor demand, and conflict."
    },
    {
      "id": "c",
      "text": "European migration to Virginia declined sharply.",
      "feedback": "Migration did not explain the expansion. The colony's profitability encouraged further migration."
    },
    {
      "id": "d",
      "text": "Conflict over Native land ended.",
      "feedback": "Expansion intensified conflict over land rather than ending it."
    }
  ],
  "correctChoiceId": "b",
  "conciseCorrectFeedback": "Exactly. Tobacco created sustained demand for land and labor, which drove expansion.",
  "conciseIncorrectFeedback": "Not quite. Look for the answer that explains the largest chain of consequences.",
  "walkthrough": [
    "Identify the outcome the question asks you to explain.",
    "Separate an underlying cause from an immediate event or false detail.",
    "Choose the answer that accounts for the broadest pattern.",
    "Tobacco explains profit, land demand, labor demand, migration, and conflict."
  ],
  "transferStrategy": "For a causation question, choose the answer that explains the most evidence with the fewest exceptions.",
  "sourceAlignment": {
    "primarySource": "Approved Chapter 2 lecture materials",
    "lectureClaim": "Tobacco made Virginia profitable and drove demand for land and labor.",
    "notes": "Practice-only parallel item; do not reuse as a secure exam stem."
  },
  "accessibilityNotes": "No image required."
}
```

## Required fields

Every item must include:

- stable `id`;
- `chapter`;
- one or more `lectureIds`;
- `category`;
- `thinkingMove`;
- `difficulty`;
- `status`;
- `practiceOnly: true`;
- `stem`;
- exactly four `choices`;
- response-specific feedback for every choice;
- `correctChoiceId`;
- concise correct feedback;
- concise incorrect feedback;
- 3–5 walkthrough steps;
- transferable strategy;
- source alignment;
- accessibility notes.

## Optional fields

Use where needed:

- `image`;
- `imageAlt`;
- `imageCaption`;
- `longDescription`;
- `primarySourceExcerpt`;
- `primarySourceAttribution`;
- `hint`;
- `moduleReturnUrl`;
- `relatedQuestionFamily`;
- `revisionNotes`.

---

# 9. QUESTION-WRITING STANDARDS

## One clearly best answer

Each question must have one answer that is historically and logically stronger than the alternatives.

Do not rely on tiny wording tricks.

## Plausible distractors

Distractors should represent:

- a common misconception;
- a true but irrelevant statement;
- a trigger mistaken for a cause;
- a consequence mistaken for a cause;
- an actor or region mismatch;
- a chronology error;
- an overgeneralization;
- an explanation that accounts for only part of the evidence.

Do not use absurd distractors merely to make the item easy.

## Avoid clueing

Do not make the correct answer obvious through:

- greater length;
- more precise wording;
- grammar mismatch;
- repeated wording from the stem;
- absolute language in distractors only;
- answer-position patterns.

## Avoid trick questions

The challenge should come from historical reasoning, not ambiguity or deception.

## First-year readability

Use direct language.

Prefer one intellectual task per question.

Avoid:

- nested negatives;
- double negatives;
- unnecessarily long scenarios;
- excessive proper names;
- obscure terminology not needed for the reasoning;
- dense quotation blocks;
- answer choices containing multiple independent claims.

## Historical fairness

A student who understands the lecture argument should be able to answer.

A student should not need outside research, hidden assumptions, or specialist knowledge.

---

# 10. FEEDBACK DESIGN

## Immediate feedback

After selection, give a concise response.

Correct example:

> **Exactly.** This answer identifies the underlying pressure that explains the larger pattern.

Incorrect example:

> **Not quite.** This choice identifies an immediate trigger, but the question asks for the broader cause.

Do not use:

- “Wrong.”
- “You failed.”
- “Obviously.”
- red-only failure states.

## Response-specific feedback

Every choice must have its own explanation.

The feedback should explain why the choice is:

- strongest;
- partly true but incomplete;
- historically incorrect;
- irrelevant;
- reversed;
- too narrow;
- too broad;
- misplaced in time or region.

## Walk Me Through It

Provide 3–5 concise reasoning steps.

A good walkthrough:

1. Identify the thinking move.
2. Identify the outcome, comparison, or claim.
3. Eliminate answers that answer a different question.
4. Compare the remaining explanations against the evidence.
5. State why the strongest answer explains more.

Do not turn walkthroughs into mini-lectures.

## Transfer strategy

End with one reusable strategy.

Examples:

- For causation, distinguish the underlying pressure from the immediate trigger.
- For comparison, use the same basis of comparison for both cases.
- For evidence, choose the source that directly supports the claim.
- For context, identify the larger process that made the event possible.
- For consequence, separate what happened immediately from what changed over time.

---

# 11. SCAFFOLDING ACROSS THE SEMESTER

The application should support configurable scaffolding levels.

## Early-course mode

- display the thinking move;
- allow an optional hint before checking;
- provide detailed response-specific feedback;
- permit immediate retry;
- identify cause versus trigger explicitly.

## Mid-course mode

- display the thinking move;
- omit pre-answer hints by default;
- provide concise feedback first;
- keep full walkthrough available.

## Late-course mode

- optionally hide the thinking-move label until after submission;
- shorten immediate feedback;
- require the student to infer the type of reasoning;
- keep full walkthrough available on demand.

Scaffolding should decrease gradually, not disappear abruptly.

---

# 12. STATIC WEB APPLICATION REQUIREMENTS

Recommended file structure:

```text
historical-thinking/
├── index.html
├── practice.css
├── practice.js
└── banks/
    ├── chapter-02.json
    ├── chapter-03.json
    ├── chapter-04.json
    ├── chapter-05.json
    └── chapter-06.json
```

## Chapter selection

Load the chapter from a URL parameter:

```text
?chapter=2
```

Optional parameters may include:

```text
?chapter=2&scaffold=early
```

## No API dependency

The app must function without:

- an AI API;
- a database;
- student authentication;
- server-side grading.

Do not place secret keys in HTML or JavaScript.

## Local storage

Local browser storage may be used to:

- reduce immediate repetition;
- remember recently seen question IDs;
- preserve accessibility preferences;
- remember the selected scaffolding mode when appropriate.

Do not display intrusive surveillance-like tracking.

Do not imply that practice activity is sent to the instructor unless such reporting actually exists.

## Error handling

If a question bank fails to load:

- show a plain-language error;
- preserve page structure;
- provide a retry button;
- avoid exposing stack traces;
- do not falsely tell the student they completed practice.

If a malformed question is detected:

- skip it;
- log a clear developer-facing warning;
- continue only when three valid category items remain.

---

# 13. STUDENT-FACING PAGE STRUCTURE

Use semantic landmarks.

Recommended structure:

```html
<header>
  <h1>Think Like a Historian</h1>
  <p>Chapter 2</p>
</header>

<main id="main-content">
  <section aria-labelledby="practice-intro-heading">
    ...
  </section>

  <section aria-labelledby="question-heading">
    <form>
      <fieldset>
        <legend>...</legend>
        ...
      </fieldset>
    </form>
  </section>

  <section id="feedback-region" aria-live="polite" aria-atomic="true">
    ...
  </section>
</main>

<footer>
  ...
</footer>
```

## Introductory copy

Use reassuring language such as:

> You will see three questions. There is no grade and no timer. The goal is to practice how historians explain, apply, and connect evidence.

## Framework display

Show:

> **Explain → Use → Connect**

Do not overload the opening with the full five-move framework unless it is expandable.

## One question at a time

Present one question at a time to reduce cognitive load.

Keep controls in a stable location.

Do not unexpectedly scroll or move focus.

---

# 14. WCAG 2.2 LEVEL AA — MANDATORY DELIVERY GATE

Every generated student-facing page must undergo a WCAG 2.2 Level AA audit.

Do not claim that automated testing alone proves compliance.

The audit must combine code inspection, automated checks where available, and manual review.

## A. Document structure

Verify:

- [ ] `<html lang="en">` or appropriate language.
- [ ] Unique, descriptive `<title>`.
- [ ] One clear `<h1>`.
- [ ] Logical heading hierarchy.
- [ ] Semantic `header`, `main`, and `footer`.
- [ ] A skip link to main content.
- [ ] Unique IDs.
- [ ] Valid HTML.
- [ ] No heading used merely for visual styling.

## B. Forms and controls

Verify:

- [ ] Real buttons are used for actions.
- [ ] Radio inputs have explicit labels.
- [ ] Each question uses `fieldset` and `legend`.
- [ ] Disabled states are communicated programmatically.
- [ ] Error and feedback text is associated with the relevant question.
- [ ] No interaction depends on hover alone.
- [ ] Target sizes meet WCAG 2.2 expectations where practical.

## C. Keyboard access

Verify:

- [ ] All functionality works with keyboard only.
- [ ] Logical tab order.
- [ ] Strong visible focus indicator.
- [ ] No keyboard trap.
- [ ] Expand/collapse controls work with Enter and Space.
- [ ] Focus does not jump unexpectedly.
- [ ] Focus is managed after loading a new question.
- [ ] Skip link works.
- [ ] Modal dialogs are avoided unless genuinely necessary.

## D. Dynamic feedback

Verify:

- [ ] Feedback uses an appropriate `aria-live` region.
- [ ] Correct/incorrect status is announced in text.
- [ ] Feedback is not announced repeatedly without user action.
- [ ] `aria-expanded` reflects walkthrough state.
- [ ] Question position is programmatically available.
- [ ] Loading and error states are announced.

## E. Visual accessibility

Verify:

- [ ] Text and control contrast meets Level AA.
- [ ] Focus indicators meet contrast requirements.
- [ ] Meaning is not conveyed by color alone.
- [ ] Correct and incorrect states include text and icons where useful.
- [ ] Text can resize to 200 percent without loss of content or functionality.
- [ ] Content reflows at 320 CSS pixels without two-dimensional scrolling, except where inherently necessary.
- [ ] No clipped answer choices.
- [ ] Adequate spacing between controls.
- [ ] Links are distinguishable without relying solely on color.

## F. Cognitive accessibility

Verify:

- [ ] Instructions are concise and concrete.
- [ ] Control labels remain consistent.
- [ ] One question appears at a time.
- [ ] No timer.
- [ ] No surprise navigation.
- [ ] Immediate feedback is concise.
- [ ] Detailed feedback is optional.
- [ ] Layout remains stable when feedback appears.
- [ ] Students can review the question while reading feedback.
- [ ] No unnecessary choices or decorative distractions.

## G. Motion and flashing

Verify:

- [ ] `prefers-reduced-motion` is respected.
- [ ] No flashing content.
- [ ] No essential information depends on animation.
- [ ] No autoplay audio or video.
- [ ] Transitions do not interfere with focus.

## H. Images and source material

Verify:

- [ ] Informative images have meaningful alt text.
- [ ] Decorative images use empty alt text.
- [ ] Image-based evidence has equivalent textual context.
- [ ] Complex maps or diagrams have long descriptions when needed.
- [ ] Captions identify interpretive significance.
- [ ] Primary-source excerpts remain readable and properly attributed.

## I. Manual test requirements

At minimum perform:

- [ ] Keyboard-only test.
- [ ] 200 percent zoom test.
- [ ] 320 CSS pixel reflow test.
- [ ] Contrast review.
- [ ] Screen-reader spot check where practical.
- [ ] Browser test in current Chrome and Edge; Firefox where practical.
- [ ] Mobile-width test.

## WCAG reporting

Produce a short audit report listing:

- criterion tested;
- result: pass, fail, or needs manual verification;
- evidence;
- remediation performed;
- any unresolved limitation.

Do not state “WCAG compliant” when unresolved failures remain.

---

# 15. COGNITIVE-LOAD AUDIT — MANDATORY

Before delivery verify:

- [ ] Only one question is presented at a time.
- [ ] Each session contains only three questions.
- [ ] Stems are concise.
- [ ] Answer choices are parallel and readable.
- [ ] Immediate feedback is shorter than the walkthrough.
- [ ] The walkthrough uses numbered steps.
- [ ] The page does not visually emphasize scoring.
- [ ] No timer, streak, leaderboard, or badge appears.
- [ ] The student can stop after three questions without penalty.
- [ ] `Practice Three More` is optional.
- [ ] Technical instructions do not compete with historical reasoning.
- [ ] Historical terminology is defined when needed.
- [ ] The page avoids unnecessary animation and decorative clutter.
- [ ] Early-course scaffolding is sufficient for novice students.
- [ ] Later-course reduction of scaffolding is gradual.

---

# 16. HISTORICAL-ACCURACY AND SOURCE-FIDELITY AUDIT — MANDATORY

Before delivery verify:

- [ ] Every item is licensed by an approved course source.
- [ ] Every correct answer is historically accurate.
- [ ] Every distractor is accurately described in feedback.
- [ ] No quotation is reconstructed from memory.
- [ ] Dates, names, places, and numerical claims are checked.
- [ ] The question assesses what students were taught.
- [ ] The item does not depend on outside research.
- [ ] The practice item does not duplicate a secure exam item.
- [ ] The explanation does not overstate certainty.
- [ ] Competing interpretations are represented fairly when relevant.
- [ ] The question category matches the actual cognitive task.
- [ ] The identified historical-thinking move is correct.
- [ ] Connect questions genuinely integrate more than one lecture idea.

---

# 17. ITEM-QUALITY AUDIT — MANDATORY

For each item verify:

- [ ] One clearly best answer.
- [ ] Four choices.
- [ ] Plausible distractors.
- [ ] No grammatical clue.
- [ ] No answer-length clue.
- [ ] No accidental repetition clue.
- [ ] No double negative.
- [ ] No “all of the above” or “none of the above” unless explicitly justified.
- [ ] No trick wording.
- [ ] No irrelevant specialist knowledge.
- [ ] Response-specific feedback for every choice.
- [ ] Walkthrough teaches a transferable reasoning process.
- [ ] Feedback is respectful and non-punitive.
- [ ] Language is appropriate for first-year students.

---

# 18. TECHNICAL VALIDATION — MANDATORY

Validate:

- [ ] JSON parses successfully.
- [ ] All question IDs are unique.
- [ ] Every category has enough valid items for a three-question session.
- [ ] Every `correctChoiceId` resolves to a real choice.
- [ ] Every choice contains feedback.
- [ ] All referenced image paths exist or fail gracefully.
- [ ] Chapter URL parameters are handled safely.
- [ ] Invalid chapter parameters produce a helpful message.
- [ ] No secret or API key appears in source.
- [ ] JavaScript errors do not prevent basic page access.
- [ ] Static hosting paths work under Cloudflare.
- [ ] Browser refresh does not corrupt the bank.
- [ ] `Practice Three More` does not repeat an item within the same session.
- [ ] Reduced-motion behavior works.
- [ ] The page remains usable when local storage is blocked.

---

# 19. OUTPUT MODES

## Mode A — Skill-guided prototype

Generate:

- reusable app files;
- one 15-question pilot bank;
- readable review document;
- all audit reports.

Use this mode before scaling.

## Mode B — Full chapter practice bank

Generate:

- chapter JSON bank;
- readable review copy;
- source-alignment map;
- question-quality audit;
- WCAG audit for the page;
- technical validation.

## Mode C — Practice series

Generate one bank for every chapter in an exam unit while preserving:

- consistent schema;
- increasing difficulty;
- gradual scaffold reduction;
- no duplication of secure exam items.

## Mode D — Audit existing practice page

Review an existing HTML/CSS/JavaScript page and bank for:

- historical accuracy;
- question quality;
- cognitive load;
- technical function;
- WCAG 2.2 AA.

Do not silently rewrite content when the user requests an audit only.

---

# 20. BUILD WORKFLOW

## Step 1 — Read approved course sources

Extract:

- lecture essential questions;
- central arguments;
- five historical-thinking opportunities;
- recurring misconceptions;
- possible application scenarios;
- cross-lecture connections;
- material students actually encountered.

## Step 2 — Build a question blueprint

For each lecture, identify possible items by:

- Explain;
- Use;
- Connect;
- thinking move;
- difficulty;
- source alignment.

Do not write hundreds of items before confirming the blueprint.

## Step 3 — Generate a pilot bank

Default pilot:

- 5 Explain;
- 5 Use;
- 5 Connect.

## Step 4 — Build the static app

Use semantic, accessible HTML and keep content separate from the question JSON.

## Step 5 — Run historical and item audits

Correct weak, ambiguous, or unsupported questions.

## Step 6 — Run the cognitive-load audit

Shorten stems and feedback where needed.

## Step 7 — Run WCAG 2.2 AA audit

Fix all resolvable failures before delivery.

## Step 8 — Run technical tests

Validate JSON, URLs, keyboard interaction, reflow, and browser behavior.

## Step 9 — Deliver prototype for review

Do not immediately scale to 55–75 items until the interaction model and feedback style are approved.

## Step 10 — Scale the bank

After approval, build the mature chapter bank and then subsequent chapters.

---

# 21. DELIVERY PACKAGE

For a full generated practice page, deliver:

```text
hist101-think-like-a-historian/
├── index.html
├── practice.css
├── practice.js
├── banks/
│   └── chapter-02.json
├── review/
│   └── chapter-02-question-review.md
└── audits/
    ├── chapter-02-source-alignment.md
    ├── chapter-02-cognitive-load-audit.md
    ├── chapter-02-wcag-2.2-aa-audit.md
    └── chapter-02-technical-validation.md
```

When requested, also provide a zip archive suitable for local testing or Cloudflare deployment.

---

# 22. NONNEGOTIABLE RULES

1. Practice-only and secure exam items remain separate.
2. No AI API is required for the student-facing page.
3. Never expose API keys in public code.
4. Three questions per session.
5. Explain → Use → Connect.
6. No grade, score pressure, timer, streak, badge, or leaderboard.
7. Immediate feedback must teach, not merely mark right or wrong.
8. Every choice receives response-specific feedback.
9. Detailed reasoning is expandable.
10. Every student-facing page receives a WCAG 2.2 Level AA audit.
11. Automated accessibility testing alone is insufficient.
12. Historical accuracy takes priority over question quantity.
13. Stop expanding the bank before item quality declines.
14. The practice page must not become another required quiz in disguise.
15. The final experience should help a novice think more like a historian.
