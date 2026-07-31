# HIST 101 Think Like a Historian - Chapter 2 Pilot

This package is a static, practice-only application. It uses no AI API, database, login, timer, score, or instructor reporting.

## Contents

- `index.html`: student-facing page
- `practice.css`: responsive and accessible visual styling
- `practice.js`: question selection, feedback, walkthroughs, and local repetition control
- `banks/chapter-02.json`: 5 Explain, 5 Use, and 5 Connect questions
- `review/`: human-readable question review
- `audits/`: source, cognitive-load, accessibility, and technical reports

## Local test

Because browsers often block `fetch()` from a `file://` page, serve the folder locally:

```text
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/?chapter=2&scaffold=early
```

Supported scaffolding values are `early`, `mid`, and `late`.

## Cloudflare deployment

Upload the folder without changing its internal paths. Use `index.html` as the entry page. The Chapter 2 bank loads from `banks/chapter-02.json`.

## Practice-only boundary

These questions are instructional practice items. Do not place them in the secure exam bank or reuse their exact stems, choices, or scenarios on a graded exam.
