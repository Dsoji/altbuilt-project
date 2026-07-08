import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { services } from '../../data/services'
import { contact } from '../../data/contact'
import { cn } from '../../lib/cn'

// Shared field styling so every input/select/textarea lines up.
const fieldClass =
  'w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm text-ink ' +
  'placeholder:text-ink/40 outline-none transition-colors ' +
  'focus:border-gold focus:ring-2 focus:ring-gold/30'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/70'

type FormState = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const empty: FormState = { name: '', email: '', company: '', service: '', message: '' }

// Web3Forms access key — set VITE_WEB3FORMS_KEY in your .env file.
// Get a free key at https://web3forms.com (enter the inbox address that
// should receive submissions; the key is safe to expose in the browser).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

// Contact section: form (name / email / company / message + optional
// service dropdown) beside the company's contact details.
export function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [status, setStatus] = useState<Status>('idle')

  function update(key: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: form.service
            ? `New enquiry: ${form.service}`
            : 'New enquiry from altbuilt.com',
          from_name: 'AltBuilt Website',
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service || 'Not specified',
          message: form.message,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-muted py-20">
      <Container>
        <SectionHeader
          eyebrow="Contact Us"
          title="Let's Build Something Together"
          align="center"
        />
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-ink/60">
          Tell us what you need and, if you like, the service you're interested
          in. Our team will get back to you shortly.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Company name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>
                  Service{' '}
                  <span className="font-normal normal-case text-ink/40">
                    (optional)
                  </span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={update('service')}
                  className={cn(fieldClass, !form.service && 'text-ink/40')}
                >
                  <option value="">Select a service…</option>
                  {services.map(({ label }) => (
                    <option key={label} value={label} className="text-ink">
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us about your project or requirements…"
                className={cn(fieldClass, 'resize-y')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {status === 'success' && (
              <p className="mt-4 text-sm font-medium text-green-700" role="status">
                Thanks — your message has been sent. We'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600" role="status">
                Something went wrong. Please try again, or email us directly at{' '}
                <a href={`mailto:${contact.email}`} className="text-gold underline">
                  {contact.email}
                </a>
                .
              </p>
            )}
          </form>

          {/* Contact details */}
          <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
            <h3 className="text-xl font-bold">Get in touch</h3>
            <p className="mt-3 leading-relaxed text-white/60">
              Reach us directly through any of the channels below.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-white/80">
                  {contact.address}
                </span>
              </li>
              <li className="flex gap-4">
                <Phone strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-white/80">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="block hover:text-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Mail strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm leading-relaxed text-white/80 hover:text-gold"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
