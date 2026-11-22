/* The Threshold — deck behaviour. No external services. */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Reveal.initialize({
    width: 1600,
    height: 900,
    margin: 0.02,
    minScale: 0.1,
    maxScale: 2.0,
    center: false,
    hash: true,
    history: false,
    controls: true,
    controlsTutorial: false,
    progress: true,
    slideNumber: 'c/t',
    showSlideNumber: 'all',
    transition: reduce ? 'none' : 'fade',
    transitionSpeed: 'default',
    backgroundTransition: reduce ? 'none' : 'fade',
    navigationMode: 'linear',
    keyboard: true,
    pdfSeparateFragments: false,
    plugins: [RevealNotes]
  });

  /* ---------- shared study dialog ---------- */
  var dlg = document.getElementById('study-dialog');
  var dTitle = document.getElementById('study-title');
  var dKicker = document.getElementById('study-kicker');
  var dBody = document.getElementById('study-body');
  var lastOpener = null;

  function openDialog(kicker, title, contentNode, opener) {
    lastOpener = opener || document.activeElement;
    dKicker.textContent = kicker || 'Go deeper';
    dTitle.textContent = title || '';
    dBody.innerHTML = '';
    dBody.appendChild(contentNode);
    Reveal.configure({ keyboard: false });
    if (typeof dlg.showModal === 'function') { dlg.showModal(); } else { dlg.setAttribute('open', ''); }
    dBody.scrollTop = 0;
    dlg.querySelector('.close').focus();
  }
  function closeDialog() {
    if (dlg.open) { dlg.close(); }
  }
  dlg.addEventListener('close', function () {
    Reveal.configure({ keyboard: true });
    if (lastOpener && document.body.contains(lastOpener)) { lastOpener.focus(); }
  });
  dlg.querySelector('.close').addEventListener('click', closeDialog);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) { closeDialog(); } });

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-deeper]');
    if (!b) { return; }
    var tpl = document.getElementById(b.getAttribute('data-deeper'));
    if (!tpl) { return; }
    openDialog(tpl.getAttribute('data-kicker'), tpl.getAttribute('data-title'), tpl.content.cloneNode(true), b);
  });

  /* ---------- toolbar: contents, help ---------- */
  function buildToc() {
    var ol = document.createElement('ol');
    ol.className = 'toc';
    var n = 0;
    document.querySelectorAll('.reveal .slides > section').forEach(function (s) {
      n++;
      if (!s.hasAttribute('data-toc')) { return; }
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#/' + s.id;
      a.innerHTML = '<span class="n">' + String(n).padStart(2, '0') + '</span><span></span>';
      a.lastChild.textContent = s.getAttribute('data-toc');
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        lastOpener = null;
        closeDialog();
        var idx = Reveal.getIndices(s);
        Reveal.slide(idx.h, idx.v);
        setTimeout(function () { focusSlide(); }, 50);
      });
      li.appendChild(a);
      ol.appendChild(li);
    });
    return ol;
  }
  document.getElementById('btn-contents').addEventListener('click', function (e) {
    openDialog('Navigate', 'Contents', buildToc(), e.currentTarget);
  });
  document.getElementById('btn-help').addEventListener('click', function (e) {
    var t = document.getElementById('d-help');
    openDialog(t.getAttribute('data-kicker'), t.getAttribute('data-title'), t.content.cloneNode(true), e.currentTarget);
  });

  /* Move focus into the current slide after navigation via TOC so screen
     reader and keyboard users land on the new content. */
  function focusSlide() {
    var cur = Reveal.getCurrentSlide();
    var h = cur && cur.querySelector('h1, h2');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }

  /* ---------- knowledge checks ---------- */
  document.querySelectorAll('.kc').forEach(function (kc) {
    var btn = kc.querySelector('.check');
    var fb = kc.querySelector('.feedback');
    btn.addEventListener('click', function () {
      var chosen = kc.querySelector('input[type=radio]:checked');
      if (!chosen) { fb.innerHTML = 'Choose an answer first.'; return; }
      kc.querySelectorAll('label').forEach(function (l) {
        l.classList.remove('is-right', 'is-wrong');
        var m = l.querySelector('.mark'); if (m) { m.remove(); }
      });
      var lab = chosen.closest('label');
      var right = lab.hasAttribute('data-correct');
      var correctLab = kc.querySelector('label[data-correct]');
      lab.classList.add(right ? 'is-right' : 'is-wrong');
      var mk = document.createElement('span'); mk.className = 'mark';
      mk.textContent = right ? '✓ Correct' : '✕ Not this one';
      lab.appendChild(mk);
      if (!right) {
        correctLab.classList.add('is-right');
        var mk2 = document.createElement('span'); mk2.className = 'mark'; mk2.textContent = '✓ Best answer';
        correctLab.appendChild(mk2);
      }
      fb.innerHTML = '<strong>' + (right ? 'Correct. ' : 'Not quite. ') + '</strong>' + lab.getAttribute('data-why') +
        (right ? '' : ' <br><strong>Best answer: </strong>' + correctLab.getAttribute('data-why'));
    });
  });

  /* ---------- sorting exercise ---------- */
  var sortBtn = document.getElementById('sort-check');
  if (sortBtn) {
    sortBtn.addEventListener('click', function () {
      var right = 0, total = 0;
      document.querySelectorAll('.sorter .row').forEach(function (row) {
        total++;
        var sel = row.querySelector('select');
        var v = row.querySelector('.verdict');
        var ok = sel.value === row.getAttribute('data-answer');
        if (ok) { right++; }
        v.textContent = (sel.value ? (ok ? '✓ ' : '✕ Best fit: ' + row.getAttribute('data-label') + '. ') : 'Best fit: ' + row.getAttribute('data-label') + '. ') + row.getAttribute('data-why');
      });
      document.getElementById('sort-score').textContent = right + ' of ' + total + ' match the best fit. Read each explanation: several of these are arguable, and the reasoning matters more than the score.';
    });
  }

  /* ---------- hotspots ---------- */
  document.querySelectorAll('.hot').forEach(function (h) {
    h.addEventListener('click', function () {
      var group = h.closest('section');
      group.querySelectorAll('.hot').forEach(function (o) { o.setAttribute('aria-expanded', 'false'); });
      group.querySelectorAll('.annots li').forEach(function (li) { li.classList.remove('on'); });
      h.setAttribute('aria-expanded', 'true');
      var li = document.getElementById(h.getAttribute('aria-controls'));
      if (li) { li.classList.add('on'); }
    });
  });

  /* ---------- archival image fallback ---------- */
  function guard(img) {
    var fig = img.closest('.fig, .bleed');
    function fail() { if (fig) { fig.classList.add('failed'); } }
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) { fail(); }
  }
  document.querySelectorAll('.fig img, .bleed img').forEach(guard);

  /* Keep Reveal from hijacking keys while a form control has focus */
  document.querySelectorAll('.reveal select, .reveal input, .reveal button').forEach(function (el) {
    el.addEventListener('keydown', function (e) {
      var k = e.key;
      if (el.tagName === 'BUTTON' && k !== ' ' && k !== 'Enter') { return; }
      e.stopPropagation();
    });
  });
})();
