# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

No build step — open `index.html` directly in a browser for most work. PDFs inside the modal require a local server due to browser security restrictions:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Git Workflow

All changes should be committed with clean, imperative-mood messages and pushed to the private GitHub remote (`sadeshbawantha-art/masterscript-website`):

```bash
git add <specific-files>
git commit -m "Short description of what changed and why"
git push
```

## Architecture

This is a single-page static website (`index.html`) with no framework, no bundler, and no dependencies beyond Google Fonts. Everything is vanilla HTML/CSS/JS.

### CSS — split by section, driven by tokens

All CSS custom properties (colours, fonts, spacing, radius, shadow, transitions) live in `css/variables.css`. Edit there to change the design system site-wide. The other CSS files each own a single section of the page (`nav.css`, `hero.css`, `sections.css`, etc.) and should only use variables from `variables.css`, not hardcoded values.

Load order in `index.html` matters: `variables.css` → `base.css` → section files → `responsive.css` → `animations.css`.

### JS — isolated IIFEs, loaded at end of `<body>`

Each JS file is an immediately-invoked function expression with no globals exposed (except `window.openPdf` in `modal.js` for optional external use). Scripts are loaded in this order at the bottom of `<body>`: `nav.js` → `modal.js` → `form.js` → `reveal.js` → `main.js`.

**`nav.js`** — hamburger menu toggle + smooth scroll for all `a[href^="#"]` anchors  
**`modal.js`** — PDF viewer; reads `data-pdf` and `data-title` attributes from any button with `[data-pdf]`  
**`form.js`** — file upload UI (drag-and-drop + chip list via `DataTransfer`) + AJAX form submission to FormSubmit.co  
**`reveal.js`** — `IntersectionObserver` watches all `.reveal` elements and adds `.visible` on entry  
**`main.js`** — nav shadow on scroll, active-link highlighting, optional WhatsApp float button (commented out)

### Scroll animations

Add the class `reveal` to any element to opt it into the scroll-triggered fade-in. The `.visible` state and keyframes are defined in `css/animations.css`.

### PDF modal

Sample work buttons carry two data attributes: `data-pdf="assets/filename.pdf"` and `data-title="Display Title"`. `modal.js` wires up all matching buttons automatically — no extra JS needed when adding a new sample.

### Contact form

The enquiry form (`id="inquiryForm"`) submits via `fetch` to `https://formsubmit.co/ajax/sadeshbawantha@gmail.com`. The AJAX endpoint returns `{"success": true}` on delivery. **The FormSubmit.co endpoint must be activated by clicking the confirmation link sent to `sadeshbawantha@gmail.com` on first submission** — without activation, no emails are delivered.

Hidden fields in the form control FormSubmit behaviour: `_subject`, `_captcha`, `_template`. The standard `action` attribute on the form (`https://formsubmit.co/sadeshbawantha@gmail.com`) serves as a no-JS fallback only.
