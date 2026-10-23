# Ch10 Judaism lecture conversion: content-loss audit

Prepared 2026-10-19 for Steven Austin. Covers REL 210 Ch10 Lectures 1-3 only (the supplements were not edited).

## Method

- Old decks: archived originals (`backups/ch10-judaism/`, identical to `C:\Users\stvas\ch10work\pre-edit-originals\`). New decks: the rebuilt files with the same filenames.
- Each old slide was extracted with BeautifulSoup into text units: every leaf text block on the slide, plus every speaker-note paragraph. Images, iframes, and links were listed separately.
- **Check 1 (verbatim):** each old unit, normalized (lowercase, punctuation stripped), was searched as a contiguous string in the text, notes, and popups of the new slide(s) it maps to.
- **Check 2 (word coverage):** for each unit, the share of its words (3+ letters) found in the mapped new slide(s). Anything under 90% was flagged.
- Every non-verbatim unit is accounted for below. Each one is either an intentional correction (quote, citation, or typo) or a light rewording made when a slide was split.

## Result

- **Lecture 1** (`rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora_revFA26.html`, formerly `rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora.html`): 28 old slides → 32 new slides (35 slides after the 2026-10-22 Abrahamic-covenant pass: AJ, AK, AL added). 47 old text units are not verbatim in the new deck; 43 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- **Lecture 2** (`rel210-ch10-lecture2-judaism-god-covenant-holiness-hope_revFA26.html`, formerly `rel210-ch10-lecture2-judaism-god-covenant-holiness-hope.html`): 31 old slides → 45 new slides. 68 old text units are not verbatim in the new deck; 37 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- **Lecture 3** (`rel210-ch10-lecture3-judaism-text-worship-sacred-practice_revFA26.html`, formerly `rel210-ch10-lecture3-judaism-text-worship-sacred-practice.html`): 27 old slides → 31 new slides. 57 old text units are not verbatim in the new deck; 41 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- Lecture 1 slides B (old 2, Lecture Roadmap) and E (old 5, History, Memory & Sacred Story) were removed on 2026-10-19 at Steven's request; their converted HTML is preserved verbatim in the "L1 slide edits after the _revFA26 rename" section, and the originals remain in the archived pre-edit deck.
- Old slide-ID/number cross-references in notes: one stale reference in L3 notes ("slides 55-57") was changed to "the previous slide".

## Lecture 1: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism I Origins Exodus Temple and Diaspora | A | Origins, Exodus, Temple & Diaspora | 100% |
| 2 | Lecture Roadmap | removed (ID B retired) | see "L1 slide edits after the _revFA26 rename" | n/a |
| 3 | Section I Ancestral Memory & Covenant | C | Section I: Ancestral Memory & Covenant | 100% |
| 4 | Names across Jewish History | D | Names across Jewish History | 99% |
| 5 | History, Memory & Sacred Story | removed (ID E retired) | see "L1 slide edits after the _revFA26 rename" | n/a |
| 6 | Creation: A World of Order & Responsibility | F | Creation: A World of Order & Responsibility | 100% |
| 7 | The Great Flood: Divine Judgment and Mercy | G | The Great Flood: Divine Judgment and Mercy | 100% |
| 8 | Covenant People | H, I | Covenant People, Chosen People (retitled 2026-10-22); The Covenant Promise | 92% |
| 9 | Patriarchal Order | J, AG | Patriarchal Order; The Story of Joseph: The Favored Son | 99% |
| 10 | Pause and Reflect | K | Pause & Reflect | 25% |
| 11 | Section II Exodus, Monarchy & Exile | L | Section II: Exodus, Monarchy & Exile | 100% |
| 12 | The Exodus Narrative | M | The Exodus Narrative | 100% |
| 13 | Why the Exodus Matters | N | Why the Exodus Matters | 100% |
| 14 | From Tribes to Monarchy & Temple | O | From Tribes to Monarchy & Temple | 100% |
| 15 | One Monarchy Becomes Two Kingdoms | P | One Monarchy Becomes Two Kingdoms | 98% |
| 16 | Assyria Conquers the Northern Kingdom | Q | Assyria Conquers the Northern Kingdom | 100% |
| 17 | Babylonian Exile: Catastrophe Reinterpreted | R | Babylonian Exile: Catastrophe Reinterpreted | 100% |
| 18 | Return & the Second Temple | S | Return & the Second Temple | 100% |
| 19 | Pause and Reflect | T | Pause & Reflect | 38% |
| 20 | Section III Conquest, Diaspora & Rabbinic Judaism | U | Section III: Conquest, Diaspora & Rabbinic Judaism | 100% |
| 21 | Hellenism, Revolt & Hanukkah | V | Hellenism & the Road to Revolt | 60% |
| 22 | Roman Rule & Rising Tension | W | Roman Rule & Rising Tension | 100% |
| 23 | Revolt & the Destruction of the Temple | X | Revolt & the Destruction of the Temple | 98% |
| 24 | Understanding Diaspora | Y, Z | Understanding Diaspora; Four Features of a Diaspora | 100% |
| 25 | Diaspora: Dispersion without Disappearance | AA | Diaspora: Dispersion without Disappearance | 100% |
| 26 | From Temple to Torah: Rabbinic Judaism | AB | From Temple to Torah: Rabbinic Judaism | 100% |
| 27 | Antisemitism: A Historical Pattern | AC | Antisemitism: A Historical Pattern | 100% |
| 28 | Pause and Synthesize | AD | Pause & Reflect | 60% |
| (new) | (none) | AH | Joseph in Egypt: How Israel Came to Egypt | n/a |
| (new 2026-10-22) | (none; from Steven's original PowerPoint bullets) | AJ | Abrahamic Covenant: The Call | n/a |
| (new 2026-10-22) | (none; from Steven's original PowerPoint bullets) | AK | Abrahamic Covenant: Terms & Token | n/a |
| (new 2026-10-22) | (none; from Steven's original PowerPoint bullets) | AL | Abrahamic Covenant: Blessings | n/a |
| (new) | (none) | AI | The Maccabean Revolt & Hanukkah | n/a |
| (new) | (none) | AE | Beyond the Lecture: Modern Jewish Worlds | n/a |

**Full ID list (L1, slide order as of 2026-10-22):** A C D F G H AJ AK AL I J AG AH K L M N O P Q R S T U V AI W X Y Z AA AB AC AD AE (35 slides). Retired, never reuse: B, E, AF. Next unused L1 ID: AM.

## Lecture 2: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism II God Covenant Holiness and Hope | A | God, Covenant, Holiness & Hope | 100% |
| 2 | Lecture Roadmap | B | Three Questions | 100% |
| 3 | Section I One God & Ethical Monotheism | C | Section I: One God & Ethical Monotheism | 100% |
| 4 | Teachings of Judaism – One God | D, E | One God: The Shema; The Divine Name: YHWH | 93% |
| 5 | Teachings of Judaism – One God | E, F | The Divine Name: YHWH; Why the Cryptic Name? | 93% |
| 6 | Titles of Deity | H | Titles of Deity | 100% |
| 7 | Ethical Monotheism | I | Ethical Monotheism | 100% |
| 8 | Ethical Monotheism | J | Ethical Monotheism: One God, One Human Race | 96% |
| 9 | Nature of Ethical Monotheism | K | What Must God Be Like? | 100% |
| 10 | Nature of Ethical Monotheism | L, M | God Is Transcendent; Nature Is Not God | 98% |
| 11 | Nature of Ethical Monotheism | N | God Is Personal | 100% |
| 12 | Nature of Ethical Monotheism | O | God Is Good | 100% |
| 13 | Nature of Ethical Monotheism | P | God Is Holy | 93% |
| 14 | Pause and Reflect | Q | Pause & Reflect | 38% |
| 15 | Section II Covenant, Holiness & Moral Obligation | R | Section II: Covenant, Holiness & Moral Obligation | 100% |
| 16 | Covenant People | S | Covenant People | 90% |
| 17 | Abrahamic Covenant | T, U | Abrahamic Covenant: Making the Covenant; Abrahamic Covenant: Blessings | 93% |
| 18 | Chosen People | V, W | Chosen People; What Chosenness Means | 94% |
| 19 | Be ye therefore Holy, even as I am holy | X, Y, Z, AA, AB | You Shall Be Holy: Imitatio Dei; Rashi: Holiness as Separation; Nahmanides: Holiness beyond the Letter of the Law; Midrash: Why Leviticus 19 Was Said to Everyone; Holiness in Everyday Life | 97% |
| 20 | Be ye therefore Holy, even as I am holy | AB | Holiness in Everyday Life | 98% |
| 21 | The Ten Commandments | AC | The Ten Commandments (Aseret ha-Dibrot, "the Ten Utterances") | 92% |
| 22 | The Ten Commandments | AD, AE | The Ten Commandments Begin with Freedom; Commandments for a Free Society | 95% |
| 23 | The Ten Commandments | AF, AG | Not Taking God’s Name in Vain; Evil in God’s Name | 95% |
| 24 | Ethical Monotheism and Social Justice | AH | Ethical Monotheism & Social Justice | 100% |
| 25 | Pause and Reflect | AI | Pause & Reflect | 35% |
| 26 | Section III Hope, the World to Come & Symbolism | AJ | Section III: Hope, the World to Come & Symbolism | 100% |
| 27 | Teachings of Judaism – Messiah | AK, AS | Messiah: The Anointed King; Messianic Hope Today | 92% |
| 28 | Four Biblical Hells | AL, AM | Four Biblical “Hells”; Video: The Bible’s Four Hells | 100% |
| 29 | Resurrection and the World to Come | AN, AO | Resurrection & the World to Come; The World to Come Today | 100% |
| 30 | Symbols of Jewish Identity | AP | Symbols of Jewish Identity | 100% |
| 31 | Pause and Synthesize | AQ | Pause & Reflect | 44% |
| (new) | (none) | AR | Two Impulses: Good & Evil | n/a |
| (new) | (none) | AT | Beyond the Lecture: Messiah in Jewish History | n/a |

**Full ID list (L2):** A B C D E F H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AR AH AI AJ AK AS AL AM AN AO AP AQ AT

## Lecture 3: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism III Text Worship and Sacred Practice | A | Text, Worship & Sacred Practice | 100% |
| 2 | Lecture Roadmap | removed (ID B retired) | see "L3 slide B removed; images on L, M, O, Q" | n/a |
| 3 | Section I Sacred Writings & Interpretation | C | Section I: Sacred Writings & Interpretation | 100% |
| 4 | Torah: More Than “Law” | D | Torah: More Than “Law” | 100% |
| 5 | The Tanakh: Three Collections | E | The Tanakh: Three Collections | 100% |
| 6 | Written Torah and Oral Torah | F | Written Torah & Oral Torah | 100% |
| 7 | Mishnah, Gemara & Talmud | G | Mishnah, Gemara & Talmud | 90% |
| 8 | Midrash: Reading between the Lines | H | Midrash: Reading between the Lines | 100% |
| 9 | Study Is a Religious Practice | I | Study Is a Religious Practice | 100% |
| 10 | Pause and Reflect | J | Pause & Reflect | 26% |
| 11 | Section II Law, Holiness & Everyday Practice | K | Section II: Law, Holiness & Everyday Practice | 100% |
| 12 | Mitzvot: Commandments as Covenant Practice | L | Mitzvot: Commandments as Covenant Practice | 100% |
| 13 | Halakhah: A Way of Walking | M | Halakhah: A Way of Walking | 100% |
| 14 | The Holiness Code: Sacred & Ordinary | N, O | The Holiness Code: “You Shall Be Holy”; The Holiness Code: Sacred & Ordinary | 94% |
| 15 | Temple Sacrifice & Its Transformation | P | Temple Sacrifice & Its Transformation | 92% |
| 16 | Kashrut Making Food Sacred | Q | Kashrut: Making Food Sacred | 98% |
| 17 | Texts Worn, Touched & Remembered | R | Texts Worn, Touched & Remembered | 100% |
| 18 | Pause and Reflect | S | Pause & Reflect | 26% |
| 19 | Section III Worship, Sacred Time & Life Cycle | T | Section III: Worship, Sacred Time & Life Cycle | 100% |
| 20 | Worship in the Synagogue | U, V | Worship in the Synagogue; Who Leads, Who Counts | 99% |
| 21 | Shabbat: The Meaning of Sacred Rest | W | Shabbat: The Meaning of Sacred Rest | 100% |
| 22 | Shabbat as Lived Practice | X | Shabbat as Lived Practice | 95% |
| 23 | The Sacred Year Major Festivals | Y | The Sacred Year: Major Festivals | 100% |
| 24 | Passover Seder: Memory Performed | Z, AA | Passover Seder: Memory Performed; As Though You Left Egypt | 98% |
| 25 | Life Cycle Covenant Community and Family | AB | Life Cycle: Birth & Coming of Age | 74% |
| 26 | Death Mourning and Memory | AC | Death, Mourning & Memory | 100% |
| 27 | Pause and Synthesize | AD | Pause & Reflect | 27% |
| (new) | (none) | AE | Marriage: Chuppah & Ketubah | n/a |
| (new) | (none) | AF | Beyond the Lecture: From Temple to Synagogue | n/a |

**Full ID list (L3):** A C D E F G H I K L M N O P Q R S T U V W X J Y Z AA AB AD AE AC AF
## Intentional changes (every non-verbatim old unit)

### All three decks (structural)
- **Rebuilt in the World Religions house style (Ch05 L3 pattern).** Reveal.js 4.5.0 from the CDN, 960×700, Crimson Pro / Lora, house palette, section-header dividers, purple assessment slides, keyboard ⌨️ popup, slide counter, and speaker notes in the house Georgia "Understanding This Slide" block.
  - The old absolutely positioned `ppt-*` layout (1600×900, `deck.css`, `../shared/reveal/dist`) is gone. `deck.css` itself was not touched.
- **Permanent slide IDs** use the convention from `american-history/presentations/chapter-10/ch10_L1-…` / `ch10_L2_…`: the top-of-file `PERMANENT SLIDE IDS` comment, `data-slide-id` A…Z, AA…, and the `slide-id-label` CSS/JS.
  - One change: the label sits at left 78px / bottom 26px, so it doesn't sit under the house keyboard icon.
- **Fragments removed** (house decks use none). Every bullet now shows at once, and the dense slides were split instead.
- **Esc fixed** with a capture-phase handler: Esc closes an open popup only and does not open the overview. With nothing open, Esc toggles the overview as usual.
  - Triggers and close buttons are `role=button tabindex=0` (Enter/Space); popups are `role=dialog`.
  - Focus moves into the popup and returns to its trigger on close.
  - Off-screen slides are `inert`, so Tab stays on the current slide.
- **Title slides:** kicker changed from "REL 210 World Religions · Lecture N" to "REL 210 World Religions · Chapter 10 · Lecture N". `<title>` = "REL 210 Ch10 Lecture N: …", matching the h1 and filename.
- **Speaker notes:** every old note paragraph is carried over verbatim, except the three corrected ones listed below. New notes added: a "Sources" section on every quote slide, plus short framing notes on split slides.
- **Popups added:** definitions drawn from the existing notes or from standard reference facts; see the deck for the text.
  - L1: Gen 17:7, primogeniture, diaspora, Hanukkah, Mishnah.
  - L2: Tetragrammaton, desacralize, Gen 17:7, theophany, cutting a covenant, chosenness, Chillul HaShem, Mashiach.
  - L3: Tanakh, Talmud, responsa, kosher, minyan, chuppah/ketubah, Kaddish.

### Lecture 1
- **Old 1 (title) → A.** Kicker reworded (see above).
- **Old 2 → B, removed 2026-10-19** (ID B retired). **Old 3 → C,** restyled with a background image. **Old 5 → E, removed 2026-10-19** (ID E retired; one method sentence moved into C's notes). See "L1 slide edits after the _revFA26 rename" below.
- **Old 8 → H + I.** The Genesis 17:7 reference is now a quote slide (I) with the full NRSV text. The "Covenant: Literally, a contract. In the Bible, an agreement between God and his people; two-way promise" box was reworded per Steven: heading "Covenant (Hebrew *berit*)", text "Like a contract, it binds two parties with promises. Unlike a contract, it is an ongoing relationship of mutual loyalty between unequal partners—God and Israel—sealed by an oath or a sign." (same wording on L2 S). The notes already say covenant is "more than a commercial contract" and the I takeaway says "not a one-time deal", so they agree; the note phrase "thy seed after thee" became "your offspring after you" to match NRSV.
- **Old 9 → J.** The SmartArt image (Abraham → Isaac → Jacob (Israel)) is rebuilt as an HTML flow with the same three labels. Later passes added the matriarchs to the flow and a final tier of Jacob's children by mother (see "L1 slide edits after the _revFA26 rename").
- **Old 24 → Y + Z.** The dense slide was split: the definition and exile distinction on Y, the four features on Z.
- **Old 17, 23, 27.** Takeaway lines kept verbatim.
- **New AE.** "Beyond the Lecture" slide linking the existing rabbit-hole supplement (house pattern from Ch07), relative link only.
- **Old L1 bug.** The malformed `</div` (no `>`) on the creation slide is gone.

### Lecture 2
- **Old 4 → D + E** ("Teachings of Judaism – One God" split).
  - Typo "Isreal" fixed.
  - The uncited `"Hear, O Israel: The Lord our God, the Lord is One"` is now quoted from the NRSV ("The LORD is our God, the LORD alone"); the NRSV footnote alternatives, including "The LORD our God, the LORD is one", are given in the notes.
  - `Deut 6:4 "Hear, O Israel: YHWH is our God, YHWH is one"` is now labeled as a literal rendering, not a published translation.
  - Light wording when splitting: "substitute titles, Adonai, usually translated as lord" became "…titles: Adonai, usually translated 'Lord'".
- **Old 5 → F + G.**
  - Exod 3:14 is now quoted in the NRSV ("I AM WHO I AM") with the Hebrew transliteration *Ehyeh asher ehyeh* beside it.
  - The five card headings are kept; a one-line gloss under each comes from the old notes.
  - The Tetragrammaton note paragraph moved to E.
- **Old 7–13 (five "Nature of Ethical Monotheism" slides plus two "Ethical Monotheism" slides).** Retitled by content: "What Must God Be Like?", "God Is Transcendent", "Nature Is Not God", "God Is Personal", "God Is Good", "God Is Holy". The old heading survives as a small kicker.
  - Old 10 was split into L + M.
- **Old 10.** Gen 1:1 corrected to verbatim NRSV wording. Ps 102:25–27 keeps its numbering note (26–28 in Jewish Bibles); NRSV 102:27 is quoted in the notes. Ps 96:5 is quoted (NRSV).
- **Old 13.** "Be ye therefore Holy, even as I am holy" (Lev. 19:2) is not the wording of Lev 19:2 in any standard translation. Replaced with NRSV Lev 19:2.
- **Old 17 → T + U** (Abrahamic Covenant split).
  - Reference spacing fixed ("Genesis 17: 1-2").
  - "Blessings" phrases standardized to verbatim NRSV with verse cites (detail in the quote table).
  - The Gen 28:14 (Jacob) quote was replaced by Gen 12:3 (Abraham).
- **Old 18 → V + W.**
  - "Deuteronomy 10: 15" spacing fixed; the NASB 1995 quote was replaced with the NRSV.
  - "“ Chosenness ”" spacing fixed.
  - "Both sides of phrase important" → "Both sides of the phrase are important".
  - The Amos 3:2 point from the notes is now a popup.
- **Old 19 + 20 → X, Y, Z, AA, AB.** Heading typo/misquote "Be ye therefore Holy, even as I am holy" replaced with "You Shall Be Holy: Imitatio Dei" and NRSV Lev 19:2.
  - **Rashi corrected.** The old text said he links holiness to abstaining from "sexual immorality and idolatry". Rashi says "separate from forbidden sexual relations and from sin" and does not mention idolatry. The note was corrected the same way.
  - **Nahmanides corrected.** The old text read "ethical and moral behavior that transcends legalistic adherence"; the note said "selfish or exploitative". Ramban actually means restraint in what is permitted (food, wine, sex, speech), so one is not "a scoundrel with the permission of the Torah", plus a general command paralleling Deut 6:18.
  - **Midrash corrected.** The old text read "'You shall be holy' is a comprehensive commandment from which many other commandments can be derived". The midrash (Sifra Kedoshim 1:1; Leviticus Rabbah 24:5) actually says the *section* was proclaimed to all because most of the Torah's essential teachings depend on it, and R. Levi finds the Ten Commandments in it. The "permeates all observance" line is kept but marked as interpretation in the notes.
  - Added (sourced): the Abba Shaul line from Sifra (imitating the King).
  - The old 19 last bullet and old 20 merged into AB "Holiness in Everyday Life" (duplicate heading removed).
- **Old 21–23 (three "The Ten Commandments" slides) → AC–AG,** retitled by content.
  - Old 22's speaker note put a paraphrase of Exod 20:2 in quotation marks. It now quotes the NRSV.
  - Old 23: "Hebrew original, 'do not carry the name … in Vain'" was shown as a quotation. It is now labeled as a literal gloss (*lo tissa*), noting that the older English phrase is "in vain"; the NIV/NJPS renderings were dropped in the NRSV pass.
  - Old 23: "God will not forgive violation of this commandment" overstated the verse; replaced with its NRSV wording ("will not acquit anyone who misuses his name").
  - Old 23: "cause of Religion" → "cause of religion". The prompt "What are some example… in the name of Religion" was later replaced entirely (see the reading-guide review-question pass, L2 AG).
- **Old 27.** "government upon his shoulder" replaced with NRSV wording ("authority rests upon his shoulders"; "endless peace for the throne of David and his kingdom"), with Jewish verse numbering (9:5–6) noted.
- **Old 28 → AL + AM.** The video moved to its own slide.
  - The thumbnail plus click-to-load iframe were replaced with a live responsive embed (`youtube.com/embed/HtrtpI5odJ0`, 16:9, max-width 600px; Ch05 L3 pattern). The "Open on YouTube ↗" link is kept.
- **Old 29 → AN + AO.** Dan 12:2 quoted (NRSV).

### Lecture 3
- **Old 1.** Kicker reworded.
- **Old 14 → N + O.** The Lev 19:2 wording ("You shall be holy, for I the LORD your God am holy") was uncited; it is word-for-word the NRSV and is now cited as such, matching L2.
- **Old 20 → U + V** (synagogue split).
- **Old 22 note.** The stale "Connect this slide to slides 55-57" became "…to the previous slide".
- **Old 24 → Z + AA.** The "Each generation is to see itself as personally leaving Egypt" card is kept and marked in the notes as a paraphrase of m. Pesachim 10:5. AA quotes the Mishnah (Kulp translation) and Exod 13:8 (NRSV).
- **Old 25.** "(chuppah)" popup added inside the marriage bullet.

## Reading-guide review-question pass (2026-10-19)
Requested by Steven. Pause slides now ask questions from the PHIL 210 Ch10 Reading Guide (source: `public/phil-210/reading_guides/PHIL210_Ch10_ReadingGuide.html` in this repo). The decks were also renamed (git mv) to `…_revFA25.html`, then by Steven to `…_revFA26.html` (commit 1efe28b), and `index.html` was updated.

**How each pause works now:**
- The guide question is quoted verbatim, labeled "Reading Guide · Review Question N".
- A "Look back:" line names the slide(s) where the answer was taught.
- "Answer on your own, then write it on your live reading-guide worksheet ↗" links to https://austin-academics.com/phil-210/reading_guides/PHIL210_Ch10_ReadingGuide.
- There is no pair or group framing; the old label "Think, then turn to a neighbor" is gone.
- The speaker notes give the guide question number, the slide IDs where it is taught, a one-minute retrieval step, a recap, and the points a strong answer covers. (Updated in the external-audit pass below: the pause line now ends "—use your textbook anchor sentences as evidence", and the recap comes after one minute of retrieval.)

**Removed:**
- The old open-ended prompts on all nine pause slides, and their old "listen for…" speaker notes.
- The chain graphics on the three end-of-lecture pauses (L1 AD, L2 AQ, L3 AD).
- The heading "Pause & Synthesize" on L1 AD, L2 AQ and L3 AD; it is now "Pause & Reflect" because each asks a single question.
- Kept: the "preview the next lecture" note paragraph on L1 AD and L2 AQ.

| Deck | Pause ID | Guide question | Taught on |
|---|---|---|---|
| L1 | K | Q12 How did the name Judaism originate? | D |
| L1 | T | Q1 What role did the prophets play during the First Temple Period of ancient Israel? | P, R |
| L1 | AD | Q3 How did the destruction of the Second Temple in 70 C.E. affect the structure of Judaism? | X, AB |
| L2 | Q | Q6 What are the main features of the Jewish teaching of monotheism? | D–H, I–P |
| L2 | AI | Q8 What role do the "good impulse" and "evil impulse" play in rabbinic teachings on human morality? | AR (new) |
| L2 | AQ | Q7 What is the significance of the Jewish belief that they are God's chosen people? | S–W, X–AB, AP |
| L3 | J (moved to after X) | Q9 What are the main features of the traditional Jewish Sabbath observance? | W, X |
| L3 | S | Q10 What are the main features of the Jewish kosher food laws? | Q |
| L3 | AD | Q11 What is the significance of the bar mitzvah and bat mitzvah ceremonies? | AB (L, U background) |

**Not used:**
- Q2 (Maccabean Revolt): taught on L1 V, but left out to keep one question per pause.
- Q4 (Reform) and Q5 (Zionism): modern topics not taught in L1–L3 (they are in the rabbit-hole supplement). Since the external-audit pass, L1 AE tells students to answer them from the textbook, pp. 233–234.

**Teaching content added (flagged):**
- **L1 D, "Jews" card:** "A name connected to Judah and increasingly used after the Babylonian exile." → "From Judah—Jacob's son, his tribe, and later the southern kingdom—increasingly used after the Babylonian exile." This lets Q12's tribe → territory → name chain be taught before K.
- **L2 AR (new slide, after AG), "Two Impulses: Good & Evil":** two cards (yetzer ha-tov / yetzer ha-ra), plus a verbatim quote of Genesis Rabbah 9:7 (The Sefaria Midrash Rabbah, 2022): "Were it not for the evil inclination, a man would never build a house, would never marry a wife, would never beget children, and would never engage in commerce."
  - The notes cite Berakhot 61a and Kiddushin 30b (William Davidson Edition): "I created an evil inclination, which is the wound, and I created Torah as its antidote".
  - Checked on Sefaria 2026-10-19.
  - Nothing in L1–L3 taught Q8 before, so this is new content. L2 is now 44 slides.
- **L3 AB, bar/bat mitzvah bullet:** "marks responsibility for the commandments and participation in communal worship" → "at 13 (often 12 for girls), marks responsibility for the commandments and participation in communal worship, often by reading from the Torah". This supports Q11. (Reworded again in the external-audit pass below.)

**Slide IDs:**
- L2 AR is new; it is the next unused ID after AQ.
- L3 J moved from after I to after X; its ID is unchanged.
- Both are recorded in each file's PERMANENT SLIDE IDS comment. No other IDs changed.

**L2 AG in-slide prompt (replaced at Steven's request):**
- Old: "What are some examples of evil committed in the name of religion?" (The original deck read "What are some example of evil committed in the name of Religion".)
- New: "If people know what God commands, why do they still do wrong—even in God's name?"
- Why: AG teaches that evil done in God's name is a desecration of the Name and damages religion. The new prompt asks why people do it, and AR (the two impulses) gives the rabbinic answer, which the AI pause (Reading Guide Q8) then asks students to explain on their worksheet.
- No reading-guide question fits AG directly; Q8 is already used at AI.
- Speaker notes: the two original paragraphs are kept, plus two new ones: how to run the lead-in, and a record of the replacement.

## External-audit revisions (approved by Steven 2026-10-19)
Steven approved items 1–17 of `external_audit_evaluation.md`. Not done: the optional group (L2 G softening, L1 D notes caution, L3 L movement line, title-slide image credits, cutting L2) and every item marked Disagree. Bible quotations are NRSV (1989). Every new source line was checked on 2026-10-19. Slide counts are unchanged (L1 31, L2 44, L3 30); no slide was split and no IDs changed.

**All nine pause slides (deckkit template):**
- Pause line: "Answer on your own, then write it on your live reading-guide worksheet ↗" → "… worksheet ↗—use your textbook anchor sentences as evidence".
- Notes: "Students answer individually: give them two or three minutes…" plus "Before students write, [recap]" → "**Retrieval first:** give students one minute to answer from memory, on their own." / "After that minute, [recap]" / "Then let them finish individually and write the answer on their live reading-guide worksheet (it auto-saves in their browser), using their textbook anchor sentences as evidence."

**Lecture 1**
- **H:** "History of Judaism begins with Abram" → "Jewish tradition traces its story to Abram (later Abraham)".
- **J:**
  - Bullet: "Covenant passed down from father to son: patriarchal; primogeniture" → "Covenant passed down through the family line (patriarchal)—but often not to the firstborn". The popup trigger moved from "primogeniture" to "firstborn". The popup title is now "Firstborn (Primogeniture)"; its text is unchanged except that it opens "Primogeniture is the custom…".
  - Flow: "Abraham → Isaac → Jacob (Israel)" → "Abraham & Sarah → Isaac & Rebekah → Jacob (Israel), Leah & Rachel".
- **P:**
  - Bullet: "Prophets: criticize idolatry, injustice, and failures of covenant" → "Prophets: men and some women (such as Huldah) who spoke for God—criticizing idolatry, injustice, and trust in foreign alliances".
  - Notes: added "In Israel prophets were 'forth-tellers of God's will' more than foretellers (textbook p. 227)."
  - Sources: 2 Kings 22:14 NRSV ("the prophetess Huldah"); textbook p. 227.
- **T (pause, Q1):** the answer points now include women prophets (Huldah), forth-tellers, and trust in foreign alliances.
- **V:**
  - Bullet: "Maccabean Revolt: persecution and Temple desecration provoke rebellion beginning in 167 BCE" → "Maccabean Revolt: Antiochus IV plunders the Temple (168 BCE), bans Sabbath, circumcision, and Torah, and sets up pagan worship there; the revolt begins in 167 BCE".
  - Sources: textbook p. 229; 1 Maccabees 1 (Brenton, Sefaria).
- **X:**
  - Bullet: "66–70 CE: Rome crushes the First Jewish Revolt and destroys the Second Temple" → "66 CE revolt begins · 70 CE Rome destroys Jerusalem and the Second Temple · 73/74 CE Masada falls".
  - Source: Britannica, "Masada".
- **AB:** "Pharisaic" is now a popup trigger. New popup "Pharisees": "A Second Temple movement of lay teachers who interpreted the Torah, including traditions not written in it; after 70 CE their successors became the rabbis." Basis: textbook p. 230 (rabbis are "successors of the Pharisees").
- **AE:** added the on-slide line "Reading Guide Questions 4–5 (Reform Judaism, Zionism): answer from your textbook, pp. 233–234.", plus a matching notes paragraph.

**Lecture 2**
- **E:**
  - Bullet: "Related to the verb hayah, 'to be': the essence of the Hebrew deity is expressed in the name—existence, self-existence, uncreated" → "Probably built on hayah, 'to be' ('I am' / 'I will be'); tradition reads it as God's self-existence".
  - Source: textbook p. 238.
- **H:** El Shaddai card "God of the Mountain, or God Almighty" → "God Almighty (traditional); meaning debated, perhaps 'God of the mountain'". Notes explain the Vulgate *Deus omnipotens* and the Akkadian *šadû* proposal.
- **J:**
  - Bullet: "One moral standard for all people (universal morality)" → "One moral law for all humanity (the rabbis' seven Noahide laws); Israel's covenant adds further commandments".
  - Notes and source: Maimonides, Mishneh Torah, Kings 8:11 (Touger), "the pious among the gentiles".
- **N:**
  - New bullet: "God is also immanent: present in the world and active in human history".
  - Source: textbook p. 238.
- **P:**
  - Bullet: "Holiness is the elevation of the human being from his animal nature to his divine nature – created in God's image" → "Holiness means becoming like God in how we live—created in God's image, called to be gracious, compassionate, and just".
  - Notes and source: Maimonides, De'ot 1:6 (Sefaria Community Translation).
- **Q (pause, Q6):** the answer points add eternal, all-knowing, all-present, all-powerful, transcendent and immanent, just and merciful (textbook anchor, p. 238).
- **S:** "History of Judaism begins with Abram" → "Jewish tradition traces its story to Abram (later Abraham)".
- **W:** "People implies Judaism is both a religion and an ethnicity" → "People implies Judaism is both a religion and a people (peoplehood)".
- **AK:**
  - Bullet: "Jews looking for a political savior: one who will re-assert Jewish sovereignty" → "Classical hope: a human king from David's line who restores Israel's sovereignty, rebuilds the Temple, and gathers the exiles; Reform Judaism speaks instead of a messianic age that people help bring nearer".
  - Sources: Maimonides, Kings 11:1 (Touger); CCAR, Pittsburgh Principles (1999).
- **AP:**
  - The menorah emoji (U+1F54E, the nine-branched Hanukkah lamp) was replaced by an inline gold SVG of a seven-branch lampstand. It is decorative (`aria-hidden`), so the card text is unchanged.
  - Notes: explain the icon, and add the caution about textbook p. 225 ("the nine days of the festival").
  - Source: Shabbat 21b.

**Lecture 3**
- **X:**
  - Bullet 1: "Shabbat extends from Friday sunset to Saturday night" → "Shabbat runs from just before sunset on Friday to nightfall on Saturday, when Havdalah ends it". "Havdalah" is a new keyboard-accessible popup: "Hebrew for 'separation': the short ceremony that ends Shabbat on Saturday night, with blessings over wine, fragrant spices, and a braided candle, marking the move from holy time back to ordinary time."
  - Bullet 4: "Rest from ordinary labor creates sacred time for God, family, dignity, and renewal" → "Traditional law forbids 39 kinds of creative work (melakhah), such as kindling a fire or writing". The rest-and-renewal meaning remains in the notes and in J's answer points.
  - Notes: added the caution about textbook p. 245 (sunset vs. nightfall).
  - Sources: Mishnah Shabbat 7:2; Shulchan Arukh, Orach Chayim 293:2 and 296:1; textbook p. 245.
- **J (pause, Q9):** the answer points now say nightfall, Havdalah, and the 39 categories of creative work.
- **AB:**
  - Bullet: "Bar or bat mitzvah: at 13 (often 12 for girls), marks responsibility for the commandments and participation in communal worship, often by reading from the Torah" → "Bar or bat mitzvah: at 13 (12 for girls in many communities) a young person becomes responsible for the commandments; a synagogue celebration, often with a Torah reading, marks it".
  - Sources: Pirkei Avot 5:21 (Kulp); Mishnah Niddah 5:6; textbook p. 247.
- **AD (pause, Q11):** the answer points now say the status comes with age, not the ceremony; the ceremony (often a Torah reading) is a public celebration; and practice varies by movement.

**Removed in this pass:**
- "Rest from ordinary labor creates sacred time for God, family, dignity, and renewal" on L3 X. It was replaced by the work-rules bullet; the meaning is still covered in the notes and on J.
- "participation in communal worship" on L3 AB.

**Textbook cautions:** recorded for the instructor only in `ch10_textbook_cautions.md`; they are not in the decks (the AP and X notes include short cautions where the deck topic overlaps).

## L1 slide edits after the _revFA26 rename (2026-10-19)
Requested by Steven. This pass changed Lecture 1 only. The L2 and L3 files are byte-identical to commit 1efe28b. L1 now has 31 slides: A C D F G H I J AG AH K L … AE (after the J/AF change and the Joseph slides below).

**Removed slides (IDs retired, never reused; recorded in the PERMANENT SLIDE IDS comment):**
- **B, "Lecture Roadmap: Three Historical Turning Points"** (old slide 2). It previewed the three sections; the section slides C, L and U still name each one.
- **E, "History, Memory & Sacred Story"** (old slide 5).
  - Cross-reference check: no Look-back line, "Taught on" list, popup, or note in L1–L3 cited B or E. The only mention was in my workspace evaluation of the external audit ("L1 E itself separates sacred narrative from historical evidence", finding 10), which is not in the repo.
  - **Flag:** E's method point supports the wording on H ("Jewish tradition traces its story to Abram"), so one sentence was moved into C's speaker notes only: "Method reminder (moved from the removed slide E): Genesis is sacred narrative that interprets origins through relationship with God; historians ask different questions of texts and archaeology, and a remembered story can shape identity even where its details are debated."
  - Already covered elsewhere: A's notes ("the earliest biblical narratives cannot be treated like modern archival history"). E's Passover example of collective memory is not carried over.
- The originals of both slides remain in the archived pre-edit deck (`backups/ch10-judaism/rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora.html`, old slides 2 and 5). The converted versions as they stood at commit 1efe28b are preserved verbatim here:

```html
<section data-slide-id="B">
<p class="kicker">Lecture Roadmap</p>
<h2>Three Historical Turning Points</h2>
<div class="card-grid cols-3">
  <div class="card teal">
    <h3><span class="roman">I</span>A People before a State</h3>
    <p>How do creation, ancestry, and covenant establish identity?</p>
  </div>
  <div class="card purple">
    <h3><span class="roman">II</span>Liberation, Kingdom &amp; Exile</h3>
    <p>How do Exodus, Torah, monarchy, and catastrophe reshape the people?</p>
  </div>
  <div class="card crimson">
    <h3><span class="roman">III</span>Temple to Torah</h3>
    <p>How does Judaism survive conquest, diaspora, and the loss of the Temple?</p>
  </div>
</div>
<aside class="notes">
  <div style="font-family: Georgia, serif; font-size: 16px; line-height: 1.6; color: #333;">
    <h3 style="color: #2c5282; margin-top: 0.5em;">Understanding This Slide</h3>
    <p style="margin-bottom: 1em;">Preview the lecture’s three movements. Each section ends with an institutional or theological adaptation: covenant identity, renewed Torah-centered community, and rabbinic Judaism.</p>
    <p style="margin-bottom: 1em;">Students should track both continuity and change. The tradition preserves older memories while interpreting them differently in new historical settings.</p>
  </div>
</aside>
</section>

<section data-slide-id="E">
<h2>History, Memory &amp; Sacred Story</h2>
<div class="card-grid cols-3">
  <div class="card teal">
    <h3>Sacred Narrative</h3>
    <p>Genesis and Exodus interpret origins through relationship with God.</p>
  </div>
  <div class="card purple">
    <h3>Historical Evidence</h3>
    <p>Texts, archaeology, inscriptions, and comparative study answer different questions.</p>
  </div>
  <div class="card crimson">
    <h3>Collective Memory</h3>
    <p>A story can shape identity and practice even when its details remain historically debated.</p>
  </div>
</div>
<p class="takeaway">Historical and religious questions overlap&mdash;but they are not identical.</p>
<aside class="notes">
  <div style="font-family: Georgia, serif; font-size: 16px; line-height: 1.6; color: #333;">
    <h3 style="color: #2c5282; margin-top: 0.5em;">Understanding This Slide</h3>
    <p style="margin-bottom: 1em;">Establish a careful method before discussing Genesis and Exodus. Religious narratives make claims about divine purpose, human identity, and covenant; historians investigate composition, context, material evidence, and chronology.</p>
    <p style="margin-bottom: 1em;">Do not reduce the choice to “literal fact or meaningless fiction.” Collective memory can be historically formative. Passover is a clear example: later generations place themselves inside the Exodus story.</p>
  </div>
</aside>
</section>
```

**C, Section I: Ancestral Memory & Covenant (restyled):**
- It was a plain section divider; it now uses the same format as title slide A:
  - full-bleed background `images/rel210-ch10-l1-section1-abraham-stars.webp`;
  - the same dark blurred panel with gold border and gold rule;
  - the background alt text in screen-reader text, starting "AI-generated…", as on A.
- Text is unchanged: kicker "Section I", title, and question.
- **Flag:** the panel is moved up 3.6em (`.title-overlay.upper`, L1-only CSS) so it does not cover the figure on the hill. Otherwise it is identical to A.
- Notes added:
  - the Genesis 15:5 (NRSV) connection: "Look toward heaven and count the stars, if you are able to count them" / "So shall your descendants be."
  - the method sentence from E.

**J, Patriarchal Order (Jacob's children folded in at Steven's request):**
- The pedigree is now four tiers in the same gold-bordered box style: Abraham & Sarah ↓ Isaac & Rebekah ↓ Jacob (Israel), Leah & Rachel ↓ a final row of four boxes, one per mother (Genesis 35:22–26, NRSV spellings):
  - Leah: Reuben *(firstborn)*, Simeon, Levi, Judah, Issachar, Zebulun; daughter Dinah
  - Rachel: Joseph, Benjamin
  - Bilhah (Rachel's maid): Dan, Naphtali
  - Zilpah (Leah's maid): Gad, Asher
- Layout: the bullets now sit above the pedigree at full width. The old two-column split is gone.
- Legibility, measured at 1280×720: names 16.8px, mother names 18.8px, the "maid" labels 16.5px.
- No overflow at 960×700, 1280×720 or 1920×1080.
- Bullets: the firstborn bullet and its popup are unchanged. "Jacob's twelve sons establish the twelve tribes of Israel" is kept, with "(next slide)" dropped.
- Moved from the slide into J's notes:
  - the third bullet, "Story of Joseph", now a note that his story (Genesis 37–50) brings the family to Egypt (that note later moved to AG; J's notes now say "Next: AG and AH tell the story of Joseph…");
  - from the short-lived AF slide: the closing line "Reuben is the firstborn, yet Judah leads and the birthright passes to Joseph's sons";
  - AF's notes on the births and Dinah, on 1 Chronicles 5:1–2, and on Ephraim and Manasseh (Genesis 48:5; Joshua 14:4), with their NRSV sources.

**AF, "Jacob's Children: The Twelve Tribes":** added after J earlier on 2026-10-19, then removed the same day once its content fit on J. ID AF is retired and never reused, as recorded in the PERMANENT SLIDE IDS comment. It was never committed.

**AG and AH, the story of Joseph (new, after J; Steven's request):**
- Purpose: connect the tribes on J to Egypt and the Exodus. Seven story beats were too dense for one slide, so the story is split across two.
- IDs: AG is the next unused ID after the retired AF; AH follows. Both are recorded in the PERMANENT SLIDE IDS comment.
- Bullets are written for first-year students. All quotations are NRSV (1989), checked 2026-10-19 on bible.oremus.org; the KJV wording was checked on biblegateway.com.
- **AG, "The Story of Joseph: The Favored Son"** (kicker Genesis 37). Image and text layout, like M.
  - Bullets:
    - "Favored son: Jacob loves Joseph most and gives him 'a long robe with sleeves'" (Genesis 37:3)
    - "Dreams: Joseph dreams that his family will bow down to him" (37:5–8)
    - "Betrayal: his jealous brothers sell him, and traders carry him off to Egypt" (37:28)
  - Image `images/rel210-ch10-l1-joseph-robe.webp`. Visible caption: "AI-generated illustration: Joseph's robe, the 'coat of many colours' of older translations such as the KJV" (KJV Genesis 37:3: "a coat of many colours").
  - Notes:
    - J's "Story of Joseph" note, moved here;
    - a two-minute storytelling script;
    - a note on the translation difference (the Hebrew phrase is uncertain);
    - a link back to J's firstborn theme;
    - sources.
- **AH, "Joseph in Egypt: How Israel Came to Egypt"** (kicker Genesis 39–47). Text only.
  - Bullets:
    - Rise: Pharaoh's dreams, seven years of plenty and seven of famine (41:25–30, 41:41)
    - Famine
    - Reconciliation: "I am your brother, Joseph, whom you sold into Egypt" (45:4)
    - Settlement: seventy people in Goshen (46:27; 47:27)
  - Takeaway: "Generations later, 'a new king arose over Egypt, who did not know Joseph' (Exodus 1:8)—and the Exodus story begins."
  - Notes: a storytelling script quoting 45:5 ("God sent me before you to preserve life"), the Genesis 50:20 theme, the transition to Section II, and the sacred-narrative reminder.
- **M, "The Exodus Narrative":** one transition note added, linking back to AG–AH and Exodus 1:8. The pause K and Section II divider L still sit between AH and M, and the flow reads cleanly.
- **Mapping:** AG is mapped to old slide 9, because it expands the original "Story of Joseph" bullet. AH is new.

**L and S, new images (Steven's request; no ID changes, no new slides):**
- **L, Section II: Exodus, Monarchy & Exile.**
  - Was a plain section divider. It now uses the A/C format:
    - full-bleed background `images/rel210-ch10-l1-section2-exodus-pillar.webp`;
    - the same dark blurred panel with gold border and gold rule;
    - the alt text in screen-reader text, starting "AI-generated…".
  - Text is unchanged.
  - **Flag:** the panel is narrower (max 430px), aligned left and moved up 4.2em (`.title-overlay.left-sky`, L1-only CSS). This keeps it clear of the pillar of fire and the procession at all three test sizes. The title wraps to two lines.
  - Notes: added Exodus 13:21 (NRSV, checked 2026-10-19 on bible.oremus.org): "The Lord went in front of them in a pillar of cloud by day, to lead them along the way, and in a pillar of fire by night, to give them light, so that they might travel by day and by night."
- **S, Return & the Second Temple.**
  - Now uses the house image+text layout. The four bullets are unchanged; the list is now tight.
  - Image: `images/rel210-ch10-l1-second-temple.webp`.
  - **Flag:** S teaches the Persian-era rebuilding (538/515 BCE), but the image shows Herod's expansion (begun 20 BCE). The visible caption therefore reads "AI-generated imagining of the Second Temple as later expanded by Herod; not an archaeological reconstruction". The alt text says "as rebuilt by Herod".
  - New notes paragraph on the difference, quoting Britannica, "Temple of Jerusalem" (checked 2026-10-19):
    - the 515 BCE Temple "was constructed as a modest version of the original building";
    - under Herod "the area of the Temple Mount was doubled" and "the Temple was raised, enlarged, and faced with white stone."
  - The note adds that this is the Temple destroyed in 70 CE (X), and that the fortress suggests the Antonia.

**U, V, AI, W, AE, and the Roman Judea mini-lecture (Steven's request, 3:24 PM):**
- **U, Section III: Conquest, Diaspora & Rabbinic Judaism.**
  - Was a plain section divider. It now uses the A/C/L format: full-bleed background `images/rel210-ch10-l1-section3-portable-torah.webp`, the same dark panel with gold rule, and the alt text in screen-reader text.
  - Text is unchanged. **Flag:** the panel reuses L's `.title-overlay.left-sky` placement (max 430px, left, raised 4.2em). It sits in the empty upper-left sky, clear of the burning city (right) and the scroll-bearer (bottom right) at all three sizes.
  - Notes: one paragraph tying the image to the section question and to AB (portable, Torah-centered Judaism).
- **V, retitled "Hellenism & the Road to Revolt"** (was "Hellenism, Revolt & Hanukkah"). It now explains *why* the revolt happened, in three story cards:
  - A Greek World (332 BCE; many Jews adopt Greek ways and remain fully Jewish);
  - Jews Disagree (the high priest Jason's gymnasium, welcomed by some Jews and seen by others as a betrayal of the covenant);
  - The King Bans Judaism (167 BCE: Sabbath, circumcision, and Torah forbidden; pagan sacrifice on the Temple altar).
  - Takeaway: "The revolt began as a fight over whether Jews could keep living by the Torah."
  - Notes: a storytelling script, plus a framing note that Hellenizers still saw themselves as Jews and that 1–2 Maccabees are written from the rebels' side.
  - **Flag (date):** the old V dated the Temple plunder to 168 BCE (textbook p. 229). 1 Maccabees 1:20 dates it to the 143rd Seleucid year (about 169 BCE). The slide no longer dates the plunder; the notes give both dates. The decrees and the "desolating sacrilege" stay at 167 BCE (1 Macc 1:54).
  - Old V bullets, preserved verbatim: "332 BCE: Alexander's conquest brings Judea into a Greek-speaking world" · "Cultural exchange: many Jews adopt Greek language and customs while remaining Jewish" · "Maccabean Revolt: Antiochus IV plunders the Temple (168 BCE), bans Sabbath, circumcision, and Torah, and sets up pagan worship there; the revolt begins in 167 BCE" · "Hanukkah: remembers the Temple's rededication and renewed Jewish worship". The old Brenton/Sefaria source note was replaced with NRSV citations.
- **AI, "The Maccabean Revolt & Hanukkah" (new, after V; next unused ID after AH).** It covers *who* and *outcome*, image+text layout:
  - Modein, 167 BCE: Mattathias refuses the king's sacrifice and cries, "Let every one who is zealous for the law and supports the covenant come out with me!" (1 Macc 2:27, NRSV);
  - From the hills: Judah "the Maccabee" leads a guerrilla war;
  - 164 BCE: Temple rededicated; Hanukkah (the **same popup, `l1-hanukkah`, moved here unchanged**) remembers it for eight days;
  - Afterward: the Hasmoneans rule an independent Jewish state (by 142 BCE; 1 Macc 13:41).
  - Image `images/rel210-ch10-l1-maccabean-revolt.webp`, caption "AI-generated imagining of the Maccabean revolt; not a specific battle". The notes link the war elephant and tower to 1 Macc 6:30, 6:37.
  - NRSV text checked 2026-10-19 on biblestudytools.com (NRSV with Apocrypha, US edition). bible.oremus.org serves only the Anglicized NRSV for the Apocrypha (same wording, British spelling and punctuation), so it was used only as a cross-check.
  - Pauses and Look-backs: no pause, Look-back, or worksheet reference points to V or W, so the split changes none of them. AD still looks back to X and AB.
- **W, "Roman Rule & Rising Tension".** The four bullets are unchanged (now tight). New items:
  - image `images/rel210-ch10-l1-herod-client-king.webp`, caption "AI-generated imagining of Herod as Rome's client king";
  - a visible button "Mini-lecture: Roman Judea →" (`a.button-link`, `target="_blank" rel="noopener"`). It is a native link, so it is Tab-focusable and Enter opens it. Tested: one Tab reaches it, Enter opens the deck in a new tab, and the lecture stays on W;
  - two notes paragraphs (Senate 40 BCE, Jerusalem 37 BCE, Temple begun about 20/19 BCE; what the mini-lecture covers), sourced to Britannica "Herod" and Antiquities 15.11.1.
- **AE, "Beyond the Lecture".** A second button was added below the Rabbit Hole button, in the same `button-link` style: "Roman Judea: How Rome Conquered and Governed Judea →". It has a one-line lead-in and a notes line.
- **L1-only CSS:** `.mini-link` (centers W's button). L2 and L3 are byte-identical (bec758237ad3, 1d86cb60bd38).
- **New supplement: `rel210-ch10-supplement-roman-judea_revFA26.html`** (25 slides, permanent IDs A–Y).
  - Style follows the Rabbit Hole supplement: deck.css, the local reveal runtime, 1600×900, `ppt-*` layout, `rh-*` cards, callouts and flow, trail dividers, Pause & Connect slides, a synthesis flow, fragments, `?edit=1` and `?show-all-fragments`.
  - **Flag:** the Rabbit Hole deck has no permanent slide IDs and no capture-phase Esc fix. The new deck adds both from the house decks: a PERMANENT SLIDE IDS comment, `data-slide-id`, a corner label, and an Esc handler that closes the keyboard panel without toggling the overview. It also adds `aria-expanded`/`aria-controls` and focus return on the ⌨ button, alt text, a visible "AI-generated…" caption on every image, and sourced speaker notes on every slide.
  - Josephus is cited by book.chapter.section (Whiston, Project Gutenberg). Britannica articles were checked 2026-10-19. There are no Bible quotations in slide text.
  - **Dropped as unverifiable or overclaiming:**
    - Herod's age when he took Galilee (Josephus says 15; the figure is disputed);
    - any Macrobius "better to be Herod's pig" quote;
    - "tax farming" of direct taxes (kept only tolls and toll collectors);
    - a fixed Sanhedrin jurisdiction (kept only the Antiquities 20.9.1 evidence of limits);
    - a single Zealot movement from 6 to 73 CE (presented as debated);
    - a single cause for Bar Kokhba (presented as debated);
    - a firm Masada date (given as 73/74).
- **index.html:** a new card after the Rabbit Hole card in the Judaism grid (lecture-day "Optional Deep-Dive", badge "Mini-Lecture"). The grid now has 6 cards (2 columns). **Flag:** index.html already contains mojibake (e.g. "â†’", "âœ¡ï¸") in older cards. It was left untouched; the new card uses `&rarr;`, as the newer cards do.

## L2 revision pass: plan items 1–22 (approved by Steven 2026-10-19)
Source: `l2_revision_plan.md`, items 1–22. Items 23 and 24–29 were not approved and were not done. Workflow: `lecture-deck-revision-pass`. L1 and L3 are unchanged by this pass. L2 went from 44 to 45 slides: G was retired, and AS and AT are new. Sequence: A B C D E F H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AR AH AI AJ AK AS AL AM AN AO AP AQ AT. The pre-pass L2 HTML is archived in `bak_l2rev/`, and the builder in `tools/build_l2.pre_l2rev.py`.

**Images and section dividers (items 1–11)**
- **C, R, AJ.** These now have full-bleed backgrounds in the L1 divider format: `title-slide`, `data-background-image`, and a `.left-sky` text panel placed top-left, away from the subject. The images are `rel210-ch10-l2-section-one-god.webp`, `-section-sinai-night.webp` and `-section-hope-dawn.webp`. Alt text was written from viewing each image, and the notes explain what each image shows.
  - C's notes cite Berakhot 13b.
  - R's notes cite Exod 19:16 and 19:18 (NRSV).
  - **Flag:** on R the panel overlaps the edge of the smoke slightly; the mountain stays clear.
- **T.** Image `-covenant-between-pieces.webp`, captioned "AI-generated illustration".
  - **Flag:** the image shows one row of halves, but Gen 15:10 implies two facing rows. This is noted in the notes.
- **AK.** Image `-samuel-anoints-david.webp`.
- **AB.** Image `-gleaners-field-corner.webp`.
- **M.** Image `-abraham-smashes-idols.webp`. The caption calls it a rabbinic legend (Genesis Rabbah 38:13), not Torah. The notes tell the midrash using quotes verified on Sefaria.
  - **Flag:** the midrash gives no age for Abraham, so the image's young Abraham is noted as artistic license.
- **AC.** The tablets image was replaced by `-tablets-sinai.webp`. The old stone-tablets image is kept in `images/`; nothing was deleted.
- **AP (item 8).** Real photo `rel210-ch10-l2-arch-of-titus-menorah.webp`, 1280×960, WebP q68, 218 KB.
  - Source: Wikimedia Commons, File:Arch_of_titus_relief_2.jpg, by Anthony M. from Rome, Italy, licensed CC BY 2.0 (via Flickr).
  - The visible caption gives the author and license and links to both the license and the file page.
  - Notes cite Britannica "Arch of Titus" and Josephus, *War* Book 7 (the triumph).
- **F and S provenance (item 10).**
  - Both files come from Steven's original deck: `original-media/image16.png` (F, 1792×1024) and `image6.png` (S, 960×1200). Neither has any embedded metadata. Both first appear in the repo in commit 5eca267.
  - 1792×1024 is a native DALL·E 3 output size, so F is *probably* AI-generated, but this is not confirmed.
  - Both are captioned "Illustration from the original slides (source unknown)", and F's alt text says "Painting-style illustration". **Flag: provenance unknown.**
- **Captions.** All image captions use the existing `.img-caption` style.

**Story gaps and density (items 12–21)**
- **D:** notes on the mezuzah's slant, citing Rema on Shulchan Arukh YD 289:6 (Sefaria).
- **E:** trimmed to 3 bullets.
- **F + G merged:** a "What the name teaches" bullet was added to F; the five card headings moved to F's notes. **G is retired**; its slide is preserved verbatim below.
- **J:** a Noah covenant line (Gen 9:10, NRSV, "and with every living creature") and a popup `l2-noahide` listing the seven laws (Sanhedrin 56a, Sefaria).
- **S:** trimmed.
- **T:** rewritten as a story in 4 bullets: Gen 15:5, 15:17, 17:5 and 17:11–12 (NRSV). Popups were kept, and the Jeremiah 34:18 popup was revised (NRSV). The citation list moved to the notes.
- **W:** trimmed to 4 bullets.
- **Y and Z:** "Who:" lines added for Rashi and Nahmanides (Britannica).
- **AB:** the first bullet now quotes Lev 19:9–10 (NRSV).
- **AC:** a Sinai line plus the Ten Commandments in Jewish numbering, in two lists (1–5 and 6–10). The notes cite Exod 32:15 and Bava Batra 14a.
  - **Flag:** the columns are unlabeled, because the "five per tablet" split was not verified.
- **AF:** a redundant bullet was removed.
- **AR:** the good-impulse card text was shortened.
- **AH:** a "prophet's story" bullet (Amos 7:13) and Micah 6:8 on the slide, with the story in the notes. The old bullet and takeaway moved to the notes.
- **AK / AS:** AK was retitled "Messiah: The Anointed King", with an anointed popup, 1 Sam 16, 2 Sam 7:16 and Isaiah, plus a button "Mini-lecture: Messiah in Jewish History →".
  - **AS (new)**, "Messianic Hope Today", holds the Classical and Reform cards and the takeaway.
- **AT (new, last):** "Beyond the Lecture: Messiah in Jewish History", with a button to the new deck.
  - **Flag:** L2 had no Independent Study / "Beyond the Lecture" slide, so AT was created in the style of L1 AE.
- **Look-back and Taught-on check:**
  - L2 Q "D–H" and "The Divine Name" (E) are still valid after G's retirement.
  - The AQ and L3 references point to unchanged slides.
  - No reference needed editing.
- **Font-size flag:** at 1280×720, `.img-caption` renders at 11.1px and the kicker and citation lines at 13.7px. This is the existing house style, also used in L1 and L3, and was not restyled. All body text is at least 16px.

Retired slide G, verbatim from the pre-pass deck:

```html
<section data-slide-id="G">
            <p class="kicker">Teachings of Judaism &middot; One God</p>
            <h2>What the Name Teaches</h2>
            <div class="card-grid cols-3 five">
              <div class="card teal">
                <h3>Eternal Self-Existence</h3>
                <p>&ldquo;I am&rdquo; / &ldquo;I will be&rdquo;: God simply is, uncreated.</p>
              </div>
              <div class="card purple">
                <h3>Ineffability of God</h3>
                <p>No name can capture or control God.</p>
              </div>
              <div class="card crimson">
                <h3>Active Presence</h3>
                <p>God is the one who will be there with the people.</p>
              </div>
              <div class="card gold">
                <h3>Hebrew Linguistic Roots</h3>
                <p>YHWH and <em>Ehyeh</em> both echo <em>hayah</em>, &ldquo;to be.&rdquo;</p>
              </div>
              <div class="card teal">
                <h3>Contrast to Pagan Deities</h3>
                <p>Not a manageable local god whose name can be used to summon it.</p>
              </div>
            </div>
            <aside class="notes">
              <div style="font-family: Georgia, serif; font-size: 16px; line-height: 1.6; color: #333;">
                <h3 style="color: #2c5282; margin-top: 0.5em;">Understanding This Slide</h3>
                <p style="margin-bottom: 1em;">The five headings are from the original slide; the one-line glosses under each heading summarize the speaker notes for this pair of slides.</p>
                <p style="margin-bottom: 1em;">Exodus 3 resists treating the divine name like the name of a manageable local deity. “I AM” or “I WILL BE” suggests self-existence, continuing presence, and freedom from human control.</p>
              </div>
            </aside>
            </section>
```

**New supplement: `rel210-ch10-supplement-messiah-in-jewish-history_revFA26.html`** (24 slides, permanent IDs A–X; builder `tools/build_mj.py`)
- **Style:** same framework as Roman Judea (1600×900, deck.css): PERMANENT SLIDE IDS, a corner label, the capture-phase Esc fix, ⌨ `aria-expanded` with focus return, alt text and "AI-generated" captions, and sourced notes on every slide.
- **Images:** reuses the hope-dawn (title), Samuel/David (E), Herod (J) and 70 CE (Trail II divider) images.
- **Trails:**
  - I: Kings & Prophets (D–H)
  - II: Hope under Empire (I–L)
  - III: Rabbis & Maimonides (M–P)
  - IV: False Dawns & Modern Paths (Q–U)
  - then a synthesis (V), a self-check (W) and sources (X).
- **Verified quotations:**
  - NRSV: Isa 45:1, Lev 4:3, 1 Sam 16:10–13, 2 Sam 7:16, Isa 11:1/6/12, Jer 23:5, Num 24:17.
  - Sefaria: Sanhedrin 97b, 98a ("At the entrance of the city of Rome"), 99a; Berakhot 34b; Ketubot 111a (three oaths); Lamentations Rabbah 2:4; JT Taanit 4:5; Amidah and Ani Ma'amin (Metsudah); Maimonides' 12th principle; Kings 11:3, 11:4, 12:1, 12:4 (Touger).
  - Britannica: messiah, Shabbetai Tzevi, Moses Maimonides.
  - CCAR Pittsburgh Platform 1885, art. 5, and the 1999 Statement.
- **Hedged:**
  - the Dead Sea Scrolls' "Messiahs of Aaron and Israel" (1QS 9:11; "two messiahs?" as a question);
  - the Psalms of Solomon (paraphrased, not quoted);
  - Isaiah 11's original setting (notes only);
  - Chabad: "some followers" proclaimed Schneerson the messiah, his own stance is debated, and the movement split after 1994; no statistics are given;
  - Haredi opposition is stated as "some".
- **Dropped as unverified:**
  - Shabbetai-era "sold their houses" stories;
  - claims about how long the Sabbatean movement lasted and its later effects;
  - the "he did not die" sub-group;
  - the author attribution for the Chabad journal article.
- **Links:**
  - L2 AK and L2 AT link to this deck.
  - Its slide K links to Roman Judea. **Flag:** this link is one-way; the Roman Judea deck was not edited.
- **index.html:** a new card after the Roman Judea card ("Optional Deep-Dive", "Mini-Lecture"). The existing mojibake was left untouched.

**Tests (2026-10-19):**
- L1, L2 and L3 at 960×700, 1280×720 and 1920×1080: no overflow, no JS or HTTP errors, no broken images, ID labels OK; keyboard and Esc checks pass.
- The Messiah deck at the same 3 sizes, with and without show-all-fragments: no out-of-bounds elements, overlaps, JS, console or HTTP errors, or broken images; labels and notes are present on all 24 slides; keyboard and Esc checks pass. Minimum font is 17.6px at 1280×720.

## L2 slide X fix: Sifra Kedoshim 1:1 (approved by Steven 2026-10-19)
- **Quote:** "To follow in the footsteps of the King" (Silverstein) was replaced by the literal "What is the duty of the king's retinue? To imitate the king."
  - Citation: Abba Shaul, Sifra, Kedoshim 1:1 (Hebrew: *pamalya la-melekh… lihyot mehakah la-melekh*).
  - The Hebrew was checked on Sefaria (Venice 1545): אבא שאול אומר פמליא למלך, ומה עליה להיות מחקה למלך.
  - The source note now says the slide's wording is our literal rendering of the Hebrew, following Silverstein's translation on Sefaria. Silverstein's own wording, including "(and to be holy)", is quoted there in full.
- **New line under the quote** (`.x-gloss`, 16.8px at 1280×720): "The rabbis read Leviticus 19:2 this way: God is the King, Israel is His retinue, and holiness means imitating God."
- **Notes:** an imitatio Dei explanation, plus Sotah 14a (Rabbi Ḥama son of Rabbi Ḥanina).
  - The four examples are quoted from the William Davidson translation (checked 2026-10-19): clothe the naked, visit the sick, console mourners, bury the dead. Ellipses mark the omitted proof verses.
  - The proof verses are then summarized: Gen 3:21, 18:1, 25:11; Deut 34:6.
- **No ID change.**
- **Tests:** L1, L2 and L3 at all 3 sizes: no overflow, errors or broken images. Keyboard and Esc checks pass.
- **Hashes:** L2 is now 29f4bd3dc217. L1 and L3 are unchanged.

## L2 slides X and AC follow-up (approved by Steven 2026-10-19)
- **X:** the line "The rabbis read Leviticus 19:2 this way: God is the King, Israel is His retinue, and holiness means imitating God." was moved from under the Sifra quote.
  - It is now a sub-bullet under the existing Imitatio Dei bullet: `ul.sub`, 0.9em, the house diamond marker, with Reveal's square marker suppressed.
  - The unused `.x-gloss` CSS was removed. The notes and sources are unchanged.
- **AC:** the AI image of two rectangular tablets (`rel210-ch10-l2-tablets-sinai.webp`) was replaced. Steven said it resembled the Twin Towers.
  - New image: `rel210-ch10-l2-moses-tablets.webp`, AI-generated, 1280×720 (16:9), 128 KB, Rembrandt-style.
  - Layout: the split was widened from 1.35fr/0.65fr to 1.2fr/0.8fr to suit the landscape image.
  - Alt text was written from viewing the image.
  - Caption: "AI-generated, in the traditional artistic style; round-topped tablets come from later art, not the biblical text."
  - The notes now explain that the round top is a later artistic convention and that only one tablet is clearly shown, while Moses carries "the two tablets of the covenant" (Exod 32:15, NRSV, re-checked). The Bava Batra 14a dimensions are kept.
  - The old files `rel210-ch10-l2-tablets-sinai.webp` and `rel210-ch10-l2-stone-tablets-sinai.webp` remain in `images/`, unused.
- **No ID changes.**
- **Tests:** L1, L2 and L3 at 960×700, 1280×720 and 1920×1080: no overflow, errors or broken images. Keyboard and Esc checks pass.
- **Hashes:** L2 is now 99da18851746. L1 and L3 are unchanged.

## L2 slides X and AP follow-up (approved by Steven 2026-10-19)
- **X:** "The rabbis read Leviticus 19:2 this way: God is the King, Israel is His retinue, and holiness means imitating God." is now a top-level bullet placed above the Imitatio Dei bullet, at the same level and style.
  - The sub-bullet and its `ul.sub` CSS were removed. The notes and sources are unchanged.
- **AP:** the lone Arch of Titus photo became a three-image row (`.sym-row`, a 3-column grid with the same 0.9em gap as the cards), one image under each card.
  - Every image is cropped the same way (16:9, `object-fit: cover`).
  - Left: `rel210-ch10-l2-star-of-david.webp`, AI-generated (1280×720, 236 KB). Caption: "AI-generated: a Star of David carved on a synagogue-style facade".
  - Middle: the Arch of Titus photo. The CC BY 2.0 credit is kept intact: Anthony M. from Rome, Italy, with license and Commons links.
  - Right: `rel210-ch10-l2-chai.webp`, AI-generated (1280×720, 59 KB). Caption: "AI-generated: a gold Chai (חי) pendant".
  - Alt text was written from viewing each image.
  - The notes add an explanation of the image row: the left and right images are AI illustrations, not specific real objects.
  - The old `figure.fig.titus` CSS was replaced.
- **No ID changes.** AC–AE were not touched.
- **Tests:** L1, L2 and L3 at 960×700, 1280×720 and 1920×1080: no overflow, errors or broken images, and AP is not crowded. Keyboard and Esc checks pass.
- **Hashes:** L2 is now e6f218ecf2f4. L1 and L3 are unchanged.

## L2 slides AC–AE: Jewish name for the Ten Commandments (approved by Steven 2026-10-19)
- **AC heading:** "The Ten Commandments: An Overview" became "The Ten Commandments", with the subtitle line "(*Aseret ha-Dibrot*, "the Ten Utterances")" (`h2 .h2-sub`).
  - No Look-back or Taught-on text referenced the old title.
- **AC, new bullet** (`ul.ten-words`, below the numbering note): "The Torah calls them "ten words" (*aseret ha-devarim*, Exod 34:28; Deut 4:13). The first is a statement, not a command, and the Torah holds 613 commandments in all."
- **AC, notes:** three new paragraphs.
  - The name: the NRSV says "the ten commandments"; the Hebrew is עשרת הדברים; Rashi writes עשרת הדברות.
  - Jewish English translations: NJPS (1985) says "the Ten Commandments".
  - **Flag:** JPS 1917 says "the ten words", not "Ten Commandments". The brief assumed both JPS versions use "Ten Commandments", so the notes say this accurately.
  - Statement vs. command, with a hedge: Maimonides, *Sefer HaMitzvot*, Positive 1, does count Exod 20:2 as the commandment to believe in God.
  - 613 (Makkot 23b, quoted), plus Rashi on Exod 24:12: all 613 are contained in the Ten.
- **Verified on Sefaria 2026-10-19:**
  - Exod 34:28 and Deut 4:13 / 10:4 in Hebrew (Miqra according to the Masorah), NJPS and JPS 1917;
  - Makkot 23b (William Davidson);
  - Rashi on Exod 24:12 (Rosenbaum & Silbermann);
  - Sefer HaMitzvot, Positive 1 (Nataf).
  - The NRSV wording was checked on biblestudytools (NRS), and the numbering on Britannica, "Ten Commandments".
- **AD:** the slide text is unchanged. One notes line was added: verse 1 says God "spoke all these words", hence Ten Utterances / Ten Words (see AC).
- **AE:** unchanged. "The Ten Commandments" appears only as its kicker, where adding the Hebrew would not read naturally.
- **No ID changes.**
- **Tests:** L1, L2 and L3 at all 3 sizes: no overflow, errors or broken images. Keyboard and Esc checks pass.
- **Hashes:** L2 is now c6116658defb. L1 and L3 are unchanged.

## L3 revision pass: plan items 1–49 (approved by Steven 2026-10-19)
Source: `l3_revision_plan.md`, all 49 items, including the move of pause AD (item 30). Steven chose the mini-lecture "From Temple to Synagogue" (items 43–45), not "The Jewish Year". The textbook cautions were not requested and were not written. There is no 35-minute cap. Workflow: `lecture-deck-revision-pass`, using the L2 conventions. L1 and L2 are unchanged by this pass. L3 went from 30 to 32 slides: AE (Marriage) and AF (Beyond the Lecture) are new. No IDs were retired.

**Final L3 order:** A B C D E F G H I K L M N O P Q R S T U V W X J Y Z AA AB AD AE AC AF.

**Images and section dividers**
- **C, K, T.** These dividers now use full-bleed AI images (scribe, kitchen, shofar) in the L1 and L2 divider format.
  - C: the scribe image originally showed a Star of David on the wall (noted as decor). It was replaced later the same day; see "L3 slides AB and C follow-up".
  - K: this slide uses a new `low-wide` panel so the red and blue dish sets and the mezuzah stay visible. The panel covers the cabinets and the sink basins. The notes explain the red/blue meat and dairy convention and the upright mezuzah ("many Sephardi Jews hang it upright").
- **R.** Tefillin and tzitzit image. The notes say the wrap count and head-box position are approximate.
- **P.** Temple-altar image, captioned "AI-generated artistic reconstruction… the details are conjectural". The notes address the altar ramp (Exod 20:26).
- **Y.** Sukkah image. The caption says the myrtle and willow are not visible.
- **AC.** Stones-on-a-grave image.
- **AE.** Chuppah image.
- **Real photos.**
  - G: a printed Talmud page, Berakhot 2a, public domain, from Wikimedia Commons. The Commons file names no edition, so it is captioned "printed Talmud page", not "Vilna". **Flag.**
  - E: the Great Isaiah Scroll, public domain, from Wikimedia Commons, credited in the sources.
- **Q fish image (optional item 10).** No image was supplied, so this was skipped. **Flag.**
- All AI images have alt text written from viewing each image, and every caption says "AI-generated".

**Content edits by slide**
- **E.** The Isaiah scroll figure was added, "apocalyptic hope" was trimmed, and the popup now says "in most printed editions".
- **F.** Added Avot 1:1 as a quote (Sefaria, Kulp translation).
- **G.**
  - Mishnah: Judah ha-Nasi, early 3rd century.
  - Babylonian Talmud: about 600 CE.
  - Jerusalem Talmud: about 400 CE, moved into the Talmud popup.
  - New popup on the oven of Akhnai (Bava Metzia 59b, paraphrased, not quoted).
  - Dates come from Britannica, OCD and Posen. The notes hedge them.
- **I.** The Hillel quote (Shabbat 31a) replaces the takeaway. The old takeaway moved to the notes.
- **J.** The recap names W's creation and liberation grounds (textbook p. 245).
- **L.** Added "(see Lecture 2, slide AC)".
- **M.** Application and Diversity were merged into 3 cards.
- **N.** Now a bridge to L2 X.
- **P.**
  - The cards give the NRSV names in brackets (Lev 1, 3, 4–5).
  - Added the Avot de-Rabbi Natan 4:5 quote and a button to the mini-lecture.
  - The sources add Hosea 6:6.
- **Q, U.** The "Ritual & Practice" kickers were removed to harmonize kickers (item 49). U adds Shulchan Arukh OC 94:1 as a source.
- **R.** Sources: Deut 6:8–9, Num 15:38–39, Mishneh Torah Mezuzah 5:1.
- **V.** Sources: Megillah 4:3 and Berakhot 21b.
- **X.** The synagogue bullet was cut. The notes explain the two challot.
- **Y.**
  - Purim line now glosses *pur* ("the lot").
  - Hanukkah line trimmed.
  - Sources: Lev 23:42, Esth 3:7, 9:24.
- **Z.** "A child (by custom, the youngest)"; source Pesachim 10:4.
- **AA.** Added notes on the zeroa.
- **AB.** Retitled "Life Cycle: Birth & Coming of Age". Adds a synagogue bullet (textbook p. 247) and a cross-reference to L2 T.
- **AE (new).** "Marriage: Chuppah & Ketubah".
  - Includes a chuppah popup.
  - The glass-breaking line cites Berakhot 31a (Rav Ashi); the Temple-mourning explanation is hedged.
  - The notes mention the tallit custom.
- **AC.**
  - Trimmed.
  - The Kaddish popup uses the Metsudah wording, "Exalted and sanctified be His great Name" (Sefaria), with Rema YD 376:4 as the source.
  - The stone custom is hedged.
- **AD (item 30).** The pause now looks back at AB and sits after AB.
- **AF (new).** Beyond the Lecture, with a button to the mini-lecture.
- **Optional 24-book Tanakh count.** Not verified, so it was omitted.

**New mini-lecture: `rel210-ch10-supplement-temple-to-synagogue_revFA26.html`**
- 24 slides, A–X, with permanent IDs. Built by `tools/build_t2s.py`, which was assembled from `build_mj.py` by `l3rev/assemble_t2s.py`. It uses the same `deck.css`, Esc fix, keyboard popup and slide-ID label as the other supplements. `deck.css` was not edited.
- **Story order:**
  1. Solomon's Temple (1 Kgs 6:1, 8:30; Deut 12:14).
  2. 586 BCE and the exile (2 Kgs 25:9; Ezek 11:16; Megillah 29a). Exile as the origin of the synagogue is hedged as a theory.
  3. The return (Ezra 1:3, 3:12, 6:15; Neh 8:3–4, 8:8).
  4. Second Temple worship (Num 28:4; Taanit 4:2; Tamid 5:1, 7:4), the ma'amadot, the Schedia proseuchē (246–221 BCE), the Theodotos inscription ("most scholars" date it before 70), and Gamla and Masada (Magness).
  5. 70 CE and Yohanan ben Zakkai at Yavneh (Gittin 56a–b; Rosh Hashanah 4:1).
  6. Prayer in place of sacrifice (Hosea 14:2 NRSV and NJPS 14:3; Berakhot 26b; Psalm 141:2).
  7. Dura-Europos (244 CE; buried about 256) and Beit Alfa (found 1928; Justin I, 518–527; the meaning of the zodiac is debated).
  8. The Prague Old-New Synagogue (c. 1270) and the rabbi's paid office.
  9. Synagogues today (Touro 1763; Washington's 1790 letter, as the NPS quotes it).
  10. Synthesis, self-check, sources.
- **Images reused:** temple altar (title), L1 First Temple, exile, Second Temple, 70 CE fall, early rabbis, and the L3 ark.
- **Two real photos added beyond the brief:** **Flag.**
  - Dura-Europos west wall: Yale University Art Gallery, CC0.
  - Beit Alfa mosaic: Betty Nudler, CC BY 2.0.
  - Both are from Wikimedia Commons and are credited and linked in their captions.
- **Links:**
  - L3 P and L3 AF link to the mini-lecture.
  - The mini-lecture links to Roman Judea from O and X. The link is one-way: Roman Judea was not edited.
  - `index.html` has a new card after the Messiah card.

## L3 slides AB and C follow-up (approved by Steven 2026-10-19)
- **AB.** The "Brit milah / naming" bullet was split into two bullets, worded as Steven approved:
  - **Brit milah (circumcision):** the eighth day and the sign of the covenant with Abraham, citing Genesis 17:10–12 and Lecture 2, slide T.
  - **Naming:** girls, and boys at the brit, receive a Hebrew name; practices differ by family and movement.

  To stay within the density limits, the "Rituals" bullet was trimmed to "tie personal milestones to Torah, family, and the Jewish people". The slide now has 5 bullets with no overflow.

  The notes now quote Genesis 17:10, 17:11 ("sign of the covenant") and 17:12 ("eight days old"), checked against the NRSV. A new naming note says girls' naming customs vary. The source line now quotes Genesis 17:10–12.
- **C.** Steven replaced `rel210-ch10-l3-section-scribe.webp` with a new AI image under the same filename. It shows an ancient robe, head wrap, reed pen, clay lamp and stone room, with no Star of David.
  - The alt text was rewritten from viewing the new image.
  - The Star of David note was removed.
  - The background note now says "pen" instead of "quill" and describes the imagined ancient setting.
  - The left-sky panel sits over the window and wall, and the scribe and scroll stay clear. At 960×700 the panel hides most of the hillside town.

## L3 slide B removed; images on L, M, O, Q (approved by Steven 2026-10-19)
**Slide B (Lecture Roadmap) removed.** ID B is retired and will never be reused. This is recorded in the deck's PERMANENT SLIDE IDS comment. The builder keeps the ID sequence with `next(d.gen)`, as in L1.
- **References:** nothing in L1, L2, L3, the supplements, or `index.html` pointed to L3 slide B, so no links needed fixing.
- **Notes:** B's learning-goal note ("Students should leave able to explain…") moved to A's notes. The roadmap now lives in the three section dividers: C, K, T.
- **L3 slide count:** 32 → 31.
- **Verbatim copy of the removed slide** (HTML as built before removal):

```html
<section data-slide-id="B">
  <p class="kicker">Lecture Roadmap</p>
  <h2>Three Ways Judaism Is Lived</h2>
  <div class="card-grid cols-3">
    <div class="card teal"><h3><span class="roman">I</span>Text as Conversation</h3>
      <p>How do written scripture and oral interpretation remain authoritative?</p></div>
    <div class="card purple"><h3><span class="roman">II</span>Holiness in Ordinary Life</h3>
      <p>How do mitzvot and halakhah turn daily choices into sacred practice?</p></div>
    <div class="card crimson"><h3><span class="roman">III</span>Community in Sacred Time</h3>
      <p>How do worship, festivals, food, and life-cycle rituals preserve identity?</p></div>
  </div>
  <aside class="notes">
    <h3>Understanding This Slide</h3>
    <p>Use the three phrases as advance organizers. The first section explains the textual tradition. The second focuses on commandments and daily discipline. The third shows how home and synagogue create communal rhythms.</p>
    <p>Students should leave able to explain why describing Judaism as only a belief system misses the tradition’s emphasis on practice, interpretation, memory, and peoplehood.</p>
  </aside>
</section>
```

**Images added: L, M, O, Q.** All four are AI-generated WebP files supplied by Steven, 1152×864. Each is set in the deck's split layout. The alt text was written from viewing each image, every caption says "AI-generated", and each slide's notes explain its image.
- **L (Mitzvot):** `rel210-ch10-l3-mitzvot-everyday.webp`. The image shows a tzedakah box, Shabbat candles, a covered challah, an open book, and a folded tallit.
  - To make room, the bullets were lightly trimmed: "enumerates" became "counts", and "commandments address" and "Jewish communities" were shortened. The old wording is kept in the notes.
  - **Flag:** the embroidered cloth on the back wall has a gold cross-like ornament. The alt text does not name it.
- **M (Halakhah):** `rel210-ch10-l3-halakhah-path.webp`. The three cards were restacked into one compact column beside the image, with no wording changes.
- **O (Sacred & Ordinary):** `rel210-ch10-l3-prayer.webp`, a companion to M.
- **Q (Kashrut):** `rel210-ch10-l3-deli.webp`.
  - The caption reads "a Jewish-style deli sandwich (not necessarily kosher)".
  - The notes say deli food is an Ashkenazi-American culinary tradition and that not every "Jewish-style" deli is kosher. They also say a kosher deli would not serve cheese with meat. Nothing claims the pictured deli is kosher.
  - The bullets use the tight list style; their wording is unchanged.
- **Automatic audit:** `tools/audit.py`, `exact.py`, and `write_audit.py` were re-run; the earlier JSON files are backed up as `*.pre_l3B.json`. `write_audit.py` now lists L3 old slide 2 as removed (ID B retired).

## L3 images on V and W (approved by Steven 2026-10-19)
Both images are AI-generated WebP files supplied by Steven, 1152×864. They use the split layout of L, M and O. The alt text was written from viewing each image, each caption says "AI-generated", and each slide's notes now explain its image. The slide count is unchanged at 31.
- **V (Who Leads, Who Counts):** `rel210-ch10-l3-cantor.webp`, a cantor (hazzan) at the lectern with the congregation behind him. The bullet wording is unchanged.
  - The notes say that the congregation shown is all men, as in Orthodox practice, and that many non-Orthodox congregations have women cantors and count women in the minyan.
- **W (Shabbat):** `rel210-ch10-l3-shabbat-candles.webp`. This is the second version of the image: Steven replaced the first one, which showed hands over the candles. It shows two lit candles, a silver kiddush cup, and a challah under an embroidered cover, with a dusk window. There are no people in it.
  - The caption reads "AI-generated image: Shabbat candles, kiddush cup, and challah at dusk".
  - The Dignity bullet was trimmed lightly to "household, workers, strangers, and animals all rest". The old wording ("household members, workers, strangers, and animals share the cessation") is kept in the notes.
  - The list uses the tight style.

## L3 image on AB (approved by Steven 2026-10-19)
- **Image:** `rel210-ch10-l3-brit-milah.webp`, an AI-generated WebP supplied by Steven (1152×864), non-graphic. It is placed in the split layout with a 1.32fr/0.68fr ratio, so the five bullets wrap less. The alt text was written from viewing the image. The caption reads "AI-generated image: family gathered for a brit milah". The slide count is unchanged at 31.
- **Notes:** a new line explains the image.
  - **Sandek:** the person honored with holding the baby on his lap during the circumcision, often a grandfather, who stays seated.
  - **Cup of wine:** the blessing "who creates the fruit of the vine", the naming that follows, and the custom of a drop of wine for the baby.
  - **Checked 2026-10-19 against:** Shulchan Arukh YD 265:1 with the Rema (Sefaria Community Translation), My Jewish Learning, and the ReformJudaism.org glossary entry "Sandek". These sources were added to the slide's sources.
- **Light trims** (the old wording is kept in the notes):
  - Synagogue bullet: "called up to the Torah to recite the blessing… leads part of the service" became "called to the Torah for the blessing… leads prayers".
  - Rituals bullet: "personal milestones" became "milestones".
  - The Brit milah and Naming bullets keep the wording Steven approved earlier.

## L3 slide AB: brit milah image replaced (approved by Steven 2026-10-19)
- **Image:** Steven approved a new version of `rel210-ch10-l3-brit-milah.webp` (same filename) in which the baby's face is visible. It overwrote the earlier version.
- **Alt text:** rewritten from viewing the new image: an elderly sandek in a striped tallit holds the swaddled newborn, face visible, on a pillow; a man beside him raises a silver kiddush cup; smiling relatives and lit candles surround them.
- **Caption:** unchanged, "AI-generated image: family gathered for a brit milah".
- **Notes and bullets:** unchanged. The notes already describe the sandek and the cup of wine, and they still match the new image.
- **Tests:** the overflow tests were re-run at 960×700, 1280×720 and 1920×1080 and passed. The keyboard and Esc check also passed.
- **Screenshot:** retaken as `62_L3-AB.png`.

## L1 Section I: fuller Abrahamic covenant (Steven's request, 2026-10-22)
Requested by Steven: a fuller discussion of the Abrahamic covenant after the Section I divider (C), using his original PowerPoint bullets (Covenant People / Chosen People; Abrahamic Covenant; Patriarchal Order). This pass changed Lecture 1 only. L2, L3, the supplements and `index.html` are untouched.

- **Backups (made first):** `backups/ch10-judaism/rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora_revFA26_pre-covenant-slides_20261022-121914.html` (SHA-256 da62d9aa4d52…, identical to the deck before this pass) and `backups/ch10-judaism/ch10_conversion_audit_pre-covenant-slides_20261022-121914.md`.
- **What already existed (merged, not duplicated):** H (Covenant People), I (The Covenant Promise, Gen 17:7) and J (Patriarchal Order: covenant passed father to son, firstborn/primogeniture popup, Jacob's twelve sons as the twelve tribes) followed by AG–AH (Story of Joseph). Steven's **Patriarchal Order** bullets are therefore already covered and were **not added**.
- **Slide order now:** C D F G **H AJ AK AL I** J AG AH K. The new slides follow H rather than sitting directly after C, because D (names), F (creation) and G (flood) come before Abram in the story; putting covenant slides before creation would break the narrative.
- **H, retitled "Covenant People, Chosen People"** (merged with Steven's Covenant People / Chosen People bullets):
  - Bullets: "The history of Judaism begins with Abram (later Abraham) in Genesis 12—though historians still debate when and where he lived" · "God chose Abram and his descendants to establish His covenant (Genesis 17:7), so Jews are known as the 'Chosen People'" · "'People' matters: Judaism is both a religion and an ethnicity".
  - Card: "Literally, a contract. In the Bible, an agreement between God and his people: a two-way promise of lasting loyalty, sealed by an oath or a sign." The card text before this pass ("Like a contract … sealed by an oath or a sign", reworded earlier per Steven) is preserved in H's notes.
  - Old bullets replaced (preserved here verbatim): "Jewish tradition traces its story to Abram (later Abraham)" · "God *chose* Abram (and his descendants) to establish His covenant" · "The covenant promise is spelled out in Genesis 17:7 (next slide)".
  - Popups: `l1-gen17-7` kept unchanged (trigger moved into bullet 2); **new** `l1-deut10-15` (Deut 10:15, NRSV) on "Chosen People".
  - Notes rewritten in the deck format: Genesis 12 narrowing; the Hebrew Bible as the record of God's dealings with His covenant people; covenant as a two-way promise; chosenness (call to holiness, based on God's love, sustained Jews through a long history; not superiority; Lecture 2 V–W develops it); "people" as religion and ethnicity; date/place hedge. The old notes paragraph "Genesis 12 and 17 shift the narrative…" kept and extended; its "next slide … Genesis 17:7" sentence replaced by a pointer to AJ–AL and I.
  - Image unchanged (Abraham portrait).
- **AJ (new), "Abrahamic Covenant: The Call"** (kicker Genesis 12, 15 & 17). Image+text layout (`split` 1.1fr/0.9fr, `ul.tight`):
  - "The journey: God tells Abram, 'Go from your country… to the land that I will show you' (Gen 12:1)"
  - "Cut the covenant: Abram cuts animals 'in two, laying each half over against the other' (Gen 15:10)"
  - "The call: in a theophany, 'the LORD appeared to Abram': 'I will make my covenant between me and you' (Gen 17:1–2)"
  - Popups: `l1-cut` (*karat*; Jer 34:18) and `l1-theophany` ("A visible manifestation of God to humankind", Steven's definition).
  - Image **reused**: `images/rel210-ch10-l2-covenant-between-pieces.webp` (L2 T), same alt text, caption "AI-generated illustration: the covenant 'between the pieces' (Genesis 15)". Notes repeat L2's simplification caveat (single row vs. facing rows).
  - Notes: 2-minute story script (Gen 12:1–4, 15:9–18), the self-curse meaning of the ceremony (marked as a paraphrase, not quoted), the theophany at ninety-nine, sources.
- **AK (new), "Abrahamic Covenant: Terms & Token"** (kicker Genesis 17:1–12). Four cards (`card-grid cols-2`, L2 U pattern): Abraham's Part (worship, believe, obey; "walk before me, and be blameless"); God's Part ("I will be their God"); A New Name ("your name shall be Abraham", marks his new status); The Token (circumcision at eight days, "a sign of the covenant between me and you"). Citation "All quotations: NRSV"; takeaway "A two-way promise, with a sign carried into every generation." Notes: story script, Sarah's renaming (17:15–16, 17:19), brit milah pointer to Lecture 3, KJV "be thou perfect" as older wording. No image (flag below).
- **AL (new), "Abrahamic Covenant: Blessings"** (kicker Genesis 12, 15 & 17). Four cards: Posterity (17:4; 17:6), Land (17:8), Protection (15:1), All Families of the Earth (12:3). Takeaway "The blessing begins with one family but reaches all the families of the earth." Notes: story script tied to C's star image (Gen 15:5), links back to F/G and forward to J and Section II; Steven's "father of a multitude" → NRSV "ancestor of a multitude".
- **I, "The Covenant Promise": moved** from after H to after AL (directly before J). Slide text unchanged. Notes: one placement paragraph added; source line now also says "re-checked 2026-10-22 against bible.oremus.org (NRSV), wording unchanged".
- **Scripture check:** every NRSV quotation on H, AJ, AK, AL and I (slides, popups and notes) was checked 2026-10-22 against bible.oremus.org (version NRSV): Gen 12:1–4; 15:1–18; 17:1–19; Deut 7:6–8; 10:14–16; Jer 34:18–19. A script confirmed every quoted fragment is a verbatim substring of the oremus text. LORD is set in small caps (same markup as L2 V). KJV wording (Gen 17:1, 17:4–5) appears only in notes, labeled as older wording, checked on biblegateway.com.
- **PERMANENT SLIDE IDS comment** updated (H retitled; AJ, AK, AL added; I moved). AJ is the next unused L1 ID after AI; L1 never used AJ–AL (B, E, AF stay retired). AJ–AL also exist in L2, but IDs are per deck, as with every other shared letter.
- **No new CSS.** All markup copies existing classes (`split`, `split-text`, `fig`, `img-caption`, `kicker`, `long-title`, `card-grid cols-2`, `card teal/purple/gold/crimson`, `citation`, `takeaway`, `popup`, `popup-trigger`).
- **Cross-references:** no pause, Look-back, "Taught on" note or other deck points to L1 H or I by position. K still looks back to D only. `index.html` has no L1 slide count and was not changed.
- **Spoken-time flag:** the three new slides add roughly 5–6 minutes to Section I.
- **Overlap flag:** L2 S–W (Covenant People; Abrahamic Covenant: Making the Covenant; Blessings; Chosen People; What Chosenness Means) already teaches much of this from the same PowerPoint bullets. L1 now tells it as story; L2 still treats it as theology. Steven may want to shorten L2 T–U into a recap later (not done; L2 untouched).
- **Image flag:** AK and AL have no image. A scene of Abraham and Sarah receiving their new names (AK) or of Abram under the stars (AL; C already uses the star image) would help. No images were generated.
- **Tests (2026-10-22):** L1 at 960×700, 1280×720 and 1920×1080, all 35 slides: no overflow (tallest new slide H, 511 of 700 px), no JS errors, no broken images or HTTP errors (only the local test server's favicon 404), ID labels correct. Keyboard: → / ← walk H → AJ → AK → AL → I → J and back; Tab reaches the popup triggers on H and AJ; Enter and Space open each popup with focus on ×; Esc closes the popup only (no overview) and returns focus to the trigger; with no popup open, Esc toggles the overview. Smallest on-slide text at 1280×720 is the existing caption/kicker style (11.1 px / 13.7 px); body text is at least 16 px.
- **Not committed or pushed.**

## Removed (with reason)
- **L3 B, "Lecture Roadmap: Three Ways Judaism Is Lived"** (2026-10-19, at Steven's request): the section dividers carry the roadmap; ID retired. Learning-goal note moved to A. Verbatim copy in the "L3 slide B removed" section above.
- **L2 G, "What the Name Teaches"** (2026-10-19 L2 revision pass): merged into F; ID retired. Verbatim copy in the L2 revision section above.
- **Fragments** (all decks): not used in the house style.
- **`assets/original-media/image1.jpeg`** (gray texture background on every old slide): decorative template background; the house style uses the charcoal theme. The file is untouched and still used by the supplements via `deck.css`.
- **L2 video thumbnail** (`assets/video/four-hells-thumbnail.jpg`): replaced by the live embed. The file is untouched.
- **L1 SmartArt PNG**: replaced by an equivalent HTML flow (same labels). The file is untouched.
- **L2 image7 (parchment scroll) on old slides 4, 6, 23**: was decoration. It is now a CSS background on two scroll-style quote cards (V, AD) and N in L3. Converted copy: `images/rel210-ch10-parchment-scroll-frame.webp`.
- **No teaching text, note, quote, link, or video was removed** apart from the corrections listed above.

## Quotes and citations: before → after
All Bible quotations in L1–L3 are now the 1989 NRSV, verbatim, labeled "(NRSV)" (per Steven). Checked 2026-10-19 against biblestudytools.com (NRS = 1989 NRSV) and bible.oremus.org (NRSV, ©1989); BibleGateway's "NRSV" now serves the NRSVUE, so it was not used. LORD is set in small caps as printed. Rabbinic texts keep their Sefaria translations (Silverstein Sifra, Sefaria Community Rashi/Ramban, Midrash Rabbah 2022, Kulp Mishnah). "Before" is the original deck; "(draft: …)" marks the translation used in the first conversion pass.

| Deck/ID | Before | After |
|---|---|---|
| L1 H/I | "Genesis 17:7" (reference only); earlier draft quoted KJV; re-checked 2026-10-22 against bible.oremus.org, unchanged | "I will establish my covenant between me and you, and your offspring after you throughout their generations, for an everlasting covenant, to be God to you and to your offspring after you." Genesis 17:7 (NRSV) |
| L1 H (2026-10-22) | Steven's PPT: Deut 10:15 (NASB 1995 wording, uncited) | Popup: "…yet the LORD set his heart in love on your ancestors alone and chose you, their descendants after them, out of all the peoples, as it is today." Deuteronomy 10:15 (NRSV); notes also quote Deut 7:7–8, Gen 15:7, Gen 12:4 (NRSV) |
| L1 AJ (2026-10-22) | Steven's PPT: "The Call (Gen 17:1–2)"; "Cut the Covenant (Gen 15:9–10; Jer 34:18)" (references only) | "Go from your country… to the land that I will show you" (Gen 12:1); "in two, laying each half over against the other" (Gen 15:10); "the LORD appeared to Abram"; "I will make my covenant between me and you" (Gen 17:1–2); popup: "like the calf when they cut it in two and passed between its parts" (Jer 34:18). All NRSV |
| L1 AK (2026-10-22) | Steven's PPT: "Terms (Gen 17:1–8) … be perfect/blameless"; "Token (Gen 17:11–12)" | "walk before me, and be blameless" (17:1); "I will be their God" (17:8); "your name shall be Abraham" (17:5); "a sign of the covenant between me and you" (17:11–12). All NRSV. KJV "be thou perfect" cited in notes only, as older wording |
| L1 AL (2026-10-22) | Steven's PPT: "father of a multitude of nations," "exceedingly fruitful," "the land where you are now an alien," "I am your shield," all families blessed (Gen 12:3) | "the ancestor of a multitude of nations" (17:4); "exceedingly fruitful" (17:6); "the land where you are now an alien" (17:8); "I am your shield" (15:1); "in you all the families of the earth shall be blessed" (12:3). All NRSV; KJV "a father of many nations" noted as older wording |
| L1 H, L2 S | Covenant box: "Literally, a contract. In the Bible, an agreement between God and his people; two-way promise" | "Covenant (Hebrew *berit*): Like a contract, it binds two parties with promises. Unlike a contract, it is an ongoing relationship of mutual loyalty between unequal partners—God and Israel—sealed by an oath or a sign." (not a quotation; reworded per Steven) |
| L2 D | "Hear, O Israel: The Lord our God, the Lord is One" (uncited); "Hear O Isreal" (draft: JPS 1917) | "Hear, O Israel: The LORD is our God, the LORD alone." Deuteronomy 6:4 (NRSV); NRSV footnote alternatives in notes |
| L2 E | Deut 6:4 "Hear, O Israel: YHWH is our God, YHWH is one" | Same words, labeled "a literal rendering, not a published translation" (unchanged) |
| L2 F | (none) (draft: NJPS "Ehyeh-Asher-Ehyeh."; KJV "I AM THAT I AM.") | "God said to Moses, 'I AM WHO I AM.'" Exodus 3:14 (NRSV) + "Hebrew: *Ehyeh asher ehyeh* (transliteration)" |
| L2 L | "God created the Heavens and the Earth" (Genesis 1:1) (draft: KJV) | "In the beginning when God created the heavens and the earth, …" Genesis 1:1 (NRSV) |
| L2 L | Psalms 102:25-27 | Psalm 102:25–27 (102:26–28 in Jewish Bibles); notes quote NRSV 102:27 "but you are the same, and your years have no end." |
| L2 M | Psalms 96:4-5 (reference only) (draft: JPS 1917) | "For all the gods of the peoples are idols, but the LORD made the heavens." Psalm 96:5 (NRSV) |
| L2 P, X; L3 N | "Be ye therefore Holy, even as I am holy" (Lev. 19:2); L3 uncited (draft: NJPS) | "You shall be holy, for I the LORD your God am holy." Leviticus 19:2 (NRSV) |
| L2 S | "Genesis 17: 7" | Genesis 17:7 + NRSV text in popup |
| L2 T | Gen 17:1-2, Gen 15, Jer 34:18 (references; draft: KJV/NJPS popups) | Popups: "the LORD appeared to Abram" (Gen 17:1); "a smoking fire pot and a flaming torch passed between these pieces" (Gen 15:17); "the calf when they cut it in two and passed between its parts" (Jer 34:18), all NRSV |
| L2 U | "Father of Many Nations;" "Exceedingly Fruitful" | "the ancestor of a multitude of nations" (Gen 17:4); "exceedingly fruitful" (Gen 17:6), NRSV |
| L2 U | "I will give unto thee the land wherein thou art a stranger" | "I will give to you, and to your offspring after you, the land where you are now an alien" (Gen 17:8, NRSV) |
| L2 U | "I am a shield to you" | "I am your shield" (Gen 15:1, NRSV) |
| L2 U | "in you and in your descendants shall all the families of the earth be blessed" (= NASB Gen 28:14, to Jacob) | "in you all the families of the earth shall be blessed" (Gen 12:3, NRSV, to Abraham); card citation "All quotations: NRSV" |
| L2 V | Deut 10:15 "Yet on your fathers did the Lord set His affection to love them…" (NASB 1995) | "…yet the LORD set his heart in love on your ancestors alone and chose you, their descendants after them, out of all the peoples, as it is today." Deuteronomy 10:15 (NRSV) |
| L2 W | Amos 3:2 (notes, reference only) (draft: KJV) | Popup: "You only have I known of all the families of the earth; therefore I will punish you for all your iniquities." (NRSV) |
| L2 X | Heading "Be ye therefore Holy…" | NRSV Lev 19:2 + Sifra Kedoshim 1:1 (Abba Shaul): "What is the duty of the King's retinue? To follow in the footsteps of the King." (trans. Silverstein; bracketed gloss omitted) — rabbinic translation unchanged |
| L2 Y | Rashi "abstaining from sexual immorality and idolatry" | Rashi on Lev 19:2: "Be separated from the inappropriate sexual relationships and from sin." (Sefaria Community Translation) — unchanged |
| L2 Z | Nahmanides "ethical and moral behavior that transcends legalistic adherence" | Paraphrase plus "a scoundrel with the permission of the Torah" (Sefaria Community Translation) — unchanged; notes quote Deut 6:18 NRSV "Do what is right and good in the sight of the LORD" |
| L2 AA | Midrash "'You shall be holy' is a comprehensive commandment…" | Sifra Kedoshim 1:1 (Silverstein) + R. Levi (Lev. Rabbah 24:5) — unchanged |
| L2 AD | "And God spake all these words, saying, I am the Lord thy God…" (KJV, uncited) | "Then God spoke all these words: I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery; …" Exodus 20:1–2 (NRSV) |
| L2 AD (notes) | "I am the LORD your God, who brought you out of Egypt." (paraphrase in quote marks) | NRSV Exod 20:2 verbatim |
| L2 AF | "Thou shalt not take the name of the Lord thy God in vain…" (KJV, uncited) | "You shall not make wrongful use of the name of the LORD your God, for the LORD will not acquit anyone who misuses his name." Exodus 20:7 (NRSV) |
| L2 AF | Hebrew original, "do not carry the name of the Lord thy God in Vain" or "do not misuse…" | Labeled as a literal gloss of *lo tissa* ("do not carry"/"do not lift up"); "the older English phrase is 'in vain'" |
| L2 AF | "God will not forgive violation of this commandment" | "The verse warns that God 'will not acquit anyone who misuses his name'" (NRSV) |
| L2 AK | "government upon his shoulder"; "upon the throne of David" (Isaiah 9:6-7) | "authority rests upon his shoulders"; "endless peace for the throne of David and his kingdom" (Isa 9:6–7 NRSV; 9:5–6 in Jewish Bibles) |
| L2 AN | Daniel 12 (reference only) (draft: NJPS) | "Many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt." Daniel 12:2 (NRSV) |
| L3 L | 613 = 248 + 365 (uncited) | Cited b. Makkot 23b (R. Simlai) in notes |
| L3 Q | (none) | Popup: "You shall not boil a kid in its mother's milk" (Exod 23:19, NRSV — identical wording) |
| L3 Z | "Each generation is to see itself as personally leaving Egypt." | Kept; notes mark it as a paraphrase of m. Pesachim 10:5 |
| L3 AA | (new) | m. Pesachim 10:5 (trans. Kulp, unchanged) + Exod 13:8 NRSV "It is because of what the LORD did for me when I came out of Egypt" (full verse in notes) |
| L3 AC | (new popup) | Kaddish opening "Yitgadal v'yitkadash sh'mei raba", glossed "Magnified and sanctified be His great name" (common liturgical rendering) |

## Images
- **Converted to WebP** (originals untouched in `assets/original-media/`). The table is Original → New — Size (old → new) — Used on.

| Original | New | Size (old → new) | Used on |
|---|---|---|---|
| image6.png (960×1200) | images/rel210-ch10-abraham-portrait.webp | 1,830,917 → 120,818 B | L1 H, L2 S |
| image16.png (1792×1024) | images/rel210-ch10-moses-burning-bush.webp (1600 wide) | 3,828,170 → 280,762 B | L2 F |
| image7.png (11759×13672) | images/rel210-ch10-parchment-scroll-frame.webp (900 wide) | 4,102,932 → 28,854 B | CSS background, scroll quotes |
| image10.gif (map) | images/rel210-ch10-map-israel-judah-733bce.webp (lossless) | 13,798 → 7,574 B | L1 P |
| image11.jpeg (map) | images/rel210-ch10-map-assyrian-empire.webp (q85) | 33,134 → 26,470 B | L1 Q |
- The last two maps were under the 300 KB threshold; they were converted only so the naming convention is consistent.
- **Alt text** was written after viewing each image.
- **AI-generated illustrations (19, new, 1280×720 WebP).** Each was viewed in place on its slide; alt text was written to match what the image actually shows. Title slides use the image as a full-bleed background behind a darkened, blurred text panel (rgba(14,14,14,.74) + 3px backdrop blur) for legibility.

| Deck/ID | File (images/) | Size | Alt text |
|---|---|---|---|
| L1 A | rel210-ch10-l1-title-jerusalem-dawn.webp | 123,370 B | AI-generated painting of an ancient walled city crowded onto a hilltop at golden sunrise, with misty hills behind and a small camel caravan climbing a dirt road toward it. |
| L1 C | rel210-ch10-l1-section1-abraham-stars.webp | 106,126 B (1280×720) | AI-generated painting of a robed figure, seen from behind, standing on a rocky hilltop beside dark goat-hair tents under a night sky crowded with stars, with the Milky Way and faint streaks of starlight above a wide, shadowed valley. (Supplied by Steven 2026-10-19; full-bleed background with the title-slide panel, alt text in screen-reader text as on A.) |
| L1 AG | rel210-ch10-l1-joseph-robe.webp | 184,058 B | AI-generated painting of a teenage boy with dark curly hair in an ankle-length, long-sleeved robe striped crimson, saffron, indigo, and green, standing in a golden-hour hillside pasture among grazing sheep while five bearded men in plain brown robes watch from behind. (Supplied by Steven 2026-10-19.) |
| L1 L | rel210-ch10-l1-section2-exodus-pillar.webp | 114,118 B | AI-generated painting of a long line of travelers with donkeys and bundles, seen from behind, walking across a dark desert plain toward distant mountains, led by a tall, glowing pillar of fire under a starry indigo sky, with the lights of a city on the far left horizon. (Supplied by Steven 2026-10-19; background with title-slide panel.) |
| L1 S | rel210-ch10-l1-second-temple.webp | 210,136 B | AI-generated painting of Jerusalem’s Temple Mount as rebuilt by Herod: a tall, boxy white sanctuary with a gold doorway rises above inner courts on a huge platform with massive stone walls and colonnaded porticoes; smoke rises from the altar, crowds climb a monumental stairway, and a stone fortress stands at the left corner, with the city and hills around. (Supplied by Steven 2026-10-19. Caption: AI-generated imagining of the Second Temple as later expanded by Herod; not an archaeological reconstruction.) |
| L1 U | rel210-ch10-l1-section3-portable-torah.webp | 135,160 B | AI-generated painting of a hillside at night: several robed figures, seen from behind, walk away along diverging roads, one of them in the foreground carrying a softly glowing scroll, while a distant walled city on the right glows with fires among ruins, under a starry indigo sky. (Supplied by Steven 2026-10-19; background with title-slide panel. Also used in the Roman Judea deck, V.) |
| L1 AI | rel210-ch10-l1-maccabean-revolt.webp | 208,932 B | AI-generated painting of Jewish fighters in tunics and head cloths charging down rocky slopes at a Seleucid column of soldiers with round shields and long pikes in a narrow pass, with a war elephant carrying a tower behind them. (Supplied by Steven 2026-10-19. Caption: AI-generated imagining of the Maccabean revolt; not a specific battle. Also the Roman Judea Trail I background.) |
| L1 W | rel210-ch10-l1-herod-client-king.webp | 174,992 B | AI-generated painting of a bearded king in purple and gold robes with a white diadem, seated on a throne, as a Roman officer in armor and a red cloak presents him a scroll with a red wax seal; through the colonnade behind them, a temple complex stands under scaffolding. (Supplied by Steven 2026-10-19. Caption: AI-generated imagining of Herod as Rome's client king. Also used in the Roman Judea deck, G.) |
| L1 F | rel210-ch10-l1-creation-light-over-waters.webp | 122,996 B | AI-generated painting of golden light breaking through swirling clouds over a dark, wide sea, with the sun on the horizon. |
| L1 G | rel210-ch10-l1-noah-ark-rainbow.webp | 142,752 B | AI-generated painting of a large wooden ark resting on a rocky hilltop under a rainbow, with elephants, giraffes, and sheep coming out and a man, a woman, and two children watching nearby. |
| L1 M | rel210-ch10-l1-exodus-sea-crossing.webp | 190,660 B | AI-generated painting of a crowd of ancient families with children and sheep walking on a wet seabed between towering walls of green water toward the sunrise, led by a man with a staff seen from behind. |
| L1 O | rel210-ch10-l1-first-temple-reconstruction.webp | 187,786 B | AI-generated reconstruction of a tall stone sanctuary with two large pillars at its entrance, an altar sending up smoke, and a huge bronze basin resting on bronze oxen in a paved courtyard, with priests in white robes and worshippers; an artist’s imagining of Solomon’s Temple. |
| L1 R | rel210-ch10-l1-babylonian-exile-rivers.webp | 174,710 B | AI-generated painting of exiled families in robes sitting sorrowfully on a riverbank under a willow tree with small harps hanging from its branches, while the city walls and stepped tower of Babylon glow in the sunset across the water. |
| L1 X | rel210-ch10-l1-second-temple-destruction-70ce.webp | 126,162 B | AI-generated night painting of Jerusalem in flames: a tall, boxy white temple stands on a vast walled, colonnaded platform above the burning city, with smoke rising, while torch-lit Roman tents and wooden siege towers fill the dark valley in the foreground. |
| L1 AB | rel210-ch10-l1-early-rabbis-study.webp | 146,424 B | AI-generated painting of elderly bearded sages in robes and turbans debating with open hands around a low table spread with scrolls and small oil lamps in a stone room, while younger students write on tablets. |
| L2 A | rel210-ch10-l2-title-sinai-dawn.webp | 141,258 B | AI-generated painting of a rugged desert mountain under storm clouds pierced by shafts of golden light, with a wide encampment of dark tents and people on the plain at its foot. |
| L2 D | rel210-ch10-l2-mezuzah-doorpost.webp | 65,748 B | AI-generated photo of a hand reaching to touch a slender brass mezuzah case fixed at a slant to a wooden doorpost, with a sunny garden blurred in the background. |
| L2 N | rel210-ch10-l2-prayer-at-dawn.webp | 74,146 B | AI-generated photo of an elderly white-bearded man wrapped in a white prayer shawl with black stripes, eyes lowered to an open prayer book in his hands, beside a window at sunrise. |
| L2 AC | rel210-ch10-l2-stone-tablets-sinai.webp | 136,928 B | AI-generated painting of two blank, round-topped stone tablets standing side by side on a rock ledge in a desert mountain valley, lit by rays of the rising sun. |
| L2 AH | rel210-ch10-l2-prophet-at-city-gate.webp | 200,488 B | AI-generated painting of a bearded prophet in a rough cloak with a staff, arm raised, speaking at a stone city gate; richly dressed men stand stern-faced beside a set of merchant’s scales, while poor listeners and a mother holding a baby look up at him. |
| L3 A | rel210-ch10-l3-title-torah-scroll-yad.webp | 58,636 B | AI-generated close-up photo of an open Torah scroll on wooden rollers, with columns of handwritten Hebrew text and a silver pointer (yad) resting on the parchment, against a dark background. |
| L3 I | rel210-ch10-l3-havruta-study.webp | 64,788 B | AI-generated photo of two young men in kippot sitting across from each other at a wooden table covered with open and stacked books, one gesturing as he makes a point while the other listens, in a study hall lined with bookshelves. |
| L3 U | rel210-ch10-l3-synagogue-ark-bimah.webp | 78,614 B | AI-generated photo of a synagogue sanctuary with an open wooden ark holding Torah scrolls in red and gold embroidered covers, a reading table draped in purple on a raised platform in front, wooden pews, and an eternal lamp hanging above. |
| L3 X | rel210-ch10-l3-shabbat-dinner-table.webp | 101,538 B | AI-generated photo of three generations of a family smiling around a Friday-night table with two lit candles in silver candlesticks, a silver kiddush cup, and a braided challah partly covered by an embroidered cloth. |
| L3 AA | rel210-ch10-l3-passover-seder-plate.webp | 150,438 B | AI-generated photo of a blue-patterned Passover seder plate holding a roasted shank bone, a roasted egg, green herbs, grated horseradish, and a mound of charoset, beside a stack of matzah, a glass of red wine, and an open illustrated Haggadah. |
| L3 AB | rel210-ch10-l3-wedding-chuppah.webp | 167,762 B | AI-generated photo of a smiling bride and groom beneath a white fabric wedding canopy on wooden poles wrapped in white flowers and greenery in a garden; the groom and the officiant, who holds an open book, both wear kippot and prayer shawls. |
