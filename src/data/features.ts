import {
  Lightbulb,
  DollarSign,
  Rocket,
  BarChart3,
  ShieldCheck,
  Handshake,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = { icon: LucideIcon; title: string; body: string }

// The 6 "Why Choose AltBuilt?" cards.
export const features: Feature[] = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    body: 'Modern construction methods and smart technologies for future-ready results.',
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    body: 'Maximizing value without compromising on quality and performance.',
  },
  {
    icon: Rocket,
    title: 'Fast Deployment',
    body: 'Efficient planning and execution ensure quick turnaround time.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Results',
    body: 'Solutions that grow with your needs — from small to large-scale projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    body: 'Strict quality control processes for reliable and durable outcomes.',
  },
  {
    icon: Handshake,
    title: 'Global Partnerships',
    body: 'Access to a wide network of trusted manufacturers and suppliers worldwide.',
  },
]
