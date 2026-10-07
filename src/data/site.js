export const brand = {
  /** Lowercase wordmark, as specified in the brief. */
  name: 'zeedev',
  /** Compact mark. */
  compact: 'ZDEV',
  /** Full name, used for the document title, hero H1 and legal line. */
  nameDisplay: 'Azeezat Yusuf',
  /** Violet accent subheading under the name in the hero. */
  role: 'Software Developer',
  shortDescription:
    'I build responsive websites and web applications, front end and back end, using HTML, CSS, JavaScript and React. I work in either the MERN or the LAMP stack depending on the project, build and customise WordPress sites, and can turn a Figma design into a fully built, live website.',
}

export const heroEyebrow = "Hello, I'm"

/**
 * Nav order per the brief: Home, About, Skills, Projects, Contact.
 *
 * Process is a section on the page but deliberately not a nav item. Each `id`
 * must match a section's DOM id in App.jsx.
 */
export const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/** Label for the dark pill button in the nav. */
export const ctaNavLabel = 'Start a Conversation'

/**
 * Direct contact details.
 *
 * These are real. Keep them accurate.
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
  /**
   * PLACEHOLDER: the brief asks for a location in the contact list. Replace
   * this with the city and country you actually work from.
   */
  location: 'Nigeria',
}

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
