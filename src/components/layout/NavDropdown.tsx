import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '../../data/nav'
import { AppLink } from '../ui/AppLink'

// A nav item that reveals its children on hover/focus (desktop).
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AppLink
        href={item.href}
        className="flex items-center gap-1 py-2 text-sm font-medium text-ink transition-colors hover:text-gold"
      >
        {item.label}
        <ChevronDown className="size-4" />
      </AppLink>
      {item.children && (
        <div
          className={`absolute left-0 top-full z-50 min-w-64 rounded-md border border-black/5 bg-white p-2 shadow-lg transition-all ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-1 opacity-0'
          }`}
        >
          {item.children.map((child) => (
            <AppLink
              key={child.label}
              href={child.href}
              className="block rounded px-3 py-2 text-sm text-ink/80 hover:bg-muted hover:text-gold"
            >
              {child.label}
            </AppLink>
          ))}
        </div>
      )}
    </div>
  )
}
