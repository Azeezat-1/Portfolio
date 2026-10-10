import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiWordpress,
} from 'react-icons/si'

import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { technologies } from '../../data/technologies.js'

/** The tool's brand icon component, looked up by the data's `icon` name. */
const ICONS = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiWordpress,
  SiFigma,
  SiGit,
  SiGithub,
}

/**
 * Technologies I Use (brief §3.4).
 *
 * An infinitely sliding marquee of glass tiles, each carrying the tool's real
 * brand logo (bundled locally from `react-icons/si`, never hotlinked) in its
 * brand colour. The list is duplicated once and translated by -50% on a slow,
 * linear loop; the duplicate set is hidden from assistive tech. Edges are
 * faded with a mask. The animation pauses on hover and on keyboard focus, and
 * under `prefers-reduced-motion` the tiles render as a wrapped static grid
 * (handled in CSS).
 */
export default function TechMarquee() {
  const tiles = technologies.map((tech) => {
    const Glyph = ICONS[tech.icon]
    return (
      <li className="marquee__tile" key={tech.name}>
        {Glyph ? (
          <Glyph className="marquee__icon" color={tech.color} aria-hidden="true" />
        ) : null}
        <span className="marquee__name">{tech.name}</span>
      </li>
    )
  })

  const tilesClone = technologies.map((tech) => {
    const Glyph = ICONS[tech.icon]
    return (
      <li className="marquee__tile" key={`${tech.name}-clone`} aria-hidden="true">
        {Glyph ? (
          <Glyph className="marquee__icon" color={tech.color} aria-hidden="true" />
        ) : null}
        <span className="marquee__name">{tech.name}</span>
      </li>
    )
  })

  return (
    <section className="section band marquee" aria-labelledby="tech-title">
      <div className="container">
        <SectionHeading
          id="tech-title"
          eyebrow="Tools &amp; skills"
          title={
            <>
              Technologies I <span className="hi">Use</span>
            </>
          }
        />

        <Reveal>
          <div className="marquee__track">
            <ul className="marquee__list">
              {tiles}
              {tilesClone}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}