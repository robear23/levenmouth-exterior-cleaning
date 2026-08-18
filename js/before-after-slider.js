/* ============================================================
   before-after-slider.js — draggable before/after comparison
   slider. Works with mouse, touch and keyboard, independent of
   whether GSAP loaded (the reveal wipe in animations.js is purely
   an entrance flourish; this file owns ongoing interaction).
   ============================================================ */
(function () {
  'use strict';

  var sliders = document.querySelectorAll('[data-ba-slider]');

  sliders.forEach(function (root) {
    var afterPanel = root.querySelector('.ba-slider__panel--after');
    var handle = root.querySelector('.ba-slider__handle');
    var handleBar = root.querySelector('.ba-slider__handle-bar');
    if (!afterPanel || !handle) return;

    var dragging = false;

    function setPosition(percent) {
      percent = Math.min(100, Math.max(0, percent));
      afterPanel.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
      handle.style.left = percent + '%';
      if (handleBar) handleBar.style.left = percent + '%';
      handle.setAttribute('aria-valuenow', Math.round(percent));
    }

    function percentFromClientX(clientX) {
      var rect = root.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    }

    function onPointerMove(e) {
      if (!dragging) return;
      setPosition(percentFromClientX(e.clientX));
    }

    function stopDragging() {
      dragging = false;
      root.classList.remove('is-dragging');
    }

    root.addEventListener('pointerdown', function (e) {
      dragging = true;
      root.classList.add('is-dragging');
      root.setPointerCapture(e.pointerId);
      setPosition(percentFromClientX(e.clientX));
    });
    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('pointerup', stopDragging);
    root.addEventListener('pointercancel', stopDragging);
    root.addEventListener('pointerleave', function () {
      if (dragging) stopDragging();
    });

    /* Keyboard support */
    handle.setAttribute('role', 'slider');
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    if (!handle.getAttribute('aria-label')) {
      handle.setAttribute('aria-label', 'Drag to compare before and after');
    }

    handle.addEventListener('keydown', function (e) {
      var current = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
      var step = e.shiftKey ? 10 : 4;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        setPosition(current - step);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        setPosition(current + step);
        e.preventDefault();
      } else if (e.key === 'Home') {
        setPosition(0);
        e.preventDefault();
      } else if (e.key === 'End') {
        setPosition(100);
        e.preventDefault();
      }
    });

    // Initial state — matches the CSS default (50/50) so there is no jump.
    setPosition(50);
  });
})();
