# AA — Creative Developer Portfolio

A dark, animated, responsive portfolio built with **React 19, Vite and Framer Motion**.

## Features
- Sticky navbar with active-section indicator and mobile menu
- Hero with staggered heading reveal, rotating roles and floating profile image
- About section: bio, stats, skill groups and service cards
- Projects: category filters, animated grid and a details modal (data lives in `src/data/projects.js`)
- Contact form with validation, honeypot spam trap and EmailJS support (no fake "success" messages)
- Scroll progress bar, back-to-top button, short loader, custom cursor (desktop only)
- SEO/Open Graph tags, skip link, focus management, `prefers-reduced-motion` support
- Responsive from 375px to 1440px+

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## Project structure
```
index.html
.env.example
public/favicon.svg
src/
  main.jsx  App.jsx
  assets/    images/profile.svg, projects/*.svg   (placeholders)
  components/ Navbar, Footer, Button, ProjectCard, ProjectModal, ...
  sections/   Hero, About, Projects, Contact
  data/       site.js, socialLinks.js, skills.js, projects.js
  hooks/      useScrollProgress, useActiveSection
  lib/        sendEmail.js
  styles/     global, navbar, hero, about, projects, contact, components (.css)
```

## Contact form (EmailJS)
1. Create a free account at https://www.emailjs.com, add an email service and a template.
2. Template variables used: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` — check `src/lib/sendEmail.js` for the exact names and match your template.
3. Copy `.env.example` to `.env` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```
4. Restart `npm run dev`. Until these are set, the form tells visitors it isn't connected yet instead of pretending to send.

These are public client-side keys; never put a private key in a `VITE_` variable.

## Customize (search for these)
| What | Where |
|---|---|
| Email, location, bio, stats, roles | `src/data/site.js` |
| Social links (empty URL = hidden) | `src/data/socialLinks.js` |
| Skills and services | `src/data/skills.js` |
| Projects, links, screenshots | `src/data/projects.js` + `src/assets/projects/` |
| Profile photo | replace `src/assets/images/profile.svg` (or import a `.jpg`/`.webp` in Hero.jsx and About.jsx) |
| Page title, description, Open Graph image/URL | `index.html` |
| Colors and fonts | CSS variables at top of `src/styles/global.css` |

Placeholders to replace: the email (`hello@yourdomain.com`), the profile image, the project artwork, the stats numbers, LinkedIn/Facebook/Instagram URLs, and `og:image` / `og:url`.

## Deploy
Any static host works (Vercel, Netlify, Render Static Site, GitHub Pages): build command `npm run build`, publish directory `dist`. Add the `VITE_EMAILJS_*` variables in the host's settings.
