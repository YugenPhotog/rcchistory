# Ch10 Judaism lecture conversion: content-loss audit

Prepared 2026-10-19 for Steven Austin. Covers REL 210 Ch10 Lectures 1-3 only (the supplements were not edited).

## Method

- Old decks: archived originals (`backups/ch10-judaism/`, identical to `C:\Users\stvas\ch10work\pre-edit-originals\`). New decks: the rebuilt files with the same filenames.
- Each old slide was extracted with BeautifulSoup into text units: every leaf text block on the slide, plus every speaker-note paragraph. Images, iframes, and links were listed separately.
- **Check 1 (verbatim):** each old unit, normalized (lowercase, punctuation stripped), was searched as a contiguous string in the text, notes, and popups of the new slide(s) it maps to.
- **Check 2 (word coverage):** for each unit, the share of its words (3+ letters) found in the mapped new slide(s). Anything under 90% was flagged.
- Every non-verbatim unit is accounted for below. Each one is either an intentional correction (quote, citation, or typo) or a light rewording made when a slide was split.

## Result

- **Lecture 1** (`rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora_revFA26.html`, formerly `rel210-ch10-lecture1-judaism-origins-exodus-temple-diaspora.html`): 28 old slides → 31 new slides. 20 old text units are not verbatim in the new deck; 18 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- **Lecture 2** (`rel210-ch10-lecture2-judaism-god-covenant-holiness-hope_revFA26.html`, formerly `rel210-ch10-lecture2-judaism-god-covenant-holiness-hope.html`): 31 old slides → 44 new slides. 58 old text units are not verbatim in the new deck; 30 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- **Lecture 3** (`rel210-ch10-lecture3-judaism-text-worship-sacred-practice_revFA26.html`, formerly `rel210-ch10-lecture3-judaism-text-worship-sacred-practice.html`): 27 old slides → 30 new slides. 20 old text units are not verbatim in the new deck; 16 are below 90% word coverage. All are listed in the intentional-changes section. **No unexplained content loss.**
- Old slide-ID/number cross-references in notes: one stale reference in L3 notes ("slides 55-57") was changed to "the previous slide".

## Lecture 1: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism I Origins Exodus Temple and Diaspora | A | Origins, Exodus, Temple & Diaspora | 100% |
| 2 | Lecture Roadmap | B | Three Historical Turning Points | 100% |
| 3 | Section I Ancestral Memory & Covenant | C | Section I: Ancestral Memory & Covenant | 100% |
| 4 | Names across Jewish History | D | Names across Jewish History | 99% |
| 5 | History, Memory & Sacred Story | E | History, Memory & Sacred Story | 100% |
| 6 | Creation: A World of Order & Responsibility | F | Creation: A World of Order & Responsibility | 100% |
| 7 | The Great Flood: Divine Judgment and Mercy | G | The Great Flood: Divine Judgment and Mercy | 100% |
| 8 | Covenant People | H, I | Covenant People; The Covenant Promise | 92% |
| 9 | Patriarchal Order | J | Patriarchal Order | 97% |
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
| 21 | Hellenism, Revolt & Hanukkah | V | Hellenism, Revolt & Hanukkah | 95% |
| 22 | Roman Rule & Rising Tension | W | Roman Rule & Rising Tension | 100% |
| 23 | Revolt & the Destruction of the Temple | X | Revolt & the Destruction of the Temple | 98% |
| 24 | Understanding Diaspora | Y, Z | Understanding Diaspora; Four Features of a Diaspora | 100% |
| 25 | Diaspora: Dispersion without Disappearance | AA | Diaspora: Dispersion without Disappearance | 100% |
| 26 | From Temple to Torah: Rabbinic Judaism | AB | From Temple to Torah: Rabbinic Judaism | 100% |
| 27 | Antisemitism: A Historical Pattern | AC | Antisemitism: A Historical Pattern | 100% |
| 28 | Pause and Synthesize | AD | Pause & Reflect | 60% |
| (new) | (none) | AE | Beyond the Lecture: Modern Jewish Worlds | n/a |

**Full ID list (L1):** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE

## Lecture 2: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism II God Covenant Holiness and Hope | A | God, Covenant, Holiness & Hope | 100% |
| 2 | Lecture Roadmap | B | Three Questions | 100% |
| 3 | Section I One God & Ethical Monotheism | C | Section I: One God & Ethical Monotheism | 100% |
| 4 | Teachings of Judaism – One God | D, E | One God: The Shema; The Divine Name: YHWH | 96% |
| 5 | Teachings of Judaism – One God | E, F, G | The Divine Name: YHWH; Why the Cryptic Name?; What the Name Teaches | 100% |
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
| 18 | Chosen People | V, W | Chosen People; What Chosenness Means | 96% |
| 19 | Be ye therefore Holy, even as I am holy | X, Y, Z, AA, AB | You Shall Be Holy: Imitatio Dei; Rashi: Holiness as Separation; Nahmanides: Holiness beyond the Letter of the Law; Midrash: Why Leviticus 19 Was Said to Everyone; Holiness in Everyday Life | 97% |
| 20 | Be ye therefore Holy, even as I am holy | AB | Holiness in Everyday Life | 98% |
| 21 | The Ten Commandments | AC | The Ten Commandments: An Overview | 100% |
| 22 | The Ten Commandments | AD, AE | The Ten Commandments Begin with Freedom; Commandments for a Free Society | 95% |
| 23 | The Ten Commandments | AF, AG | Not Taking God’s Name in Vain; Evil in God’s Name | 95% |
| 24 | Ethical Monotheism and Social Justice | AH | Ethical Monotheism & Social Justice | 100% |
| 25 | Pause and Reflect | AI | Pause & Reflect | 35% |
| 26 | Section III Hope, the World to Come & Symbolism | AJ | Section III: Hope, the World to Come & Symbolism | 100% |
| 27 | Teachings of Judaism – Messiah | AK | Teachings of Judaism: Messiah | 96% |
| 28 | Four Biblical Hells | AL, AM | Four Biblical “Hells”; Video: The Bible’s Four Hells | 100% |
| 29 | Resurrection and the World to Come | AN, AO | Resurrection & the World to Come; The World to Come Today | 100% |
| 30 | Symbols of Jewish Identity | AP | Symbols of Jewish Identity | 100% |
| 31 | Pause and Synthesize | AQ | Pause & Reflect | 44% |
| (new) | (none) | AR | Two Impulses: Good & Evil | n/a |

**Full ID list (L2):** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AR AH AI AJ AK AL AM AN AO AP AQ

## Lecture 3: slide mapping (old slide number → new permanent ID)

| Old # | Old title / label | New ID(s) | New slide title(s) | Word coverage |
|---|---|---|---|---|
| 1 | Judaism III Text Worship and Sacred Practice | A | Text, Worship & Sacred Practice | 100% |
| 2 | Lecture Roadmap | B | Three Ways Judaism Is Lived | 100% |
| 3 | Section I Sacred Writings & Interpretation | C | Section I: Sacred Writings & Interpretation | 100% |
| 4 | Torah: More Than “Law” | D | Torah: More Than “Law” | 100% |
| 5 | The Tanakh: Three Collections | E | The Tanakh: Three Collections | 100% |
| 6 | Written Torah and Oral Torah | F | Written Torah & Oral Torah | 100% |
| 7 | Mishnah, Gemara & Talmud | G | Mishnah, Gemara & Talmud | 100% |
| 8 | Midrash: Reading between the Lines | H | Midrash: Reading between the Lines | 100% |
| 9 | Study Is a Religious Practice | I | Study Is a Religious Practice | 100% |
| 10 | Pause and Reflect | J | Pause & Reflect | 26% |
| 11 | Section II Law, Holiness & Everyday Practice | K | Section II: Law, Holiness & Everyday Practice | 100% |
| 12 | Mitzvot: Commandments as Covenant Practice | L | Mitzvot: Commandments as Covenant Practice | 100% |
| 13 | Halakhah: A Way of Walking | M | Halakhah: A Way of Walking | 100% |
| 14 | The Holiness Code: Sacred & Ordinary | N, O | The Holiness Code: “You Shall Be Holy”; The Holiness Code: Sacred & Ordinary | 100% |
| 15 | Temple Sacrifice & Its Transformation | P | Temple Sacrifice & Its Transformation | 100% |
| 16 | Kashrut Making Food Sacred | Q | Kashrut: Making Food Sacred | 100% |
| 17 | Texts Worn, Touched & Remembered | R | Texts Worn, Touched & Remembered | 100% |
| 18 | Pause and Reflect | S | Pause & Reflect | 26% |
| 19 | Section III Worship, Sacred Time & Life Cycle | T | Section III: Worship, Sacred Time & Life Cycle | 100% |
| 20 | Worship in the Synagogue | U, V | Worship in the Synagogue; Who Leads, Who Counts | 100% |
| 21 | Shabbat: The Meaning of Sacred Rest | W | Shabbat: The Meaning of Sacred Rest | 100% |
| 22 | Shabbat as Lived Practice | X | Shabbat as Lived Practice | 95% |
| 23 | The Sacred Year Major Festivals | Y | The Sacred Year: Major Festivals | 100% |
| 24 | Passover Seder: Memory Performed | Z, AA | Passover Seder: Memory Performed; As Though You Left Egypt | 100% |
| 25 | Life Cycle Covenant Community and Family | AB | Life Cycle: Covenant, Community & Family | 97% |
| 26 | Death Mourning and Memory | AC | Death, Mourning & Memory | 100% |
| 27 | Pause and Synthesize | AD | Pause & Reflect | 31% |

**Full ID list (L3):** A B C D E F G H I K L M N O P Q R S T U V W X J Y Z AA AB AC AD
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
- **Old 8 → H + I.** The Genesis 17:7 reference is now a quote slide (I) with the full NRSV text. The "Covenant: Literally, a contract. In the Bible, an agreement between God and his people; two-way promise" box was reworded per Steven: heading "Covenant (Hebrew *berit*)", text "Like a contract, it binds two parties with promises. Unlike a contract, it is an ongoing relationship of mutual loyalty between unequal partners—God and Israel—sealed by an oath or a sign." (same wording on L2 S). The notes already say covenant is "more than a commercial contract" and the I takeaway says "not a one-time deal", so they agree; the note phrase "thy seed after thee" became "your offspring after you" to match NRSV.
- **Old 9 → J.** The SmartArt image (Abraham → Isaac → Jacob (Israel)) is rebuilt as an HTML flow with the same three labels.
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
Requested by Steven. Pause slides now ask questions from the PHIL 210 Ch10 Reading Guide (source: `public/phil-210/reading_guides/PHIL210_Ch10_ReadingGuide.html` in this repo). The decks were also renamed (git mv) to `…_revFA26.html`, and `index.html` was updated.

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

## Removed (with reason)
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
| L1 H/I | "Genesis 17:7" (reference only); earlier draft quoted KJV | "I will establish my covenant between me and you, and your offspring after you throughout their generations, for an everlasting covenant, to be God to you and to your offspring after you." Genesis 17:7 (NRSV) |
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
