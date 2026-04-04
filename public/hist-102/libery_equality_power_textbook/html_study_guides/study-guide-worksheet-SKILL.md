---
name: study-guide-worksheet
description: Create printable study guide worksheets for first-year college history, ethics, or religious studies courses. Use when the user wants to create a study guide or exam prep worksheet based on a Reveal.js lecture deck. Generates a self-contained HTML file optimized for Cloudflare static hosting with a print button and print-safe CSS. Trigger whenever the user says "study guide", "worksheet", "exam prep sheet", or asks to generate student handout materials from a lecture deck.
---

# Study Guide Worksheet Creator

Create scaffolded, printable study guide worksheets optimized for first-year college students.

## Output Format

**Always deliver a single self-contained `.html` file** — no external dependencies, no `.docx`, no Word. The file must:
- Render correctly in any browser
- Print cleanly via browser print / Save as PDF (print button included)
- Host on Cloudflare Pages or any static file server without modification
- Hide the print button when printing via `@media print { #print-btn { display: none !important; } }`

---

## Workflow

1. **Receive Reveal.js deck**: User provides the HTML lecture file
2. **Extract content systematically**: Parse lecture slides, pop-ups, presenter notes, and Study Buddy notes for terms and concepts
3. **Extract Pause & Reflect prompts**: Find all `data-background="#1B4332"` sections with "Pause & Reflect" heading — copy each prompt verbatim for Part III
4. **Verify extraction**: Confirm all extracted terms and prompts actually exist in the source (no hallucinations)
5. **Identify topic sections**: Note major sections/themes from ACTUAL `<h2>`/`<h3>` headers
6. **Prioritize for first-year students**: Select the 10-12 MOST ESSENTIAL terms — focus on foundational concepts
7. **Add topic scaffolding**: Link each term to its actual section from step 5 (no invented categories)
8. **Simplify check items**: Create "I can..." statements tied to concepts ACTUALLY COVERED in the lecture
9. **Generate worksheet**: Write self-contained HTML using the spec below
10. **Final verification**: Trace every element back to source before delivery
11. **WCAG 2.1 AA audit**: Run the checks below — fix all failures, then re-validate
12. **Deliver**: Save to `/mnt/user-data/outputs/` as `[course]-ch[N]-lec[N]-study-guide.html`

---

## Standard Worksheet Structure

### Header
- **Name line only**: `Name: ________________________________` (no date field)
- Course code and chapter/lecture info as subheading

### Student Instructions Box
Light gray bordered box (`border: 1px solid #ccc; background: #f8f8f8`) containing:
> **How to Use This Study Guide**
> Find the deck in your Canvas module. Click popup terms (dotted underlines) and press S for speaker notes.
> Fill in your own words after reviewing the deck. Write full definitions — not copied from the slides.
> Can I use this on the exam? Yes — but only if handwritten. No printouts, no copy-paste from Google or AI.

### Part I: Topic Overview
- **Single paragraph** (3-5 sentences) introducing the lecture topic and historical context
- **Fill in the Blanks** section: 8-10 cloze-style statements derived from actual slide bullet points
  - Convert key bullet points into fill-in-the-blank sentences by removing the most historically significant term(s)
  - Blank targets should preferably cross-reference terms in Part II
  - Blanks rendered as `<span class="blank">` with bottom border, sized to missing content
  - Label: **"Fill in the Blanks"** with subtitle in gray italics: *"Complete each statement using the lecture deck. Terms in bold appear in Part II."*
  - Keep statements to one sentence each; aim for 10 items, minimum 8

### Part II: Essential Terms & Concepts
**Single unified table** (no A/B/C sections) with **12 terms minimum**:
- **Column 1** (~30% width): Term name (bold) + topic reference in gray italics
- **Column 2** (~70% width): Zone labeled *"After — deck + popups:"* in gray italics + brief greyed hint (5-10 words) + **5 write-lines**

```html
<td class="def-cell">
  <span class="after-label">After — deck + popups:</span>
  <span class="after-hint">Brief greyed hint here — 5-10 words</span>
  <span class="write-lines">
    <span class="write-line"></span><span class="write-line"></span>
    <span class="write-line"></span><span class="write-line"></span>
    <span class="write-line"></span>
  </span>
</td>
```

**Selection criteria:**
- Choose FOUNDATIONAL concepts that unlock understanding of the topic
- Prioritize terms appearing multiple times or connecting to major themes
- Eliminate redundancy — pick one if two terms overlap significantly
- Aim for 12 distinct terms; skip minor details mentioned only once

**Topic references are mandatory** — every term shows which section it appears in.

### Part III: Pause & Reflect
**Required section** — include one entry for EVERY Pause & Reflect slide in the deck.

- Extract each prompt verbatim from `data-background="#1B4332"` sections containing "Pause & Reflect"
- Reproduce the full question text exactly as it appears on the slide (strip HTML tags)
- Provide **5 write-lines** per prompt for the student's written response
- Label each entry with its section context in gray italics

```html
<div class="pause-reflect-item">
  <p class="pr-prompt"><strong>Section I — [Section Title]</strong></p>
  <span class="pr-section">(Pause & Reflect)</span>
  <p class="pr-question">Full question text copied verbatim from slide...</p>
  <span class="write-lines">
    <span class="write-line"></span><span class="write-line"></span>
    <span class="write-line"></span><span class="write-line"></span>
    <span class="write-line"></span>
  </span>
</div>
```

### Part IV: Study Checklist
Simplified checklist. **Keep to 8-10 total items.**
- All items use checkbox + "I can..." framing
- Every item includes a gray italic topic reference
- Focus on application/comparison rather than pure recall
- Skip historiography by default unless user explicitly requests it

```html
<li>
  <span class="cb"></span>
  <span class="check-text">
    I can explain [concept] and connect it to [theme].
    <span class="check-topic"> (Section X — Topic Name)</span>
  </span>
</li>
```

**Extraction tip**: Find Pause & Reflect slides with:
```python
import re
with open("deck.html", encoding="utf-8") as f:
    html = f.read()
fg_sections = re.findall(r'<section data-background="#1B4332">(.*?)</section>', html, re.DOTALL)
pause_reflects = []
for sec in fg_sections:
    if "Pause" in sec and "Reflect" in sec:
        questions = re.findall(r'<p[^>]*>(.*?)</p>', sec, re.DOTALL)
        clean = [re.sub(r'<[^>]+>', '', q).strip() for q in questions]
        pause_reflects.append([q for q in clean if q and "Pause" not in q and "Reflect" not in q])
```

---

## HTML Output Spec

### Full CSS (embed in `<style>` tag)

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: Arial, Helvetica, sans-serif; font-size: 11pt;
  color: #1a1a1a; background: #fff; max-width: 820px;
  margin: 0 auto; padding: 1.4em 1.6em 2em;
}
#print-btn {
  display: block; margin: 0 0 1.4em auto; padding: 0.5em 1.4em;
  background: #1a1a1a; color: #fff; border: none; border-radius: 4px;
  font-size: 10pt; cursor: pointer; font-family: Arial, sans-serif;
}
#print-btn:hover { background: #333; }
.doc-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 0.5em; margin-bottom: 1em; }
.course-line { font-size: 9.5pt; color: #444; margin-bottom: 0.2em; }
h1.doc-title { font-size: 14pt; font-weight: 700; line-height: 1.25; margin-bottom: 0.3em; }
.name-line { font-size: 11pt; margin-top: 0.6em; }
.name-line span { display: inline-block; border-bottom: 1px solid #333; width: 260px; }
.instructions {
  border: 1px solid #ccc; background: #f8f8f8;
  padding: 0.8em 1em; margin: 1.2em 0 1.6em; font-size: 10pt;
}
.instructions p { margin-bottom: 0.35em; line-height: 1.5; }
.instructions p:last-child { margin-bottom: 0; }
h2.part-heading {
  font-size: 13pt; font-weight: 700; color: #1a1a1a;
  border-bottom: 2px solid #444; padding-bottom: 0.2em; margin: 1.8em 0 0.8em;
}
h3.sub-heading { font-size: 11.5pt; font-weight: 700; margin: 1em 0 0.3em; }
.sub-hint { font-size: 9.5pt; color: #767676; font-style: italic; margin-bottom: 0.8em; }
.overview { line-height: 1.65; margin-bottom: 1.2em; }
ol.fitb { padding-left: 1.5em; }
ol.fitb li { margin-bottom: 0.85em; line-height: 1.6; font-size: 10.5pt; }
.blank { display: inline-block; border-bottom: 1px solid #333; min-width: 120px; vertical-align: bottom; }
.blank-short { min-width: 80px; }
.blank-long  { min-width: 180px; }
table.terms { width: 100%; border-collapse: collapse; margin-top: 0.4em; font-size: 10pt; }
table.terms th {
  background: #e0e0e0; border: 1px solid #ccc;
  padding: 0.45em 0.65em; text-align: left; font-size: 10pt; font-weight: 700;
}
table.terms td { border: 1px solid #ccc; padding: 0.5em 0.65em; vertical-align: top; }
table.terms td.term-cell { width: 30%; }
table.terms td.def-cell  { width: 70%; }
.term-name { font-weight: 700; font-size: 10.5pt; display: block; margin-bottom: 0.15em; }
.term-topic { font-size: 9pt; color: #767676; font-style: italic; display: block; }
.after-label { font-size: 9pt; color: #767676; font-style: italic; display: block; margin-bottom: 0.15em; }
.after-hint  { font-size: 9pt; color: #767676; font-style: italic; display: block; margin-bottom: 0.5em; }
.write-lines { display: block; }
.write-line  { display: block; border-bottom: 1px solid #ccc; height: 1.45em; margin-bottom: 0.3em; }
ul.checklist { list-style: none; padding-left: 0; margin-top: 0.4em; }
ul.checklist li {
  display: flex; align-items: flex-start; gap: 0.55em;
  margin-bottom: 0.75em; font-size: 10.5pt; line-height: 1.55;
}
.cb { display: inline-block; width: 13px; height: 13px; border: 1.5px solid #555; flex-shrink: 0; margin-top: 0.18em; }
.check-text { flex: 1; }
.check-topic { color: #767676; font-style: italic; font-size: 9.5pt; }
.pause-reflect-item { border: 1px solid #ccc; padding: 0.8em 1em; margin-bottom: 1.2em; page-break-inside: avoid; }
.pr-prompt { font-size: 10pt; font-weight: 700; margin-bottom: 0.2em; color: #1a1a1a; }
.pr-section { font-size: 9pt; color: #767676; font-style: italic; margin-bottom: 0.4em; display: block; }
.pr-question { font-size: 10.5pt; line-height: 1.6; margin-bottom: 0.6em; }
.doc-footer {
  margin-top: 2em; padding-top: 0.5em; border-top: 1px solid #ccc;
  font-size: 9pt; color: #767676; font-style: italic; text-align: center;
}
@media print {
  #print-btn { display: none !important; }
  body { padding: 0; max-width: none; font-size: 10.5pt; }
  h2.part-heading { page-break-after: avoid; }
  table.terms td { page-break-inside: avoid; }
  ul.checklist li { page-break-inside: avoid; }
  .pause-reflect-item { page-break-inside: avoid; }
  .instructions { background: #f8f8f8 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  table.terms th { background: #e0e0e0 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
```

### HTML Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Study Guide — [Lecture Title] — [Course], Ch. [N] Lecture [N]</title>
<style>/* paste full CSS above */</style>
</head>
<body>
<button id="print-btn" onclick="window.print()">Print / Save as PDF</button>
<div class="doc-header">
  <p class="course-line">[COURSE]: [Course Name] · Chapter [N], Lecture [N] · [Institution]</p>
  <h1 class="doc-title">Study Guide: [Lecture Title]</h1>
  <p class="name-line">Name:&nbsp;<span>&nbsp;</span></p>
</div>
<!-- instructions box -->
<!-- Part I: Overview + Fill in the Blanks -->
<!-- Part II: Terms table -->
<!-- Part III: Pause & Reflect -->
<!-- Part IV: Checklist -->
<div class="doc-footer">[Course] · Ch. [N], Lecture [N] · [Institution]</div>
</body>
</html>
```

---

## Key Principles

1. **HTML only** — single self-contained `.html` file, no Word/docx, no external dependencies
2. **Always include Part III** — extract every Pause & Reflect prompt verbatim; 5 write-lines each
3. **Aim for 12 distinct terms** — most lectures have at least 12 non-overlapping foundational concepts
4. **Scaffold with topics, not slides** — every term/item references lecture section/theme
5. **Provide greyed hints** — help students know what to look for without giving away answers
6. **"I can..." framing** — Part III uses empowering language, not intimidating prompts
7. **Print-friendly** — no background colors except #f8f8f8 and #e0e0e0 (force-printed)
8. **Post-lecture focus** — students complete after reviewing the deck, not during class

---

## WCAG 2.1 AA Audit (Run Before Every Delivery)

```python
import re

with open("path/to/studyguide.html", encoding="utf-8") as f:
    content = f.read()

assert re.search(r'<html[^>]+lang=["\']en["\']', content), "FAIL: missing lang=en"
assert re.search(r'<title>[^<]{5,}</title>', content), "FAIL: missing/empty title"
assert "#print-btn" in content and "@media print" in content, "FAIL: print styles missing"
for img in re.findall(r'<img [^>]+>', content):
    assert "alt=" in img, f"FAIL: img missing alt — {img[:60]}"
# Verify no grays lighter than #767676 used as text
# #767676 on white = 4.54:1 (minimum compliant gray)
```

### Color Compliance (white background)

| Color | Role | Contrast | Status |
|-------|------|----------|--------|
| `#1a1a1a` | Body text | 17.3:1 | PASS |
| `#444444` | Course line | 9.74:1 | PASS |
| `#767676` | Hints, topic refs, footer | 4.54:1 | PASS (minimum) |
| `#888888` or lighter | Any text | <4.5:1 | FAIL — use `#767676` |

---

## Hallucination Prevention

**NEVER invent content.** Every element must be directly extracted from the deck.

1. Terms must exist in the deck (slides, popups, or notes)
2. Topic references must match actual `<h2>` section headers
3. Fill in the Blanks must derive from actual slide bullets
4. Pause & Reflect prompts must be copied verbatim from the deck
5. No external knowledge — stick strictly to source material

---

## Checklist Before Delivery

**Content**:
- [ ] Every term appears in the source Reveal.js file
- [ ] Every topic reference matches an actual section header from the deck
- [ ] All Fill in the Blanks statements derive from actual slide bullets
- [ ] All Pause & Reflect prompts copied verbatim from deck
- [ ] All checklist items reference concepts actually covered in the deck

**Format**:
- [ ] Single self-contained `.html` file (no external dependencies)
- [ ] Print button present; hidden via `@media print`
- [ ] Name line only at top (no date field)
- [ ] Student instructions box present
- [ ] Part I: Overview paragraph + 8-10 Fill in the Blanks items
- [ ] Part II: Single unified table, 12+ terms, topic references, 5 write-lines per term
- [ ] No "During lecture" zone in terms table
- [ ] Part III: Every Pause & Reflect prompt verbatim, 5 write-lines each
- [ ] Part IV: 8-10 "I can..." checklist items with topic references
- [ ] No background colors except #f8f8f8 (instructions) and #e0e0e0 (table headers)
- [ ] All gray text >= #767676
- [ ] File saved to `/mnt/user-data/outputs/` as `[course]-ch[N]-lec[N]-study-guide.html`

**WCAG**:
- [ ] `lang="en"` on `<html>` element
- [ ] `<title>` present and descriptive
- [ ] `@media print` hides print button
- [ ] All images (if any) have alt text
- [ ] No text colors lighter than `#767676`
