import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { publishedAchievements } from '../../data/achievements.js'

/**
 * Completed work and milestones.
 *
 * Only entries marked `placeholder: false` in the data file render, so an
 * unfinished item can never reach the published page. If nothing has been
 * filled in yet the section is dropped entirely rather than showing an empty
 * heading.
 */
export default function Achievements() {
  if (publishedAchievements.length === 0) return null

  return (
    <section
      className="section achievements"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <SectionHeading
          id="achievements-title"
          eyebrow="Experience and milestones"
          title="What has actually shipped."
          split
        />

        <ol className="ach__list">
          {publishedAchievements.map((entry, index) => (
            <Reveal as="li" key={entry.id} delay={index * 60}>
              <article className="ach-item">
                <p className="ach-item__meta">
                  <span className="ach-item__category">{entry.category}</span>
                  {entry.period ? <span>{entry.period}</span> : null}
                </p>

                <div>
                  <h3 className="ach-item__title">{entry.title}</h3>
                  <p className="ach-item__text">{entry.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}