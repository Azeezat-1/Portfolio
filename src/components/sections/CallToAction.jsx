import { ArrowRight, Mail } from 'lucide-react'

import Button from '../ui/Button.jsx'
import { ZeedevMarkGlyph } from '../brand/ZeedevMark.jsx'
import Reveal from '../ui/Reveal.jsx'
import { availability, contactDetails, socialLinksById } from '../../data/site.js'

const emailLink = socialLinksById.email

/**
 * Dark closing invitation. Only facts the site can support: no client counts,
 * percentages or timelines.
 */
const facts = [
  { key: 'Building', value: 'Websites and web applications' },
  { key: 'Stack', value: 'React, WordPress, MERN or LAMP' },
  { key: 'Working with', value: 'Individuals, businesses, organizations' },
  { key: 'Status', value: availability.status },
]

export default function CallToAction() {
  return (
    <section
      className="section cta on-dark same-surface"
      aria-labelledby="cta-title"
    >
      <div className="band-bg" aria-hidden="true">
        <span className="band-bg__glow band-bg__glow--one" />
        <span className="band-bg__grid" />
      </div>

      <div className="container">
        <Reveal>
          <p className="eyebrow">Start here</p>

          <h2 className="cta__title" id="cta-title">
            Have a project that needs clarity, structure, and thoughtful
            development?
          </h2>

          <p className="cta__text">
            Tell me what you are building, what is not working, or what you
            want to improve. I can help shape it into a practical, well-built
            website or application, and I will tell you plainly if I am not the
            right person for it.
          </p>

          <div className="cta__actions">
            <Button href="#contact" size="lg" icon={ArrowRight}>
              Start a conversation
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              View my projects
            </Button>
            {emailLink ? (
              <Button
                href={emailLink.href}
                variant="secondary"
                size="lg"
                icon={Mail}
                iconPosition="left"
              >
                Send an email
              </Button>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="cta__panel">
            {facts.map((fact) => (
              <div className="cta__panel-row" key={fact.key}>
                <dt className="cta__panel-key">{fact.key}</dt>
                <dd className="cta__panel-val">{fact.value}</dd>
              </div>
            ))}

            <span className="cta__mark" aria-hidden="true">
              <ZeedevMarkGlyph size={64} />
            </span>
          </dl>
        </Reveal>

        <Reveal>
          <p className="cta__direct">
            Or email me directly at{' '}
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}