# Jurgis - The Jungle AI Tutor

## Overview
**Jurgis** is an interactive AI tutor that guides students through *The Jungle* Chapters 9 & 14, verifying reading comprehension and connecting their reactions to the Progressive Era framework from lecture.

## Files Included
1. **jungle_tutor.html** - The interactive React-based chat interface (named "Jurgis")
2. **README.md** - This file

---

## Quick Start (Uses Existing API)

**Good news!** This chatbot uses the **same Val.Town API endpoint** as your Professor Quibble chatbot (`phil120tutor.val.run`), so there's no additional backend setup required.

### Deployment Options

#### Option A: GitHub Pages (Recommended)
1. Create a new GitHub repository (e.g., "jungle-tutor")
2. Upload `jungle_tutor.html`
3. Go to Settings → Pages
4. Select main branch, root folder, and save
5. Your chatbot will be live at: `https://yourusername.github.io/jungle-tutor/jungle_tutor.html`

#### Option B: Direct File Use
1. Download `jungle_tutor.html` to your computer
2. Open it in any modern web browser (Chrome, Firefox, Safari, Edge)
3. Share the file with students via your LMS or email
4. Students can open it locally - it requires internet for API calls only

#### Option C: Val.Town Static Hosting
1. Go to val.town and create a new "Static" val
2. Paste the HTML content
3. Save - it will be live immediately at a val.town URL

---

## Customization

### Adding a Jurgis Avatar Image
The HTML references `jurgis.jpg` for the avatar. To add one:
1. Find or create an appropriate image (historical photo, book illustration, or AI-generated portrait)
2. Name it `jurgis.jpg`
3. Place it in the same directory as `jungle_tutor.html`
4. Or update lines with `jurgis.jpg` to point to your image URL

### Changing Colors
The chatbot uses a slate gray theme. To change colors, search for these classes in the HTML:
- `bg-slate-700`, `bg-slate-800` - Header colors
- `from-slate-800 via-slate-700 to-slate-900` - Background gradient
- Modify these Tailwind classes to your preferred color scheme

### Modifying Questions
The question bank is in the system prompt (starts around line 105). You can:
- Add new questions
- Remove questions
- Change the 75% pass threshold
- Adjust the maximum number of questions (currently 10)

---

## How the API Works

This chatbot uses the **same API infrastructure as Professor Quibble**:
- **Endpoint:** `https://phil120tutor.val.run/`
- **Model:** Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- **Authentication:** Handled by the Val.Town proxy
- **No additional setup needed** if your Professor Quibble API is already working

The API call structure:
```javascript
{
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1000,
  system: "...", // The full pedagogical prompt
  messages: [...]  // Conversation history
}
```

---

## Need a Separate API Endpoint?

If you want Jurgis to use its own dedicated API (separate from Professor Quibble), you can:

1. **Create a new Val.Town endpoint:**
   - Name it something like `jungletutorapi`
   - Use the same code as your `phil120tutor` endpoint
   - Update line 19 in `jungle_tutor.html` to point to your new endpoint

2. **Or keep using the shared endpoint:**
   - The current setup works perfectly fine
   - All chatbots can share the same API proxy
   - They're differentiated by their system prompts, not their endpoints

---

## Conversation Flow (4-Phase Pedagogical Architecture)

### **Phase 1: Reading Check (up to 10 questions)**
**Goal:** Verify engagement with Chapters 9 & 14

- Jurgis asks questions one at a time, alternating between chapters
- If student answers Q1-Q4 solidly → advance to Phase 2
- If answers are weak → continue up to 10 questions total
- Pass requirement: ≥75% correct answers
- Fail: <75% = "Please reread and come back"

**Sample Questions:**
- Chapter 9: What job does Jurgis get after his injury? What is the "speeding up" system?
- Chapter 14: What goes into the sausages? What happened in the pickling rooms?

---

### **Phase 2: Reaction Capture**
**Goal:** Get honest, unfiltered response BEFORE applying framework

Jurgis asks:
1. Between the two chapters, which scenes affected you more strongly?
2. What kind of feeling did each section produce in you? (encourages detailed response)
3. If you had to pick ONE problem to solve immediately, what would it be?

**Key feature:** No judgment, just listening. Records authentic reactions before theoretical framework is introduced.

---

### **Phase 3: Apply the Framework**
**Goal:** Connect lecture analysis to personal reading experience

Jurgis introduces the Sinclair quote: *"I aimed at the public's heart, and by accident I hit it in the stomach."*

Then asks:
1. Does the lecture's framework (middle-class concerns vs. working-class exploitation) explain your reaction?
2. What does your response tell you about whose suffering registers as "crisis" vs. "tragic but normal"?

**Special handling:** If student's reaction diverges from the 1906 pattern, Jurgis validates it as data and explores why their reading position differs from historical middle-class readers.

---

### **Phase 4: Complicate It**
**Goal:** Push beyond simple application to critical thinking

Questions:
1. Why might the same pattern (middle-class concerns win) still hold in 2026? Or why might it not?
2. What doesn't the framework explain about your reaction? Where did you surprise yourself?
3. Contemporary parallels: What's today's "contaminated meat" issue? What's the "worker exploitation" we ignore?

**Pedagogical move:** Encourages transfer learning and metacognition

---

## Academic Integrity & Privacy

### What Students Should Know:
- This tool is for **learning**, not assessment
- Conversations help develop critical thinking skills
- AI can detect copied/AI-generated responses
- The value is in the thinking process, not "passing" the check

### Data & Privacy:
- Conversation history stored in browser memory only (session-based)
- No student data saved on servers
- Val.Town API logs requests but not conversation content
- Anthropic may log API interactions per their policy

### Making It More Private:
- Add student authentication
- Self-host instead of using Val.Town
- Implement server-side logging with proper consent forms

---

## Cost Considerations

**Anthropic API Costs (via Val.Town proxy):**
- Claude Sonnet 4: ~$3 per million input tokens, ~$15 per million output tokens
- Average conversation: 20-40 messages (Phase 1-4 completion)
- Estimated cost per student: **$0.10-0.25**
- For 100 students: **$10-25 total**

**Val.Town Costs:**
- Shared endpoint with Professor Quibble = no additional cost
- Free tier supports typical classroom usage

---

## Troubleshooting

### "Error communicating with AI"
- Check browser console for specific error messages
- Verify Val.Town endpoint is responding: visit `https://phil120tutor.val.run/` in browser
- Ensure your Professor Quibble API is still working

### Slow First Response
- First API call may take 5-10 seconds (cold start)
- Subsequent responses faster (API stays warm)
- This is normal Val.Town behavior

### CORS Issues
- Val.Town proxy handles CORS automatically
- If you see CORS errors, the API endpoint may need updating

### Avatar Image Not Loading
- The `jurgis.jpg` image is optional
- If image fails to load, the HTML hides it gracefully
- No functionality is lost without the image

---

## Customization Examples

### Change Pass Threshold from 75% to 80%:
In the system prompt (around line 113), change:
```
* Calculate accuracy: ≥75% correct → advance to Phase 2
```
to:
```
* Calculate accuracy: ≥80% correct → advance to Phase 2
```

### Add More Questions:
Add to the Question Bank section (around line 117):
```
Chapter 9:
11. How does Jurgis's perspective on America change after his injury?
```

### Modify Color Scheme to Match Your Course Branding:
Replace Tailwind classes:
- `slate-700` → `blue-700` (or your school colors)
- `slate-800` → `blue-800`
- Apply consistently throughout the HTML

---

## Technical Architecture

**Frontend:**
- React 18 (loaded via CDN)
- Tailwind CSS (loaded via CDN)
- Babel standalone (for JSX transformation)
- Single HTML file (no build process)

**Backend:**
- Val.Town proxy (shared with Professor Quibble)
- Anthropic Claude API
- Model: Claude Sonnet 4

**Deployment:**
- Static file hosting (GitHub Pages, Val.Town, or local)
- No server-side code required
- Works on any modern browser

---

## Support & Resources

**For Technical Issues:**
- Val.Town docs: https://docs.val.town
- Anthropic docs: https://docs.anthropic.com
- React docs: https://react.dev

**For Pedagogical Questions:**
- Refer to the 4-phase instructional design document
- Modify system prompt to align with your course objectives

---

## Credits & License

**Created for:**
- College American History courses
- *The Jungle* by Upton Sinclair (1906)
- Progressive Era historical analysis

**Architecture:**
- Based on Professor Quibble's Socratic dialogue framework
- Adapted for guided reading verification + framework application

**License:**
- Free for educational use
- Modify freely for your courses
- No attribution required

---

**Version 1.0** - February 2026

**Companion to:** HIST 101/102 Progressive Era unit
