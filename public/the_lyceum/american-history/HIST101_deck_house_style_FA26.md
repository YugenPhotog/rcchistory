# HIST 101 American History Reveal.js deck house style (FA26)

Locked in on 18 November 2026 from the approved restyle of Bleeding Kansas. Use this file when building or revising a HIST 101 lecture deck. Paste the complete CSS block at the end into the deck's `<style>` element. Copy the markup snippets below rather than inventing new class names.

**Reference deck (approved):** `public/the_lyceum/american-history/presentations/chapter-14/ch14_lecture1_bleeding_kansas_FA26_revised.html`

**Layout source:** the mix of bullets, role-colored highlight boxes, card grids, and full-bleed images comes from REL 210 Ch11 Class 4, Creeds (`rel210-ch11-class04-creeds-salvation-trinity.html`). HIST 101 keeps its own identity: burgundy Part dividers, the forest-green Independent Study divider, gold headings, ⏸ activities, Check Yourself, and Open Study Buddy notes.

The one-off builder that applied this restyle lives at `/workspace/ch14style/build`. New decks should follow this guide, not that script.

## Hard rules

- Reveal.js 4.5, 1920 x 1080, `hash: true`.
- Every slide has a permanent `data-letter` ID. Letters are stable once a deck is taught; do not renumber them later to close a gap.
- Headings are gold (`#D4AF37`, Crimson Pro). Body type is Lora on charcoal (`#1A1A1A`).
- Part dividers use `class="part"` and `data-background-color="#5A1A24"`. That hex is the Part color, even though the `--burgundy` token is `#6B1F2A`.
- The optional Independent Study divider is slide `ff`: `class="divider"`, `id="independent-study"`, `data-background-color="#1B4332"` (forest green), with `.pier-links` to the IS slides and Sources.
- Main lesson includes a ⏸ activity slide (`class="c pause"`) and a ⏸ Check Yourself quiz (`class="c pier-quiz"`, reserved letter `dd`). HIST 101 has no review-question slides.
- Closing is reserved letter `ee`. Independent Study, when used, starts at `ff`. Sources is the last slide, in two columns (`.src-cols`).
- Each slide has an `<aside class="notes">` for Open Study Buddy. The notes end with a paragraph that begins `Takeaway:`.
- Do not use an em dash (Unicode U+2014). Use a comma, a colon, a hyphen, or the words "to" or "through."
- Vary layouts so no two consecutive slides look alike. A Part divider or the Independent Study divider counts as a break, but do not run two full bleeds, two card grids of the same shape, or two image-left splits in a row.
- Full-bleed photo slides are only for strong images that have no critical labels, faces that must stay uncropped, or map detail. Text on a photo must sit on a scrim or a panel so contrast meets WCAG AA.
- Maps are never cropped and never used as a `data-background-image`. Show the whole map in `figure.map` inside `.cols.map-cols`.
- Caption every image. If an image or map was drawn or generated for the lecture, say so in the caption (for example, "not a historical image"). Put a visually hidden `.sr-only` description on bleed backgrounds.

## Identity tokens

| Role | Hex | CSS variable | Where it is used |
| --- | --- | --- | --- |
| Antique gold | `#D4AF37` | `--antique-gold` | Headings, takeaway boxes, gold cards, rules, continue buttons |
| Gold light | `#F2DFA6` | `--gold-light` | Stat figures, quoted phrases (`.q`) |
| Deep teal | `#2C7873` | `--deep-teal` | Links, diamond bullets, Study Buddy button |
| Teal light | `#5FB3AD` | `--teal-light` | Context boxes, teal cards, flow arrows |
| Rich purple | `#6B4C9A` | `--rich-purple` | Popup term titles |
| Purple light | `#B9A2DE` | `--purple-light` | Key-term boxes, purple cards |
| Ruby crimson | `#9B2C2C` | `--ruby-crimson` | Legacy accent |
| Crimson light | `#E99A9A` | `--crimson-light` | Cost/conflict boxes, crimson cards, default timeline dots |
| Bronze | `#A88A5E` | `--bronze-accent` | Quote boxes |
| Charcoal | `#1A1A1A` | `--dark-charcoal` | Slide background |
| Soft cream | `#F5F1E8` | `--soft-cream` | Body text, popup panels |
| Forest green | `#1B4332` | `--forest-green` | Independent Study divider `ff` |
| Part burgundy | `#5A1A24` | (inline on the section) | Part dividers only |
| Token burgundy | `#6B1F2A` | `--burgundy` | Burgundy cards; leftover `.activity` style |
| Divider teal | `#7CC4BC` | `--divider-teal` | Pierian Spring kicker and links |

Fonts (load both):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

Content slides use `class="c"`. Unordered lists are unstyled by the browser; each `li` gets a teal diamond (`\25C6`). Ordered lists keep gold numbers and must not get a diamond. `strong` is gold; `em` is light teal.

The pasted CSS still contains older helpers (`.callout`, `.primary-source`, `.title-hero`, `section.activity`). Prefer the patterns in this guide: `.box` roles, bleed titles, and `section.c.pause` for activities.

## Box roles

Each highlight box has a role class, a left border in that role's color, and a small uppercase `.box-label`. Use the role that matches the job, not the one that looks prettiest on that slide. Label wording may vary slightly, but the class and color stay fixed.

| Role class | Color | Typical labels | Job |
| --- | --- | --- | --- |
| `.box.context` | teal | Context, Origins | Situation or setup the student needs before the new point |
| `.box.term` | purple | Key term | A defined term, often with a popup trigger |
| `.box.quote` | bronze | In the law's words, The password, or a source name | A short primary-source phrase. Wrap the quoted words in `<span class="q">`. Add `<cite>` when you have a citation. |
| `.box.takeaway` | gold | Takeaway, Result, Why it mattered | The point to remember or the result of the action just described |
| `.box.conflict` | crimson | The cost, Cost, Conflict, Flash point, Aftermath | Cost, violence, clash, or a hard consequence |

```html
<div class="box context"><span class="box-label">Context</span>
  <p>The Compromise of 1850 postponed the crisis. It did not settle who would decide about slavery in the West.</p>
</div>

<div class="box term"><span class="box-label">Key term</span>
  <p>His answer was <button type="button" class="popup-trigger" data-popup="pop-popsov" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop-popsov">popular sovereignty<span class="pop-q" aria-hidden="true">?</span></button>: the settlers would vote on slavery.</p>
</div>

<div class="box quote"><span class="box-label">In the law's words</span>
  The final bill declared the ban <span class="q">"inoperative and void"</span>
</div>

<div class="box takeaway"><span class="box-label">Takeaway</span>
  <p>Many Northerners felt a promise kept for 34 years had been broken.</p>
</div>

<div class="box conflict"><span class="box-label">The cost</span>
  <p>Guerrilla war followed; historians count roughly 55 to 200 deaths, depending on how they count.</p>
</div>
```

## Layout patterns

Reuse these structures. Shorten or lengthen the text; keep the classes.

### Bullets

Default for a short sequence of facts, usually inside a split column, a bleed text panel, or under a kicker. Use `.compact` when the list must sit under cards.

```html
<ul>
  <li>January 1854: Senator Stephen A. Douglas of Illinois proposed organizing the land west of Missouri and Iowa</li>
  <li>He wanted settlers there, and a railroad to the Pacific that started in Chicago</li>
  <li>Southern senators wanted a chance for slavery in the new land</li>
</ul>

<ul class="compact">
  <li>The fraud elected a proslavery legislature; free-staters wrote their own Topeka Constitution</li>
  <li>By 1856 Kansas had two rival governments; President Pierce backed the proslavery one</li>
</ul>
```

### Card grids (2, 3, or 4 columns, or a stack)

Card tints: `teal`, `purple`, `crimson`, `gold`, `burgundy`. Use `dem` only when a Democratic Party tint is historically useful (as on the 1856 election slide). Headings go in `h3`. A stack is a vertical list of the same cards, with a left border instead of a top border.

```html
<!-- two columns (also cols-3, cols-4) -->
<div class="card-grid cols-2">
  <div class="card teal"><h3>California entered as a free state.</h3><p>Free states now outnumbered slave states in the Senate.</p></div>
  <div class="card purple"><h3>Utah and New Mexico got popular sovereignty.</h3><p>Settlers there would decide about slavery.</p></div>
  <div class="card crimson"><h3>The Fugitive Slave Act angered the North.</h3><p>Crowds in Boston and Syracuse defied it.</p></div>
  <div class="card gold"><h3><em>Uncle Tom's Cabin</em> (1852) reached millions.</h3><p>It made slavery a moral question for Northern readers.</p></div>
</div>

<!-- vertical stack, good beside an image -->
<div class="card-grid stack">
  <div class="card crimson"><h3>A split vote</h3><p>Northern Whigs voted against the act; most Southern Whigs voted for it.</p></div>
  <div class="card purple"><h3>A party without one voice</h3><p>The party could no longer speak with one voice about slavery.</p></div>
  <div class="card teal"><h3>Anger in the North</h3><p>Angry Northerners held "Anti-Nebraska" meetings across the North.</p></div>
</div>
```

### Stat cards

A big figure in `.stat` plus one line of explanation, inside a tinted card. Often in a `cols-2` grid beside a portrait.

```html
<div class="card-grid cols-2">
  <div class="card gold"><span class="stat">4 million+</span><p>More than four million immigrants arrived, most from Ireland and the German states</p></div>
  <div class="card teal"><span class="stat">1 million+</span><p>Over a million Irish fled the Great Famine (1845-1852)</p></div>
  <div class="card purple"><span class="stat">1848</span><p>Germans came to escape hard times and a failed revolution in 1848</p></div>
  <div class="card crimson"><span class="stat">13%</span><p>By 1860 about 13 percent of Americans were born abroad</p></div>
</div>
```

### Flow arrows

A row or a convergence of nodes with a teal arrow (`&#10148;`). Use `.flow.pair` for two equal claims, `.flow.converge` when several sources feed one goal, and `.flow-node.teal` or `.flow-node.big` for emphasis.

```html
<div class="flow pair">
  <div class="flow-node">1845-1852: potato blight caused the Great Famine; about a million people died</div>
  <div class="flow-arrow">&#10148;</div>
  <div class="flow-node teal">Over a million Irish emigrated to the United States between 1845 and 1855</div>
</div>

<div class="flow converge">
  <div>
    <p class="kicker" style="margin:0 0 0.3em 0;">Members:</p>
    <div class="sources">
      <div class="flow-node teal">Northern Whigs</div>
      <div class="flow-node teal">Free Soilers</div>
      <div class="flow-node teal">anti-Nebraska Democrats</div>
      <div class="flow-node teal">some Know-Nothings</div>
    </div>
  </div>
  <div class="flow-arrow">&#10148;</div>
  <div class="flow-node big">One goal united them: no more slavery in the territories</div>
</div>
```

### Timeline with date badges

`ul.tl` has a crimson rail and dots. Add `down` for a teal rail (useful when the slide is already heavy with crimson). Add `big` for a roomier Independent Study timeline. Wrap each date in `<span class="date">`.

```html
<ul class="tl">
  <li><span class="date">May 21, 1856</span> a proslavery posse sacked the free-state town of Lawrence</li>
  <li>They burned the Free State Hotel and wrecked two newspaper presses</li>
  <li><span class="date">May 24-25</span> John Brown and his men killed five proslavery settlers at Pottawatomie Creek</li>
</ul>

<ul class="tl down">
  <li><span class="date">May 19-20, 1856</span> Sumner's speech "The Crime Against Kansas" mocked Senator Andrew Butler of South Carolina</li>
  <li><span class="date">May 22</span> Representative Preston Brooks, Butler's relative, beat Sumner with a cane until it broke</li>
</ul>
```

A timeline beside a takeaway can use `.kk-wrap` (a two-column wrapper: timeline on the left, box on the right).

### Big statement

A centered, large cream line. Mark the stress words with `<em>` (they render gold). Use it on a closing slide or to open a focused Independent Study slide, not as a substitute for a heading.

```html
<p class="big-statement">The famine is why there are more people of Irish descent in the United States today than in Ireland.</p>
```

### Image-left and image-right splits

`.split` is the standard two-pane layout. `img-left` and `img-right` give the image the narrower pane (0.8fr). `wide-left` and `wide-right` are nearly even, with a slight bias. Put the `<figure>` on the image side and the text (lists, boxes, or cards) on the other. Size the figure with `fig-tall`, `fig-mid`, `fig-small`, and `flat` (no drop shadow, good for maps and documents). Two small pictures in one pane can use `.fig-pair`.

```html
<div class="split img-left">
  <figure class="fig-tall">
    <img src="images/example.webp" alt="Describe the picture." loading="eager">
    <figcaption>Short credit and source.</figcaption>
  </figure>
  <div>
    <!-- cards, boxes, or bullets -->
  </div>
</div>

<div class="split img-right">
  <div>
    <!-- text first, image on the right -->
  </div>
  <figure class="fig-tall">
    <img src="images/example.webp" alt="Describe the picture." loading="eager">
    <figcaption>Short credit and source.</figcaption>
  </figure>
</div>

<div class="split wide-left"><!-- text-heavy left, image right --></div>
<div class="split wide-right"><!-- image left, text-heavy right --></div>
```

### Portrait bleed (one side, uncropped)

For a tall portrait that should fill the height of the slide and fade into the charcoal on the text side. Do not set `data-background-size="cover"`; the CSS sizes it with `auto 100%` and pins it to the right. Text sits in `.plain-left`. Caption uses `.bleed-caption`.

```html
<section class="c bleed portrait-right" data-letter="d" data-background-color="#1A1A1A" data-background-image="images/ch14a_douglas.webp">
  <div class="bleed-stage">
    <div class="plain-left">
      <p class="kicker">Part I · The Kansas-Nebraska bill</p>
      <h1>Douglas Wanted a Railroad Through Chicago</h1>
      <ul>
        <li>January 1854: Senator Stephen A. Douglas of Illinois proposed organizing the land west of Missouri and Iowa</li>
      </ul>
      <div class="box term"><span class="box-label">Key term</span><p>His answer was popular sovereignty.</p></div>
    </div>
    <p class="bleed-caption">Stephen A. Douglas, between 1855 and 1861. Brady-Handy Collection, Library of Congress, via Wikimedia Commons (public domain).</p>
  </div>
  <span class="sr-only">Background image: [describe the portrait].</span>
</section>
```

A left-side portrait would need a matching `portrait-left` rule, which this CSS does not yet include. Add it only if a later deck needs it, and keep the same fade-to-charcoal treatment.

### Full bleed with scrim and text panel

Section classes: `c bleed` plus one scrim: `scrim-left`, `scrim-right`, `scrim-full`, or `scrim-bottom`. Set `data-background-image`, `data-background-size="cover"`, and a position (for example `center 40%`) that keeps the important part of the picture visible beside the text, not under it.

Text goes in `.bleed-stage` (add `bottom` to sit the panel on a `scrim-bottom`). Use `.title-overlay` on the title slide, or `.scrim-panel` with `side-left`, `side-right`, or `wide` on later bleeds. Always include `.bleed-caption` and `.sr-only`.

```html
<!-- Title slide -->
<section class="c bleed scrim-left title-bleed" data-letter="a" id="title" data-background-color="#1A1A1A" data-background-image="images/example.webp" data-background-size="cover" data-background-position="center 40%">
  <div class="bleed-stage">
    <div class="title-overlay">
      <p class="kicker">HIST 101 · U.S. History to 1877</p>
      <h1>Lecture title</h1>
      <div class="title-rule"></div>
      <p style="color:#F2DFA6; margin:0 0 0.2em 0; font-size:1.05em;">Subtitle, with dates if needed</p>
      <p style="color:#C9AE85; margin:0;">Chapter N · Lecture N</p>
    </div>
    <p class="bleed-caption"><em>Work title.</em> Artist, date. Source (public domain).</p>
  </div>
  <span class="sr-only">Background image: [describe the picture].</span>
</section>

<!-- Later full bleed, text in a panel (side-left, side-right, or wide) -->
<section class="c bleed scrim-left" data-letter="jj" data-background-color="#1A1A1A" data-background-image="images/example.webp" data-background-size="cover" data-background-position="center 35%">
  <div class="bleed-stage">
    <div class="scrim-panel side-left">
      <p class="kicker">Independent Study · The Philadelphia riots, 1844</p>
      <h1>Anti-Catholic Riots Burned Philadelphia's Churches</h1>
      <ul>
        <li>Catholic parents objected to Protestant Bible readings in public schools</li>
      </ul>
      <div class="box conflict"><span class="box-label">Aftermath</span><p>About 20 people died; Catholics began building their own parochial schools.</p></div>
    </div>
    <p class="bleed-caption"><em>Work title.</em> Artist, date. Source (public domain).</p>
  </div>
  <span class="sr-only">Background image: [describe the picture].</span>
</section>
```

Closing often uses `scrim-full` and `.scrim-panel.wide` so a recap grid stays readable over a thematic photograph (`ee` in the reference deck).

### Split around a map (never cropped)

Do not place a map in a bleed, do not use `background-size: cover` on a map, and do not let a scrim cover state names or election colors. Use the older `.cols.map-cols` grid (text about 0.62fr, map about 1.38fr) and `figure.map`, which sizes the image to a full width and a max height of 700px with no rounding or shadow.

```html
<section class="c" data-letter="o">
  <h1>Buchanan Won, but Republicans Nearly Took the North</h1>
  <div class="cols map-cols">
    <div>
      <div class="card-grid stack">
        <div class="card dem"><h3>Democrats</h3><p>James Buchanan, who had been in Britain during the Kansas fight</p></div>
        <div class="card crimson"><h3>Republicans</h3><p>John C. Frémont, "Free Soil, Free Speech, Free Men, Frémont"</p></div>
        <div class="card gold"><h3>American Party</h3><p>former president Millard Fillmore</p></div>
      </div>
      <div class="box takeaway"><span class="box-label">Takeaway</span>
        <p>A party with no Southern voters had come within reach of the White House.</p>
      </div>
    </div>
    <figure class="map">
      <img src="images/ch14a_election_1856_map.svg" alt="Describe every relevant state or region the student is expected to read." loading="eager">
      <figcaption>Caption, data source, and a note if the map was drawn for this lecture (not a historical image).</figcaption>
    </figure>
  </div>
</section>
```

A historical map that is being discussed as an artifact (for example Reynolds's 1856 wall map) may sit in a `.split` as `figure.fig-tall.flat`. Still show the whole sheet; do not crop it into a bleed.

### Three-pane portrait split

For two facing portraits with a timeline or cards in the middle, use `.split.trio`.

```html
<div class="split trio">
  <figure class="fig-mid"><img src="images/person-a.webp" alt="..." loading="eager"><figcaption>Person A. Credit.</figcaption></figure>
  <div>
    <ul class="tl down"><li><span class="date">May 22</span> the event that links them</li></ul>
    <div class="card-grid cols-2">
      <div class="card teal"><h3>One side</h3><p>What that side saw.</p></div>
      <div class="card crimson"><h3>The other</h3><p>What the other side saw.</p></div>
    </div>
  </div>
  <figure class="fig-mid"><img src="images/person-b.webp" alt="..." loading="eager"><figcaption>Person B. Credit.</figcaption></figure>
</div>
```

## Deck structure and reserved slides

A typical lecture, as in the reference deck:

1. **Title** (`a`, full-bleed title overlay).
2. **Optional recap** from the previous lecture.
3. **Part I divider**, then teaching slides that change layout each time.
4. **⏸ Activity** (`class="c pause"`). Keep it in the main lesson.
5. **Part II divider** (and further parts if needed), then more teaching slides.
6. **⏸ Check Yourself** (reserved `dd`, `class="c pier-quiz"`, `id="check-yourself"`). In the main lesson, after the last teaching slide, before the closing. Nothing to turn in. No separate review-question slides.
7. **Closing** (reserved `ee`), often a full bleed with a big statement, a recap grid, a link to Independent Study, and a continue button to the next lecture.
8. **Independent Study divider** (reserved `ff`), optional.
9. **Independent Study slides** (`gg` onward), optional, still varied in layout.
10. **Sources** last, two columns.

### Part divider

```html
<section class="part" data-letter="c" id="part-1" data-background-color="#5A1A24">
  <p class="kicker">Lecture 1 · Part I</p>
  <h1>A Railroad Bill Breaks the Parties</h1>
  <div class="gold-rule"></div>
  <p class="divider-note">1854-1855</p>
</section>
```

### Activity (⏸)

Charcoal and gold, never green. The prompt sits in `.prompt`. Steps use `ol.steps` (numbered teal cards). Time is a gold pill, `.timer`.

```html
<section class="c pause" data-letter="j" id="activity">
  <p class="kicker">Lecture 1 · Student Activity</p>
  <h1>⏸ It Is 1855. Where Does Your Vote Go?</h1>
  <p class="prompt">You are a Northern Whig. Your party is dying. You dislike the Kansas-Nebraska Act, and your town is filling with Irish immigrants. Do you join the <strong>Know-Nothings</strong> or the <strong>Republicans</strong>?</p>
  <ol class="steps">
    <li>Decide on your own: which party gets your vote?</li>
    <li>Turn to a partner and give one reason from today's lecture.</li>
    <li>Be ready to share: what would make you switch?</li>
  </ol>
  <p><span class="timer">⏸ 3 minutes</span></p>
</section>
```

### Check Yourself

```html
<section class="c pier-quiz" data-letter="dd" id="check-yourself">
  <p class="kicker">Lecture 1 · Check Yourself</p>
  <h1>⏸ Check Yourself: Bleeding Kansas</h1>
  <p class="mc-instr">Click an answer to see whether it is right, the correct answer, and why. Nothing to turn in.</p>
  <div class="mc-quiz">
    <div class="mc-question" data-correct="B" data-explain="One-sentence reason shown after the student clicks.">
      <p class="mc-q"><b>1.</b> The question stem?</p>
      <div class="mc-options">
        <button type="button" class="mc-option" data-value="A">A) First choice</button>
        <button type="button" class="mc-option" data-value="B">B) Correct choice</button>
        <button type="button" class="mc-option" data-value="C">C) Third choice</button>
        <button type="button" class="mc-option" data-value="D">D) Fourth choice</button>
      </div>
      <div class="mc-feedback" aria-live="polite"></div>
    </div>
    <!-- more .mc-question blocks -->
  </div>
</section>
```

Copy the quiz click-handler from an existing FA26 deck. It marks the chosen button, reveals the correct letter, and writes the `data-explain` text into `.mc-feedback`.

### Independent Study divider (`ff`)

```html
<section class="divider" data-letter="ff" id="independent-study" data-background-color="#1B4332">
  <p class="kicker">Pierian Spring</p>
  <h1>Independent Study</h1>
  <p class="pier-sub">Optional: go deeper on your own</p>
  <div class="gold-rule"></div>
  <p class="pier-text">Today's lecture ends here. If you want to go deeper, the stories below continue on your own. There is nothing to turn in.</p>
  <p class="pope">"A little learning is a dang'rous thing;<br>Drink deep, or taste not the Pierian spring."<span>Alexander Pope, <em>An Essay on Criticism</em> (1711)</span></p>
  <p class="pier-links"><a href="#/is-politics">First topic</a> · <a href="#/is-irish">Second topic</a> · <a href="#/sources">Sources</a></p>
</section>
```

Give each Independent Study slide a kicker that starts `Independent Study ·` and a stable `id` that matches the pier link (hash navigation).

### Sources (last slide, two columns)

```html
<section class="c sources" data-letter="ll" id="sources">
  <h1>Sources</h1>
  <div class="src-cols">
    <h2>Primary sources</h2>
    <ul>
      <li>Kansas-Nebraska Act, May 30, 1854, 10 Stat. 277 (Avalon Project, Yale Law School).</li>
    </ul>
    <h2>Scholarship and references</h2>
    <ul>
      <li>David M. Potter, <em>The Impending Crisis, 1848-1861</em> (1976).</li>
    </ul>
    <h2>Images</h2>
    <ul>
      <li>Period images are in the public domain unless a caption says otherwise. Each slide's caption gives its source. Note any map or illustration drawn or generated for the lecture.</li>
    </ul>
  </div>
</section>
```

### Continue links

Gold pill buttons (`.continue-link`) point to the next lecture or back to a recap slide. Closing can also include `.lecture-end` for the optional Independent Study sentence.

## Open Study Buddy notes

Every teaching slide, divider, activity, quiz, and sources slide gets notes. The fixed "Open Study Buddy" button reads `aside.notes` on the current slide. Write in complete sentences, in the lecturer's voice, and end with a takeaway paragraph in this form:

```html
<aside class="notes">
  <p>Start with the scene or the problem this slide has to explain.</p>
  <p>Add only what a lecturer needs in the room: a name, a date, a number, a caution about an image.</p>
  <p><strong>Takeaway:</strong> one sentence the student should leave with.</p>
</aside>
```

Keep the chrome after `div.slides`:

```html
<div id="letter-display" class="slide-letter" aria-hidden="true">a</div>
<button type="button" id="study-buddy-btn" class="study-buddy-btn" aria-expanded="false" aria-controls="study-buddy-panel">Open Study Buddy</button>
<div id="study-buddy-panel" class="study-buddy-panel" role="region" aria-labelledby="study-buddy-heading" aria-live="polite" hidden>
  <h2 id="study-buddy-heading">Study Buddy</h2>
  <div id="study-buddy-content"></div>
</div>
<div id="popup-backdrop" class="popup-backdrop" hidden></div>
```

Copy the Study Buddy and popup scripts from an existing FA26 deck so the button, letter display, and term popups stay consistent.

## Reveal setup

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.js"></script>
<script>
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const deck = new Reveal({
  width: 1920,
  height: 1080,
  margin: 0.04,
  hash: true,
  slideNumber: true,
  transition: reduceMotion ? 'none' : 'slide',
  backgroundTransition: reduceMotion ? 'none' : 'fade'
});
deck.initialize();
</script>
```

Then hook `slidechanged` and `ready` to update `#letter-display` from `data-letter`, and to fill the Study Buddy panel from `aside.notes`.

## Contrast, motion, and variation

- Body text on charcoal already meets a dark-theme AA pairing with cream, gold, and the light role colors. The risk is text on photographs. Use a scrim class, `.scrim-panel`, `.title-overlay`, or the portrait fade. Do not set body text, captions aside, on a raw image.
- Honor `prefers-reduced-motion` in the Reveal init, as above.
- Full bleed is a spice, not a default. In the reference deck it is used for the title, one portrait, the closing, and one Independent Study riot scene: four bleeds in 24 slides, never back to back.
- A worked example of variation from Lecture 1: bleed title, two-column recap cards, Part divider, portrait bleed, image-right split with quote and takeaway, stacked cards with image, stat cards with image-left, image-right term slide, flow convergence, activity, Part divider, stacked cards with image, timeline with conflict box, trio portraits, uncropped map, Check Yourself, full-bleed closing. Mirror that kind of change, not that exact sequence.

## Complete CSS

Paste this entire block into the deck `<style>` element. It is copied verbatim from the approved reference deck (280 rules-and-comments lines, base HIST 101 identity first, FA26 layout vocabulary after the comment dated 2026-11-18).

```css
:root {
  --antique-gold:#D4AF37; --deep-teal:#2C7873; --rich-purple:#6B4C9A;
  --ruby-crimson:#9B2C2C; --dark-charcoal:#1A1A1A; --pure-white:#FAFAFA;
  --soft-cream:#F5F1E8; --bronze-accent:#A88A5E; --forest-green:#1B4332;
  --burgundy:#6B1F2A; --divider-teal:#7CC4BC;
}
.reveal { font-family:'Lora',serif; background-color:var(--dark-charcoal); color:var(--pure-white); }
.reveal h1,.reveal h2,.reveal h3 { font-family:'Crimson Pro',serif; font-weight:700; color:var(--antique-gold); text-transform:none; }
.reveal .slides section { text-align:left; }
.reveal .slides section.c { font-size:34px; line-height:1.35; }
.reveal .slides section.c h1 { font-size:2.05em; line-height:1.08; margin:0 0 0.35em 0; padding-bottom:0.15em; border-bottom:3px solid rgba(212,175,55,0.45); }
.reveal ul { list-style:none; margin:0; padding:0; }
.reveal .slides section.c li { position:relative; padding-left:1.3em; margin:0 0 0.35em 0; color:#F5F1E8; }
.reveal .slides section.c li:before { content:"\25C6"; position:absolute; left:0; color:#4AA89F; font-size:0.85em; }
/* Ordered lists keep their numbers only: no diamond on top of the number (audit fix, slide "What Congress Actually Passed") */
.reveal .slides section.c ol { margin:0.2em 0 0.4em 1.4em; padding:0; }
.reveal .slides section.c ol li { padding-left:0.3em; }
.reveal .slides section.c ol li:before { content:none; }
.reveal .slides section.c ol > li::marker { color:var(--antique-gold); font-family:'Crimson Pro',serif; font-weight:700; }
.reveal .slides section.c strong { color:var(--antique-gold); }
.reveal .slides section.c em { color:#9ED8D2; }
.reveal .callout { background:rgba(212,175,55,0.12); border-left:4px solid var(--antique-gold); padding:0.5em 1em; margin:0.6em 0; }
.reveal .primary-source { background:var(--soft-cream); color:var(--dark-charcoal); padding:0.6em 0.8em; font-style:italic; border-left:5px solid var(--bronze-accent); margin:0.5em 0; }
.reveal .primary-source cite { display:block; font-style:normal; font-size:0.72em; color:#4A3B26; margin-top:0.3em; text-align:right; }
.reveal .slides section.c .primary-source em { color:inherit; font-weight:600; }
.reveal section.activity { background:var(--burgundy); font-size:38px; }
.reveal section.activity h1 { font-size:2.1em; }
.reveal section.activity p, .reveal section.activity li { color:#FAFAFA; }
.reveal section.activity ol { margin-left:1.3em; }
.reveal section.activity ul li { margin-bottom:0.3em; }
.reveal section.activity ul li:before { content:"\25C6  "; color:var(--antique-gold); }
.reveal .title-hero { text-align:center; }
.reveal .title-panel { background:rgba(10,16,22,0.82); padding:1.4em 2.2em; border:2px solid rgba(212,175,55,0.65); border-radius:12px; max-width:1400px; margin:0 auto; }
.reveal .title-hero h1 { font-size:2.6em; line-height:1.05; margin:0.1em 0 0.2em 0; }
.reveal .title-hero img { max-height:470px; border-radius:6px; box-shadow:0 6px 18px rgba(0,0,0,0.45); margin:0.4em auto 0 auto; display:block; }
.reveal .title-hero figcaption { font-size:0.42em; color:#D9CFBC; margin-top:0.3em; }
/* Image layouts */
.reveal .cols { display:grid; grid-template-columns:1.2fr 0.8fr; gap:1.1em; align-items:start; }
.reveal .cols.even { grid-template-columns:1fr 1fr; }
.reveal .cols.wide-img { grid-template-columns:0.95fr 1.05fr; }
.reveal figure { margin:0; text-align:center; }
.reveal .slides section.c figure img { display:block; max-width:100%; max-height:560px; height:auto; object-fit:contain; margin:0 auto; border:0; border-radius:6px; box-shadow:0 6px 18px rgba(0,0,0,0.45); background:transparent; }
.reveal .slides section.c figure.short img { max-height:420px; }
.reveal .slides section.c figure.tall img { max-height:640px; }
.reveal .slides section.c figcaption { color:#D9CFBC; font-size:0.5em; line-height:1.3; margin-top:0.45em; text-align:center; }
.reveal .fig-pair { display:grid; grid-template-columns:1fr 1fr; gap:0.6em; align-items:start; }
.reveal .portrait-row { display:grid; grid-template-columns:repeat(3,1fr); gap:0.8em; margin-top:0.4em; }
.reveal .slides section.c .portrait-row img { max-height:300px; }
/* Summary boxes: one main point + one sub-point each */
.reveal .summary-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.6em; margin-top:0.5em; }
.reveal .summary-box { background:rgba(44,120,115,0.16); border-left:5px solid var(--deep-teal); border-radius:6px; padding:0.5em 0.8em; }
.reveal .summary-box strong { display:block; font-family:'Crimson Pro',serif; font-size:1.12em; line-height:1.2; }
.reveal .summary-box p { margin:0.25em 0 0 0; font-size:0.85em; color:#D9CFBC; }
.reveal .vocab li { font-size:0.82em; margin-bottom:0.25em; }
.reveal .vocab { columns:2; column-gap:1.4em; }
.reveal .vocab li { break-inside:avoid; }
.reveal .extra-credit { background:rgba(212,175,55,0.16); border:2px solid var(--antique-gold); border-radius:8px; padding:0.45em 0.8em; margin:0.6em 0 0 0; color:#F5F1E8; font-size:0.9em; }
.reveal .mania-row { display:grid; grid-template-columns:repeat(5,1fr); gap:0.6em; margin-top:0.5em; align-items:start; }
.reveal .slides section.c .mania-row img { max-height:400px; }
.reveal .lecture-end { margin-top:0.6em; font-style:italic; color:#D9CFBC; text-align:center; font-size:0.85em; }
.reveal .lecture-end a, .reveal .slides section.c a { color:#9ED8D2; }
.reveal .kicker { font-family:'Lora',serif; color:#9ED8D2; font-size:0.62em; letter-spacing:0.12em; text-transform:uppercase; margin:0 0 0.2em 0; }
.reveal .review-q { margin-top:0.5em; padding:0.45em 0.85em; border:2px solid var(--antique-gold); border-radius:8px; background:rgba(212,175,55,0.09); line-height:1.35; font-size:0.9em; }
.reveal .review-q b { color:var(--antique-gold); font-family:'Crimson Pro',serif; text-transform:uppercase; letter-spacing:0.06em; }
/* Independent Study divider: forest green, reserved for the Pierian Spring */
.reveal section.divider { background:var(--forest-green); text-align:center; font-size:30px; }
.reveal section.divider h1 { font-size:3.6em; margin:0.05em 0 0.1em 0; }
.reveal section.divider .kicker { font-size:1.4em; color:var(--divider-teal); text-align:center; }
.reveal section.divider .pier-sub { color:var(--divider-teal); font-size:1.9em; margin:0; }
.reveal section.divider .gold-rule { width:160px; height:4px; background:var(--antique-gold); margin:0.5em auto; }
.reveal section.divider .pier-text { font-size:1.75em; color:#F5F1E8; max-width:1400px; margin:0.3em auto; line-height:1.45; }
.reveal section.divider .pope { font-family:'Crimson Pro',serif; font-size:1.9em; line-height:1.35; color:#F5F1E8; font-style:italic; margin-top:0.6em; }
.reveal section.divider .pope span { display:block; font-size:0.55em; font-style:normal; color:#D9CFBC; margin-top:0.4em; }
.reveal section.divider .pier-links { font-size:1.15em; color:#F5F1E8; margin-top:0.8em; }
.reveal section.divider .pier-links a { color:var(--divider-teal); }
/* Check Yourself quiz */
.reveal .slides section.pier-quiz { font-size:26px; }
.reveal .slides section.pier-quiz h1 { font-size:2.0em; margin-bottom:0.25em; }
.reveal .mc-instr { font-style:italic; color:#D9CFBC; margin:0 0 0.4em 0; }
.reveal .mc-question { margin:0 0 0.45em 0; padding:0.35em 0.7em; border-left:5px solid var(--deep-teal); background:rgba(27,67,50,0.35); border-radius:6px; }
.reveal .mc-q { margin:0 0 0.3em 0; font-weight:600; }
.reveal .mc-q b { color:var(--antique-gold); }
.reveal .mc-options { display:grid; grid-template-columns:repeat(4,1fr); gap:0.35em; }
.reveal .mc-option { font-family:'Lora',serif; font-size:0.82em; line-height:1.3; text-align:left; color:#F5F1E8; background:rgba(255,255,255,0.06); border:2px solid rgba(158,216,210,0.45); border-radius:7px; padding:0.25em 0.6em; cursor:pointer; }
.reveal .mc-option:hover, .reveal .mc-option:focus-visible { border-color:var(--antique-gold); outline:none; }
.reveal .mc-option.correct { border-color:#4CAF7A; background:rgba(76,175,122,0.28); }
.reveal .mc-option.incorrect { border-color:#C0392B; background:rgba(192,57,43,0.25); }
.reveal .mc-feedback { display:none; margin:0.3em 0 0 0; padding:0.2em 0.6em; border-radius:6px; background:rgba(0,0,0,0.25); font-size:0.82em; line-height:1.32; color:#F5F1E8; }
.reveal .mc-feedback.show { display:block; }
.reveal .mc-feedback b.ok { color:#7FD6A4; } .reveal .mc-feedback b.no { color:#F08A7E; }
/* Sources */
.reveal .slides section.sources { font-size:21px; }
.reveal .slides section.sources h1 { font-size:2.6em; }
.reveal .slides section.sources .src-cols { columns:2; column-gap:1.6em; }
.reveal .slides section.sources h2 { font-size:1.35em; color:#9ED8D2; margin:0.3em 0 0.2em 0; break-after:avoid; }
.reveal .slides section.sources li { font-size:1em; margin-bottom:0.22em; line-height:1.3; break-inside:avoid; }
/* Permanent slide letter (lower left), Study Buddy */
.slide-letter { position:fixed; bottom:14px; left:18px; color:#F2DFA6; opacity:1; text-shadow:0 0 3px rgba(0,0,0,0.6); font-family:'Crimson Pro',serif; font-weight:600; font-size:22px; line-height:1; letter-spacing:0.04em; background:none; border:none; padding:0; pointer-events:none; z-index:100; }
.study-buddy-btn { position:fixed; bottom:16px; right:150px; background:var(--deep-teal); color:var(--pure-white); border:2px solid transparent; padding:8px 18px; border-radius:999px; font-family:'Lora',serif; font-size:16px; cursor:pointer; z-index:101; }
.study-buddy-btn:hover { background:#24635F; }
.study-buddy-btn[aria-expanded="true"] { background:#1F5753; border-color:var(--antique-gold); }
.study-buddy-btn:focus-visible { outline:3px solid var(--antique-gold); outline-offset:3px; }
.study-buddy-panel { position:fixed; right:20px; bottom:66px; width:min(560px, calc(100vw - 40px)); max-height:60vh; overflow-y:auto; background:#10201F; color:var(--soft-cream); border:2px solid var(--deep-teal); border-radius:12px; padding:16px 20px; font-family:'Lora',serif; font-size:18px; line-height:1.55; box-shadow:0 8px 24px rgba(0,0,0,0.5); z-index:101; }
.study-buddy-panel[hidden] { display:none; }
.study-buddy-panel h2 { font-family:'Crimson Pro',serif; color:var(--antique-gold); font-size:22px; margin:0 0 8px 0; }
.study-buddy-panel p { margin:0 0 0.7em 0; }
.study-buddy-panel strong { color:var(--antique-gold); }
.study-buddy-panel .sb-empty { font-style:italic; color:#CFC8B8; }
.sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); }
@media (prefers-reduced-motion: reduce) {
  .reveal .slides section, .reveal .slides > section, .reveal .backgrounds .slide-background, .reveal .progress span { transition:none !important; animation:none !important; }
}
/* Mini-lecture link button (gold; green is reserved for Independent Study) */
.reveal .slides section.c .continue-link a { display:inline-block; color:#1A1A1A; background:var(--antique-gold); padding:0.3em 1em; border-radius:8px; font-family:'Lora',serif; font-weight:600; text-decoration:none; border:2px solid #F2DFA6; }
.reveal .slides section.c .continue-link a:hover { background:#E3C45A; }
.reveal .slides section.c .continue-link a:focus-visible { outline:3px solid #F2DFA6; outline-offset:3px; }
.reveal .continue-link { margin:0.5em 0 0 0; font-size:0.82em; }
/* Pop-up (same pattern as the FA26 HIST 101 decks: dotted teal trigger, cream dialog, close x) */
.popup-trigger { font:inherit; color:#7CC4BC; background:none; border:none; border-bottom:2px dotted #7CC4BC; padding:0; margin:0; cursor:pointer; line-height:inherit; }
.popup-trigger:hover { color:var(--antique-gold); border-bottom-color:var(--antique-gold); }
.popup-trigger .pop-q { display:inline-block; font-family:'Lora',serif; font-size:0.6em; font-weight:600; line-height:1.35em; width:1.35em; text-align:center; border-radius:50%; background:#7CC4BC; color:#10201F; margin-left:0.25em; vertical-align:0.35em; }
.popup-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:999; }
.popup-backdrop[hidden], .popup[hidden] { display:none; }
.popup { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:var(--soft-cream); color:var(--dark-charcoal); padding:28px 34px 24px 34px; border-radius:15px; box-shadow:0 8px 32px rgba(0,0,0,0.5); width:min(680px, calc(100vw - 40px)); max-height:80vh; overflow-y:auto; z-index:1000; border:3px solid var(--bronze-accent); font-family:'Lora',serif; font-size:19px; line-height:1.5; text-align:left; }
.popup .definition-term { font-family:'Crimson Pro',serif; font-size:30px; font-weight:700; color:var(--rich-purple); margin:0 0 10px 0; }
.popup p { margin:0 0 0.7em 0; }
.popup strong { color:#826B21; }
.popup-close { position:absolute; top:8px; right:12px; font-size:30px; line-height:1; background:none; border:none; cursor:pointer; color:var(--ruby-crimson); padding:4px 8px; border-radius:6px; }
.popup-trigger:focus-visible, .popup-close:focus-visible { outline:3px solid var(--antique-gold); outline-offset:3px; }

/* ---- Chapter 14 additions ---- */
/* Part dividers: burgundy #5A1A24 with gold heading and rule (pattern from Ch13 L1; green stays reserved for Independent Study) */
.reveal section.part { text-align:center; font-size:30px; }
.reveal section.part .kicker { font-size:1.25em; color:#E9C95A; text-align:center; }
.reveal section.part h1 { font-size:4.3em; color:var(--antique-gold); line-height:1.1; margin:0.1em auto 0.15em auto; max-width:1500px; }
.reveal section.part .gold-rule { width:160px; height:4px; background:var(--antique-gold); margin:0.6em auto; }
.reveal section.part .divider-note { font-size:1.8em; color:#E8D9B5; font-style:italic; margin:0; }
/* Student activity (pause): charcoal and gold, never green */
.reveal .slides section.c.pause { font-size:40px; }
.reveal .slides section.c.pause .prompt { background:rgba(212,175,55,0.12); border:2px solid var(--antique-gold); border-radius:10px; padding:0.55em 0.95em; margin:0.4em 0 0.6em 0; font-size:1.02em; }
.reveal .slides section.c.pause ol { margin:0.2em 0 0.3em 1.4em; }
.reveal .slides section.c.pause ol li { margin-bottom:0.35em; }
.reveal .slides section.c.pause .timer { display:inline-block; font-family:'Crimson Pro',serif; color:#1A1A1A; background:var(--antique-gold); border-radius:999px; padding:0.05em 0.8em; font-weight:700; font-size:0.85em; }
/* Quiz header with title only */
.reveal .slides section.pier-quiz .mc-question { margin:0 0 0.4em 0; }
/* Timeline list (Independent Study) */
.reveal .slides section.c ul.timeline li strong { display:inline-block; min-width:7.2em; }
.reveal .slides section.c figure.portrait img { max-height:600px; }
.reveal .slides section.c .fig-pair figure img { max-height:470px; }
.reveal .cols.map-cols { grid-template-columns:0.62fr 1.38fr; }
.reveal .slides section.c figure.map img { max-height:700px; width:100%; box-shadow:none; border-radius:0; }
.reveal .slides section.c figure.landscape img { max-height:640px; }

/* ==== FA26 restyle (2026-11-18): layout vocabulary ported from REL 210 Ch11 Class 4 (Creeds) ====
   Bullets, role-colored highlight boxes, cards, flow diagrams, split and full-bleed layouts.
   HIST 101 identity kept: burgundy Part dividers, forest-green Independent Study divider, gold headings. */
:root { --teal-light:#5FB3AD; --purple-light:#B9A2DE; --crimson-light:#E99A9A; --gold-light:#F2DFA6; }
.reveal .slides section.c h1.center, .reveal .slides section.c .kicker.center { text-align:center; }
/* Role boxes: each kind of highlight has its own color and small label */
.reveal .box { border-radius:0 10px 10px 0; padding:0.45em 0.85em 0.5em; margin:0.5em 0 0 0; font-size:0.86em; line-height:1.4; color:#F5F1E8; }
.reveal .box p { margin:0; }
.reveal .box .box-label { display:block; font-family:'Lora',serif; font-size:0.62em; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; margin:0 0 0.2em 0; }
.reveal .box.context  { background:rgba(44,120,115,0.22); border-left:5px solid var(--teal-light); }
.reveal .box.context .box-label { color:#9ED8D2; }
.reveal .box.term     { background:rgba(107,76,154,0.24); border-left:5px solid var(--purple-light); }
.reveal .box.term .box-label { color:var(--purple-light); }
.reveal .box.takeaway { background:rgba(212,175,55,0.13); border-left:5px solid var(--antique-gold); }
.reveal .box.takeaway .box-label { color:var(--antique-gold); }
.reveal .box.conflict { background:rgba(155,44,44,0.26); border-left:5px solid var(--crimson-light); }
.reveal .box.conflict .box-label { color:var(--crimson-light); }
.reveal .box.quote    { background:rgba(245,241,232,0.07); border-left:5px solid var(--bronze-accent); font-family:'Crimson Pro',serif; font-style:italic; font-size:1.12em; line-height:1.25; }
.reveal .box.quote .box-label { font-style:normal; color:#D9CFBC; font-size:0.5em; }
.reveal .box.quote cite { display:block; font-family:'Lora',serif; font-style:normal; font-size:0.52em; color:#D9CFBC; margin-top:0.3em; text-align:right; }
.reveal .slides section.c .box strong { color:var(--antique-gold); }
.reveal .slides section.c .box.term strong { color:var(--purple-light); }
.reveal .slides section.c .box.conflict strong { color:var(--crimson-light); }
/* Cards (reference card-grid), HIST 101 tints */
.reveal .card-grid { display:grid; gap:0.6em; align-items:stretch; margin-top:0.5em; }
.reveal .card-grid.cols-2 { grid-template-columns:1fr 1fr; }
.reveal .card-grid.cols-3 { grid-template-columns:repeat(3,1fr); }
.reveal .card-grid.cols-4 { grid-template-columns:repeat(4,1fr); }
.reveal .card-grid.stack { grid-template-columns:1fr; gap:0.45em; }
.reveal .card { border-radius:10px; padding:0.5em 0.8em 0.55em; text-align:left; }
.reveal .card h3 { margin:0 0 0.2em 0; font-size:1.05em; line-height:1.15; }
.reveal .card p { margin:0; font-size:0.8em; line-height:1.38; color:#E8E1D2; }
.reveal .card.teal    { background:rgba(44,120,115,0.24); border-top:4px solid var(--teal-light); }
.reveal .card.teal h3 { color:#9ED8D2; }
.reveal .card.purple  { background:rgba(107,76,154,0.26); border-top:4px solid var(--purple-light); }
.reveal .card.purple h3 { color:var(--purple-light); }
.reveal .card.crimson { background:rgba(155,44,44,0.28); border-top:4px solid var(--crimson-light); }
.reveal .card.crimson h3 { color:var(--crimson-light); }
.reveal .card.gold    { background:rgba(212,175,55,0.14); border-top:4px solid var(--antique-gold); }
.reveal .card.gold h3 { color:var(--antique-gold); }
.reveal .card.burgundy { background:rgba(90,26,36,0.55); border-top:4px solid #C9727F; }
.reveal .card.burgundy h3 { color:#F0B4BD; }
.reveal .card-grid.stack .card { border-top:none; border-left:5px solid; border-radius:0 10px 10px 0; }
.reveal .card-grid.stack .card.teal { border-left-color:var(--teal-light); }
.reveal .card-grid.stack .card.purple { border-left-color:var(--purple-light); }
.reveal .card-grid.stack .card.crimson { border-left-color:var(--crimson-light); }
.reveal .card-grid.stack .card.gold { border-left-color:var(--antique-gold); }
/* Stat cards: one big figure, one line */
.reveal .stat { font-family:'Crimson Pro',serif; font-weight:700; font-size:2.1em; line-height:1; color:var(--gold-light); margin:0 0 0.12em 0; display:block; }
/* Split layouts (reference split img-left / img-right) */
.reveal .split { display:grid; gap:1.2em; align-items:center; }
.reveal .split.img-left  { grid-template-columns:0.8fr 1.2fr; }
.reveal .split.img-right { grid-template-columns:1.2fr 0.8fr; }
.reveal .split.wide-left { grid-template-columns:1.05fr 0.95fr; }
.reveal .split.wide-right { grid-template-columns:0.95fr 1.05fr; }
.reveal .split.trio { grid-template-columns:0.62fr 1.36fr 0.62fr; align-items:center; }
.reveal .slides section.c .split figure img { max-height:600px; }
.reveal .slides section.c figure.fig-tall img { max-height:720px; }
.reveal .slides section.c figure.fig-mid img { max-height:470px; }
.reveal .slides section.c figure.fig-small img { max-height:330px; }
.reveal .slides section.c figure.flat img { box-shadow:none; border-radius:4px; }
/* Flow diagrams (reference flow-node / flow-arrow) */
.reveal .flow { display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:0.4em; margin:0.5em 0; }
.reveal .flow-node { background:rgba(212,175,55,0.13); border:2px solid var(--antique-gold); color:#F5F1E8; border-radius:10px; padding:0.35em 0.7em; font-family:'Crimson Pro',serif; font-weight:700; font-size:0.92em; text-align:center; line-height:1.2; }
.reveal .flow-node.teal { border-color:var(--teal-light); background:rgba(44,120,115,0.24); }
.reveal .flow-node.big { font-size:1.08em; padding:0.5em 0.9em; background:rgba(212,175,55,0.2); }
.reveal .flow-arrow { color:var(--teal-light); font-size:1.25em; font-weight:700; }
.reveal .flow.converge { display:grid; grid-template-columns:1fr auto 1.05fr; gap:0.6em; align-items:center; }
.reveal .flow.converge .sources { display:grid; grid-template-columns:1fr 1fr; gap:0.4em; }
/* Vertical timeline with date badges */
.reveal .tl { list-style:none; margin:0.2em 0 0 0; padding:0; border-left:4px solid rgba(233,154,154,0.6); }
.reveal .slides section.c .tl li { padding-left:1.1em; margin:0 0 0.55em 0.0em; position:relative; }
.reveal .slides section.c .tl li:before { content:""; position:absolute; left:-0.42em; top:0.38em; width:0.6em; height:0.6em; border-radius:50%; background:var(--crimson-light); }
.reveal .tl .date { display:inline-block; font-family:'Crimson Pro',serif; font-weight:700; color:#1A1A1A; background:var(--gold-light); border-radius:6px; padding:0 0.4em; margin-right:0.35em; font-size:0.9em; }
.reveal .slides section.c .tl.down { border-left-color:rgba(95,179,173,0.6); }
.reveal .slides section.c .tl.down li:before { background:var(--teal-light); }
/* Big statement (reference big-statement) */
.reveal .big-statement { font-family:'Crimson Pro',serif; font-weight:600; font-size:1.5em; line-height:1.22; color:var(--soft-cream); text-align:center; margin:0.2em auto 0.5em; max-width:1500px; }
.reveal .big-statement em { color:var(--antique-gold) !important; font-style:normal; }
/* ---- Full-bleed image slides ---- */
/* Reveal copies section classes onto its .slide-background element, so the scrim can be drawn on the background itself. */
.reveal .slide-background.bleed .slide-background-content::after { content:""; position:absolute; inset:0; pointer-events:none; }
.reveal .slide-background.scrim-left .slide-background-content::after { background:linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.80) 38%, rgba(10,10,10,0.25) 70%, rgba(10,10,10,0.10) 100%); }
.reveal .slide-background.scrim-right .slide-background-content::after { background:linear-gradient(270deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.80) 40%, rgba(10,10,10,0.25) 72%, rgba(10,10,10,0.08) 100%); }
.reveal .slide-background.scrim-full .slide-background-content::after { background:linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.82) 100%); }
.reveal .slide-background.scrim-bottom .slide-background-content::after { background:linear-gradient(180deg, rgba(10,10,10,0.0) 30%, rgba(10,10,10,0.72) 62%, rgba(10,10,10,0.94) 100%); }
/* Portrait bleed: a tall portrait fills one side from top to bottom and fades into the charcoal */
.reveal .slide-background.portrait-right .slide-background-content { background-size:auto 100% !important; background-position:right center !important; background-repeat:no-repeat; }
.reveal .slide-background.portrait-right .slide-background-content::after { background:linear-gradient(90deg, #1A1A1A 0%, #1A1A1A 52%, rgba(26,26,26,0.55) 62%, rgba(26,26,26,0) 74%); }
.reveal .slides section.c.bleed { height:1040px; }
.reveal .bleed-stage { position:relative; height:1040px; display:flex; flex-direction:column; justify-content:center; }
.reveal .bleed-stage.bottom { justify-content:flex-end; padding-bottom:70px; box-sizing:border-box; }
.reveal .scrim-panel { background:rgba(12,12,12,0.80); border:1px solid rgba(212,175,55,0.4); border-radius:14px; box-shadow:0 8px 30px rgba(0,0,0,0.5); padding:0.6em 1em 0.75em; }
.reveal .scrim-panel.side-left { max-width:56%; margin:0 auto 0 0; }
.reveal .scrim-panel.side-right { max-width:56%; margin:0 0 0 auto; }
.reveal .scrim-panel.wide { max-width:1500px; margin:0 auto; }
.reveal .plain-left { max-width:52%; margin:0 auto 0 0; }
.reveal .slides section.c.bleed h1 { text-shadow:0 3px 12px rgba(0,0,0,0.7); }
.reveal .bleed-caption { position:absolute; right:0; bottom:0; max-width:52%; text-align:right; font-size:0.42em; line-height:1.3; color:#E8E1D2; background:rgba(10,10,10,0.78); padding:0.35em 0.7em; border-radius:6px; }
.reveal .bleed-caption.left { right:auto; left:3.5em; }
.reveal .slides section.c.bleed .bleed-caption em { color:#E8E1D2; }
/* Title slide as a full bleed */
.reveal .title-overlay { background:rgba(12,14,18,0.84); border:2px solid rgba(212,175,55,0.6); border-radius:14px; padding:1.1em 1.6em 1.2em; max-width:860px; margin:0 auto 0 0; text-align:left; box-shadow:0 8px 30px rgba(0,0,0,0.5); }
.reveal .title-overlay h1 { font-size:3.1em; line-height:1.02; margin:0.1em 0 0.15em 0; text-shadow:0 3px 14px rgba(0,0,0,0.6); }
.reveal .title-rule { width:150px; height:3px; background:var(--antique-gold); margin:0.45em 0 0.55em; opacity:0.85; }
/* Activity prompt, reference assessment-prompt look in HIST 101 gold */
.reveal .slides section.c.pause .steps { display:grid; grid-template-columns:repeat(3,1fr); gap:0.5em; margin:0.3em 0 0.5em; padding:0; list-style:none; counter-reset:step; }
.reveal .slides section.c.pause .steps li { counter-increment:step; background:rgba(44,120,115,0.22); border-top:4px solid var(--teal-light); border-radius:10px; padding:0.45em 0.7em; margin:0; font-size:0.78em; line-height:1.35; }
.reveal .slides section.c.pause .steps li::before { content:counter(step); position:static; display:block; font-family:'Crimson Pro',serif; font-weight:700; font-size:1.5em; color:var(--antique-gold); line-height:1; margin-bottom:0.15em; }
.reveal .slides section.c ul.compact li { margin-bottom:0.25em; }
.reveal .slides section.c .sm { font-size:0.9em; }
/* pass 2 */
.reveal .slides section.c .title-overlay h1 { font-size:3.6em; border-bottom:none; padding-bottom:0; margin:0.05em 0 0.05em 0; }
.reveal .title-overlay p { font-size:1.05em; }
.reveal .slide-background.portrait-right .slide-background-content::after { background:linear-gradient(90deg, #1A1A1A 0%, #1A1A1A 60%, rgba(26,26,26,0.85) 63%, rgba(26,26,26,0.45) 70%, rgba(26,26,26,0) 80%) !important; }
.reveal .box.quote { font-family:'Lora',serif; font-style:normal; font-size:0.9em; line-height:1.45; }
.reveal .box.quote .box-label { font-size:0.62em; }
.reveal .box.quote .q { font-family:'Crimson Pro',serif; font-style:italic; font-weight:700; font-size:1.3em; color:var(--gold-light); }
.reveal .card.dem { background:rgba(47,98,168,0.30); border-top:4px solid #6F9BDB; }
.reveal .card.dem h3 { color:#A9C4EE; }
.reveal .card-grid.stack .card.dem { border-left-color:#6F9BDB; }
.reveal .flow.pair { display:grid; grid-template-columns:1fr auto 1fr; max-width:1500px; margin:0.4em auto; }
.reveal .flow.pair .flow-node { height:100%; box-sizing:border-box; display:flex; align-items:center; justify-content:center; font-size:0.95em; }
.reveal .slides section.c.pause .steps li { font-size:0.9em; }
.reveal .kk-wrap { display:grid; grid-template-columns:1.15fr 0.85fr; gap:1.4em; align-items:center; }
.reveal .slides section.c .tl.big li { font-size:1.0em; margin-bottom:0.7em; }
.reveal .title-overlay p.kicker { font-size:0.66em; }
```

When a later deck truly needs a new helper (for example `portrait-left`), add it under a short comment after this block, and update this guide so the next deck can paste one source of truth.
