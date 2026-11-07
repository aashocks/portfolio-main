import { motion } from 'framer-motion'
import { activeSocialLinks } from '../data/socialLinks'

// Icon row. Only links that have a URL in src/data/socialLinks.js are shown.
export default function SocialLinks({ className = '' }) {
  if (!activeSocialLinks.length) return null

  return (
    <ul className={`socials ${className}`.trim()}>
      {activeSocialLinks.map(({ id, label, url, icon: Icon }) => (
        <li key={id}>
          <motion.a
            className="socials__link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
          >
            <Icon aria-hidden="true" />
          </motion.a>
        </li>
      ))}
    </ul>
  )
}
