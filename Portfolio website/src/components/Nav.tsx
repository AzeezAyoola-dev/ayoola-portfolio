import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + '/')

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="text-[15px] font-medium tracking-[-0.01em] hover:opacity-60 transition-opacity duration-200"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            AZEEZ AYOOLA
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-link relative text-[14px] pb-1 transition-opacity duration-200"
                data-active={isActive(to)}
                style={{
                  opacity: isActive(to) ? 1 : 0.5,
                  fontFamily: 'var(--font-dm-sans)',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = isActive(to) ? '1' : '0.5')}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[13px] font-medium px-4 py-2 border transition-all duration-200 hover:bg-foreground hover:text-background"
              style={{
                borderColor: 'var(--foreground)',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Let's talk →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[1.5px] w-6 bg-foreground transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                backgroundColor: 'var(--foreground)',
              }}
            />
            <span
              className="block h-[1.5px] w-6 transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                backgroundColor: 'var(--foreground)',
              }}
            />
            <span
              className="block h-[1.5px] w-6 bg-foreground transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                backgroundColor: 'var(--foreground)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-400"
        style={{
          backgroundColor: 'var(--background)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 300ms ease, transform 300ms ease',
        }}
      >
        <div className="flex flex-col justify-end pb-16 px-6 h-full gap-2 pt-24">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className="py-5 border-b text-[2rem] font-display font-medium"
              style={{
                borderColor: 'var(--border)',
                fontFamily: 'var(--font-fraunces)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 350ms ease ${i * 60 + 100}ms, transform 350ms ease ${i * 60 + 100}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block text-[14px] font-medium px-5 py-3 border"
              style={{ borderColor: 'var(--foreground)' }}
              onClick={() => setMenuOpen(false)}
            >
              Let's talk →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
