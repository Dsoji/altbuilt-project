import { services } from './services'

export type FooterLink = { label: string; href: string }
export type FooterColumn = { title: string; links: FooterLink[] }

export const footerColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Our Services',
    links: services.map((s) => ({
      label: s.label,
      href: `/services/${s.slug}`,
    })),
  },
]

export const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

export const copyright =
  '© 2026 AltBuilt Projects Company Ltd. All Rights Reserved.'
