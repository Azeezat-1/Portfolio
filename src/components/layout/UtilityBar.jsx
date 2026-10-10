import Icon from '../ui/Icon.jsx'
import { contactDetails, socialLinks } from '../../data/site.js'

/**
 * The thin midnight utility bar above the nav (brief §3.1): phone, email and
 * small social icons. Values come from the contact data file. Hidden on
 * mobile.
 */
export default function UtilityBar() {
  const socials = socialLinks.filter((link) => link.id !== 'email')

  return (
    <div className="util">
      <div className="container util__inner">
        <div className="util__group">
          <a className="util__link" href={contactDetails.emailHref}>
            <Icon name="mail" aria-hidden="true" />
            <span>{contactDetails.email}</span>
          </a>
          <a className="util__link" href={`tel:${contactDetails.phone}`}>
            <Icon name="phone" aria-hidden="true" />
            <span>{contactDetails.phoneDisplay}</span>
          </a>
        </div>

        <div className="util__socials">
          {socials.map((link) => (
            <a
              className="util__link"
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name={link.icon} aria-hidden="true" />
              <span className="u-sr-only">
                {link.label} (opens in a new tab)
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}