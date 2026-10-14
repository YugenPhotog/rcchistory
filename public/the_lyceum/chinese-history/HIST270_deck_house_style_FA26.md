# HIST 270 Reveal.js Deck House Style — FA26 "Narrative Studio"

**Status:** Current standard as of Oct 2026. Derived from the four Chapter 5 revFA26 decks.
**Reference decks:** `HIST270_ch05_lec1_sui_reunification_revFA26.html` · `…lec2_early_tang_power…` · `…lec3_changan_elite…` · `…lec4_religion_culture…`
**Canonical shell:** `HIST270_deck_shell_FA26.html` (full stylesheet + script tail + one example of every slide pattern). Start every new deck from the shell.

**Supersedes:**
- The light "Scholar's Studio" ivory/forest/terracotta palette (never used for decks again).
- The SU26 `master-lecture-to-deck` conventions: Part-per-RQ forest-green dividers, Pause & Reflect slides, Georgia/emoji-h3 asides, inline font sizes on every element, a fixed 1920×1080 init, the ⌨️ keyboard overlay and the custom slide counter.

**Unchanged:** the dark charcoal / Antique Gold / Deep Teal / Rich Purple palette, Crimson Pro + Lora, Reveal.js 4.5.0 from cdnjs, the cream pop-up card with a bronze border, and no textbook quotations on slide faces.

---

## 1. Engine and shell

- Reveal.js **4.5.0** from cdnjs: `reveal.min.css`, `theme/black.min.css`, `reveal.min.js`, `plugin/notes/notes.min.js`.
- Google Fonts: `Crimson Pro:wght@400;600;700` + `Lora:ital,wght@0,400;0,600;1,400`.
- **Init, exactly:** `Reveal.initialize({hash:true, slideNumber:'c/t', transition:'slide', plugins:[RevealNotes]});`
  - Use Reveal's default canvas. Do **not** set width, height or margin.
  - Use the built-in slide number (styled bottom-left, muted). No custom counter and no keyboard overlay.
- **Sizes live in the stylesheet, not inline.** Do not put inline `font-size` on h2, lists or bullets. If a slide overflows, add a density class to its `<section>`: `density-95`, `-90`, `-85`, `-80` or `-75`.
- **Script tail (keep verbatim from the shell):**
  - A delegated pop-up handler: `.popup-trigger[data-popup]` opens the pop-up; `.popup-close` closes it; clicking the backdrop closes it.
  - Escape closes an open pop-up before Reveal sees the keypress. Enter and Space activate a focused trigger.
  - All pop-ups close on `slidechanged`.
  - `setRevealScale()` writes `--rs` on ready and resize, which makes the full-bleed heroes reach the viewport edges.
- Every `<section>` has an `id`. Hash links (`#/id`) depend on it.
- Images are relative paths. Don't use data-URIs in production decks; Lec 1–2 still embed some and should be migrated to `images/`.

## 2. Palette and type

| Token | Hex | Use |
|---|---|---|
| `--dark-charcoal` | `#1A1A1A` | Background |
| `--pure-white` | `#FAFAFA` | Body text |
| `--antique-gold` | `#D4AF37` | h1–h3, `<strong>`, timeline years, callout and primary-source borders, gold card and beat accents |
| `--deep-teal` | `#2C7873` | ◆ bullets, default card top border, story-beat border, check-box border, flow boxes |
| `--rich-purple` | `#6B4C9A` | Purple cards; `.definition-term` in pop-ups |
| `--ruby-crimson` | `#9B2C2C` | Red cards and beats (cost, failure, limit); pop-up close button; pop-up `<strong>` |
| `--soft-cream` | `#F5F1E8` | Pop-up background; primary-source quote text |
| `--bronze-accent` | `#8B6F47` | Pop-up border and h3; image-placeholder dashes |
| `--forest-green` | `#1B4332` | Pierian Spring gradient only |

Derived text colors, used as literals:

| Color | Use |
|---|---|
| `#71B3AD` | Light teal: kicker, `<em>`, pop-up triggers, check titles |
| `#9ED8D2` | Link text |
| `#F1D46A` | Bright gold for the title-hero h1 |
| `#C9BEAA` | Muted cream: source lines, subtitles, slide number |
| `#DDD5C5` / `#D9CFBC` | Captions |
| `#E9DFC7` | Activity and check instructions |

Card and beat color has a meaning: **teal** for neutral or context, **gold** for a mechanism or a success, **red** for a cost, failure or limit, and **purple** for frontier, steppe or foreign material.

Type: Crimson Pro 700 for headings, the stat number, quotes and the act-number; Lora for body text at a 1.3em base.

## 3. Narrative architecture

Build each lecture as a **story with an argument**, not as a set of RQ "Parts". A main path has about 19–31 slides, and a Pierian Spring appendix of 3–8 slides follows it.

**Required lecture path, in order:**

1. **Title hero** (`visual-hero title-hero`) has four lines:
   - kicker: `HIST 270 · Chapter N · Lecture N`
   - h1: a short title
   - `hero-subtitle`: a thesis in six words or fewer, e.g. "An open capital, a gated society"
   - `hero-actline`: the three movements, e.g. "City portrait · Cosmopolitan contact · Family power"
2. **Cold open** (`scene-layout`): one concrete scene with a date and place in the kicker.
   - Examples: "Cold open · Jiangdu, 618", "Zhaoling · Taizong's tomb".
   - The final slide returns to this same scene.
3. **Roadmap** that names the frame. Use either the three-act cards (`three-columns` + `.act-number`) or a `place-strip` of up to six stations, plus a callout stating **the thread**, which is the one-sentence thesis.
4. **Act or place dividers** (`visual-hero act-hero`).
   - Kicker: `Act I · 581–590` or `Place 2 · The Gate · 626`.
   - h2: two to four words.
   - Text sits only on full-bleed art behind the veil.
5. **Content slides**, two to six per act. Each one is `kicker · assertion h2 · scene-layout (image + 3 story-beats + callout) · source-line`. Alternate `scene-layout` and `scene-layout reverse` so the image switches sides.
6. **Check yourself** after each act: 2–3 per lecture (§5).
7. **Primary-source slide**, one or two per lecture, with authentic documents only (§5).
8. **Synthesis block** near the end. Use one or more:
   - "Now step back": a `flow` diagram plus where-it-held / where-it-failed cards.
   - "Your judgment": three cards, each with **For:** / **Against:**.
   - "Epilogue / Why it mattered".
9. **Narrative review**: "Retell the story in nine terms." Nine color-coded cards in a three-column grid. The notes retell the story using all nine terms in order.
10. **In-class writing on the lecture's RQ**, the assessed slide. Use an `activity` box. The prompt is the RQ adapted for the board; the instruction states the sentence count and the required evidence slots, and ends with a forced judgment. The source line reads: *"Adapted from Review Question N in the course textbook, ch. N."* This slide is never skipped.
11. **Closing bookend**: the cold-open scene revisited. Use a `visual-hero act-hero` or an `image-layout` slide with a closing question, plus the prev/next links: `Previous: <a>…(Lecture N−1)</a> · Next: <a>…(Lecture N+1)</a>`.
12. **Pierian Spring divider** (`id="pierian-spring"`): a radial teal→forest gradient, "Beyond the lecture" kicker, "Optional Independent Study", a one-line contents list, and the Pope couplet.
13. **Independent-study slides**, kicker `Independent study · <topic>`. Each ends with a `back-link` to the lecture slide it deepens. The lecture slide carries the matching `ps-link`: *"Optional: Pierian Spring on <topic> →"*.

There are **no** forest-green Part dividers, Pause & Reflect slides or RQ recap slides.

## 4. Slide-face rules

- **Kicker + assertion headline.** The kicker is uppercase, light teal and dot-separated: `Topic · place/date`. The h2 is a full-sentence **claim**, not a topic label; a question is fine for checks.
  - Good: "Ward walls and curfew drums turned movement into a privilege with hours."
  - Bad: "Wards and Curfew".
- **Story-beats, not bullet lists.** Use three beats of about 12–20 words each, then one callout of about 8–16 words that states the takeaway as a quotable line. Bold run-in labels are allowed inside beats.
- **Faces stay short:** about 100 words maximum on the face, including the source line. Depth goes to the notes and pop-ups.
- **Source line on every content slide:** `Sources: <author>, <em>Title</em>; …`. Synthesis slides read "Synthesis of this lecture; see the sources on the preceding slides."
- **Pop-ups** for terms and glosses: `<span class="popup-trigger" data-popup="x-popup" role="button" tabindex="0">`. Each one pairs with exactly one `<div id="x-popup" class="popup" role="dialog" aria-label="…">`, which holds a close span (`role="button" tabindex="0" aria-label="Close"`), an `<h3>` and short `<p>`s. A pop-up may hold a floated image (`.popup-float`) with a `.popup-credit`.
- `.gloss` and `.footer-note` give one-line definitions under a figure or quote.
- **No textbook quotations on faces.** Textbook anchor sentences live in the notes. Faces may cite the textbook as a source and paraphrase it.

## 5. Activities and checks

- **Check yourself** (`.check`):
  - Kicker "Check yourself · on your own"; the h2 is a question.
  - `check-title`: "Answer from memory, in a sentence or two each:"
  - An `<ol>` of three questions; one of them is an A–D multiple-choice item (`li.mc-q` + `ol type="A"`).
  - Instruction: "When you have written your answers, <trigger>compare them with these possible answers</trigger>."
  - The answers live in a **pop-up**, not on the face. The MC answer names the letter and explains why each distractor fails. The pop-up ends with a `popup-note` study tip.
  - The notes explain the retrieval-practice rationale and give "Tips for question N."
- **Primary source** (`figure.primary-source` → `blockquote` + `figcaption` with author, date and translation source):
  - **Authentic historical documents only**, such as an edict, a song, a stele or a memorial. Never a textbook paraphrase.
  - Pair it with a `.check` titled "Read closely, on your own:" holding two questions, and a `footer-note` glossing hard words.
- **Activity** (`.activity` → `.prompt` + `.instruction`): use for timed evidence work and the assessed RQ writing.
- Assessment content is never written on the face. Answers go in pop-ups, and the notes give the reasoning.

## 6. Component library (from the shell stylesheet)

| Class | Pattern |
|---|---|
| `visual-hero title-hero` / `act-hero` | Full-bleed art (`.art-bg`), `.art-veil` gradient (`left-heavy` variant), `.hero-copy` / `.act-copy` at 54% width, `.visual-credit` bottom-right |
| `scene-layout` / `.reverse` | 1.25fr image : .75fr copy; `scene-figure` image at 16:9 (`aspect-ratio`, no crop) |
| `scene-copy` → `story-beat` (`.gold`, `.red`) + `callout` | The default content stack |
| `image-layout` / `.map-layout` | 1fr:1fr or .8fr:1.2fr real image or map with a long caption |
| `portrait-layout` (`.tall`) | .58fr portrait : 1.42fr copy |
| `conquest-map-layout` | Tall map (510px) + beats |
| `columns` / `three-columns` → `card` (`.gold`, `.red`, `.purple`) | Comparisons, judgments, term review |
| `act-number` | Large faded gold numeral on act cards |
| `timeline` → `timepoint` (`b` + `span`) | 3–5 dated steps |
| `place-strip` | Six-station roadmap (`em` index · `b` name · `span` gloss) |
| `flow` → `flowbox` + `arrow` | Three-step causal chain |
| `obligation-chain`, `burden-grid`, `obituary-grid` | Specialized grids (household duties, costs, casualty lists) |
| `stat-layout` → `stat-number` + `stat-copy`; `stat-mini` | Single-number emphasis |
| `standoff` / `standoff-strip` | North / river / south confrontation key |
| `table.comparison` | Inside pop-ups only (dark text on cream) |
| `video-layout` → `video-frame` iframe + `video-prompt` | Video connection slide (prompt + caveat) |
| `embedded-quote` | A short inline quote inside scene-copy (with `small` attribution) |
| `primary-source`, `check`, `activity`, `objectives` | See §5 |
| `source-line`, `footer-note`, `gloss`, `ps-link`, `back-link`, `next-link` | Small-print lines |

## 7. Presenter notes — Study Buddy voice (the standard)

The notes are **written to the student** so that someone who missed class can learn the lecture from the file alone. This follows the Lec 1–2 voice. The instructor-podium voice used in Lec 3–4 is not the standard.

- Plain `<p>` paragraphs inside `<aside class="notes">`. No emoji `h3` headers, no Georgia font block and no bracketed cues (`[Pause 3 min]`, `[Key: B]`, `[Image: …]`, `[Skip if behind]`).
- Write in the second person and present tense: "This slide shows…", "Notice…", "You will see this again at…".
- **Bold run-in labels** organize a note. Choose the ones that fit:
  - For images: **Look at the image / portrait / mural.** · **Read the map.**
  - For sources: **How to read it:** · **Read the record critically.** · **Read the numbers carefully.**
  - For background and links: **The context:** · **How it connects:** · **What is ahead:**
  - For checks: **Tips for question N:** · **Study tip:**
- **Every substantive note includes** a "**Why this matters:**" line where the slide carries the argument, and ends with a "**Check yourself:**" question. This is the last paragraph of every note.
- **Image notes** describe what the image shows and state its status: AI interpretation versus surviving artifact, and what it can and cannot be used as evidence for.
- **Textbook anchors** for the lecture's RQ appear verbatim with the page number in the notes of the slide that carries that argument.
- Typical note length is 150–250 words; short divider slides get 2–4 sentences.

## 8. Images

- **Path and name:** `images/<lecture-slug>/HIST270_chNN_lecN_NN_<snake_desc>_revFA26.png`. The `NN` is the image's order in the deck; Pierian Spring images use `_ps_`.
- Every `<img>` has descriptive alt text plus `onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"`, followed by a `div.img-placeholder` (`aria-hidden="true"`) naming the scene.
- **AI-generated scenes** use one consistent period mural style per lecture (Dunhuang-inspired for Sui, Tang tomb-mural for Tang).
  - The caption is always: *"AI-generated historical interpretation in the [style]. Clothing, architecture, and equipment are meant to evoke [setting]; this is not a surviving historical image."*
  - Heroes carry a `.visual-credit`: "AI interpretation · <scene>".
  - AI schematic maps say so: "AI-generated schematic map · … · not to scale".
- **Real artifacts and photos** get a full credit in the caption: object, date, holding institution, photographer, license and source (e.g. "Photo: Bairuilong, 2014. CC BY-SA 4.0, via Wikimedia Commons"). Confirm Wikimedia filenames by search; never guess them.
- Scene images are composed at 16:9 and are not cropped. Hero art is full-bleed.

## 9. File naming and linking

- Deck: `HIST270_chNN_lecN_<snake_slug>_revFA26.html`; `<title>`: `<Lecture Title> - HIST 270`.
- Section ids are short kebab-case (`hook`, `curfew`, `check1`, `rq3`, `pierian-spring`, `ps-<topic>`).
- Prev/next links on the closing slide use the sibling deck filenames.

## 10. Pre-delivery checks (mechanical)

1. `<section>` tags balance, and every section has an id.
2. The pop-up trigger set **equals** the pop-up id set, with no orphans in either direction.
3. Every `href="#/…"` resolves to a section id; every `ps-link` has a matching `back-link`.
4. The `<img>` count equals the `onerror` count; zero images lack alt text; no data-URIs.
5. Zero textbook quotations on faces; every `primary-source` is an authentic document with a figcaption.
6. Every note ends with **Check yourself:**; zero bracketed cue paragraphs.
7. The RQ writing slide is present, with the "Adapted from Review Question N" source line.
8. Init string matches §1; the `--rs` scale script is present.

## 11. Drift in the Ch. 5 reference set (to fix when those decks are next touched)

- **Lec 3 and Lec 4 notes** are in the instructor-podium voice with bracketed cues. They need converting to the Study Buddy voice in §7.
- **Lec 4 `check1`** keeps its answer key only in the notes ("Vote first…"). It should get a possible-answers pop-up per §5.
- **Orphan pop-ups:** `#gloss-ward` (Lec 3) and `#gloss-monastery` (Lec 4) have no trigger.
- **Lec 3** uses `.definition-term` without defining it in its CSS. The shell stylesheet includes it.
- **Lec 1** has 31 of 33 sections without ids, and has no ps-link/back-link pairs.
- **Lec 1** has no assessed RQ writing slide; it ends on narrative review → Pierian Spring.
- **Lec 1 and Lec 2** embed images as data-URIs: 6 in Lec 1, 14 in Lec 2.
- **Source scope:** source lines cite outside scholarship (*Cambridge History of China*, Xiong, Wechsler, Schafer, Hansen, Tackett and others). That conflicts with the older "deck may not exceed the master lecture" rule. Decide whether outside citations are allowed, or whether the master lecture must contain them first.
