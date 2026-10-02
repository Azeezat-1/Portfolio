/**
 * Consistent section heading: an eyebrow, a title, an optional lede.
 *
 * The heading level is passed in so each section keeps a correct outline.
 * `split` places the lede beside the title instead of under it, which suits
 * sections where the lede is a caveat or a note rather than an introduction.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  level = 2,
  split = false,
  className = '',
  children,
}) {
  const Heading = `h${level}`

  return (
    <div
      className={[
        'section__head',
        split ? 'section__head--split' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <Heading className="section__title" id={id}>
          {title}
        </Heading>
      </div>

      {lede ? (
        <p className={split ? 'section__lede' : 'lead'}>{lede}</p>
      ) : null}

      {children}
    </div>
  )
}