import { ArrowRight } from 'lucide-react'

import Button from '../ui/Button.jsx'
import { ZeedevMarkGlyph } from '../brand/ZeedevMark.jsx'
import Reveal from '../ui/Reveal.jsx'
import { brand, heroFacts } from '../../data/site.js'
import { stackSummary } from '../../data/skills.js'

/**
 * Dark opening section. Answers, in order: who she is, what she builds, what
 * stack she uses, and how to start.
 *
 * The visual is an abstract emerald grid rather than a photo, per the brief.
 */
export default function Hero() {
  return (
    <section className="section hero on-dark" id="top">
      <div className="band-bg" aria-hidden="true">
        <span className="band-bg__glow band-bg__glow--one" />
        <span className="band-bg__glow band-bg__glow--two" />
        <span className="band-bg__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__main">
          <Reveal delay={60}>
            <h1 className="hero__title">
              I am {brand.nameDisplay}, a full-stack software developer.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero__text">
              I build websites and web applications, front end and back end. My
              stack follows the project: MERN or LAMP, whichever fits your setup.
              I also build WordPress sites, and I can take a Figma design and
              turn it into a working website.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__actions">
              <Button href="#projects" size="lg" icon={ArrowRight}>
                View my work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                Start a conversation
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="hero__facts">
              {heroFacts.map((fact) => (
                <div className="hero__fact" key={fact.key}>
                  <dt>{fact.key}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="hero__aside" delay={120}>
          <div className="hero__panel">
            <div className="hero__panel-head">
              <ZeedevMarkGlyph size={30} />
              <span>Current stack</span>
            </div>

            <ul className="hero__stack">
              {stackSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}