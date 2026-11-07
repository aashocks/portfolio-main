export default function SkillCard({ icon: Icon, label }) {
  return (
    <li className="skill">
      <Icon className="skill__icon" aria-hidden="true" />
      <span>{label}</span>
    </li>
  )
}
