/* ============================================================
   main.js — nav behaviour, mobile menu, active-section highlight,
   floating WhatsApp button reveal. No animation-library dependency,
   so the site stays usable even if GSAP fails to load.
   ============================================================ */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  var navBackdrop = document.getElementById('nav-backdrop');
  var whatsappFloat = document.getElementById('whatsapp-float');
  var yearEl = document.getElementById('year');
  var scrollCue = document.getElementById('hero-scroll-cue');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (scrollCue) {
    scrollCue.addEventListener('click', function () {
      var target = document.getElementById('services');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* -- Sticky nav background on scroll -- */
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    if (whatsappFloat) {
      if (window.scrollY > 480) {
        whatsappFloat.classList.add('is-visible');
      } else {
        whatsappFloat.classList.remove('is-visible');
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -- Mobile menu -- */
  function closeMenu() {
    document.documentElement.classList.remove('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    document.documentElement.classList.add('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = document.documentElement.classList.contains('nav-open');
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });
  }
  if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);
  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* -- Active-section highlight -- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id], footer[id]'));
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));

  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = navAnchors.filter(function (a) { return a.getAttribute('href') === '#' + id; })[0];
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) { a.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* -- Magnetic hover for primary CTA buttons (desktop, fine pointer only) -- */
  var supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (supportsFinePointer && !prefersReducedMotion) {
    var magneticButtons = document.querySelectorAll('.btn--primary, .btn--liquid');
    magneticButtons.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var relX = ((e.clientX - rect.left) / rect.width) * 100;
        var relY = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty('--x', relX + '%');
        btn.style.setProperty('--y', relY + '%');
        var dx = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
        var dy = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
        btn.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }
})();
