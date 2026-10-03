import { Link } from 'react-router-dom'
import portrait from '../assets/azeez-ayoola-portrait.png'

const tools = [
  'Figma', 'FigJam', 'Notion', 'Photoshop',
]

const skills = [
  'Product Design',
  'UX/UI Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Visual Design',
  'User Flows',
]

const learning = [
  'Advanced interaction design patterns',
  'Design tokens and component architecture',
  'Accessibility-first design',
  'Building a personal design voice',
]

const interests = [
  'Typography and editorial design',
  'African design culture and identity',
  'Fintech and consumer products',
  'Urban life and city infrastructure',
]

export default function About() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-6"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            About
          </p>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-light tracking-[-0.03em] leading-[1.0]"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            I'm Azeez
            <br />
            <em>Ayoola.</em>
          </h1>
        </div>
      </section>

      {/* Main about content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
          {/* Portrait */}
          <div className="md:col-span-4">
            <img
              src={portrait}
              alt="Portrait of Azeez Ayoola"
              className="w-full aspect-[3/4] object-cover object-center"
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6 justify-center">
            <p className="text-[18px] md:text-[22px] leading-relaxed font-light" style={{ fontFamily: 'var(--font-fraunces)' }}>
              I'm a Product Designer based in Lagos, Nigeria, developing my practice through the{' '}
              <em>Jun Academy Design Bootcamp</em>.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              My approach starts with understanding. Before opening Figma, I want to know who the people are, what problem they're actually facing, and what a useful solution would feel like for them. That means research, structure, and clear thinking before any visual decisions are made.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              I'm drawn to products that solve genuine everyday problems — the kind of digital experiences that feel obvious in hindsight but take real care to get right.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              I'm building a body of work across different industries while sharpening both my design process and my craft as a visual designer.
            </p>
          </div>
        </div>
      </section>

      {/* How I approach design */}
      <section
        className="border-t border-b py-16 md:py-24"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--secondary)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-widest uppercase mb-10"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            How I approach design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                title: 'Understand the problem',
                body: 'I start by listening. Research, user interviews, and clear problem framing come before any interface decisions. A well-defined problem is already half the solution.',
              },
              {
                n: '02',
                title: 'Structure the experience',
                body: 'Information architecture and user flows shape the experience before pixels do. I map how people move through a product before designing what they see.',
              },
              {
                n: '03',
                title: 'Refine through iteration',
                body: 'I move from rough wireframes to high-fidelity interfaces, testing assumptions at each stage and refining until the design is clear, usable and honest.',
              },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <p
                  className="text-[11px] tracking-widest mb-4"
                  style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
                >
                  {n}
                </p>
                <h3
                  className="text-[20px] font-light mb-3 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + Tools + Learning + Interests */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0">
          {/* Skills */}
          <div className="md:pr-16 md:border-r" style={{ borderColor: 'var(--border)' }}>
            <p
              className="text-[11px] tracking-widest uppercase mb-6"
              style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
            >
              Skills
            </p>
            <div className="flex flex-col gap-3">
              {skills.map(s => (
                <div
                  key={s}
                  className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-[14px]">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:pl-16">
            {/* Tools */}
            <div className="mb-12">
              <p
                className="text-[11px] tracking-widest uppercase mb-6"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
              >
                Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map(t => (
                  <span
                    key={t}
                    className="text-[13px] px-4 py-2 border"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="mb-12">
              <p
                className="text-[11px] tracking-widest uppercase mb-6"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
              >
                Currently learning
              </p>
              <div className="flex flex-col gap-2">
                {learning.map(l => (
                  <p key={l} className="text-[14px] leading-relaxed">
                    → {l}
                  </p>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p
                className="text-[11px] tracking-widest uppercase mb-6"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
              >
                Selected interests
              </p>
              <div className="flex flex-col gap-2">
                {interests.map(i => (
                  <p key={i} className="text-[14px] leading-relaxed">
                    → {i}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t py-16 md:py-24 px-6 md:px-10"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h3
            className="text-[clamp(1.8rem,3vw,3rem)] font-light tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Curious about my work?
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background text-[14px] font-medium transition-opacity duration-200 hover:opacity-80"
              style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
            >
              View projects →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border text-[14px] font-medium transition-all duration-200 hover:bg-foreground hover:text-background"
              style={{ borderColor: 'var(--foreground)', color: 'var(--foreground)' }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
