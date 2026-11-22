# The Uncertain Witness

A finished Reveal.js exhibition on antebellum Gothic science, made November 22, 2026.

## The delivered experience

The presentation contains 23 teaching slides and a source room. The suggested route totals 50 minutes, including three evidence workshops and an exit writing exercise. That duration follows the requested lecture length from the project context.

Open `index.html` for projection. Choose **Read & sources** on any slide for its explanation, citations, image credit, and available model response. The **Read the exhibition** link opens `study.html`, a continuous edition with all explanations, a glossary, a transcribed source table, a bibliography, and image credits. It is also the automatic entry point below 760 pixels. **Present slides** lets a reader choose the fixed slide format explicitly.

The central argument asks how demonstrations, print, and measurement transferred authority to people who interpreted other people’s bodies. The selected cases follow Galvani and Aldini into American electrical teaching, Poyen and Gleason, Poe and Hawthorne, Morse and Spiritualism, and finally Morton and Douglass.

## Design decisions

The visual identity was created for this commission. Instrument Serif supplies dramatic headings, while DM Sans carries explanatory text and interface controls. Ink blue, copper, celadon, and warm white distinguish shifts between demonstration, interrogation, and evidence. Full-image literary scenes alternate with original archival objects, spare comparisons, typographic compositions, and large questions.

Twelve image assets include four newly generated artworks and eight archival images or facsimiles. The lens is labeled conceptual artwork. The sickroom and print shop are labeled historical reconstructions. Georgiana is labeled a literary illustration. The projection view uses plain, opaque text surfaces over its imagery. Local WebP files, fonts, and Reveal.js 6.0.2 allow the complete teaching content to work offline.

The source table reproduces historical racial categories for critical examination. Its numbers are transcribed in semantic HTML. Model answers distinguish reported ranges from the frequency of individual measurements. The lecture treats disagreement over Morton’s measurement error separately from the unsupported inference about racial intelligence.

## Historical and instructional review

Direct excerpts were checked against the primary texts or scans. Poe’s two 1845 publication titles, the 1846 London advertisement, and his reply to Ramsay are distinguished. The reception claim is limited to documented readers and publishers. Hawthorne’s 1843 publication is distinguished from the tale’s late eighteenth-century setting. The dates and locations of Galvani, Aldini, Poyen, Morse, the Fox reports, Morton, Hare, and Douglass were checked.

The account distinguishes electrical contraction, the proposed mesmeric fluid, literary invention, religious claims, and racial classifications. European origins and American reception are explicit. The interpretation of mesmerism’s relationship to labor is attributed to Emily Ogden. The collection’s acquisition history draws on Paul Wolff Mitchell. Other principal sources include the Smithsonian, Library of Congress, Poe Society editions, University of Cambridge, University of Massachusetts Lowell, Library of America, and the original publications.

Every teaching slide has explanatory prose and a source list. The study edition includes model responses for the analytical exercises. Learning objectives ask students to distinguish observation and inference, trace reception across the Atlantic, and explain how evidence conferred authority. The opening question returns in the conclusion and the exit assignment.

Presentation choices draw on W3C WAI guidance for readable, accessible presentations and the Institute of Education Sciences guidance on pairing visuals with explanation, retrieval practice, and explanatory questions. References appear in the study edition.

## Verification

| Check | Result |
| --- | --- |
| Visual review | All 24 slide compositions inspected in Chromium. Image placement, text, and footer clearance checked. |
| Automated accessibility | axe-core 4.14.1 with WCAG A/AA rules through 2.2. No violations in the checked slide states, table dialog, or final mobile and tablet study editions. |
| Contrast | Authored text colors calculated against their solid backgrounds. Normal-text pairs range from 5.04:1 to 14.84:1. Light and dark surfaces receive different visible focus colors. |
| Keyboard | Arrow navigation, N for notes, Tab through controls, answer disclosure, Escape dismissal, and focus return checked. Dialogs use native modal behavior. |
| Responsive reading | 320- and 768-pixel iframe viewports tested. Content widths matched their available 305- and 753-pixel widths after scrollbars. |
| Source accessibility | Informative images have descriptive alternatives. Morton’s table has a caption and row/column headers. Original images can be opened at full size. |
| Motion | Slide transitions and automatic animation disabled. Reduced-motion CSS suppresses animation and transitions. |
| Technical | JavaScript syntax check passed. Internal files and fragment targets checked. All displayed images loaded. Runtime, fonts, and teaching imagery are local. |
| External references | Catalog and scholarly links checked. Some providers intermittently rejected automated requests. Primary-source material needed for the lesson is reproduced or explained locally. |
| Independent study | All 23 explanations, prompts, available answers, source credits, and the glossary are present in static HTML. |
| Print | A dedicated A4 print stylesheet includes explanations and answer disclosures and removes navigation. Native browser PDF export could not be verified in the remote browser. |

The initial reading-edition audit found slide-specific colors affecting study text and a narrow-screen overflow. Those rules were scoped to the presentation, wrapping was corrected, and both responsive audits were rerun successfully. Manual review addressed automated contrast uncertainty around image captions by using solid text backgrounds.

## Verification limits

This is a tested implementation targeting WCAG 2.2 AA. A complete assistive-technology conformance assessment remains outstanding, including NVDA and VoiceOver testing and native browser zoom and PDF export on the instructor’s devices. The continuous edition supplies the reflowing alternative to the fixed 16:9 projection format. Printed output has a stylesheet but no independently verified tagged-PDF deliverable.

External archives and scholarly sites control their own availability and access. The included images, notes, and exercises remain available when those sites cannot be reached.

## Editing

Edit `content.py` for slide text and sources, `style.css` for the visual system, and `app.js` for controls. Run `python build.py` from this folder to regenerate `index.html` and `study.html`. No package installation is required. Image provenance and generation prompts are in `assets/credits.json`. Font and Reveal.js licenses are included.
