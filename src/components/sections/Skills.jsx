import SectionHeading from '../ui/SectionHeading.jsx'
import SkillCard from '../ui/SkillCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import { skills } from '../../data/skills.js'

/**
 * Skills and services, as a 4-up grid of frosted cards.
 *
 * Each card gets the next pastel chip colour, so no two adjacent cards repeat a
 * pair. This is the "WHAT I DO" block from the brief, and it is the only icon
 * grid on the page: the reference's balance is icon, title and short
 * explanatory text per card, never a wall of technology logos.
 */
export default function Skills() {
  return (
    <section
      className="section skills"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="What I do"
          title="Skills & Services"
          split
        />

        <Reveal>
          <ul className="grid grid--4 skills__grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                chip={index % 4}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
