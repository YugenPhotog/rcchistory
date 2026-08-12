# Chapter 7 WCAG 2.2 Level AA Audit

## Scope

Files reviewed: `index.html`, `practice.html`, `historian-practice.css`, `practice.js`, and `banks/chapter-07.json`, including the new developmental introduction and end-of-session reasoning review.

## Result

**No known Level A or AA code-level failure remains.** Structural checks and browser interaction checks passed. A named screen-reader session and direct browser-native 200% zoom remain recommended before a formal conformance claim.

| Criterion / behavior | Result | Evidence |
|---|---|---|
| Language, title, landmarks, headings | Pass | `lang="en"`, a chapter-specific document title, one H1, semantic landmarks, and ordered H2/H3/H4 content are present. |
| Bypass blocks | Pass | The keyboard-visible skip link targets `#main-content`. |
| Form relationships | Pass | Questions use a form, fieldset, legend, native radios, and explicit labels. |
| Review relationships | Pass | The reasoning review is a labeled section containing one article per completed question, ordered reasoning prompts, and nested lists for competing claims and walkthrough steps. |
| Keyboard access | Pass | Native radios, buttons, links, summary, Try Again, Continue, walkthrough, Practice Three More, and reset controls are keyboard operable. |
| Focus order and visibility | Pass | Focus moves to question and feedback headings, then to the Chapter 7 reasoning-review heading after completion. The shared high-contrast `:focus-visible` treatment remains in force. |
| Status messages | Pass | Loading/reset status and response feedback use polite live regions; selection errors use `role="alert"`. |
| Expanded state | Pass | Hint and walkthrough buttons update `aria-expanded` together with the visible region. |
| Color use and contrast | Pass by code review | Meaning is stated in text; the violet developmental styling supplements headings and borders rather than conveying status alone. Dark text remains on light surfaces. |
| Reflow | Pass | At a 320-pixel viewport override, page client width and scroll width both measured 305 pixels; no horizontal overflow appeared. The 640-pixel check also had equal client and scroll widths. |
| Target size | Pass | Every visible button, summary, and answer label measured at least 44 CSS pixels high at 320 pixels. |
| Reduced motion and timing | Pass | The existing reduced-motion rule applies; there is no timer, auto-advance, session expiry, or moving content. |
| Non-text content | Not applicable to practice | Chapter 7 questions and the reasoning review are text-only and require no image alternatives. |
| Screen-reader spot check | Pass structurally; human check recommended | Browser snapshots exposed landmarks, headings, labeled controls, and the review's list structure. Confirm announcement timing with NVDA, JAWS, or VoiceOver. |
| 200% zoom | Needs manual verification | The 640-pixel half-width simulation passed without overflow, but browser automation did not change the browser's native zoom control to exactly 200%. |

## Human verification checklist

1. At exactly 200% browser zoom, complete one Chapter 7 set and inspect the full reasoning review for clipping or horizontal scrolling.
2. With NVDA, JAWS, or VoiceOver, confirm question changes, response feedback, expanded walkthroughs, and the reasoning-review heading are announced once in a useful order.
3. Repeat a basic Chapter 7 load-and-submit check in Edge and Firefox if those browsers are required in the course environment.
