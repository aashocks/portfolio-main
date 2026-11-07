// Scrolls to a section by id, accounting for the fixed navbar.
// Done in JS (instead of relying on the browser's #anchor jump) because the
// mobile menu collapses and mobile browser toolbars resize while a smooth
// scroll is running, which can leave the page stopped at the wrong section.
const NAV_OFFSET = 64

function targetTop(el) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET)
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({ top: targetTop(el), behavior: reduced ? 'auto' : 'smooth' })
  window.history.replaceState(null, '', `#${id}`)

  // After the smooth scroll settles, correct any drift caused by layout changes.
  window.setTimeout(() => {
    const drift = Math.abs(window.scrollY - targetTop(el))
    if (drift > 4) window.scrollTo({ top: targetTop(el), behavior: 'auto' })
  }, reduced ? 50 : 900)
}
