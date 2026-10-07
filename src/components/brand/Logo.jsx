import { ZeedevMarkGlyph } from './ZeedevMark.jsx'
import { brand } from '../../data/site.js'

/**
 * The wordmark.
 *
 * Props:
 *   showText      include the lowercase wordmark
 *   showSubmark   include the compact ZDEV mark after a divider
 *   mono          take the surrounding colour instead of the emerald accent
 *
 * The wordmark is real text, not an image, so it stays sharp and translatable.
 * Casing comes from `brand`, so it is never typed out twice.
 */
export default function Logo({
  showText = true,
  showSubmark = false,
  mono = false,
  ...rest
}) {
  return (
    <span className={`logo ${mono ? 'logo--mono' : ''}`.trim()} {...rest}>
      <span className="logo__mark">
        <ZeedevMarkGlyph size={26} />
      </span>

      {showText ? <span className="logo__text">{brand.name}</span> : null}

      {showSubmark ? (
        <span className="logo__submark">{brand.compact}</span>
      ) : null}
    </span>
  )
}

/** Symbol only, for tight placements such as a collapsed menu. */
export function LogoMark(props) {
  return <Logo showText={false} {...props} />
}

/** The compact tile, matching the favicon. */
export function LogoBadge(props) {
  return <ZeedevMarkGlyph size={40} {...props} />
}