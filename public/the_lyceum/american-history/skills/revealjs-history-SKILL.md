---
name: revealjs-history
description: Create Reveal.js presentation decks for all history courses — HIST 101 (U.S. History I), HIST 102 (U.S. History II), and HIST 270 (History of China). Use when the user needs interactive HTML slide presentations for any history topic, including Colonial era, Revolution, Antebellum, Civil War, Reconstruction, Gilded Age, Progressive Era, 20th century U.S., AND Chinese history (Bronze Age, dynasties, philosophy, imperial systems). Trigger whenever the user mentions HIST 101, HIST 102, HIST 270, U.S. history slides, Chinese history slides, or any history lecture. Optimized for HD TV (16:9), small classrooms (4 rows), high-contrast Antique Gold / Deep Teal / Rich Purple on dark charcoal. Includes presenter notes, interactive pop-ups, image URL embedding, slide counter, keyboard overlay, and student-facing notes.
---

# Reveal.js for History Courses (HIST 101, 102, 270)

Create professional, interactive Reveal.js presentations tailored for community college history courses — U.S. History survey (101/102) and History of China (270).

## Design Specifications

### Display & Format
- **Aspect ratio**: 16:9 (1920×1080, optimized for HD TV)
- **Classroom size**: Small (4 rows)
- **Navigation**: Horizontal slides only (no vertical slides)
- **Output**: Single standalone HTML file with CDN links
- **Margin**: 0.08 (tighter than default to maximize slide real estate)

### Color Palette

A warm, high-contrast palette of antique gold, deep teal, and rich purple on dark charcoal. Evokes authority, historical weight, and scholarly elegance while maintaining excellent readability on HDTV displays.

**Primary Colors:**
- **Antique Gold**: `#D4AF37` — Headers, `<strong>` text, column headers, timeline years, emphasis
- **Deep Teal**: `#2C7873` — Pop-up triggers, `<em>` text, subtitle text, bottom-text italic, list bullets (◆)
- **Dark Charcoal**: `#1A1A1A` — Primary background
- **Pure White**: `#FAFAFA` — Body text, list items

**Accent Colors:**
- **Rich Purple**: `#6B4C9A` — Key terms, definition terms in pop-ups
- **Ruby Crimson**: `#9B2C2C` — Pop-up close buttons, dramatic emphasis, warnings
- **Soft Cream**: `#F5F1E8` — Pop-up backgrounds (light-on-dark inversion for readability)
- **Bronze Accent**: `#8B6F47` — Pop-up borders, secondary decorative elements

### Typography
- **Headers**: `'Crimson Pro'`, serif — weight 700, loaded from Google Fonts
- **Body text**: `'Lora'`, serif — weights 400, 600, italic 400 — loaded from Google Fonts
- **Base font size**: `1.3em` on `.reveal`

### Font Size Standards (Inline Styles on Slides)

Because Reveal.js renders at 1920×1080, font sizes must be set with inline styles to display correctly on classroom HDTVs. These are the standard sizes:

| Element | Inline font-size | Notes |
|---------|------------------|-------|
| `<h2>` | `4.5em` – `5.0em` | Use 4.5em for longer titles, 5.0em for short ones |
| `<ul>` or `<li>` content | `2.0em` | Standard body content in lists |
| `.column-header` | `2.5em` | Section labels within slides |
| `.bottom-text` / `.bottom-text-bold` | `1.8em` | Takeaway lines at bottom of slides |
| `.large-text` container | `2.0em` | For centered text-heavy slides |
| Sub-text under `.large-text` | `0.85em` (relative) | Explanatory lines under main points |

**CRITICAL**: Always apply these sizes as inline `style="font-size: X"` attributes on the elements themselves. The CSS base sizes alone are too small for classroom display. Every `<ul>`, every `.column-header`, every `.bottom-text` must have an explicit inline font-size.

## Required CDN Resources

Use Reveal.js 4.5.0 from cdnjs.cloudflare.com (NOT jsdelivr):

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

<!-- JS (before closing </body>) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/plugin/notes/notes.min.js"></script>
```

## Reveal.js Initialization

```javascript
Reveal.initialize({
    width: 1920,
    height: 1080,
    margin: 0.08,
    minScale: 0.2,
    maxScale: 2.0,
    hash: true,
    slideNumber: false,
    transition: 'slide',
    plugins: [ RevealNotes ]
});
```

Note: `slideNumber: false` because we use a custom slide counter instead.

## Standard HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Lecture Topic] - [HIST 101/102/270]</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

    <style>
        /* Full CSS goes here — see Complete CSS section */
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <!-- Slides go here -->
        </div>
    </div>

    <!-- GLOBAL UI (outside Reveal transforms) -->
    <div id="keyboard-trigger" class="popup-trigger" data-popup="keyboard-popup"
         style="position: fixed; top: 20px; right: 20px; font-size: 2em; cursor: pointer; z-index: 100;">⌨️</div>

    <div id="keyboard-popup" class="popup">
        <span class="popup-close">&times;</span>
        <div class="definition-term">Keyboard Shortcuts</div>
        <p>→ / Space: Next slide</p>
        <p>← : Previous slide</p>
        <p>S: Speaker notes</p>
        <p>F: Fullscreen</p>
        <p>O: Overview</p>
        <p>ESC: Exit/Close</p>
    </div>

    <div class="slide-counter"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/plugin/notes/notes.min.js"></script>

    <script>
        Reveal.initialize({
            width: 1920,
            height: 1080,
            margin: 0.08,
            minScale: 0.2,
            maxScale: 2.0,
            hash: true,
            slideNumber: false,
            transition: 'slide',
            plugins: [ RevealNotes ]
        });

        // Slide counter
        function updateSlideCounter() {
            const current = Reveal.getState().indexh + 1;
            const total = Reveal.getTotalSlides();
            document.querySelector('.slide-counter').textContent = `${current}/${total}`;
        }
        Reveal.on('slidechanged', updateSlideCounter);
        updateSlideCounter();

        // Pop-up functionality (delegated events)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('popup-trigger')) {
                const popupId = e.target.getAttribute('data-popup');
                const el = document.getElementById(popupId);
                if (el) el.classList.add('active');
            }
            if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup')) {
                document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            }
        });
    </script>
</body>
</html>
```

## Complete CSS

Include this entire CSS block in the `<style>` tag:

```css
:root {
    --antique-gold: #D4AF37;
    --deep-teal: #2C7873;
    --rich-purple: #6B4C9A;
    --ruby-crimson: #9B2C2C;
    --dark-charcoal: #1A1A1A;
    --pure-white: #FAFAFA;
    --soft-cream: #F5F1E8;
    --bronze-accent: #8B6F47;
}

.reveal {
    font-family: 'Lora', serif;
    font-size: 1.3em;
    background-color: var(--dark-charcoal);
    color: var(--pure-white);
}

.reveal h1, .reveal h2, .reveal h3 {
    font-family: 'Crimson Pro', serif;
    font-weight: 700;
    color: var(--antique-gold);
    text-transform: none;
}

.reveal h1 { font-size: 3.2em; }
.reveal h2 { font-size: 2.2em; margin-bottom: 0.5em; }
.reveal h3 { font-size: 1.6em; }

/* List styling — custom diamond bullets */
.reveal ul {
    list-style: none;
    padding-left: 0;
}

.reveal ul li {
    margin-bottom: 0.4em;
    font-size: 0.95em;
}

.reveal ul li:before {
    content: "◆ ";
    color: var(--deep-teal);
    font-weight: bold;
    margin-right: 0.5em;
}

/* Global inline element styling */
strong {
    color: var(--antique-gold);
}

em {
    color: var(--deep-teal);
    font-style: italic;
}

/* === POP-UP SYSTEM === */
.popup-trigger {
    color: var(--deep-teal);
    border-bottom: 2px dotted var(--deep-teal);
    cursor: pointer;
    transition: color 0.3s;
}

.popup-trigger:hover {
    color: var(--antique-gold);
}

.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--soft-cream);
    color: var(--dark-charcoal);
    padding: 2em;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    max-width: 600px;
    max-height: 70%;
    overflow-y: auto;
    z-index: 1000;
    border: 3px solid var(--bronze-accent);
}

.popup.active {
    display: block;
}

.popup-close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2em;
    cursor: pointer;
    color: var(--ruby-crimson);
}

.definition-term {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--rich-purple);
    margin-bottom: 0.5em;
    font-family: 'Crimson Pro', serif;
}

.key-term {
    color: var(--rich-purple);
    font-weight: 600;
}

/* === SLIDE COUNTER === */
.slide-counter {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(26, 26, 26, 0.9);
    color: var(--antique-gold);
    padding: 8px 15px;
    border-radius: 8px;
    font-family: 'Crimson Pro', serif;
    font-weight: 600;
    font-size: 0.9em;
    border: 2px solid var(--deep-teal);
    z-index: 100;
}

/* === LAYOUT CLASSES === */

/* Two equal columns */
.two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    align-items: start;
}

/* Three equal columns */
.three-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5em;
    align-items: start;
}

/* Text on left, image on right (or vice versa) */
.content-image-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    align-items: center;
}

.content-image-layout .content-side {
    text-align: left;
}

.content-image-layout .image-side {
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-image-layout .image-side img {
    max-width: 100%;
    max-height: 560px;
    object-fit: contain;
    border-radius: 6px;
}

/* Column sub-headers within a slide */
.column-header {
    font-weight: 700;
    color: var(--antique-gold);
    font-size: 1.1em;
    margin-bottom: 0.5em;
    font-family: 'Crimson Pro', serif;
}

/* Bottom takeaway lines */
.bottom-text {
    margin-top: 1.2em;
    font-style: italic;
    color: var(--deep-teal);
    font-size: 0.9em;
}

.bottom-text-bold {
    margin-top: 1.2em;
    font-weight: 700;
    color: var(--antique-gold);
    font-size: 0.95em;
}

/* Subtitle (under h2 on title/section slides) */
.subtitle {
    font-size: 1.1em;
    color: var(--deep-teal);
    margin-top: 0.5em;
}

/* Centered large text for text-heavy slides */
.large-text {
    font-size: 1.3em;
    text-align: center;
    line-height: 1.6;
}

/* === CONTENT BOXES === */

/* Callout/emphasis box */
.callout {
    background: rgba(212, 175, 55, 0.15);
    border-left: 5px solid var(--antique-gold);
    padding: 1.2em;
    margin: 1em 0;
    font-size: 0.9em;
}

/* Primary source quote */
.primary-source {
    background: rgba(212, 175, 55, 0.1);
    border-left: 5px solid var(--antique-gold);
    padding: 1em;
    margin: 1em 0;
    font-style: italic;
    color: var(--pure-white);
}

.primary-source-attribution {
    text-align: right;
    font-size: 0.9em;
    color: var(--bronze-accent);
    margin-top: 0.5em;
    font-style: normal;
}

/* Timeline items */
.timeline-item {
    margin-bottom: 0.6em;
}

.timeline-year {
    color: var(--antique-gold);
    font-weight: 700;
}

/* Assessment/quiz box */
.assessment-box {
    background: rgba(44, 120, 115, 0.15);
    border: 2px solid var(--deep-teal);
    border-radius: 10px;
    padding: 1.5em;
    margin: 1em 0;
}

.assessment-box h3 {
    color: var(--deep-teal);
    margin-top: 0;
}

/* Image placeholder */
.img-placeholder {
    background: rgba(139, 111, 71, 0.2);
    border: 3px dashed var(--bronze-accent);
    padding: 3em;
    text-align: center;
    color: var(--bronze-accent);
    font-style: italic;
    border-radius: 10px;
}

/* Centered list (for non-standard list layouts) */
.centered-list {
    text-align: center;
    font-size: 1.1em;
}

.centered-list li {
    margin-bottom: 0.7em;
}
```

## Interactive Pop-ups

Pop-ups use the `data-popup` attribute and delegated event listeners (NOT inline `onclick`). This keeps the HTML clean and the JS centralized.

### Creating a pop-up trigger + pop-up pair:

```html
<p>The <span class="popup-trigger" data-popup="comstock-popup">Comstock Act</span> 
banned obscene materials from the U.S. mail.</p>

<div id="comstock-popup" class="popup">
    <span class="popup-close">&times;</span>
    <div class="definition-term">Comstock Act (1873)</div>
    <p>Federal law that banned sending "obscene, lewd, or lascivious" materials through 
    the mail. Named for postal inspector Anthony Comstock, who personally enforced it 
    for over 40 years. Classified contraception information as obscene.</p>
</div>
```

Key points:
- The trigger uses `data-popup="[id]"` to reference its pop-up
- The pop-up uses `.definition-term` (styled in Rich Purple) for the term heading
- The pop-up background is Soft Cream with Dark Charcoal text (inverted from slides for readability)
- Close button is Ruby Crimson
- Pop-ups close on: clicking ✕, clicking the overlay, pressing Escape

### Pop-up placement:
- Place pop-up `<div>`s immediately after the `<section>` that contains their trigger, OR
- Collect all pop-ups at the end of the slides `<div>` before the closing `</div>`
- Either approach works; pick one and be consistent within a deck

## Image Handling

Image priority order: **(1) Embed URLs directly → (2) Use local file paths → (3) Placeholders as last resort.**

### Priority 1 — Embed image URLs directly (preferred):
When the user's source material contains image URLs (from Wikimedia Commons, Library of Congress, World History Encyclopedia, museum sites, etc.), embed them directly in `<img src="">` tags. The browser fetches them live — no downloading needed. This is the preferred approach because it produces a complete, visually rich deck immediately.

```html
<div class="content-image-layout">
    <div class="content-side">
        <!-- text content -->
    </div>
    <div class="image-side">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/He_Jin_Qing_illustration.jpg" alt="He Jin Qing dynasty illustration general Eastern Han">
    </div>
</div>
```

**Where to find URLs:** Look in the user's source documents for markdown image syntax `![Image](url)`, raw URLs to image files (.jpg, .png, .webp, .jpeg), or references to specific images. Extract and embed these directly.

**Note for the user:** Embedded URLs require an internet connection during presentation. For offline reliability or long-term archival, download images to a local `images/` folder and update the `src` paths.

### Priority 2 — Local file paths:
When images exist as local files (the user has an `images/` folder or provides file paths):

```html
<div class="image-side">
    <img src="images/filename.png" alt="Descriptive alt text">
</div>
```

### Priority 3 — Placeholders (last resort):
Only use placeholders when no image URL or local file is available:

```html
<div class="image-side">
    <div class="img-placeholder" style="width: 100%; height: 400px;">
        <strong>IMAGE PLACEHOLDER</strong><br>
        <em>Search terms:</em> "Seneca Falls Convention 1848 historical photograph"<br>
        "Elizabeth Cady Stanton women's rights convention"<br><br>
        <em>Suggested sources:</em> Library of Congress, National Archives
    </div>
</div>
```

### Image alt text:
Always write descriptive alt text that doubles as image search guidance, e.g.:
`alt="Anthony Comstock portrait postal inspector 1870s"` or
`alt="Progressive Era factory workers and social hygiene poster"`

## Student-Facing Presenter Notes

Create comprehensive, friendly notes in `<aside class="notes">` tags:

```html
<aside class="notes">
    <h4>📚 What You Need to Know</h4>
    <p>The Market Revolution transformed how Americans worked and lived. Think of it as the 
    1800s version of the Internet Revolution — it changed EVERYTHING about daily life.</p>
    
    <h4>📖 Key Definitions</h4>
    <ul>
        <li><strong>Market Revolution</strong>: The shift from a self-sufficient agricultural 
        economy to a market-based economy where people bought and sold goods</li>
        <li><strong>Transportation Revolution</strong>: Building of canals, roads, and 
        railroads that connected regions</li>
    </ul>
    
    <h4>💭 Context & Connections</h4>
    <p>This happened roughly 1815-1860. Before this, most Americans lived on farms and made 
    most of what they needed. After, they worked for wages and bought goods at stores. 
    This connects to: industrialization, urbanization, immigration, and slavery expansion.</p>
    
    <h4>🎓 Senior Historians' Corner</h4>
    <p><strong>Charles Sellers</strong> argues the Market Revolution created deep anxieties 
    about losing independence and traditional ways of life. <strong>Daniel Walker Howe</strong> 
    emphasizes how new communication technologies (like the telegraph) changed American culture.</p>
    
    <h4>🤔 Discussion Prompts</h4>
    <ul>
        <li>How would your daily life be different without a market economy?</li>
        <li>What modern technology has had a similar transformative effect?</li>
    </ul>
</aside>
```

## Slide Layout Patterns

### Pattern 1: Content + Image (most common)

Text on left, image on right. The workhorse layout.

```html
<section>
    <h2 style="font-size: 5.0em;">Slide Title Here</h2>
    <div class="content-image-layout">
        <div class="content-side">
            <div class="column-header" style="font-size: 2.5em;">Section Label</div>
            <ul style="font-size: 2.0em;">
                <li>Point one</li>
                <li>Point two</li>
                <li>Point three</li>
            </ul>
            <div class="column-header" style="margin-top: 0.6em; font-size: 2.5em;">Second Section</div>
            <ul style="font-size: 2.0em;">
                <li>More points</li>
                <li>Additional detail</li>
            </ul>
        </div>
        <div class="image-side">
            <img src="images/slide_image.png" alt="Descriptive alt text for image search">
        </div>
    </div>
</section>
```

### Pattern 2: Two-Column Comparison

Equal columns, no image. Good for before/after, two systems, two perspectives.

```html
<section>
    <h2 style="font-size: 5.0em;">Two Things Compared</h2>
    <div class="two-column">
        <div>
            <div class="column-header" style="font-size: 2.5em;">Column A</div>
            <ul style="font-size: 2.0em;">
                <li>Point one</li>
                <li>Point two</li>
                <li>Point three</li>
            </ul>
        </div>
        <div>
            <div class="column-header" style="font-size: 2.5em;">Column B</div>
            <ul style="font-size: 2.0em;">
                <li>Point one</li>
                <li>Point two</li>
                <li>Point three</li>
            </ul>
        </div>
    </div>
    <div class="bottom-text" style="font-size: 1.8em;">
        Italicized takeaway connecting the two columns
    </div>
</section>
```

### Pattern 3: Three-Column Comparison

For showing evolution, three perspectives, or three time periods.

```html
<section>
    <h2 style="font-size: 4.5em;">Three-Part Evolution</h2>
    <div class="three-column">
        <div>
            <div class="column-header" style="font-size: 2.5em;">Period One</div>
            <ul style="font-size: 2.0em;">
                <li>Detail</li>
                <li>Detail</li>
            </ul>
        </div>
        <div>
            <div class="column-header" style="font-size: 2.5em;">Period Two</div>
            <ul style="font-size: 2.0em;">
                <li>Detail</li>
                <li>Detail</li>
            </ul>
        </div>
        <div>
            <div class="column-header" style="font-size: 2.5em;">Period Three</div>
            <ul style="font-size: 2.0em;">
                <li>Detail</li>
                <li>Detail</li>
            </ul>
        </div>
    </div>
</section>
```

### Pattern 4: Timeline

Inline timeline using styled list items.

```html
<section>
    <h2 style="font-size: 4.5em;">Road to [Event]</h2>
    <ul style="font-size: 2.0em;">
        <li class="timeline-item"><span class="timeline-year">1820:</span> Missouri Compromise—"Balance free and slave states"</li>
        <li class="timeline-item"><span class="timeline-year">1850:</span> Compromise of 1850—"Includes Fugitive Slave Act"</li>
        <li class="timeline-item"><span class="timeline-year">1854:</span> Kansas-Nebraska Act—"Popular sovereignty leads to violence"</li>
    </ul>
</section>
```

### Pattern 5: Large Text / Thesis Slide

For rhetorical emphasis, bridge slides, cliffhangers, and thesis statements.

```html
<section>
    <h2 style="font-size: 4.5em;">The Big Question</h2>
    <div class="large-text" style="font-size: 2.0em;">
        <p><strong>1.</strong> First major point</p>
        <p style="font-size: 0.85em; margin-top: 0.3em;">(supporting detail in smaller text)</p>
        <p style="margin-top: 0.8em;"><strong>2.</strong> Second major point</p>
        <p style="font-size: 0.85em; margin-top: 0.3em;">(supporting detail)</p>
    </div>
</section>
```

### Pattern 6: Primary Source Quote

```html
<section>
    <h2 style="font-size: 5.0em;">Frederick Douglass on Slavery</h2>
    <div class="primary-source" style="font-size: 2.0em;">
        "I have often been utterly astonished, since I came to the north, to find persons 
        who could speak of the singing, among slaves, as evidence of their contentment 
        and happiness."
        <div class="primary-source-attribution">
            — <em style="color: var(--bronze-accent);">Narrative of the Life of Frederick Douglass</em>, 1845
        </div>
    </div>
</section>
```

### Pattern 7: Assessment Break

```html
<section>
    <h2 style="font-size: 5.0em;">📝 Check Your Understanding</h2>
    <div class="assessment-box" style="font-size: 2.0em;">
        <h3 style="font-size: 1.2em;">Quick Question</h3>
        <p>Which organization was primarily responsible for placing Confederate monuments 
        in Southern courthouse squares during the 1890s-1920s?</p>
        <ol style="list-style-type: upper-alpha;">
            <li>United Confederate Veterans (UCV)</li>
            <li>United Daughters of the Confederacy (UDC)</li>
            <li>Sons of Confederate Veterans (SCV)</li>
            <li>Ku Klux Klan</li>
        </ol>
    </div>
    <aside class="notes">
        <p><strong>Answer: B</strong> — The UDC was the primary organization behind the first wave 
        of Confederate monument construction, particularly in prominent public spaces.</p>
    </aside>
</section>
```

### Pattern 8: Section Divider

```html
<section data-background="linear-gradient(135deg, #2C7873 0%, #1A1A1A 100%)">
    <h2 style="font-size: 5.0em;">Part II</h2>
    <div class="subtitle" style="font-size: 2.5em;">The Counterrevolution</div>
    <p style="color: var(--bronze-accent); font-style: italic; font-size: 2.0em;">
        Why violence succeeded in overthrowing Reconstruction
    </p>
</section>
```

### Pattern 9: Title Slide (with background image)

```html
<section data-background="images/title_slide.png"
         data-background-size="cover"
         data-background-position="center"
         data-background-repeat="no-repeat">
</section>
```

When no background image is available, use a text-based title:
```html
<section>
    <h1 style="font-size: 6.0em;">Lecture Title</h1>
    <div class="subtitle" style="font-size: 2.5em;">HIST 101 — Chapter X, Lecture Y</div>
</section>
```

## Output Instructions

1. **Always create a complete, functional HTML file** that opens directly in a browser
2. **Use cdnjs.cloudflare.com** for Reveal.js 4.5.0 (CSS, JS, notes plugin)
3. **Include the keyboard shortcut overlay** (⌨️ icon, top-right)
4. **Include the slide counter** (bottom-right, gold on charcoal)
5. **Include comprehensive presenter notes** for every substantive slide
6. **Apply inline font sizes** on every content element (h2, ul, column-header, bottom-text)
7. **Use `data-popup` attribute** for pop-up triggers (not inline onclick)
8. **Embed image URLs from source material** — extract and use URLs directly rather than creating placeholders
9. **Create descriptive image alt text** with search terms when applicable
10. **Use pop-ups liberally** for terms, concepts, or additional context
11. **Keep slides uncluttered** — use pop-ups and notes for depth, not the slide face

## Best Practices

- **One main idea per slide** — elaborate in pop-ups and notes
- **Inline font sizes on everything** — CSS base sizes are for fallback only
- **h2 at 4.5em–5.0em** — this is non-negotiable for classroom visibility
- **Strong color contrast** — Pure White text on Dark Charcoal background
- **Antique Gold for headers and `<strong>`** — creates visual hierarchy
- **Deep Teal for `<em>` and interactive elements** — draws attention to clickable content
- **Rich Purple for key terms** — distinct from gold/teal, signals vocabulary
- **bottom-text for takeaways** — italic teal for reflective, bold gold for assertive
- **content-image-layout as the default** — most slides should have text + image
- **Historical accuracy** — cite sources in notes when referencing scholars
- **Dark background** — reduces eye strain on HDTV displays during 50-minute lectures

## Color Usage Quick Reference

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Charcoal | `#1A1A1A` |
| H1/H2 Headers | Antique Gold | `#D4AF37` |
| Body Text | Pure White | `#FAFAFA` |
| `<strong>` globally | Antique Gold | `#D4AF37` |
| `<em>` globally | Deep Teal | `#2C7873` |
| Key Terms | Rich Purple | `#6B4C9A` |
| List Bullets (◆) | Deep Teal | `#2C7873` |
| Pop-up Triggers | Deep Teal | `#2C7873` |
| Pop-up Background | Soft Cream | `#F5F1E8` |
| Pop-up Text | Dark Charcoal | `#1A1A1A` |
| Pop-up Border | Bronze Accent | `#8B6F47` |
| Pop-up Close Button | Ruby Crimson | `#9B2C2C` |
| Definition Terms | Rich Purple | `#6B4C9A` |
| Column Headers | Antique Gold | `#D4AF37` |
| Timeline Years | Antique Gold | `#D4AF37` |
| Bottom Text (italic) | Deep Teal | `#2C7873` |
| Bottom Text (bold) | Antique Gold | `#D4AF37` |
| Slide Counter | Antique Gold on Charcoal | `#D4AF37` |
| Slide Counter Border | Deep Teal | `#2C7873` |
| Source Attribution | Bronze Accent | `#8B6F47` |
| Dramatic Emphasis | Ruby Crimson | `#9B2C2C` |
