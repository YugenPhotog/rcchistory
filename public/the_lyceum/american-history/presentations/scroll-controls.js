/**
 * Scroll Controls for Long Slides
 * - Up/Down arrows scroll vertically within the current slide
 * - Mouse wheel scrolls slide; only moves to next/prev when at edges
 * Works with the deck's global `slides` NodeList and `currentSlide` index.
 */
(function () {
  function getCurrentSlideEl() {
    try {
      if (typeof slides !== 'undefined' && typeof currentSlide !== 'undefined') {
        return slides[currentSlide];
      }
    } catch (e) {}
    // Fallback: the only visible block section
    return document.querySelector('.reveal .slides section[style*="display: block"]') ||
           document.querySelector('.reveal .slides section');
  }

  function canScroll(el) {
    if (!el) return false;
    return el.scrollHeight > el.clientHeight + 1;
  }

  function atTop(el) {
    return !el || el.scrollTop <= 0;
  }

  function atBottom(el) {
    if (!el) return true;
    const diff = el.scrollHeight - el.scrollTop - el.clientHeight;
    return diff <= 1;
  }

  // Smoothly scroll by an increment (keyboard)
  function kbdScroll(el, amount) {
    if (!el) return;
    el.scrollBy({ top: amount, behavior: 'smooth' });
  }

  // KEYBOARD: Up/Down/PageUp/PageDown control vertical scroll first
  window.addEventListener('keydown', function (e) {
    const el = getCurrentSlideEl();
    const scrollable = canScroll(el);
    if (!scrollable) return; // let the deck handle navigation

    const key = e.key;
    const pageStep = Math.max(120, Math.floor(el.clientHeight * 0.9));
    const lineStep = 80;

    if (key === 'ArrowDown' || key === 'PageDown') {
      if (!atBottom(el)) {
        e.preventDefault();
        e.stopPropagation();
        kbdScroll(el, key === 'PageDown' ? pageStep : lineStep);
      }
    } else if (key === 'ArrowUp' || key === 'PageUp') {
      if (!atTop(el)) {
        e.preventDefault();
        e.stopPropagation();
        kbdScroll(el, key === 'PageUp' ? -pageStep : -lineStep);
      }
    }
  }, true); // capture to intercept before slide navigation

  // MOUSE WHEEL: scroll inside slide; only propagate when at edges
  window.addEventListener('wheel', function (e) {
    const el = getCurrentSlideEl();
    const scrollable = canScroll(el);
    if (!scrollable) return; // let deck's default wheel go (next/prev)

    const delta = e.deltaY || 0;
    if (delta > 0) { // scrolling down
      if (!atBottom(el)) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollBy({ top: Math.min(220, Math.max(120, el.clientHeight * 0.25)) });
      }
    } else if (delta < 0) { // scrolling up
      if (!atTop(el)) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollBy({ top: -Math.min(220, Math.max(120, el.clientHeight * 0.25)) });
      }
    }
  }, { passive: false, capture: true });

  // Touch support: swipe up/down to scroll, only navigate when edges
  let touchStartY = null;
  window.addEventListener('touchstart', function (e) {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartY = e.changedTouches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener('touchend', function (e) {
    const el = getCurrentSlideEl();
    if (!canScroll(el)) return;
    if (touchStartY == null) return;
    const y = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : touchStartY;
    const dy = touchStartY - y; // positive = swipe up (scroll down)
    const step = Math.max(180, Math.floor(el.clientHeight * 0.3));
    if (Math.abs(dy) > 30) {
      e.stopPropagation();
      if (dy > 0 && !atBottom(el)) {
        el.scrollBy({ top: step, behavior: 'smooth' });
      } else if (dy < 0 && !atTop(el)) {
        el.scrollBy({ top: -step, behavior: 'smooth' });
      }
    }
    touchStartY = null;
  }, { passive: true });

  // Ensure sections are scrollable and prevent overscroll chaining
  const style = document.createElement('style');
  style.textContent = `
    .reveal .slides section { overflow-y: auto; overscroll-behavior: contain; }
  `;
  document.head.appendChild(style);
})();
