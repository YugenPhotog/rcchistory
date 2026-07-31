# Shared Application WCAG 2.2 Level AA Audit

## Overall result

**No known Level A or AA failure remains after remediation.** Automated structural checks and browser-based manual checks passed. This report does **not** claim complete WCAG conformance because a session with a named screen reader and direct browser-native 200% zoom remain marked **needs manual verification**.

## Methods

- Automated structural and content checks in `scripts/validate.mjs` across the shared HTML/CSS/JavaScript and all 150 questions.
- Programmatic contrast calculation for the final color pairs.
- Accessibility-tree inspection in the in-app Chromium browser and Google Chrome.
- Keyboard-only activation of a radio choice, answer submission, and walkthrough expansion.
- Focus-state and `aria-expanded` inspection after dynamic updates.
- Responsive tests at 640 CSS pixels (a 200%-zoom-equivalent half-width check) and 320 CSS pixels.
- Visual inspection of the 320-pixel layout.
- Console inspection after the full flow and chapter matrix.

## Results

| Criterion / behavior | Result | Evidence and remediation |
|---|---|---|
| 3.1.1 Language of Page | Pass | `<html lang="en">`. |
| 2.4.2 Page Titled | Pass | Generic title exists before load; the title updates to the selected chapter. |
| 1.3.1 Info and Relationships | Pass | One H1; logical H2/H3 hierarchy; `header`, `main`, `footer`; each question uses `form`, `fieldset`, `legend`, radios, and labels. Accessibility snapshots exposed these roles and names correctly. |
| 2.4.1 Bypass Blocks | Pass | Visible-on-focus skip link targets `#main-content`. |
| 2.1.1 Keyboard | Pass | Radio selection succeeded with Space; Check My Reasoning and Walk Me Through It succeeded with Enter; no pointer-only action exists. Explicit keyboard handling was added for dynamically created radios and buttons while preserving native semantics. |
| 2.1.2 No Keyboard Trap | Pass | No modal, custom focus cage, or trapping widget. Tab order follows document order. |
| 2.4.3 Focus Order | Pass | Question heading receives focus when a new question loads; feedback heading receives focus after submission; completion heading receives focus after the third question. |
| 2.4.7 / 2.4.11 Focus Visible / Not Obscured | Pass | A high-contrast 3px dark outline with a white separation ring is applied through `:focus-visible`; no sticky overlay obscures focused controls. |
| 3.2.1 / 3.2.2 On Focus / On Input | Pass | Focusing and selecting a radio do not navigate or submit. Submission requires the named button. |
| 3.3.1 / 3.3.2 Error Identification / Labels | Pass | Submitting without a choice produces a text error and moves focus to the first radio. Controls use stable, descriptive labels. |
| 4.1.2 Name, Role, Value | Pass | Buttons and radios are native controls; walkthrough and hint buttons maintain `aria-expanded`; disabled radios expose disabled state. |
| 4.1.3 Status Messages | Pass | Loading, errors, reset status, and feedback use polite live regions. Correct and incorrect states include explicit text and never rely on color alone. |
| 1.4.3 Contrast (Minimum) | Pass | Calculated ratios: body 16.96:1; muted text 7.56:1; links/buttons 10.36:1; teal labels 7.58:1; header text 13.10:1; header course label 10.52:1; error text 7.31:1. |
| 1.4.11 Non-text Contrast | Pass | Primary boundaries and the visible focus indicator exceed 3:1; selection status is also expressed in text. |
| 1.4.4 Resize Text | Needs manual verification | The 640 CSS-pixel half-width simulation had no horizontal overflow. Browser automation could not change the browser's native zoom setting; confirm once with the browser zoom UI at exactly 200%. |
| 1.4.10 Reflow | Pass | At 320 CSS pixels: client width 305, scroll width 305, no clipped choices, no horizontal overflow. |
| 2.5.8 Target Size (Minimum) | Pass | At 320 pixels, every visible button, summary, and answer label measured at least 44 CSS pixels high; no visible target was undersized. |
| 2.3.1 Three Flashes | Pass | No flashing content. |
| 2.2 timing criteria | Pass | No timer, session expiration, auto-advance, or moving content. |
| 2.3.3 Animation from Interactions | Pass | No essential animation; `prefers-reduced-motion` disables smooth scrolling and effectively removes transition/animation duration. |
| 1.1.1 Non-text Content | Pass | The application is text-only; no instructional image requires alternative text. |
| 1.4.12 Text Spacing | Pass by inspection | No fixed text containers clip on increased spacing; cards and controls grow vertically. |
| Screen-reader spot check | Needs manual verification | The browser accessibility tree exposed landmarks, headings, labeled radios, group legend, live feedback, disabled state, and expanded state. Confirm announcement timing with NVDA, JAWS, or VoiceOver before making a formal conformance claim. |

## Browser coverage

- In-app Chromium browser: full three-question flow, retry, walkthrough, reset, optional continuation, five chapter links, invalid parameter, scaffold overrides, responsive widths, and console check passed.
- Google Chrome: Chapter 2 loaded with four labeled radios, correct title and chapter label, no horizontal overflow, and no console warning or error.
- Microsoft Edge: needs manual verification. Windows automation could not establish a sufficiently confident target URL and stopped without changing the existing Edge session.
- Firefox: needs manual verification where practical; no Firefox control surface was available in this run.

## Human verification checklist

1. In current Edge, open one chapter and submit one answer.
2. Set browser zoom to exactly 200% and confirm no clipped text or horizontal page scrolling.
3. With a named screen reader, confirm loading status, feedback status, question position, and walkthrough expanded state are announced once and in a useful order.
4. Repeat a basic load-and-submit smoke test in Firefox if Firefox support is required for the course environment.
