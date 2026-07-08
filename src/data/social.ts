import type { ComponentType } from 'react'
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from '../components/ui/BrandIcons'

export type Social = {
  icon: ComponentType<{ className?: string }>
  label: string
  href: string
}

export const socials: Social[] = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]
