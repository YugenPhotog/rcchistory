# Shared Application Technical Validation

**Result: PASS.** Machine-readable details are in `validation-results.json`.

| Test | Result | Evidence |
|---|---|---|
| JSON parsing | Pass | All five bank files parse. |
| Bank size and category range | Pass | Every chapter has 30 questions: 15 Explain, 8 Use, 7 Connect. |
| Global IDs | Pass | All 150 question IDs are unique. |
| Correct-choice resolution | Pass | All 150 correct IDs resolve to one of four unique choices. |
| Choice feedback | Pass | All 600 choices include nonempty response-specific feedback. |
| Required pedagogy fields | Pass | Every question includes move, difficulty, approved/practice status, lecture IDs, walkthrough, transfer strategy, source alignment, and accessibility notes. |
| Parameter handling | Pass | Chapters outside 2–6 and malformed values produce a plain-language error; early/mid/late scaffold overrides are allow-listed. |
| Static paths | Pass | The app loads relative CSS, JavaScript, and `banks/chapter-XX.json` paths; no server-side route is required. |
| Local storage resilience | Pass in code review; browser tested separately | Every storage read, write, and removal is guarded; failure switches to in-memory random selection. |
| Repeat reduction | Pass | Category-specific recent-ID queues avoid the most recent four items where storage is available and fall back safely when a pool cycles. |
| Secret/API scan | Pass | No API key pattern, network API dependency, login, database, or grading endpoint found. |
| Reduced motion | Pass | CSS disables smooth scrolling and effectively removes animation/transition durations. |
| Runtime browser flow | Pass | Loading, answer submission, retry, walkthrough, Explain → Use → Connect progression, completion, Practice Three More, review moves, reset, return-link configuration, all chapter parameters, early override, late reveal, and invalid chapter handling passed. |
| Browser console | Pass | No warning or error was reported after the final Chromium and Chrome smoke tests. |
| Responsive runtime | Pass | No horizontal overflow at 640 or 320 CSS pixels; no clipped choices; all visible interaction targets were at least 44 CSS pixels high at 320. |
| Browser matrix | Partial pass | In-app Chromium and Google Chrome passed. Edge and Firefox remain listed for human verification in the WCAG report. |

## Static-host note

The application must be served over HTTP(S) for `fetch()` to load local JSON reliably. Opening `index.html` directly with a `file:` URL may be blocked by browser security policy; this is a browser restriction, not a server dependency.
