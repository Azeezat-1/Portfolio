/**
 * Contact form configuration.
 *
 * The subject line the visitor picks from. Edit freely; each value becomes an
 * option in the form.
 */

/**
 * PLACEHOLDER: set this to the currency you actually quote in before launch.
 * Change this one value and every budget option updates.
 */
export const CURRENCY = 'NGN' // EDIT

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
  `Under ${CURRENCY} 500,000`,
  `${CURRENCY} 500,000 to 1,500,000`,
  `${CURRENCY} 1,500,000 to 4,000,000`,
  `${CURRENCY} 4,000,000 and above`,
  'Not sure yet',
]

export const formCopy = {
  submit: 'Send enquiry',
  submitting: 'Sending',
  success:
    'Thank you. Your message has been sent and I will reply within a few days.',
  error:
    'Something went wrong and the message was not sent. Please email me directly instead.',
}