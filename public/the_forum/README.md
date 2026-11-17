# The Forum: In-Class Materials for Face-to-Face Courses

The Forum holds the slides, worksheets, and readings used in Professor Austin's face-to-face classes. This README explains why it exists, how a class day is built, and the rules every Forum page follows. It is written for Steven, future collaborators, and the course bots that build these materials.

Chapter 24 of HIST 270 (Remaking China, 1900 to 1927) is the first Forum chapter and the model for the rest.

## Why The Forum Exists

- **In-person students lose focus during straight lecture.** A 75-minute class of continuous slides does not hold a room.
- **Online students already have the full lecture.** Online HIST 270 students use the complete Study Buddy decks in `public/the_lyceum/`, with notes and review questions, in place of lecture. Those decks stay as they are.
- **Face-to-face classes get The Forum.** Forum decks are abbreviated versions of the same material, broken up with videos and in-class activities. Students who want the full treatment use the Study Buddy decks after class.

## How a Chapter Is Structured

- Each chapter has **4 to 5 major themes**, usually taught over two class days.
- Each theme gets a **35-minute block**:
  1. a short lecture of about **15 minutes**, then
  2. **15 to 20 minutes** of either a **video** or an **independent activity**, never both.
- Activities are independent work, not group work.
- Each class day ends with an **exit ticket**.

### Worked Example: HIST 270, Chapter 24

**Day 1: From Dynasty to Disorder** (Tuesday, November 17)
- *Theme: The last Qing reforms and the Revolution of 1911.* Short lecture, then an independent activity: students read Ebrey and fill in the Diagnosing China chart (Yan Fu, Liang Qichao, Zou Rong, Sun Yatsen).
- *Theme: Yuan Shikai and the warlords.* Short lecture, then a classroom excerpt of the documentary *China in Revolution, 1911 to 1949* (PBS, 1989), with pause questions. The excerpt also previews May Fourth, Sun Yatsen, and the march north, so the Northern Expedition is left to this video rather than given its own block.
- Exit ticket.

**Day 2: Waking the Sleepers** (Thursday, November 19)
- *Theme: The New Culture Movement and Lu Xun.* Short lecture (*New Youth*, Chen Duxiu, Hu Shi and the vernacular, Cai Yuanpei's Beijing University, family and women's emancipation, Lu Xun), then an independent reading activity: "The Iron House," Lu Xun's Preface to *Call to Arms* (1922), with short questions on the worksheet.
- *Theme: The May Fourth Movement.* A short lecture that sets up the video rather than repeating it (World War I, Shandong, Versailles, key terms), then a video made for this course, *May Fourth 1919: China's Students Take to the Streets*, which pauses itself for two questions.
- Exit ticket.
- Each day ends with an After Class slide linking the online Study Buddy decks, the reading guide, and the background essays.

## Teaching Rules

- **Never assume homework was done.** In-class work must stand on its own. In Chapter 24, Lu Xun's "Diary of a Madman" is independent homework; nothing in class depends on it.
- **Video questions are simple.** Each asks for one element that the clip clearly shows or says. Ask for a role or type ("which group went on strike?") rather than a vague "who." Never ask for a name that appears only in a lower-third caption.
- **Professional video only.** Use professional documentaries and films, not amateur talking-head YouTube videos. When no suitable professional video exists, we make our own.
- **Images avoid obvious AI photorealism.** When we need images that no archive supplies, we draw them in a period artistic genre. For Chapter 24 that is 1920s Shanghai lianhuanhua (picture-story books): fine black pen and ink on aged cream paper, monochrome, a light watercolor wash only on big moments, blank banners and signs (no fake Chinese characters), and period-accurate hair and dress (no queues on 1919 figures). Each is labeled in that folder's `SOURCES.tsv` as "AI illustration created for this course." Public-domain archival images are preferred when they fit.
- **No online-study extras in Forum decks.** No Pierian Spring section, no Study Buddy button, no Pause & Reflect prompts. Decks end with an After Class slide that links the online decks and the reading guide.
- **Worksheets save locally.** Answers save in the student's browser (localStorage) and export as a `.txt` file that students submit on Canvas. Every worksheet uses its own storage key (for example, `hist270-ch24-day2-worksheet-v1`).
- **No answer keys on any Forum page.** Answers stay out of student-facing slides, worksheets, and readings. The one exception is a self-checking quiz that Steven has approved (the Day 1 video quiz gives feedback after each answer).
- **Exit tickets** close every class day.

## Design and Technical Rules

- **Classroom-size type.** `_theme/forum.css` loads after `museum.css` and sets projection sizes on the 960 x 700 Reveal canvas: about 26px body, 46px slide titles, 16px kickers and labels. Evidence boxes are short (one line where possible) and images are larger than in the online decks.
- **Never modify the shared `museum.css`.** The online decks depend on it. Forum-only changes go in `forum.css`.
- **Self-contained.** Every Forum page loads only from `public/the_forum/`: its own theme copy in `_theme/` and its own images in each chapter's `images/` folder. Nothing loads from `the_lyceum`, so Forum pages work without the Cloudflare sign-in. Check this before publishing: a page should make zero Lyceum requests.
- **Slides fit the canvas:** content at or under 700px tall.
- **Image captions go in the speaker notes**, starting "Image: ...", not on the slide.
- **Slide letters are permanent.** Once a deck is in use, letters do not change, so notes and links stay valid.
- **Chicago capitalization** for titles and headings.
- **No em dashes anywhere** (slides, notes, worksheets, readings, hubs).
- Video embeds use `youtube-nocookie.com`. Decks must be opened from the website (https), not as local files, or YouTube refuses to play.

## Folder Layout

```
public/the_forum/
  README.md                  this file
  _theme/                    forum.css (Forum layer), museum.css and museum.js (copies of the Museum theme)
  <course>/
    index.html               the course hub: one card per class day, with In Class and Review links
    chapter_NN/
      decks, worksheets, readings
      images/chNN-dayN/      images for one class day, plus SOURCES.tsv
```

For example, `chinese_history/` is the HIST 270 hub.

File naming, from Chapter 24:

| Kind | Pattern | Example |
| --- | --- | --- |
| Deck | `HIST270_chNN_dayN_<topic>_revFA26.html` | `HIST270_ch24_day2_new_culture_may_fourth_revFA26.html` |
| Worksheet | `hist270-chNN_dayN_<title>_worksheet.html` | `hist270-ch24_day2_waking-the-sleepers_worksheet.html` |
| Reading | `hist270-chNN_dayN_<title>_reading.html` | `hist270-ch24_day2_iron-house_reading.html` |
| Images | `images/chNN-dayN/` with `SOURCES.tsv` | `images/ch24-day2/` |

Builders (the Python scripts that generate these pages) live outside the repo, on the build box. Edit the builder and rebuild rather than hand-editing generated HTML.

## Privacy

This folder is publicly served on austin-academics.com, and the repository is public. **Never put any of these here, or anywhere in the repo:**

- professor lesson plans,
- answer keys,
- Canvas paste text.

Speaker notes in Forum decks are visible to anyone who opens the deck, so keep them teaching notes, never answers.
