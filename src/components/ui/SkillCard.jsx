import Icon from './Icon.jsx'

/**
 * One skill: a pastel icon chip, a title and a one-line description.
 *
 * The brief asks for exactly those three things and explicitly rules out a
 * technology logo wall, so there is no stack list and no link on the card:
 * each one explains what she does rather than naming tools.
 *
 * `chip` picks the colour pair, rotated by the parent so adjacent cards never
 * share one.
 */
export default function SkillCard({ title, description, icon, chip = 0 }) {
  return (
    <li className="card skill-card">
      <span className={`chip chip--n${chip}`}>
        <Icon name={icon} aria-hidden="true" />
      </span>

      <h3 className="skill-card__title">{title}</h3>
      <p className="skill-card__text">{description}</p>
    </li>
  )
}
