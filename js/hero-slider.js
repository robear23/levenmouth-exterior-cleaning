/* ============================================================
   hero-slider.js — 4-second rotating hero background with
   smooth Ken Burns zoom-in animation and interactive indicators.
   ============================================================ */
(function () {
  'use strict';

  var slider = document.getElementById('hero-slider');
  if (!slider) return;

  var slides = Array.prototype.slice.call(slider.querySelectorAll('.hero__slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero__dot'));
  if (slides.length <= 1) return;

  var currentIndex = 0;
  var totalSlides = slides.length;
  var intervalDuration = 4000; // 4 seconds per rotation
  var timer = null;

  function setActiveSlide(index) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });

    dots.forEach(function (dot, i) {
      if (i === index) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('is-active');
        dot.removeAttribute('aria-current');
      }
    });

    currentIndex = index;
  }

  function nextSlide() {
    var nextIndex = (currentIndex + 1) % totalSlides;
    setActiveSlide(nextIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, intervalDuration);
  }

  function stopAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Bind indicator dot clicks
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var targetIdx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(targetIdx) && targetIdx !== currentIndex) {
        setActiveSlide(targetIdx);
        startAutoplay(); // Reset rotation timer on manual interaction
      }
    });
  });

  // Pause rotation when tab is inactive to save battery/resources
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Initialize
  setActiveSlide(0);
  startAutoplay();
})();
