---
name: history-slides
description: Create Reveal.js presentation decks for all history courses — HIST 101 (U.S. History I), HIST 102 (U.S. History II), and HIST 270 (History of China). Use when the user needs interactive HTML slide presentations for any history topic, including Colonial era, Revolution, Antebellum, Civil War, Reconstruction, Gilded Age, Progressive Era, 20th century U.S., AND Chinese history (Bronze Age, dynasties, philosophy, imperial systems). Trigger whenever the user mentions HIST 101, HIST 102, HIST 270, U.S. history slides, Chinese history slides, or any history lecture. Optimized for HD TV (16:9), small classrooms (4 rows), high-contrast Antique Gold / Deep Teal / Rich Purple on dark charcoal. Includes presenter notes, interactive pop-ups, image URL embedding, slide counter, keyboard overlay, and student-facing notes.
---
# Reveal.js for History Courses (HIST 101, 102, 270)
Create professional, interactive Reveal.js presentations for community college history courses.
> **Note**: A legacy skill named `revealjs-history` may also be present. It is a duplicate and this skill (`history-slides`) is authoritative. Always use this skill for history course presentations.
## Design Specifications
- **Aspect ratio**: 16:9 (1920×1080, HD TV); horizontal slides only; single HTML file
- **Margin**: 0.08; **Fonts**: Crimson Pro (headers, 700), Lora (body, 400/600); **Base**: 1.3em

### Color Palette
| Name | Hex | Use |
|------|-----|-----|
| Antique Gold | `#D4AF37` | Headers, `<strong>`, column headers, timeline years |
| Deep Teal | `#2C7873` | Pop-up triggers, `<em>`, subtitles, bullets (◆) |
| Dark Charcoal | `#1A1A1A` | Background |
| Pure White | `#FAFAFA` | Body text |
| Rich Purple | `#6B4C9A` | Key terms, definition headings in pop-ups |
| Ruby Crimson | `#9B2C2C` | Pop-up close buttons, dramatic emphasis |
| Soft Cream | `#F5F1E8` | Pop-up backgrounds |
| Bronze Accent | `#8B6F47` | Pop-up borders, captions, attributions |

### Font Size Standards (CRITICAL — always inline)
| Element | Inline font-size |
|---------|-----------------|
| `<h2>` | `4.5em` (long titles) / `5.0em` (short) |
| `<ul>` / `<li>` | `2.0em` |
| `.column-header` | `2.5em` |
| `.bottom-text` / `.bottom-text-bold` | `1.8em` |
| `.large-text` | `2.0em`; sub-text `0.85em` |

**CRITICAL**: Always apply inline `style="font-size: X"` on every content element. CSS base sizes are fallback only.

## CDN Resources (cdnjs.cloudflare.com — NOT jsdelivr)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/plugin/notes/notes.min.js"></script>

```

## Complete CSS
```css
:root {
    --antique-gold:#D4AF37; --deep-teal:#2C7873; --rich-purple:#6B4C9A;
    --ruby-crimson:#9B2C2C; --dark-charcoal:#1A1A1A; --pure-white:#FAFAFA;
    --soft-cream:#F5F1E8; --bronze-accent:#8B6F47; --forest-green:#1B4332;
}
.reveal { font-family:'Lora',serif; font-size:1.3em; background-color:var(--dark-charcoal); color:var(--pure-white); }
.reveal h1,.reveal h2,.reveal h3 { font-family:'Crimson Pro',serif; font-weight:700; color:var(--antique-gold); text-transform:none; }
.reveal h1 { font-size:6.0em; } .reveal h2 { font-size:4.5em; margin-bottom:0.5em; } .reveal h3 { font-size:2.5em; }
.reveal ul { list-style:none; padding-left:0; }
.reveal ul li { margin-bottom:0.4em; font-size:1.0em; }
.reveal ul li:before { content:"◆ "; color:var(--deep-teal); font-weight:bold; margin-right:0.5em; }
strong { color:var(--antique-gold); }
em { color:var(--deep-teal); font-style:italic; }
.popup-trigger { color:var(--deep-teal); border-bottom:2px dotted var(--deep-teal); cursor:pointer; transition:color 0.3s; }
.popup-trigger:hover { color:var(--antique-gold); }
.popup { display:none; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    background:var(--soft-cream); color:var(--dark-charcoal); padding:2em; border-radius:15px;
    box-shadow:0 8px 32px rgba(0,0,0,0.5); max-width:600px; max-height:70%; overflow-y:auto;
    z-index:1000; border:3px solid var(--bronze-accent); }
.popup.active { display:block; }
.popup-close { position:absolute; top:10px; right:15px; font-size:2em; cursor:pointer; color:var(--ruby-crimson); }
.definition-term { font-size:1.5em; font-weight:700; color:var(--rich-purple); margin-bottom:0.5em; font-family:'Crimson Pro',serif; }
.key-term { color:var(--rich-purple); font-weight:600; }
.slide-counter { position:fixed; bottom:20px; right:20px; background:rgba(26,26,26,0.9);
    color:var(--antique-gold); padding:8px 15px; border-radius:8px; font-family:'Crimson Pro',serif;
    font-weight:600; font-size:0.9em; border:2px solid var(--deep-teal); z-index:100; }
.two-column { display:grid; grid-template-columns:1fr 1fr; gap:2em; align-items:start; }
.three-column { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5em; align-items:start; }
.content-image-layout { display:grid; grid-template-columns:1fr 1fr; gap:2em; align-items:center; }
.content-image-layout .content-side { text-align:left; }
.content-image-layout .image-side { display:flex; flex-direction:column; align-items:center; justify-content:center; }
.content-image-layout .image-side img { max-width:100%; max-height:560px; object-fit:contain; border-radius:6px; }
.column-header { font-weight:700; color:var(--antique-gold); font-size:2.5em; margin-bottom:0.5em; font-family:'Crimson Pro',serif; }
.bottom-text { margin-top:1.2em; font-style:italic; color:var(--deep-teal); font-size:1.8em; }
.bottom-text-bold { margin-top:1.2em; font-weight:700; color:var(--antique-gold); font-size:1.8em; }
.subtitle { font-size:2.5em; color:var(--deep-teal); margin-top:0.5em; }
.large-text { font-size:2.0em; text-align:center; line-height:1.6; }
.callout { background:rgba(212,175,55,0.15); border-left:5px solid var(--antique-gold); padding:1.2em; margin:1em 0; font-size:2.0em; }
.primary-source { background:rgba(212,175,55,0.1); border-left:5px solid var(--antique-gold); padding:1em; margin:1em 0; font-style:italic; color:var(--pure-white); font-size:1.8em; }
.primary-source-attribution { text-align:right; font-size:1.6em; color:var(--bronze-accent); margin-top:0.5em; font-style:normal; }
.timeline-item { margin-bottom:0.6em; }
.timeline-year { color:var(--antique-gold); font-weight:700; }
.assessment-box { background:rgba(44,120,115,0.15); border:2px solid var(--deep-teal); border-radius:10px; padding:1.5em; margin:1em 0; }
.assessment-box h3 { color:var(--deep-teal); margin-top:0; }
.img-placeholder { background:rgba(139,111,71,0.2); border:3px dashed var(--bronze-accent); padding:3em; text-align:center; color:var(--bronze-accent); font-style:italic; border-radius:10px; }
.img-caption { font-size:1.4em; color:var(--bronze-accent); font-style:italic; text-align:center; margin-top:0.4em; }
.centered-list { text-align:center; font-size:2.0em; }
.centered-list li { margin-bottom:0.7em; }
```

## Standard HTML Shell
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Topic] - [HIST 101/102/270]</title>
    <!-- CDN links here -->
    <style>/* Full CSS above */</style>
</head>
<body>
    <div class="reveal"><div class="slides"><!-- slides here --></div></div>
    <!-- GLOBAL UI — outside Reveal transforms -->
    <div id="keyboard-trigger" class="popup-trigger" data-popup="keyboard-popup"
         style="position:fixed;top:20px;right:20px;font-size:2em;cursor:pointer;z-index:100;">⌨️</div>
    <div id="keyboard-popup" class="popup">
        <span class="popup-close">&times;</span>
        <div class="definition-term">Keyboard Shortcuts</div>
        <p>→ / Space: Next &nbsp; ← : Previous &nbsp; S: Notes &nbsp; F: Fullscreen &nbsp; O: Overview &nbsp; ESC: Close</p>
    </div>
    <div class="slide-counter"></div>
    <!-- JS CDN links here -->
    <script>
        Reveal.initialize({ width:1920, height:1080, margin:0.08, minScale:0.2, maxScale:2.0,
            hash:true, slideNumber:false, transition:'slide', plugins:[RevealNotes] });
        function updateSlideCounter() {
            const c = Reveal.getState().indexh+1, t = Reveal.getTotalSlides();
            document.querySelector('.slide-counter').textContent = `${c}/${t}`;
        }
        Reveal.on('slidechanged', updateSlideCounter); updateSlideCounter();
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('popup-trigger')) {
                const el = document.getElementById(e.target.getAttribute('data-popup'));
                if (el) el.classList.add('active');
            }
            if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup'))
                document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        });
    </script>
</body>
</html>
```

## Pop-up System
Use `data-popup` attribute (NOT inline onclick). Place pop-up divs after their section or collected before `</div>` closing slides.
```html
<p>The <span class="popup-trigger" data-popup="term-popup">Comstock Act</span> banned obscene mail.</p>
<div id="term-popup" class="popup">
    <span class="popup-close">&times;</span>
    <div class="definition-term">Comstock Act (1873)</div>
    <p>Definition text here.</p>
</div>
```
Pop-ups close on: ✕ click, overlay click, or Escape key.

## Image Handling
Priority: **(1) Wikimedia Commons → (2) Direct URLs → (3) Local paths → (4) Placeholder**

Always use `onerror` fallback on every `<img>` tag.

### Wikimedia Commons — 3-Step Workflow
Wikimedia URLs contain an MD5-based directory prefix that **cannot be guessed**. Always follow these steps.

**Step 1 — Find the exact filename**
Search: `site:commons.wikimedia.org [description]`
The result title gives the exact filename (e.g., `File:Battle_of_Antietam_by_Kurz_and_Allison.jpg`). Case, punctuation, and underscores all matter.

**Step 2 — Compute the MD5 path**
```bash
python3 -c "
import hashlib
key = 'Exact_Filename_Here.jpg'
md5 = hashlib.md5(key.encode()).hexdigest()
print(f'URL: https://upload.wikimedia.org/wikipedia/commons/{md5[0]}/{md5[:2]}/{key}')
"
```

**Step 3 — Embed with onerror fallback**
```html
<div class="image-side">
    <img src="https://upload.wikimedia.org/wikipedia/commons/[x]/[xy]/Exact_Filename.jpg"
         alt="Descriptive alt text with search terms"
         style="max-width:100%;max-height:560px;object-fit:contain;border-radius:6px;"
         onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
    <div class="img-placeholder" style="width:100%;height:300px;">📸 Fallback description</div>
    <p class="img-caption">Title · Date · Public Domain · Wikimedia Commons</p>
</div>
```
**License**: Pre-1928 = public domain. Post-1928 requires CC-BY, CC0, or equivalent — verify on Commons file page.

### Other Sources
Same `onerror` pattern for Library of Congress, museum sites, or local `images/` paths. Use descriptive alt text that doubles as search guidance: `alt="Progressive Era factory child labor photograph Lewis Hine"`.

### Placeholder (last resort)
```html
<div class="img-placeholder" style="width:100%;height:400px;">
    <strong>IMAGE PLACEHOLDER</strong><br>
    <em>Search:</em> "Seneca Falls Convention 1848 historical photograph"<br>
    <em>Sources:</em> Library of Congress, National Archives, Wikimedia Commons
</div>
```

## Slide Layout Patterns

### Pattern 1: Content + Image (default)
```html
<section>
    <h2 style="font-size:5.0em;">Title</h2>
    <div class="content-image-layout">
        <div class="content-side">
            <div class="column-header" style="font-size:2.5em;">Section Label</div>
            <ul style="font-size:2.0em;"><li>Point</li><li>Point</li></ul>
        </div>
        <div class="image-side">
            <img src="[url]" alt="[descriptive]" style="max-width:100%;max-height:560px;object-fit:contain;border-radius:6px;"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
            <div class="img-placeholder" style="width:100%;height:300px;">📸 Fallback</div>
            <p class="img-caption">Caption · Date · License · Source</p>
        </div>
    </div>
</section>
```

### Pattern 2: Two-Column Comparison
```html
<section>
    <h2 style="font-size:5.0em;">A vs. B</h2>
    <div class="two-column">
        <div><div class="column-header" style="font-size:2.5em;">Column A</div><ul style="font-size:2.0em;"><li>Point</li></ul></div>
        <div><div class="column-header" style="font-size:2.5em;">Column B</div><ul style="font-size:2.0em;"><li>Point</li></ul></div>
    </div>
    <div class="bottom-text" style="font-size:1.8em;">Takeaway connecting the two columns</div>
</section>
```

### Pattern 3: Three-Column
```html
<section>
    <h2 style="font-size:4.5em;">Three-Part Evolution</h2>
    <div class="three-column">
        <div><div class="column-header" style="font-size:2.5em;">Period One</div><ul style="font-size:2.0em;"><li>Detail</li></ul></div>
        <div><div class="column-header" style="font-size:2.5em;">Period Two</div><ul style="font-size:2.0em;"><li>Detail</li></ul></div>
        <div><div class="column-header" style="font-size:2.5em;">Period Three</div><ul style="font-size:2.0em;"><li>Detail</li></ul></div>
    </div>
</section>
```

### Pattern 4: Timeline
```html
<section>
    <h2 style="font-size:4.5em;">Road to [Event]</h2>
    <ul style="font-size:2.0em;">
        <li class="timeline-item"><span class="timeline-year">1820:</span> Missouri Compromise — balance free/slave states</li>
        <li class="timeline-item"><span class="timeline-year">1850:</span> Compromise of 1850 — includes Fugitive Slave Act</li>
        <li class="timeline-item"><span class="timeline-year">1854:</span> Kansas-Nebraska Act — popular sovereignty → violence</li>
    </ul>
</section>
```

### Pattern 5: Large Text / Thesis
```html
<section>
    <h2 style="font-size:4.5em;">The Big Question</h2>
    <div class="large-text" style="font-size:2.0em;">
        <p><strong>1.</strong> First major point</p>
        <p style="font-size:0.85em;margin-top:0.3em;">(supporting detail)</p>
        <p style="margin-top:0.8em;"><strong>2.</strong> Second major point</p>
        <p style="font-size:0.85em;margin-top:0.3em;">(supporting detail)</p>
    </div>
</section>
```

### Pattern 6: Primary Source Quote
```html
<section>
    <h2 style="font-size:5.0em;">Source Title</h2>
    <div class="primary-source" style="font-size:2.0em;">
        "Quote text here."
        <div class="primary-source-attribution">— <em style="color:var(--bronze-accent);">Source Title</em>, Year</div>
    </div>
</section>
```

### Pattern 7: Assessment Break (inline use — for activity slides mid-lecture)
```html
<section>
    <h2 style="font-size:5.0em;">📝 Check Your Understanding</h2>
    <div class="assessment-box" style="font-size:2.0em;">
        <h3 style="font-size:1.2em;">Quick Question</h3>
        <p>Question text?</p>
        <ol style="list-style-type:upper-alpha;"><li>Option A</li><li>Option B</li><li>Option C</li><li>Option D</li></ol>
    </div>
</section>
```

### Pattern 8: Section Divider
**REQUIRED** before every major section (Roman numeral in the lecture outline). Uses forest green background — same as Pause & Reflect — to signal a structural pause to students.
```html
<section data-background="#1B4332">
    <h2 style="font-size:5.0em; color:var(--antique-gold);">Section II</h2>
    <div class="subtitle" style="font-size:2.5em;">Section Title</div>
    <p style="color:var(--bronze-accent);font-style:italic;font-size:2.0em;">Framing question or orienting statement</p>
</section>
```

### Pattern 10: Pause & Reflect
**REQUIRED** after every major section (immediately after the last content slide of each Roman numeral section, before the next Section Divider). Uses forest green background — same as Section Divider — to create a unified "pause" visual language. Use either a thought question OR a 4-option MC question, not both.
```html
<!-- Option A: Thought question -->
<section data-background="#1B4332">
    <h2 style="font-size:5.0em; color:var(--antique-gold);">⏸ Pause & Reflect</h2>
    <div class="large-text" style="font-size:2.2em; margin-top:0.8em;">
        <p style="color:var(--pure-white);">Discussion question drawing on material just covered?</p>
    </div>
</section>

<!-- Option B: Multiple choice -->
<section data-background="#1B4332">
    <h2 style="font-size:5.0em; color:var(--antique-gold);">⏸ Pause & Reflect</h2>
    <div class="assessment-box" style="font-size:2.0em; background:rgba(255,255,255,0.08); border-color:var(--antique-gold);">
        <p style="color:var(--pure-white);">Question text?</p>
        <ol style="list-style-type:upper-alpha; color:var(--pure-white);">
            <li>Option A</li><li>Option B</li><li>Option C</li><li>Option D</li>
        </ol>
    </div>
</section>
```

### Pattern 9: Title Slide
```html
<!-- With background image -->
<section data-background="images/title_slide.png" data-background-size="cover" data-background-position="center"></section>
<!-- Text-based fallback -->
<section>
    <h1 style="font-size:6.0em;">Lecture Title</h1>
    <div class="subtitle" style="font-size:2.5em;">HIST 101 — Chapter X, Lecture Y</div>
</section>
```

## Content & Density Rules

### Bullet limit — 4 per slide
Never exceed 4 bullet points on a single slide. When lecture outline material exceeds 4 points:
- **Split into additional slides** — continue the same topic across 2+ slides with a consistent title (e.g., "The Media Revolution (cont.)")
- **Exception — comparisons**: When content is inherently comparative (before/after, shown/hidden, two sides of an argument), use a two-column layout on one slide even if total bullets exceed 4. The comparison structure IS the meaning — do not split it.

### All outline content stays visible
Every point in the instructor's outline must appear as visible text on a slide. **Never move outline content into pop-ups.** Pop-ups are exclusively for:
- Definitions of terms unfamiliar to first-year college students
- Background context that enriches but is not essential to the main argument
- Historiographical details or scholarly debates

### Required structural slides — every lecture
The following slides are **mandatory** and must appear in every deck in this order:

| Slide | When | Pattern |
|-------|------|---------|
| Title slide | First | Pattern 9 |
| Section Divider | Before each Roman numeral section | Pattern 8 |
| Content slides | Per section, max 4 bullets each | Patterns 1–6 |
| Pause & Reflect | After each Roman numeral section | Pattern 10 |

**Sequence within each section:**
```
[Section Divider] → [Content Slides] → [Pause & Reflect]
```

## Presenter Notes
**Do NOT include `<aside class="notes">` on any slide.** Presenter notes are managed by a separate skill and must not be generated here.

## Output Checklist
1. Complete, functional single HTML file
2. cdnjs.cloudflare.com CDN (not jsdelivr)
3. Keyboard shortcut overlay (⌨️, top-right, fixed position)
4. Slide counter (bottom-right, gold on charcoal)
5. Inline font sizes on every content element
6. `data-popup` triggers (no inline onclick)
7. Wikimedia: search filename → compute MD5 → embed with onerror
8. `onerror` fallback on every `<img>`
9. Descriptive alt text on every image
10. Pop-ups for definitions and background context ONLY — never for outline content
11. Max 4 bullets per slide — split into additional slides if exceeded (exception: comparison layouts)
12. Section Divider slide (Pattern 8, forest green `#1B4332`) before every Roman numeral section
13. Pause & Reflect slide (Pattern 10, forest green `#1B4332`) after every Roman numeral section
14. All lecture outline content visible on slides — nothing hidden in pop-ups
