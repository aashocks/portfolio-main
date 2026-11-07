import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Film } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import Button from '../components/Button'
import { site } from '../data/site'
import profileImage from '../assets/images/profile.JPG'

const HEADING = [
  { text: 'Building' },
  { text: 'Digital' },
  { text: 'Experiences', accent: true },
  { text: 'That' },
  { text: 'Make' },
  { text: 'an' },
  { text: 'Impact.', accent: true },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.9 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % site.roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <p className="hero__roles">
      <span className="sr-only">{site.roles.join(', ')}</span>
      <span aria-hidden="true">
        I&apos;m a{' '}
        <span className="hero__rotator">
          <AnimatePresence mode="wait">
            <motion.span
              key={site.roles[index]}
              className="hero__role"
              initial={{ y: '70%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-70%', opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {site.roles[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </p>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--one" />
        <span className="hero__blob hero__blob--two" />
        <span className="hero__grid-lines" />
      </div>

      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          <motion.p className="eyebrow eyebrow--pill" variants={fadeUp}>
            <span className="dot" aria-hidden="true" />
            HELLO, I&apos;M A CREATIVE DEVELOPER
          </motion.p>

          <h1 id="hero-title" className="hero__title">
            {HEADING.map((item) => (
              <span key={item.text} className="word">
                <motion.span
                  variants={word}
                  className={item.accent ? 'word__inner gradient-text' : 'word__inner'}
                >
                  {item.text}
                </motion.span>{' '}
              </span>
            ))}
          </h1>

          <motion.div variants={fadeUp}>
            <RoleRotator />
          </motion.div>

          <motion.p className="hero__desc" variants={fadeUp}>
            I&apos;m passionate about building modern, responsive websites and creating engaging
            digital experiences through design, development, and video editing.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <Button href="#projects" icon={<ArrowRight size={18} aria-hidden="true" />}>
              Explore My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__float"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__glow" aria-hidden="true" />
            <div className="hero__frame">
              <img
                src={profileImage}
                alt={`Portrait of ${site.initials}`}
                width="800"
                height="1000"
                fetchPriority="high"
              />
            </div>

            <motion.span
              className="chip chip--top"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <FaReact aria-hidden="true" /> React &amp; Vite
            </motion.span>
            <motion.span
              className="chip chip--mid"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <Film size={14} aria-hidden="true" /> Video Editing
            </motion.span>
            <span className="chip chip--bottom">
              <span className="dot" aria-hidden="true" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll down to the About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="hero__mouse" aria-hidden="true">
          <span className="hero__wheel" />
        </span>
        <span>Scroll</span>
      </motion.a>
    </section>
  )
}
