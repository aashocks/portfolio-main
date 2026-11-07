import { MotionConfig } from 'framer-motion'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

export default function App() {
  return (
    // reducedMotion="user": transform animations are skipped automatically for
    // visitors who enable "reduce motion" in their operating system.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
