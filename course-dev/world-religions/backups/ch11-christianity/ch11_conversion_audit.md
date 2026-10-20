# Ch11 Christianity lecture revision pass: conversion and content-loss audit

Prepared 2026-10-19 (America/Chicago) for Steven Austin. This covers REL 210 Ch11 Lectures 1–3 and the two new mini-lectures. The full-chapter and Rabbit Hole supplements were not edited. Process: `lecture-deck-revision-pass` workflow, with the Ch10 Judaism decks (especially L3) as the house-style model. Nothing has been committed.

## Files

| Deck | Original file (archived in `backups/ch11-christianity/`) | New file | Slides (old → new) |
|---|---|---|---|
| Lecture 1 | `rel210-ch11-lecture1-christianity-origins-historical-development.html` | `…_revFA26.html` | 46 → 54 (A–BB) |
| Lecture 2 | `rel210-ch11-lecture2-christianity-jesus-salvation-doctrine.html` | `…_revFA26.html` | 44 → 45 (A–AS) |
| Lecture 3 | `rel210-ch11-lecture3-christianity-ethics-worship-practice.html` | `…_revFA26.html` | 32 → 36 (A–AJ) |
| Mini-lecture (new) | — | `rel210-ch11-supplement-persecution-to-nicaea_revFA26.html` | 17 (A–Q) |
| Mini-lecture (new) | — | `rel210-ch11-supplement-house-church-to-basilica_revFA26.html` | 15 (A–O) |

The original lecture files were removed from the public folder; the archived copies stay in backups. `index.html` now links the `_revFA26` lectures and has two new Mini-Lecture cards. The only other references to the old filenames anywhere in the repo are the `deck` fields of the three `christianity-lecture-N-manifest.json` files. Those are generation metadata for the originals and were left unchanged (judgment call).

## Global changes (all three lectures)

- Rebuilt in the Ch10 L3 house style:
  - Reveal.js 4.5.0 on a 960×700 canvas.
  - Title-overlay title slides and full-bleed AI section dividers.
  - Purple reading-guide pauses.
  - Card, split, and flow layouts.
  - Speaker notes under "Understanding This Slide" and "Sources".
- **Permanent slide IDs.** The original Ch11 decks had none, so IDs were assigned once, in final order, with a PERMANENT SLIDE IDS head comment, an ID log, and `#slideIdLabel`.
- **Story first.** Most content slides now open their notes with a short narrative for 17–19-year-olds.
- **Dense slides split.** Detail moved to notes. PowerPoint build duplicates were merged.
- **Popups are accessible.** They use role=dialog and role=button triggers. Esc closes only the popup (capture-phase handler). Focus returns to the trigger. Tab stays on the current slide.
- **Pauses follow the reading guide.** Each pause gives one minute of recall from memory, then students answer on the live worksheet using textbook anchors. The original Pause & Reflect prompts are kept in the notes as optional discussion.
- **Old "Pause & Synthesize" slides** are restyled as "Looking Back" closing slides.
- **"Beyond the Lecture" slide** added at the end of each deck. It links the deck's mini-lecture plus the Rabbit Hole or full chapter.
- **Bible quotes** are all NRSV (1989) and checked verse by verse on biblestudytools.com (NRS). A local cache is in `/workspace/ch11/nrsv/`.
- **Images** converted to WebP q82 with web-safe `rel210-ch11-…` names. Every image has alt text written after viewing it, and a caption.

## Lecture 1 main changes

- **A:** new AI title background (Galilee fishing boat at dawn), with Mark 1:17 as the opening story.
- **E:** new reading-guide pause, Q5 (Names), after D.
- **K–P (Passion):** a single Bloch image plus five clip slides. Each has a still from the original deck and a "Watch the clip on YouTube" button. The clips were identified by matching thumbnails: 997ni1xcmKw, rs-nHYYmors, nlALmOx8Sk0, kPfC9kSPP_Q, MlKetn7ZiNU.
- **J (wilderness still):** the source clip could not be identified. A related baptism clip (9_dr9njVzKM) is linked and labeled as not confirmed.
- **Q:** Ascension slide added (Acts 1).
- **R:** pause Q3 (Passion).
- **X:** pause Q1 (Paul), in the old pause-1 slot.
- **AA/AB:** old 24 split. AB adds Tertullian, Apology 50, the Perpetua story, and a mini-lecture link.
- **AD:** empty "early Christian expansion map" placeholder dropped (flagged).
- **AE/AF:** old 27/28 build merged, then re-split. AE keeps the old title as its kicker. Eusebius VC 1.28 and Lactantius DMP 44 are quoted verbatim; *In hoc signo vinces* is marked as later tradition. "One God, one Church, one Emperor" is hedged as a modern summary. Long pasted notes were cleaned.
- **AI:** pause Q2 (Constantine), in the old pause-2 slot.
- **AL:** "will only last another 100 years" corrected to "about 150 more years (until 476)".
- **AM/AN:** schism bullets moved from AM to AN.
- **AO:** pause Q3 (Iconoclasm).
- **AQ/AR:** old 38 split. The printing-workshop AI image is on AR.
- **AT/AU:** old 40 split. AU quotes Merriam-Webster "indulgence" sense 4. Leo X's indulgence is dated 1515. Tetzel's rhyme is hedged.
- **AW/AX:** Luther's St. Anne vow is hedged as Luther's own later recollection. The nailing of the theses is hedged as tradition. "95 Thesis" corrected to "Ninety-five Theses".
- **BA/BB:** synthesis restyled as Looking Back, plus Beyond (Persecution to Nicaea and the full chapter).

## Lecture 2 main changes

- **A:** AI gospel-book title, with Mark 8:29 ("But who do you say that I am?") as the frame for the whole lecture.
- **C, P, AE:** AI dividers (nativity stable, council of Nicaea, printing workshop).
- **G:** old 7+8 (build) merged. "Not the political savior Jews…were looking for" softened to "many hoped for". Matt 1:21 changed from KJV to NRSV.
- **H:** Luke 1:35 is now exact NRSV (the original was labeled NRSVUE with mixed punctuation).
- **I:** John 8:58 changed from KJV to NRSV. The note "identical with the Septuagint usage in Ex. 3:14" now reads "echoes" (*egō eimi* vs. *egō eimi ho ōn*). The original note is kept in full.
- **J:** untitled "Slide 27" given a title, with Romans 3:23.
- **K:** Luke 4 Nazareth story. The Merriam-Webster soteriology definition is quoted exactly.
- **L:** Gethsemane (Luke 22:44). The note says the NRSV brackets the verse.
- **N:** Matt 28:19 with 10:5–6.
- **O:** Symbols. The three empty "Reserved image" slots are replaced by the Lecture 1 Chi-Rho mosaic. The old pause-1 slide (17), which was not a reading-guide question, is retired and its prompt moved to O's notes.
- **Q/R:** old 19 (nine bullets) split.
- **S:** council timeline added.
- **T–W:** the four-step heresy build is now one slide per heresy, with a tracker line. Adds the Nicaea anathema "there was when he was not".
- **X:** old 25+26 merged. Creed phrases use the ecumenical text (BCP 1979; UMH 880).
- **Z:** Britannica quote verified.
- **AA:** Britannica "Trinity" quote verified verbatim. "Jesus subordinate to the Father" reframed as describing some early texts.
- **AC:** Holy Spirit creed quote corrected: the original silently omitted "and the Son", which is now bracketed as the *filioque*.
- **AD:** pause Q7 (Nicene Creed), in the old pause-2 slot.
- **AH:** Luther's tower experience (Romans 1:17), hedged as a 1545 recollection.
- **AI:** magisterium footnote turned into an accessible popup.
- **AJ:** Diet of Worms story. "Here I stand" is hedged as possibly added by printers.
- **AK:** pause Q4 (Luther). New.
- **AL:** the Zwingli note, pasted as a markdown outline, rewritten as prose with every fact kept. The WCE 33,000 note is kept and hedged (quoted from secondary sources, not checked against the print edition).
- **AN:** AI Anabaptist baptism image: a secret baptism by pouring from a ladle in a candlelit farmhouse room, which echoes the first 1525 baptism in a Zurich house. The Grebel/Blaurock/Manz story is in the notes.
- **AO:** pause Q5 (Radical Reformation). New.
- **AP:** precision note on the Index (1559 / 1564).
- **AQ:** Ignatius story.
- **AR/AS:** Looking Back, plus Beyond (Persecution to Nicaea and the Rabbit Hole). Beyond notes that the Rabbit Hole covers reading-guide Q6, Q11, and Q12.

## Lecture 3 main changes

- **A, C, U, AC:** AI title and dividers (hillside sermon, Good Samaritan, house church, Easter Vigil).
- **E:** "throughout Judea" corrected to "throughout Galilee and Judea". The Syria Palaestina note is kept.
- **E, G, H, I, K:** the old 5/7/8/10 build (one Bloch slide in four steps) is now single-idea slides.
- **F, J, N, P, Z, AA:** videos get titles. Untitled video slides were titled. The two chant videos from old 25 are now on Z and AA.
- **I:** antitheses on the slide and in the notes changed to NRSV. The stray "4o" copy-paste artifact removed from the notes.
- **K:** Matthew 5:17 (NRSV).
- **L:** pause Q8 (Sermon on the Mount). New.
- **M:** Mark 4:34 changed from KJV to NRSV. The KJV is kept in the original note. The note text's resemblance to the LDS Bible Dictionary "Parables" entry is flagged as unverified, and the unfinished "See" is removed.
- **O:** Matthew 22:37–39. **P:** title "A New Commandment I Give Unto You" changed to NRSV "I Give to You".
- **R:** the two PowerPoint text-as-picture PNGs (Ten Commandments; Sermon on the Mount) converted to real HTML text, wording unchanged.
- **T:** old pause 19 retired, with its prompt moved to the notes. Good Samaritan story added.
- **W:** retitled "From House Church to Basilica", with a mini-lecture link.
- **Y:** Acts 2:4. Azusa Street story (1906) in the notes, with the global figure deliberately rounded. AI Pentecostal worship image.
- **AB:** pause Q10 (charismatic/Pentecostal), in the old pause-2 slot.
- **AE:** CCC 1131 quoted verbatim. CCC 1128 and 1129 in the notes.
- **AF:** pause Q9 (sacraments). New.
- **AG:** liturgical year shown as a timeline, with the full season list in the notes.
- **AH:** 1 Cor 15:3–4.
- **AI/AJ:** Looking Back, plus Beyond (House Church to Basilica and the Rabbit Hole).
- **Kickers:** "Coverage Addition · …" kickers shortened to the topic name (for example "Doctrine" or "Worship and Ritual").

## Reading-guide pause placement

| Guide Q | Topic | Deck / slide |
|---|---|---|
| Q5 | Names | L1 E |
| Q3 | Passion | L1 R |
| Q1 | Paul | L1 X |
| Q2 | Constantine | L1 AI |
| Q3 (2nd) | Iconoclasm | L1 AO |
| Q7 | Nicene Creed | L2 AD |
| Q4 | Luther's Reformation | L2 AK |
| Q5 (2nd) | Radical Reformation | L2 AO |
| Q8 | Sermon on the Mount | L3 L |
| Q10 | Charismatic / Pentecostal | L3 AB |
| Q9 | Seven sacraments | L3 AF |
| Q6, Q11, Q12 | Vatican II, evangelicalism, Global South | No pause. Taught in the Rabbit Hole, which is linked from L2 AS and L3 AJ. |

The reading guide numbers two questions "Question 3" and two "Question 5". Each pause cites the section name to tell them apart.

## Supplements (one per deck that has one; Ch10 rabbit-hole layout in the Ch11 brown/cream palette)

- **From Persecution to Nicaea** (17 slides). Linked from L1 AB, AE, AF, and BB, and from L2 Q and AS.
  - Pliny and Trajan, *Letters* 10.96–97 (Fordham translation, verbatim).
  - Perpetua 1.2 and Tertullian, *Apology* 50 (New Advent, verbatim).
  - The Great Persecution: Lactantius DMP 12–13, with the date of February 23, 303.
  - The Milvian Bridge: Eusebius VC 1.28 and Lactantius DMP 44, verbatim.
  - The "Edict of Milan": DMP 48, verbatim, with a note that it was neither an edict nor issued at Milan.
  - Arius and Nicaea; Theodosius in 380 and the council of 381. The edict *Cunctos populos* is paraphrased, not quoted.
- **From House Church to Basilica** (15 slides). Linked from L3 W and AJ.
  - Acts 2:46 and Romans 16:5 (NRSV).
  - *Didache* 9 and Justin, *1 Apology* 67 (New Advent, verbatim).
  - Dura-Europos: the remodeling date is hedged.
  - The catacomb "hiding place" myth.
  - Constantine's basilicas: dates given with "c.".
- Both supplements:
  - have permanent IDs, an accessible keyboard panel (Esc closes only the panel and focus returns), and Sources slides with back links;
  - have cards on `index.html`;
  - reuse existing AI images, so no new image generation was needed.

## Images

- **Converted from the original decks** (WebP q82, renamed `rel210-ch11-lN-<subject>.webp`):
  - L1: image3, 4, 5, 6, 14–19, 25, 26, 27, 30, 31, 32.
  - L2: image20, 21, 22, 23, 33.
  - L3: image7, 10, 12.
- **New AI images** (fine-art oil, indigo and gold, nothing anachronistic or graphic). There are 17 files:
  - L1: `rel210-ch11-l1-title-galilee-dawn`, `-l1-section-empty-tomb`, `-l1-section-chi-rho-shields`, `-l1-section-byzantine-icons`, `-l1-pentecost`, `-l1-paul-dictates-letter`, `-l1-catacomb`.
  - Shared by L1 and L2: `-printing-workshop`.
  - L2: `-l2-title-gospel-book`, `-l2-section-nativity`, `-l2-section-nicaea`, `-l2-anabaptist-baptism`.
  - L3: `-l3-title-hillside-sermon`, `-l3-section-good-samaritan`, `-l3-section-house-church`, `-l3-section-easter-vigil`, `-l3-pentecostal-worship`.
- **Final image set (synced 2026-10-19, 9:50 PM CDT).** The 17 images were regenerated and converted after my first versions failed to sync. Some differ from the first versions, so every alt text, caption, and image note was rewritten after viewing the final file (see "Image sync" below).
- **Shown out of historical detail** (noted in the speaker notes):
  - **Chi-Rho shields (L1 Y; Persecution to Nicaea A, H):** the soldiers wear segmented plate armor and crested helmets, which belong to the first- and second-century Roman army. By 312, most soldiers wore mail and simpler ridge helmets.
- **Historically appropriate details, noted in the speaker notes:**
  - The Nicaea emperor is clean-shaven, as Constantine appears on his coins.
  - The Anabaptist baptism is indoors by candlelight, like the first 1525 baptism.
  - The Easter Vigil paschal candle is marked with a cross, as in the rite of blessing the candle.
- **Copyright flags** (modern devotional images kept from the original decks): image4 and image5 (L1), image22 (I AM, with an artist's "courtesy of" watermark), image23 (L2), and image12 (L3). Consider public-domain replacements.

## Quote verification summary

- **Bible (NRSV, verified):**
  - Mark 1:17; 1:15; 8:29; 4:34
  - Acts 1:3, 9, 11; 2:2–4, 38, 41, 42, 46; 9:3–4; 11:26
  - Matt 1:21; 3:17; 5:1–2, 3–17, 21–22, 27–28, 31–34, 38–39, 43–44; 10:5–6; 21:9; 22:37–39; 28:19
  - Luke 1:35; 2:7; 3:23; 4:18–19, 21; 15:20; 22:44
  - John 1:14; 8:58; 13:34–35
  - Rom 1:17; 3:23; 16:5
  - 1 Cor 11:24; 12:10; 13:13; 15:3–4; 16:19
  - Gal 2:16; 3:28; 5:22–23
  - Deut 6:5; Lev 19:18
- **Creeds:** BCP 1979 (bcponline.org) and United Methodist Hymnal 880 (umc.org), verbatim.
- **Catechism:** CCC 1128, 1129, 1131 (vatican.va), verbatim.
- **Reference works:**
  - Merriam-Webster: "soteriology"; "indulgence" sense 4.
  - Britannica: "Nicene Creed"; "Trinity".
- **Early Christian texts (verbatim):**
  - New Advent: Eusebius VC 1.28; Lactantius DMP 12, 13, 44, 48; Tertullian, *Apology* 50; Perpetua 1.2; *Didache* 9; Justin, *1 Apology* 67.
  - Fordham: Pliny, *Letters* 10.96–97.
- **YouTube titles and channels:** all eight videos checked with oEmbed.
- **Hedged, not cut:**
  - *In hoc signo vinces* (later tradition)
  - "One God, one Church, one Emperor" (a modern summary)
  - Tetzel's rhyme
  - Luther's St. Anne vow, the nailing of the theses, "Here I stand", and the 1545 tower-experience recollection
  - the WCE 33,000 passage (secondary sources)
  - "there was when he was not" (translations vary)
  - the LDS Bible Dictionary source of the parables note
  - the Dura-Europos dates, the catacomb legend, and the basilica dates
  - the Pentecostal global figure (rounded)
  - Augustine's "Take up and read" (as commonly translated)
- **Cut:** nothing that was in the originals. One planned addition was not made because it could not be verified: a Britannica definition of Docetism (the fetch was blocked), so the slide keeps the original definition.
- **Textbook errors** are in `ch11_textbook_cautions.md`, not in the decks.

## Content-loss result

**Nothing was dropped.** Every old slide maps to at least one new slide; see the tables below. Every fact, quote, image, video, and link from the originals is on a slide, in the notes, or in a mini-lecture. Specifically:

- **Images:** all 24 original images are used. The two text PNGs are now real text.
- **Videos:** all seven embeds are present (7bjWhNYl5dY in L1, plus six in L3).
- **Notes:** all original speaker notes are kept, cleaned where they were pasted outlines.

Intentional removals, none of which is content:

- **L1 AD:** the empty map placeholder.
- **L2 O:** three empty "Reserved image" slots.
- The "Coverage Addition ·" kicker labels.
- The "4o" and "See" fragments in the notes.
- Two retired non-guide pause slides (L2 old 17, L3 old 19), whose prompts are kept in the notes.

## Tests (2026-10-19, Chrome via Playwright, local server)

- **Overflow:** none at 960×700, 1280×720, or 1920×1080, in all 3 lectures and both mini-lectures.
- **Page health:** no console or page errors, no HTTP errors, and no broken images. Every slide's ID label matches its `data-slide-id`.
- **Keyboard:**
  - Tab never leaves the current slide.
  - Enter and Space open a popup (L1, L2), and focus moves into it.
  - Esc closes only the popup, without toggling overview, and focus returns to the trigger.
  - Esc toggles overview when no popup is open.
  - The keyboard-shortcuts panel opens with Enter and closes with Esc, and focus returns (all 5 decks).
- **Local links:** all `href` and `src` targets in the 5 new files resolve.
- **AI images:** the final run used the 17 real AI images (no placeholders). Full screenshot sets for all 5 decks are in `/workspace/ch11/shots/`.
- **On Atlas:** every `images/` reference in the 5 decks resolves to a file in the repo working tree, and all 17 AI files match the box copies by hash.


## Image sync (2026-10-19, after 9:50 PM CDT)

I viewed all 17 final AI images and rewrote their alt text, captions, and image notes to match what each one shows. Where an image appears in more than one deck, the same alt text is used everywhere.

| Image | What changed |
|---|---|
| `l1-title-galilee-dawn` | Alt text: an empty boat with a bare mast and spilled nets at the shore at sunrise (no sail, no fishermen). The note now ties the empty boat to the brothers who left their nets. |
| `l1-section-empty-tomb` | Alt text: the round stone rolled aside, with linen cloths inside (no olive trees or city). The note adds John 20:5&ndash;7. |
| `l1-section-chi-rho-shields` | Alt text: two soldiers with gold Chi-Rhos on dark-blue shields, in plate armor with crested helmets. The anachronism note is added in L1 and Persecution to Nicaea. The divider panel moved to the upper right so the shields stay visible. |
| `l1-section-byzantine-icons` | Alt text: an icon screen with Christ, Mary, and saints; red hanging lamps; incense (L1 and House Church to Basilica). |
| `l1-pentecost` | Alt text: the number of women and men, head wraps, and the row of flames. |
| `l1-paul-dictates-letter` | Alt text: a window onto a harbor under a full moon. The note no longer mentions a hanging lamp, which this version does not have. |
| `l1-catacomb` | Alt text: "burial niches cut into its walls" (all 3 decks). |
| `printing-workshop` | Alt text: a printer studying a sheet and a worker picking letters from a type case. L1 and L2 now share the same alt text. |
| `l2-title-gospel-book` | Alt text: a gold-and-blue ornamental panel and a single tall candle. |
| `l2-section-nativity` | Alt text: a stone stable (not a cave), an ox and a donkey, and a star. The note says the star is from Matthew 2:9 and the stable, ox, and donkey are later tradition. |
| `l2-section-nicaea` | Alt text: a clean-shaven emperor in a laurel wreath, with bishops debating. The beard note was removed (L2 and Persecution to Nicaea). The divider panel moved to the lower left so the emperor stays visible. |
| `l2-anabaptist-baptism` | Alt text, caption, and note: indoors, candlelit farmhouse room, water poured from a ladle. The river and outdoor wording was removed. |
| `l3-title-hillside-sermon` | Alt text rewritten from the final image; the "re-check" flag was removed. Also fixed a garbled Matthew 5:1&ndash;2 quotation in the slide A notes; it now matches the NRSV exactly. |
| `l3-section-good-samaritan` | Alt text: a mountain road at sunset and a donkey with packs. The "re-check" flag was removed. A narrower panel on the right keeps both figures visible. |
| `l3-section-house-church` | Alt text and notes: floor cushions, a low table, bread, cups, one oil lamp, and children (no stone benches) (L3 and House Church to Basilica). |
| `l3-section-easter-vigil` | Alt text: a Gothic church and a paschal candle marked with a cross (there is no baptismal font in this version). The note explains the cross. |
| `l3-pentecostal-worship` | Alt text and caption: Black worshippers, a singer in gold, drums, and electric guitar. |

No slide was added, removed, or renumbered in this step, so the slide IDs and the content-loss result are unchanged.

## Divider audit (2026-10-19, 10:30 PM CDT)

Steven noted that "slide S has no background image." That is **L1 S, "The Earliest Church."** L2 S (the council timeline) and L3 S (Paul's letters) are content slides.

In the original PowerPoint, L1 S, Z, AK, and AS used the section-header layout, as did L1 F and G and L2 D and Y. In the rebuild, L1 S, Z, AK, AS and L2 Y had become plain text slides with no background image.

**What changed:**
- **Rebuilt as full-bleed dividers:** L1 S, Z, AK, AS and L2 Y now use the same markup as the Ch10 Judaism dividers: `title-slide`, `data-background-image` (cover, centered), and a `title-overlay` panel with kicker, h1, rule, and subtitle, plus an sr-only background description.
- **No content lost:**
  - The date ranges are now the kickers.
  - The takeaway lines are now the subtitles. L1 AS keeps "Textbook section 11-2E."
  - The L2 Y takeaway moved to the notes.
- **Images:** the five images were requested in `/workspace/ch11/ai/needed_dividers.tsv` and arrived at 10:42 PM CDT. I viewed each one and wrote its alt text and background note from what it shows (see below).
- **Left as content slides:** L1 F and G and L2 D. They now carry cards, a definition, or a quotation, and D directly follows the C divider.
- **Tests (after the images arrived):** L1, L2, and House Church to Basilica pass at 960×700, 1280×720, and 1920×1080, with no overflow, page or HTTP errors, broken images, or label problems, and the keyboard checks pass.

### Divider images in place (2026-10-19, 10:45 PM CDT)

| Slide | Image | Alt text / notes | Panel |
|---|---|---|---|
| L1 S | `rel210-ch11-l1-period-earliest-church.webp` | Travelers on a stone road below a walled hill city. **Caveat in notes:** the hilltop temple is stylized and looks like a Greek temple such as the Parthenon, not the Second Temple as Herod rebuilt it. | New `left-high` position, which keeps the travelers' heads clear |
| L1 Z | `rel210-ch11-l1-period-ancient.webp` | A columned basilica with a gold apse mosaic of Christ enthroned among saints. The notes point to Santa Pudenziana (c. 400) as a real example. | Default `left-sky`, over the dark wall; the apse stays clear |
| L1 AK | `rel210-ch11-l1-period-medieval-cathedral.webp` | A Gothic cathedral front with a rose window at dusk and pilgrims with staffs. Paired with the icon screen on AJ. | Default, over the sky |
| L1 AS | `rel210-ch11-l1-period-reformation.webp` | A man in a cap reads a printed sheet aloud in a half-timbered square beside a fountain statue, with townspeople listening. | Default, over the dark sky |
| L2 Y | `rel210-ch11-l2-section-common-teachings.webp` | Men in white around an octagonal pool in a domed, gold-mosaic baptistery. **Caveat in notes:** the bishop's mitre is a later style. | Default, over the dark wall |

- **House Church to Basilica, Trail III (K):** the background is now `rel210-ch11-l1-period-ancient.webp` instead of the Orthodox icon screen. Its alt text matches L1 Z, and the notes were updated.
- **Other changes:** the temporary "wire before the image exists" flag was removed from the builders. No slide IDs changed, and the content-loss audit is unchanged.
## Automated checks

- Old decks: the archived originals in `course-dev/world-religions/backups/ch11-christianity/`. New decks: the `_revFA26` files.
- Each old slide was extracted into text units (every leaf text block on the slide, plus every speaker-note paragraph); images, iframes, and links were listed separately.
- **Check 1 (verbatim):** each old unit, normalized (lowercase, punctuation stripped), was searched as a contiguous string in the text, notes, and popups of the new slide(s) it maps to.
- **Check 2 (word coverage):** the share of each unit's words (3+ letters) found in the mapped new slide(s); anything under 90% was flagged and checked by hand.

- **Lecture 1** (`rel210-ch11-lecture1-christianity-origins-historical-development_revFA26.html`, formerly `rel210-ch11-lecture1-christianity-origins-historical-development.html`): 46 old slides &rarr; 54 new slides. 75 old text units are not verbatim (rewordings from splitting, NRSV/quote corrections, cleaned notes); 23 are below 90% word coverage. All were checked by hand: none is a lost fact, quote, image, video, or link (see "Content-loss result").
- **Lecture 2** (`rel210-ch11-lecture2-christianity-jesus-salvation-doctrine_revFA26.html`, formerly `rel210-ch11-lecture2-christianity-jesus-salvation-doctrine.html`): 44 old slides &rarr; 45 new slides. 72 old text units are not verbatim (rewordings from splitting, NRSV/quote corrections, cleaned notes); 26 are below 90% word coverage. All were checked by hand: none is a lost fact, quote, image, video, or link (see "Content-loss result").
- **Lecture 3** (`rel210-ch11-lecture3-christianity-ethics-worship-practice_revFA26.html`, formerly `rel210-ch11-lecture3-christianity-ethics-worship-practice.html`): 32 old slides &rarr; 36 new slides. 35 old text units are not verbatim (rewordings from splitting, NRSV/quote corrections, cleaned notes); 20 are below 90% word coverage. All were checked by hand: none is a lost fact, quote, image, video, or link (see "Content-loss result").

## Lecture 1: slide mapping (old slide number &rarr; new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Christianity Lecture 1 Origins and Historical Development | A | Christianity: Origins & Historical Development | 100% |
| 2 | Lecture Roadmap | B | Three Historical Transformations | 100% |
| 3 | From Jesus Movement to Earliest Church | C | Section I: From Jesus Movement to Earliest Church | 100% |
| 4 | Names: Christianity | D | Names: Christ, Christian & Christianity | 100% |
| 5 | The Christian Present as Shaped by Its Past | F | The Christian Present as Shaped by Its Past | 100% |
| 6 | The Life, Death, and Resurrection of Jesus Christ | G | The Life, Death, and Resurrection of Jesus Christ | 100% |
| 7 | The Life, Death, and Resurrection of Jesus Christ (ca. 4 BC – 30 AD) | H | Where the Story Comes From | 100% |
| 8 | The Life, Death, and Resurrection of Jesus Christ | I | The Twelve | 94% |
| 9 | Slide 7 | J | John the Baptist & the Wilderness | 100% |
| 10 | The Life, Death, and Resurrection of Jesus Christ | K | The Passion: The Final Week | 97% |
| 11 | The Last Supper John 13: 1-35 | L | The Last Supper <span style="font-size:.6em">(John 13:1–35)</span> | 100% |
| 12 | Jesus is Condemned Before Pilate Matt 27: 1-2, 11-25 | M | Jesus Is Condemned Before Pilate <span style="font-size:.6em">(Matt 27:1–2, 11–25)</span> | 100% |
| 13 | Jesus Is Scourged and Crucified Matt 27: 26-50 | N | Jesus Is Scourged and Crucified <span style="font-size:.6em">(Matt 27:26–50)</span> | 100% |
| 14 | Jesus is Laid in a Tomb Matt 27: 57-60 | O | Jesus Is Laid in a Tomb <span style="font-size:.6em">(Matt 27:57–60)</span> | 100% |
| 15 | Jesus is Resurrected John 20: 3-18 | P | Jesus Is Resurrected <span style="font-size:.6em">(John 20:3–18)</span> | 100% |
| 16 | Earliest Church | S | The Earliest Church | 100% |
| 17 | Spotlight On: | T | Spotlight On: The Earliest Church | 100% |
| 18 | Pentecost and the Earliest Church | U | Pentecost and the Earliest Church | 96% |
| 19 | Paul and the Gentile Mission | V | Paul and the Gentile Mission | 96% |
| 20 | From Jewish Movement to Distinct Church | W | From Jewish Movement to Distinct Church | 98% |
| 21 | Pause & Reflect | X | Pause & Reflect | 100% |
| 22 | From Marginal Movement to Imperial Religion | Y | Section II: From Marginal Movement to Imperial Religion | 100% |
| 23 | Ancient Period | Z | The Ancient Period | 100% |
| 24 | Growth of Church | AA, AB | Growth of the Church: New Leaders; Persecution and Martyrs | 100% |
| 25 | Why Did Christianity Grow | AC | Why Did Christianity Grow? | 98% |
| 26 | Christianity Beyond the Roman West | AD | Christianity Beyond the Roman West | 97% |
| 27 | Constantine and the Christianization of the Roman Empire | AE, AF | Constantine at the Milvian Bridge; From Toleration to Imperial Religion | 100% |
| 28 | Constantine and the Christianization of the Roman Empire | AE, AF | Constantine at the Milvian Bridge; From Toleration to Imperial Religion | 100% |
| 29 | St Augustine (354-430) | AG | St. Augustine (354–430) | 100% |
| 30 | Monasticism | AH | Monasticism | 96% |
| 31 | Pause & Reflect | AI | Pause & Reflect | 100% |
| 32 | Christendom, Division, Reform & Modernity | AJ | Section III: Christendom, Division, Reform & Modernity | 100% |
| 33 | Byzantine, Medieval, and Renaissance Christianity | AK | Byzantine, Medieval, and Renaissance Christianity | 100% |
| 34 | Eastern Orthodox | AL | Eastern Orthodox | 96% |
| 35 | Iconoclasm Controversy | AM, AN | The Iconoclasm Controversy; The Filioque Controversy & the Schism | 98% |
| 36 | Filioque Controversy | AN | The Filioque Controversy & the Schism | 99% |
| 37 | The Western Medieval Church | AP | The Western Medieval Church | 98% |
| 38 | Crusades and Renaissance | AQ, AR | The Crusades · from 1095; The Renaissance · 1300s–1500s | 98% |
| 39 | Reformation in the Western Church | AS | Reformation in the Western Church | 100% |
| 40 | Corruption in the Western Church | AT, AU | Corruption in the Western Church; Paying for Pardon? Indulgences | 98% |
| 41 | Reform prior to Luther | AV | Reform Prior to Luther: John Wycliffe | 99% |
| 42 | Martin Luther | AW | Martin Luther | 100% |
| 43 | The Indulgences Controversy | AX | The Indulgences Controversy | 98% |
| 44 | After the Reformation | AY | After the Reformation: 1600–1800 | 98% |
| 45 | Christianity Confronts Modernity | AZ | Christianity Confronts Modernity | 98% |
| 46 | Historical Synthesis | BA | Looking Back: Four Transformations | 100% |
| (new) | (none) | E | Pause & Reflect | n/a |
| (new) | (none) | Q | Forty Days, Then the Ascension | n/a |
| (new) | (none) | R | Pause & Reflect | n/a |
| (new) | (none) | AO | Pause & Reflect | n/a |
| (new) | (none) | BB | Beyond the Lecture: From Persecution to Nicaea | n/a |

**Full ID list (L1):** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AH AI AJ AK AL AM AN AO AP AQ AR AS AT AU AV AW AX AY AZ BA BB

## Lecture 2: slide mapping (old slide number &rarr; new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Christianity Lecture 2 Jesus Salvation and Christian Doctrine | A | Jesus, Salvation & Christian Doctrine | 100% |
| 2 | Lecture Roadmap | B | Three Doctrinal Questions | 100% |
| 3 | The Person & Work of Christ | C | Section I: The Person & Work of Christ | 100% |
| 4 | Christology | D | Christology | 100% |
| 5 | Divine and Human Nature | E | Divine and Human Nature | 100% |
| 6 | Mary and the Logic of the Incarnation | F | Mary and the Logic of the Incarnation | 99% |
| 7 | Titles of Christ | G | Titles of Christ | 100% |
| 8 | Titles of Christ | G | Titles of Christ | 100% |
| 9 | Titles of Christ | H | Titles of Christ: Son of God | 99% |
| 10 | Titles of Christ | I | Titles of Christ: I AM | 97% |
| 11 | Slide 27 | J | Why a Savior? Sin and Justification | 100% |
| 12 | Work of Jesus - Soteriology | K | Work of Jesus: Soteriology | 100% |
| 13 | Work of Jesus - Soteriology | L | Work of Jesus: Atonement | 98% |
| 14 | How Does the Cross Save | M | How Does the Cross Save? | 98% |
| 15 | Work of Jesus - Soteriology | N | Work of Jesus: Salvation for All Nations | 99% |
| 16 | Symbols of Christianity | O | Symbols of Christianity | 98% |
| 17 | Pause and Reflect | O | Symbols of Christianity | 100% |
| 18 | Creeds, Trinity & Orthodoxy | P | Section II: Creeds, Trinity & Orthodoxy | 100% |
| 19 | Orthodoxy Creation | Q, R | Nicaea, 325: Defining Orthodoxy; When Heresy Became a Crime | 99% |
| 20 | Orthodoxy Creation | S | Orthodoxy Took Many Councils | 94% |
| 21 | Christian Heresy | T | Christian Heresy: Arianism | 100% |
| 22 | Christian Heresy | U | Christian Heresy: Monophysite / Miaphysite | 99% |
| 23 | Christian Heresy | V | Christian Heresy: Docetism | 100% |
| 24 | Christian Heresy | W | Christian Heresy: Monarchianism | 96% |
| 25 | Nicene Creed | X | Nicene Creed: Reading for the Arguments | 98% |
| 26 | Nicene Creed | X | Nicene Creed: Reading for the Arguments | 99% |
| 27 | Common Teachings | Y | Common Teachings | 100% |
| 28 | Niceno-Constantinopolitan Creed | Z | Niceno-Constantinopolitan Creed | 100% |
| 29 | Doctrine of the Trinity | AA | Doctrine of the Trinity | 97% |
| 30 | The Holy Trinity | AB | The Holy Trinity: Father and Son | 100% |
| 31 | The Holy Trinity | AC | The Holy Trinity: Holy Spirit | 99% |
| 32 | Pause and Reflect | AD | Pause & Reflect | 100% |
| 33 | Scripture, Grace & Reformation | AE | Section III: Scripture, Grace & Reformation | 100% |
| 34 | The New Testament | AF | The New Testament | 99% |
| 35 | Who Interprets Scripture | AG | Who Interprets Scripture? | 99% |
| 36 | A New Theology | AH | A New Theology: Grace, Faith, Scripture | 100% |
| 37 | A New Theology | AI | A New Theology: Priests and Sacraments | 100% |
| 38 | Lutheran Church | AJ | The Lutheran Church | 100% |
| 39 | Floodgates open | AL | The Floodgates Open | 54% |
| 40 | Reformed and Anglican Christianity | AM | Reformed and Anglican Christianity | 98% |
| 41 | The Radical Reformation | AN | The Radical Reformation | 99% |
| 42 | Catholic Counter-Reformation | AP | Catholic Counter-Reformation | 100% |
| 43 | Society of Jesus, Jesuits | AQ | Society of Jesus (Jesuits) | 96% |
| 44 | Doctrinal Synthesis | AR | Looking Back: How the Doctrines Interlock | 100% |
| (new) | (none) | AK | Pause & Reflect | n/a |
| (new) | (none) | AO | Pause & Reflect | n/a |
| (new) | (none) | AS | Beyond the Lecture: Beyond the Lecture | n/a |

**Full ID list (L2):** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AH AI AJ AK AL AM AN AO AP AQ AR AS

## Lecture 3: slide mapping (old slide number &rarr; new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Christianity Lecture 3 Ethics Worship and Christian Practice | A | Following Jesus: Ethics, Worship & Practice | 100% |
| 2 | Lecture Roadmap | B | Three Dimensions of Christian Practice | 100% |
| 3 | The Way of Jesus | C | Section I: The Way of Jesus | 100% |
| 4 | The Kingdom of God | D | The Kingdom of God | 99% |
| 5 | The Life, Death, and Resurrection of Jesus Christ | E | The Sermon on the Mount | 94% |
| 6 | Slide 9 | F | Watch: The Beatitudes | 100% |
| 7 | The Life, Death, and Resurrection of Jesus Christ | G, H | “Blessed Are…”; Why the Beatitudes Matter | 89% |
| 8 | The Life, Death, and Resurrection of Jesus Christ | I | Matthew’s Antitheses: The Higher Law | 80% |
| 9 | Slide 12 | J | Watch: The Higher Law | 100% |
| 10 | The Life, Death, and Resurrection of Jesus Christ | K | Fulfilling the Law | 92% |
| 11 | Parables | M | Parables | 99% |
| 12 | Slide 15 | N | Watch: The Prodigal Son | 100% |
| 13 | The Life, Death, and Resurrection of Jesus Christ | O | A Message Centered on Love | 96% |
| 14 | A New Commandment I Give Unto You | P | A New Commandment I Give to You | 100% |
| 15 | Jesus at the Margins | Q | Jesus at the Margins | 99% |
| 16 | Ethical Foundations | R | Ethical Foundations | 100% |
| 17 | Ethical Foundations | S | Ethical Foundations: Paul’s Letters | 98% |
| 18 | Christian Ethics from Neighbor to Society | T | Christian Ethics: From Neighbor to Society | 99% |
| 19 | Pause and Reflect | T | Christian Ethics: From Neighbor to Society | 100% |
| 20 | Worship & Community | U | Section II: Worship & Community | 100% |
| 21 | Christian Worship and Ritual | V | Christian Worship and Ritual | 100% |
| 22 | Christian Worship and Ritual | W | From House Church to Basilica | 99% |
| 23 | Other Worship Practices | X | Other Worship Practices | 97% |
| 24 | Other Worship Practices | Y | Charismatic and Pentecostal Worship | 99% |
| 25 | Gregorian Chant | Z, AA | Gregorian Chant (1); Gregorian Chant (2) | 100% |
| 26 | Pause and Reflect | AB | Pause & Reflect | 100% |
| 27 | Sacraments, Sacred Time & Christian Hope | AC | Section III: Sacraments, Sacred Time & Christian Hope | 100% |
| 28 | Baptism and Eucharist | AD | Baptism and Eucharist | 99% |
| 29 | The Seven Sacraments | AE | The Seven Sacraments | 98% |
| 30 | The Christian Liturgical Year | AG | The Christian Liturgical Year | 98% |
| 31 | Death Resurrection and Christian Hope | AH | Death, Resurrection, and Christian Hope | 99% |
| 32 | Practice Synthesis | AI | Looking Back: How Practice Teaches Belief | 100% |
| (new) | (none) | L | Pause & Reflect | n/a |
| (new) | (none) | AF | Pause & Reflect | n/a |
| (new) | (none) | AJ | Beyond the Lecture: Beyond the Lecture | n/a |

**Full ID list (L3):** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AH AI AJ

## Appendix: old text units not found verbatim (all accounted for)

Each line: old slide number, slide text or note, first 140 characters. These are rewordings made while splitting dense slides, quote corrections (KJV/NRSVUE to NRSV, creed texts), merged build duplicates, or cleaned-up notes (the Zwingli outline and the WCE quotation with soft hyphens). The content of each survives on the mapped slide(s).

### Lecture 1

- 1 (slide): Lecture 1 · Origins & Historical Development
- 4 (slide): Names: Christianity
- 6 (slide): (ca. 4 B.C. – 30 A.D.)
- 8 (slide): The Life, Death, and Resurrection of Jesus Christ
- 8 (slide): Gathered twelve disciples who were called apostles by the church
- 10 (slide): The Life, Death, and Resurrection of Jesus Christ
- 16 (slide): 33 Ad to 90 AD
- 18 (slide): During the Jewish festival of Shavuot, disciples experience wind, fire, and inspired speech.
- 18 (slide): Believers gather for teaching, prayer, shared meals, mutual aid, and "breaking bread."
- 18 (slide): Pentecost is often called the "birthday of the Church," although Jesus's followers still understood themselves as Jews.
- 19 (slide): Coverage Addition · Origins of the Church
- 19 (slide): Conversion and calling: Paul changes from persecutor to missionary after an experience of the risen Christ.
- 19 (slide): Networks of churches: Paul's journeys and letters connect house congregations across the Roman world.
- 19 (slide): Paul did not think he was abandoning Israel's God; he believed Israel's promises were opening to the nations.
- 20 (slide): Coverage Addition · Origins of the Church
- 23 (slide): 100 – 500 AD
- 24 (slide): Christianity had established itself in every large and midsize city in the eastern Roman Empire
- 24 (slide): Established local leadership – Episkopos (overseer or bishop) and presbyter (elder)
- 24 (slide): Did not have authority to speak for whole church or declare doctrine
- 24 (slide): Growth of Christianity challenged Roman empire
- 24 (slide): Led to increased persecutions and martyrdom of Christians
- 24 (slide): But failed to wipe out movement
- 25 (slide): Coverage Addition · Ancient Christianity
- 26 (slide): Coverage Addition · Global Christian History
- 26 (slide): Ethiopia: Aksum embraced Christianity in the fourth century.
- 26 (slide): India and Central Asia: ancient Syriac Christian communities developed along trade routes.
- 27 (slide): 312 Constantine’s Dream – “In this sign, you will conquer”
- 27 (note): Key Events in Constantine’s Religious Impact 312 CE – Constantine’s Dream On the eve of the Battle of the Milvian Bridge, Constantine report
- 27 (note): The Union of Church and State Political Use of Christianity: Constantine understood the potential of Christianity as a unifying force within
- 27 (note): Christianity as the State Religion While the Edict of Milan legalized Christianity, Constantine went further by actively promoting the faith
- 28 (slide): If Christianity was going to be used to justify power, he needed Church to speak with one voice
- 28 (note): Key Events in Constantine’s Religious Impact 312 CE – Constantine’s Dream On the eve of the Battle of the Milvian Bridge, Constantine report
- 28 (note): The Union of Church and State Political Use of Christianity: Constantine understood the potential of Christianity as a unifying force within
- 28 (note): Christianity as the State Religion While the Edict of Milan legalized Christianity, Constantine went further by actively promoting the faith
- 29 (slide): Most influential Church Father – His thought molded the medieval church and continues to be influential to this day
- 29 (slide): Formed most of his thought in reaction to “heresies” of the day
- 29 (slide): Works of St. Augustine
- 29 (slide): City of God – written in reaction to sack of Rome
- 30 (slide): St. Benedict (480 – 547) father of Western Monasticism
- 30 (slide): Gained fame as a holy man living in a cavern
- 30 (slide): Rules for Monks – provided detailed instructions for how monks were to live
- 33 (slide): 500 – 1500 ad
- 34 (slide): Constantine Moves Capital East – names new capital Constantinople
- 34 (slide): Sets up seeds of division of Empire and Church
- 34 (slide): Western (or Latin) part of Empire will only last another 100 years
- 34 (slide): Eastern (or Byzantine) lasted for more than a 1,000 years
- 34 (slide): Bishop of Constantinople now assumes Primus inter Pares
- 34 (slide): Churches of each empire develop independently
- 34 (slide): Western church influenced by Latin language and culture
- 34 (slide): Eastern church influenced by Greek
- 35 (slide): Papacy assumed supremacy as the successor to Peter; Patriarch assumed supremacy as the Bishop of the Imperial Capital
- 35 (slide): Iconoclasm – Emperor Leo III commands the destruction of all images of Jesus, Mary, and the Angels (in reaction to Muslim criticism of Chris
- 35 (slide): Action condemned by Pope and western church
- 35 (slide): Eastern church convenes council which condemns use of icons as idolatry
- 35 (slide): 2 nd Council of Nicaea affirms use of icons
- 36 (slide): Eastern Bishops rejected the filioque (“and by the son”) inserted into the Creeds
- 36 (slide): Schism of 1054 – the Pope and the Patriarch mutually excommunicate each other
- 37 (slide): Coverage Addition · Medieval Christianity
- 38 (slide): Coverage Addition · Medieval and Renaissance Christianity
- 39 (slide): 1500 – 1600 AD
- 40 (slide): By 16 th century, Church becomes wealthy, powerful, and corrupt!
- 40 (slide): Land ownership, tithes, corvee labor
- 40 (slide): 1517 Pope Leo X offered indulgences for those who gave alms to rebuild St Peter’s Basilica in Rome
- 40 (slide): Indulgence : remission of part or all of the temporal and especially purgatorial punishment that is due for sins
- 41 (slide): John Wycliffe (1330 – 1384)
- 41 (slide): Promoted first complete translation of the Bible into English
- 41 (slide): Argued church should give up its possessions and return to evangelical poverty
- 41 (slide): Attacked doctrine such as transubstantiation
- 42 (slide): Born to a wealthy family in Germany
- 42 (slide): Earned Doctor of Theology in 1512
- 43 (slide): Luther objected to teachings that purchase of indulgences granted forgiveness of sins
- 43 (slide): Drafted of set of propositions for the purpose of opening academic debate on indulgences;
- 43 (slide): Nailed his 95 Thesis to the door of Wittenberg Castle Church on October 31, 1517
- 44 (slide): Coverage Addition · Historical Bridge
- 45 (slide): Coverage Addition · Historical Bridge

### Lecture 2

- 1 (slide): REL 210 World Religions · Lecture 2
- 6 (slide): Coverage Addition · Doctrine
- 7 (slide): Christ (G.) / Messiah (H)
- 7 (slide): King of Jews
- 7 (slide): Spiritual savior (not the political savior Jews at the time were looking for)
- 7 (slide): he shall save his people from their sins (Matt. 1:21)
- 8 (slide): Christ (G.) / Messiah (H)
- 8 (slide): King of Jews
- 8 (slide): Spiritual savior (not the political savior Jews at the time were looking for)
- 9 (slide): "The angel said to her, 'The Holy Spirit will come upon you, and the power of the Most High will overshadow you. Therefore the child to be b
- 10 (slide): Christ proclaims He is the God of Abraham, Isaac, and Jacob
- 10 (slide): Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am .
- 11 (slide): Savior is needed to Justify man to God
- 12 (slide): Jesus declares himself the looked for Messiah (Luke 4:18-21 & Mark 14:61-62)
- 12 (slide): Soteriology: branch of theology dealing with salvation especially as effected by Jesus Christ
- 13 (slide): Work of Jesus - Soteriology
- 13 (slide): Passion – (based on latin passio suffering) the suffering and death of Jesus
- 14 (slide): Coverage Addition · Doctrine
- 15 (slide): Work of Jesus - Soteriology
- 16 (slide): Coverage Addition · Belief and Symbolism
- 16 (slide): Reserved image · Ichthus
- 16 (slide): Reserved image · Cross forms
- 16 (slide): Reserved image · Chi-Rho / sign
- 19 (slide): Orthodoxy Creation
- 19 (slide): 325 - Convened first ecumenical council in Nicaea (Council of Nicaea)
- 19 (slide): Through means of the Creed is Orthodoxy proclaimed
- 19 (slide): With establishment of Christianity as Roman State Religion, heresy can be viewed as a crime against the state
- 19 (slide): Note – heresy is applied anachronistically to theological theories put forth during this time; not at all clear which theories would rise as
- 20 (slide): Orthodoxy Creation
- 20 (slide): Even after Nicene Creed, important theories continue to arise
- 20 (slide): Additional councils were held to debate these theories; creedal language established as direct reaction to theories
- 20 (slide): Multiple councils needed to establish orthodoxy
- 21 (slide): Arianism – Arius taught that the Son was created and therefore not coeternal with the Father
- 21 (slide): Denies full divinity of Jesus Christ
- 22 (slide): Monophysite / Miaphysite controversy – How are Christ’s full divinity and full humanity united in one incarnate nature?
- 23 (slide): Associated with Gnosticism which held that matter was evil and the spirit good and claimed that salvation was attained only through esoteric
- 24 (slide): Adoptionist - Christ, although of miraculous birth, was mere man until adopted by God
- 24 (slide): Patripassionist (Father suffers) – Holds that God the Father had come to earth and suffered and died under the appearance of the Son. Trinit
- 25 (slide): Read Creed; identify phrases that are in direct reaction to the above discussed “heresies”
- 26 (slide): Read Creed; identify phrases that are in direct reaction to the above discussed “heresies”
- 29 (slide): Early Christian texts describe Father, Son, and Spirit in diverse ways; later interpretations included Arian and Adoptionist views etc
- 29 (slide): Doctrine develops while maintaining Jewish monotheism and affirming the divinity of Son and Spirit
- 29 (slide): Doctrine formulated during the 4th – 5th centuries and codified in the Creeds:
- 29 (slide): Maintain monotheism by stating three persons of same substance
- 30 (slide): Interpretations of Jesus - Gospels of Matthew, Mark, Luke, and John
- 31 (slide): God the Holy Spirit
- 31 (slide): Called Lord, the term is also used for the Father and the Son
- 31 (slide): Foundational view of the Holy Spirit is sketched in a section of the Nicene creed
- 31 (slide): We believe in the Holy Spirit, the Lord, the giver of Life, who proceeds from the Father. With the Father and the Son he is worshiped and gl
- 34 (slide): Coverage Addition · Sacred Writings
- 35 (slide): Coverage Addition · Sacred Writings
- 36 (slide): Luther claims authority through an appeal to scripture alone ( Sola scriptura)
- 37 (slide): Sacraments limited to the two found in Bible: Baptism and Eucharist
- 38 (slide): Translated Bible into German – still used today
- 39 (note): Huldrych Zwingli was a key figure in the Protestant Reformation and played a pivotal role in the early reformation movements, particularly i
- 39 (note): The source is the two-volume World Chris­t­ian Ency­clo­pe­dia (Bar­rett, Kurian, and John­son; Oxford Uni­ver­sity Press). Take note of the
- 39 (note): World Chris­tian­ity con­sists of 6 major ecclesiastico-​cultural blocs, divided into 300 major eccle­si­as­ti­cal tra­di­tions, com­posed [
- 39 (note): So accord­ing to the WCE, the 33,000 fig­ure rep­re­sents “world Chris­tian­ity.” Now unless a Catholic wants to sup­pose that “world Chris­
- 39 (note): The WCE then goes on to break down “world Chris­tian­ity” into the fol­low­ing broad cat­e­gories:
- 39 (note): Inde­pen­dents: 22,000 denom­i­na­tions Protes­tants: 9000 denom­i­na­tions Mar­gin­als: 1600 denom­i­na­tions Ortho­dox: 781 denom­i­na­tio
- 40 (slide): Coverage Addition · Reformation
- 40 (slide): Reformed churches spread through Switzerland, France, Scotland, and the Netherlands
- 41 (slide): Coverage Addition · Reformation
- 42 (slide): Efforts by Catholic Church against the Protestant Reformation and toward internal renewal
- 42 (slide): Pope Paul III convenes Council of Trent in 1545
- 42 (slide): Issues formal Catholic reply to doctrinal challenges of the Protestant Reformation
- 42 (slide): Liturgy and Sacraments – doctrine of transubstantiation affirmed
- 42 (slide): New Religious Orders were founded, significantly the Jesuits
- 43 (slide): Jesuits swore loyalty to the Pope and dedicated to reconstructing church life and teaching
- 43 (slide): Became prominent agents of Catholic renewal and education
- 43 (slide): Jesuits were highly educated and became active in scholarship and education
- 43 (slide): Active in missionary efforts throughout the world, esp South America and Asia

### Lecture 3

- 1 (slide): REL 210 World Religions · Lecture 3
- 4 (slide): Coverage Addition · Jesus and His Message
- 5 (slide): The Life, Death, and Resurrection of Jesus Christ
- 5 (slide): Jesus traveled throughout Judea teaching and performing miracles
- 5 (slide): Beatitudes ( comes from the Latin word beatus , meaning "blessed" or "flourishing")
- 7 (slide): The Life, Death, and Resurrection of Jesus Christ
- 7 (slide): Sermon on the Mount
- 7 (slide): Beatitudes ( comes from the Latin word beatus , meaning "blessed" or "flourishing")
- 8 (slide): The Life, Death, and Resurrection of Jesus Christ
- 8 (slide): “Ye have heard of old . . . But I say”
- 8 (note): Matthew's Antitheses refer to a series of teachings by Jesus in the Gospel of Matthew, specifically in Matthew 5:21-48, which are part of th
- 10 (slide): The Life, Death, and Resurrection of Jesus Christ
- 10 (slide): Sermon on the Mount
- 10 (slide): Matthew’s Antitheses: The Higher Law – Transformation of the Law
- 10 (slide): Call to higher moral and spiritual standard
- 10 (note): Theological Significance Fulfillment of the Law: Jesus states in Matthew 5:17, "Do not think that I have come to abolish the Law or the Prop
- 11 (slide): Greek origin, meaning setting side by side, a comparison
- 11 (note): The word parable is Greek in origin and means a setting side by side, a comparison. In parables divine truth is presented by comparison with
- 13 (slide): The Life, Death, and Resurrection of Jesus Christ
- 13 (slide): Primary message centered on Love
- 13 (slide): Matt 22: 36-40
- 15 (slide): Coverage Addition · Jesus and His Message
- 17 (slide): Stress moral virtues of the Christian life
- 17 (slide): Trust in God, hope in the future God will bring, peace in one’ s heart and in the church, and love for all people
- 17 (slide): Grounds the ethical life of the Christian in the life, death, and resurrection of Jesus
- 18 (slide): Coverage Addition · Ethics
- 22 (slide): Formal church buildings were erected, and church officials dressed for worship in dress modeled after Roman government garb
- 23 (slide): Recognizing Baptism and Holy Communion as the two rites instituted by Jesus
- 23 (slide): Putting all services into the language of the people
- 24 (slide): Other Worship Practices
- 24 (slide): Charismatic movement : Stressed the use of supernatural gifts of the Holy Spirit
- 28 (slide): Coverage Addition · Worship and Ritual
- 29 (slide): Coverage Addition · Worship and Ritual
- 30 (slide): Coverage Addition · Worship and Ritual
- 31 (slide): Coverage Addition · Worship and Belief
