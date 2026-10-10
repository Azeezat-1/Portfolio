import arriyaadhShot from '../assets/projects/arriyaadh.jpg'
import grandeurShot from '../assets/projects/grandeur.jpg'

/**
 * Selected work (brief §3.7). Two real, shipped projects with live URLs.
 *
 * Optimised full-page screenshots (about 1280px wide) are captured from the
 * home page of each live site and imported above so Vite bundles them. They
 * are shown inside browser and phone device frames, never in an iframe.
 *
 * For Ar-Riyaadh the brief states the stack and what was built. For Grandeur
 * it explicitly says NOT to state which stack or exactly what was built, so
 * `role` and `stack` are left as clearly marked TODO fields below.
 */

export const projects = [
  {
    id: 'ar-riyaadh-academy',
    name: 'Ar-Riyaadh Academy',
    /** Pastel tag chips shown with the project name. */
    tags: ['MERN', 'Islamic & Arabic learning'],
    description:
      'An Islamic and Arabic learning website for women and girls (Umm Abdillah Ar-Riyaadh Academy): classes, lectures, Hijaamah instruction and student reviews, with a Telegram-based class access flow.',
    role: 'Full build, front end and back end. Built on the MERN stack.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://arriyaadh.com/',
    domain: 'arriyaadh.com',
    screenshot: arriyaadhShot,
    toolkit: ['react', 'node', 'express', 'mongodb'],
    repo: null,
  },
  {
    id: 'grandeur',
    name: 'Grandeur',
    /** Pastel tag chips shown with the project name. */
    tags: ['Fashion & tailoring'],
    description:
      "A bespoke men's fashion and tailoring site: Nigerian native wear, kaftans, agbada, suits and fashion design training.",
    /** TODO: supply what she built and on which stack. */
    role: '',
    stack: [],
    url: 'https://grandeur-fd77.vercel.app/',
    domain: 'grandeur-fd77.vercel.app',
    screenshot: grandeurShot,
    toolkit: ['react', 'node', 'mongodb'],
    repo: null,
  },
]