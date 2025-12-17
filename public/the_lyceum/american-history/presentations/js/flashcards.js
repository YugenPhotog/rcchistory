
(function () {
  // Utilities
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Hooks (expects your Study Notes modal to exist)
  const modal = $('#studyNotesModal');
  const snTitle = modal ? modal.querySelector('.sn-title') : null;
  const snContent = modal ? modal.querySelector('.sn-content') : null;
  const whyBox = modal ? modal.querySelector('.why-matters p') : null;

  function openStudyNotes(title, definition, why) {
    if (!modal) return;
    if (snTitle) snTitle.textContent = title || 'Study Notes';
    if (snContent && definition) snContent.innerHTML = `<p>${definition}</p>`;
    if (whyBox && typeof why === 'string') whyBox.textContent = why;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    const closeBtn = modal.querySelector('.sn-close');
    if (closeBtn) closeBtn.focus();
  }
  function closeStudyNotes() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  if (modal) {
    const closeBtn = modal.querySelector('.sn-close');
    if (closeBtn) closeBtn.addEventListener('click', closeStudyNotes);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeStudyNotes(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeStudyNotes(); });
  }

  // Flashcard behavior
  const container = $('#study-cards');
  let currentCard = null;

  function attachCardHandlers(card) {
    const def = card.getAttribute('data-def') || '';
    const title = card.getAttribute('data-title') || 'Study Notes';
    const why = card.getAttribute('data-why') || '';

    function flip() { card.classList.toggle('flipped'); }
    function openNotes() { openStudyNotes(title, def, why); }

    card.addEventListener('click', () => {
      if (card.classList.contains('flipped')) {
        openNotes();
      } else {
        flip();
      }
      currentCard = card;
    });

    card.addEventListener('focus', () => { currentCard = card; });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
      if (e.key.toLowerCase() === 's') { e.preventDefault(); openNotes(); }
    });
  }

  if (container) {
    $$('.flashcard', container).forEach(attachCardHandlers);

    // Controls
    $('#fc-shuffle')?.addEventListener('click', () => {
      const cards = $$('.flashcard', container);
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.insertBefore(cards[j], cards[i]);
      }
    });

    $('#fc-reset')?.addEventListener('click', () => {
      $$('.flashcard', container).forEach(c => c.classList.remove('flipped'));
    });

    $('#fc-open-all')?.addEventListener('click', () => {
      if (currentCard) {
        const title = currentCard.getAttribute('data-title') || 'Study Notes';
        const def = currentCard.getAttribute('data-def') || '';
        const why = currentCard.getAttribute('data-why') || '';
        openStudyNotes(title, def, why);
      } else {
        openStudyNotes('Study Notes', 'Click a card to flip, then press S to see fuller notes here.', '');
      }
    });

    // Map global S key to the currently focused card (NOT presenter notes)
    document.addEventListener('keydown', (e) => {
      if ((e.key === 's' || e.key === 'S') && modal && !modal.classList.contains('open')) {
        const card = currentCard || $('.flashcard', container);
        if (card) {
          const title = card.getAttribute('data-title') || 'Study Notes';
          const def = card.getAttribute('data-def') || '';
          const why = card.getAttribute('data-why') || '';
          openStudyNotes(title, def, why);
          e.preventDefault();
        }
      }
    });
  }
})();
