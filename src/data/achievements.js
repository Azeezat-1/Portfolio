/**
 * Achievements and experience.
 *
 * The brief requires an editable section for completed projects,
 * certifications, professional experience and milestones, with no invented
 * achievements.
 *
 * Entries marked `placeholder: true` are NOT rendered. They stay here as a
 * checklist of what you can fill in as you go. Anything set to
 * `placeholder: false` appears on the published page, so only move a real
 * entry across once the detail is confirmed.
 */

export const achievementTrack = [
  {
    id: 'delivered-ar-riyaadh',
    placeholder: false,
    category: 'Delivered project',
    period: null,
    title: 'Ar-Riyaadh Academy platform',
    text:
      'A learning platform for women and girls, built front to back: the React interface and the Express and MongoDB API behind it. Live at arriyaadh.com.',
  },
  {
    id: 'delivered-grandeur',
    placeholder: false,
    category: 'Delivered project',
    period: null,
    title: 'Grandeur e-commerce and training site',
    text:
      'A bespoke menswear site that sells made-to-measure clothing and recruits students into the brands training program. Live at grandeur-fd77.vercel.app.',
  },

  /* ------------------------------------------------------------------ */
  /* Placeholders. Not rendered. Fill in and set placeholder to false.    */
  /* ------------------------------------------------------------------ */
  {
    id: 'figma-to-code-example',
    placeholder: true,
    category: 'Design-to-code',
    period: null,
    title: 'A Figma design built into a live site',
    text:
      'Replace this with a real example: what the design was, which breakpoints it had to work at, and how closely the build matched.',
  },
  {
    id: 'wordpress-example',
    placeholder: true,
    category: 'WordPress',
    period: null,
    title: 'A WordPress site built and handed over',
    text:
      'Replace this with a real project: the theme work, the plugins used, and how the client runs the site themselves.',
  },
  {
    id: 'certification',
    placeholder: true,
    category: 'Certification',
    period: null,
    title: 'Certification or course',
    text:
      'Replace this with a real certification, the issuing body, and the year. Add a link if there is one.',
  },
  {
    id: 'professional-role',
    placeholder: true,
    category: 'Professional experience',
    period: null,
    title: 'A role, contract or team',
    text:
      'Replace this with a real role: what you did, who you did it for, and roughly when.',
  },
  {
    id: 'milestone',
    placeholder: true,
    category: 'Milestone',
    period: null,
    title: 'A milestone worth recording',
    text:
      'Replace this with a real milestone. Keep it factual, and only include it if you can back it up.',
  },
]

/** What actually renders. Placeholders are filtered out here. */
export const publishedAchievements = achievementTrack.filter(
  (entry) => !entry.placeholder,
)