import { Home, Frame, Container, ShoppingCart, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { unsplash } from './images'
import modular from '../assets/modular.jpg'
import steelStructure from '../assets/steel.jpg'
import workersSteel from '../assets/workers-steel.jpg'
import warehouse from '../assets/warehouse.jpg'
import warehouseAisle from '../assets/warehouse-aisle.jpg'
import containerPort from '../assets/container-port.jpg'
import cargoShip from '../assets/cargo-ship.jpg'
import truckContainer from '../assets/truck.jpg'
import aircraft from '../assets/aircraft.jpg'

// One item within a service group (a solution, category, range item, benefit).
export type ServiceItem = { title: string; body?: string }

// A titled block on a service page. `cards` renders title + body tiles;
// `list` renders a compact checklist of titles.
export type ServiceGroup = {
  heading: string
  layout: 'cards' | 'list'
  items: ServiceItem[]
}

export type Service = {
  slug: string
  icon: LucideIcon
  label: string // short label used in the strip, nav and footer
  title: string // page heading
  tagline: string // one-liner shown under the title
  intro: string // opening paragraph on the detail page
  heroImage: string
  gallery: string[]
  groups: ServiceGroup[]
}

// The 5 services. Content mirrors the AltBuilt company profile — each
// entry also powers its own /services/:slug detail page.
export const services: Service[] = [
  {
    slug: 'modular-housing-solutions',
    icon: Home,
    label: 'Modular Housing Solutions',
    title: 'Modular Housing Solutions',
    tagline:
      'Modern, customizable modular buildings for flexible and sustainable living and working.',
    intro:
      'Our modular building systems deliver modern, customizable spaces engineered for flexible and sustainable living and working. Designed to meet the growing demand for fast, durable, and cost-effective infrastructure across Africa, our modular solutions are assembled with speed and precision — without compromising on quality.',
    heroImage: modular,
    gallery: [
      unsplash('1487958449943-2429e8be8625', 800),
      unsplash('1558618666-fcd25c85cd64', 800),
    ],
    groups: [
      {
        heading: 'Applications',
        layout: 'cards',
        items: [
          {
            title: 'Residential Homes',
            body: 'Comfortable, ready-to-live modular homes built to modern standards.',
          },
          {
            title: 'Offices & Workspaces',
            body: 'Flexible commercial spaces that scale with your business.',
          },
          {
            title: 'Schools & Classrooms',
            body: 'Rapidly deployed learning spaces for growing communities.',
          },
          {
            title: 'Clinics & Healthcare',
            body: 'Hygienic, functional units for medical and care facilities.',
          },
          {
            title: 'Site Accommodation',
            body: 'Durable living quarters for project and remote sites.',
          },
        ],
      },
      {
        heading: 'Key Benefits',
        layout: 'list',
        items: [
          { title: 'Fast Deployment' },
          { title: 'Cost-Effective' },
          { title: 'Sustainable Design' },
          { title: 'Fully Customizable' },
          { title: 'Scalable & Expandable' },
          { title: 'Durable Construction' },
        ],
      },
    ],
  },
  {
    slug: 'steel-structures',
    icon: Frame,
    label: 'Steel Structures',
    title: 'Steel Structures',
    tagline:
      'Design, fabrication, and installation of high-quality steel structures for various applications.',
    intro:
      'We design, fabricate, and erect high-quality steel structures that stand the test of time. Our solutions are engineered for strength, safety, and efficiency to meet the demands of modern construction.',
    heroImage: steelStructure,
    gallery: [workersSteel, unsplash('1504328345606-18bbc8c9d7d1', 800)],
    groups: [
      {
        heading: 'Our Solutions',
        layout: 'list',
        items: [
          { title: 'Industrial Buildings' },
          { title: 'Warehouses' },
          { title: 'Multi-Storey Buildings' },
          { title: 'Structural Steel Fabrication' },
          { title: 'Roofing and Cladding Systems' },
          { title: 'Design & Engineering Support' },
          { title: 'Supply and Installation' },
        ],
      },
      {
        heading: 'Key Benefits',
        layout: 'cards',
        items: [
          {
            title: 'High Strength & Durability',
            body: 'Structures engineered to last and to withstand demanding conditions.',
          },
          {
            title: 'Cost-Effective Solutions',
            body: 'Efficient design and fabrication that maximizes value.',
          },
          {
            title: 'Faster Construction & Installation',
            body: 'Streamlined processes that shorten build timelines.',
          },
          {
            title: 'Compliant with Global Standards',
            body: 'Built to meet recognized international engineering standards.',
          },
        ],
      },
    ],
  },
  {
    slug: 'portacabins-prefabricated-units',
    icon: Container,
    label: 'Portacabins & Prefabricated Units',
    title: 'Portacabins & Prefabricated Units',
    tagline: 'Durable and portable units for offices, sites, and facilities.',
    intro:
      'Our portacabins and prefabricated units are designed for convenience, mobility, and durability. Ideal for site offices, accommodations, storage, classrooms, and more.',
    heroImage: unsplash('1558618666-fcd25c85cd64', 1600),
    gallery: [
      unsplash('1600607687939-ce8a6c25118c', 800),
      unsplash('1487958449943-2429e8be8625', 800),
    ],
    groups: [
      {
        heading: 'Our Range',
        layout: 'cards',
        items: [
          {
            title: 'Site Offices',
            body: 'Functional and secure office spaces for any project site.',
          },
          {
            title: 'Accommodation Units',
            body: 'Comfortable living spaces for workers and staff.',
          },
          {
            title: 'Toilet & Shower Units',
            body: 'Hygienic and easy-to-install sanitary solutions.',
          },
          {
            title: 'Storage Units',
            body: 'Secure storage solutions for tools, materials, and equipment.',
          },
          {
            title: 'Special Purpose Units',
            body: 'Customized units for classrooms, clinics, security posts, and more.',
          },
        ],
      },
      {
        heading: 'Why Choose Us',
        layout: 'list',
        items: [
          { title: 'Quick Deployment' },
          { title: 'Easy Transportation' },
          { title: 'Customizable Designs' },
          { title: 'Low Maintenance' },
          { title: 'Built for Tough Environments' },
        ],
      },
    ],
  },
  {
    slug: 'marketing-general-merchandise',
    icon: ShoppingCart,
    label: 'Marketing & General Merchandise',
    title: 'Marketing & General Merchandise',
    tagline: 'A wide range of products to support your business and operational needs.',
    intro:
      'We supply a wide range of quality products to meet the diverse needs of businesses and organizations. From industrial supplies to everyday essentials, we deliver value you can rely on.',
    heroImage: warehouse,
    gallery: [warehouseAisle, unsplash('1581092160562-40aa08e78837', 800)],
    groups: [
      {
        heading: 'Our Categories',
        layout: 'cards',
        items: [
          {
            title: 'Industrial Supplies',
            body: 'Tools, equipment, and accessories for industrial operations.',
          },
          {
            title: 'Safety & PPE',
            body: 'Personal protective equipment to ensure workplace safety.',
          },
          {
            title: 'Electrical & Lighting',
            body: 'Wiring accessories, fittings, and lighting solutions.',
          },
          {
            title: 'Plumbing & Hardware',
            body: 'Pipes, fittings, hardware, and building essentials.',
          },
          {
            title: 'Office & Consumables',
            body: 'Stationery, office supplies, and consumables for daily use.',
          },
          {
            title: 'General Merchandise',
            body: 'A wide variety of products to support your business needs.',
          },
        ],
      },
    ],
  },
  {
    slug: 'importation-global-sourcing',
    icon: Globe,
    label: 'Importation & Global Sourcing',
    title: 'Importation & Global Sourcing',
    tagline: 'Connecting you to trusted suppliers worldwide.',
    intro:
      'We connect you to trusted suppliers worldwide and deliver quality goods and materials that power your projects and operations.',
    heroImage: containerPort,
    gallery: [cargoShip, aircraft, truckContainer],
    groups: [
      {
        heading: 'What We Offer',
        layout: 'cards',
        items: [
          {
            title: 'Global Network',
            body: 'Strong partnerships with reliable manufacturers and suppliers worldwide.',
          },
          {
            title: 'Quality Assurance',
            body: 'We source only high-quality products that meet international standards.',
          },
          {
            title: 'Cost Efficiency',
            body: 'Competitive pricing and smart sourcing to maximize your value.',
          },
          {
            title: 'Timely Delivery',
            body: 'Efficient logistics and supply chain management for on-time delivery.',
          },
          {
            title: 'Wide Range',
            body: 'From raw materials to specialized equipment, we source what you need.',
          },
        ],
      },
    ],
  },
]

// Quick lookup by slug for the detail route.
export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug)
