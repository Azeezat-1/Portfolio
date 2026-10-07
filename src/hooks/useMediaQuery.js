import { useEffect, useState } from 'react'

/**
 * Tracks whether a CSS media query currently matches.
 *
 * Used for the hard component-switch between the desktop and mobile project
 * card variants, so the DOM really renders one frame or the other rather than
 * one frame stretched to both.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}