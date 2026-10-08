import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import ToolRow from './ToolIcon.jsx'

/**
 * Selected work, rendered as two hard-split variants at the viewport
 * breakpoint:
 *
 *  - <ProjectCardDesktop> — one card per project, each showing a tall
 *    full-page screenshot of the live homepage inside a browser-chrome frame
 *    (traffic-light dots and a URL bar naming the real domain). The page
 *    auto-scrolls top-to-bottom inside the frame on a slow loop, pausing when
 *    the card leaves the viewport and freezing entirely under reduced motion.
 *  - <ProjectCardMobile> — a single phone-frame preview that flips between the
 *    projects with a 3D page-flip (Framer Motion AnimatePresence), driven by
 *    swipe or prev/next tap controls with dot indicators. The phone shows a
 *    static top-crop of the same screenshot; motion comes from the flip, not
 *    from an internal scroll (v11).
 */

/** Which pastel chip pair a card/tag sits in, cycling across the four pairs. */
export function chipClassFor(index) {
  return `project-card__tag--n${index % 4}`
}

/** A whole (potentially tall) browser screenshot that scrolls itself. */
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

export function ProjectCardDesktop({ project, index }) {
  const { name, url, screenshot, domain, tag, oneLiner, toolkit } = project
  const scrollRef = useScrollPause()

  return (
    <li className="project-card project-card--desktop">
      <a
        className="project-card__browser"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${name}, view the live site`}
      >
        <span className="project-card__browser-chrome" aria-hidden="true">
          <span className="project-card__browser-dots">
            <span />
            <span />
            <span />
          </span>
          <span className="project-card__browser-url">
            <Lock />
            {domain}
          </span>
          <span className="project-card__browser-dots project-card__browser-dots--none" />
        </span>

        <span className="project-card__browser-scroll" ref={scrollRef}>
          <img
            src={screenshot}
            alt={`The ${name} homepage, full page from top to footer`}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </span>

        {/* Corner affordance; the whole frame is the link. */}
        <span className="icon-btn project-card__corner" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </a>

      <span className="project-card__row">
        <h3 className="project-card__title">{name}</h3>
        {tag ? (
          <span className={`project-card__tag ${chipClassFor(index)}`}>
            {tag}
          </span>
        ) : null}
      </span>

      <p className="project-card__kind">{oneLiner}</p>

      <ToolRow ids={toolkit} />
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

export function ProjectCardMobile({ projects }) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const count = projects.length
  const project = projects[index % count]
  const single = count <= 1

  const go = (nextIndex) => setIndex(((nextIndex % count) + count) % count)

  return (
    <li className="project-card project-card--mobile">
      <div className="mobile-phone">
        <div className="mobile-phone__bezel">
          <span className="mobile-phone__island" aria-hidden="true" />
          <div
            className="mobile-phone__viewport"
            style={{ perspective: 1100 }}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
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
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {!single ? (
        <div className="mobile-phone__controls" role="group" aria-label="Choose a project preview">
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

      <span className="project-card__row">
        <h3 className="project-card__title">{project.name}</h3>
        {project.tag ? (
          <span className={`project-card__tag ${chipClassFor(index)}`}>
            {project.tag}
          </span>
        ) : null}
      </span>

      <p className="project-card__kind">{project.oneLiner}</p>

      <ToolRow ids={project.toolkit} />

      <a
        className="project-card__visit"
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        Visit the site
        <ArrowUpRight aria-hidden="true" />
        <span className="u-sr-only">(opens in a new tab)</span>
      </a>
    </li>
  )
}