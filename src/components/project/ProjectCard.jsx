import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Lock,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/**
 * Selected work (brief §3.7), rendered as two hard-split variants at the
 * viewport breakpoint:
 *
 *  - <ProjectPanel> (desktop): one large alternating panel per project, with a
 *    layered device composition on a violet/indigo colour block: a browser
 *    frame whose full-page screenshot auto-scrolls top-to-bottom (pausing
 *    when the panel leaves the viewport), plus a small phone frame with a
 *    static top-crop overlapping its lower corner.
 *  - <ProjectPanelMobile> (mobile): a single phone mockup that flips between
 *    the projects with a 3D page-flip (Framer Motion AnimatePresence), driven
 *    by swipe or prev/next taps with dot indicators. The phone shows a static
 *    top-crop; motion comes from the flip, not an internal scroll.
 *
 * Neither variant ever uses an iframe of the live site; the local screenshot
 * files are used throughout, and the URLs are only for the "Visit Site" links.
 */

/** Pauses the browser-frame auto-scroll whenever the panel leaves the viewport. */
function useScrollPause() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        node.classList.toggle('is-off', !entry.isIntersecting)
      },
      { threshold: 0.05 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return ref
}

/** Pastel pill class for a tag chip. */
function pillClass(index) {
  return `pill pill--n${(index + 1) % 4}`
}

export function ProjectPanel({ project, reverse = false }) {
  const { name, tags, description, url, domain, screenshot } = project
  const scrollRef = useScrollPause()

  return (
    <li
      className={`project-panel ${reverse ? 'project-panel--reverse' : ''}`.trim()}
    >
      <div className="project-panel__media">
        <div className="project-panel__stage">
          <a
            className="panel__browser"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${name}, view the live site`}
          >
            <span className="panel__browser-chrome" aria-hidden="true">
              <span className="panel__browser-dots">
                <span />
                <span />
                <span />
              </span>
              <span className="panel__browser-url">
                <Lock />
                {domain}
              </span>
            </span>

            <span className="panel__browser-scroll" ref={scrollRef}>
              <img
                src={screenshot}
                alt={`The ${name} homepage, full page from top to footer`}
                loading="lazy"
                decoding="async"
              />
            </span>
          </a>

          <div className="panel__phone" aria-hidden="true">
            <div className="panel__phone-screen">
              <img src={screenshot} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>

      <div className="project-panel__copy">
        <h3 className="project-panel__title">{name}</h3>

        {tags.length ? (
          <div className="project-panel__tags">
            {tags.map((tag, index) => (
              <span className={pillClass(index)} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <p className="project-panel__desc">{description}</p>

        <a
          className="btn btn--primary project-panel__visit"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit Site
          <ArrowUpRight aria-hidden="true" />
          <span className="u-sr-only">({name} opens in a new tab)</span>
        </a>
      </div>
    </li>
  )
}

function flipAnims(reduced) {
  if (reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }
  }
  return {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  }
}

export function ProjectPanelMobile({ projects }) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const count = projects.length
  const project = projects[index % count]
  const single = count <= 1

  const go = (nextIndex) => setIndex(((nextIndex % count) + count) % count)

  return (
    <li className="project-panel project-panel--mobile">
      <div className="mobile-phone">
        <div className="mobile-phone__bezel">
          <span className="mobile-phone__island" aria-hidden="true" />
          <div className="mobile-phone__viewport" style={{ perspective: 1100 }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="mobile-phone__screen"
                key={project.id}
                {...flipAnims(reduced)}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                drag={single ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_event, info) => {
                  if (info.offset.x < -60) go(index + 1)
                  else if (info.offset.x > 60) go(index - 1)
                }}
                style={{ transformPerspective: 1100 }}
              >
                <img
                  src={project.screenshot}
                  alt={`The ${project.name} homepage, previewed in a phone frame`}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {!single ? (
        <div
          className="mobile-phone__controls"
          role="group"
          aria-label="Choose a project preview"
        >
          <button
            type="button"
            className="icon-btn"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
          >
            <ArrowLeft aria-hidden="true" />
          </button>

          <div className="mobile-phone__dots">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`mobile-phone__dot ${i === (index % count) ? 'is-active' : ''}`}
                aria-label={`Show ${p.name} preview`}
                aria-pressed={i === (index % count)}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="icon-btn"
            aria-label="Next project"
            onClick={() => go(index + 1)}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <div>
        <h3 className="project-panel__title">{project.name}</h3>
        {project.tags && project.tags.length ? (
          <div className="project-panel__tags">
            {project.tags.map((tag, i) => (
              <span className={pillClass(i)} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className="project-panel__desc">{project.description}</p>
        <a
          className="btn btn--primary project-panel__visit"
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit Site
          <ArrowUpRight aria-hidden="true" />
          <span className="u-sr-only">({project.name} opens in a new tab)</span>
        </a>
      </div>
    </li>
  )
}