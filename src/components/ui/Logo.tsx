import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'
import monogram from '../../assets/brand/altbuilt-monogram.png'
import monogramWhite from '../../assets/brand/altbuilt-monogram-white.png'

// Brand lockup: the AltBuilt "AB" monogram (extracted from the company
// profile) + wordmark. `theme` flips the monogram + wordmark for light vs
// dark backgrounds. `tagline` renders the small "building the future
// faster" line (footer).
export function Logo({
  theme = 'light',
  tagline,
  className,
}: {
  theme?: 'light' | 'dark'
  tagline?: string
  className?: string
}) {
  const wordColor = theme === 'dark' ? 'text-white' : 'text-ink'
  return (
    <AppLink href="/" className={cn('flex items-center gap-3', className)}>
      <img
        src={theme === 'dark' ? monogramWhite : monogram}
        alt="AltBuilt Projects"
        className="h-9 w-auto shrink-0"
      />
      <span className="leading-none">
        <span className={cn('block text-xl font-extrabold tracking-tight', wordColor)}>
          ALTBUILT
        </span>
        <span className="block text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
          Projects
        </span>
        {tagline && (
          <span className="mt-1 block text-xs italic text-white/50">{tagline}</span>
        )}
      </span>
    </AppLink>
  )
}
