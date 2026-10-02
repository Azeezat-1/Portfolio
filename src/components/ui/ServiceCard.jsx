import Icon from './Icon.jsx'

/**
 * One service: icon, title, a specific explanation of what it involves, and
 * what the client receives.
 *
 * The deliverables list is labelled with `aria-labelledby` pointing at its own
 * heading, so a screen reader announces "You receive" as the group name
 * instead of leaving a bare list of fragments.
 */
export default function ServiceCard({ title, summary, deliverables, icon }) {
  const deliverablesId = `deliverables-${title.replace(/\W+/g, '-').toLowerCase()}`

  return (
    <li className="service-card">
      <span className="service-card__icon" aria-hidden="true">
        <Icon name={icon} size={18} />
      </span>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__summary">{summary}</p>

      <ul className="service-card__deliverables" aria-labelledby={deliverablesId}>
        <li className="service-card__label" id={deliverablesId}>
          You receive
        </li>
        {deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  )
}