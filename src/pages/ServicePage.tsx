import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { IconBadge } from '../components/ui/IconBadge'
import { Button } from '../components/ui/Button'
import { AppLink } from '../components/ui/AppLink'
import { cn } from '../lib/cn'
import { services, serviceBySlug, type ServiceGroup } from '../data/services'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? serviceBySlug(slug) : undefined

  useEffect(() => {
    if (service) document.title = `${service.label} — AltBuilt Projects`
    return () => {
      document.title = 'AltBuilt Projects — Building the Future Faster'
    }
  }, [service])

  if (!service) return <NotFound />

  const { icon: Icon, label, title, tagline, intro, heroImage, gallery, groups } =
    service
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img src={heroImage} alt={label} className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>
        <Container className="relative py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/60">
            <AppLink href="/" className="hover:text-gold">
              Home
            </AppLink>
            <ChevronRight className="size-3.5" />
            <AppLink href="#services" className="hover:text-gold">
              Services
            </AppLink>
            <ChevronRight className="size-3.5" />
            <span className="text-white/90">{label}</span>
          </nav>

          <div className="max-w-2xl">
            <IconBadge icon={Icon} boxed />
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-gold">{tagline}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">{intro}</p>
            <Button href="#contact" variant="gold" className="mt-8">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Content groups */}
      {groups.map((group, i) => (
        <Group key={group.heading} group={group} shaded={i % 2 === 1} />
      ))}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="bg-white pb-20">
          <Container>
            <div
              className={cn(
                'grid grid-cols-1 gap-4',
                gallery.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2',
              )}
            >
              {gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={label}
                  className="h-64 w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's build something great together.
          </h2>
          <p className="max-w-xl leading-relaxed text-white/60">
            Partner with AltBuilt Projects for reliable, future-ready solutions
            that stand the test of time.
          </p>
          <Button href="#contact" variant="gold">
            Get a Free Consultation
          </Button>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-muted py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-ink">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map(({ slug: s, icon: OtherIcon, label: otherLabel }) => (
              <AppLink
                key={s}
                href={`/services/${s}`}
                className="group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <IconBadge icon={OtherIcon} boxed />
                <span className="text-sm font-semibold text-ink group-hover:text-gold">
                  {otherLabel}
                </span>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

// A single content block — either a card grid or a checklist.
function Group({ group, shaded }: { group: ServiceGroup; shaded: boolean }) {
  return (
    <section className={cn('py-16', shaded ? 'bg-muted' : 'bg-white')}>
      <Container>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            {group.heading}
          </h2>
        </div>

        {group.layout === 'cards' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <Card key={item.title}>
                <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                {item.body && (
                  <p className="text-sm leading-relaxed text-ink/60">
                    {item.body}
                  </p>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-4 shadow-sm"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}

function NotFound() {
  return (
    <section className="bg-white py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold text-ink">Service not found</h1>
        <p className="text-ink/60">
          The service you're looking for doesn't exist or may have moved.
        </p>
        <Button href="#services" variant="dark">
          View All Services
        </Button>
      </Container>
    </section>
  )
}
