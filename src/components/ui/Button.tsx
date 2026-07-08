import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'

type Variant = 'gold' | 'outline' | 'dark'

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-ink hover:bg-gold-600',
  outline: 'border border-white/40 text-white hover:bg-white/10',
  dark: 'bg-ink text-white hover:bg-ink-800',
}

// The single button primitive. Everything that looks like a button
// in the design routes through here via the `variant` prop.
export function Button({
  children,
  variant = 'gold',
  href = '#',
  withArrow = true,
  className,
}: {
  children: ReactNode
  variant?: Variant
  href?: string
  withArrow?: boolean
  className?: string
}) {
  return (
    <AppLink
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </AppLink>
  )
}
