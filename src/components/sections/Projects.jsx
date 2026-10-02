import { useState } from 'react'

import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../project/ProjectCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import { projectCategories, projects } from '../../data/projects.js'

/**
 * Filterable portfolio grid, as on the reference sites.
 *
 * Filtering is client state over the data array. The filter bar is a toolbar
 * of toggle buttons, so the pressed state is announced rather than inferred.
 * Only shipped work is listed, so every card in the grid is a real project.
 *
 * A screen reader is told how many projects matched, through a polite live
 * region, since the grid updates without a page load.
 */
export default function Projects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(active))

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured projects"
          title="Work that is live."
          split
        />

        <Reveal>
          <div className="filters">
            <div
              className="filters__bar"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => {
                const isActive = active === category
                return (
                  <button
                    key={category}
                    type="button"
                    className={`filters__button ${isActive ? 'is-active' : ''}`.trim()}
                    aria-pressed={isActive}
                    onClick={() => setActive(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            <p className="filters__count" role="status">
              Showing {visible.length} of {projects.length} projects
            </p>
          </div>
        </Reveal>

        <ul className="projects__grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </ul>
      </div>
    </section>
  )
}