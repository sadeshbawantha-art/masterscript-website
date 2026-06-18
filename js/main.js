/* ============================================================
   main.js – App Initialisation & Miscellaneous Enhancements
   This file runs last and ties everything together.
   ============================================================ */

(function () {
  'use strict';

  // ── Nav shadow on scroll ──────────────────────────────────
  var nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 20px rgba(15,32,68,0.10)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ── Active nav link highlighting on scroll ────────────────
  var sections = document.querySelectorAll('section[id], div[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.style.color = '';
          a.style.fontWeight = '';
        });
        var active = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (active) {
          active.style.color = 'var(--navy)';
          active.style.fontWeight = '600';
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Run once on load

  // ── WhatsApp float button (optional – uncomment to enable) ──
  // You can style this with CSS if you want a floating WhatsApp icon
  /*
  var waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/94766143893';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
  waBtn.style.cssText =
    'position:fixed;bottom:28px;right:28px;z-index:300;' +
    'width:56px;height:56px;border-radius:50%;' +
    'background:#25d366;display:flex;align-items:center;justify-content:center;' +
    'box-shadow:0 4px 16px rgba(37,211,102,0.4);font-size:1.6rem;';
  waBtn.textContent = '💬';
  document.body.appendChild(waBtn);
  */

  // ── Console branding ──────────────────────────────────────
  console.log(
    '%cMaster Script\n%cAcademic Writing Services',
    'color:#c09b4a;font-size:1.4rem;font-weight:bold;',
    'color:#64748b;font-size:0.9rem;'
  );

})();
