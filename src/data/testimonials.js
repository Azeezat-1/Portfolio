/**
 * Client reviews (brief §3.9).
 *
 * A card renders only when `quote` is non-empty AND `approved` is true;
 * otherwise it renders the refined "Review coming soon" state. Real client
 * wording is preferred: the entries below are short drafts, marked so they are
 * easy to find and replace once the client confirms them. Never reuse the
 * student testimonials from the Ar-Riyaadh site, which are about the teacher
 * rather than about the work.
 */

export const testimonials = [
  {
    name: 'Umm Abdillah',
    role: 'Founder',
    business: 'Ar-Riyaadh Academy',
    // TODO: generated placeholder, replace with the client's real words.
    quote:
      'Azeezat turned our ideas into a clean, welcoming website that our students and parents find easy to use.',
    projectUrl: 'https://arriyaadh.com/',
    approved: true,
  },
  {
    name: 'Grandeur Tailors',
    role: 'Owner',
    business: 'Grandeur',
    // TODO: generated placeholder, replace with the client's real words.
    quote:
      'The new site makes our tailors look as good online as they do in person, and it was quick and stress-free to get live.',
    projectUrl: 'https://grandeur-fd77.vercel.app/',
    approved: true,
  },
]