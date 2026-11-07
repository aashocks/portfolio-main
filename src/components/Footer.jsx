import { ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks'
import { site } from '../data/site'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="nav__logo" href="#home" aria-label={`${site.initials} — back to top`}>
              {site.initials}
            </a>
            <p>Designed and developed with creativity and passion.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {site.initials}. All rights reserved.
          </p>
          <a className="footer__top-link" href="#home">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
