import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

// White surface card with subtle border + hover lift. Used for the
// WhyChoose feature grid.
export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  )
}
