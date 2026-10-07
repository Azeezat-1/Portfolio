import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import Logo from '../brand/Logo.jsx'
import Button from '../ui/Button.jsx'
import { brand, ctaNavLabel, navItems } from '../../data/site.js'

/**
 * Sticky navigation.
 *
 * On narrow screens the links move into a drawer. The drawer is a labelled
 * dialog: it traps nothing but does move focus inside on open, returns focus
 * to the toggle on close, closes on Escape, and locks page scroll while open.
 *
 * An `IntersectionObserver` marks which section is currently in view, so the
 * active link can be announced with `aria-current`.
 *
 * The bar itself is a frosted glass surface with a centred pill group of links,
 * per the brief. The pill is a single `aria-current` target rather than a set of
 * tabs, so each link stays an ordinary navigation link.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  // Mark the header once the page has moved, so it can gain a border.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

    // Wait a frame so the drawer is focusable before focus moves into it.
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

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`.trim()}>
      <div className="container nav__inner">
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