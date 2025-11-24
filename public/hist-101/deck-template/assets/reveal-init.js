// Load Reveal + plugins from CDN
const scripts = [
  "https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.min.js",
  "https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/notes/notes.min.js",
  "https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/search/search.min.js",
  "https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/zoom/zoom.min.js"
];

(function loadAll(i=0){
  if(i>=scripts.length){ return initReveal(); }
  const s=document.createElement("script"); s.src=scripts[i]; s.onload=()=>loadAll(i+1);
  document.head.appendChild(s);
})();

function initReveal(){
  Reveal.initialize({
    hash: true,
    center: false,
    slideNumber: 'c/t',
    transition: 'fade',
    backgroundTransition: 'fade',
    width: 1280, height: 720, margin: 0.04,
    minScale: 0.2, maxScale: 2.0,
    controls: true, progress: true, history: true,
    keyboard: {
      37: 'prev',  // left
      39: 'next',  // right
      38: null,    // up/down reserved for in-slide scroll
      40: null
    },
    overview: true, touch: true,
    fragments: true,
    showNotes: false,
    plugins: [ RevealNotes, RevealSearch, RevealZoom ]
  });

  // Up/Down arrows scroll inside the current slide
  document.addEventListener('keydown', function(e){
    const s = Reveal.getCurrentSlide(); if(!s) return;
    const amt = 100;
    if(e.keyCode===38){ e.preventDefault(); s.scrollTop = Math.max(0, s.scrollTop - amt); }
    if(e.keyCode===40){ e.preventDefault(); s.scrollTop = s.scrollTop + amt; }
  });

  // Mouse wheel scroll inside slides; hand off at edges
  document.addEventListener('wheel', function(e){
    const s = Reveal.getCurrentSlide(); if(!s) return;
    const hasScroll = s.scrollHeight > s.clientHeight;
    if(hasScroll){
      const top = s.scrollTop <= 1;
      const bottom = s.scrollTop + s.clientHeight >= s.scrollHeight - 1;
      if((e.deltaY>0 && !bottom) || (e.deltaY<0 && !top)){
        e.stopPropagation(); e.preventDefault();
        s.scrollTop += e.deltaY;
        return false;
      }
      // at edges: let Reveal navigate, but prevent page scroll
      e.preventDefault();
      e.deltaY>0 ? Reveal.next() : Reveal.prev();
    }
  }, { passive:false });

  // Reset scroll when changing slides
  Reveal.on('slidechanged', e => { if(e.currentSlide) e.currentSlide.scrollTop = 0; });
}
