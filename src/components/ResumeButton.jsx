import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { resume } from '../data/site'

// Downloads /resume.pdf (public/resume.pdf) under a friendly filename.
export default function ResumeButton({ className = '' }) {
  // Only show the button when the PDF is really deployed, so visitors never
  // download a 404 page. (Hosts without a file return 404 or an HTML fallback.)
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(resume.path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  if (!available) return null

  return (
    <motion.a
      className={`btn btn--md btn--resume ${className}`.trim()}
      href={resume.path}
      download={resume.filename}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="btn__icon btn__icon--download">
        <Download size={18} aria-hidden="true" />
      </span>
      <span>Download My Resume</span>
      <span className="sr-only"> (PDF)</span>
    </motion.a>
  )
}
