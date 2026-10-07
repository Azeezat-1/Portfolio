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

  /**
   * Sections can drop their large title and keep only the eyebrow. The eyebrow
   * then becomes the heading itself rather than sitting beside an empty one,
   * so the section keeps its outline level and its `aria-labelledby` target.
   */
  const heading = title ?? eyebrow

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
        {eyebrow && title ? <p className="eyebrow">{eyebrow}</p> : null}
        {heading ? (
          <Heading
            className={title ? 'section__title' : 'section__title eyebrow'}
            id={id}
          >
            {heading}
          </Heading>
        ) : null}
      </div>

      {lede ? (
        <p className={split ? 'section__lede' : 'lead'}>{lede}</p>
      ) : null}

      {children}
    </div>
  )
}