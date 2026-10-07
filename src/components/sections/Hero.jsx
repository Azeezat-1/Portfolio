import { ArrowUpRight } from 'lucide-react'

import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import CodePreview from './CodePreview.jsx'
import { brand, heroEyebrow } from '../../data/site.js'

/**
 * Opening section. Two columns: who she is and how to start on the left, an
 * abstract interface preview on the right.
 *
 * The right column is a structured code preview inside a large rounded glass
 * frame rather than a photo of a person, per the brief.
 *
 * No floating number badges anywhere on this page: the brief rules out counters
 * and "X+" stats entirely. The single floating element is a short text label,
 * which the brief explicitly allows as the alternative.
 */
export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="container hero__inner">
        <div className="hero__main">
          <Reveal delay={40}>
            <p className="eyebrow">{heroEyebrow}</p>
            <h1 className="hero__title">{brand.nameDisplay}</h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="hero__role">{brand.role}</p>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero__text">{brand.shortDescription}</p>
          </Reveal>

          <Reveal delay={190}>
            <div className="hero__actions">
              <Button href="#projects" size="lg" icon={ArrowUpRight}>
                View My Work
              </Button>
              {/* No CV has been supplied yet, so this opens the contact form
                  instead of linking a file that does not exist. Swap in
                  `href="/cv.pdf"` once there is one. */}
              <Button href="#contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__aside" delay={120}>
          <div className="hero__frame">
            <div className="hero__frame-bar" aria-hidden="true">
              <span className="hero__frame-dot" />
              <span className="hero__frame-dot" />
              <span className="hero__frame-dot" />
            </div>

            {/* Decorative. The same information is stated in prose below the
                preview, so hiding it from assistive tech loses nothing. */}
            <CodePreview />
          </div>

          {/* A short text label overlapping the frame edge. Not a counter. */}
          <div className="hero__badges">
            <span className="hero__label">HTML · CSS · JavaScript · React</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
