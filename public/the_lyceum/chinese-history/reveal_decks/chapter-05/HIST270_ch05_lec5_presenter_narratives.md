# HIST 270 · Chapter 5 · Lecture 5 — Presenter Narratives

**Deck:** `HIST270_ch05_lec5_an_lushan_aftermath_revFA26.html`
**Course:** HIST 270, History of China — Richland Community College
**Purpose:** Full-prose podium narratives for the An Lushan Rebellion arc, to be inserted as Reveal.js presenter notes.

These are written to be **read aloud directly from the podium**. They contain no stage directions ("pause here," "let that sit," "write this on the board"), no bracketed instructions, and no second-person coaching. Every paragraph is deliverable text.

---

# PART ONE — AGENT INSERTION INSTRUCTIONS

## What you are doing

Replace the existing `<aside class="notes">` content on the slides listed in Part Two with the narrative text provided for each. The current asides are brief factual summaries; these narratives replace them entirely.

## Conversion rules

1. **One `<p>` per paragraph.** Each paragraph break in the narrative becomes a separate `<p>` element inside the `<aside class="notes">` block. Do not merge paragraphs into a single `<p>`; the instructor reads from these and paragraph breaks are breathing points.

2. **Structure of each block:**
   ```html
   <aside class="notes">
     <p>First paragraph.</p>
     <p>Second paragraph.</p>
   </aside>
   ```

3. **Preserve the `<aside class="notes">` wrapper and its class exactly.** The stylesheet contains `.reveal aside.notes { display:none; }` and the deck initializes `RevealNotes`. Notes appear only in speaker view (press `S`). Do not move this content onto the slide face.

4. **Character handling.** Use typographic apostrophes and quotes (’ “ ”) consistently with the rest of the file. Escape `&` as `&amp;`. Do not escape apostrophes. Do not introduce `<br>` inside narrative paragraphs.

5. **Italics.** Where the narrative italicizes a transliterated term (*fubing*, *jiedushi*, *shi*), render as `<em>fubing</em>`. Note that the deck's CSS colors `em` as `#71B3AD`; this is correct and intended.

6. **Length is expected.** These notes are substantially longer than the originals. That is the point. Do not abridge, summarize, or trim them to match the previous length.

7. **Do not alter slide faces in this pass.** Slide-face content is governed by a separate revision brief. If a slide's visible content has already been revised per that brief, insert the matching narrative; if not, insert it anyway — the narratives are written to work with the revised deck and remain deliverable against the current one.

## Slide identification

Slides are identified below by their `<p class="kicker">` text and `<h2>` heading, not by index number, because a companion revision may have inserted slides. **Match on kicker + heading.** If a target slide does not exist in the file, see "Slides that may not exist yet" below.

## Slides that may not exist yet

Three narratives below correspond to slides created by the companion revision brief:

- **The trade-off** (a new slide splitting the military-background content in two)
- **Pause &amp; Reflect — the trade-off**
- **Pause &amp; Reflect — where responsibility lies**

If those slides are present, insert the matching narratives. If they are not present:

- Append the **trade-off** narrative to the end of the military-background slide's notes, separated by `<p><strong>If delivered on a single slide, continue:</strong></p>`.
- Hold the two Pause &amp; Reflect narratives in a trailing HTML comment at the end of the `<div class="slides">` block, formatted as:
  ```html
  <!-- UNPLACED PRESENTER NARRATIVE — Pause & Reflect (trade-off)
       [narrative text]
  -->
  ```
  Do not create new `<section>` elements for them yourself.

## Do not change

- Any `<p class="source-line">` element
- Any slide-face markup, CSS, CDN link, font link, or the `Reveal.initialize` call
- Any slide not named in Part Two

## Report when finished

List which slides received narratives, which were not found, and whether any narrative was appended or held in a comment rather than placed.

---

# PART TWO — THE NARRATIVES

---

## Title slide

**Kicker:** HIST 270 · Chapter 5 · Lecture 5
**Heading:** An Lushan's Rebellion Changed Tang Government and Society

### Narrative (~2 min)

Today we are going to watch an empire solve a problem correctly and destroy itself in the process.

The Tang dynasty in the 740s was arguably the most powerful state on earth. Chang'an was the largest city in the world. The examination system was drawing talent into the bureaucracy, the Silk Road was carrying Sogdian merchants and Buddhist monks and Persian silver into the capital, and the poetry written in that decade is still the standard against which Chinese poetry is measured. Then, within a single decade, the dynasty suffered a blow it never recovered from. It survived another century and a half, but it was never again the state it had been in 750.

Historians have been explaining that collapse for twelve hundred years, and the oldest explanation blames individuals — a treacherous general, a corrupt minister, a beautiful consort, an emperor grown careless in old age. We will meet all of those people today, and I am not going to tell you they were blameless. But I want to begin somewhere much less dramatic, with a question about military administration, because the argument of this lecture is that the dynasty's catastrophe was built into the way it defended its borders.

Here is the question to hold for the next thirty-five minutes. If every individual decision along the way was defensible, where exactly does the responsibility lie?

---

## Slide: The military background

**Kicker:** The military background
**Heading:** Frontier defense shifted from rotating farmer-soldiers to professional armies.

### Narrative (~5 min)

Start on the left of the screen. The *fubing* system — the militia system — was not a Tang invention. The Tang inherited it from its northern predecessors, and it was in its way an elegant piece of institutional design. Certain prefectures contained designated militia households. The men of those households were farmers. They equipped themselves, they trained in the agricultural off-season, and they rotated into service — a tour guarding the capital, a season on campaign — and then they went home to their fields. In exchange their households received relief from some taxes and labor obligations.

Consider what that arrangement accomplishes. The state gets an army it barely has to pay, because the soldiers feed themselves from their own land. It gets soldiers whose loyalty runs to their households and their registered fields, which is to say to the state that guarantees both. And because the men go home, no commander ever accumulates a body of troops who belong to him personally. The army dissolves back into the countryside between campaigns.

It is a system built for short wars near home.

The middle panel is what broke it. The early Tang had been spectacularly expansionist. Taizong and Gaozong pushed the frontier out across the Gobi, into the Tarim Basin oases, and into Korea. That expansion worked, and its success was the problem: the frontier was now thousands of miles from the militia prefectures that supplied the soldiers. Meanwhile the threats on that frontier changed character. The Tibetan Empire consolidated into a genuine rival state and contested the northwest for a century. The Khitans pressed the northeast. These were not raids you repel in a season. They were permanent strategic problems requiring permanent garrisons at enormous distance.

So consider what the militia system looks like under those conditions. A farmer from Hebei is sent to garrison the Tarim Basin. The journey alone consumes months. His tour stretches into years. His fields go unworked, his household falls into debt, and he may well not come back. At the same time the equal-field system that was supposed to guarantee every household its land was decaying under population growth and elite land concentration, so militia families increasingly could not afford the equipment they were required to furnish. Men stopped reporting. Service became a sentence rather than an obligation, and the militia rolls emptied.

By the 730s the system had ceased to function. In 737 the court formally shifted to recruited, long-service troops. In 749 the militia muster was abolished outright. The farmer-soldier, after two centuries, was finished.

Which brings us to the right-hand panel. The replacement was professional, and on purely military terms it was superior. These were career soldiers, recruited and paid, who served for years in one theater under one commander. They knew their ground, they knew their enemies, and they knew each other. They were, by any reasonable measure, the finest troops the Tang ever fielded, and they held a frontier the militia could no longer have held at all.

Now read the line across the bottom of the slide, because it is the thesis of this entire lecture. The new system made military power more permanent and more regional.

Permanent, because these armies no longer dissolved into the countryside. They existed continuously, year after year, whether or not there was a war.

Regional, because they were stationed at the frontier and supplied from the frontier, far beyond the reach of the capital's direct administration.

And notice what the shift did to the question of loyalty, which is the single most important thing on this slide. A militiaman's loyalty ran to his household and his land. A professional soldier's loyalty ran to the officer who recruited him, paid him, fed him, and led him — the same officer, for a decade at a time.

---

## Slide: The trade-off

*(New slide from the companion revision — see "Slides that may not exist yet.")*

**Kicker:** The trade-off
**Heading:** *(as built — comparison of the two systems)*

### Narrative (~2 min)

Set the two systems side by side, because the comparison is the whole lesson.

The militia army was cheap, because soldiers fed themselves. It was politically safe, because loyalty ran to household and land, and because the army dissolved between campaigns so no commander could accumulate men of his own. And it was militarily inadequate to the empire the Tang had actually built.

The professional army was expensive, because the state now paid, fed, and equipped everyone. It was politically dangerous, because loyalty ran to the commander and the army never dissolved. And it was militarily excellent — the only force capable of holding the frontier the Tang had acquired.

The Tang court did not blunder into this. It was presented with a genuine dilemma: a defunct militia on one side and a frontier that would not wait on the other. It chose the only workable answer available to it.

But the institution it created had a property no one designed and no one examined. It concentrated permanent military force in the hands of regional commanders whose men owed their livelihoods to them rather than to the throne. That property is the subject of everything that follows.

---

## Slide: Pause & Reflect — the trade-off

*(New slide from the companion revision — see "Slides that may not exist yet.")*

### Narrative (~3 min)

Take two minutes with the person next to you on this question.

The Tang replaced a cheap, loyal, militarily inadequate army with an expensive, effective, structurally dangerous one. Was there a third option? Could the court have had an army good enough to hold the frontier without handing permanent force to regional commanders — and if not, is this simply what it costs to defend an empire of that size?

What I am listening for is not a right answer. I want to know whether you think this was a mistake or a bill.

---

## Slide: Frontier commands

**Kicker:** Frontier commands
**Heading:** Tang military governors commanded troops across a wide frontier zone.

### Narrative (~4 min)

Imagine you are the Tang court in Chang'an. A Tibetan column crosses into Gansu. A Khitan raiding party hits the northeast. By the time a report reaches you and your order rides back out, six weeks have passed and the raiders are gone, along with your grain, your horses, and your subjects. The obvious solution is to put someone in charge out there.

So around 710 the court begins appointing officials called *jiedushi*, and the translation of that title is the whole story of this lecture.

The last character, *shi*, means commissioner — or better, envoy. An agent sent out. The word carries the idea of a tally, a token of imperial authority that the man carries with him. He does not own power. He carries the court's power out to the frontier and he hands it back when the job is done. That is a temporary, personal, revocable delegation: the Tang equivalent of a special envoy with emergency authority.

Now look at how your slide translates the same word. Military governor. A governor does not carry authority out and bring it back. A governor holds territory.

Your textbook is not being careless. Those are the same office at two different moments, and the drift from the first word to the second is what this lecture is about. The court appointed commissioners. What it got were governors.

Watch the mechanism, because nobody decided this. Speed requires autonomy — if a commissioner must wait for Chang'an, he is useless, so he is granted authority to act. An army needs to eat, and supply lines from the capital across those distances are impossible, so he is granted control over local taxation. He needs subordinates he can trust, so he is granted appointments. And troops who serve for years rather than rotating home become his troops. They know his face, not the emperor's.

Military power, fiscal power, administrative power. Each grant was a reasonable answer to a real logistical problem. Together they are the definition of a province.

At what point does a commissioner stop being an envoy? Nobody announced it. There was no decree. The tally simply stopped going back.

By 742 there are roughly ten of these commands running in an arc from Manchuria across the northwest and down toward Sichuan — call it half a million soldiers. That is where the Tang army now lives. The schematic on your screen is not a map of borders; it is a picture of how much authority had been lent outward, and how far from the capital it sat.

---

## Slide: An Lushan

**Kicker:** An Lushan
**Heading:** An Lushan's military career placed him at the center of frontier power.

### Narrative (~4 min)

Here is the version of An Lushan you will find in the old sources, and in a great deal of popular retelling. A grotesquely fat barbarian. A court favorite who charmed Emperor Xuanzong and Consort Yang Guifei with buffoonery. A man adopted as Yang Guifei's son in a strange palace ceremony. Treacherous, foreign, personally repellent — and therefore the rebellion is his personal crime.

Set that aside. Not because all of it is invented, but because it is an explanation, and it is the explanation written by the people he nearly destroyed. This slide gives you a different one, and a better one.

He came from a family of soldiers. That sounds like background detail. It is not. We established that the *fubing* militia had collapsed and that the Tang now depended on long-service professional armies on the frontier. That means there existed, for the first time in centuries, a career that ran entirely through the army and never touched the examination hall, the classics, or the capital. An Lushan is a product of that career. He is not an outsider who sneaked in. He is precisely what the new system was built to produce.

The textbook describes him as half Sogdian, half Turk. The Sogdians were the Central Asian merchant people of the Silk Road — Samarkand, Bukhara — the great commercial and linguistic middlemen of inner Asia. An Lushan reportedly spoke six languages, and he began his career as a market interpreter on the frontier.

So was that mixed background a liability or a qualification? It was a qualification. The Tang frontier is a multi-ethnic zone. The enemies are Khitan, Turk, Tibetan. A commander who can read those peoples, speak to them, recruit from them, and negotiate with them is worth more to the court than a classically educated gentleman from Chang'an who cannot do any of those things.

And there was a second reason the court wanted men like him. In the 740s the chief minister Li Linfu actively preferred non-Chinese generals, because a non-Chinese general had no route into the civil bureaucracy and so could never return to the capital and threaten his position. An Lushan's foreignness was part of the reason the court trusted him with armies. That is the irony to carry out of this room: the quality later blamed for the rebellion was among the qualities that earned him the command.

He commanded veteran troops rather than a temporary militia, and that is the hinge of the entire episode. A militiaman serves his rotation and returns to his farm; his loyalty runs to his land, his village, his household registration — to the state that recorded him. A professional soldier serving ten years under one commander, on a distant frontier, fed and paid through that commander's own supply apparatus, has his loyalty running to the man who feeds him.

When An Lushan moved in 755, those troops did not ask whether the order was legitimate. They followed the man they had followed for a decade. No one had to persuade an army to betray the dynasty. The army had already been detached from it.

From 744 he commanded in northern Hebei, with hard campaign experience against the Khitans. By 751 he held three frontier commands at once — Pinglu, Fanyang, and Hedong — roughly a hundred and sixty thousand troops under one man. Every one of those appointments was made by the court. Legally. Deliberately. For reasons that seemed sound at the time.

Which leaves the question for the next slide. The sources want you to believe the Tang collapsed because of one treacherous foreigner's ambition. But everything on this slide — his family, his background, his veteran troops, his three commands — is something the Tang state built, chose, and handed to him. If An Lushan had died of fever in 754, does the problem disappear? It does not. The system that produced him is still standing, and someone else holds those armies.

He had the men, the money, and the frontier. In 755 he found a reason.

---

## Slide: The rebellion begins · 755

**Kicker:** The rebellion begins · 755
**Heading:** An Lushan's veterans overwhelmed newly raised imperial troops.

### Narrative (~4 min)

In the twelfth month of 755, An Lushan declared that he was marching on the capital to remove the corrupt chief minister Yang Guozhong from the emperor's side. That was the stated reason, and it is worth noticing that it is a perfectly conventional one. He did not announce that he was overthrowing the Tang. He announced that he was rescuing it from bad advisors. Rebels in Chinese history almost always say this, because the claim lets wavering officials come over without having to admit they are traitors.

He crossed the Yellow River and moved south toward Luoyang, the eastern capital. Luoyang fell within weeks. By the first month of 756 An Lushan had declared himself emperor of a new dynasty, the Yan.

Notice the speed. This is not a long insurgency that grinds down a government over decades. A frontier army walks into the wealthiest, most densely populated, most administratively sophisticated region on earth, and the eastern capital falls almost immediately.

The middle panel explains why. Newly recruited troops proved no match for experienced veterans.

Consider the position the court found itself in. Its army was on the frontier. That was the entire design of the system we have been describing — the professional field armies were stationed where the threats were, in the northeast, the northwest, and the southwest. The interior of the empire, the rich agricultural core along the Yellow River and the Grand Canal, had been effectively demilitarized for decades. There had been no serious fighting there in living memory, and no reason to keep veteran formations standing in provinces nobody was attacking.

So when the attack came from inside, from one of its own commanders, the court had almost nothing in place to meet it. It did what a government does in that position: it raised troops quickly. Conscripts, volunteers, market men from Luoyang and Chang'an, armed and organized in weeks. Against them came soldiers who had spent a decade fighting Khitan cavalry on the northern steppe under the same commander.

That is not a contest. A newly raised force can be brave and still be useless, because what veterans possess is not courage but the capacity to hold formation under pressure, to maneuver on command, and to keep functioning when a line breaks. Those things take years. The Tang did not have years. It had weeks.

Then the third panel. In the sixth month of 756 the rebels broke through the Tong Pass, the fortified gateway guarding the approach to Chang'an, and the road to the western capital lay open. Emperor Xuanzong — who had reigned more than forty years, whose reign is remembered as the high point of Tang civilization — abandoned his capital and fled west toward Sichuan.

The line across the bottom of this slide is the conclusion, and it is worth taking slowly. The rebellion turned delegated frontier command into a direct challenge to the emperor.

Everything we traced over the last three slides was, on paper, legitimate. The *jiedushi* were imperial appointees. Their armies were imperial armies. Their revenues were collected under imperial authority. The entire apparatus existed as a delegation — power lent outward to solve a problem the court could not solve from the center.

What 755 demonstrated is that a delegation you cannot revoke is not a delegation. It is a transfer. The court discovered, far too late, that the only thing distinguishing its own army from an enemy army was the loyalty of the man commanding it, and that it possessed no instrument to enforce that loyalty once it was withdrawn. The emperor's authority over the frontier had become, in practice, a request.

---

## Slide: A dynasty under pressure

**Kicker:** A dynasty under pressure
**Heading:** The rebellion forced Xuanzong from power and left the Tang dependent on allies.

### Narrative (~4 min)

The emperor's flight west is where this story becomes personal, and where I want you to be most careful about the sources.

At a post station called Mawei, a day's travel from the capital, Xuanzong's own escort troops mutinied. They killed the chief minister Yang Guozhong. Then they refused to go any further until the emperor handed over Consort Yang Guifei. He did. She was strangled, and the column moved on toward Sichuan.

To understand why soldiers would demand the death of an emperor's consort, you need to know who the Yangs were. Yang Guifei was Xuanzong's favored consort, and her elevation had carried her entire family into high office and enormous wealth — sisters ennobled, cousins placed, the clan a byword at court for extravagance during years when frontier soldiers went underpaid. Her cousin Yang Guozhong had risen to chief minister, and he was widely regarded as corrupt and incompetent. He was also the specific man An Lushan had named as his reason for rebelling.

So the escort's logic was not aesthetic. It was practical and self-interested. They had just executed the chief minister of the empire without authorization. Leaving his kinswoman beside the emperor meant that sooner or later she would avenge him on them. They killed her to protect themselves.

Now here is what I want you to resist. The famous version of this story says that an aging emperor neglected his government for a beautiful woman and that the dynasty paid for it. That reading hardened over the following century, and it owes more to Bai Juyi's poem "Song of Everlasting Sorrow," written around 806, than to any chronicle. It is a literary afterlife, not a cause. It is the same move the sources made with An Lushan — find an individual, assign the blame, protect the institution.

Watch what the court actually accomplished at Mawei. It solved its crisis by killing two Yangs. And a hundred and sixty thousand veterans kept marching on the capital.

Within weeks the heir apparent, who had separated from his father's column, was proclaimed emperor by the army in the northwest. Xuanzong did not contest it. He spent his remaining years as a retired sovereign in Sichuan, and his reign — the reign that defines Tang greatness in Chinese memory — was effectively over.

The new emperor's problem was that he had a throne and no army. The solution is in the card on the right, and it is one of the most consequential decisions of the dynasty: the Tang called on the Uighurs, a Turkic steppe power, to help retake its own capitals.

It worked. Chang'an was recovered in 757 with Uighur help. But understand what that assistance cost. The allies looted as they went, demanded enormous quantities of silk before departing, and afterward the Tang entered a long-running arrangement of trading silk for horses at rates the court could not dictate and did not favor — partly as trade, partly as the price of not being raided.

The rebellion itself dragged on to 763. An Lushan was assassinated by his own son in 757, who was in turn displaced; the rebellion outlived its founder by six years under successor commanders. Eight years, several rebel emperors, foreign troops in the capital, and a registered-population figure that falls so steeply across the decade that historians still argue over how much of it measures deaths and how much measures the simple collapse of the state's ability to count its own subjects.

The dynasty survived. It survived as a state that had bought its own capital back from the steppe.

---

## Slide: Military governors after 763

**Kicker:** Military governors after 763
**Heading:** The Tang pardoned rebel leaders and gave many of them provincial commands.

### Narrative (~4 min)

This is the slide where students usually assume someone made a terrible mistake. I want to argue that the court did something entirely rational, and that the result was still ruinous.

By the early 760s the Tang could not win this war outright. It had lost its veteran field armies, its treasury, its census, and its two capitals. It was borrowing troops from the Uighurs. The rebel commanders held the northeast with intact professional armies and no particular reason to surrender if surrender meant execution.

So the court made them an offer. Submit, acknowledge the Tang emperor, and keep what you hold.

Follow the three boxes across the screen. Rebel leaders submit, and receive amnesty. They receive governorships — appointments as military governors of the very regions and the very troops they had just used against the dynasty. And then local power hardens, as those posts and those commands begin passing to heirs.

On its own terms the policy succeeded. The fighting stopped in 763. That is not nothing; an eight-year civil war ended, and it ended without the Tang having to win it.

But look at what the amnesty actually transacted. Before 763, the court's problem was that it had delegated authority it could not revoke. After 763, it formally recognized that it could not revoke it. The rebels did not have to be defeated, which meant they did not have to be disarmed. The dynasty converted a rebellion it could not win into an administrative arrangement it could live with, and in doing so it wrote the rebellion's outcome into its own institutions.

Notice the third box especially: posts and command pass to heirs. Nowhere in Tang law was a provincial command hereditary. It became hereditary in practice, in several key northeastern provinces, because the court lacked any means to appoint someone else and no appetite for a second war to find out. A governor died, his son or his senior officer took the army, and Chang'an issued the paperwork confirming a decision it had not made.

Remember the word we started with. *Shi* — commissioner, envoy, a man carrying a tally outward on the court's behalf, expected to hand it back. By the 760s that tally is being inherited.

One more consequence worth naming, because it reaches beyond the military. These posts had previously belonged to civil officials, men formed by the classics and the examination system. Increasingly they went to military men, many of them non-Chinese or only partly assimilated. The character of Tang provincial government changed, and so did the career expectations of the educated class whose whole training pointed toward those offices. We will come back to that when we reach Han Yu.

---

## Slide: Regional power

**Kicker:** Regional power
**Heading:** Provincial governors began to act like hereditary local rulers.

### Narrative (~4 min)

This slide inventories what a post-rebellion military governor actually controlled, and I want to take the three cards in order, because together they amount to something you should be able to name.

Military. The governor commanded professional troops — the same long-service veterans we discussed at the start of the hour — and he passed that command to his heir. The army is permanent, it is local, and its succession is now a family matter.

Administration. He appointed his own subordinates. The officials who ran his province owed their positions to him, not to the examination system and not to the Ministry of Personnel in Chang'an. Military men displaced civil officials throughout the apparatus.

Revenue. In the most independent regions, he remitted no taxes to the central government at all. He collected within his province and he kept what he collected.

Put those three together and ask what is missing from a sovereign state. A permanent army under hereditary command, an administration appointed locally, and independent revenue. What remains to the emperor is the ceremonial acknowledgment that the emperor is the emperor.

Which is exactly what the callout at the bottom says. The emperor remained, but the center no longer monopolized military and fiscal power.

I want to be precise here, because this is where it is easy to overstate. The Tang did not fall in 763. It lasted another century and a half, and that is a long time — longer than the United States has existed as a continental power. The dynasty retained real authority across much of the empire, and in the chapters ahead you will see it develop genuinely innovative fiscal instruments to fund itself without the control it had lost.

What changed is the *nature* of central power. Before the rebellion, imperial authority was administrative: the court issued orders and a bureaucracy executed them. After the rebellion, imperial authority was increasingly negotiated. It varied province by province. In the southeast it remained substantial. In the northeastern provinces it was close to nominal. The emperor's writ no longer ran uniformly across the territory he was said to rule, and the court spent the rest of the dynasty working out, case by case, what it could actually require of whom.

That is the condition the rest of this chapter describes, and it is the direct result of a chain of decisions that began with farmers who could no longer afford to walk to the frontier.

---

## Slide: Pause & Reflect — where responsibility lies

*(New slide from the companion revision — see "Slides that may not exist yet.")*

### Narrative (~3 min)

Here is the question I asked you to hold at the beginning of the hour, and now you have the evidence to answer it.

Trace the chain. The militia collapsed, so the court recruited professionals. The frontier was distant, so it granted commanders autonomy. Armies need supply, so it granted them taxation. Commanders need staff, so it granted them appointments. The frontier was multi-ethnic, so it recruited commanders who knew those peoples. And a chief minister, wanting no rivals, preferred generals who could never come home to challenge him.

Every one of those decisions has a defensible reason behind it. Not one of them is obviously foolish on the day it was made.

So take two minutes on this. If no single decision was wrong, is anyone responsible for the outcome? And if you think someone is — at which step in that chain should a person have stood up and said no, and what exactly would they have said?

---

## Slide: Tang's changing frontiers

**Kicker:** Tang's changing frontiers
**Heading:** The rebellion weakened Tang influence across Central and Southeast Asia.

### Narrative (~3 min)

One more consequence before we move from politics to economy, and it is the one that changes the map.

To fight An Lushan, the Tang pulled its armies off the western frontier. Those garrisons in the Tarim Basin and the northwest corridor existed to hold the Silk Road and to contain Tibet, and the court needed them in the interior more than it needed them where they stood. So it brought them home.

Tibet moved into the opening immediately. Within a few years the Tibetan Empire had claimed overlordship of the Silk Road cities the Tang had spent a century acquiring, and in 763 Tibetan forces briefly occupied Chang'an itself. The western frontier the early Tang had pushed outward never came back.

In the southwest, Nanzhao — which had already handed the Tang humiliating defeats in the early 750s — pressed against Tang prefectures in what is now northern Vietnam. That region drifted out of Chinese control over the following century and a half and became independent in the tenth century. Balhae consolidated in the northeast.

The card on the right makes the point that matters most, and it is a point about intention rather than capability. The late Tang no longer aimed to dominate Central Asia the way the early Tang had. Even later, when its neighbors weakened and opportunities reopened, it did not resume the project. The ambition itself had been abandoned.

This is worth holding onto for the rest of the course, because the Song dynasty inherits that changed posture. The question of whether a Chinese state should project power deep into inner Asia, or consolidate within a defensible core, gets answered differently after 755 than before — and the answer sticks.

---

## Slide: Synthesis

**Kicker:** Synthesis
**Heading:** The Tang state survived 755 by sharing power, then lost the capacity to reunify China.

### Narrative (~3 min)

Let me pull the thread all the way through, because the three boxes on this screen are the argument of the hour in compressed form.

Rebellion. Frontier armies challenged the court, and the court could not beat them, because those armies were the only effective military force the empire had and they were not in the empire's hands in any meaningful sense.

Concessions. To end the war, the court let the men who had waged it keep their troops, their taxes, and their appointments. It traded sovereignty for peace, which was a real trade — the peace was real and so was the loss.

Fragmentation. What the concessions created outlasted the men who received them. Commands became hereditary, provincial authority hardened into something close to local rule, and that condition persisted through the dynasty's last century and the fragmented decades after it, until the Song began reunification in 960.

And then the line beneath. While all of that was happening politically, something else was happening economically: markets expanded, fiscal tools changed, and a weakened central state found new ways to pay for itself. That is not a footnote. It is one of the more interesting paradoxes in Chinese history, and it is where the independent portion of this lecture picks up — a government that lost control of its provinces also lost control of its markets, and the economy grew.

What I want you leaving with is the shape of the explanation, not the list of events. The traditional account of 755 is a story about a treacherous general, a corrupt minister, a beautiful woman, and an old emperor who stopped paying attention. Those people existed, and they did what the sources say they did. But the Tang had built a machine that concentrated permanent military power in the hands of regional commanders, and a machine like that does not require a villain. It requires an occasion.

---

## Slide: Conclusion

**Kicker:** Conclusion
**Heading:** The Tang survived the rebellion by compromising with regional military power.

### Narrative (~2 min)

Three threads to take away.

Political change. Military governors emerged from the rebellion holding armies, appointments, and local revenue, and in the most independent provinces they passed all three to their heirs. The emperor remained; the monopoly did not.

Economic change. A central government that had lost administrative reach developed new ways to raise money — taxing actual landholdings rather than assigned ones, and building a salt monopoly that eventually supplied more than half of central revenue. At the same time its retreat from regulating markets coincided with real commercial expansion, even as landholding concentrated in fewer hands.

Historical evidence. And beneath all of this, the documents sealed in a cave at Dunhuang let us see what none of the court chronicles show us: households, contracts, school primers, religious associations — ordinary Tang life continuing through a century that the political narrative describes only as decline.

That last point is the methodological one, and it is the one I would most like you to carry forward. The history of a dynasty is not the same thing as the history of the people living in it.

---

# PART THREE — SLIDES NOT COVERED BY THIS FILE

The following slides have not received narratives. Their existing `<aside class="notes">` blocks should be left untouched. They constitute the chapter-survey portion of the deck rather than the rebellion argument, and are candidates for the independent-study hour.

- Land and taxation
- The salt monopoly
- Trade after state retreat
- The court tries to recentralize *(palace army and eunuchs)*
- Late Tang scholarship *(Han Yu)*
- Dunhuang
- What the documents reveal
- Late Tang instability *(Huang Chao)*
- The transition to 960
- Key terms
- Five-minute classroom activity

---

# RUNNING TIME

| Segment | Minutes |
|---|---|
| Title / framing | 2 |
| Military background | 5 |
| The trade-off | 2 |
| Pause &amp; Reflect — trade-off | 3 |
| Frontier commands | 4 |
| An Lushan | 4 |
| The rebellion begins | 4 |
| A dynasty under pressure | 4 |
| Military governors after 763 | 4 |
| Regional power | 4 |
| Pause &amp; Reflect — responsibility | 3 |
| **Core total** | **39** |

Tang's changing frontiers (3), Synthesis (3), and Conclusion (2) bring the full set to 47 minutes. For a 35-minute live session, the changing-frontiers slide and the conclusion move to the independent hour, and the synthesis compresses — that lands at approximately 36.
