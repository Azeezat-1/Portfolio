import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import Logo from '../brand/Logo.jsx'
import { brand, ctaNavLabel, navItems } from '../../data/site.js'

/**
 * Site header (navigation bar).
 *
 * A full-width bar, not a floating pill: the logo sits left, the links are
 * centred with a violet dot under the active one, and one violet CTA pill sits
 * right. The bar reads the section behind its bottom edge (`data-nav-theme` on
 * each section) and follows it, switching between the light and dark variants,
 * so the dark style is never drawn over a light background or vice versa. It
 * gains a frosted surface once the page is scrolled (`data-scrolled`).
 *
 * The utility bar sits above it in normal flow; the header sticks to the top
 * once that bar scrolls away. Below 960px the links move into a full-width
 * sheet with a focus trap.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? null)
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  const closeMenu = useCallback(() => {
    setOpen(false)
    toggleRef.current?.focus({ preventScroll: true })
  }, [])

  // Follow the section behind the header's bottom edge, and flag scrolling.
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 8)

      const header = headerRef.current
      if (!header) return

      const band = header.getBoundingClientRect().bottom
      let next = null
      for (const el of document.querySelectorAll('[data-nav-theme]')) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= band && rect.bottom > band) {
          next = el.getAttribute('data-nav-theme')
          break
        }
      }
      if (next) setTheme(next)
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
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
      if (event.key === 'Escape') closeMenu()
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
  }, [open, closeMenu])

  // Closing on resize avoids leaving a drawer stranded open on desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 60rem)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      ref={headerRef}
      className="nav"
      data-theme={theme}
      data-scrolled={scrolled ? 'true' : 'false'}
    >
      <div className="nav__inner">
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
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cta" href="#contact">
            {ctaNavLabel}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <button
          ref={toggleRef}
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => (open ? closeMenu() : setOpen(true))}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Kept in the DOM so aria-controls always resolves; inert when closed. */}
      <div
        id="mobile-nav"
        ref={drawerRef}
        className={`nav-drawer ${open ? 'is-open' : ''}`.trim()}
        {...(open ? {} : { inert: '' })}
      >
        <nav aria-label="Mobile">
          <ul className="nav-drawer__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-drawer__link ${
                    activeId === item.id ? 'is-active' : ''
                  }`.trim()}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-drawer__foot">
          <a className="nav__cta" href="#contact" onClick={closeMenu}>
            {ctaNavLabel}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
