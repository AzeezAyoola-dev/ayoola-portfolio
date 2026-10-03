import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import JunBankCover from '../components/JunBankCover'
import ShiftGridCover from '../components/ShiftGridCover'
import JunFoodsCover from '../components/JunFoodsCover'
import portrait from '../assets/azeez-ayoola-portrait.png'

const projects = [
  {
    number: '01',
    slug: 'jun-bank',
    name: 'Jun Bank',
    category: 'Fintech / Mobile Banking',
    description: 'A mobile banking product focused on making everyday financial tasks simple and accessible.',
    accent: '#0000FF',
    labelColor: '#0000FF',
  },
  {
    number: '02',
    slug: 'shiftgrid',
    name: 'ShiftGrid',
    category: 'Healthcare / Productivity',
    description: 'A shift-management product designed around the scheduling, shift-swapping and rest challenges faced by healthcare workers.',
    accent: '#F4778C',
    labelColor: '#F4778C',
  },
  {
    number: '03',
    slug: 'budgetbite',
    name: 'Jun Foods',
    category: 'Food Ordering / Delivery',
    description: 'A collaborative food-ordering product covering discovery, checkout, delivery tracking and feedback.',
    accent: '#D14A73',
    labelColor: '#D14A73',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-10 md:pt-28 md:pb-12 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Portrait */}
          <div className="order-2 md:col-span-5 md:col-start-8 md:row-start-1">
            <img
              src={portrait}
              alt="Portrait of Azeez Ayoola"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Identity */}
          <div className="order-1 md:col-span-6 md:col-start-1 md:row-start-1">
            <div>
              <h1
                className="text-[clamp(3.4rem,7vw,7.25rem)] leading-[0.9] font-medium tracking-[-0.055em] mb-8"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                AZEEZ
                <br />AYOOLA
              </h1>
              <p className="text-[clamp(1.2rem,1.8vw,1.75rem)] leading-[1.3] font-normal tracking-[-0.025em] max-w-[620px]">
                I design digital products around real problems.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: 'var(--border)' }}>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Product Designer
                <br />
                Lagos, Nigeria
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Developing my practice through
                <br />
                Jun Academy Design Bootcamp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background text-[14px] font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
              >
                View my work →
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border text-[14px] font-medium transition-all duration-200 hover:bg-foreground hover:text-background"
                style={{ borderColor: 'var(--foreground)', color: 'var(--foreground)' }}
              >
                About me →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 md:mt-16 flex items-center gap-3">
          <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--muted-foreground)' }} />
          <p className="text-[11px] tracking-widest uppercase" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
            Scroll to explore
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-12 pb-20 md:pt-16 md:pb-32">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-4 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.03em]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Selected work
          </h2>
          <p className="text-[14px] max-w-[360px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            A selection of products I've designed while exploring different problems, industries and user experiences.
          </p>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-0">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Brief about strip */}
      <section
        className="border-t border-b py-20 md:py-28"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--secondary)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p
                className="text-[11px] tracking-widest uppercase mb-6"
                style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
              >
                About
              </p>
              <h3 className="text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.15] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Building a design practice, one problem at a time.
              </h3>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end gap-6">
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                I'm Azeez Ayoola, a Product Designer based in Lagos, Nigeria. I focus on understanding real problems before reaching for solutions — through research, structured thinking and careful interface design.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                I'm currently developing my skills through the Jun Academy Design Bootcamp, where I've been working across fintech, healthcare and consumer products.
              </p>
              <Link
                to="/about"
                className="text-[14px] font-medium w-fit transition-opacity duration-200 hover:opacity-50"
                style={{ color: 'var(--foreground)' }}
              >
                Read more about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h3 className="text-[clamp(2rem,4vw,4rem)] font-light tracking-[-0.03em] leading-[1.0]" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Let's make something
            <br />
            <em>worth using.</em>
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-[14px] font-medium transition-opacity duration-200 hover:opacity-80 self-start md:self-auto shrink-0"
            style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  )
}

function ProjectRow({ project }: { project: typeof projects[0] }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block border-b py-10 md:py-14"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-start">
        {/* Number */}
        <div className="md:col-span-1">
          <span
            className="text-[11px] tracking-widest"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            {project.number}
          </span>
        </div>

        {/* Project image */}
        <div className="md:col-span-5 md:col-start-2 overflow-hidden">
          {project.slug === 'jun-bank' ? (
            <JunBankCover
              aspectRatio="4/3"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : project.slug === 'shiftgrid' ? (
            <ShiftGridCover
              aspectRatio="4/3"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : project.slug === 'budgetbite' ? (
            <JunFoodsCover
              aspectRatio="4/3"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <ImagePlaceholder
              label={`${project.name} — project visual`}
              aspectRatio="4/3"
              accentColor={project.accent}
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
        </div>

        {/* Project info */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-between h-full gap-6 md:pt-2">
          <div>
            <p
              className="text-[11px] tracking-widest uppercase mb-3"
              style={{ color: project.labelColor, fontFamily: 'var(--font-dm-mono)' }}
            >
              {project.category}
            </p>
            <h3
              className="text-[clamp(2.25rem,3.2vw,4.25rem)] font-medium tracking-[-0.04em] leading-[0.95] mb-5 transition-opacity duration-200 group-hover:opacity-70"
              style={{ fontFamily: 'var(--font-fraunces)', color: project.accent }}
            >
              {project.name}
            </h3>
            <p className="text-[14px] leading-relaxed max-w-[380px]" style={{ color: 'var(--muted-foreground)' }}>
              {project.description}
            </p>
          </div>
          <span
            className="text-[13px] font-medium flex items-center gap-2 w-fit transition-gap duration-200"
            style={{ color: 'var(--foreground)' }}
          >
            View project →
          </span>
        </div>
      </div>
    </Link>
  )
}
