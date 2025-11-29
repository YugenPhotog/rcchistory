# Pierian Spring - Setup Instructions

## Overview
The Pierian Spring is a dedicated space for deeper historical inquiries that go beyond textbook coverage. Students can explore complex questions with nuanced answers, primary sources, and further reading.

## File Structure

```
hist-101/pierian_spring/
├── index.html                          (Landing page)
├── style.css                           (Landing page styles)
├── pierian_spring_background.webp      (Your background image)
├── topics/
│   ├── topic-page.css                  (Shared styles for all topic pages)
│   ├── democratic-party-transformation.html
│   ├── civil-war-memory.html
│   ├── trail-of-tears.html
│   └── [future topics...]
└── README.md                           (This file)
```

## Installation Steps

1. **Copy these files to your site:**
   - Place `pierian_spring_index.html` → rename to `index.html`
   - Place `pierian_spring_style.css` → rename to `style.css`
   - Your background image is already at: `pierian_spring_background.webp`
   - Create a `topics/` subdirectory

2. **Create the topics folder:**
   - Inside `pierian_spring/`, create a folder called `topics`
   - Place `topic_page_style.css` inside the topics folder (rename to `topic-page.css`)
   - Place `sample_topic_page.html` inside topics folder (rename as needed)

3. **Verify paths:**
   - Background image path in `style.css` should be: `pierian_spring_background.webp`
   - This is correct based on your folder structure

## Adding New Topics

### Step 1: Create the HTML file
Copy `sample_topic_page.html` and rename it (e.g., `civil-war-memory.html`)

### Step 2: Update the content
Replace these sections:
- `<title>` tag
- `<h1>` (main heading)
- `.topic-subtitle` (subheading)
- `.student-question` (the original student question)
- All content sections

### Step 3: Add to landing page
In `index.html`, add a new `<li class="topic-item">` with:
```html
<li class="topic-item">
    <a href="topics/your-new-topic.html">
        <span class="topic-icon">💧</span>
        <span class="topic-title">Your Topic Title</span>
        <span class="topic-subtitle">Brief description</span>
    </a>
</li>
```

## Customization Tips

### Changing Colors
In `style.css`, look for these key colors:
- **Overlay background**: `rgba(107, 44, 62, 0.90)` (burgundy)
- **Accent gold**: `#D4AF37`
- **Text cream**: `#F5F1E8`
- **Border sage**: `#7C9885`

### Changing Fonts
Google Fonts are loaded in the HTML `<head>`:
- Currently using: **Crimson Text** (serif) and **Lato** (sans-serif)
- To change: Replace the Google Fonts link and update `font-family` in CSS

### Mobile Optimization
The design is already responsive. Test on mobile by resizing your browser or using Chrome DevTools (F12 → Toggle device toolbar)

## Linking from Canvas

### Option 1: Direct Link
In Canvas, create a module item with external URL:
```
https://austin-academics.com/hist-101/pierian_spring/index.html
```

### Option 2: Embedded Page
Create a Canvas Page and use the HTML editor to embed an iframe:
```html
<iframe src="https://austin-academics.com/hist-101/pierian_spring/index.html" 
        width="100%" 
        height="800px" 
        style="border: none;">
</iframe>
```

### Option 3: Module Description
Add a text block in your Canvas module:
```
🏛️ Drink deep, or taste not the Pierian spring

Explore deeper inquiries in American history:
[Link to Pierian Spring]
```

## Content Guidelines

### What Makes a Good "Pierian Spring" Topic?
- Student-generated questions that deserve more than a quick answer
- Topics that require historiographical nuance
- Questions that challenge presentism or require understanding context
- Connections across time periods or themes

### Structure for Each Topic
1. **The Question** - Validate the student's curiosity
2. **The Short Answer** - 2-3 paragraphs with key insight
3. **Going Deeper** - Historical context, turning points, scholarly frameworks
4. **Primary Sources & Further Reading** - Links to your Google Drive docs, scholarly works
5. **Questions to Consider** - Prompts for critical thinking

### Tone Guidelines
- Conversational but scholarly
- Acknowledge complexity without being overwhelming
- Show your own intellectual process ("Here's the key insight...")
- Connect to course materials where relevant
- Invite further discussion in office hours

## Technical Notes

- **Background image**: Fixed attachment on desktop, scrolls on mobile for performance
- **Accessibility**: Semantic HTML5, sufficient color contrast
- **Print-friendly**: CSS includes print styles for students who want hard copies
- **Load time**: WebP format keeps page load under 2 seconds on average connection

## Future Enhancements

Ideas for expanding the Pierian Spring:
- Student submission form (Google Form integration)
- "Related Topics" links between inquiries
- Audio versions for accessibility
- Timeline visualization for transformation topics
- Search functionality when you have 10+ topics

## Questions?

If you need help customizing or have technical issues, you know where to find me!

---

*"A little learning is a dangerous thing; drink deep, or taste not the Pierian spring."*  
— Alexander Pope, *An Essay on Criticism* (1711)
