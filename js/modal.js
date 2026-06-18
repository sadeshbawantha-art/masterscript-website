/* ============================================================
   modal.js – PDF Viewer Modal
   Opens/closes the modal and loads PDF files into the iframe.
   ============================================================ */

(function () {
  'use strict';

  var modal      = document.getElementById('pdfModal');
  var iframe     = document.getElementById('pdfIframe');
  var title      = document.getElementById('pdfModalTitle');
  var closeBtn   = document.getElementById('pdfModalClose');

  if (!modal || !iframe) return; // Safety check

  /**
   * Open the PDF modal viewer.
   * @param {string} pdfPath  – relative path to the PDF file (e.g. "assets/sample_ECE.pdf")
   * @param {string} pdfTitle – title to show in the modal header
   */
  function openPdf(pdfPath, pdfTitle) {
    if (title)  title.textContent = pdfTitle || 'Sample Work';
    if (iframe) iframe.src = pdfPath;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Move focus to the close button for accessibility
    if (closeBtn) closeBtn.focus();
  }

  /**
   * Close the PDF modal and clear the iframe src
   * (clearing src stops the PDF from rendering in the background).
   */
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    // Slight delay lets the close animation finish before clearing
    setTimeout(function () {
      if (iframe) iframe.src = '';
    }, 200);
  }

  // ── Event listeners ────────────────────────────────────

  // Close button inside the modal header
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Click on the dark backdrop closes the modal
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Escape key closes the modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // ── Wire up all "View Sample" buttons ───────────────────
  // Buttons carry their PDF path and title in data attributes:
  //   data-pdf="assets/sample_ECE.pdf"
  //   data-title="ECE Essay – Quality in Early Childhood Education"
  document.querySelectorAll('[data-pdf]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pdfPath  = btn.getAttribute('data-pdf');
      var pdfTitle = btn.getAttribute('data-title') || 'Sample Work';
      openPdf(pdfPath, pdfTitle);
    });
  });

  // Expose openPdf globally in case it's needed elsewhere
  window.openPdf = openPdf;

})();
