/* Shared cross-course Reveal.js deck helpers (Steven Austin's courses).
   Generalized from the HIST 270 FA26 shell + Ch14/Ch16 decks. No course strings.
   Requires Reveal.js 4.5.0 + RevealNotes loaded first (cdnjs), e.g.
     https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js
     https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/plugin/notes/notes.min.js
   Usage:  DeckBase.init({ idsUrl:'ids.json', deckKey:'MyDeck.html' });
   STATUS: base only. Not yet wired into any deck.

   Slide IDs (permanent, never reused):
     <section id="<slug>" data-slide-id="A" data-slug="<slug>">   (Ch01 FA26 style, uppercase)
     <section id="<slug>" data-letter="a">                         (Ch14/Ch16 style, lowercase)
   The badge shows whichever attribute is present (first match in opts.idAttrs).
   ids.json (per chapter folder), keyed by deck filename:
     { "<deck>.html": { "assigned":["A",...], "retired":[], "next":"AR" } }
   New slides take "next"; retired IDs are never reassigned. If opts.idsUrl is set,
   the deck's IDs are checked against it and problems are logged to the console. */
(function(global){
  'use strict';
  var DEFAULTS = {
    reveal: { hash:true, slideNumber:'c/t', transition:'slide' },
    idAttrs: ['data-slide-id','data-letter'],
    badgeId: 'slide-letter',
    idsUrl: null,          // e.g. 'ids.json'
    deckKey: null,         // key in ids.json; defaults to this file's name
    popups: true,
    lightbox: true,        // click img.zoomable (or a hero veil) to enlarge
    scaleVar: true         // writes --rs for full-bleed heroes
  };
  function extend(a,b){ var o={},k; for(k in a)o[k]=a[k]; for(k in (b||{}))o[k]=b[k]; return o; }
  function slideId(s,attrs){ if(!s)return ''; for(var i=0;i<attrs.length;i++){ var v=s.getAttribute(attrs[i]); if(v) return v; } return ''; }

  function ensureBadge(id){
    var el=document.getElementById(id);
    if(!el){ el=document.createElement('div'); el.id=id; el.className='slide-letter'; el.setAttribute('aria-hidden','true'); document.body.appendChild(el); }
    return el;
  }

  function setupBadge(o){
    var el=ensureBadge(o.badgeId);
    function show(){ el.textContent=slideId(Reveal.getCurrentSlide(),o.idAttrs); }
    Reveal.on('ready',show); Reveal.on('slidechanged',show);
    if(Reveal.isReady&&Reveal.isReady()) show();
  }

  function checkIds(o){
    if(!o.idsUrl||!global.fetch) return;
    var key=o.deckKey||decodeURIComponent(location.pathname.split('/').pop());
    fetch(o.idsUrl).then(function(r){return r.json();}).then(function(db){
      var rec=db[key]; if(!rec){ console.warn('[deck-base] no ids.json entry for',key); return; }
      var seen={}, ok=true;
      document.querySelectorAll('.reveal .slides section').forEach(function(s){
        if(s.querySelector('section')) return; // vertical-stack wrapper
        var v=slideId(s,o.idAttrs); if(!v){ console.warn('[deck-base] section without ID:',s.id); ok=false; return; }
        if(seen[v]){ console.warn('[deck-base] duplicate ID',v); ok=false; } seen[v]=1;
        if((rec.retired||[]).indexOf(v)>=0){ console.warn('[deck-base] retired ID reused',v); ok=false; }
        if((rec.assigned||[]).indexOf(v)<0){ console.warn('[deck-base] ID not in ids.json assigned:',v); ok=false; }
      });
      if(ok) console.info('[deck-base] slide IDs match ids.json for',key);
    }).catch(function(e){ console.warn('[deck-base] ids.json not loaded:',e); });
  }

  function closePopups(){ document.querySelectorAll('.popup.active').forEach(function(p){p.classList.remove('active');}); }
  function setupPopups(){
    document.addEventListener('click',function(e){
      var t=e.target.closest('.popup-trigger');
      if(t){ var id=t.getAttribute('data-popup'), el=id&&document.getElementById(id); if(el){ closePopups(); el.classList.add('active'); } }
      if(e.target.classList.contains('popup-close')){ var el2=document.getElementById(e.target.getAttribute('data-popup')); if(el2) el2.classList.remove('active'); }
      if(e.target.classList.contains('popup')&&!e.target.classList.contains('popup-trigger')) e.target.classList.remove('active');
    });
    window.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&document.querySelector('.popup.active')){ closePopups(); e.preventDefault(); e.stopImmediatePropagation(); return; }
      var a=document.activeElement;
      if(a&&a.classList&&(a.classList.contains('popup-trigger')||a.classList.contains('popup-close'))&&(e.key==='Enter'||e.key===' ')){ a.click(); e.preventDefault(); e.stopImmediatePropagation(); }
    },true);
    Reveal.on('slidechanged',closePopups);
  }

  function setupLightbox(){
    var lb=document.createElement('div'); lb.id='lightbox'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-label','Enlarged image');
    lb.innerHTML='<img alt=""><p class="lb-caption"></p>'; document.body.appendChild(lb);
    var img=lb.querySelector('img'), cap=lb.querySelector('.lb-caption');
    function open(t){ img.src=t.currentSrc||t.src; img.alt=t.alt||''; var f=t.closest('figure'), c=f&&f.querySelector('figcaption'); cap.innerHTML=c?c.innerHTML:(t.alt||''); lb.classList.add('open'); }
    function close(){ lb.classList.remove('open'); }
    function isOpen(){ return lb.classList.contains('open'); }
    document.addEventListener('click',function(e){
      if(isOpen()){ if(e.target.closest('a')&&lb.contains(e.target)) return; e.preventDefault(); e.stopPropagation(); close(); return; }
      var t=e.target.closest('.reveal .slides img.zoomable');
      if(!t){ var v=e.target.closest('.reveal .slides .art-veil'); if(v) t=v.parentElement.querySelector('img.art-bg'); }
      if(t&&!t.closest('.popup')){ e.preventDefault(); e.stopPropagation(); open(t); }
    },true);
    window.addEventListener('keydown',function(e){ if(isOpen()){ e.preventDefault(); e.stopImmediatePropagation(); if(e.key==='Escape'||e.key==='Enter'||e.key===' '||e.key.indexOf('Arrow')===0) close(); } },true);
    Reveal.on('slidechanged',function(){ if(isOpen()) close(); });
  }

  function setupScale(){
    function s(){ document.documentElement.style.setProperty('--rs',Reveal.getScale()||1); }
    Reveal.on('ready',s); Reveal.on('resize',s); global.addEventListener('resize',s);
  }

  function init(opts){
    var o=extend(DEFAULTS,opts); o.reveal=extend(DEFAULTS.reveal,(opts||{}).reveal);
    if(!o.reveal.plugins) o.reveal.plugins = global.RevealNotes ? [global.RevealNotes] : [];
    // Listeners first (lightbox before popups, as in Ch16), then initialize.
    if(o.lightbox) setupLightbox();
    if(o.popups) setupPopups();
    if(o.scaleVar) setupScale();
    setupBadge(o);
    var p=Reveal.initialize(o.reveal);
    checkIds(o);
    return p;
  }
  global.DeckBase={ init:init, closePopups:closePopups, slideId:slideId, DEFAULTS:DEFAULTS };
})(window);
