/**
 * Contact form transport.
 *
 * With no endpoint configured this returns a short delay and resolves, so the
 * loading, success and error states can be exercised without a back end. It
 * does not send anything anywhere, and the form says so on the page.
 *
 * To connect a real back end, create a `.env` file:
 *
 *   VITE_CONTACT_ENDPOINT=https://your-api.example.com/api/contact
 *
 * The endpoint receives JSON and should answer 2xx on success. Anything else
 * raises, which puts the form into its error state.
 */

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

/** Pause used by the placeholder handler so the loading state is visible. */
const PLACEHOLDER_DELAY = 700

export async function submitContact(payload) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, PLACEHOLDER_DELAY))
    return { ok: true, placeholder: true }
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return { ok: true, placeholder: false }
}

/** Whether a real endpoint is configured, so the UI can be honest about it. */
export const hasEndpoint = Boolean(ENDPOINT)