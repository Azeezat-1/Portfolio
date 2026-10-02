import { forwardRef } from 'react'

/**
 * One button component for every call to action.
 *
 * Renders an `<a>` when `href` is given and a `<button>` otherwise, so the
 * semantics always match what the thing actually does. External links get
 * `target` and `rel` automatically.
 */
const Button = forwardRef(function Button(
  {
    href,
    variant = 'primary',
    size,
    icon: Icon,
    iconPosition = 'right',
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon aria-hidden="true" /> : null}
    </>
  )

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        ref={ref}
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type="button" className={classes} {...rest}>
      {content}
    </button>
  )
})

export default Button