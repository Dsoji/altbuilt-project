import { Building2, Users, Globe, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Stat = { icon: LucideIcon; value: string; label: string }

// The 4 counters in the dark "Our Commitment" band.
export const stats: Stat[] = [
  { icon: Building2, value: '100+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Satisfied Clients' },
  { icon: Globe, value: '10+', label: 'Countries Sourced' },
  { icon: Award, value: '5+', label: 'Years of Excellence' },
]
