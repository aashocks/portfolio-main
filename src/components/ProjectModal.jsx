import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Button from './Button'

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  // Lock page scroll, move focus into the dialog, trap Tab, close on Escape,
  // and give focus back to whatever opened the modal.
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const items = panelRef.current.querySelectorAll(FOCUSABLE)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [])

  const { title, category, image, imageAlt, longDescription, tech, objectives, features, liveUrl, githubUrl } =
    project

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <motion.div
        ref={panelRef}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <img className="modal__image" src={image} alt={imageAlt} width="1200" height="750" />

        <div className="modal__content">
          <div className="modal__main">
            <p className="eyebrow">{category}</p>
            <h3 id="project-modal-title">{title}</h3>
            <p className="modal__lead">{longDescription}</p>

            <h4>Objectives</h4>
            <ul className="modal__list">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Key features</h4>
            <ul className="modal__list">
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="modal__aside">
            <h4>Technologies used</h4>
            <div className="tags">
              {tech.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            {liveUrl || githubUrl ? (
              <div className="modal__actions">
                {liveUrl ? (
                  <Button href={liveUrl} icon={<ExternalLink size={16} aria-hidden="true" />}>
                    Live Website
                  </Button>
                ) : null}
                {githubUrl ? (
                  <Button
                    href={githubUrl}
                    variant="ghost"
                    icon={<FaGithub size={16} aria-hidden="true" />}
                  >
                    GitHub Repository
                  </Button>
                ) : null}
              </div>
            ) : null}
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}
