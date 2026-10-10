/**
 * Contact form transport.
 *
 * The form posts to the site's own serverless function at `/api/contact`,
 * which emails the message on to the owner. To point at a different back end
 * (or a hosted form service) set an override at build time:
 *
 *   VITE_CONTACT_ENDPOINT=https://your-api.example.com/api/contact
 *
 * The endpoint receives JSON and should answer 2xx on success. Anything else
 * raises, which puts the form into its error state.
 */

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'

export async function submitContact(payload) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return { ok: true }
}

/** Whether a real endpoint is configured, so the UI can be honest about it. */
export const hasEndpoint = Boolean(ENDPOINT)
