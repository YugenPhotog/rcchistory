# Chapter 2 WCAG 2.2 Level AA Audit

## Scope

Files reviewed: `index.html`, `practice.css`, `practice.js`, and `banks/chapter-02.json`.

## Results

| Criterion tested | Result | Evidence and remediation |
|---|---|---|
| Language, title, landmarks, heading hierarchy | Pass | `lang="en"`, descriptive title, one H1, and semantic header/main/footer are present. |
| Skip link | Pass | Keyboard-visible skip link targets `#main-content`. |
| Form semantics | Pass | Each item uses a form, fieldset, legend, radio inputs, and explicit labels. |
| Real controls | Pass | All actions use buttons or a genuine link. |
| Keyboard access and tab order | Pass in Chromium test | All actions were completed with keyboard events; no keyboard trap was observed. |
| Focus visibility | Pass | A dual dark-and-white focus indicator remains visible against both light and dark adjacent colors. |
| Focus management | Pass | Focus moves to the question heading after a new item and to feedback after submission. |
| Dynamic feedback | Pass | Feedback and loading status use polite live regions; errors use `role="alert"`. |
| Expand/collapse state | Pass | Hint and walkthrough controls update `aria-expanded` and `hidden`. |
| Color not sole indicator | Pass | Correct and incorrect states include full text explanations and distinct borders/backgrounds. |
| Text contrast | Pass by code review | Dark text is used on light surfaces; white text is used on dark blue buttons/header; focus uses amber against light and dark backgrounds. |
| 200 percent zoom | Pass in Chromium test | Controls and content remained available without clipping during automated zoom inspection. |
| 320 CSS pixel reflow | Pass in Chromium test | No horizontal page overflow was detected at 320 CSS pixels. |
| Target size | Pass | Primary controls are at least 44 CSS pixels high. |
| Reduced motion | Pass | `prefers-reduced-motion` disables smooth scrolling and minimizes transitions. |
| Flashing/autoplay | Pass | No flashing, audio, video, or autoplay exists. |
| Images and alt text | Not applicable | The pilot uses no images. |
| Screen-reader structure spot check | Pass in Chromium accessibility-tree inspection | Headings, buttons, radio controls, group labels, and live regions were exposed with expected roles and names. |
| Current Chrome | Pass | Tested in installed Chromium, the open-source basis for Chrome. |
| Edge and Firefox | Needs manual verification | These browsers were not installed in the build environment. No browser-specific API is used. |

## Unresolved limitation

A full human screen-reader test in NVDA, JAWS, or VoiceOver and direct testing in Microsoft Edge and Firefox remain recommended before institutional deployment. No unresolved code-level Level AA failure was found in this audit.
