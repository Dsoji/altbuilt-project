import { cn } from '../../lib/cn'

// The gold eyebrow-with-dash + heading pattern that repeats across
// About, WhyChoose and Commitment sections.
export function SectionHeader({
  eyebrow,
  title,
  align = 'left',
  onDark = false,
  className,
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <div
        className={cn(
          'mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold',
          align === 'center' && 'justify-center',
        )}
      >
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2
        className={cn(
          'text-3xl font-bold leading-tight sm:text-4xl',
          onDark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
