---
name: hist101-lecture-to-deck
description: >
  Convert an approved HIST 101 lecture source package into one classroom-ready Reveal.js deck for a 35-minute hybrid lecture, plus an Independent Study appendix for the online hour. The deck preserves the established HIST 101 visual house style while allowing the historical argument to determine the deck's narrative architecture. ALWAYS use when Chief asks to build, revise, or rebuild a HIST 101 Reveal deck, turn a HIST 101 lecture outline or background essay into slides, or asks for a 35-minute Reveal deck on a U.S. History to 1877 topic. The Chapter 2 reference deck defines the visual system, NOT the slide sequence. The lecture outline is the architectural specification; the background essay is the scholarly specification. Presenter notes remain empty except for the title-slide image description until a separate Study Buddy notes pass. Ends with mandatory source-fidelity, architecture-fit, accessibility, and technical audits.
---

# HIST 101 Lecture Source → Reveal.js Deck

Build one **35-minute classroom Reveal.js deck with an Independent Study appendix** for HIST 101.

The deck is a student-facing visual argument. It should not duplicate the textbook, reproduce the background essay, or force every lecture into the same sequence of slide types.

The governing hierarchy is:

> **Historical argument → narrative architecture → slide forms and pacing**
>
> while
>
> **visual house style + accessibility remain consistent across the course.**

The simplest statement of the rule is:

> **Same visual language. Different historical storytelling.**

And the most important distinction in this skill is:

> **The reference deck is the visual specification. The lecture outline is the architectural specification.**

The professor's full preparation lives in the background essay. The deck puts on screen only what students need in order to **see, compare, organize, interpret, predict, and remember**.

---

# 1. COURSE CONTEXT

HIST 101 Y1 is a hybrid U.S. History to 1877 course at Richland Community College.

The normal classroom rhythm is four 35-minute lecture blocks per chapter, delivered as two blocks during each 75-minute Tuesday/Thursday meeting. The chapter reading, reading support, and quiz provide factual breadth. Classroom lecture provides structure, explanation, narrative, interpretation, and historical thinking.

The core course principle is:

> **The textbook provides breadth. Lecture provides structure, explanation, narrative, and interpretation.**

Design for a mixed first-year audience that may include:

- capable first-year college students;
- advanced high-school students;
- students with weak academic preparation;
- students who completed the reading carefully;
- students who arrive with incomplete understanding of the reading.

Do not make the history intellectually simplistic.

Make its structure visible.

---

# 2. SOURCE HIERARCHY

A deck may be built from one or more of the following:

1. **Approved detailed lecture outline or roadmap** — determines the lecture's historical problem, selected content, sequence, and natural narrative architecture.
2. **Approved background essay** — preferred scholarly authority for facts, context, historiography, quotations, and interpretive nuance.
3. **Assigned textbook chapter or primary-source material** — supports factual verification and visual/source selection.
4. **Existing HIST 101 decks** — visual references only, unless the user specifically asks to preserve a structural feature.

When both an outline and background essay exist:

- the **outline controls architecture and classroom emphasis**;
- the **background essay controls scholarly substance**.

Do not allow the background essay's section headings to automatically become slide sections. It contains more material than the classroom should display.

When only an approved detailed outline exists, the deck may be built from it if the user directs you to proceed. Verify unfamiliar or consequential claims against the chapter source or reliable scholarship rather than inventing detail.

Do not silently contradict an approved source. If new research materially changes the interpretation, flag the issue rather than rewriting the lecture behind the instructor's back.

---

# 3. THE REFERENCE DECK: VISUAL SPECIFICATION ONLY

`assets/reference-deck-ch2-lec2.html` is the approved visual reference.

Read it before building.

Reuse or closely reproduce its:

- Reveal.js version and configuration;
- 1920×1080 presentation geometry;
- typography;
- color palette;
- global navigation and slide counter;
- pop-up interaction behavior;
- keyboard accessibility;
- reduced-motion handling;
- focus states;
- general scale of headings and body text;
- callout, comparison, image, quotation, and activity components;
- image-caption style;
- accessible semantic structure.

## What the reference deck does NOT specify

Do **not** treat the reference deck as a slide-order template.

Do not copy its sequence merely because it worked once.

The following are **optional tools, not mandatory architecture**:

- a roadmap slide;
- three formal sections;
- numbered section dividers;
- two or three forest-green Pause & Reflect slides;
- a fixed number of activity slides;
- a fixed “Answering the Question” slide;
- a separate “Point Worth Keeping” slide;
- a separate bridge slide;
- a fixed classroom slide count;
- four Independent Study topics.

Use any of these when they help the particular lecture. Omit or reshape them when they do not.

**Never force the lecture outline into the Chapter 2 Lecture 2 sequence.**

---

# 4. ARCHITECTURE DECISION — MANDATORY BEFORE HTML

Before writing slides, determine the **historical logic that gives this lecture momentum**.

Do not begin by deciding how many sections or activity slides the deck will contain.

Begin by asking:

1. What is the essential historical problem?
2. What does the student need to wonder about, notice, predict, compare, or reconsider?
3. What is the lecture's most natural source of momentum?
4. What should students believe or understand differently at the end than at the beginning?
5. What experience should this lecture give students that the adjacent lecture did not?

Then write a one-paragraph internal **Architecture Decision** before building.

It should state:

- the central question;
- the chosen narrative form;
- why that form fits the outline;
- where the major intellectual turns occur;
- where student processing naturally belongs;
- how the lecture resolves its opening problem.

The Architecture Decision is usually not a separate deliverable, but its logic must be visible in the finished deck.

---

# 5. POSSIBLE NARRATIVE ARCHITECTURES

These are **possibilities, not templates**. Do not select one merely to manufacture variety. Identify the form already latent in the historical argument.

## Mystery / investigation

Begin with an unexplained event, contradiction, pattern, or simultaneity. Reveal evidence gradually until the opening puzzle can be explained.

Useful when the outline asks “why did these things happen together?” or when students begin with a misleading assumption.

Possible motion:

> unexplained pattern → evidence → first case → reversal → second case → comparison → explanation

## Reverse chronology / reconstruct the disaster

Begin with a dramatic outcome and work backward to understand how people reached it.

Useful for rebellion, collapse, political crisis, or war.

Possible motion:

> shocking outcome → what had to be true for this to happen? → reconstruct pressures → decisions → escalation → return to opening image

## Unfolding narrative

Follow a coherent story whose interpretation changes as consequences accumulate.

Useful when suspense, choice, contingency, and turning points matter more than categorical comparison.

Possible motion:

> situation → decision → consequence → new problem → reversal → consequence → interpretation

## Comparison

Place two or more societies, empires, strategies, regions, or ideas beside one another and progressively explain differences.

Useful when the lecture is fundamentally comparative rather than chronological.

Possible motion:

> common problem → response A → response B → response C → visible comparison → what explains the difference?

## Competing explanations

Present several plausible answers to the same question and test them against evidence.

Useful for causal or historiographical problems.

Possible motion:

> hypothesis A / B / C → evidence → complication → revised explanation → synthesis

## Transformation / before-and-after

Establish a clear “before,” trace mechanisms of change, and reveal an “after” that requires explanation.

Useful for institutional, demographic, economic, ideological, or social change.

Possible motion:

> before → pressure → mechanism → turning point → after → what changed and what did not?

## Primary-source centered

Build the lecture around one or several documents, maps, images, artifacts, or quotations whose interpretation unlocks the larger historical problem.

Useful when source reading itself is part of the lecture's argument.

Possible motion:

> encounter source → observe → infer → contextualize → complicate → return to source with deeper reading

## Spatial / geographic

Let a map, route, frontier, river system, settlement pattern, or changing territorial boundary organize the deck.

Useful when geography explains power, migration, warfare, trade, or imperial strategy.

Possible motion:

> orient on map → follow movement → reveal constraints → compare spaces → reinterpret political claims

## Escalating conflict

Follow a sequence in which each attempted solution creates another problem.

Useful for constitutional disputes, imperial regulation, war, political confrontation, or institutional crisis.

Possible motion:

> problem → attempted solution → resistance → stronger solution → greater resistance → crisis → settlement or unresolved tension

## Case study → larger pattern

Explore one event deeply, then use it to reveal a wider process.

Useful when one memorable story can carry a broader historical model.

Possible motion:

> case → causes → choices → consequences → zoom out → broader pattern

## Hybrid forms

A lecture may combine forms, such as:

- mystery + comparison;
- reverse chronology + political thriller;
- map-centered comparison;
- narrative + primary-source interpretation.

Use hybrid forms only when the outline naturally supports them.

---

# 6. REQUIRED FUNCTIONS, NOT REQUIRED SLIDES

Every classroom deck must perform certain intellectual functions. It does **not** have to perform them through predetermined slide types.

## Function A — Establish a problem

Students should quickly understand what historical problem they are trying to solve.

This may happen through:

- a direct question;
- a contradiction;
- a dramatic outcome;
- a map;
- a quotation;
- a startling image;
- a comparison;
- a statistic;
- a sequence of dates;
- a common misconception.

A formal Essential Question slide is optional if the problem is already unmistakable.

## Function B — Make the argument visible

Students need a visible organizing structure.

This may take the form of:

- a roadmap;
- a causal chain;
- recurring comparison;
- an evolving map;
- a repeated question;
- a chronology organized around interpretive turning points;
- competing hypotheses;
- a before/after model;
- a recurring visual motif.

A roadmap slide is optional.

## Function C — Change what students are mentally doing

A 35-minute lecture should not be uninterrupted listening.

Student processing can include:

- prediction;
- interpretation;
- comparison;
- judgment;
- retrieval;
- ranking;
- application;
- source reading;
- one-sentence writing;
- quick paired discussion;
- a show-of-hands or vote that the lecture then uses.

A 35-minute lecture will **normally include two meaningful shifts in cognitive mode**, roughly consistent with 10–15 minute cognitive segments, but this is a pedagogical rhythm rather than a fixed timing law.

These moments may occur:

- on dedicated activity slides;
- inside a narrative slide;
- immediately before a reveal;
- through a map or image;
- as a question embedded in a transition.

A forest-green “Pause & Reflect” slide is one tool, not a requirement.

## Function D — Resolve the historical problem

Students should leave knowing what answer the lecture ultimately supports.

Resolution may occur through:

- one synthesis slide;
- return to the opening image;
- completion of a causal chain;
- final comparison;
- final map;
- a concise analytical claim;
- a before/after contrast.

There is no mandatory “Answering the Question / Point Worth Keeping” pair.

## Function E — Create continuity

Where useful, the ending should produce intellectual momentum into the next lecture.

The bridge may be:

- its own slide;
- the final sentence of the synthesis;
- an unresolved contradiction;
- a new image;
- a question produced by the lecture's answer.

Do not end with a generic topic list.

---

# 7. ADJACENT-DECK DIFFERENTIATION

When adjacent lectures are known, use them as a guard against formula.

Examine the immediately preceding deck and, when available, the following lecture outline.

Do not automatically reproduce the same:

- opening device;
- number of formal sections;
- section-divider rhythm;
- activity format;
- visual rhythm;
- causal model;
- source treatment;
- ending structure.

Two adjacent decks may share a structure when the history genuinely warrants it. Repetition is not forbidden. **Mechanical repetition is.**

Before finalizing the architecture, ask:

> **What experience should this lecture give students that the previous lecture did not?**

and

> **What is distinctive about the way this particular historical problem unfolds?**

The deck should feel shaped by the history rather than by a reusable mold.

---

# 8. OUTLINE-DRIVEN EXAMPLES

These examples illustrate **reasoning**, not reusable recipes.

## Example: simultaneous crises

Outline: several geographically separated conflicts erupt within a short period.

Weak build:

> roadmap → conflict A → activity → conflict B → activity → synthesis

Stronger build:

> open with unexplained simultaneity → establish common pressures → narrate one crisis → hard geographic transition → narrate second crisis → compare only after students know both → reveal the shared process

The comparison becomes the **answer**, not the agenda.

## Example: rebellion ending in catastrophe

Outline: a political rebellion culminates in the destruction of a colonial capital.

Weak build:

> background → causes → rebellion → burning city

Stronger build:

> begin with the city burning → ask why colonists are destroying their own capital → reconstruct frontier crisis, political conflict, competing interests, and escalation → return to the burning city with explanation

The outcome generates curiosity before chronology supplies the answer.

## Example: three imperial systems

Outline: Spain, France, and Britain confront the same problem of controlling vast territory with different resources.

Weak build:

> Spain section → France section → Britain section → summary

Stronger build:

> establish common imperial problem → introduce three strategies → follow each response through evidence → compare strengths and limits → apply model to a new case

The shared problem organizes the comparison.

## Example: escalating political authority

Outline: imperial officials repeatedly attempt to strengthen control and provoke resistance.

Weak build:

> mercantilism → Dominion → Glorious Revolution → Salem

Stronger build:

> local autonomy → imperial intervention → resistance → stronger intervention → constitutional crisis → political settlement → unresolved social anxiety

The structure itself should let students **feel escalation**.

---

# 9. SLIDE COUNT AND PACING

Do not build to a quota.

A 35-minute classroom deck will often contain roughly **16–26 classroom slides**, but the range is descriptive, not prescriptive.

- A fast-moving narrative may use several nearly textless transition slides.
- A map-centered lecture may dwell on fewer slides for longer.
- A primary-source lecture may use fewer, slower slides.
- A comparison deck may use several quick visual contrasts.

Evaluate **time, density, and cognitive work**, not raw slide count.

A slide containing only:

> **1675**

may be exactly right if the next two slides reveal 1676 and 1680 and create the opening mystery.

Do not reject such slides as “inefficient.”

---

# 10. VISIBLE TEXT — TERSE, STRUCTURAL, LEGIBLE

The screen should contain what students need to see, not everything the professor will say.

Prefer:

- short phrases;
- labels;
- comparisons;
- causal relationships;
- maps;
- images;
- brief quotations;
- short questions;
- synthesis claims.

Avoid paragraph slides.

## Working density rules

These are useful guardrails rather than absolute quotas:

- most bullets should be **3–8 words**;
- avoid bullets longer than **13 words**;
- 3–5 bullets in a list is normally enough;
- full sentences belong mainly in essential questions, quotations, callouts, and synthesis claims;
- one slide should normally have one dominant visual or intellectual idea.

If a slide reads like prose, it has probably failed.

---

# 11. VISUAL RHETORIC — FORM FOLLOWS ARGUMENT

Choose slide forms because they match the intellectual work.

Use:

- **comparison grids** for comparison;
- **causal chains** for causation;
- **maps** for geography, movement, territorial claims, and power;
- **timelines** when sequence itself explains change;
- **full-screen images** for emotional or evidentiary focus;
- **primary-source blocks** when language matters;
- **statistics** when magnitude is the point;
- **before/after layouts** for transformation;
- **one-line transition slides** for narrative pacing;
- **progressive reveals** when prediction is pedagogically useful.

Do not add visual variety merely as decoration.

> **Visual variation should reflect intellectual variation.**

---

# 12. VISUAL HOUSE STYLE

Use the reference deck's established visual language.

Core palette:

- antique gold `#D4AF37`
- deep teal `#2C7873`
- rich purple `#6B4C9A`
- ruby crimson `#9B2C2C`
- dark charcoal `#1A1A1A`
- pure white `#FAFAFA`
- soft cream `#F5F1E8`
- bronze accent `#8B6F47`
- forest green `#1B4332`

Core fonts:

- **Crimson Pro** for headings;
- **Lora** for body text.

Preserve back-row legibility.

Useful component classes from the reference deck include:

| Class | Use |
|---|---|
| `.callout` | Central analytical claim |
| `.two-column` / `.three-column` | Comparison and parallel evidence |
| `.content-image-layout` | Content + visual evidence |
| `.column-header` | Gold comparison heading |
| `.chain-step` + `.chain-arrow` | Causation / process |
| `.stat-box` / `.stat-number` / `.stat-label` | Concept cards / large numbers |
| `.assessment-box` | Dedicated activity choices |
| `.primary-source` | Brief quotation, definition, or source excerpt |
| `.subtitle` / `.divider-note` | Dividers when dividers are useful |
| `.img-caption` | Interpretive image caption |
| `.large-text` | Big prompt / reflective question |
| `.sr-only` | Screen-reader-only title text |

The class library is reusable.

The **sequence of those classes is not**.

## Caution boxes

Use the crimson-tinted caution treatment when the lecture needs to resist a familiar shortcut or qualify a simple model.

Examples:

- “Resist the shortcut…”
- “This comparison shows a pattern, not an absolute rule.”
- “Do not confuse representative government with modern democracy.”

Use only when the historical argument genuinely needs qualification. No quota.

---

# 13. IMAGES — AUTHENTIC, VERIFIED, INTERPRETIVE

When an image functions as evidence, prefer authentic historical visuals:

- maps;
- portraits;
- engravings;
- paintings;
- documents;
- artifacts;
- photographs where chronologically appropriate.

Generated imagery may be used for title atmosphere or conceptual illustration, but it must never masquerade as a surviving historical source.

## Wikimedia Commons

For live historical images, prefer verified Wikimedia Commons `Special:FilePath` URLs:

```text
https://commons.wikimedia.org/wiki/Special:FilePath/<Filename>.jpg?width=1200
```

Never guess the filename.

Verify every image before writing it into the deck.

## Every image needs

1. A verified source.
2. Meaningful `alt` text describing what is visibly present.
3. An `onerror` fallback using `.img-placeholder` when loaded remotely.
4. An `.img-caption` that **interprets rather than merely labels**.

Good caption:

> “English map of Virginia — note the density of Native towns.”

Weak caption:

> “Map of Virginia.”

When a later painting or engraving depicts an earlier event, state that clearly in the caption and alt text.

Do not imply documentary accuracy that the image does not possess.

## Image quantity

There is no fixed image quota.

A typical deck may use **4–7 major visuals**, but the outline controls the need.

- A geographic lecture may use more maps.
- A source-centered lecture may use fewer images but dwell on them longer.
- A narrative deck may use several full-screen transitions.

---

# 14. POP-UPS — SUPPORT, NOT DECORATION

Use pop-ups for anchor terms or contextual material that students may need but that would clutter the slide face.

Do not create pop-ups to hit a quota.

A typical deck may contain **4–7**, but fewer or more is acceptable when justified.

Each trigger must use accessible markup:

```html
<span class="popup-trigger"
      role="button"
      tabindex="0"
      aria-expanded="false"
      data-popup="pop-example">...</span>
```

Each pop-up must have one matching dialog:

```html
<div id="pop-example"
     class="popup"
     role="dialog"
     aria-modal="true"
     aria-labelledby="pop-example-label">...</div>
```

A good pop-up contains:

1. a plain-language definition or explanation;
2. why the term matters **in this lecture**;
3. a verified external reference when useful.

Do not turn pop-ups into mini-essays.

---

# 15. STUDENT PROCESSING

Activities exist to advance the historical argument.

Good processing moments ask students to:

- predict what happens next;
- decide which explanation is strongest;
- compare two cases;
- interpret a map, image, or quotation;
- rank causes;
- choose and defend;
- retrieve without notes;
- apply a model to a new case.

Avoid activity for activity's sake.

## Placement

Place processing where the **argument benefits from a pause**.

Examples:

- immediately before a surprising reveal;
- after students have enough evidence to make a judgment;
- between two cases that will later be compared;
- after a difficult causal sequence;
- before synthesis, when students can test the model themselves.

Do not place activities at predetermined slide numbers.

## Visual treatment

A dedicated activity slide may use the established forest-green background so students immediately recognize that the mode has changed.

But an activity can also be embedded inside a regular slide or transition.

---

# 16. STORIES AND NARRATIVE

Use stories because they create human interest, emotional engagement, chronology, and memory.

But the pattern must remain:

> **story → interpretation**

not:

> story → next story → next story

A person or episode belongs in the classroom deck because it reveals something larger.

Examples:

- Roanoke → difficulty of sustaining colonization;
- Anne Hutchinson → limits of dissent in a religious community;
- Metacom's War → settler expansion and competing sovereignty;
- Bacon's Rebellion → frontier violence, political power, inequality, and labor.

---

# 17. INTEGRATION OF HISTORICAL ACTORS

Native peoples, Africans, women, servants, religious minorities, and other groups should appear where they shape the central historical process.

Do not build:

> “English colonization”
>
> followed by
>
> “Native Americans”

Instead:

> English settlement entered existing Native political worlds.

> Plantation expansion produced conflicts over land and labor.

> Religious communities created structures that shaped women, dissenters, and outsiders differently.

Diversity belongs in the causal story, not in appendices to the “main” story.

---

# 18. SIMPLE MODEL → COMPLICATION

Introductory students benefit from clear initial models.

Use simple comparisons and causal chains when they help students organize unfamiliar material.

Then complicate them.

A clear model is not a distortion if the deck openly signals its limits.

Possible methods:

- caution box;
- later exception;
- competing case;
- primary source that resists the model;
- final synthesis that revises the initial framework.

The deck should help students move from:

> “I can see the pattern.”

Toward:

> “I can explain where the pattern holds and where it breaks down.”

---

# 19. INDEPENDENT STUDY APPENDIX

The Independent Study appendix remains **required** because it serves the asynchronous online hour and lets classroom slides stay focused.

Its architecture is flexible.

Usually **3–6 slides**, but depth follows the material rather than a fixed number.

Independent Study may take the form of:

- a historiographical complication;
- an additional case study;
- a primary-source investigation;
- a compressed secondary narrative;
- a myth/correction sequence;
- a map exploration;
- a “what happened next?” extension;
- a comparison omitted from the classroom for time;
- deeper context that would overload first-pass classroom explanation.

The appendix should deepen, complicate, or extend the lecture. It should not merely repeat classroom slides in more words.

Each Independent Study sequence should have an identifiable interpretive payoff.

Use slide IDs when classroom slides need to link directly to an Independent Study extension.

Do not force exactly four topics.

---

# 20. PRESENTER NOTES = STUDENT STUDY BUDDY, DEFERRED

Presenter notes are **not professor lecture notes**.

Professor preparation comes from the background essay.

At initial deck-build time:

- include exactly one `<aside class="notes">` on the title slide for image description and cold-open guidance;
- leave all other notes absent.

A separate Study Buddy notes pass may later add student-facing notes to every slide.

Do not pre-empt that pass with partial notes.

---

# 21. BUILD WORKFLOW

## Step 1 — Read the sources fully

Read the approved outline and background essay when available. Read the textbook section or primary sources needed for verification.

Extract:

- essential question;
- central takeaway;
- major causal or interpretive beats;
- selected stories;
- anchor terms;
- source quotations worth preserving;
- visual opportunities;
- material that belongs in Independent Study instead of classroom delivery.

## Step 2 — Inspect adjacent lectures

When available, inspect the previous deck and next lecture outline.

Identify structural features to avoid repeating mechanically unless the current history truly calls for them.

## Step 3 — Write the Architecture Decision

Choose the natural narrative form and identify the major turns.

Do this **before** drafting slide numbers.

## Step 4 — Draft the spine

Draft a sequence of intellectual beats, not a template.

For each beat, ask:

- what does the student need to see?
- what does the professor explain verbally?
- what question or prediction belongs here?
- what visual form best represents this idea?
- what can be omitted?

Only after the spine works should you estimate slide count.

## Step 5 — Verify images and links

Search and confirm Wikimedia Commons filenames and any external article links before inserting them.

## Step 6 — Build the HTML

Start from the reference deck's visual shell.

Reuse its CSS and interaction system, but build a new slide sequence appropriate to the lecture.

## Step 7 — Add pop-ups

Add only those that materially help students understand anchor terms without cluttering the face.

## Step 8 — Build Independent Study

Choose material deliberately excluded from classroom delivery because it deepens or complicates the argument.

## Step 9 — Validate technically

Run the structural and accessibility gates below.

## Step 10 — Run the mandatory audits

Do not deliver until all mandatory audits pass or any unresolved issue is explicitly surfaced.

---

# 22. TECHNICAL REQUIREMENTS

Use Reveal.js **4.5.0** from cdnjs unless the course reference deck is deliberately updated to a newer approved version.

Initialize for 1920×1080 classroom projection.

Preserve:

- slide counter;
- keyboard-accessible pop-ups;
- nav-link behavior;
- `prefers-reduced-motion` CSS;
- visible focus states;
- semantic `lang="en"`;
- non-empty `<title>`;
- screen-reader-only title heading on an image-only title slide.

## Structural validation

Assert:

- `<section>` tags are balanced;
- all `data-popup` triggers resolve to exactly one matching pop-up id;
- every pop-up has `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`;
- every trigger has `role="button"`, `tabindex="0"`, and `aria-expanded`;
- every `.nav-link` resolves to a real slide `id`;
- every `<img>` has meaningful `alt` text;
- every remote historical image has an `onerror` fallback;
- every major historical image has an interpretive caption unless the design intentionally uses it as a full-screen background;
- exactly one title-slide `<aside class="notes">` exists at initial build time;
- the deck loads without missing local dependencies unless those dependencies are deliberately delivered alongside it.

Do **not** validate against a fixed number of section dividers, activity slides, pop-ups, or classroom slides.

---

# 23. ACCESSIBILITY AND CONTRAST

Maintain the approved contrast behavior of the reference deck.

Check at minimum:

- gold on charcoal;
- white on charcoal;
- teal emphasis on charcoal;
- bronze captions on charcoal;
- gold on forest green;
- white on forest green;
- divider subtitle on forest green;
- divider note on forest green;
- purple on cream;
- charcoal on cream;
- crimson on cream;
- scoped pop-up emphasis colors on cream.

Use visible focus indicators for interactive elements.

Respect reduced-motion preferences.

Use back-row legibility as a design gate.

Accessibility is part of the house style, not an optional cleanup pass.

---

# 24. HALLUCINATION PREVENTION

Accuracy takes priority over richness.

## Source fidelity

Every factual claim on a classroom face must be licensed by an approved source or independently verified.

Before finalizing a slide, ask:

> **Could I point to the source passage that licenses this claim?**

If not:

- verify it;
- qualify it;
- or remove it.

## Quotations

- Copy quotations exactly.
- Never reconstruct wording from memory.
- Never put quotation marks around a paraphrase.
- Preserve attribution.
- If exact wording cannot be verified, paraphrase without quotation marks.

## Numbers and specifics

Never invent:

- dates;
- casualty figures;
- population counts;
- legal provisions;
- measurements;
- quotations;
- scholarly positions;
- image identities.

If the source is vague, the deck stays vague until verification is available.

## Historiography

Do not attribute an interpretation to a named historian unless the source names that scholar or reliable verification supports the attribution.

Do not manufacture controversy to make the deck seem sophisticated.

## Independent Study

Independent Study may go beyond classroom **scope**, not beyond evidentiary support.

---

# 25. MANDATORY AUDIT A — SOURCE FIDELITY

Before delivery verify:

- [ ] Essential question matches the approved outline or confirmed wording.
- [ ] Central takeaway matches the approved lecture argument.
- [ ] Every major person, event, case, and concept carries the interpretation supplied by the source.
- [ ] Quotations are exact and attributed.
- [ ] Dates, names, numbers, and places have been checked.
- [ ] No unsupported specificity has been added merely to make a slide vivid.
- [ ] Historiographical cautions are accurate and not invented.
- [ ] Independent Study content is sourced or verified.
- [ ] The ending does not overstate certainty beyond the source.

---

# 26. MANDATORY AUDIT B — ARCHITECTURE FIT

This audit replaces template compliance.

## Argument fit

- [ ] The deck's architecture can be explained from the lecture outline itself.
- [ ] The outline has not been reorganized merely to fit a standard Reveal template.
- [ ] The sequence creates momentum appropriate to the historical problem.
- [ ] The most important interpretive turns receive the most visual and temporal emphasis.

## Structural variety

- [ ] A roadmap slide appears only if students genuinely need one.
- [ ] Section dividers appear only where they clarify a real change in the argument.
- [ ] Dedicated activity slides appear only where useful.
- [ ] The ending resolves the lecture without being forced into a predetermined number of slides.
- [ ] When adjacent decks are available, this deck does not mechanically reproduce their architecture.

## Visual rhetoric

- [ ] Slide form follows content.
- [ ] Comparison is shown comparatively.
- [ ] Causation is shown causally.
- [ ] Geography uses maps when maps explain the issue.
- [ ] Narrative pacing uses visual transitions when useful.
- [ ] Primary sources are treated as evidence, not wallpaper.
- [ ] Visual variation reflects intellectual variation rather than decorative novelty.

---

# 27. MANDATORY AUDIT C — PEDAGOGICAL EFFECTIVENESS

- [ ] The opening creates a concrete reason for a first-year student to care about the historical problem.
- [ ] The deck is intellectually serious without depending on extensive prior knowledge.
- [ ] Visible text is sparse enough for students to listen rather than transcribe.
- [ ] The deck changes students' cognitive mode during the 35-minute lecture.
- [ ] At least one processing moment requires interpretation, prediction, comparison, judgment, or application rather than mere recall.
- [ ] Activities occur where the argument benefits from them, not at fixed intervals.
- [ ] The lecture is realistically deliverable in 35 minutes.
- [ ] Dense interpretive slides receive more time; quick transition slides are allowed to move rapidly.
- [ ] Anchor terms are limited to what students need for the argument.
- [ ] Stories lead to interpretation.
- [ ] Historical actors are integrated into the central process rather than segregated into side topics.
- [ ] Simple models are complicated where necessary.
- [ ] The historical problem is explicitly or unmistakably resolved before the lecture ends.
- [ ] The final transition creates continuity when the next lecture naturally follows.

---

# 28. MANDATORY AUDIT D — TECHNICAL / ACCESSIBILITY

- [ ] Reveal deck loads correctly.
- [ ] Sections are balanced syntactically.
- [ ] Pop-up ids and triggers match.
- [ ] Interactive controls work by keyboard.
- [ ] All images have alt text.
- [ ] Historical image identities are verified.
- [ ] Captions distinguish later representations from contemporary evidence when relevant.
- [ ] Contrast passes.
- [ ] Reduced-motion handling is present.
- [ ] Focus indicators are visible.
- [ ] No classroom face is unreadable from the back of a classroom.
- [ ] Initial build contains only the title-slide notes aside.

---

# 29. DELIVERY REPORT

Deliver:

1. **One Reveal.js HTML deck**
   - `HIST101_ChX_LecY_<Title_In_Words>.html`
2. **One image manifest**
   - `HIST101_ChX_LecY_image_manifest.md`

The image manifest should record:

- image filename or source identifier;
- source URL;
- slide use;
- whether it is a primary-source-era visual, later historical representation, map, portrait, artifact, or decorative image;
- verification status;
- any special interpretive caution.

The delivery message should briefly report:

- essential question;
- chosen narrative architecture;
- classroom slide count;
- Independent Study slide count;
- number of pop-ups;
- number of major historical visuals;
- Independent Study focus;
- audit status.

Use this audit language:

> **Fidelity PASS / Architecture PASS / Pedagogy PASS / Technical PASS**

If any gate cannot pass, do not conceal it. State the unresolved issue.

---

# 30. FINAL GOVERNING RULES

When in doubt, apply these in order:

1. **Historical accuracy over vividness.**
2. **The approved lecture argument over textbook coverage.**
3. **The lecture outline over the reference deck's slide sequence.**
4. **Student understanding over content quantity.**
5. **Visual explanation over prose.**
6. **Natural cognitive shifts over scheduled activity slots.**
7. **Variation that follows the history over variation for its own sake.**
8. **Omission over clutter.**

Before finalizing, ask:

> **Does this deck look the way this history thinks?**

If the answer is no, redesign the architecture before polishing the slides.
