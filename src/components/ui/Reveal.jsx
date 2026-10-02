import { useEffect, useRef, useState } from 'react'

/**
 * Reveals its children once when they scroll into view.
 *
 * A single observer is shared across every instance, and the transform is
 * removed permanently afterwards, so a revealed element costs nothing on later
 * scrolls. `prefers-reduced-motion` skips the effect entirely: the markup
 * already renders in its final state via CSS.
 */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null
const subscribers = new WeakMap()

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const revealed = subscribers.get(entry.target)
        if (revealed) revealed()
        observer.unobserve(entry.target)
        subscribers.delete(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  )

  return observer
}

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [state, setState] = useState(() => (prefersReducedMotion() ? 'in' : ''))

  useEffect(() => {
    const node = ref.current
    if (!node || state === 'in') return
    if (prefersReducedMotion()) {
      setState('in')
      return
    }

    const io = getObserver()
    if (!io) {
      setState('in')
      return
    }

    subscribers.set(node, () => setState('in'))
    io.observe(node)

    return () => {
      io.unobserve(node)
      subscribers.delete(node)
    }
  }, [state])

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={className}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}