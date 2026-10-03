export default function Contact() {
  return (
    <main className="pt-24 md:pt-32 min-h-screen flex flex-col">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 flex-1 flex flex-col">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-6"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            Contact
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,6.5rem)] font-light tracking-[-0.03em] leading-[1.05]"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Let's make
            <br />
            something
            <br />
            <em>worth using.</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 md:py-24 flex-1">
          {/* Left */}
          <div className="md:col-span-5">
            <p className="text-[16px] leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
              I'm always open to interesting ideas, conversations and opportunities to design better digital experiences.
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Whether you have a project in mind, want to talk about design, or just want to connect — reach out.
            </p>

            <div className="mt-12">
              <a
                href="mailto:azeezayoola945@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[14px] font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Right — contact channels */}
          <div className="md:col-span-5 md:col-start-8">
            <p
              className="text-[11px] tracking-widest uppercase mb-8"
              style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
            >
              Channels
            </p>

            <div className="flex flex-col">
              {[
                {
                  label: 'Email',
                  value: 'azeezayoola945@gmail.com',
                  href: 'mailto:azeezayoola945@gmail.com',
                  note: 'For project inquiries and general questions',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/ayoola-azeez-52b29b410',
                  href: 'https://www.linkedin.com/in/ayoola-azeez-52b29b410',
                  note: 'Professional network and updates',
                },
                {
                  label: 'Behance',
                  value: 'behance.net/ayoolaazeez',
                  href: 'https://www.behance.net/ayoolaazeez',
                  note: 'Design portfolio and case studies',
                },
              ].map(({ label, value, href, note }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex flex-col gap-1 py-6 border-b transition-opacity duration-200 hover:opacity-60"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] tracking-widest uppercase"
                      style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
                    >
                      {label}
                    </span>
                    <span className="text-[13px] transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </div>
                  <span className="text-[15px] font-medium">{value}</span>
                  <span className="text-[13px]" style={{ color: 'var(--muted-foreground)' }}>{note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location strip */}
        <div
          className="py-8 border-t flex flex-col md:flex-row justify-between gap-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <p
            className="text-[13px]"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            Based in Lagos, Nigeria
          </p>
          <p
            className="text-[13px]"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            Open to remote opportunities
          </p>
        </div>
      </section>
    </main>
  )
}
