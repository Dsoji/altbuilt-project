import { Hero } from '../components/sections/Hero'
import { ServicesStrip } from '../components/sections/ServicesStrip'
import { About } from '../components/sections/About'
import { WhyChoose } from '../components/sections/WhyChoose'
import { MissionVision } from '../components/sections/MissionVision'
import { Commitment } from '../components/sections/Commitment'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <About />
      <WhyChoose />
      <MissionVision />
      <Commitment />
      <Contact />
    </>
  )
}
