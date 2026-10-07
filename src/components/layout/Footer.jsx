import { ArrowUpRight } from 'lucide-react'

import Logo from '../brand/Logo.jsx'
import Icon from '../ui/Icon.jsx'
import { brand, contactDetails, navItems, socialLinks } from '../../data/site.js'

/**
 * Footer: brand on one side, nav menu, contact details, and a copyright line.
 *
 * The soft violet glow from the Contact section keeps bleeding down behind the
 * footer instead of cutting off, so the bottom of the page keeps its depth.
 * Deliberately nothing beyond that, per the brief.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  const links = socialLinks.filter((link) => link.id !== 'email')

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true">
        <span className="orb orb--local footer__orb" />
      </div>

      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" aria-label={`${brand.name}, back to top`}>
              <Logo showSubmark />
            </a>
            <p className="footer__text">{brand.shortDescription}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__col-title">Menu</h2>
            <ul className="footer__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__col-title">Contact</h2>

            <ul className="footer__list">
              <li>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </li>
              <li>
                <a href={`tel:${contactDetails.phone}`}>
                  {contactDetails.phoneDisplay}
                </a>
              </li>
            </ul>

            <ul className="footer__social">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    className="footer__social-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name={link.icon} size={18} aria-hidden="true" />
                    <span className="sr-only">
                      {link.label} (opens in a new tab)
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="footer__location">Based in {contactDetails.location}</p>
          </div>
        </div>

        <div className="footer__bar">
          <p className="footer__copy">
            &copy; {year} {brand.nameDisplay}.
          </p>

          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowUpRight className="footer__link-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
