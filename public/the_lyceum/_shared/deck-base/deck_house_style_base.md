# Cross-Course Reveal.js Deck House Style: Base Standard

**Status:** DRAFT base, Oct 2026. Not yet adopted by any course deck. Distilled from
`chinese-history/HIST270_deck_house_style_FA26.md` and the approved HIST 270 Ch14/Ch16 revFA26 decks.
Each course's own style guide stays authoritative for that course; this file records what all courses share.

**Files in this folder**
- `deck_base.css`: shared stylesheet. Courses override the `--db-*` custom properties in a thin course layer.
- `deck_base.js`: Reveal init + slide-ID badge + ids.json check + popups + lightbox + `--rs` hero scale.
- `deck_shell_base.html`: minimal example shell, one of each slide type (all text marked `[SAMPLE]`).
- `tools/check_notes.py`: Study Buddy notes gate, `--course HIST270|HIST102|HIST101|PHIL210`.

## 1. Engine
- Reveal.js **4.5.0** from cdnjs (`reveal.min.css`, `theme/black.min.css`, `reveal.min.js`, `plugin/notes/notes.min.js`).
- Load order: Reveal CSS → theme → fonts → `deck_base.css` → course layer → deck-specific rules.
- `DeckBase.init({...})` replaces the inline init. Default Reveal options match HIST 270: `{hash:true, slideNumber:'c/t', transition:'slide', plugins:[RevealNotes]}`. Default canvas; no width/height/margin.
- Sizes live in the stylesheet; use `density-95…75` classes on overflowing sections, never inline font sizes.

## 2. Shared rules (every course)

**Slide IDs are permanent and never reused.** Every `<section>` has an `id` (kebab-case slug, the hash-link target) and a permanent slide ID, either `data-slide-id="A"` + `data-slug` (Ch01 FA26 style) or `data-letter="a"` (Ch14/16 style). Use one style per deck. IDs run A–Z, AA, AB… in build order; a new slide takes the next free ID from the chapter's `ids.json` (`{"<deck>.html": {"assigned":[…], "retired":[…], "next":"AR"}}`); a deleted slide's ID moves to `retired` and is never reassigned. The ID shows lower left (`.slide-letter`); the slide number shows lower right. Notes name slides, never cite them by letter.

**Study Buddy notes.** Notes are written to a student studying alone, in second person. Content slides carry 120–250 words; title and transition slides carry 60–100. Every slide has notes. Notes include a textbook page cite `(p. X)`, `<strong>Why this matters:</strong>` and `<strong>Check yourself:</strong>`. Notes **point to the evidence and explain how to build an answer; they never write the answer**, in the notes or on the face. No classroom cues: no timing, ⏱, "pause", "click", "slow down", "[skip if behind]". Those belong in a separate presenter file.

**Concept slides.** One term students are unlikely to know, placed immediately before the story slide that needs it. `id="concept-<slug>"`, kicker `QN concept · Term`, h2 `Concept: <plain assertion>`, `g-40-60` grid: `concept-card` (label, term, 1–2 sentence definition) + a `stack` of 3–4 story-beats (teal/gold/red/purple). No image. Model: HIST 270 Ch16 L3 `concept-balance`. About two per deck; only where needed.

**Pierian Spring = REQUIRED independent study.** It is never called "optional". It is not covered in class; students read it on their own. Divider `id="pierian-spring"` with the radial teal→forest gradient and this wording: *"Today's lecture ends here. Continue on your own: the stories below finish this chapter's history, and each ends with a review question to answer."* Drop the review-question clause in courses or sections without review questions. Each independent-study slide gets a `back-link` to the lecture slide it deepens, and that slide carries the matching `ps-link`.

**Length.** The main lecture targets about a **50-minute spoken lecture**. This is a guide, not a hard rule.

**Review questions (where the course has them).** Every review question is taught somewhere in the chapter's decks, and quoted **verbatim with no answer** on a green reading-guide checkpoint slide (`data-background="#1B4332"`, `id="rg-qN"` or `ps-rg-qN`, `.your-turn-box` + `.rq-text` + guide button + `rg-links` back to the teaching slides). Overflow questions go in the Pierian Spring with their teaching slides.

**Slide faces.** Kicker + full-sentence assertion h2. Story-beats or **3–4 complete-phrase bullets**, never more. About 100 words max on the face. A source line on every content slide. Pop-ups for terms. A names/terms box (`.names-box`) when a slide introduces several people or terms.

**Images.** Local **WebP** in the deck's `images/` folder. No hotlinks or data-URIs. **No image reuse** within or across decks. **Every image directly relevant** to its slide. Use descriptive alt text plus the `onerror` → `.img-placeholder` fallback. Real artifacts get full credit (object, date, institution, license, source). AI images are labelled as interpretations where the course allows them (§3).

**Full-bleed dividers.** Section/act dividers and the title are `visual-hero` with full-bleed art, `.art-veil`, and text on the veil only.

**Background essay.** Every revised lecture gets its own background essay for instructor-level material: historiography, textbook discrepancies, and outside sources.

## 3. Course layers

| | HIST 270 (Chinese) | HIST 102 | HIST 101 (American) | PHIL 210 (World Religions) |
|---|---|---|---|---|
| Review questions | Yes, from the reading guide | Yes → checkpoints apply | **None yet** → no checkpoints | Yes, reading-guide questions **verbatim** |
| Checker | `--course HIST270` (default; Ebrey cite) | `--course HIST102` | `--course HIST101` (RQ checks off) | `--course PHIL210` |
| Imagery | Chinese art; **AI dividers OK** (one period mural style per lecture, labelled) | Per course guide | **Mid-19th-century engraving style**; **real period images, never AI, wherever enslaved people are depicted** | **Care with sacred figures and imagery**: respectful, tradition-appropriate depictions; avoid AI renderings of sacred figures |
| Notes | Ebrey `(p. X)` | Textbook `(p. X)` | Different textbook `(p. X)` | Textbook `(p. X)` |

A course layer is a short `<style>` block or `course_<code>.css` that overrides `--db-*` tokens (accent colors, fonts, veil) and adds course-only components. Do not fork `deck_base.css`.

## 4. Checker
```
python3 public/the_lyceum/_shared/deck-base/tools/check_notes.py --course HIST270 deck.html [...] [--rq|--no-rq] [--verbose]
```
Gate: 0 empty notes; 0 stage directions; ≥90% page-cite coverage; every content slide has both tags; and, when RQ checks apply, every checkpoint slide (`rg-qN`, `ps-rg-qN`, `your-turn-qN`, `.rg-checkpoint`, `.assessment-slide`) has quoted question text, notes naming "Reading Guide Q#", and no "model/suggested/sample/possible answer".
