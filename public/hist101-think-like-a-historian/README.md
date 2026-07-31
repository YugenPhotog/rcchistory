# Think Like a Historian — HIST 101 Practice Series

This folder contains a static, practice-only application for Chapters 2–6. Each session presents exactly three ungraded, untimed questions in the sequence **Explain → Use → Connect**. It uses no AI API, database, login, score, timer, or instructor reporting.

## Contents

- `index.html`, `practice.css`, `practice.js`: shared student application
- `banks/chapter-02.json` through `banks/chapter-06.json`: 30 questions per chapter
- `review/`: readable question-and-feedback copies
- `audits/`: source map, item/source audits, cognitive-load audits, shared technical validation, and shared WCAG review
- `scripts/`: reproducible bank, review, audit, and validation tools
- `.backup-20260731-pilot/`: preserved Chapter 2 pilot before expansion

## Chapter links

Serve this folder over HTTP(S), then use:

- `?chapter=2`
- `?chapter=3`
- `?chapter=4`
- `?chapter=5`
- `?chapter=6`

Optional scaffolding override: `&scaffold=early`, `&scaffold=mid`, or `&scaffold=late`.

Optional chapter-module link: add an encoded HTTP(S) destination as `&return=...`. The **Return to Chapter Module** control appears only when that destination is safe and configured.

Opening `index.html` directly with a `file:` URL may prevent the browser from fetching JSON. Use any ordinary static web server for local testing or deployment.

## Bank balance

Every chapter contains:

- 15 Explain
- 8 Use
- 7 Connect
- 30 total

## Practice-only boundary

These items are public instructional practice. Do not place their exact stems, choices, feedback, scenarios, or source combinations in a secure exam bank.
