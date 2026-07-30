# Image Manifest — Chapter 6, Lecture 2 — Liberty Was Declared. Who Could Claim It?

Source for every live image: **Wikimedia Commons**, retrieved via
`https://commons.wikimedia.org/wiki/Special:FilePath/<Filename>?width=<n>`.

---

## `Phillis Wheatley frontispiece.jpg`

- **Source URL:** `https://commons.wikimedia.org/wiki/File:Phillis_Wheatley_frontispiece.jpg`
- **Slide use:** Title slide (background, `contain` sizing)
- **Category:** Contemporary primary-source visual — engraving, London, 1773
- **Verification status:** Verified
- **Interpretive caution:** Attribution to Scipio Moorhead is traditional and *attributed*, not documented — the presenter note says "attributed," and the deck makes no claim about the engraver. Sized `contain` rather than `cover` so the oval frame is not cropped.

---

## `Mumbett70.jpg`

- **Source URL:** `https://commons.wikimedia.org/wiki/File:Mumbett70.jpg`
- **Slide use:** Elizabeth Freeman / freedom suits (content + image layout)
- **Category:** Portrait miniature — watercolour on ivory, Susan Anne Livingston Ridley Sedgwick, 1811; Massachusetts Historical Society
- **Verification status:** Verified
- **Interpretive caution:** Painted in 1811, three decades *after* the 1781 suit. Caption says so. Note that the Commons file description gives "circa 1812" while the holding institution dates it 1811; the deck uses the institution's date and the caption avoids precision it cannot support.

---

## `Joseph Brant painting by George Romney 1776.jpg`

- **Source URL:** `https://commons.wikimedia.org/wiki/File:Joseph_Brant_painting_by_George_Romney_1776.jpg`
- **Slide use:** Haudenosaunee division (content + image layout)
- **Category:** Contemporary portrait — George Romney, London, 1776; National Gallery of Canada
- **Verification status:** Verified
- **Interpretive caution:** Painted from life during Brant's diplomatic mission to Britain, which is why the caption reads "a diplomat portrayed as an ally, not a subject." The dress is a hybrid assembled for a London sitting, not documentary Mohawk costume — do not describe it as such if students ask.

---
## Verification method

Every Commons filename below was confirmed against its live `File:` description page before
being written into a deck. Filenames were never guessed or reconstructed from memory.

All `<img>` elements carry an `onerror` fallback to `.img-placeholder`. Title-slide background
images cannot take `onerror`, so each title slide also declares
`data-background-color="#1A1A1A"`, which means a failed load degrades to the house charcoal
rather than to white.

**Note on network:** this container cannot reach `commons.wikimedia.org` (egress allowlist),
so the URLs could not be fetched here. They were verified by description page, not by HTTP
response. Worth one click-through on first classroom use.
