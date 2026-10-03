import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import JunBankCover from '../components/JunBankCover'
import ShiftGridCover from '../components/ShiftGridCover'
import JunFoodsCover from '../components/JunFoodsCover'

const projects = [
  {
    number: '01',
    slug: 'jun-bank',
    name: 'Jun Bank',
    category: 'Fintech / Mobile Banking',
    year: '2025',
    description: 'A mobile banking product focused on making everyday financial tasks simple and accessible. Designed as part of Jun Academy Design Bootcamp.',
    accent: '#0000FF',
  },
  {
    number: '02',
    slug: 'shiftgrid',
    name: 'ShiftGrid',
    category: 'Healthcare / Productivity',
    year: '2025',
    description: 'A shift-management application designed around the scheduling, shift-swapping and rest challenges faced by healthcare workers.',
    accent: '#F4778C',
  },
  {
    number: '03',
    slug: 'budgetbite',
    name: 'Jun Foods',
    category: 'Food Ordering / Delivery',
    year: '2025',
    description: 'A collaborative food-ordering application spanning restaurant discovery, checkout, delivery tracking and feedback.',
    accent: '#D14A73',
  },
]

export default function Work() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-6"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-6">
            <h1
              className="md:col-span-7 text-[clamp(3rem,7vw,7rem)] font-light tracking-[-0.03em] leading-[1.0]"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Selected
              <br />
              work
            </h1>
            <p className="md:col-span-4 md:col-start-9 text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Three products, three different problems, one growing design practice.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32">
        {projects.map((project) => (
          <WorkProjectItem key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}

function WorkProjectItem({ project }: { project: typeof projects[0] }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block mb-20 md:mb-28"
    >
      {/* Large visual */}
      <div className="overflow-hidden mb-6">
        {project.slug === 'jun-bank' ? (
          <JunBankCover
            aspectRatio="16/9"
            className="transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : project.slug === 'shiftgrid' ? (
          <ShiftGridCover
            aspectRatio="16/9"
            className="transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : project.slug === 'budgetbite' ? (
          <JunFoodsCover
            aspectRatio="16/9"
            className="transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <ImagePlaceholder
            label={`${project.name} — Replace with project cover image`}
            aspectRatio="16/9"
            accentColor={project.accent}
            className="transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span
              className="text-[11px] tracking-widest"
              style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
            >
              {project.number}
            </span>
            <span
              className="text-[11px] tracking-widest uppercase"
              style={{ color: project.accent, fontFamily: 'var(--font-dm-mono)' }}
            >
              {project.category}
            </span>
            <span
              className="text-[11px] tracking-widest"
              style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
            >
              {project.year}
            </span>
          </div>
          <h2
            className="text-[clamp(1.8rem,3vw,3.5rem)] font-light tracking-[-0.02em] leading-[1.0] mb-3 transition-opacity duration-200 group-hover:opacity-60"
            style={{ fontFamily: 'var(--font-fraunces)', color: project.accent }}
          >
            {project.name}
          </h2>
          <p className="text-[14px] leading-relaxed max-w-[480px]" style={{ color: 'var(--muted-foreground)' }}>
            {project.description}
          </p>
        </div>
        <span className="text-[13px] font-medium shrink-0 transition-opacity duration-200 group-hover:opacity-50">
          View project →
        </span>
      </div>
    </Link>
  )
}
