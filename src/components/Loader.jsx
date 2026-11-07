import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/site'

// Short intro animation (about one second) shown once when the site first loads.
export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loader"
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <motion.span
            className="loader__logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.initials}
          </motion.span>
          <span className="loader__track">
            <motion.span
              className="loader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.95, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
