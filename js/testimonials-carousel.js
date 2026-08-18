/* ============================================================
   testimonials-carousel.js — lightweight, dependency-free carousel.
   Auto-advances, pauses on hover/focus/touch, supports swipe,
   arrow keys, and click-through dots.
   ============================================================ */
(function () {
  'use strict';

  var root = document.querySelector('[data-carousel]');
  if (!root) return;

  var viewport = root.querySelector('.testimonial-carousel__viewport');
  var track = root.querySelector('.testimonial-carousel__track');
  var slides = Array.prototype.slice.call(root.querySelectorAll('.testimonial-slide'));
  var prevBtn = root.querySelector('[data-carousel-prev]');
  var nextBtn = root.querySelector('[data-carousel-next]');
  var dotsWrap = root.querySelector('[data-carousel-dots]');

  if (!viewport || !track || !slides.length) return;

  var index = 0;
  var slidesPerView = 1;
  var autoplayMs = 5000;
  var timer = null;
  var isPointerDown = false;
  var startX = 0;
  var deltaX = 0;

  function getSlidesPerView() {
    var w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 700) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, slides.length - slidesPerView);
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    var dotCount = maxIndex() + 1;
    for (var i = 0; i < dotCount; i++) {
      var dot = document.createElement('button');
      dot.className = 'testimonial-carousel__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Go to testimonial group ' + (i + 1));
      (function (i) {
        dot.addEventListener('click', function () { goTo(i); restartAutoplay(); });
      })(i);
      dotsWrap.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    if (!dotsWrap) return;
    var dots = dotsWrap.querySelectorAll('.testimonial-carousel__dot');
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === index); });
  }

  function render() {
    var slideWidthPercent = 100 / slidesPerView;
    track.style.transform = 'translateX(-' + (index * slideWidthPercent) + '%)';
    updateDots();
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
  }

  function goTo(i) {
    index = Math.min(Math.max(i, 0), maxIndex());
    render();
  }

  function next() { goTo(index >= maxIndex() ? 0 : index + 1); }
  function prev() { goTo(index <= 0 ? maxIndex() : index - 1); }

  function startAutoplay() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopAutoplay();
    timer = setInterval(next, autoplayMs);
  }
  function stopAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  function handleResize() {
    var newSpv = getSlidesPerView();
    if (newSpv !== slidesPerView) {
      slidesPerView = newSpv;
      buildDots();
      goTo(Math.min(index, maxIndex()));
    } else {
      render();
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); restartAutoplay(); });

  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', startAutoplay);
  root.addEventListener('focusin', stopAutoplay);
  root.addEventListener('focusout', startAutoplay);

  root.setAttribute('tabindex', '0');
  root.setAttribute('role', 'region');
  root.setAttribute('aria-label', 'Customer testimonials carousel');
  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { prev(); restartAutoplay(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { next(); restartAutoplay(); e.preventDefault(); }
  });

  /* Swipe / drag support */
  viewport.addEventListener('pointerdown', function (e) {
    isPointerDown = true;
    startX = e.clientX;
    deltaX = 0;
    stopAutoplay();
    track.style.transition = 'none';
  });
  viewport.addEventListener('pointermove', function (e) {
    if (!isPointerDown) return;
    deltaX = e.clientX - startX;
    var slideWidthPercent = 100 / slidesPerView;
    var viewportWidth = viewport.getBoundingClientRect().width || 1;
    var dragPercent = (deltaX / viewportWidth) * slideWidthPercent;
    track.style.transform = 'translateX(calc(-' + (index * slideWidthPercent) + '% + ' + deltaX + 'px))';
  });
  function endDrag() {
    if (!isPointerDown) return;
    isPointerDown = false;
    track.style.transition = '';
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) next(); else prev();
    } else {
      render();
    }
    restartAutoplay();
  }
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('pointerleave', function () { if (isPointerDown) endDrag(); });

  window.addEventListener('resize', handleResize);

  slidesPerView = getSlidesPerView();
  buildDots();
  render();
  startAutoplay();
})();
