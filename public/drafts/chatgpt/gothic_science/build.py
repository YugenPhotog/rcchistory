"""Generate the two static, offline editions. Run with Python 3."""
from pathlib import Path
from html import escape as esc
import json
from content import slides, sources, add, B
ROOT=Path(__file__).parent
# A concise American reception bridge completes the 50-minute teaching route.
bridge=dict(slug='philadelphia',act=B,minutes=1,design='signal',label='Philadelphia · Early nineteenth century',
 title='The experiment crosses the Atlantic',lead='Robert Hare built powerful batteries and demonstrations for students of medicine.',
 notes='James Woodhouse returned from England with a battery and shared his interest in galvanic experiments with his student Robert Hare. Hare developed batteries of his own and equipped a lecture room at the University of Pennsylvania for large classes. Apparatus, travelers, publications, and teaching connected European research with an American audience.\nHare gives us a person to follow across this exhibition. Decades later, his commitment to experimental demonstration would lead him to investigate claims about spirits. Watch for the change in the claim he thought his apparatus could establish.',
 refs=['battery'],img=None,items=[('European apparatus','Woodhouse returns with a battery.'),('American teaching','Hare makes electrical effects visible to a room of students.')],response=None,cue=None)
slides.insert(5,bridge)
assets=json.loads((ROOT/'assets/credits.json').read_text())
def figure(key,extra=''):
 if not key or key not in assets:return ''
 a=assets[key]
 return f'<figure class="art {extra}"><img src="assets/{key}.webp" alt="{esc(a["alt"])}" width="{a["width"]}" height="{a["height"]}" loading="eager"><figcaption>{esc(a["caption"])}</figcaption></figure>'
def paras(text):return ''.join('<p>'+esc(p)+'</p>' for p in text.split('\n') if p.strip())
def refs(keys):return '<ul class="citations">'+''.join(f'<li><a href="{esc(sources[k][2])}">{esc(sources[k][1])}</a></li>' for k in keys)+'</ul>'
def items(s):
 if not s.get('items'):return ''
 return '<dl class="points">'+''.join(f'<div><dt>{esc(a)}</dt><dd>{esc(b)}</dd></div>' for a,b in s['items'])+'</dl>'
table='<table><caption>Morton’s 1839 categories and measurements, transcribed for analysis. Original racial terminology.</caption><thead><tr><th scope="col">Label in source</th><th scope="col">Count</th><th scope="col">Mean</th><th scope="col">Largest</th><th scope="col">Smallest</th></tr></thead><tbody>'+''.join(f'<tr><th scope="row">{name}</th><td>{n}</td><td>{mean}</td><td>{hi}</td><td>{lo}</td></tr>' for name,n,mean,hi,lo in [('Caucasian',52,87,109,75),('Mongolian',10,83,93,69),('Malay',18,81,89,64),('American',147,80,100,60),('Ethiopian',29,75,94,65)])+'</tbody></table><p>Capacity is in cubic inches. The source’s categories express Morton’s racial classification.</p>'
def answer(s):
 return '<details class="answer"><summary>Compare your response</summary>'+paras(s['response'])+'</details>' if s.get('response') else ''
def notes(s):
 out=paras(s['notes'])+answer(s)
 if s['slug']=='table':out+=table
 if s.get('cue'):out+='<details class="instructor"><summary>Instructor cue · '+str(s['minutes'])+' minutes</summary>'+paras(s['cue'])+'</details>'
 out+='<h3>Sources for this slide</h3>'+refs(s['refs'])
 if s.get('img') in assets:
  a=assets[s['img']];out+='<h3>Image credit</h3><p>'+esc(a['credit'])+'</p>'
  if a.get('url'):out+=f'<p><a href="{esc(a["url"])}">View the original object and catalog record</a></p>'
  out+=f'<p><a href="assets/{s["img"]}.webp">Open the full-size image</a></p>'
 return out
def slide_body(s):
 h='h1' if s['slug']=='threshold' else 'h2'
 header=f'<p class="eyebrow">{esc(s["label"])}</p><{h}>{esc(s["title"])}</{h}><p class="lead">{esc(s["lead"])}</p>'
 body=f'<div class="copy">{header}{items(s)}</div>'+figure(s.get('img'))
 if s['slug']=='rap':
  body=f'<div class="copy">{header}</div><div class="tele-type" role="group" aria-label="An original typographic comparison of electrical and spiritual communication"><span>Electrical telegraph</span><i aria-hidden="true">↕</i><strong>Spiritual<br>Telegraph</strong><small>New York weekly · Founded 1852<br>A technological analogy in a religious title</small></div>'
 if s['slug']=='table':
  body=f'<div class="copy">{header}</div>'+figure(s['img'])+'<p class="table-context">Original racial terminology · Volumes in cubic inches</p>'
 return body
head='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><meta name="description" content="A 50-minute historical exhibition on science, Gothic fiction, religion, and racial authority in antebellum America."><title>The Uncertain Witness · Antebellum Gothic Science</title>'''
nav='''<a class="skip" href="#deck">Skip to presentation</a><header class="sitebar"><a class="wordmark" href="index.html">THE UNCERTAIN WITNESS</a><nav aria-label="Presentation tools"><a href="study.html" id="study-link">Read the exhibition</a><button id="contents-button">Contents</button><button id="help-button" aria-label="Open keyboard help">Help</button></nav></header>'''
index=head+'<link rel="stylesheet" href="vendor/reveal.css"><link rel="stylesheet" href="style.css"></head><body class="presentation">'+nav+'<main id="deck" class="reveal" tabindex="-1"><div class="slides">'
for i,s in enumerate(slides):
 index+=f'<section id="{s["slug"]}" class="slide {s["design"]}" aria-label="{esc(s["title"])}" data-act="{esc(s["act"])}">'+slide_body(s)+f'<footer class="slide-footer"><span>{esc(s["act"])} <span class="divider">/</span> {i+1:02d}</span><button class="notes-button" data-slide="{s["slug"]}">Read &amp; sources</button></footer></section>'
index+='''<section id="sources" class="slide bibliography" aria-label="Source room" data-act="Source room"><div class="copy"><p class="eyebrow">The source room</p><h2>Continue the investigation.</h2><p class="lead">Return to the original texts, inspect the objects, and compare the interpretations.</p><div class="source-links"><a href="study.html#bibliography">Bibliography and image credits</a><a href="study.html#glossary">Concept glossary</a><a href="REPORT.md">Design and verification report</a></div></div><footer class="slide-footer"><span>The Uncertain Witness</span><a href="study.html">Read the complete exhibition</a></footer></section>'''
index+='</div></main><footer class="controls"><button id="previous" aria-label="Previous slide">Previous</button><span id="position" aria-live="polite" aria-atomic="true"></span><button id="next" aria-label="Next slide">Next</button></footer>'
for s in slides:
 index+=f'<dialog id="note-{s["slug"]}" class="notes-dialog" aria-labelledby="title-{s["slug"]}"><div class="dialog-top"><p>{esc(s["act"])}</p><button class="close-dialog" aria-label="Close reading notes">Close</button></div><h2 id="title-{s["slug"]}">{esc(s["title"])}</h2>{notes(s)}<p><a href="study.html#{s["slug"]}">Read this slide in the continuous study edition</a></p></dialog>'
index+='<dialog id="contents" aria-labelledby="contents-title"><div class="dialog-top"><h2 id="contents-title">The exhibition</h2><button class="close-dialog">Close</button></div><ol class="contents-list">'
for s in slides:index+=f'<li><a href="#/{s["slug"]}">{esc(s["title"])}</a><small>{esc(s["act"])}</small></li>'
index+='</ol><a href="#/sources">Source room</a></dialog>'
index+='''<dialog id="help" aria-labelledby="help-title"><div class="dialog-top"><h2 id="help-title">Make yourself at home</h2><button class="close-dialog">Close</button></div><dl class="help-list"><dt>Move through the exhibition</dt><dd>Use Left and Right arrow keys or the Previous and Next buttons.</dd><dt>Read a slide’s explanation</dt><dd>Choose Read &amp; sources, or press N. Press Escape to close.</dd><dt>Study, zoom, or print</dt><dd>Choose Read the exhibition for a continuous, resizable edition with every explanation, source, and model response. Use your browser’s Print command there to save a PDF.</dd><dt>Move between controls</dt><dd>Use Tab and Shift + Tab. Activate a button with Enter or Space.</dd></dl><p>The study edition opens automatically on narrow screens. Classroom pacing is approximately 50 minutes including discussion.</p></dialog>'''
index+='''<noscript><div class="noscript">The continuous edition includes all content and works without JavaScript. <a href="study.html">Open the study edition</a>.</div></noscript><script src="vendor/reveal.js"></script><script src="app.js"></script></body></html>'''
(ROOT/'index.html').write_text(index)
study=head+'<link rel="stylesheet" href="style.css"></head><body class="study"><a class="skip" href="#reading">Skip to exhibition text</a><header class="sitebar"><a class="wordmark" href="index.html">THE UNCERTAIN WITNESS</a><nav aria-label="Study tools"><a href="index.html?mode=slides" id="present-link">Present slides</a><a href="#bibliography">Sources</a><button onclick="window.print()">Print / PDF</button></nav></header><main id="reading">'
study+='<header class="study-intro"><p class="eyebrow">United States · 1820–1861</p><h1>The Uncertain Witness</h1><p class="lead">Antebellum Gothic Science</p><p>A 50-minute exhibition on bodies, evidence, and the authority to explain them.</p><p>Read the explanations in sequence. Pause at the questions before opening the model responses. The original documents include historical racial categories discussed critically in the text.</p><details class="contents"><summary>Explore the exhibition</summary><ol>'
study+=''.join(f'<li><a href="#{s["slug"]}">{esc(s["title"])}</a></li>' for s in slides)
study+='</ol></details></header>'
for s in slides:
 study+=f'<article id="{s["slug"]}" class="reading-slide"><p class="eyebrow">{esc(s["label"])}</p><h2>{esc(s["title"])}</h2><p class="lead">{esc(s["lead"])}</p>{figure(s.get("img"))}{items(s)}<div class="reading-text">{notes(s)}</div><p class="backlink"><a href="index.html?mode=slides#/{s["slug"]}">Project this slide</a></p></article>'
glossary=[('Galvanism','Electrical effects studied through nerve and muscle experiments, especially in the tradition of Luigi Galvani.'),('Animal magnetism / mesmerism','A proposed invisible influence between practitioner and subject. Nineteenth-century claims ranged from altered sensation to clairvoyance. A response in a subject did not establish the proposed magnetic fluid.'),('Spiritualism','A religious movement in which communication with the spirits of dead people, often through mediums, played a central role.'),('Ethnology','A nineteenth-century field comparing and classifying peoples. Some practitioners used it to justify racial hierarchies. Douglass contested those claims.'),('Scientific racism','Using scientific methods, language, or institutional prestige to portray racial hierarchy as a fact of nature.'),('Gothic','A literary mode that uses dread, vulnerability, and uncertain perception to examine the limits of knowledge and control.'),('Observation and inference','An observation records an effect. An inference proposes what caused it or what it means. Both require scrutiny of how the record was produced.'),('Pseudoscience','A claim or practice presented as scientific despite failing the standards of evidence needed to establish it. Here the label applies to claims of a mesmeric fluid and innate racial hierarchy, while the historical analysis asks why those claims were persuasive.'),('Corroboration','Support from evidence with an independent origin. Reprinting one account does not supply another observer.')]
study+='<article id="glossary" class="reading-slide"><h2>Concept glossary</h2><dl class="glossary">'+''.join('<dt>'+esc(a)+'</dt><dd>'+esc(b)+'</dd>' for a,b in glossary)+'</dl></article>'
study+='<article id="bibliography" class="reading-slide"><h2>Bibliography</h2><p>Each slide identifies its supporting sources. These references bring the complete set together.</p>'
for group in dict.fromkeys(v[0] for v in sources.values()):
 study+='<h3>'+group+'</h3>'+refs([k for k,v in sources.items() if v[0]==group])
study+='<h3>Image credits</h3><ul class="citations">'
for key,a in assets.items():
 study+='<li>'+esc(a['credit'])+(f' <a href="{esc(a["url"])}">Catalog record or original source</a>' if a.get('url') else '')+'</li>'
study+='</ul><p>The diagrams and typographic comparisons were created for this exhibition. Reconstructed scenes and the conceptual lens are labeled AI-generated. They supply visual interpretation. The archival images retain their original content and are cropped or resized where stated.</p></article></main><footer class="study-end"><a href="index.html?mode=slides">Return to the projection edition</a></footer><script>document.getElementById("present-link").addEventListener("click",function(){const id=location.hash.slice(1);const target=["bibliography","glossary"].includes(id)?"sources":id;this.href="index.html?mode=slides"+(target?"#/"+target:"");});</script></body></html>'
(ROOT/'study.html').write_text(study)
print(f'Generated {len(slides)+1} slides, {sum(s["minutes"] for s in slides)} teaching minutes.')
