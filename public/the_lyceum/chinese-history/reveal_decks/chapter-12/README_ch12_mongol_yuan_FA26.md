# HIST 270 Chapter 12: China under Mongol Rule (1215–1368), FA26 Rebuild

Work done on 2026-10-19.

## Goal

Chapter 12 is not taught in the classroom. Students work through it independently, so the three lecture decks were rebuilt as student-facing **Study Buddy editions**:

- Each deck teaches the history behind each reading-guide review question first.
- A **Your Turn** slide then shows the exact question and has a button that opens the reading guide (`public/hist-270/reading_guides/HIST270_Ch12_ReadingGuide.html`).
- The Your Turn slides give no page numbers or opening-word hints. Finding the answer is part of the exercise, and some students use an ebook.
- Every "State your answer to Q# as a causal claim" prompt was removed.
- The plain "visual evidence" circle graphics were replaced with real historical images. A few AI images remain in Lecture 1, each labeled as AI. Every image opens full size when clicked.
- Bullets are complete sentences, because students read them without a lecturer.
- The presenter notes (press **S**) are Study Buddy explanations, and each ends with "Check yourself:".

## Current decks

| Deck | Slides | Review Qs | Images | Commit |
|---|---|---|---|---|
| `HIST270_ch12_lec1_mongol_conquest_state_building_revised_FA26.html` | 36 (A–AJ) | Q1–Q4 | `images/ch12-lec1/` (22 real, 11 AI) | `b02059d` |
| `HIST270_ch12_lec2_yuan_hierarchy_global_exchange_revFA26.html` | 24 (a–x) | Q5, Q8 | `images/ch12-lec2/` (all real) | `b02059d` |
| `HIST270_ch12_lec3_displaced_elites_yuan_collapse_revFA26.html` | 26 (a–z) | Q6, Q7, Q9, Q10, Q11 | `images/ch12-lec3/` (all real) | `b02059d` |

- Slide letters are permanent. Lecture 1 stores them as uppercase `data-slide-id` (next unused letter: AK, tracked in `ids.json`). Lectures 2 and 3 store them as lowercase `data-letter`. If a new slide is added, it gets the next unused letter.
- Lecture 1 replaced the earlier 28-slide `HIST270_ch12_lec1_mongol_conquest_state_building_revFA26.html` (a–bb). A local copy of that older deck sits in `archive/` and is not tracked.
- The landing page (`chinese-history/index.html`) links to all three FA26 decks.

## Background essays

Committed in `b02059d`. All four are in `public/hist-270/background_essays/essays/ch12/`.

- [Lecture 1: The Mongols Conquered China in Two Stages](../../../../hist-270/background_essays/essays/ch12/ch12-l1-mongol-conquest-state-building.html) (revised)
- [Lecture 2: Ranks, Registers and Roads: How the Yuan Sorted Its People and Opened Eurasia](../../../../hist-270/background_essays/essays/ch12/ch12-l2-ranks-registers-and-roads.html)
- [Lecture 3: Scholars, Stages and the Fall of the Yuan](../../../../hist-270/background_essays/essays/ch12/ch12-l3-scholars-stages-and-the-fall-of-yuan.html)
- [Chapter 12 Research Reconnaissance](../../../../hist-270/background_essays/essays/ch12/ch12-research-reconnaissance.html). Section 8 lists each textbook claim checked, with its verdict and source.

The essays run Chapter 8 Lecture 2 → Ch12 L1 → L2 → L3 → Reconnaissance, and Chapter 14 Lecture 1's Previous link points to the Ch12 L3 essay. Each deck links to its essay. The library index has a Chapter 12 section.

## Source-verified textbook notes (`b02059d`)

Ebrey is contradicted only where a reliable source confirms it. Confirmed slips are explained in the instructor notes with a "Source beyond Ebrey" line, and the sources are listed on each Sources slide under "Further reading beyond Ebrey." No slide carries a visible "outside the textbook" tag.

- **Lecture 1:** Khubilai's reign misprinted as "r. 1360–1394" (B); "only plundered" (F); Dadu "in 1264" (U).
  - Slide V now says the Phags-pa script was ordered "for official documents across his empire" (*CHC* 6, p. 605).
- **Lecture 2:** the Mongol killer who "merely had to pay a fine" (f); Ebrey's "new style" of blue-and-white, with Tang blue-and-white recognized as earlier (q).
- **Lecture 3:**
  - Both 1313 and 1315 explained (i).
  - "About 2 percent" of posts set beside Hsiao's "slightly more than 4 percent" (j).
  - "Ni Can" spelled Ni Zan (r).
- **Not confirmed, left with cautious wording:** Renzong as the "first" Mongol emperor to read Chinese; Guan Hanqing's play count.

## Archived (`archive/`)

- The three `_revSU26` decks
- `HIST270_ch12_studybuddy.html`, the old whole-chapter study buddy. It was mined for content, and nothing linked to it.

## Audit corrections applied

Steven ran an outside audit of each deck. I checked every point against the deck and the sources. Points that fit first-year students were adopted, and over-analysis was trimmed.

- **Lecture 1**
  - Early conquest is no longer described as "no government." Chinggis already used darughachi overseers, and Muqali governed North China from 1217.
  - The western campaign is dated to 1219, against Khwarazm.
  - Governing farmers is separated from becoming sedentary (Dunnell).
  - The pasture debate is framed as reported in Yelü Chucai's later biography.
  - Tax farming, ortogh and appanages are distinguished.
  - Paper money is described as used "across Yuan China."
  - The Japan scroll caption is fixed.
  - The trebuchet's impact is presented as the Yuan shi's report.
- **Lecture 2**
  - Shi Tianze and Zhao Mengfu rose in office without changing category.
  - Cobalt is described as imported for much Yuan blue, with exact sources debated.
  - Earlier Tang blue-decorated wares are acknowledged.
  - "Moved freely" was removed.
  - The decoration is described as selective borrowing.
  - There is no "Istanbul" in the Yuan era.
  - The astronomy exchange is no longer described as two-way.
  - The Q5 notes coach students to weigh the question's word "rigid."
  - Q8 can be answered through porcelain alone.
- **Lecture 3**
  - The title image is "After Qian Xuan," *Ode on Returning Home*, 14th–15th century (Met 13.220.124). It is not by Qian Xuan himself.
  - Career loss is presented as one condition among several.
  - "Not through learning" was fixed.
  - The edict is dated to the 11th lunar month of 1313.
  - The literati "amateur" ideal was softened.
  - Civil war is the main driver of inflation.
  - Zhu's orphanhood is attributed to famine and epidemic.
  - Yunnan held out to 1381.
  - "Disenfranchisement" is defined.
  - The essential exam numbers are marked.
- **Not adopted:** separate answer checklists after the Your Turn slides. The notes already coach the answer, and checklists would edge toward giving it away.

## Canvas module opener

`HIST270_Ch12_Module_Opener.html` was built in the style of the other openers. It starts with a red box explaining the independent study, Study Buddy decks, complement not replacement, and pressing S. It also has a welcome, outcomes, coursework, an 8-step study plan and deck cards. It is not stored in this repo. To do in Canvas:

- [ ] Create it as a Discussion Topic at position 2 of the Chapter 12 module, like the other openers.
- [ ] Paste the Studio video embed into the Video box, or delete the box.
- [ ] Check the "Optional Video Lectures" page, which was empty in the export.

## Open items

All the items that were listed here were checked against the sources for `b02059d` and confirmed. They are closed:

- **Quotes:**
  - **Lecture 1:** Yao Shu's "Cao Bin" line (*Yuan shi* ch. 158).
  - **Lecture 3:**
    - Dou E's curse (*Yuanqu xuan*).
    - The opening of Wen Tianxiang's *Song of the Righteous Spirit*.
    - Zhao Mengfu's two poems ("My Fault Was Coming Out"; the Palace Museum record of *Elegant Rocks and Sparse Trees*).
    - Ni Zan's letter to Zhang Zaozhong (*Qingbi ge quanji* juan 10).
- **Dates:**
  - **Lecture 2:** the Grand Canal dates. The Jizhou cut was made in 1283, and the Huitong canal opened in February 1289 (*CHC* 6, pp. 477–78). The Tonghui canal was built 1292–93 (*Yuan shi* chs. 64–65). The first sea fleet sailed in 1282 and delivered in 1283.
  - **Lecture 3:** Zhang Shicheng held Gaoyou by the end of 1353 (*CHC* 7, pp. 30–31). Han Lin'er was enthroned on 16 March 1355 (*CHC* 7, p. 42).

## Tools

- Build and QA tools (lightbox, Your Turn box, QA scripts) are on the bot's computer at `/workspace/ch12/tools/`. They can be reused for other independent-study chapters.
