import arriyaadhShot from '../assets/projects/arriyaadh.png'
import grandeurShot from '../assets/projects/grandeur.png'

/**
 * Selected work.
 *
 * Two real, shipped projects with live URLs. The brief supplies both
 * descriptions directly and says to use them as actual data, not placeholders.
 * Full-page screenshots are captured from the home page of each live site and
 * live in `src/assets/projects/` (imported above so Vite bundles them);
 * `domain` is shown in the browser-chrome URL bar on the desktop card, and
 * `toolkit` drives the brand-coloured icon row.
 *
 * Do not invent project names, descriptions, clients or results. Copy an
 * existing entry to add real work.
 *
 * `categories` drives the filter bar. Every category must match an existing
 * filter, or the project will only appear under All.
 *
 * Front-end stack entries were verified against each live JavaScript bundle
 * (React, React Router, Axios on a "/api" base). Node, Express and MongoDB are
 * part of the build but cannot be confirmed from a front-end bundle alone.
 */

export const projects = [
  {
    id: 'ar-riyaadh-academy',
    name: 'Ar-Riyaadh Academy',
    /** Short pastel chip under the title (§1.2a). */
    tag: 'MERN',
    oneLiner:
      'Islamic & Arabic learning platform for women and girls — full build, front end and back end.',
    categories: ['Full-stack', 'React', 'MERN'],
    live: true,
    /** Full-page capture of the live homepage, from top to footer. */
    screenshot: arriyaadhShot,
    /** Shown in the browser-chrome URL bar on the desktop card. */
    domain: 'arriyaadh.com',
    /** IDs into the brand-coloured tool icons (see ToolIcon.jsx). */
    toolkit: ['react', 'node', 'express', 'mongodb'],
    url: 'https://arriyaadh.com/',
    repo: null,
  },
  {
    id: 'grandeur',
    name: 'Grandeur',
    tag: 'E-commerce',
    oneLiner:
      'Bespoke men\'s fashion and tailoring site — Nigerian native wear, kaftans, agbada and suits.',
    categories: ['Full-stack', 'React', 'E-commerce'],
    live: true,
    screenshot: grandeurShot,
    domain: 'grandeur-fd77.vercel.app',
    toolkit: ['react', 'react-router', 'node', 'mongodb'],
    url: 'https://grandeur-fd77.vercel.app/',
    repo: null,
  },
]

/** Filter categories, ordered. Derived so a new project's tags appear here. */
export const projectCategories = [
  'All',
  ...Array.from(
    new Set(projects.flatMap((p) => p.categories)),
  ).filter((c) => c !== 'All'),
]
