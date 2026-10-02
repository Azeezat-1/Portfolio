/**
 * PLACEHOLDER MARK. This is not the finished logo.
 *
 * The brief is explicit on this point: a coding agent generating logo shapes
 * from a text description produces something generic, so the mark should be
 * commissioned or generated as an asset first, reviewed, exported, and only
 * then integrated here.
 *
 * What follows is a deliberately plain geometric construction from the letters
 * Z and D, built from straight lines and a single arc, with no curves beyond
 * the bowl of the D. It exists so the layout, the variants and the favicon all
 * work today. Replace `MARK_PATH` with the designed artwork, or replace this
 * file with your own component that accepts `size` and `color`.
 *
 * To swap it out:
 *   1. Replace the path data below, or delete this file and write your own.
 *   2. Copy the same artwork into `public/favicon.svg` with a heavier stroke
 *      so it survives at 16px.
 *   3. Check every variant listed in the README.
 */

/** One path, drawn on a 48x48 grid, used at every size. */
const MARK_PATH =
  'M6 6h26l-2 5H11l13 13-2 3-16-16zM26 20h8a9 9 0 0 1 0 18h-8zm5 5v8h3a4 4 0 0 0 0-8z'

/**
 * The symbol only. `currentColor` by default so each variant can set its own
 * colour through CSS.
 */
export function ZeedevMarkGlyph({ size = 32, color = 'currentColor', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill={color}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={MARK_PATH} />
    </svg>
  )
}

/** The compact tile version, for the favicon and small placements. */
export function ZeedevMarkTile({ size = 40, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <rect width="48" height="48" rx="8" fill="currentColor" />
      <g transform="translate(4 4) scale(0.833)">
        <path d={MARK_PATH} fill="#fff" />
      </g>
    </svg>
  )
}

export default ZeedevMarkGlyph