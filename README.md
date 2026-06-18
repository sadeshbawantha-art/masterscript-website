# Master Script – Website

Academic writing services website for Master Script.

---

## 📁 Project Structure

```
masterscript/
├── index.html              ← Main page (HTML structure only)
├── assets/
│   ├── logo.svg            ← Your logo (swap this file to update logo everywhere)
│   ├── sample_ECE.pdf      ← Sample work: ECE Essay
│   ├── sample_MBA_CSR.pdf  ← Sample work: MBA Research Proposal
│   └── sample_Strategic.pdf← Sample work: Strategic Report
├── css/
│   ├── variables.css       ← 🎨 EDIT COLOURS & FONTS HERE
│   ├── base.css            ← Reset, buttons, shared utilities
│   ├── nav.css             ← Navigation bar
│   ├── hero.css            ← Hero section
│   ├── sections.css        ← Services, Specialisms, Global Reach
│   ├── samples.css         ← Sample work cards & watermarks
│   ├── modal.css           ← PDF viewer modal
│   ├── form.css            ← Contact form & file upload
│   ├── footer.css          ← Footer
│   ├── responsive.css      ← Mobile/tablet breakpoints
│   └── animations.css      ← Keyframes & scroll reveal
└── js/
    ├── nav.js              ← Hamburger menu + smooth scroll
    ├── modal.js            ← PDF viewer open/close logic
    ├── form.js             ← File upload UI + form submit
    ├── reveal.js           ← Scroll-triggered animations
    └── main.js             ← App init, nav highlight, extras
```

---

## 🚀 How to Run Locally

Just open `index.html` in any modern browser.
> **Note:** PDF viewing requires a local server (due to browser security).
> Use VS Code's **Live Server** extension, or run:
> ```bash
> python3 -m http.server 8080
> ```
> Then open `http://localhost:8080`

---

## ✏️ How to Edit

### Change Brand Name
Search `Master Script` in `index.html` and replace with your new name.

### Change Colours
Open `css/variables.css` and edit the values under `:root { }`.
| Variable      | What it controls            |
|---------------|-----------------------------|
| `--navy`      | Primary dark blue (headers, buttons) |
| `--gold`      | Gold accent colour          |
| `--sky`       | Blue labels and highlights  |
| `--light`     | Light background sections   |

### Change Fonts
In `css/variables.css`, update `--font-display` and `--font-body`.
Also update the Google Fonts `<link>` in `index.html`.

### Update Contact Details
In `index.html`, find and replace:
- `sadeshbawantha@gmail.com` → your email
- `+94 766 143 893` → your phone number

### Update Form Email
The form sends to FormSubmit.co. Change this line in `index.html`:
```html
<form action="https://formsubmit.co/sadeshbawantha@gmail.com" ...>
```

### Add a New Sample Work
1. Add your PDF to `assets/` folder. If you have a PPTX, convert it to PDF first using LibreOffice: `libreoffice --headless --convert-to pdf yourfile.pptx`
2. Copy an existing sample card block in `index.html`.
3. Update: title, description, word count, referencing style, level.
4. Change the button's `data-pdf` to point to your new PDF:
   ```html
   <button ... data-pdf="assets/your_new_sample.pdf" data-title="Your Title">
   ```
5. Change `style="background: ..."` on `.sample-preview` for a different colour gradient.

**Current Samples (6 total):**
- `sample_ECE.pdf` – ECE Essay (Quality in Early Childhood Education)
- `sample_MBA_CSR.pdf` – MBA Research Proposal (Nestlé Lanka CSR)
- `sample_Strategic.pdf` – Strategic Report (Lloyds Banking Group)
- `sample_Boots_UK.pdf` – Financial Sustainability Analysis (Boots UK – converted from PPTX)
- `sample_FM_Financial_Modelling.pdf` – Financial Modelling Report (ACL Plastics & Alumax)
- `sample_Communication_Business.pdf` – Communication in Business (Dialog Axiata PLC)

### Add a New Service Card
Copy any `<div class="service-card">` block in `index.html` and update the icon, title, and description.

### Replace the Logo
Drop your new SVG logo file into `assets/` and name it `logo.svg`.
It will automatically appear in the navbar, footer, PDF viewer, and as a watermark.

### Enable WhatsApp Float Button
In `js/main.js`, find the WhatsApp section and remove the `/* ... */` comment markers.

---

## 🌐 Deploying

Upload all files and folders to your hosting provider, keeping the same folder structure.
- `index.html` must be at the root
- `assets/`, `css/`, and `js/` folders alongside it

Recommended free hosts: **Netlify**, **Vercel**, **GitHub Pages**, or traditional **cPanel** hosting.

---

## 📬 Form Setup (FormSubmit.co)

The enquiry form uses [FormSubmit.co](https://formsubmit.co) — no backend required.

1. First submission to your email triggers a one-time activation email from FormSubmit.
2. Click the activation link in that email.
3. All future form submissions will arrive at `sadeshbawantha@gmail.com`.

---

© 2025 Master Script. All rights reserved.
