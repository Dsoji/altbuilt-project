import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

// Centers content and applies the shared max-width + horizontal padding
// so every section aligns to the same gutters.
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8', className)}>
      {children}
    </div>
  )
}
