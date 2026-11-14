# HIST 101 Canvas Page House Style — FA26

**Status:** Current standard as of November 2026. Extracted from the Chapter 13 "Manifest Destiny" unit overview page that Steven pasted as the model, then audited against WCAG 2.2 Level AA.

**This file covers Canvas pages only:** unit overviews and assignment instruction pages that get pasted into the Canvas rich-text editor. HIST 101 Reveal.js lecture decks have their own conventions (permanent slide letters, Study Buddy notes, section colors). Shared deck rules live in `public/the_lyceum/_shared/deck-base/deck_house_style_base.md`. Do not apply this Canvas layout or typography to a Reveal deck.

**Companion sample:** `HIST101_canvas_house_style_sample.html` (AA-corrected components, ready to open in a browser).

**Source of the extract:** the Chapter 13 "Manifest Destiny" unit overview page Steven provided in November 2026. A verbatim copy is kept on the box at `/workspace/ch13_canvas/source_ch13_overview_page.html` for reference; that file is not in this repository, and this guide does not rewrite the source page.

---

## 1. Canvas constraints

Canvas strips `<style>` blocks and class-based CSS. Build every page as a single centered wrapper with **inline `style` attributes only**. Do not use stylesheets, class names that you expect to style, or scripts.

- Paste the wrapper into the Canvas HTML editor (the `</>` view), not the visual editor.
- Use semantic HTML: one `h1`, then `h2` / `h3`, lists, and links. Canvas keeps those tags.
- Do not rely on `aria-*` or visually hidden utility classes. Canvas may strip them. Put any needed wording in visible text.
- No JavaScript.

---

## 2. Layout

One wrapper, stacked full-width bands, no sidebars:

```html
<div style="max-width: 820px; margin: 0 auto; font-family: Georgia,'Times New Roman',serif; color: #1a1a1a; line-height: 1.6;">
  <!-- bands go here -->
</div>
```

Typical band padding is `28px 36px`. The header uses `32px 36px`. The header's top corners are rounded (`border-radius: 12px 12px 0 0`); later bands are square.

---

## 3. Color tokens

AA-corrected values are marked. Use the corrected token in new pages. The original is recorded so older pages can be updated on purpose, not by accident.

| Token | Hex | Role | AA notes |
|---|---|---|---|
| Black | `#1A1A1A` | Header and "Watch For" bands; near-black button text on gold | Passes as a background with cream, gold, or white text |
| Cream | `#F5F1E8` | Intro band background | |
| Soft cream (takeaway fill) | `#fff8e7` | Takeaway box fill | |
| White | `#ffffff` | Content bands | |
| Light teal fill | `#ebf5f4` | "How this works," "Go Deeper," tips bands | |
| Pale teal card | `#F7FBFA` | Teal lecture / step card | |
| Pale brown card | `#FBF8F2` | Brown lecture / step card | |
| Pale purple card | `#F8F6FB` | Purple lecture / step card | |
| Pale red card | `#FBF6F6` | Red lecture / step card | |
| Podcast dark teal | `#1C3A3A` | Podcast / featured-media band | |
| Body text | `#1a1a1a` | Default body and card titles | 15.4:1+ on cream and white |
| Body secondary | `#333333` | Card descriptions | 11.8:1+ on card fills |
| Muted italic | `#555555` | Card subtitles and italic lead-ins | 6.7:1+ on card and band fills; 7.46:1 on white |
| Footer gray | `#6b6b6b` | Footer, 13px on white | 5.33:1, passes |
| Cream text | `#f5f1e8` | Header subtitle; body on black or podcast bands | 15.44:1 on `#1A1A1A`; 10.86:1 on `#1C3A3A` |
| Gold | `#D4AF37` | Page title on black; "Watch For" headings and labels; gold buttons **on dark bands only**; podcast kicker | 8.28:1 on `#1A1A1A` (passes at 17px); 5.82:1 on `#1C3A3A`. **Do not** put gold *text* or a gold *fill button* on white or cream: gold on white is 2.10:1 |
| Gold-brown text | `#8B6914` | Takeaway body text on `#fff8e7` | 4.80:1, passes at 23px regular (and as large text) |
| Takeaway border | `#A78824` | **AA-corrected.** 3px double border on the takeaway box | Replaces `#D4AF37` on `#fff8e7` (original 1.99:1, fails 3:1 non-text contrast). `#A78824` is 3.20:1 |
| Mid teal | `#2C7873` | Intro left border; teal card border and kicker **on light fills**; teal buttons | Kickers on pale teal 4.98:1; white text on this button 5.20:1. **Do not** use this teal for small text on black (13px kicker is 3.35:1, fails 4.5:1) |
| Teal on dark | `#3A9B94` | **AA-corrected.** Header kickers and other 13px labels on `#1A1A1A` | 5.22:1 on black. Do not use this lighter teal for text on cream or white (it would fail 4.5:1). Keep `#2C7873` on light backgrounds |
| Heading / link teal | `#1C5A57` | `h2` text and underline; unit-question line; text links | 7.93:1 on white; 7.13:1 on `#ebf5f4`; 7.03:1 on cream |
| Forest green | `#2F6B3A` | Optional secondary button (for example a required follow-on link) | White text 6.39:1 |
| Brown accent | `#8B6F47` | Brown card left border | 4.44:1 on `#FBF8F2` (non-text, passes 3:1) |
| Brown kicker / button | `#6E5533` | Brown card kicker; brown buttons | Kicker 6.58:1 on pale brown; white on button 6.98:1 |
| Purple accent | `#6B4C9A` | Purple card border, kicker, and buttons | Kicker 6.26:1; white on button 6.72:1 |
| Red accent | `#9B2C2C` | Red card border, kicker, and buttons | Kicker 7.03:1; white on button 7.53:1 |
| Hairline tan | `#E0DAC8` / `#e0dac8` | Decorative right or outer band edges | Below 3:1; allowed only as decoration, never as the only way to tell a band or control apart |
| Hairline teal | `#cfe3e1` | Decorative edge on light-teal bands | Same rule |
| Podcast right edge | `#122929` | Decorative right edge on the podcast band | Same rule |

**Accent meaning on cards** (pair the color with a text label; never color alone):

- **Teal:** default or opening step; Lecture 1 and similar
- **Brown:** a reading or discourse companion
- **Purple:** a gallery, Part Two, or a later movement in the unit
- **Red:** a finale, crisis, or primary-source close

---

## 4. Type scale

Body face is Georgia (with Times New Roman as fallback). Kickers, headings, buttons, and the footer are Arial.

| Role | Face | Size | Weight / style | Color |
|---|---|---|---|---|
| Header kicker | Arial | 13px | regular, often small caps via wording in all caps | `#3A9B94` on black (**AA**) |
| Page title (`h1`) | Georgia | 34px | regular; line-height 1.2 | `#D4AF37` on black |
| Header subtitle | Georgia | 19px | italic | `#f5f1e8` |
| Intro body | Georgia | 19px | regular | `#1a1a1a` |
| Unit question | Georgia | 20px | regular, with `<strong>` on the question itself | `#1C5A57` |
| Section heading (`h2`) on light bands | Arial | 24px | bold (browser default for `h2`); 2px `#1C5A57` underline, 8px padding under the text | `#1C5A57` |
| Podcast title (`h2`) | Georgia | 27px | regular or default; no underline | `#ffffff` |
| "Watch For" heading (`h2`) | Arial | 22px | bold; no underline | `#D4AF37` |
| Body copy | Georgia | 17px | regular | `#1a1a1a` |
| Italic lead-in / card subtitle | Georgia | 16px | italic | `#555555` |
| Card kicker | Arial | 13px | regular, all-caps label | accent on that card |
| Card title (`h3`) | Georgia | 20px | regular | `#1a1a1a` |
| Card body | Georgia | 16px | regular | `#333333` |
| Takeaway kicker | Arial | 12px | regular, all caps | `#2C7873` |
| Takeaway text | Georgia | 23px | regular | `#8B6914` |
| Button | Arial | 15px | regular | white on a filled accent, or `#1a1a1a` on gold |
| Footer | Arial | 13px | regular | `#6b6b6b` |

WCAG large text is 24px regular, or 18.66px bold. The 24px `h2` and the 34px title count as large (3:1). The 23px takeaway is regular, so it needs 4.5:1, which `#8B6914` meets.

---

## 5. Components (copy-paste snippets)

Snippets below already use AA-corrected colors. Replace the sample text and `href` values.

### Dark header band

Use a real `h1` for the page title (the source overview used a styled `div`; do not repeat that).

```html
<div style="background: #1A1A1A; border-radius: 12px 12px 0 0; padding: 32px 36px; text-align: center;">
    <div style="color: #3A9B94; font-family: Arial,sans-serif; font-size: 13px; margin-bottom: 10px;">HIST 101 &middot; U.S. History I &middot; Chapter 13</div>
    <h1 style="color: #d4af37; font-size: 34px; font-family: Georgia,serif; line-height: 1.2; font-weight: normal; margin: 0;">Page Title</h1>
    <div style="color: #f5f1e8; font-size: 19px; font-style: italic; margin-top: 8px;">Subtitle in italics</div>
</div>
```

### Cream intro band

```html
<div style="background: #F5F1E8; padding: 28px 36px; border-left: 5px solid #2C7873; border-right: 1px solid #E0DAC8;">
    <p style="font-size: 19px; margin: 0 0 14px 0;">Opening paragraph.</p>
    <p style="font-size: 19px; margin: 0;">Final intro paragraph, no bottom margin.</p>
    <p style="font-size: 20px; color: #1c5a57; margin: 20px 0 0 0;">This page asks one question: <strong>write the question here.</strong></p>
</div>
```

### White content band, with `h2`

```html
<div style="background: #ffffff; padding: 28px 36px; border: 1px solid #e0dac8;">
    <h2 style="color: #1c5a57; font-family: Arial,sans-serif; font-size: 24px; border-bottom: 2px solid #1C5A57; padding-bottom: 8px; margin: 0 0 16px 0;">Section Title</h2>
    <p style="font-size: 17px; margin: 0 0 16px 0;">Body copy.</p>
    <p style="font-size: 17px; margin: 0;">Last paragraph, no bottom margin.</p>
</div>
```

### Light-teal band

```html
<div style="background: #ebf5f4; padding: 28px 36px; border: 1px solid #cfe3e1;">
    <h2 style="color: #1c5a57; font-family: Arial,sans-serif; font-size: 24px; border-bottom: 2px solid #1C5A57; padding-bottom: 8px; margin: 0 0 16px 0;">How This Works</h2>
    <p style="font-size: 16px; font-style: italic; color: #555; margin: 0 0 16px 0;">Optional italic lead-in.</p>
    <p style="font-size: 17px; margin: 0;">Body copy.</p>
</div>
```

### Takeaway box (double gold border)

Place this inside a white or light band, not as its own full-width band.

```html
<div style="background: #fff8e7; border-radius: 12px; padding: 20px 24px; text-align: center; margin: 20px 0; border: 3px double #A78824;">
    <div style="color: #2c7873; font-family: Arial,sans-serif; font-size: 12px; margin-bottom: 8px;">THE TAKEAWAY</div>
    <div style="color: #8b6914; font-size: 23px; font-family: Georgia,serif;">One or two sentences students should remember.</div>
</div>
```

### Lecture or step card

Swap the four accent colors as needed. Use an `h3` for the card title (the source used a `div`).

```html
<div style="border-left: 5px solid #2C7873; background: #F7FBFA; border-radius: 0 8px 8px 0; padding: 16px 20px; margin-bottom: 16px;">
    <div style="color: #2c7873; font-family: Arial,sans-serif; font-size: 13px;">STEP 1 &middot; SHORT LABEL</div>
    <h3 style="font-size: 20px; color: #1a1a1a; margin: 4px 0; font-weight: normal; font-family: Georgia,'Times New Roman',serif;">Card Title</h3>
    <div style="font-size: 16px; font-style: italic; color: #555; margin: 0 0 6px 0;">Optional subtitle</div>
    <div style="font-size: 16px; color: #333;">Description. End with a guiding question in italics if you want one.</div>
    <div style="margin-top: 12px;"><a style="display: inline-block; background: #2C7873; color: #ffffff; font-family: Arial,sans-serif; font-size: 15px; text-decoration: none; padding: 9px 18px; border-radius: 6px; margin: 0 8px 6px 0;" href="https://example.com">Open the Lecture 1 deck &rarr;</a></div>
</div>
```

Brown card: border and kicker `#8B6F47` / `#6E5533`, fill `#FBF8F2`, button `#6E5533`.
Purple card: border, kicker, and button `#6B4C9A`, fill `#F8F6FB`.
Red card: border, kicker, and button `#9B2C2C`, fill `#FBF6F6`.

### Buttons

Filled rectangles. The button text must say where the link goes ("Open the Lecture 4 deck," not "Click here").

```html
<!-- Accent fill, for light bands -->
<a style="display: inline-block; background: #2C7873; color: #ffffff; font-family: Arial,sans-serif; font-size: 15px; text-decoration: none; padding: 9px 18px; border-radius: 6px; margin: 0 8px 6px 0;" href="https://example.com">Open the Lecture 1 deck &rarr;</a>

<!-- Gold fill, for dark bands only -->
<a style="display: inline-block; background: #D4AF37; color: #1a1a1a; font-family: Arial,sans-serif; font-size: 15px; text-decoration: none; padding: 10px 22px; border-radius: 6px;" href="https://example.com">Listen on Spotify (38 min) &rarr;</a>
```

### Text links

Always set the underline in the inline style. Do not depend on the browser default; Canvas sometimes removes it, and color alone is not enough.

```html
<a style="color: #1c5a57; text-decoration: underline;" href="https://example.com">Was U.S. Expansion "Land Theft"?</a>
```

### Dark teal featured-media (podcast) band

```html
<div style="background: #1C3A3A; padding: 28px 36px; border-left: 5px solid #D4AF37; border-right: 1px solid #122929;">
    <div style="color: #d4af37; font-family: Arial,sans-serif; font-size: 13px; margin-bottom: 5px;">CHAPTER PODCAST</div>
    <h2 style="color: #ffffff; font-family: Georgia,serif; font-size: 27px; margin: 0 0 10px 0;">Episode Title</h2>
    <p style="color: #f5f1e8; font-size: 17px; margin: 0 0 18px 0;">Short description.</p>
    <div style="text-align: center;"><a style="display: inline-block; background: #D4AF37; color: #1a1a1a; font-family: Arial,sans-serif; font-size: 15px; text-decoration: none; padding: 10px 22px; border-radius: 6px;" href="https://example.com" target="_blank" rel="noopener">Listen on Spotify (38 min, opens in a new tab) &rarr;</a></div>
</div>
```

### Black "Watch For" band

```html
<div style="background: #1A1A1A; padding: 28px 36px;">
    <h2 style="color: #d4af37; font-family: Arial,sans-serif; font-size: 22px; margin: 0 0 16px 0;">As You Go Through This Unit, Watch For&hellip;</h2>
    <ul style="color: #f5f1e8; font-size: 17px; margin: 0; padding-left: 22px;">
        <li style="margin-bottom: 10px;"><strong style="color: #d4af37;">Short label.</strong> One or two sentences of guidance.</li>
        <li style="margin: 0;"><strong style="color: #d4af37;">Last label.</strong> Closing sentence.</li>
    </ul>
</div>
```

### Footer

```html
<div style="text-align: center; color: #6b6b6b; font-size: 13px; font-family: Arial,sans-serif; margin-top: 28px; padding-bottom: 8px;">HIST 101 &middot; Richland Community College &middot; Chapter 13 Classroom Resources</div>
```

---

## 6. WCAG 2.2 AA audit of the source page

Contrast was computed from the actual sRGB relative-luminance formula (WCAG 2). Normal text needs 4.5:1. Large text (24px regular, or 18.66px bold) needs 3:1. User-interface components and meaningful graphical objects need 3:1 (1.4.11).

### Text contrast

Almost every pair in the source already passes, including gold `#D4AF37` at 17px on `#1A1A1A` (8.28:1), takeaway `#8B6914` at 23px on `#fff8e7` (4.80:1), all four card kickers, all filled buttons used in the source, `#555` italics, `#1C5A57` links, and the `#6b6b6b` footer on white (5.33:1).

**One text failure:**

| Pair | Size | Ratio | Need | Fix |
|---|---|---|---|---|
| `#2C7873` on `#1A1A1A` (header kicker) | 13px, normal | **3.35:1** | 4.5:1 | Use `#3A9B94` (5.22:1). The closest passing lightness-matched value is `#348F89` at 4.51:1; `#3A9B94` keeps the teal hue and leaves a little headroom. This lighter teal is for dark backgrounds only. |

### Non-text contrast

Meaningful left borders on the intro band and on the four lecture cards all pass 3:1, as do the heading underlines and every filled button against the band it actually sits on.

**Failures, with how to treat them:**

| Pair | Ratio | Need | Treatment |
|---|---|---|---|
| `#D4AF37` double border on takeaway `#fff8e7` | **1.99:1** | 3:1 | The box is also identified by typography, but the gold frame is the visual cue that this is the takeaway. Use `#A78824` (3.20:1). |
| `#D4AF37` fill button on white | **2.10:1** | 3:1 | The source does not do this (gold buttons sit on `#1C3A3A`, 5.82:1). Rule: gold fill buttons only on dark bands. On light bands, use a teal, brown, purple, or red fill. |
| Hairline edges `#E0DAC8`, `#cfe3e1`, `#122929` on their bands | 1.20–1.40:1 | 3:1 if meaningful | Decorative only. Leave them. Do not use these hairlines as the only way to tell a band or control apart. |

### Structure, links, and other checks

- **Headings.** The source styles the page title and every lecture-card title as `div`s, so the heading outline starts at `h2` and skips the card titles. New pages use one `h1` in the header and `h3` for card titles.
- **Link text.** The source buttons are clear ("Open the Lecture 1 deck"). Keep that pattern. Never use "click here."
- **Symbols.** The Spotify button starts with "▶". A screen reader may announce that as "black right-pointing triangle" (or ignore it). The visible words already do the work, so omit the symbol. If you keep a decorative character, it must sit next to visible words; do not use it alone.
- **`target="_blank"`. ** The source opens Spotify in a new tab and does not say so. When you use `target="_blank"` (with `rel="noopener"`), say "opens in a new tab" in the visible link text. Course links on the source stay in the same tab; that is a fine default.
- **Color as the only indicator.** Lecture cards combine a colored edge with a text kicker ("LECTURE 1"), so color is not the only cue. Keep that pairing. Text links must stay underlined, as noted above.
- **Em dashes.** The source uses them in titles, body copy, and the "Go Deeper" list (`&mdash;`). HIST 101 materials do not use em dashes. New pages follow the writing rule below. This audit does not rewrite the saved source page.
- **Content notes, not style notes.** The source still describes Lecture 1's Pierian Spring as required independent study with a Check Yourself quiz, and it tells students to type answers on Lecture 2's Pause & Reflect slides. As of November 2026, HIST 101 Chapter 13 no longer uses those patterns (see writing rules). The Lecture 3 card is also out of date: it still treats the older Uncle Tom's Cabin Study Buddy deck as Lecture 3. Those are content updates for the overview page, left untouched here.

---

## 7. Writing rules (HIST 101 Canvas pages)

- **No em dashes.** Use a comma, a colon, a period, or "to." En dashes in date ranges (1845–1860, or `&ndash;`) are fine.
- **Plain language** for first-year students. Short sentences. Name the thing students will click or open.
- **Buttons say where they go.** "Open the Lecture 4 deck," "Open the primary source packet," "Open the Part Two quiz."
- **Independent Study**, as of November 2026, is optional enrichment in HIST 101, with nothing to turn in. Do not call it required. Do not call it "optional" in a way that implies a hidden requirement. "Optional enrichment. Nothing there is turned in" is the current wording.
- **No Pause & Reflect prompts and no review questions** in HIST 101 Chapter 13 going forward. The interactive work students do is the quizzes and the primary source packet.
- **Do not invent submission steps.** Packet Reading Checks are self-check only and are not turned in. What gets uploaded is the file the page actually exports.

---

## 8. What this file is not

It is not a Reveal.js deck guide. Deck typography (Crimson Pro, Lora, or course overrides), permanent slide letters, Study Buddy notes, and divider colors stay in the deck-base document and in each course's deck conventions. Green remains the Independent Study color in HIST 101 decks; this Canvas palette does not use that green for page bands.
