import { MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { site } from '../data/site'
import { services, skillGroups } from '../data/skills'
import profileImage from '../assets/images/profile.JPG'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          index="01"
          label="ABOUT ME"
          title="Turning Ideas Into Digital Experiences."
        />

        <div className="about__intro">
          <Reveal className="about__media">
            <div className="about__frame">
              <img
                src={profileImage}
                alt={`Portrait of ${site.initials}`}
                width="800"
                height="1000"
                loading="lazy"
              />
              <span className="about__label">
                <MapPin size={14} aria-hidden="true" /> {site.location}
              </span>
            </div>
            <span className="about__corner" aria-hidden="true" />
          </Reveal>

          <div className="about__text">
            <Reveal delay={0.1}>
              {site.bio.map((paragraph) => (
                <p key={paragraph} className="about__bio">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <ul className="stats">
              {site.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.15 + index * 0.08} className="stats__item">
                  <li>
                    <span className="stats__value">{stat.value}</span>
                    <span className="stats__label">{stat.label}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="about__block">
          <h3 className="block-title">Skills &amp; Tools</h3>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills__group">
                <h4>{group.title}</h4>
                <ul className="skills__list">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.label} {...skill} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about__block">
          <Reveal>
            <h3 className="block-title">What I Do</h3>
          </Reveal>
          <div className="services">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.id} delay={index * 0.1} className="service">
                  <span className="service__icon">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <ul className="tags">
                    {service.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
