/**
 * The four-step process, numbered as on the reference sites.
 *
 * `summary` is the short line under the step title; `detail` is the fuller
 * explanation. Both are written to read as organised and reliable rather than
 * as a sales pitch.
 */

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    summary:
      'Understanding what you are building and what it needs to do, before anything is designed.',
    detail:
      'I ask what the site or application is for, who uses it, and what you want someone to be able to do after using it. If there is an existing site or brand, I look at what to keep.',
  },
  {
    number: '02',
    title: 'Planning',
    summary:
      'Agreeing the pages, features and stack, and what is explicitly out of scope.',
    detail:
      'You get a written outline: the pages, the main features, the stack I recommend and why, and the order of work. Anything uncertain is flagged here rather than discovered halfway through.',
  },
  {
    number: '03',
    title: 'Design and Development',
    summary:
      'Building the thing, with progress you can look at as it happens.',
    detail:
      'Design and development run together where possible. You see working pages early, on real content, so feedback happens on the actual site instead of on a mock-up.',
  },
  {
    number: '04',
    title: 'Refinement and Delivery',
    summary:
      'Testing on real devices, fixing what breaks, then handing it over with instructions.',
    detail:
      'Responsive and accessibility checks across screen sizes, corrections, then deployment and a handover explaining how to run and update the site yourself.',
  },
]