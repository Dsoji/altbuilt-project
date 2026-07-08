import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { AppLink } from '../ui/AppLink'
import { footerColumns, legalLinks, copyright } from '../../data/footer'
import { socials } from '../../data/social'
import { contact } from '../../data/contact'

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white/70">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + socials */}
        <div>
          <Logo theme="dark" tagline="building the future faster" />
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <AppLink href={link.href} className="hover:text-gold">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{contact.address}</span>
            </li>
            {contact.phones.map((phone) => (
              <li key={phone} className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-gold">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      {/* Legal bar */}
      <div className="border-t border-ink-700">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <span>{copyright}</span>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <AppLink key={link.label} href={link.href} className="hover:text-gold">
                {link.label}
              </AppLink>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}
