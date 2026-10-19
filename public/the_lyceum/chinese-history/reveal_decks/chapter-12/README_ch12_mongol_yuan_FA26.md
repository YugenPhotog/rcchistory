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
| `HIST270_ch12_lec1_mongol_conquest_state_building_revFA26.html` | 28 (a–bb) | Q1–Q4 | `images/ch12-lec1/` (16 real, 10 AI) | `2aac9ec` |
| `HIST270_ch12_lec2_yuan_hierarchy_global_exchange_revFA26.html` | 24 (a–x) | Q5, Q8 | `images/ch12-lec2/` (all real) | `f97d0b0` |
| `HIST270_ch12_lec3_displaced_elites_yuan_collapse_revFA26.html` | 26 (a–z) | Q6, Q7, Q9, Q10, Q11 | `images/ch12-lec3/` (all real) | `1fe4e71` |

- Slide letters are permanent and stored as `data-letter` on each section. If a new slide is added, it gets the next unused letter.
- The landing page (`chinese-history/index.html`) links to all three FA26 decks.

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

- These quotes were translated or recalled without checking against a source, and are worth a spot-check:
  - **Lecture 1:** Yao Shu's "Cao Bin" line
  - **Lecture 3:** Dou E's curse, the opening of Wen Tianxiang's *Song of the Righteous Spirit*, Zhao Mengfu's two poems, and Ni Zan's letter
- These dates are from memory and worth a spot-check:
  - **Lecture 2:** the Grand Canal dates
  - **Lecture 3:** Zhang Shicheng taking Gaoyou (1353) and Han Lin'er (1355)
- Build and QA tools (lightbox, Your Turn box, QA scripts) are on the bot's computer at `/workspace/ch12/tools/`. They can be reused for other independent-study chapters.
