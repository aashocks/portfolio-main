// ──────────────────────────────────────────────────────────────────────────
// Personal content lives here. Anything marked CUSTOMIZE is sample text or a
// placeholder that you should replace with your own information.
// ──────────────────────────────────────────────────────────────────────────

export const site = {
  initials: 'AA',

  // CUSTOMIZE: your real email. While this still says the placeholder, the
  // contact section shows it as plain text instead of a clickable mailto link.
  email: 'allenformento828@gmail.com',

  // CUSTOMIZE: your location label (shown on the About image).
  location: 'Philippines',

  // The roles that cycle in the hero.
  roles: ['Creative Developer', 'Frontend Developer', 'React Developer', 'Video Editor'],

  // CUSTOMIZE: your biography (About section).
  bio: [
    "I'm a creative developer who enjoys transforming ideas into functional, visually appealing digital experiences.",
    'I focus on frontend development, responsive web design, and creating engaging visual content. I enjoy learning new technologies, solving problems, and continuously improving my craft.',
  ],

  // CUSTOMIZE: sample values. Replace with your own numbers.
  stats: [
    { value: '4', label: 'Projects Completed' },
    { value: '12', label: 'Technologies Explored' },
    { value: '2', label: 'Creative Specialties' },
  ],
}

export const PLACEHOLDER_EMAIL = 'hello@yourdomain.com'
export const hasRealEmail = site.email !== PLACEHOLDER_EMAIL

// Resume download. Put your PDF at public/resume.pdf.
export const resume = {
  path: '/resume.pdf',
  filename: 'Allen-Aldrich-Formento-Resume.pdf',
}
