/* ============================================================
   form.js – Enquiry Form: File Upload UI + Submit Feedback
   ============================================================ */

(function () {
  'use strict';

  // ── Elements ─────────────────────────────────────────────
  var form       = document.getElementById('inquiryForm');
  var fileInput  = document.getElementById('assignmentFiles');
  var fileList   = document.getElementById('fileList');
  var dropZone   = document.getElementById('dropZone');
  var status     = document.getElementById('formStatus');
  var deadline   = document.getElementById('deadline');

  // Keep a local array of File objects so we can manage them
  var selectedFiles = [];

  // ── Set minimum deadline to today ────────────────────────
  if (deadline) {
    var today = new Date();
    deadline.min = today.toISOString().split('T')[0];
  }

  // ── Format file size for display ─────────────────────────
  function formatSize(bytes) {
    if (bytes < 1024)     return bytes + ' B';
    if (bytes < 1048576)  return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  // ── Render the file chip list ─────────────────────────────
  function renderFiles() {
    if (!fileList) return;
    fileList.innerHTML = '';

    selectedFiles.forEach(function (file, index) {
      var chip = document.createElement('div');
      chip.className = 'file-chip';
      chip.innerHTML =
        '<span class="file-chip-name">' +
          '<span>📄</span>' +
          '<span title="' + file.name + '">' + file.name + '</span>' +
          '<span class="file-chip-size">' + formatSize(file.size) + '</span>' +
        '</span>' +
        '<button class="file-chip-remove" type="button" ' +
          'data-index="' + index + '" title="Remove file" aria-label="Remove ' + file.name + '">✕</button>';
      fileList.appendChild(chip);
    });

    // Wire remove buttons
    fileList.querySelectorAll('.file-chip-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-index'), 10);
        selectedFiles.splice(idx, 1);
        syncInputFiles();
        renderFiles();
      });
    });
  }

  // ── Sync selectedFiles array back to the real <input> ─────
  // This ensures the browser's FormData includes all chosen files.
  function syncInputFiles() {
    if (!fileInput) return;
    var dt = new DataTransfer();
    selectedFiles.forEach(function (file) { dt.items.add(file); });
    fileInput.files = dt.files;
  }

  // ── Add new files (avoid exact duplicates) ────────────────
  function addFiles(newFiles) {
    Array.from(newFiles).forEach(function (file) {
      var isDuplicate = selectedFiles.some(function (existing) {
        return existing.name === file.name && existing.size === file.size;
      });
      if (!isDuplicate) selectedFiles.push(file);
    });
    syncInputFiles();
    renderFiles();
  }

  // ── File input: standard browse ───────────────────────────
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      addFiles(fileInput.files);
    });
  }

  // ── Drag and drop ─────────────────────────────────────────
  if (dropZone) {
    dropZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', function () {
      dropZone.classList.remove('drag-over');
    });
    dropZone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      if (e.dataTransfer && e.dataTransfer.files.length) {
        addFiles(e.dataTransfer.files);
      }
    });
  }

  // ── Form submission feedback ──────────────────────────────
  if (form) {
    form.addEventListener('submit', function () {
      // Show a brief confirmation (FormSubmit handles actual delivery)
      setTimeout(function () {
        if (status) {
          status.textContent = '✅ Enquiry sent! We\'ll be in touch shortly.';
          status.className = 'success';
        }
      }, 700);
    });
  }

})();
