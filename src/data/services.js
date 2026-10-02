/**
 * Services.
 *
 * Each service has a title, a specific explanation of what it involves, what
 * the client receives, and an icon name from Lucide (see `src/components/ui/
 * Icon.jsx` for the available names). The wording avoids empty marketing
 * language: every description says what actually happens.
 */

export const services = [
  {
    id: 'business-websites',
    title: 'Custom portfolio and business websites',
    icon: 'layout',
    summary:
      'A site built for one business or one person, with the pages and structure that fit the actual content instead of a template with the wording swapped out.',
    deliverables: [
      'Custom design and layout',
      'Mobile, tablet and desktop versions',
      'Contact and enquiry handling',
    ],
  },
  {
    id: 'react-front-end',
    title: 'React front-end development',
    icon: 'component',
    summary:
      'React interfaces built from reusable components, so the site stays quick and each piece can be changed without rewriting the rest.',
    deliverables: ['Component-based build', 'Responsive and accessible markup', 'Reusable patterns'],
  },
  {
    id: 'full-stack-apps',
    title: 'Full-stack web applications',
    icon: 'layers',
    summary:
      'Applications with a real back end: authentication, data storage and the server-side logic that makes them more than a front page.',
    deliverables: ['REST API', 'Database and models', 'Authentication'],
  },
  {
    id: 'mern-or-lamp',
    title: 'MERN or LAMP development',
    icon: 'server',
    summary:
      'Built in MERN (MongoDB, Express, React, Node) or LAMP (Linux, Apache, MySQL, PHP), whichever matches your hosting, team or existing setup.',
    deliverables: ['Stack matched to your setup', 'Deployment instructions', 'Handover notes'],
  },
  {
    id: 'wordpress',
    title: 'WordPress websites',
    icon: 'file-text',
    summary:
      'WordPress sites customised to match your design, with the content structured so you can update it without me.',
    deliverables: ['Theme customised to your design', 'Plugin setup', 'Editing guidance'],
  },
  {
    id: 'figma-to-code',
    title: 'Figma-to-code builds',
    icon: 'pen-tool',
    summary:
      'A Figma file turned into a working, responsive site, matched precisely rather than approximated, and correct at every screen size.',
    deliverables: ['Build matching the design', 'Responsive behaviour', 'Ready to host'],
  },
  {
    id: 'redesigns',
    title: 'Website redesigns',
    icon: 'refresh',
    summary:
      'Rebuilding an existing site that has outgrown its design or its structure, keeping the content and improving the result.',
    deliverables: ['Structure and layout rebuilt', 'Content carried over', 'Improved performance'],
  },
  {
    id: 'api-integration',
    title: 'API integration',
    icon: 'plug',
    summary:
      'Connecting your site to third-party services and existing back ends, including authentication flows and handling of failed requests.',
    deliverables: ['Third-party API connections', 'Error handling', 'Documentation'],
  },
  {
    id: 'back-end',
    title: 'Back-end development',
    icon: 'database',
    summary:
      'Server-side work on its own: endpoints, data models, authentication and the logic behind what the front end displays.',
    deliverables: ['Documented endpoints', 'Data models', 'Deployment setup'],
  },
  {
    id: 'maintenance',
    title: 'Website maintenance',
    icon: 'wrench',
    summary:
      'Ongoing updates, dependency and security patches, and fixes when something breaks, so the site keeps working after launch.',
    deliverables: ['Security updates', 'Content changes', 'Monitoring and fixes'],
  },
  {
    id: 'performance',
    title: 'Performance and usability improvements',
    icon: 'gauge',
    summary:
      'Measuring what is actually slow and fixing it: image sizes, loading behaviour, layout shifts and the details that make a site feel sluggish.',
    deliverables: ['Before and after measurements', 'Image and loading optimisation', 'Accessibility fixes'],
  },
]