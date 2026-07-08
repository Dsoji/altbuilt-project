import { services } from './services'

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: services.map((s) => ({
      label: s.label,
      href: `/services/${s.slug}`,
    })),
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '#contact' },
]
