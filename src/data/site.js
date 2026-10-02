/**
 * Identity, navigation and contact details.
 *
 * Everything here is safe to edit. The contact values are PLACEHOLDERS and
 * must be replaced before the site goes live.
 */

export const brand = {
  /** Lowercase wordmark, as specified in the brief. */
  name: 'zeedev',
  /** Compact mark. */
  compact: 'ZDEV',
  /** Full name, used for the document title and legal line. */
  nameDisplay: 'Azeezat Yusuf',
  role: 'Full-stack software developer',
  shortDescription:
    'I build websites and web applications, front end and back end, using React, WordPress and the MERN or LAMP stack depending on what the project needs.',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const ctaNavLabel = "Let's work together"

/**
 * Availability shown in the hero and the closing call to action.
 *
 * EDIT: confirm this is still accurate before launch.
 */
export const availability = {
  status: 'Open to new projects',
  detail: 'Available for new work',
}

/**
 * Direct contact details.
 *
 * `email` and `phone` are real. Keep them accurate.
 *
 * `phone` must be digits and the country code only, with no spaces or
 * punctuation. It generates the tap-to-call link and the WhatsApp link, so
 * changing it updates the displayed number and both links together.
 */
export const contactDetails = {
  email: 'info@zeedev.com',
  phone: '+2348131663860',
  /** The same number, spaced to read. Cosmetic only. */
  phoneDisplay: '+234 813 166 3860',
  location: 'Nigeria',
}

/** Quick facts used in the hero, all factual and verifiable. */
export const heroFacts = [
  { key: 'Stack', value: 'MERN or LAMP, whichever fits' },
  { key: 'Work', value: 'Websites and web applications' },
  { key: 'Clients', value: 'Individuals, businesses, organizations' },
]

/**
 * Social and contact links.
 *
 * Every href here is live. Keep them accurate.
 */
export const socialLinks = [
  {
    id: 'email',
    label: 'Email',
    handle: 'info@zeedev.com',
    href: 'mailto:info@zeedev.com',
    icon: 'mail',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@Azeezat-1',
    href: 'https://github.com/Azeezat-1/',
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/azeezat-yusuf001',
    href: 'https://linkedin.com/in/azeezat-yusuf001/',
    icon: 'linkedin',
    external: true,
  },
]

export const socialLinksById = Object.fromEntries(
  socialLinks.map((link) => [link.id, link]),
)