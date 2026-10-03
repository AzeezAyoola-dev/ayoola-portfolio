import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {/* Identity */}
          <div>
            <p className="font-display text-[22px] font-medium" style={{ fontFamily: 'var(--font-fraunces)' }}>
              AZEEZ AYOOLA
            </p>
            <p className="text-[13px] mt-1" style={{ color: 'var(--muted-foreground)' }}>
              Product Designer · Lagos, Nigeria
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
              Navigation
            </p>
            {[['/', 'Home'], ['/work', 'Work'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-[13px] w-fit transition-opacity duration-200 hover:opacity-50"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
              Connect
            </p>
            {[
              ['mailto:azeezayoola945@gmail.com', 'Email'],
              ['https://www.linkedin.com/in/ayoola-azeez-52b29b410', 'LinkedIn'],
              ['https://www.behance.net/ayoolaazeez', 'Behance'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-[13px] w-fit transition-opacity duration-200 hover:opacity-50"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-[12px]" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
            © 2026 Azeez Ayoola. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
            Product Designer
          </p>
        </div>
      </div>
    </footer>
  )
}
