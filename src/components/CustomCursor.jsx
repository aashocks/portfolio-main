import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"]'

// Subtle follower ring for desktop mouse users only. It is never rendered on
// touch devices or when the visitor prefers reduced motion, and it does not
// hide the normal system cursor.
export default function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [hasFinePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 })

  const enabled = hasFinePointer && !reduceMotion

  useEffect(() => {
    if (!enabled) return undefined

    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
    }
    const onOver = (event) => setActive(Boolean(event.target.closest?.(INTERACTIVE)))
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div className="cursor" style={{ x: springX, y: springY }} aria-hidden="true">
      <motion.span
        className="cursor__ring"
        animate={{ scale: active ? 1.7 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
