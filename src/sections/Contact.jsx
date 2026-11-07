import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Check, Mail, MapPin, Send } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { activeSocialLinks } from '../data/socialLinks'
import { hasRealEmail, site } from '../data/site'
import { sendEmail } from '../lib/sendEmail'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  else if (values.message.trim().length < 10)
    errors.message = 'Your message should be at least 10 characters.'
  return errors
}

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | not-configured

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    // Hidden field that real visitors never fill in; bots often do.
    if (formRef.current?.elements.company?.value) return

    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }

    setStatus('sending')
    const result = await sendEmail({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    })

    if (result.ok) {
      setValues(EMPTY)
      setStatus('success')
    } else {
      setStatus(result.reason === 'not-configured' ? 'not-configured' : 'error')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          index="03"
          label="GET IN TOUCH"
          title="Let's Build Something Great Together."
          description="Have an idea, a project, or an opportunity? I'm always interested in connecting with people and exploring new possibilities."
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <p className="contact__invite">
              Whether it&apos;s a website, a video, or something in between, send me a message and
              I&apos;ll get back to you.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact__label">Email</span>
                  {hasRealEmail ? (
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  ) : (
                    <span className="contact__value">{site.email}</span>
                  )}
                </span>
              </li>
              <li>
                <span className="contact__icon">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="contact__label">Location</span>
                  <span className="contact__value">{site.location}</span>
                </span>
              </li>
            </ul>

            {activeSocialLinks.length ? (
              <div className="contact__socials">
                <span className="contact__label">Find me online</span>
                <SocialLinks />
              </div>
            ) : null}

            <p className="availability availability--card">
              <span className="dot" aria-hidden="true" />
              Available for Projects
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
              {FIELDS.map((field) => (
                <div key={field.name} className="form__field">
                  <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                  <input
                    id={`contact-${field.name}`}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={values[field.name]}
                    onChange={handleChange}
                    aria-invalid={errors[field.name] ? 'true' : 'false'}
                    aria-describedby={errors[field.name] ? `contact-${field.name}-error` : undefined}
                    required
                  />
                  {errors[field.name] ? (
                    <p className="form__error" id={`contact-${field.name}-error`}>
                      {errors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div className="form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  required
                />
                {errors.message ? (
                  <p className="form__error" id="contact-message-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {/* Honeypot: hidden from people, tempting to bots. */}
              <div className="form__trap" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                icon={
                  status === 'sending' ? (
                    <span className="spinner" aria-hidden="true" />
                  ) : (
                    <Send size={16} aria-hidden="true" />
                  )
                }
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </Button>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.p
                    key="success"
                    className="form__status form__status--success"
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Check size={18} aria-hidden="true" />
                    <span>Thanks! Your message has been sent. I&apos;ll reply soon.</span>
                  </motion.p>
                ) : null}
                {status === 'error' ? (
                  <motion.p
                    key="error"
                    className="form__status form__status--error"
                    role="alert"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <AlertCircle size={18} aria-hidden="true" />
                    <span>
                      Something went wrong and your message wasn&apos;t sent. Please try again in a
                      moment{hasRealEmail ? ' or email me directly.' : '.'}
                    </span>
                  </motion.p>
                ) : null}
                {status === 'not-configured' ? (
                  <motion.p
                    key="not-configured"
                    className="form__status form__status--error"
                    role="alert"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <AlertCircle size={18} aria-hidden="true" />
                    <span>
                      The contact form isn&apos;t connected to an email service yet, so this message
                      was not sent.
                      {hasRealEmail ? (
                        <>
                          {' '}
                          Please email me at <a href={`mailto:${site.email}`}>{site.email}</a>.
                        </>
                      ) : null}
                    </span>
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
