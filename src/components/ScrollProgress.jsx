import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

// Thin bar across the top of the page showing how far the visitor has scrolled.
export default function ScrollProgress() {
  const scaleX = useScrollProgress()
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
