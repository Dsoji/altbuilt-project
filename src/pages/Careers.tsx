import { useEffect } from 'react'
import { Briefcase, BellRing } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { IconBadge } from '../components/ui/IconBadge'
import { Button } from '../components/ui/Button'
import { contact } from '../data/contact'

export function Careers() {
  useEffect(() => {
    document.title = 'Careers — AltBuilt Projects'
    return () => {
      document.title = 'AltBuilt Projects — Building the Future Faster'
    }
  }, [])

  const cvMailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    'Career Opportunity — CV Submission',
  )}`

  return (
    <>
      {/* Header band */}
      <section className="bg-ink py-20 text-center">
        <Container>
          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-px w-6 bg-gold" />
            Join Our Team
            <span className="h-px w-6 bg-gold" />
          </p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Careers
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60">
            We're building the future faster — and we're always on the lookout
            for talented people who want to build it with us.
          </p>
        </Container>
      </section>

      {/* Empty state */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-xl border border-black/5 bg-muted/50 p-10 text-center shadow-sm sm:p-14">
            <IconBadge icon={Briefcase} boxed />
            <h2 className="mt-5 text-2xl font-bold text-ink">
              No Open Positions Right Now
            </h2>
            <p className="mt-3 leading-relaxed text-ink/60">
              We don't have any openings at the moment. We're growing quickly,
              though — check back soon for new opportunities.
            </p>
            <p className="mt-8 flex items-center gap-2 text-sm text-ink/50">
              <BellRing className="size-4 text-gold" />
              Check back soon — new opportunities are posted here.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
