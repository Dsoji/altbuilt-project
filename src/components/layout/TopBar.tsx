import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../ui/Container'
import { contact } from '../../data/contact'

// Thin dark utility bar above the header: address · phones · email.
// Hidden on small screens to save vertical space.
export function TopBar() {
  return (
    <div className="hidden bg-ink text-white/80 md:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <span className="flex items-center gap-2">
          <MapPin className="size-3.5 text-gold" />
          {contact.address}
        </span>
        <div className="flex items-center gap-6">
          {contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="size-3.5 text-gold" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail className="size-3.5 text-gold" />
            {contact.email}
          </a>
        </div>
      </Container>
    </div>
  )
}
