import { useEffect, useId, useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Lock,
  Send,
} from 'lucide-react'

import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { budgetRanges, formCopy, projectTypes } from '../../data/contact.js'
import { hasEndpoint, submitContact } from '../../api/contact.js'
import { contactDetails } from '../../data/site.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Validates one field, returning an error message or an empty string. */
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
const OPTIONAL_FIELDS = ['budget']

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [submitted, setSubmitted] = useState(false)
  const [focusField, setFocusField] = useState(null)
  const formRef = useRef(null)
  const uid = useId()

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
    return parts.length ? parts.join(' ') : undefined
  }

  const setValue = (name, value) => {
    setValues((previous) => ({ ...previous, [name]: value }))
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
        budget: values.budget || null,
        message: values.message.trim(),
      })
      setStatus('success')
      setValues({ name: '', email: '', projectType: '', budget: '', message: '' })
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const whatsappHref = `https://wa.me/${contactDetails.phone.replace(/\D/g, '')}`

  const contactRows = [
    {
      label: 'Email',
      value: contactDetails.email,
      icon: 'mail',
      href: contactDetails.emailHref,
      external: false,
    },
    {
      label: 'Call',
      value: contactDetails.phoneDisplay,
      icon: 'phone',
      href: `tel:${contactDetails.phone}`,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: 'Message me on WhatsApp',
      icon: 'messageCircle',
      href: whatsappHref,
      external: true,
    },
    {
      label: 'Location',
      value: contactDetails.location,
      icon: 'mapPin',
      href: null,
      external: false,
    },
  ]

  return (
    <section
      className="section band band--dark contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <span className="bp-wire" aria-hidden="true" />

      <div className="container contact__grid">
        <Reveal className="contact__aside" delay={40}>
          <SectionHeading
            id="contact-title"
            eyebrow="Let's connect"
            title={
              <>
                Tell me what you are <span className="hi">building</span>
              </>
            }
            level={2}
          />

          <p className="contact__intro">
            Faster to start with the form if the project is still an idea, or
            message me directly if you would rather talk it through first.
          </p>

          <ul className="contact__links">
            {contactRows.map((row) => {
              const content = (
                <>
                  <span className="contact__link-icon" aria-hidden="true">
                    <Icon name={row.icon} size={18} />
                  </span>
                  <span>
                    <span className="contact__link-label">{row.label}</span>
                    <span className="contact__link-value">{row.value}</span>
                    {row.external ? (
                      <span className="u-sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </span>
                </>
              )

              return row.href ? (
                <li key={row.label}>
                  <a
                    className="contact__link"
                    href={row.href}
                    {...(row.external
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    {content}
                  </a>
                </li>
              ) : (
                <li key={row.label}>
                  <div className="contact__link contact__link--static">
                    {content}
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={80}>
          <div className="contact__card">
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
                  <ChevronDown className="field__chevron" aria-hidden="true" />
                </div>
                {submitted && errors.projectType ? (
                  <p className="field__error" id={id('projectType-error')}>
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div className="field field--full">
                <label className="field__label" htmlFor={id('budget')}>
                  Budget range <span className="field__optional">(optional)</span>
                </label>
                <div className="field__select">
                  <select
                    className="field__control"
                    id={id('budget')}
                    name="budget"
                    value={values.budget}
                    onChange={(event) => setValue('budget', event.target.value)}
                    onBlur={handleBlur}
                  >
                    <option value="">Prefer not to say</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="field__chevron" aria-hidden="true" />
                </div>
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
                  variant="inverse"
                  size="lg"
                  icon={Send}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? formCopy.submitting : formCopy.submit}
                </Button>

                {!hasEndpoint ? (
                  <p className="form-note">
                    <Lock aria-hidden="true" />
                    <span>
                      The form is a demo: nothing leaves your device yet. A real
                      handler will only use your details to reply.
                    </span>
                  </p>
                ) : null}
              </div>

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
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/** One labelled text input with its error wiring. */
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