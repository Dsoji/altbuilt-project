import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { images } from '../../data/images'

// Two-column: copy + CTA on the left, a 3-image collage on the right.
export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <SectionHeader
            eyebrow="About AltBuilt Projects"
            title="Your Trusted Partner in Construction & Procurement"
          />
          <p className="mt-6 max-w-lg leading-relaxed text-ink/60">
            AltBuilt Projects Company Ltd. is a forward-thinking construction
            and procurement company specializing in modular housing, steel
            structures, and prefabricated solutions. We provide innovative
            building systems designed to meet the growing demand for fast,
            durable, and cost-effective infrastructure across Africa.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink/60">
            With a strong foundation in engineering, sourcing, and project
            delivery, AltBuilt Projects combines global expertise with local
            adaptability to deliver high-quality solutions for both public and
            private sector clients.
          </p>
          <Button href="#about" variant="dark" className="mt-8">
            Learn More About Us
          </Button>
        </div>

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={images.aboutMain}
            alt="Modular building"
            className="col-span-2 h-64 w-full rounded-lg object-cover"
          />
          <img
            src={images.aboutSmall1}
            alt="Prefabricated unit"
            className="h-40 w-full rounded-lg object-cover"
          />
          <img
            src={images.aboutSmall2}
            alt="Steel structure"
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>
      </Container>
    </section>
  )
}
