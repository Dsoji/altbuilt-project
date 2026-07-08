import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { AppLink } from '../ui/AppLink'
import { NavDropdown } from './NavDropdown'
import { navItems } from '../../data/nav'

// White sticky header. Desktop nav (with Services dropdown) + quote CTA;
// mobile collapses to a hamburger-driven drawer.
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <AppLink
                key={item.label}
                href={item.href}
                className="py-2 text-sm font-medium text-ink transition-colors hover:text-gold"
              >
                {item.label}
              </AppLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">Request a Quote</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="border-t border-black/5 bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <AppLink
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-ink hover:text-gold"
                >
                  {item.label}
                </AppLink>
                {item.children && (
                  <div className="mb-1 flex flex-col border-l border-black/10 pl-4">
                    {item.children.map((child) => (
                      <AppLink
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2 text-sm text-ink/70 hover:text-gold"
                      >
                        {child.label}
                      </AppLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="#contact" className="mt-3 justify-center">
              Request a Quote
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
