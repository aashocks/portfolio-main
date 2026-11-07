import { useScroll, useSpring } from 'framer-motion'

// Smoothed 0 → 1 value representing how far down the page the visitor has scrolled.
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
}
