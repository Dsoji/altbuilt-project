import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { stats } from '../../data/stats'

// Dark band: commitment copy + CTA on the left, 4 stat counters on the right.
export function Commitment() {
  return (
    <section className="bg-ink py-16">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span>Our Commitment</span>
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building Long-Term Partnerships
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            We don't just build projects; we build lasting partnerships.
          </p>
          <Button href="#contact" variant="gold" className="mt-8">
            Let's Work Together
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon strokeWidth={1.5} className="mx-auto mb-3 size-8 text-gold" />
              <div className="text-3xl font-extrabold text-white">{value}</div>
              <div className="mt-1 text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
