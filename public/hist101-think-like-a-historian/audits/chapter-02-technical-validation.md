# Chapter 2 Technical Validation

## Static validation

| Check | Result |
|---|---|
| JSON parses | Pass |
| Unique question IDs | Pass |
| 5 Explain, 5 Use, 5 Connect | Pass |
| Four choices per item | Pass |
| Correct choice IDs resolve | Pass |
| Feedback exists for every choice | Pass |
| 3-5 walkthrough steps per item | Pass |
| `practiceOnly: true` on every item | Pass |
| No API key or external dependency | Pass |
| Safe chapter parameter handling | Pass |
| Helpful invalid/missing-bank state | Pass |
| Relative Cloudflare paths | Pass |
| Local-storage failure fallback | Pass |
| Reduced-motion CSS | Pass |

## Browser smoke test

Automated Chromium testing verified:

- the Chapter 2 bank loads through a local static server;
- one Explain, one Use, and one Connect item appear in sequence;
- radio-button selection and `Check My Reasoning` work;
- response-specific feedback appears;
- `Walk Me Through It`, `Try Again`, and `Continue` work;
- the completion screen appears after the third question;
- `Practice Three More` starts a new set;
- no uncaught JavaScript error appeared;
- no horizontal document overflow appeared at 320 CSS pixels;
- page structure remained usable during a 200 percent zoom inspection.

## Deployment note

Opening `index.html` directly with a `file://` URL may prevent the browser from loading JSON through `fetch()`. Use a static web server locally or deploy the directory to Cloudflare Pages.
