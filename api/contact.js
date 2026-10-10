import nodemailer from 'nodemailer'

/**
 * Contact form back end (Vercel Serverless Function).
 *
 * Accepts a POST of the contact form as JSON, validates it, and emails the
 * message to CONTACT_TO. It only ever sends to that fixed address, with the
 * visitor's address as the reply-to, so it cannot be abused as an open relay.
 *
 * Two transports are supported and it uses whichever is configured:
 *
 *   Resend (recommended, simplest):
 *     RESEND_API_KEY=re_xxxxxxxx
 *
 *   SMTP (e.g. a Gmail App Password):
 *     SMTP_HOST=smtp.gmail.com
 *     SMTP_PORT=465
 *     SMTP_USER=azeezaty.yusuf001@gmail.com
 *     SMTP_PASS=your-16-character-app-password
 *
 * Shared options:
 *     CONTACT_TO=azeezaty.yusuf001@gmail.com   (default below)
 *     CONTACT_FROM="Zeedev website <azeezaty.yusuf001@gmail.com>"
 *
 * Set these in the Vercel project's Environment Variables (and in a local
 * `.env` when running `vercel dev`). Never commit real values.
 */

const CONTACT_TO = process.env.CONTACT_TO || 'azeezaty.yusuf001@gmail.com'
const CONTACT_FROM =
  process.env.CONTACT_FROM ||
  `Zeedev website <${process.env.SMTP_USER || CONTACT_TO}>`

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const REQUIRED_FIELDS = ['name', 'email', 'projectType', 'message']
const MAX_LENGTHS = {
  name: 200,
  email: 200,
  projectType: 200,
  budget: 100,
  message: 5000,
}

/** Vercel parses JSON bodies, but accept a raw string too. */
function parseBody(request) {
  const { body } = request
  if (!body) return {}
  if (typeof body === 'object') return body
  try {
    return JSON.parse(body)
  } catch {
    return {}
  }
}

function trim(value) {
  return String(value ?? '').trim()
}

/** Returns a map of field -> reason for any invalid field. */
function validate(data) {
  const errors = {}

  for (const field of REQUIRED_FIELDS) {
    if (!trim(data[field])) errors[field] = 'required'
  }

  const name = trim(data.name)
  if (name && name.length < 2) errors.name = 'too-short'

  const email = trim(data.email)
  if (email && !EMAIL_PATTERN.test(email)) errors.email = 'invalid'

  const message = trim(data.message)
  if (message && message.length < 20) errors.message = 'too-short'

  return errors
}

function escapeHtml(value) {
  return trim(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char],
  )
}

function buildEmail(data) {
  const subject = `New enquiry from ${data.name}`
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget || 'Not specified'}`,
    '',
    'Message:',
    data.message,
  ]

  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif">New enquiry from ${escapeHtml(data.name)}</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666">Project type</td><td>${escapeHtml(data.projectType)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#666">Budget</td><td>${escapeHtml(data.budget || 'Not specified')}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `.trim()

  return { subject, text: lines.join('\n'), html }
}

async function sendViaResend(data) {
  const { subject, text, html } = buildEmail(data)

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Resend responded ${response.status}: ${detail}`)
  }
}

async function sendViaSmtp(data) {
  const port = Number(process.env.SMTP_PORT || 465)
  const { subject, text, html } = buildEmail(data)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: data.email,
    subject,
    text,
    html,
  })
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const data = parseBody(request)

  // Honeypot: a real visitor never fills this hidden field.
  if (trim(data.company)) {
    return response.status(200).json({ ok: true })
  }

  const errors = validate(data)
  if (Object.keys(errors).length > 0) {
    return response
      .status(422)
      .json({ ok: false, error: 'Invalid submission', errors })
  }

  const payload = {}
  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    payload[field] = trim(data[field]).slice(0, max)
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(payload)
    } else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendViaSmtp(payload)
    } else {
      return response
        .status(500)
        .json({ ok: false, error: 'Email transport is not configured' })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form send failed:', error.message)
    return response
      .status(502)
      .json({ ok: false, error: 'Could not send the message' })
  }
}
