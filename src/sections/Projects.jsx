import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { projectFilters, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="02"
          label="SELECTED WORK"
          title="Projects That Bring Ideas to Life."
          description="Explore a selection of projects that demonstrate my technical skills, creativity, and passion for building digital experiences."
        />

        <Reveal className="filters">
          <div className="filters__list" role="group" aria-label="Filter projects by category">
            {projectFilters.map((name) => (
              <button
                key={name}
                type="button"
                className={`filter ${filter === name ? 'is-active' : ''}`}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {filter === name ? (
                  <motion.span
                    layoutId="filter-pill"
                    className="filter__pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="filter__text">{name}</span>
              </button>
            ))}
          </div>
          <p className="filters__count" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>
        </Reveal>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                className={`projects__item ${
                  project.featured && filter === 'All' ? 'projects__item--wide' : ''
                }`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
      </AnimatePresence>
    </section>
  )
}
