import { useEffect, useId, useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Send,
} from 'lucide-react'

import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { formCopy, projectTypes } from '../../data/contact.js'
import { hasEndpoint, submitContact } from '../../api/contact.js'
import { contactDetails } from '../../data/site.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Validates one field and returns an error message, or an empty string when it
 * passes. Kept beside the form so the rules are readable in one place.
 */
function validate(field, value) {
  const trimmed = value.trim()

  switch (field) {
    case 'name':
      if (!trimmed) return 'Enter your name.'
      if (trimmed.length < 2) return 'That looks too short to be a name.'
      return ''
    case 'email':
      if (!trimmed) return 'Enter your email address.'
      if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address.'
      return ''
    case 'projectType':
      if (!trimmed) return 'Choose what you need.'
      return ''
    case 'message':
      if (!trimmed) return 'Tell me a little about the project.'
      if (trimmed.length < 20) {
        return `A bit more detail helps. ${trimmed.length} of 20 characters so far.`
      }
      return ''
    default:
      return ''
  }
}

const FIELDS = ['name', 'email', 'projectType', 'message']

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [submitted, setSubmitted] = useState(false)
  const [focusField, setFocusField] = useState(null)
  const formRef = useRef(null)
  const uid = useId()

  // Focus lands after React has committed the aria-invalid attributes, not
  // during the submit handler, so keyboard users reach the first bad field.
  useEffect(() => {
    if (!focusField) return
    const control = formRef.current?.querySelector(`[name="${focusField}"]`)
    control?.focus()
    setFocusField(null)
  }, [focusField])

  const id = (name) => `${uid}-${name}`
  const describedBy = (name) => {
    const parts = []
    if (submitted && errors[name]) parts.push(id(`${name}-error`))
    if (name === 'message' && !errors.message) parts.push(id('message-hint'))
    return parts.length ? parts.join(' ') : undefined
  }

  const setValue = (name, value) => {
    setValues((previous) => ({ ...previous, [name]: value }))
    // Once a field has failed, clear the error as soon as it is corrected.
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validate(name, value),
      }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setErrors((previous) => ({ ...previous, [name]: validate(name, value) }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(true)

    const nextErrors = {}
    for (const field of FIELDS) {
      const message = validate(field, values[field])
      if (message) nextErrors[field] = message
    }
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      setFocusField(FIELDS.find((field) => nextErrors[field]) ?? null)
      return
    }

    setFocusField(null)

    setStatus('sending')

    try {
      await submitContact({
        name: values.name.trim(),
        email: values.email.trim(),
        projectType: values.projectType,
        message: values.message.trim(),
      })
      setStatus('success')
      setValues({ name: '', email: '', projectType: '', message: '' })
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const whatsappHref = `https://wa.me/${contactDetails.phone.replace(/\D/g, '')}`

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      {/* The soft violet orb the brief asks for behind this section. It sits
          inside a full-bleed clipping wrapper so it can bleed past the edge
          without adding horizontal scroll to the page. */}
      <span className="contact__glow" aria-hidden="true">
        <span className="orb orb--local contact__orb" />
      </span>

      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Let's connect"
          title="Tell me what you are building."
          split
        />

        <div className="contact__grid">
          <Reveal className="contact__aside" delay={40}>
            <div className="contact__card">
              <h3 className="contact__card-title">Reach me directly</h3>
              <p className="contact__card-text">
                Faster than the form if the project is still an idea, or if you
                would rather talk it through first.
              </p>

              <ul className="contact__links">
                <li>
                  <a className="contact__link" href={`mailto:${contactDetails.email}`}>
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name="mail" size={18} />
                    </span>
                    <span>
                      <span className="contact__link-label">Email</span>
                      <span className="contact__link-value">
                        {contactDetails.email}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="contact__link"
                    href={`tel:${contactDetails.phone}`}
                  >
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name="phone" size={18} />
                    </span>
                    <span>
                      <span className="contact__link-label">Call</span>
                      <span className="contact__link-value">
                        {contactDetails.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="contact__link"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name="arrowUpRight" size={18} />
                    </span>
                    <span>
                      <span className="contact__link-label">WhatsApp</span>
                      <span className="contact__link-value">
                        Message me on WhatsApp
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>

                <li>
                  <div className="contact__link contact__link--static">
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name="mapPin" size={18} />
                    </span>
                    <span>
                      <span className="contact__link-label">Location</span>
                      <span className="contact__link-value">
                        {contactDetails.location}
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap">
            <form
              ref={formRef}
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-grid form-grid--2">
                <Field
                  label="Name"
                  name="name"
                  id={id('name')}
                  value={values.name}
                  error={errors.name}
                  submitted={submitted}
                  describedBy={describedBy('name')}
                  onChange={setValue}
                  onBlur={handleBlur}
                  autoComplete="name"
                />

                <Field
                  label="Email"
                  name="email"
                  id={id('email')}
                  value={values.email}
                  type="email"
                  error={errors.email}
                  submitted={submitted}
                  describedBy={describedBy('email')}
                  onChange={setValue}
                  onBlur={handleBlur}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div
                className={`field field--full ${submitted && errors.projectType ? 'field--invalid' : ''}`.trim()}
              >
                <label className="field__label" htmlFor={id('projectType')}>
                  Project type
                </label>
                <div className="field__select">
                  <select
                    className="field__control"
                    id={id('projectType')}
                    name="projectType"
                    value={values.projectType}
                    onChange={(event) => setValue('projectType', event.target.value)}
                    onBlur={handleBlur}
                    aria-invalid={submitted && errors.projectType ? 'true' : undefined}
                    aria-describedby={describedBy('projectType')}
                  >
                    <option value="">Choose one</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" />
                </div>
                {submitted && errors.projectType ? (
                  <p className="field__error" id={id('projectType-error')}>
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div
                className={`field field--full ${submitted && errors.message ? 'field--invalid' : ''}`.trim()}
              >
                <label className="field__label" htmlFor={id('message')}>
                  Message
                </label>
                <textarea
                  className="field__control"
                  id={id('message')}
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={(event) => setValue('message', event.target.value)}
                  onBlur={handleBlur}
                  aria-invalid={submitted && errors.message ? 'true' : undefined}
                  aria-describedby={describedBy('message')}
                />
                {submitted && errors.message ? (
                  <p className="field__error" id={id('message-error')}>
                    {errors.message}
                  </p>
                ) : (
                  <p className="field__hint" id={id('message-hint')}>
                    What you are building, what is not working, and any deadline
                    you are working to.
                  </p>
                )}
              </div>

              <div className="contact__submit">
                <Button
                  type="submit"
                  size="lg"
                  icon={Send}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? formCopy.submitting : formCopy.submit}
                </Button>

                {hasEndpoint ? (
                  <p className="form-note">
                    Your details are used only to reply to this enquiry.
                  </p>
                ) : null}
              </div>

              {/* Polite, so it is announced without interrupting typing. */}
              <p className="u-sr-only" role="status">
                {status === 'sending'
                  ? 'Sending your message.'
                  : status === 'success'
                    ? formCopy.success
                    : status === 'error'
                      ? formCopy.error
                      : ''}
              </p>

              {status === 'success' ? (
                <p className="form-status form-status--success">
                  <CheckCircle2 aria-hidden="true" />
                  <span>{formCopy.success}</span>
                </p>
              ) : null}

              {status === 'error' ? (
                <p className="form-status form-status--error">
                  <AlertCircle aria-hidden="true" />
                  <span>{formCopy.error}</span>
                </p>
              ) : null}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

/** One labelled text input with its error and hint wiring. */
function Field({
  label,
  name,
  id,
  value,
  type = 'text',
  error,
  submitted,
  describedBy,
  onChange,
  onBlur,
  ...rest
}) {
  const invalid = submitted && error

  return (
    <div className={`field ${invalid ? 'field--invalid' : ''}`.trim()}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__control"
        id={id}
        name={name}
        type={type}
        value={value}
        aria-invalid={invalid ? 'true' : undefined}
        aria-describedby={describedBy}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={onBlur}
        {...rest}
      />
      {invalid ? (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  )
}