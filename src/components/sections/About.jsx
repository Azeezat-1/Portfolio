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
 * About: eyebrow plus heading, a short piece of writing, four plain-language
 * promises and a quiet line about the tools behind the scenes (v11 brief).
 *
 * Written for a client in a warm, direct first-person voice. Deliberately no
 * stat row or numbers — the four promises are qualities, not counters.
 *
 * The supporting visual is Azeezat's own photo, inside a frosted glass frame
 * with a light cool color grade. No code, no editors, no code-on-screen
 * imagery.
 */
export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title="Let's build something that works for your business"
        />

        <div className="about__grid">
          <Reveal className="about__prose">
            <p className="lead">{aboutIntro}</p>
          </Reveal>

          <Reveal className="about__media" delay={120}>
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
        </div>

        <Reveal className="about__promises" delay={60}>
          <ul className="about__promise-list">
            {aboutPromises.map((promise, index) => (
              <li className="about__promise" key={promise.title}>
                <span className={`chip chip--n${index % 4}`} aria-hidden="true">
                  <Icon name={promise.icon} />
                </span>
                <span className="about__promise-copy">
                  <strong className="about__promise-title">
                    {promise.title}
                  </strong>
                  <span className="about__promise-detail">
                    {promise.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="about__stack-note">{aboutStackNote}</p>
        </Reveal>
      </div>
    </section>
  )
}