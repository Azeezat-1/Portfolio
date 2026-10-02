import SectionHeading from '../ui/SectionHeading.jsx'
import SkillCard from '../ui/SkillCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import { skillGroups } from '../../data/skills.js'

/**
 * Skills as text tags on cards. No technology logo wall, per the brief.
 */
export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills and technology"
          title="Six areas, and how I actually use each one."
          split
        />

        <Reveal>
          <ul className="grid grid--2 skills__grid">
            {skillGroups.map((group) => (
              <SkillCard
                key={group.id}
                title={group.title}
                summary={group.summary}
                items={group.items}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}