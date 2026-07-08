// Real brand imagery lives in /src/assets and is imported so Vite can
// hash + optimize it. The `unsplash` helper remains for any spot still
// using a stock placeholder.
import modular from '../assets/modular.jpg'
import steelStructure from '../assets/steel.jpg'
import warehouse from '../assets/warehouse.jpg'
import teamwork from '../assets/teamwork.jpg'

export const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: modular, // modular home at dusk — hero background
  aboutMain: steelStructure, // steel structure frame at sunset
  aboutSmall1: warehouse, // procurement / supply warehouse
  aboutSmall2: teamwork, // partnership — stacked hands
} as const
