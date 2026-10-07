import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import {
  ProjectCardDesktop,
  ProjectCardMobile,
} from '../project/ProjectCard.jsx'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import { projectCategories, projects } from '../../data/projects.js'
import { socialLinksById } from '../../data/site.js'

/**
 * Selected work.
 *
 * The two real projects render through a hard component switch at the
 * viewport breakpoint: browser-frame cards with a self-scrolling full-page
 * capture on desktop, a single phone frame that page-flips between the
 * projects on mobile. Filtering is client state over the data array.
 */

/** The four pastel pairs, cycled across filter pills and project tags. */
const PILLS = [
  ['--chip-amber-bg', '--chip-amber-ink'],
  ['--chip-lav-bg', '--chip-lav-ink'],
  ['--chip-indigo-bg', '--chip-indigo-ink'],
  ['--chip-teal-bg', '--chip-teal-ink'],
]

function pillStyle(index) {
  const [background, ink] = PILLS[index % PILLS.length]
  return { '--pill-bg': `var(${background})`, '--pill-ink': `var(${ink})` }
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const isDesktop = useMediaQuery('(min-width: 48rem)')

  const categories = projectCategories.filter((c) => c !== 'All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(active))

  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured projects"
          title="Selected Work"
          split
        />

        <Reveal>
          <div className="filters">
            <div
              className="filters__bar"
              role="group"
              aria-label="Filter projects by category"
            >
              <button
                type="button"
                className={`filters__button ${active === 'All' ? 'is-active' : ''}`.trim()}
                aria-pressed={active === 'All'}
                onClick={() => setActive('All')}
              >
                All
              </button>
              {categories.map((category, index) => {
                const isActive = active === category
                return (
                  <button
                    key={category}
                    type="button"
                    className={`filters__button ${isActive ? 'is-active' : ''}`.trim()}
                    style={isActive ? pillStyle(index) : undefined}
                    aria-pressed={isActive}
                    onClick={() => setActive(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        <ul className="projects__grid">
          {visible.length > 0 ? (
            isDesktop ? (
              visible.map((project, index) => (
                <ProjectCardDesktop
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <ProjectCardMobile
                key={visible.map((project) => project.id).join('-')}
                projects={visible}
              />
            )
          ) : null}
        </ul>

        {/* The brief's "text link with trailing arrow" button type, linking to
            real work rather than to a page that does not exist. */}
        <Reveal>
          <a
            className="link-arrow projects__more"
            href={socialLinksById.github.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            See more on GitHub
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}