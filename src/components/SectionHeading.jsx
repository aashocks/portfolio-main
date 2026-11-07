import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, description, id }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        {index} — {label}
      </p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__desc">{description}</p> : null}
    </Reveal>
  )
}
