/**
 * Project data.
 *
 * Each entry uses an actual screenshot captured from the home page of the live
 * site, stored in `public/images/`. Point `screenshot` at a new file to swap the
 * image. A project with no screenshot shows no image rather than a mockup.
 *
 * `categories` drive the filter bar in the Projects section, and must match an
 * existing filter or the project will only appear under All.
 *
 * Both entries are my own shipped projects, with live URLs and real screenshots
 * captured from the home page of each live site. Only work that has actually
 * been shipped is listed: add more entries with real work, never placeholders.
 *
 * Do not invent project names, descriptions, clients or results.
 *
 * Front-end stack entries were verified against each live JavaScript bundle
 * (React, React Router, Axios on a "/api" base). Node, Express and MongoDB are
 * part of my build but cannot be confirmed from a front-end bundle alone. // EDIT
 */

export const projects = [
  {
    id: 'ar-riyaadh-academy',
    name: 'Ar-Riyaadh Academy',
    categories: ['Full-stack', 'React', 'MERN'],
    kind: 'Learning platform',
    live: true,
    /** Real screenshot captured from the live site. */
    screenshot: '/images/ar-riyaadh-academy.png',
    url: 'https://arriyaadh.com/',
    repo: null,
    summary:
      'An Islamic and Arabic learning platform for women and girls, covering Qur\'an, Hadith, Tafsir, Arabic language and general Islamic education, with classes, lectures, Hijaamah instruction and a homeschooling section.',
    detail:
      'Two things had to work well: presenting a lot of structured course information without overwhelming a visitor, and routing each prospective student into the right class. I built the React front end and the API behind it.',
    role: 'Designed, built and shipped it myself, front end and back end',
    // Verified from the live bundle: React, React Router (useNavigate) and an
    // axios instance on baseURL "/api".
    stack: ['React', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Structured content across classes, lectures, homeschooling and testimonials',
      'Class catalogue showing audience and learning focus per subject',
      'Axios API layer on /api covering classes, lectures, testimonials, homeschooling and contact',
    ],
  },
  {
    id: 'grandeur',
    name: 'Grandeur',
    categories: ['Full-stack', 'React', 'E-commerce'],
    kind: 'Fashion e-commerce and training',
    live: true,
    /** Real screenshot captured from the live site. */
    screenshot: '/images/grandeur.png',
    url: 'https://grandeur-fd77.vercel.app/',
    repo: null,
    summary:
      'A bespoke men\'s fashion and tailoring site selling Nigerian native wear, kaftans, agbada and suits, which also advertises fashion design and tailoring training.',
    detail:
      'One site doing two jobs: selling made-to-measure clothing and recruiting students into the training program. I built the storefront and the training section together.',
    role: 'Designed, built and shipped it myself, front end and back end',
    // Verified from the live bundle: React, React Router, an axios instance on
    // baseURL "/api", and cart and checkout state in the client bundle.
    stack: ['React', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Catalogue with category filtering and search',
      'Product detail pages for made-to-measure pieces',
      'Cart and checkout that records orders',
      'Training section with an application call to action',
    ],
  },

]

/** Filter categories, ordered. Derived so a new project's tags appear here. */
export const projectCategories = [
  'All',
  ...Array.from(
    new Set(projects.flatMap((p) => p.categories)),
  ).filter((c) => c !== 'All'),
]