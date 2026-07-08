import { Target, Eye } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Pillar = {
  icon: LucideIcon
  title: string
  statement: string
  quote: string
}

// The Mission & Vision statements from the company profile.
export const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Mission Statement',
    statement:
      'To deliver innovative, cost-effective, and sustainable solutions that create lasting value for our clients, empower our people, and contribute to the development of communities.',
    quote: 'We build more than projects. We build lasting partnerships.',
  },
  {
    icon: Eye,
    title: 'Vision Statement',
    statement:
      'To be a leading global partner known for transforming ideas into high-quality, future-ready solutions that shape a better and stronger tomorrow.',
    quote: 'Our vision drives our purpose and shapes the future we build.',
  },
]
