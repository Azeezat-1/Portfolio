/**
 * Contact form configuration (brief §3.10).
 *
 * The option lists the visitor picks from. Edit freely; each value becomes an
 * option in the form. `budgetRanges` drives the optional select.
 */

export const projectTypes = [
  'Custom portfolio or business website',
  'React front-end development',
  'Full-stack web application',
  'WordPress website',
  'Figma-to-code build',
  'Website redesign',
  'API integration or back-end work',
  'Maintenance and performance',
  'Something else',
]

export const budgetRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  'Over $5,000',
  'Not sure yet',
]

export const formCopy = {
  submit: 'Send Message',
  submitting: 'Sending',
  success:
    'Thank you. Your message has been sent and I will reply within a few days.',
  error:
    'Something went wrong and the message was not sent. Please email me directly instead.',
}