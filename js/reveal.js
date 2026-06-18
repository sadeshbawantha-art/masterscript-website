/* ============================================================
   reveal.js – Scroll-triggered Reveal Animations
   Uses IntersectionObserver; falls back gracefully if unsupported.
   ============================================================ */

(function () {
  'use strict';

  var revealElements = document.querySelectorAll('.reveal');

  // If IntersectionObserver isn't supported, just make everything visible
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // Stagger reveals slightly for a cascading effect
          var delay = Math.min(i * 60, 300); // cap at 300ms
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
          // Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,    // Trigger when 10% of element is visible
      rootMargin: '0px 0px -40px 0px' // Start slightly before entering viewport
    }
  );

  revealElements.forEach(function (el) { observer.observe(el); });

})();
