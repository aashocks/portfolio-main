import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = links.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24))

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__logo" href="#home" aria-label={`${site.initials} — back to top`}>
          {site.initials}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav__pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="nav__link-text">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="nav__right">
          <span className="availability">
            <span className="dot" aria-hidden="true" />
            Available for Projects
          </span>
          <Button href="#contact" size="sm" variant="ghost" className="nav__cta">
            Contact
          </Button>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="container nav__mobile-inner" aria-label="Mobile">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav__mobile-link ${active === link.id ? 'is-active' : ''}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <span className="availability availability--mobile">
                <span className="dot" aria-hidden="true" />
                Available for Projects
              </span>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
