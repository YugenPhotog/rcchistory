/* HIST 270 Museum theme script. Load after reveal.min.js and before Reveal.initialize.
   Per-deck config (slide ids): window.MUSEUM_LAYOUT={fb:[full-bleed photo],bd:[big date],bq:[big quote],map:[map]}.
   Title and segment-slide sections get the portrait hero automatically. Layout only: no content. */
(function(){
  var V=function(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();};
  var C=window.MUSEUM_LAYOUT||{};
  var FB=C.fb||[], BD=C.bd||[], BQ=C.bq||[], MAP=C.map||[];
  var PH=['title'].concat([].slice.call(document.querySelectorAll('.reveal .slides>section.segment-slide')).map(function(s){return s.id;}));
  var secs=[].slice.call(document.querySelectorAll('.reveal .slides>section'));
  var inPS=false;
  secs.forEach(function(s){
    var id=s.id, img=s.querySelector('figure.fig img');
    if(id==='pierian-spring'){inPS=true;return;}
    if(id==='sources'){inPS=false;}
    if(inPS){s.classList.add('mk-ps'); s.setAttribute('data-background-color',V('--ps-bg'));}
    if(/^rg-/.test(id)){s.classList.add('mk-rg'); s.removeAttribute('data-background'); s.setAttribute('data-background-color',V('--rg-bg'));}
    if(/^sc-/.test(id)){s.classList.add('mk-sc'); s.removeAttribute('data-background'); s.setAttribute('data-background-color',V('--sc-bg'));}
    if(FB.indexOf(id)>=0&&img){s.classList.add('mk-fb'); s.setAttribute('data-background-image',img.getAttribute('src')); s.setAttribute('data-background-size','cover'); s.setAttribute('data-background-position',V('--fb-pos')||'center');}
    if(PH.indexOf(id)>=0&&img){s.classList.add('mk-ph'); if(/^segment/.test(id)) s.classList.add('mk-seg');
      s.setAttribute('data-background-image',img.getAttribute('src')); s.setAttribute('data-background-size',V('--ph-size')||'auto 100%'); s.setAttribute('data-background-position','right center'); s.setAttribute('data-background-color',V('--ph-bg'));}
    if(BD.indexOf(id)>=0){var k=s.querySelector('.kicker'),st=s.querySelector('.stack'); var m=k&&k.textContent.match(/1[0-9]{3}/g);
      if(m&&st){var d=document.createElement('div'); d.className='bigdate'; d.setAttribute('aria-hidden','true'); d.textContent=m[m.length-1]; st.insertBefore(d,st.firstChild); s.classList.add('mk-bd');}}
    if(BQ.indexOf(id)>=0) s.classList.add('mk-bq');
    if(MAP.indexOf(id)>=0) s.classList.add('mk-map');
  });
  var lab=document.createElement('div'); lab.id='seg-label'; lab.setAttribute('aria-hidden','true'); document.body.appendChild(lab);
  function upd(){
    var cur=Reveal.getCurrentSlide(), i=secs.indexOf(cur), t='', ps=false;
    for(var j=0;j<=i;j++){var s=secs[j];
      if(s.classList.contains('segment-slide')){var h=s.querySelector('h2').textContent; t=h.replace(/^Segment (\d+):\s*/,'Segment $1 · ');}
      if(s.id==='pierian-spring'){t='Pierian Spring · Independent study'; ps=true;}
      if(s.id==='sources'){t='Sources'; ps=false;}
    }
    if(i<=1) t='';
    lab.textContent=t; lab.className=ps?'ps':'';
  }
  function tagBgs(){
    secs.forEach(function(s){var b=Reveal.getSlideBackground(s); if(!b)return;
      if(s.classList.contains('mk-fb')) b.classList.add('mk-bg');
      if(s.classList.contains('mk-ph')) b.classList.add('mk-ph');});
  }
  document.addEventListener('ready',function(){tagBgs();upd();});
  document.addEventListener('slidechanged',upd);
})();
