import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { IconBadge } from '../ui/IconBadge'
import { features } from '../../data/features'

// Light-gray band: centered header + responsive 6-card feature grid.
export function WhyChoose() {
  return (
    <section className="bg-muted py-20">
      <Container>
        <SectionHeader
          eyebrow="Why Choose AltBuilt?"
          title="Delivering Value Through Innovation"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, body }) => (
            <Card key={title} className="text-center">
              <div className="mb-4 flex justify-center">
                <IconBadge icon={icon} boxed />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
