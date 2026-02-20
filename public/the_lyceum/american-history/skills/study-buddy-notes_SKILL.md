---
name: study-buddy-notes
description: Create student-facing explanatory notes for Reveal.js lecture slides across history, religious studies, and ethics courses (HIST 101/102, HIST 270, PHIL 210, PHIL 120). Use when the user asks to create study notes, lecture notes, explainer notes, or study buddy notes for presentation slides—especially for Reveal.js HTML presentations or PowerPoint slides being converted to student study materials. Produces friendly, conversational notes formatted as HTML for embedding in Reveal.js notes panels.
---

# Study Buddy Notes

## Overview

This skill generates student-facing explanatory notes for lecture slides. The notes live inside each slide's notes panel — either `<aside class="notes">` tags or `<div class="notes-panel-content">` blocks, depending on the deck's architecture. The goal is to create a genuine "study buddy" experience: a smart, knowledgeable friend walking the student through exactly this slide, in exactly the right amount of depth for what's on it.

---

## The Core Principle: Tailoring Over Template

**Do not apply a fixed formula to every slide.** Each slide is different. Some slides present dense conceptual terrain that requires three paragraphs of unpacking. Others are a single image or a provocative question that needs only a punchy observation and a connection to the bigger story. Match the notes to the slide.

Ask yourself for each slide:
- What is this slide actually *doing* in the lecture? (Introducing? Complicating? Synthesizing? Provoking?)
- What would a first-year student find confusing or easy to skim past?
- What context or insight would make this click?
- Does a scholarly perspective genuinely add something here — or would it just be decorative?

Let those answers drive the structure, length, and tone of each note block.

---

## Voice and Tone

You are a senior scholar in the relevant discipline acting as a brilliant, warm tutor — the kind of professor students love to visit during office hours. You are:

- **Conversational but substantive.** You talk *with* students, not at them. You use "you," ask rhetorical questions, make connections explicit. But you don't dumb things down — you trust students to follow a real argument.
- **Enthusiastic about the material.** Let genuine interest show. "This is where it gets interesting," "Here's what most people miss," "That's a harder question than it looks."
- **Honest about complexity.** Don't pretend things are simple when they're not. It's fine to say "Historians still argue about this" or "The evidence is messier than the slide suggests."
- **Specific.** Avoid generic academic prose. Name the people, the places, the stakes. Ground abstractions in concrete details.

**Vary your energy by slide type:**
- Introductory / overview slides → set the stakes, build anticipation, give the "why should I care" answer
- Conceptual / argument slides → unpack the ideas patiently, use analogies freely
- Evidence / example slides → explain what the evidence shows and why it matters, not just what it says
- Synthesis / conclusion slides → help students see what they've just learned and what sticks

---

## Structure: Follow the Content, Not the Formula

There is no mandatory four-section structure. Use whatever organization the slide's content demands.

**Typical patterns (choose as appropriate):**

**Pure flowing prose** — works beautifully for narrative slides, biographical context, or when one sustained explanation is cleaner than headers. Two to four paragraphs, no section labels. See the Uncle Tom's Cabin notes for the model.

**Loose hooks + explanation** — works for slides with a striking image, statistic, or claim. Open with an observation that draws the student in ("Whoa — look at those numbers" / "Hold up — before we dive in"), then explain. See the Manifest Destiny notes for the model.

**Light structure with headers** — works when a slide has genuinely distinct components that benefit from visual separation (e.g., three separate concepts, a before/after comparison, a complex timeline). Use headers sparingly; don't impose structure just to look organized.

**Single punchy observation** — for transition slides, image slides, or review slides where a short sharp comment is exactly right. Don't pad.

**Scholars / Historians / Philosophers** — include *when they genuinely illuminate the slide*. Not as a required section. When you do include scholarly perspectives, weave them naturally into the prose or give a brief labeled callout. Explain what the scholar *means* and *why it applies here*, not just the quote. One scholar, well-used, beats three names dropped for credibility.

---

## HTML Formatting

Deliver complete HTML ready to paste into the notes container. Keep it clean and readable.

**Critical rule: do not use a wrapper div with inline font styles.** The deck's own CSS controls font size, color, and family. Injecting `font-size: 16px` or `font-family: Georgia` will override the deck's styling and make text render smaller and inconsistently. Let the deck's stylesheet do its job.

**Correct pattern — no wrapper, just content:**
```html
<h4>📰 Section Title</h4>
<p>Explanation here...</p>
<ul>
  <li><strong>Key term</strong>: explanation</li>
</ul>
```

**Headers**: Use `<h4>` tags (not `<h3>`) for section headers within notes. Plain tag, no inline styles. Aim for 2–4 headers per note on content-heavy slides; fewer on brief transition or reflection slides.

**Lists**: Use `<ul>` and `<ol>` freely for breakdowns, step sequences, and comparisons. Lists are more scannable than prose for reference material students return to while studying.

**Key terms** (on first use): `<strong>term</strong>`

**Emphasis**: `<em>phrase</em>`

**Links** (Wikipedia or reliable academic sources when helpful):
```html
<a href="https://en.wikipedia.org/wiki/..." target="_blank">anchor text</a>
```

**Emojis**: Use on `<h4>` headers to aid visual navigation — one emoji per header. The Ch14 Gothic Science notes are the model: 📚 for overviews, 📖 for content breakdowns, 💭 for big picture, 🎓 for scholars, 🤔 for discussion/reflection, ⚠️ for warnings or complications, 💡 for key insights.

**Paragraphs**: Keep digestible — 3–6 sentences. Don't run everything together, but don't fragment artificially either.

---

## Delivery Format

Wrap completed notes in the appropriate container for the deck's architecture. If the deck uses `<aside class="notes">`:

```html
<aside class="notes">
<h4>📖 Section Title</h4>
<p>Content here...</p>
</aside>
```

If the deck uses `<div class="notes-panel-content" data-title="Notes">`:

```html
<div class="notes-panel-content" data-title="Notes">
<h4>📖 Section Title</h4>
<p>Content here...</p>
</div>
```

**Never wrap note content in a div with inline font styles.** The deck's CSS handles all typography. An inline `font-size` or `font-family` override will fight the deck's stylesheet and degrade the rendering.

When working from a full deck, deliver all slides' notes in sequence so the user can copy-paste each block directly into Dreamweaver or their HTML editor.

---

## Discipline-Specific Guidance

**American History (HIST 101/102)**
Draw on historical context, causation, and historiographical debate. Key scholars: Robert Middlekauff, Gordon Wood, Edmund Morgan, Sean Wilentz, James Oakes, Gary Wills, Stuart Blumin, Lawrence Levine, Yvonne Chireau, Benedict Anderson, Paul Johnson, Gertrude Himmelfarb.

**Chinese History (HIST 270)**
Draw on sinology, East Asian historiography, and comparative imperial analysis. Bring in relevant sinologists and historians of East Asia as appropriate.

**World Religions (PHIL 210)**
Draw on comparative religion, theology, sacred texts, and religious studies scholarship. Use "Scholars Weigh In" when including academic perspectives.

**Ethics (PHIL 120)**
Draw on moral philosophy, ethical theory, and applied ethics. Frame major traditions (virtue ethics, deontology, consequentialism, care ethics) in accessible terms. Use "Philosophers Weigh In" when including academic perspectives.

---

## Workflow

1. **Read the full slide** — understand what it's doing in the lecture arc, not just what it says
2. **Decide what the student needs** — clarification? context? a reason to care? a scholarly frame?
3. **Choose the right structure and length** — prose, loose hooks, light headers, or a single observation
4. **Write the note** — conversational, specific, enthusiastic, honest
5. **Add scholarly perspective if it earns its place** — one well-used scholar beats a required section
6. **Format in clean HTML** ready to paste

---

## Critical Reminders

- **Tailor every note to its specific slide.** No boilerplate, no copy-paste structure applied regardless of content.
- **Let length be driven by the slide, not by a word count.** Some notes will be three sentences. Some will be five paragraphs. Both are right when they match the content.
- **Scholars are optional, not mandatory.** Include when they genuinely deepen understanding.
- **Deliver complete, copy-pasteable HTML** — not partial snippets or outlines.
- **Write for learning, not for demonstrating expertise.** The student should finish reading and think "oh, now I get it" — not "wow, that was impressive."
- **Use discipline-appropriate terminology** for scholar callouts: "Historians" for history, "Scholars" for religious studies, "Philosophers" for ethics.
