# Understanding Ethnic Cleansing: Frameworks and Case Studies

A comparative historical study website for HIST 101/102.

## Design Specifications

**Color Palette: Somber Neutrals with Accent**
- Background: Deep charcoal `#2B2D2F`
- Text: Warm off-white `#E8E6E3`
- Primary accent: Muted burgundy `#8B4049` (headers, important elements)
- Secondary accent: Steel blue `#4A5A6A` (links, secondary elements)
- Borders/dividers: Slate gray `#58595B`

**Typography:**
- Primary (headings): Merriweather (serif)
- Secondary (body): Open Sans (sans-serif)

## Site Structure

```
ethnic-cleansing-study/
├── index.html              # Homepage with "Choose Your Path" cards
├── concept.html            # Framework/concept introduction
├── cases.html              # Case studies overview
├── resources.html          # Multimedia resources
├── comparative-analysis.html  # (To be created)
├── sources.html            # (To be created)
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript for interactions
├── images/                 # Historical photos, maps, etc.
└── slides/                 # Reveal.js presentations
    ├── ethnic-cleansing-concept.html
    ├── trail-of-tears.html
    └── jewish-displacement.html
```

## Features Implemented

### ✅ Completed
- Responsive design (mobile, tablet, desktop)
- Interactive card-based navigation with hover effects
- Smooth scroll animations
- Sticky header navigation with scroll effects
- Breadcrumb navigation on subpages
- Suggested learning path on homepage
- Accessible color contrast (WCAG AA compliant)
- Clean, professional typography

### 🚧 Placeholders (To Be Added)
- Interactive map showing geographic distribution
- Interactive timeline (1830s → 1990s)
- Embedded Reveal.js presentations
- Video/podcast embeds
- Primary source collections
- Image galleries
- Comparative analysis page
- Individual case study detail pages

## Deployment Instructions

### Option 1: GitHub Pages + Cloudflare

1. **Create GitHub Repository:**
   ```bash
   cd ethnic-cleansing-study
   git init
   git add .
   git commit -m "Initial commit: site structure and homepage"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ethnic-cleansing-study.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Connect Cloudflare:**
   - Add site to Cloudflare
   - Point CNAME to `YOUR_USERNAME.github.io`
   - Configure SSL/TLS settings

### Option 2: Direct Cloudflare Pages

1. **Push to GitHub** (same as above)
2. **In Cloudflare Dashboard:**
   - Pages → Create a project
   - Connect to Git → Select repository
   - Build settings: None needed (static site)
   - Deploy

## Next Steps

1. **Add Reveal.js presentations:**
   - Copy your existing ethnic cleansing concept slides to `slides/ethnic-cleansing-concept.html`
   - Create Trail of Tears slides at `slides/trail-of-tears.html`
   - Create Jewish displacement slides at `slides/jewish-displacement.html`

2. **Embed presentations in pages:**
   ```html
   <iframe src="slides/ethnic-cleansing-concept.html" 
           width="100%" 
           height="600px" 
           frameborder="0">
   </iframe>
   ```

3. **Create individual case study pages:**
   - `yugoslav-wars.html`
   - `trail-of-tears.html`
   - `jewish-displacement.html`

4. **Add interactive map** (using Leaflet.js or similar)

5. **Add interactive timeline** (using Timeline.js)

6. **Populate resources page** with curated videos, podcasts, etc.

## Customization Notes

### Adding New Cards

To add a new navigation card to the homepage:

```html
<a href="your-page.html" class="card">
    <div class="card-icon">🔍</div>
    <h3 class="card-title">Your Title</h3>
    <p class="card-description">
        Your description text here.
    </p>
</a>
```

### Color Adjustments

All colors are defined as CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #2B2D2F;
    --text-primary: #E8E6E3;
    --accent-burgundy: #8B4049;
    --accent-steel: #4A5A6A;
    --border-slate: #58595B;
}
```

Change values here to update colors site-wide.

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design works on all modern mobile browsers

## Accessibility

- WCAG AA color contrast compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Responsive text sizing

## Contact

Questions or issues? Contact course instructor.

---

**Last Updated:** December 19, 2025
