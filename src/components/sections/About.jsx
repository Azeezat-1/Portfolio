import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import AboutVisual from './AboutVisual.jsx'
import { approach } from '../../data/about.js'

/**
 * About: eyebrow plus heading, a short piece of writing and a supporting
 * visual.
 *
 * The writing stays prose only — the brief allows no stat row or numbers here.
 * Credibility comes from the two live projects in Selected Work and from the
 * writing itself.
 *
 * No portrait is shown. The supporting image is a structured workspace mockup
 * (a CSS laptop showing an editor in the site's syntax colours, with a
 * notebook and a mug), standing in for a real workspace photo: no person in
 * frame, and no generic stock image of someone at a laptop.
 */
export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title="The way I approach a project"
        />

        <div className="about__grid">
          <Reveal className="about__prose">
            {approach.map((paragraph) => (
              <p className="lead" key={paragraph.slice(0, 32)}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="about__media" delay={120}>
            <AboutVisual />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
