---
name: hist101-lecture-to-deck
description: Convert a HIST 101 (U.S. History to 1877) source document — a background essay (.docx) or a master lecture (.html) — into ONE classroom-ready Reveal.js deck for a 35-minute hybrid lecture, plus an Independent Study appendix for the online hour. ALWAYS use when Chief says "build the HIST 101 deck," "make the deck from this background essay," "turn this into slides for 101," provides a HIST 101 background essay or lecture outline and asks for a Reveal deck, or asks for a 35-minute deck on any pre-1877 U.S. topic. Builds to the Chapter 2 Lecture 2 reference deck bundled in assets/ — numbered Section dividers, Pause & Reflect slides, callout and caution boxes, live Wikimedia images with captions, rich pop-ups, and a closing Independent Study section. Presenter notes ship empty; study-buddy-notes fills them later. Ends with a MANDATORY dual audit. Do NOT use for HIST 270 (use master-lecture-to-deck), to write the background essay itself (use hist101-lecture-script), or for HIST 102 / PHIL decks.
---

# HIST 101 Source Document → Reveal.js Deck

Convert a HIST 101 source document into one **35-minute classroom deck with an Independent Study appendix**. The source is the authoritative content; the deck is a faithful re-presentation of its argument, not a new act of authorship.

The governing idea:

> **The deck makes the historical argument visible without trying to contain the entire lecture.**

The professor's full preparation lives in the background essay. The deck puts on screen only what students need in order to *see, compare, organize, interpret, and remember*.

## The reference deck is the specification

`assets/reference-deck-ch2-lec2.html` is the approved build — HIST 101, Ch. 2, Lec. 2, "Why Did the Colonies Become Different?" **Read it before building anything.** Copy its `<head>`, its entire `<style>` block, its global UI, and its `<script>` tail verbatim; strip its content slides and content pop-ups (keep the keyboard pop-up) and build into that shell. This guarantees the palette, component classes, Reveal init, pop-up handler, nav-link handler, slide counter, and accessibility overrides are correct without re-deriving them.

Where this file and the reference deck disagree, **the reference deck wins.** Report the discrepancy instead of silently following prose.

---

## Course context — HIST 101 Y1, hybrid

- **U.S. History to 1877**, Richland Community College.
- **Rhythm:** four 35-minute in-class lectures per week (two per meeting, T/Th 8:30–9:45), plus a one-hour asynchronous online session.
- **One deck = one 35-minute lecture**, and its **Independent Study section is the online hour's material** — it ships inside the same file rather than as a separate deliverable.
- Because two lectures run back-to-back in one meeting, a bridge slide often hands off to a lecture ten minutes later. Write bridges that work in that immediate context as well as across meetings.

---

## Inputs

Accept **either** source form:

1. **Background essay (`.docx`)** — the standard source, from `hist101-lecture-script`. Read it with the `docx` skill or `python-docx`; don't `cat` a binary.
2. **Master lecture (`.html`)** — read with `view` in ranges.

Confirm before building:

- **The essential question.** Use the source's wording verbatim if it states one. If only implied, propose it and get confirmation — the whole deck hangs off it.
- **The lecture's position** — chapter, and which of the week's four lectures this is.
- **The adjacent lectures**, so callbacks and the bridge are accurate.

If any is missing or ambiguous, **ask**. Confabulating course structure is a known failure mode.

---

## Output

- **One** standalone HTML deck: `HIST101_ChX_LecY_<Title_In_Words>.html`
- **One** image manifest: `HIST101_ChX_LecY_image_manifest.md`
- A short delivery message: essential question, sections, pop-ups, images, Independent Study topics, audit result.

---

## Deck architecture

Roughly **22 classroom slides + a 5-slide Independent Study appendix** (~27 total). The classroom portion runs 35 minutes at about 1.5 minutes per slide — which only works because slides are sparse. **Slide count is not the constraint; words per slide is.**

| # | Slide | Notes |
|---|---|---|
| 1 | **Title** | Full-bleed image only. No visible text — `<h1 class="sr-only">` carries the title. Aside holds the image description and a cold-open instruction |
| 2 | **Hook + Essential Question** | A concrete contrast, then the question in a `.callout` |
| 3 | **Roadmap** | The organizing terms as `.stat-box` cards, each with the question it answers |
| 4 | **Section I divider** | Forest green: "Section I" + `.subtitle` + a `.divider-note` question |
| 5–7 | Section I content | 2–3 slides, at least one with an image |
| 8 | **⏸ Pause & Reflect** | Forest green |
| 9 | **Section II divider** | |
| 10–13 | Section II content | |
| 14 | **⏸ Pause & Predict** | Forest green |
| 15 | **Section III divider** | |
| 16–19 | Section III content | |
| 20 | **⏸ Student Activity** | Forest green; `.assessment-box` columns |
| 21 | **Answering the Question** | The roadmap terms resolved, one short paragraph each |
| 22 | **The Point Worth Keeping** | A single `.callout` carrying the analytical payoff |
| 23 | **Bridge** | A question, then "Next: [title]" |
| 24 | **Independent Study divider** | Forest green; the four topics listed |
| 25–28 | **Independent Study slides** | 4 slides, same construction as classroom slides |

Three sections is the norm; two or four is fine when the argument demands it. Every section gets a numbered divider. Sections should be **roughly balanced** — a section starved to one slide while another sprawls to six means the argument is lopsided.

---

## Terseness — the rule that matters most

Measured against the reference deck: **median bullet = 5 words. Maximum = 13. Only 15 of 89 bullets exceed 8 words.**

- Bullets are **noun phrases, not sentences.** "Food production proved difficult." "Leadership was unstable." "That land was not empty."
- **3–4 bullets per column**, 6 at the absolute outside on a comparison slide.
- **Claims go in `.callout` boxes, not in bullets.** A callout is one or two sentences and is the only place full prose belongs on a face.
- **No footnote paragraphs.** If context won't fit in a callout, it belongs in the Study Buddy notes or an Independent Study slide.
- **Repetition is a device.** The hook's two columns read "English settlers / Atlantic coast / Same century" *identically* — the sameness is the point. Don't vary wording for variety's sake.

If a slide reads like prose, it has failed, even when every word is accurate.

---

## Component library

Use the reference deck's classes rather than inventing new ones.

| Class | Use |
|---|---|
| `.callout` | Gold left border. The key claim of a slide. ~13 per deck |
| `.two-column` / `.three-column` | Comparison grids |
| `.content-image-layout` | Content left, image right — the standard image slide |
| `.column-header` | Gold heading above a column's list |
| `.chain-step` + `.chain-arrow` | Causal chains (Tobacco → Profit → More land …) |
| `.stat-box` / `.stat-number` / `.stat-label` | Roadmap cards and large statistics |
| `.assessment-box` | Activity slide columns |
| `.primary-source` | A highlighted definition or quoted passage |
| `.subtitle` / `.divider-note` | Section divider text |
| `.img-caption` | Interpretive caption under every image |
| `.large-text` | Pause & Reflect body |
| `.sr-only` | Screen-reader-only title on the image-only title slide |

**Caution box** (no class — inline, crimson-tinted) for historiographical warnings: *"Resist the shortcut…"*, *"These are broad patterns, not absolute rules."* Roughly two per deck. This is where the deck teaches students not to over-read its own simplifications, and it may carry a `.nav-link` to the relevant Independent Study slide.

---

## Images — live, authentic, captioned

**Use live Wikimedia Commons URLs**, not local paths:

```
https://commons.wikimedia.org/wiki/Special:FilePath/<Filename>.jpg?width=1000
```

Every image needs all four:

1. **A real, verified Commons filename.** Search to confirm it exists — never guess a filename or construct a CDN hash.
2. **Long descriptive `alt`** — 2–4 sentences describing what is visibly in the frame. Where an image is a European depiction rather than a documentary record, say so in the alt text itself.
3. **An `onerror` placeholder** falling back to `.img-placeholder`.
4. **An `.img-caption`** that interprets rather than labels — "note the density of Native towns," not "map of Virginia."

Target 4–6 images. Authentic historical visuals only: maps, engravings, portraits, paintings, documents. Generated or decorative imagery may be used for the title slide only, and must be labeled DECORATIVE in the manifest so it can never be mistaken for a primary source.

---

## Pop-ups

5–7 anchor terms. Each `<span class="popup-trigger" role="button" tabindex="0" aria-expanded="false" data-popup="pop-xxx">` has exactly one matching `<div id="pop-xxx" class="popup" role="dialog" aria-modal="true" aria-labelledby="pop-xxx-label">`.

Pop-ups are **rich, not one-liners** — three paragraphs:

1. **The definition**, in plain language.
2. **Why it matters here** — what this term explains about *this* lecture's argument. ("It matters here because it explains the colony's priorities…")
3. **Read more** — a real Wikipedia link, `target="_blank" rel="noopener"`.

Verify every linked article exists.

---

## Independent Study section

**Required.** This is the online hour's material and the reason the deck can stay sparse: it's where the detail that would have bloated a classroom slide goes to live.

- Opens with a forest-green divider listing the topics separated by `&bull;`.
- 4 slides, each with an `id="slide-is-<topic>"` so caution boxes can link to them via `.nav-link`.
- Same construction as classroom slides — two-column, callout, terse bullets.
- Each ends with a callout stating the **interpretive lesson**, not a summary: *"The lesson is not the horror of the winter. It is that a colony organized as an investment was badly organized for survival."*

Good candidates: a near-catastrophe the lecture only gestures at; a conflict whose phases the lecture compresses; a historiographical debate the lecture flags but can't resolve; a comparative case that pushes the lecture's model further.

---

## Study Buddy notes are deferred

**Build the deck first. Do not write presenter notes.** The only aside in a finished deck is on the title slide (image description + cold-open instruction).

Student-facing Study Buddy notes are inserted in a separate pass by `study-buddy-notes`. Leave every other slide's notes absent; don't pre-empt that pass with partial notes. State this in the delivery message.

---

## Build workflow

Work in `/home/claude`. Build via bash heredoc (`cat > file << 'HTMLEOF'`) in chunks, then assemble with a short Python script — more reliable than `create_file` for large HTML.

1. **Read the reference deck** in `assets/`. Extract its head, style block, global UI, and script tail.
2. **Read the source fully.** Pull the essential question, the organizing terms, the section structure, stories with their interpretive payoffs, candidate anchor terms, and detail worth deferring to Independent Study.
3. **Draft the spine before writing HTML** — essential question, section titles and their divider questions, break prompts, closing claim, bridge question, four IS topics. Confirm with Chief if the essential question was implicit.
4. **Search for and verify images** on Wikimedia Commons before writing any `<img>` tag.
5. **Write the slides**, then the pop-ups.
6. **Assemble and validate** (below).
7. **Run the dual audit** — mandatory.
8. **Write the manifest**, copy deck + manifest to `/mnt/user-data/outputs/`, `present_files` (deck first).

### Structural validation
- `<section>` open/close balanced; classroom slides 20–24; IS slides 4–6.
- `data-popup` trigger set **exactly equals** pop-up id set; anchor pop-ups 5–7.
- **Median bullet length ≤ 6 words; no bullet over 13 words; ≤20% of bullets over 8 words.**
- `<img>` count equals `onerror` count equals `.img-caption` count; zero images without `alt`; all image URLs are `Special:FilePath`.
- Section dividers present and numbered; forest-green count = dividers + breaks + IS divider.
- Every `.nav-link` href resolves to an existing slide `id`.
- Exactly one `<aside class="notes">`, on the title slide.
- First heading is `<h1 class="sr-only">`; `lang="en"`; non-empty `<title>`.
- Every pop-up has `role="dialog"`, `aria-modal`, `aria-labelledby`; every trigger has `role="button"`, `tabindex="0"`, `aria-expanded`.
- Reveal 4.5.0 from cdnjs; init at 1920×1080; slide counter, keyboard pop-up, nav-link handler, `prefers-reduced-motion` block all present.

### WCAG contrast check
Assert zero failures: gold/charcoal, white/charcoal, em `#35918B`/charcoal (≥4.5), teal/charcoal (≥3.0), bronze/charcoal (≥3.0), gold/forest, white/forest, `.subtitle` `#4AA89F`/forest (≥3.0), `.divider-note` `#B8966A`/forest (≥3.0), purple/cream, charcoal/cream, crimson/cream, and the scoped pop-up overrides `#826B21`/cream and `#2C7873`/cream.

---

## Hallucination prevention

The deck must not become more confident or more specific than its source. This matters more in a 100-level survey than anywhere else, because students have no independent basis to catch an error.

1. **Source confinement.** Every claim on a face traces to the source. If a sentence has no source, **cut it** — don't supply it from background knowledge.
2. **Independent Study is not a license to invent.** IS slides go beyond the lecture's *scope*, not beyond its *sourcing*. If the source doesn't support the detail, either web-search to confirm it or drop the topic.
3. **Quotations are copied, never reconstructed.** Never attach quotation marks to a paraphrase; never adjust a date to look right.
4. **No invented specifics** — dates, casualty figures, population counts, measurements the source lacks. If the source is vague, the deck stays vague.
5. **No invented scholarship.** Historiographical caution boxes may characterize a debate, but don't attribute a position to a named historian unless the source names them or you've verified it.
6. **Verify every image filename and every Wikipedia link** before writing it.
7. **Flag gaps, don't pad them.** If a section is thin, say so and ask.

Before finalizing a slide: *"Could I point to the passage in the source that licenses this claim?"* If not, remove it.

---

## Final step — MANDATORY dual audit

### Audit A — Source fidelity
- [ ] Essential question matches the source's stated or confirmed wording.
- [ ] Section structure reflects the source's organizing claims, not a topic list scraped off its headings.
- [ ] Every person or event on a slide carries the interpretation the source gives it.
- [ ] Quotations verbatim and attributed; no textbook prose pasted on a face.
- [ ] Every date, name, number, and place checked against the source; unsupported specifics cut or verified.
- [ ] The closing claim matches the source's synthesis without overstating certainty the source hedges.
- [ ] Independent Study content is sourced or verified, not extrapolated.

### Audit B — Pedagogical effectiveness
- [ ] **Terseness:** median bullet ≤6 words; no prose bullets; claims live in callouts.
- [ ] **Time fit:** 20–24 classroom slides deliverable in 35 minutes; sections roughly balanced.
- [ ] **Essential question** appears on slide 2, is returned to, and is answered before the bridge.
- [ ] **Roadmap terms recur** — named on slide 3, in the section dividers, and resolved at slide 21.
- [ ] **Section dividers** present, numbered, each posing a real question.
- [ ] **Three breaks** — reflect, predict, apply — each requiring historical thinking, none mere recall.
- [ ] **Integration:** Native peoples, Africans, women, and servants appear where they shape the process; no segregated "special topic" slide.
- [ ] **Model then complication:** at least one comparison framework, with a caution box qualifying it.
- [ ] **Images** authentic, captioned interpretively, verified.
- [ ] **Independent Study** present, linked from the classroom slides, each slide ending in an interpretive lesson.
- [ ] **Bridge is a question**, not a topic list.
- [ ] **Accessibility:** WCAG passes; back-row legibility; alt text meaningful.

Pedagogy fails if faces are wordy, if the deck overruns 35 minutes, if any break is recall, if Independent Study is missing, or if accessibility checks fail.

### Reporting
State: classroom and IS slide counts; the essential question; section titles; median bullet length; pop-ups; images with verification status; IS topics; and **"Dual audit: Fidelity PASS / Pedagogy PASS"** — or the items fixed to get there. Surface anything that couldn't pass as an open question rather than shipping silently.

---

## Delivery

Copy deck + manifest to `/mnt/user-data/outputs/`, then `present_files` (deck first). Keep the note focused. Offer the obvious next step — the Study Buddy notes pass, or the next lecture — without padding.
