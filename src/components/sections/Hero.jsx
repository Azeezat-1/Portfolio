import { ArrowUpRight } from 'lucide-react'

import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Reveal from '../ui/Reveal.jsx'
import {
  brand,
  heroBadge,
  heroEyebrow,
  heroFeatureCards,
  heroPills,
} from '../../data/site.js'
import heroPhoto from '../../assets/photos/hero-portrait.jpg'

/**
 * Opening section: a full-width midnight-to-indigo panel with a large curved
 * bottom edge, blueprint texture, and the portrait layered on a solid violet
 * block with a thin offset outline. Two glass feature cards straddle the
 * bottom edge, half over the dark panel and half over the light section below
 * (brief §3.3).
 *
 * The supplied photo is a JPEG, not a transparent PNG cutout, so the "person
 * overlapping the panel edge" effect is approximated with the violet block.
 * TODO(assets): replace with a transparent-background PNG if one is provided.
 */
export default function Hero() {
  return (
    <section className="section hero band band--dark" id="top">
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
              {heroPills.map((pill, index) => (
                <li className={`pill pill--n${index % 4}`} key={pill}>
                  {pill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="hero__actions">
              <Button href="#projects" variant="inverse" size="lg" icon={ArrowUpRight}>
                View My Work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__art" delay={140}>
          <div className="hero__block">
            <img
              src={heroPhoto}
              alt="Azeezat Yusuf, the developer behind Zeedev."
              loading="eager"
              decoding="async"
            />
          </div>

          <span className="hero__badge">{heroBadge}</span>
        </Reveal>
      </div>

      <div className="container">
        <div className="hero__cards">
          {heroFeatureCards.map((card, index) => (
            <article className="card hero__card" key={card.title}>
              <span className={`chip chip--n${(index + 1) % 4}`} aria-hidden="true">
                <Icon name={card.icon} />
              </span>
              <span className="hero__card-copy">
                <span className="hero__card-title">{card.title}</span>
                <span className="hero__card-text">{card.text}</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}