// Brand glyphs — lucide-react dropped these, so we ship minimal inline SVGs.
// Signature matches lucide icons closely enough (accepts className).
type IconProps = { className?: string }

export function Facebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.3V6H7.5v3h2.8v9H14V9Z" />
    </svg>
  )
}

export function Linkedin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.65 22 10.6 22 14v7h-4v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.42 1.6-2.42 3.3V21H9V9Z" />
    </svg>
  )
}

export function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Twitter({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 2H22l-7 8 8.2 12H16l-5-6.6L5.4 22H2l7.5-8.6L1.6 2H8.6l4.5 6 5.8-6Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
    </svg>
  )
}
