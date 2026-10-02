/**
 * Skills and technology.
 *
 * The brief asks for categories with a short explanation of how each one is
 * actually used, not a wall of technology logos. `number` is the ghost numeral
 * shown on the card; `items` are the plain-text technologies.
 */

export const skillGroups = [
  {
    id: 'front-end',
    title: 'Front-end development',
    summary:
      'Interfaces built from components, so they stay consistent and are straightforward to change later. Responsive and accessible from the start rather than fixed at the end.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Responsive design',
      'Accessibility',
      'Component-based interfaces',
    ],
  },
  {
    id: 'back-end',
    title: 'Back-end development',
    summary:
      'The server side: routes, authentication, business rules and the database layer. I build APIs that are easy to integrate and easy to reason about.',
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'PHP',
      'Authentication',
      'Server-side logic',
      'Database integration',
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-stack development',
    summary:
      'Comfortable across MERN (MongoDB, Express, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP). The stack follows the client\'s existing setup or preference rather than a fixed choice.',
    items: ['MongoDB', 'Express', 'React', 'Node.js', 'Linux', 'Apache', 'MySQL', 'PHP'],
  },
  {
    id: 'cms',
    title: 'CMS and website development',
    summary:
      'WordPress sites the client can actually run: themes customised to match the design, plugins integrated, and content managed without touching code.',
    items: [
      'WordPress',
      'Theme customization',
      'Plugin integration',
      'Content-managed websites',
    ],
  },
  {
    id: 'design-to-code',
    title: 'Design-to-code',
    summary:
      'Turning a Figma design into a working, responsive site. I match the design precisely instead of approximating it, and keep it correct at every breakpoint.',
    items: ['Figma', 'Pixel-accurate builds', 'Responsive implementation'],
  },
  {
    id: 'workflow',
    title: 'Development workflow',
    summary:
      'The unglamorous part that decides whether a launch goes well: version control, debugging, deployment and checking performance once real content is in place.',
    items: [
      'Git',
      'GitHub',
      'Debugging',
      'API integration',
      'Deployment',
      'Performance optimization',
      'Responsive testing',
    ],
  },
]

/** One-line version of the stack, for the hero. */
export const stackSummary = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PHP',
  'WordPress',
  'Figma',
  'Git',
]