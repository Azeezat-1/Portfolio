import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import {
  aboutIntro,
  aboutPromises,
  aboutStackNote,
} from '../../data/about.js'
import aboutPhoto from '../../assets/photos/about-portrait.jpg'

/**
 * About section (brief §3.5).
 *
 * Left: the portrait inside a frosted glass frame on a soft violet organic
 * blob. Right: eyebrow, two-tone H2, the client-facing intro, four promise
 * rows (qualities, never statistics) and one quiet grey line about the tools.
 *
 * The brief references an `about-laptop.svg` illustration that does not exist
 * in this project; the supplied portrait photo is used instead.
 * TODO(assets): swap in an about-laptop.svg illustration if one is provided.
 */
export default function About() {
  return (
    <section className="section band about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__blob" aria-hidden="true" />
          <figure className="about__frame">
            <img
              className="about__photo"
              src={aboutPhoto}
              alt="Azeezat Yusuf."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        <Reveal className="about__prose" delay={80}>
          <SectionHeading
            id="about-title"
            eyebrow="About me"
            title={
              <>
                Let&apos;s build something that{' '}
                <span className="hi">works for your business</span>
              </>
            }
            level={2}
          />

          <p className="lead">{aboutIntro}</p>

          <div className="about__promises">
            <ul className="about__promise-list">
              {aboutPromises.map((promise, index) => (
                <li className="about__promise" key={promise.title}>
                  <span className={`chip chip--n${(index + 1) % 4}`} aria-hidden="true">
                    <Icon name={promise.icon} />
                  </span>
                  <span className="about__promise-copy">
                    <span className="about__promise-title">{promise.title}</span>
                    <span className="about__promise-detail">{promise.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="about__stack-note">{aboutStackNote}</p>
        </Reveal>
      </div>
    </section>
  )
}