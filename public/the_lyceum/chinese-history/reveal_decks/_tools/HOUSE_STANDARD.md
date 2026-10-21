# HIST 270 Online Deck House Standard (FA26)
**Template:** the Ch12 decks for notes, Your Turn activities and how-to-use slides. Ch05 lec1 for the narrative style, the title-hero and the Pierian Spring section. **Scope:** Ch01, 02, 03, 04, 05, 08, 12 (not Ch14; Ch16–27 are Steven's). **Check:** `python3 _tools/lint_hist270.py [deck…]` must pass with 0 errors before Steven reviews a deck.

**1. Files and archiving.** Build each new deck as a new file next to the old one: `chapter-NN/HIST270_chNN_lecN_<slug>_revised_FA26.html`. Never edit the old deck. Move the old deck to `chapter-NN/archive/` only after Steven approves the new one. Every old deck is archived in the end. Skip `_pre-*` files and `archive/`.

**2. Audience.** Write for online, independent study by 17–19-year-olds with no background. Tell the story before the analysis, use lots of images, and aim for about 35 minutes on the main path plus an optional Pierian Spring section. No classroom mechanics anywhere, on slides or in notes. That means no votes, partners, neighbors, small groups, "circulate," in-class or assessed writing, "tonight," "next/last time," "this week," "on the board," or instructor-use appendices. Say "in the next lecture" instead.

**3. Notes = study buddy only.** Every `<section>` has `<aside class="notes">` of 60 words or more, written to the student in a warm second-person voice ("This slide gives you…", "Notice…"). Define new terms in **bold** the first time they appear. Each content-slide note follows this pattern:
1. what the slide gives you;
2. the story;
3. how to read the image or map, saying whether it is a primary source, a later artwork, or AI-generated;
4. why it matters, naming the reading-guide question it builds toward;
5. one "Check yourself" question.

The title slide's note explains how to use the deck (S for notes, arrow keys, Esc for overview, the time estimate, which questions it covers). Nothing addressed to the instructor goes in the notes.

**4. Background essays (professor material).** Instructor content (historiography, teaching cautions, sources and debates, mined from the old notes) goes in one essay per lecture: `public/hist-270/background_essays/essays/chN-lM-<slug>.html` (for example `ch5-l2-early-tang-power.html`). The essays follow the HIST 101 layout:
- topbar with back and print buttons, a progress bar, a table of contents, a `readmeta` line and a `prose` body;
- callouts `--prompt`, `--payoff`, `--note` and `--source`, plus `quote`/`attrib` blocks and a next-essay pager;
- the shared stylesheet `../assets/essays.css`.

**5. Reading guide → Your Turn.** Teach each selected question in story slides first, then put a **Your Turn · Review Question N** slide after them. That slide asks the student to answer from memory, has a button that opens the reading guide in a new tab, gives "How to build a strong answer" bullets that name the evidence slides, and includes a self-check. Mark the teaching slides `data-rq="N"` or use the Ch12 kicker "QN story · …". Not every question has to be used; put the unused ones in the Pierian Spring section. todo.md lists the selected questions for each chapter.

**6. Required structure.**
- A title-hero first slide and a how-to-use/roadmap slide.
- Narrative acts and the Your Turn slides.
- A bridge to the next lecture.
- A Pierian Spring section ("Beyond the lecture · Optional Independent Study").
- A sources/credits slide.

`Reveal.initialize({hash:true, slideNumber:'c/t', …})` with Reveal 4.5.0 from cdnjs, the `black` theme, and **Crimson Pro** (headings) and **Lora** (body) from Google Fonts. Use the Ch12 CSS type scale; don't use inline font sizes or families.

**7. Images.** Every image is a local **WebP** file in `chapter-NN/images/chNN-lecN/`. No base64, no hotlinks, no missing files. Every image has alt text and a credit, and AI images are labelled. Videos need a text summary in the notes. Run `_tools/webp_convert.py DECK` to build the new deck with converted images. It never overwrites anything.

**8. Permanent slide IDs.** Every slide (including vertical sub-slides) gets `data-slide-id="A"`, `"B"` … `"Z"`, `"AA"`, `"AB"` …, assigned once in slide order when the deck is created. Never renumber or reuse an ID. A new slide takes the next unused letter after the highest one ever used. Keep the old word IDs as `data-slug="map-1050"` (and `id=` if you need to preserve existing hash links). Copy the PERMANENT SLIDE IDS header comment, the `#slideIdLabel` CSS (fixed, `left:12px; bottom:10px`, 13px, muted, with an `.on-image` variant, hidden in print) and the label script from `american-history/presentations/chapter-10/ch10_L1-democratization-of-culture.html`. Each chapter folder has an `ids.json` ledger: `{"<deck>.html": {"assigned": ["A",…], "retired": [], "next": "AC"}}`.

**9. Essay landing page (plan, not built yet).** Rebuild `public/hist-270/background_essays/index.html` on the HIST 101 index pattern:
- one section per chapter (01, 02, 03, 04, 05, 08, 12), each with a `card--essay` for every lecture;
- a "coming" state for essays that are not written yet;
- the Ch05 research-reconnaissance page kept as `card--recon`.

Rename `HIST270_ch05_lec2_early_tang_power_revFA26.html` to `ch5-l2-early-tang-power.html` and add a redirect stub. Reconcile `assets/essays.css` with the HIST 101 version. Open decision for Steven: should each deck's credits slide link to its essay?
