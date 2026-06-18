/* ============================================================
   nav.js – Navigation: hamburger menu + smooth scrolling
   ============================================================ */

(function () {
  'use strict';

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  /** Open / close the mobile overlay menu */
  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (hamburger)   hamburger.addEventListener('click', toggleMenu);
  if (mobileClose) mobileClose.addEventListener('click', toggleMenu);

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });

  // ── Smooth scroll for all anchor links ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
