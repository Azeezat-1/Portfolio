import { ArrowUpRight } from 'lucide-react'

import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { brand, heroEyebrow, heroPills } from '../../data/site.js'
import heroPhoto from '../../assets/photos/hero-portrait.jpg'

/**
 * Opening section. Two columns: who she can help and how to start on the
 * left, a client-facing photograph on the right.
 *
 * Copy is written for clients (benefits first, plain language, no framework
 * names) per the v11 brief. The right column is Azeezat's own photo in a
 * frosted glass frame — no code, no editors, no screens full of code anywhere
 * on the page.
 *
 * No floating number badges anywhere: the floating element over the frame is
 * a short text label, which the brief explicitly allows.
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

          <Reveal delay={180}>
            <ul className="hero__pills" aria-label="What she builds">
              {heroPills.map((pill) => (
                <li className="hero__pill" key={pill}>
                  {pill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="hero__actions">
              <Button href="#projects" size="lg" icon={ArrowUpRight}>
                View My Work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__aside" delay={120}>
          <figure className="hero__frame">
            <img
              className="hero__photo"
              src={heroPhoto}
              alt="Azeezat Yusuf, the developer behind Zeedev."
              loading="eager"
              decoding="async"
            />
          </figure>

          {/* A short text label overlapping the frame edge. Not a counter. */}
          <div className="hero__badges">
            <span className="hero__label">Clear, modern business websites</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}