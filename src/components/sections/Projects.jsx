import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import {
  ProjectPanel,
  ProjectPanelMobile,
} from '../project/ProjectCard.jsx'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import { projects } from '../../data/projects.js'

/**
 * Selected work (brief §3.7).
 *
 * Two featured projects as large alternating panels on desktop (layered device
 * composition, browser frame plus phone), and a single phone mockup with the
 * page-flip on mobile. Images are the local screenshots only; never iframes.
 */
export default function Projects() {
  const isDesktop = useMediaQuery('(min-width: 60rem)')

  return (
    <section
      className="section band projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title={
            <>
              Websites I&apos;ve <span className="hi">Built</span>
            </>
          }
        />

        <Reveal>
          {isDesktop ? (
            <ul className="project-panels">
              {projects.map((project, index) => (
                <ProjectPanel
                  key={project.id}
                  project={project}
                  reverse={index % 2 === 1}
                />
              ))}
            </ul>
          ) : (
            <ul className="project-panels">
              <ProjectPanelMobile projects={projects} />
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}