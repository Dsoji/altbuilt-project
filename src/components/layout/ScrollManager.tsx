import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Keeps scroll position sensible across client-side navigation:
//  - a URL hash (e.g. /#about) smooth-scrolls to that section, accounting
//    for the sticky header
//  - any other navigation jumps to the top of the new page
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 88
          window.scrollTo({ top, behavior: 'smooth' })
        }
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
