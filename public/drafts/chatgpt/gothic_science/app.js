/* The linear edition is also the small-screen and text-reflow entry point. */
const query = new URLSearchParams(location.search);
if (innerWidth < 760 && query.get('mode') !== 'slides') {
  const anchor = location.hash.replace('#/', '#');
  location.replace('study.html' + (anchor === '#sources' ? '#bibliography' : anchor));
} else {
  const deck = new Reveal(document.querySelector('.reveal'), {
    width: 1600,
    height: 900,
    margin: 0.02,
    minScale: 0.1,
    maxScale: 1.4,
    center: false,
    embedded: true,
    hash: true,
    hashOneBasedIndex: false,
    controls: false,
    progress: false,
    overview: false,
    transition: 'none',
    transitionSpeed: 'fast',
    backgroundTransition: 'none',
    autoAnimate: false,
    touch: true,
    scrollActivationWidth: null,
    keyboardCondition: event => !document.querySelector('dialog[open]') &&
      !event.target.closest('button,a,input,select,textarea,summary'),
    keyboard: {78: () => openNotes()},
    disableLayout: false,
    help: false
  });
  window.exhibition = deck;
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const position = document.querySelector('#position');
  const study = document.querySelector('#study-link');
  let returnFocus = null;
  function showDialog(dialog, trigger) {
    returnFocus = trigger || document.activeElement;
    dialog.showModal();
    dialog.querySelector('.close-dialog').focus();
  }
  function closeDialog(dialog) {
    dialog.close();
    if (returnFocus && returnFocus.isConnected) returnFocus.focus();
  }
  function openNotes() {
    const slide = deck.getCurrentSlide();
    const dialog = document.getElementById('note-' + slide.id);
    if (dialog) showDialog(dialog, slide.querySelector('.notes-button'));
  }
  function update() {
    const index = deck.getIndices().h;
    const total = deck.getTotalSlides();
    position.textContent = (index + 1) + ' / ' + total;
    previous.disabled = index === 0;
    next.disabled = index === total - 1;
    study.href = 'study.html#' + (deck.getCurrentSlide().id === 'sources' ? 'bibliography' : deck.getCurrentSlide().id);
    // Reveal marks offscreen content inert. Also clear focus when navigation hides its owner.
    const activeSlide = document.activeElement.closest('.slide');
    if (activeSlide && activeSlide !== deck.getCurrentSlide()) document.querySelector('#deck').focus();
  }
  previous.addEventListener('click', () => deck.prev());
  next.addEventListener('click', () => deck.next());
  document.querySelectorAll('.notes-button').forEach(button => button.addEventListener('click', openNotes));
  document.querySelector('#contents-button').addEventListener('click', event => showDialog(document.querySelector('#contents'), event.currentTarget));
  document.querySelector('#help-button').addEventListener('click', event => showDialog(document.querySelector('#help'), event.currentTarget));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.close-dialog').addEventListener('click', () => closeDialog(dialog));
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
    dialog.querySelectorAll('a[href^="#/"]').forEach(link => link.addEventListener('click', () => closeDialog(dialog)));
  });
  deck.on('ready', update);
  deck.on('slidechanged', update);
  deck.initialize();
}
