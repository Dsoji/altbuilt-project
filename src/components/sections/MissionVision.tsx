import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { IconBadge } from '../ui/IconBadge'
import { pillars } from '../../data/pillars'

// White band: the company's Mission and Vision statements as two cards,
// each with a gold-accented pull quote from the profile.
export function MissionVision() {
  return (
    <section id="mission" className="bg-white py-20">
      <Container>
        <SectionHeader
          eyebrow="Our Purpose"
          title="Mission & Vision"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map(({ icon, title, statement, quote }) => (
            <Card key={title} className="flex flex-col text-center">
              <div className="mb-4 flex justify-center">
                <IconBadge icon={icon} boxed />
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink">{title}</h3>
              <p className="leading-relaxed text-ink/60">{statement}</p>
              <p className="mt-6 border-l-2 border-gold pl-4 text-left text-sm font-medium italic text-ink/80">
                {quote}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
