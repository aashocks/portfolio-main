import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// Floating button that appears once the visitor has scrolled down a bit.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 600))

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
