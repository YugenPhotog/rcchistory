# Chapter 7 Technical Validation

## Result

**Pass.** Chapter 7 is integrated through the shared `practice.html?chapter=7` route. Machine-readable bank results are recorded in `validation-results.json`.

| Test | Result | Evidence |
|---|---|---|
| JSON parsing | Pass | `banks/chapter-07.json` parses successfully. |
| Mature-bank balance | Pass | Exactly 15 Explain, 8 Use, 7 Connect, and 30 total. |
| IDs and answer resolution | Pass | All Chapter 7 IDs are unique; all correct IDs resolve to one of four choices. Across Chapters 2–7, all 180 IDs are globally unique. |
| Feedback and walkthroughs | Pass | Every choice has response-specific feedback; every question has a 3–5-step walkthrough and a transferable strategy. |
| Practice boundary | Pass | The bank and all 30 items set `practiceOnly: true`; no API, login, grade, score, timer, reporting, or secure-exam dependency is present. |
| Interface scaffold | Pass | `scaffold=early`, `mid`, and `late` remain allow-listed. Early shows hints, mid shows the move without hints, and late defers the move and detailed feedback until after submission/walkthrough. |
| Developmental layer | Pass | Separate metadata configures `reasoningStage: "exam2-early"`, the developmental question, and `reasoningReviewMode: "full"` without changing interface-scaffold semantics. |
| Three-question draw | Pass | Runtime test produced Explain → Use → Connect in order. |
| Exact-session review | Pass | Runtime comparison confirmed all three review headings exactly matched the completed stems and each review preserved the response selected for that question. |
| Six-part reasoning model | Pass | Each of the three review items rendered all six required reasoning prompts, the strongest interpretation, the original walkthrough, and the reusable strategy. |
| Chapter isolation | Pass | Full runtime sessions for Chapters 2–6 completed without displaying the Chapter 7 developmental introduction or end-of-session review. |
| Try Again and walkthrough | Pass | Try Again re-enabled choices; Walk Me Through It rendered 3–5 steps in every tested chapter. |
| Rotation | Pass | Four consecutive Chapter 7 sessions drew four unique Explain, four unique Use, and four unique Connect items. Recent queues remain category-specific. |
| Storage resilience | Pass | A direct source-level runtime test forced both storage reads and writes to throw. Both failures were caught, storage was disabled, and practice continued with an empty recent queue and in-memory selection. |
| Return-link safety | Pass | A relative module return path resolved correctly; a `javascript:` return value remained hidden. |
| Invalid chapter | Pass | Chapter 8 produced a plain-language error and no retry or practice form. |
| Responsive behavior | Pass | At 320 CSS pixels, client and scroll widths both measured 305 pixels and visible targets measured at least 44 pixels high. At 640 CSS pixels, client and scroll widths both measured 625 pixels. |

## Reproducibility

Run `node scripts/build-chapter-07.mjs`, then `node scripts/validate.mjs`. The build script harvests the approved handoff draft, retains the selected 25 items, adds the five formal-stream Explain items, balances answer positions, and rebuilds both the JSON bank and readable review copy.
