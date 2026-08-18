/* ============================================================
   animations.js — GSAP + ScrollTrigger motion layer.
   Entirely progressive enhancement: base CSS renders every element
   fully visible, so if GSAP fails to load (CDN down, blocked, etc.)
   the site remains 100% usable with no hidden content.
   ============================================================ */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';

  if (!hasGSAP) return; // graceful no-op — content is already visible via CSS defaults

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion) {
    // Skip all JS-driven motion; run counters instantly so the numbers still populate.
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
    return;
  }

  // Only now flag the document as GSAP-driven — the CSS rule that hides
  // .reveal/.reveal-item is scoped to html.js-gsap-ready, so nothing goes
  // invisible until we are guaranteed to animate it back in.
  document.documentElement.classList.add('js-gsap-ready');

  /* -----------------------------------------------------------
     Hero entrance
     ----------------------------------------------------------- */
  var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.6 }, 0.1)
    .to('.hero__title .word__inner', { yPercent: 0, duration: 0.9, stagger: 0.06 }, 0.15)
    .to('.hero__tagline', { opacity: 1, y: 0, duration: 0.7 }, 0.55)
    .to('.hero__ctas', { opacity: 1, y: 0, duration: 0.7 }, 0.68)
    .to('.hero__badge', { opacity: 1, y: 0, duration: 0.6 }, 0.8)
    .to('.hero__scroll-cue', { opacity: 1, duration: 0.6 }, 0.95);

  gsap.set('.hero__eyebrow, .hero__tagline, .hero__ctas, .hero__badge', { opacity: 0, y: 24 });
  gsap.set('.hero__title .word__inner', { yPercent: 110 });
  gsap.set('.hero__scroll-cue', { opacity: 0 });
  heroTl.play(0);

  /* -----------------------------------------------------------
     Rising bubble particles in hero background
     ----------------------------------------------------------- */
  var bubbleField = document.querySelector('.hero__bg');
  if (bubbleField) {
    for (var i = 0; i < 14; i++) {
      var b = document.createElement('span');
      b.className = 'hero__bubble';
      var size = gsap.utils.random(8, 34);
      b.style.width = size + 'px';
      b.style.height = size + 'px';
      b.style.left = gsap.utils.random(2, 96) + '%';
      b.style.setProperty('--drift', gsap.utils.random(-40, 40) + 'px');
      b.style.animationDuration = gsap.utils.random(9, 20) + 's';
      b.style.animationDelay = '-' + gsap.utils.random(0, 20) + 's';
      bubbleField.appendChild(b);
    }
  }

  /* -----------------------------------------------------------
     Generic scroll-reveal system
     ----------------------------------------------------------- */
  gsap.utils.toArray('.reveal').forEach(function (el) {
    var items = el.querySelectorAll('.reveal-item');
    var targets = items.length ? items : el;
    // When a wrapper only exists to group .reveal-item children (it has no
    // content of its own), force it back to visible — only the items inside
    // should animate. Without this the wrapper stays at the CSS-driven
    // opacity:0 forever, since GSAP never gets told to restore it.
    if (items.length) gsap.set(el, { opacity: 1 });
    gsap.set(targets, { opacity: 0, y: 36 });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: items.length ? 0.12 : 0,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true
      }
    });
  });

  /* -----------------------------------------------------------
     Count-up stats
     ----------------------------------------------------------- */
  gsap.utils.toArray('[data-count]').forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var counter = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(counter.val) + suffix;
          }
        });
      }
    });
  });

  /* -----------------------------------------------------------
     "How it works" connecting line fill
     ----------------------------------------------------------- */
  var stepsLine = document.querySelector('.steps__line-fill');
  if (stepsLine) {
    gsap.to(stepsLine, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.steps',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.6
      }
    });
  }

  /* -----------------------------------------------------------
     Why-us alternating rows — light parallax on the visual block
     ----------------------------------------------------------- */
  gsap.utils.toArray('.why-us__visual').forEach(function (visual) {
    gsap.fromTo(visual, { y: -24 }, {
      y: 24,
      ease: 'none',
      scrollTrigger: {
        trigger: visual,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  /* -----------------------------------------------------------
     Before/after sliders — subtle reveal wipe on first view
     ----------------------------------------------------------- */
  gsap.utils.toArray('.ba-slider').forEach(function (slider) {
    var afterPanel = slider.querySelector('.ba-slider__panel--after');
    if (!afterPanel) return;
    gsap.fromTo(afterPanel,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      {
        clipPath: 'inset(0% 50% 0% 0%)',
        duration: 1.1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: slider,
          start: 'top 78%',
          once: true
        }
      }
    );
  });
})();
