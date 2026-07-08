import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// A single link primitive that routes correctly from any page.
//  - external / mailto / tel  → plain <a>
//  - "#section"               → home page + hash, so it works off-home too
//  - "/path"                  → client-side route
export function AppLink({
  href,
  className,
  children,
  onClick,
  'aria-label': ariaLabel,
}: {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
  'aria-label'?: string
}) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  const to = href.startsWith('#') ? `/${href}` : href

  return (
    <Link to={to} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
