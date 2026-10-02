import { ArrowUpRight } from 'lucide-react'

import { TagList } from '../ui/Tag.jsx'

/**
 * One project.
 *
 * Every project uses an actual screenshot captured from the live site.
 *
 * Alt text describes what the screenshot actually shows rather than repeating
 * the project name, which is already the heading.
 */
export default function ProjectCard({ project }) {
  const {
    id,
    name,
    kind,
    url,
    repo,
    summary,
    role,
    stack,
    categories,
    screenshot,
  } = project

  return (
    <li className="project-card" id={id}>
      <div className="project-card__media">
        <img
          src={screenshot}
          alt={`The ${name} website, captured from the live site`}
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__body">
        <p className="project-card__kind">{kind}</p>

        <h3 className="project-card__title">
          {url ? (
            <a
              className="project-card__link"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {name}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight className="project-card__link-icon" aria-hidden="true" />
            </a>
          ) : (
            name
          )}
        </h3>

        <p className="project-card__summary">{summary}</p>

        <TagList items={categories} label={`${name} categories`} />

        <dl className="project-card__meta">
          <div className="project-card__meta-row">
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div className="project-card__meta-row">
            <dt>Stack</dt>
            <dd>
              <TagList items={stack} label={`${name} technologies`} />
            </dd>
          </div>
        </dl>

        <div className="project-card__actions">
          {url ? (
            <a
              className="project-card__action"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit the site
              <span className="sr-only">
                {' '}
                for {name} (opens in a new tab)
              </span>
            </a>
          ) : null}

          {repo ? (
            <a
              className="project-card__action"
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              View the code
              <span className="sr-only">
                {' '}
                for {name} (opens in a new tab)
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </li>
  )
}