import { Container } from '../ui/Container'
import { IconBadge } from '../ui/IconBadge'
import { AppLink } from '../ui/AppLink'
import { services } from '../../data/services'

// Dark band of 5 service tiles directly under the hero. Each tile links
// to its dedicated service page. Divided columns on desktop; 2-col on mobile.
export function ServicesStrip() {
  return (
    <section id="services" className="bg-ink">
      <Container>
        <ul className="grid grid-cols-2 divide-white/10 md:grid-cols-5 md:divide-x">
          {services.map(({ icon, label, slug }) => (
            <li key={label}>
              <AppLink
                href={`/services/${slug}`}
                className="flex h-full flex-col items-center gap-3 px-4 py-8 text-center transition-colors hover:bg-white/5"
              >
                <IconBadge icon={icon} />
                <span className="text-sm font-semibold text-white">{label}</span>
              </AppLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
