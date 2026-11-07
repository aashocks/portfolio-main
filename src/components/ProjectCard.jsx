import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// The card body is one <button> that opens the details modal. The Live / GitHub
// links sit outside it, because a link can't be nested inside a button.
export default function ProjectCard({ project, onOpen }) {
  const { title, category, image, imageAlt, description, tech, liveUrl, githubUrl, featured } =
    project

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <button
        type="button"
        className="project-card__open"
        onClick={onOpen}
        aria-label={`${title} — view project details`}
      >
        <span className="project-card__media">
          <img src={image} alt={imageAlt} loading="lazy" width="1200" height="750" />
          <span className="project-card__category">{category}</span>
          {featured ? <span className="project-card__featured">Featured</span> : null}
        </span>

        <span className="project-card__body">
          <span className="project-card__title-row">
            <h3>{title}</h3>
            <ArrowUpRight className="project-card__arrow" size={22} aria-hidden="true" />
          </span>
          <span className="project-card__desc">{description}</span>
          <span className="tags">
            {tech.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </span>
        </span>
      </button>

      {liveUrl || githubUrl ? (
        <div className="project-card__links">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} aria-hidden="true" /> Live Demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
