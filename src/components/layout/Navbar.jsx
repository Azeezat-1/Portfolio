import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import Logo from '../brand/Logo.jsx'
import Button from '../ui/Button.jsx'
import { brand, ctaNavLabel, navItems } from '../../data/site.js'

/**
 * Floating frosted pill navigation.
 *
 * Over the dark hero the pill is dark glass; once the hero has scrolled out it
 * switches to light glass (`nav--light`), so it always sits comfortably on
 * whichever surface is beneath it.
 *
 * On narrow screens the links move into a drawer. The drawer is a labelled
 * dialog: it moves focus inside on open, returns focus to the toggle on close,
 * closes on Escape, and locks page scroll while open.
 *
 * An IntersectionObserver marks which section is currently in view, so the
 * active link is announced with `aria-current`.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [light, setLight] = useState(false)
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  // Switch the pill to light glass once the dark hero is out of view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setLight(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Highlight the section nearest the top of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Drawer behaviour: escape to close, scroll lock, and focus management.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    const raf = requestAnimationFrame(() => {
      drawerRef.current?.querySelector('a, button')?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(raf)
    }
  }, [open])

  // Closing on resize avoids leaving a drawer stranded open on desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 68rem)')
    const onChange = (event) => {
      if (!event.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const classes = ['nav', light ? 'nav--light' : ''].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <div className="container">
        <div className="nav__pill">
          <a
            className="nav__brand"
            href="#top"
            aria-label={`${brand.name}, back to top`}
          >
            <Logo />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav__link ${activeId === item.id ? 'is-active' : ''}`.trim()}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                <span className="nav__link-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <Button href="#contact" icon={ArrowUpRight}>
              {ctaNavLabel}
            </Button>
          </div>

          <button
            ref={toggleRef}
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="u-sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Kept in the DOM so aria-controls always resolves. */}
      <div
        id="nav-drawer"
        ref={drawerRef}
        className={`nav-drawer ${open ? 'is-open' : ''}`.trim()}
        aria-label="Site menu"
        {...(open ? {} : { inert: '' })}
      >
        <nav aria-label="Mobile">
          <ul className="nav-drawer__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="nav-drawer__link"
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-drawer__foot">
          <Button
            href="#contact"
            size="lg"
            icon={ArrowUpRight}
            onClick={() => setOpen(false)}
          >
            {ctaNavLabel}
          </Button>
        </div>
      </div>
    </header>
  )
}