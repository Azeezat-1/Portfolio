import { TagList } from './Tag.jsx'

/**
 * One skill category: the title, how Azeezat actually uses it, and the
 * technologies as text tags.
 */
export default function SkillCard({ title, summary, items }) {
  return (
    <li className="card skill-card">
      <div className="skill-card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text skill-card__text">{summary}</p>
        <TagList items={items} label={`${title} technologies`} />
      </div>
    </li>
  )
}