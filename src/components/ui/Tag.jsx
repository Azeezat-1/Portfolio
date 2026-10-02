/** Small pill used for technologies and project categories. */
export default function Tag({ children, className = '' }) {
  return <span className={`tag ${className}`.trim()}>{children}</span>
}

/** Wraps a list of tags with correct list semantics. */
export function TagList({ items, label }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}