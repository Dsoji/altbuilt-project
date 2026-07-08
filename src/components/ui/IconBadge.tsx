import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

// A gold line-icon holder. `boxed` gives the circular ring used on the
// WhyChoose cards; plain is used in the services strip.
export function IconBadge({
  icon: Icon,
  boxed = false,
  className,
}: {
  icon: LucideIcon
  boxed?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-gold',
        boxed && 'size-14 rounded-full bg-gold/10',
        className,
      )}
    >
      <Icon strokeWidth={1.5} className={cn(boxed ? 'size-7' : 'size-9')} />
    </span>
  )
}
