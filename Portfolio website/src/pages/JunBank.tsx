import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import JunBankCover from '../components/JunBankCover'
import onboardingFlow from '../assets/jun-bank-onboarding-flow-revised.png'
import sendMoneyFlow from '../assets/jun-bank-send-money-flow.png'
import wireframesOne from '../assets/jun-bank-wireframes-01.png'
import wireframesTwo from '../assets/jun-bank-wireframes-02.png'
import colorsAndTokens from '../assets/jun-bank-colors-tokens.png'
import typographyScale from '../assets/jun-bank-typography-scale.png'
import buttonsAndStates from '../assets/jun-bank-buttons-states.png'
import inputFields from '../assets/jun-bank-input-fields.png'
import cardsAndContainers from '../assets/jun-bank-cards-containers.png'
import navigationPatterns from '../assets/jun-bank-navigation.png'
import iconSet from '../assets/jun-bank-icons.png'
import feedbackAndStatus from '../assets/jun-bank-feedback-status.png'
import onboardingKeyScreen from '../assets/jun-bank-key-onboarding.png'
import dashboardKeyScreen from '../assets/jun-bank-key-dashboard.png'
import sendMoneyKeyScreen from '../assets/jun-bank-key-send-money.png'

const ACCENT = '#0000FF'

const componentLibraryImages: Record<string, { src: string; alt: string }> = {
  'Colors & tokens': {
    src: colorsAndTokens,
    alt: 'Jun Bank colors and design tokens',
  },
  'Typography scale': {
    src: typographyScale,
    alt: 'Jun Bank typography scale',
  },
  'Buttons & states': {
    src: buttonsAndStates,
    alt: 'Jun Bank buttons and interaction states',
  },
  'Input fields': {
    src: inputFields,
    alt: 'Jun Bank input fields and validation states',
  },
  'Cards & containers': {
    src: cardsAndContainers,
    alt: 'Jun Bank cards and container patterns',
  },
  Navigation: {
    src: navigationPatterns,
    alt: 'Jun Bank mobile navigation patterns',
  },
  Icons: {
    src: iconSet,
    alt: 'Jun Bank functional icon set',
  },
  'Feedback & status': {
    src: feedbackAndStatus,
    alt: 'Jun Bank feedback and transaction status patterns',
  },
}

const keyScreens = [
  {
    label: 'Onboarding',
    src: onboardingKeyScreen,
    alt: 'Jun Bank Smart Bills and Top-ups onboarding screen',
  },
  {
    label: 'Dashboard / Home',
    src: dashboardKeyScreen,
    alt: 'Jun Bank home dashboard screen',
  },
  {
    label: 'Send money flow',
    src: sendMoneyKeyScreen,
    alt: 'Jun Bank send money screen',
  },
]

const sections = [
  {
    n: '01',
    title: 'Overview',
    body: `Jun Bank is a mobile banking product designed to make everyday financial interactions — sending money, checking balances, managing cards and tracking spending — feel simple and accessible. The project was designed as part of the Jun Academy Design Bootcamp with a focus on clear information hierarchy, accessible flows and a modern interface for a Nigerian financial audience.`,
  },
  {
    n: '02',
    title: 'The Problem',
    body: `Mobile banking in Nigeria is often complex, cluttered and intimidating — particularly for users who are new to digital financial products. Forms are long, flows are unclear and the visual design of many banking apps creates anxiety rather than confidence. Jun Bank set out to challenge that by designing a product that prioritises clarity and ease above all else.`,
  },
  {
    n: '03',
    title: 'Research',
    body: `Research focused on understanding how users currently interact with mobile banking products, what creates confusion or hesitation, and what features they rely on most. This included reviewing existing Nigerian fintech apps, mapping common user frustrations and identifying the core tasks users need to complete with confidence.`,
  },
  {
    n: '04',
    title: 'User Flow',
    body: `The user flow maps the complete journey from onboarding through core banking tasks — account creation, home dashboard, send money, receive money, transaction history and card management. Every screen was mapped before any visual design began.`,
  },
  {
    n: '05',
    title: 'Wireframes',
    body: `Low and mid-fidelity wireframes were created for all core screens. The wireframe phase focused entirely on layout, hierarchy and flow — stripping away visual decisions to test the structure of the experience first.`,
  },
  {
    n: '06',
    title: 'Design System',
    body: `A component-based design system was built for Jun Bank covering typography, color, buttons, input fields, cards, navigation components, states and icons. The system ensures consistency across all screens and makes future iterations easier to manage.`,
  },
  {
    n: '07',
    title: 'Interface Design',
    body: `The final interface uses a clean red, white and gray palette to create a confident, modern banking experience. Typography is clear and structured. Every screen was designed with mobile-first considerations and accessibility in mind.`,
  },
  {
    n: '08',
    title: 'Reflection',
    body: `Jun Bank taught me that good financial design is about managing trust. Every visual decision — from button labels to error states — either builds or erodes user confidence. I learned to think about design at the level of the decision, not just the screen. If I were to take this further, I'd invest more deeply in accessibility research and edge-case states.`,
  },
]

export default function JunBank() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-0">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-6"
            style={{ color: ACCENT, fontFamily: 'var(--font-dm-mono)' }}
          >
            Fintech / Mobile Banking
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <h1
              className="md:col-span-8 text-[clamp(3rem,7vw,7.5rem)] font-light tracking-[-0.03em] leading-[0.95]"
              style={{ fontFamily: 'var(--font-fraunces)', color: ACCENT }}
            >
              Jun Bank
            </h1>
            <div className="md:col-span-3 md:col-start-10 pb-2">
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                A modern mobile banking experience designed around simple, accessible and useful everyday financial interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        <JunBankCover aspectRatio="21/9" />
      </section>

      {/* Project meta */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Project', value: 'Jun Academy Bootcamp' },
            { label: 'Year', value: '2025' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="py-6 px-4 first:pl-0 border-r last:border-r-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-[11px] tracking-widest uppercase mb-2" style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}>
                {label}
              </p>
              <p className="text-[14px] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <ProjectSection
          key={section.n}
          section={section}
          accent={ACCENT}
          showImages={[3, 4, 5, 6].includes(i)}
          imageCount={section.n === '06' ? 4 : section.n === '07' ? 6 : 2}
          imageLabel={section.title}
          firstImage={
            section.n === '04'
              ? onboardingFlow
              : section.n === '05'
                ? wireframesOne
                : undefined
          }
          secondImage={
            section.n === '04'
              ? sendMoneyFlow
              : section.n === '05'
                ? wireframesTwo
                : undefined
          }
          imageAspect={section.n === '05' ? '1306/894' : '1306/1788'}
        />
      ))}

      {/* Design system components */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div
          className="border-t pt-12"
          style={{ borderColor: 'var(--border)' }}
        >
          <p
            className="text-[11px] tracking-widest uppercase mb-3"
            style={{ color: ACCENT, fontFamily: 'var(--font-dm-mono)' }}
          >
            06 — Design System
          </p>
          <h2
            className="text-[clamp(1.8rem,3vw,3rem)] font-light tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Component library
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Colors & tokens', 'Typography scale', 'Buttons & states', 'Input fields', 'Cards & containers', 'Navigation', 'Icons', 'Feedback & status'].map((label) => {
              const image = componentLibraryImages[label]

              return image ? (
                <div
                  key={label}
                  className="p-2 border"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  key={label}
                  label={label}
                  aspectRatio="1"
                  accentColor={ACCENT}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Interface gallery */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="border-t pt-12" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-3"
            style={{ color: ACCENT, fontFamily: 'var(--font-dm-mono)' }}
          >
            07 — Interface Design
          </p>
          <h2
            className="text-[clamp(1.8rem,3vw,3rem)] font-light tracking-[-0.02em] mb-8"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Key screens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyScreens.map((screen) => (
              <div
                key={screen.label}
                className="p-3 md:p-4 border"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full object-cover"
                  style={{ aspectRatio: '402/874' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next project CTA */}
      <NextProject
        accent={ACCENT}
        to="/work/shiftgrid"
        label="Next project"
        name="ShiftGrid"
        category="Healthcare / Productivity"
      />
    </main>
  )
}

function ProjectSection({
  section,
  accent,
  showImages = false,
  imageCount = 2,
  imageLabel = '',
  firstImage,
  secondImage,
  imageAspect = '1306/1788',
}: {
  section: { n: string; title: string; body: string }
  accent: string
  showImages?: boolean
  imageCount?: number
  imageLabel?: string
  firstImage?: string
  secondImage?: string
  imageAspect?: string
}) {
  if (section.n === '06' || section.n === '07') return null
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-12 md:pb-16">
      <div className="border-t pt-12" style={{ borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p
              className="text-[11px] tracking-widest uppercase sticky top-24"
              style={{ color: accent, fontFamily: 'var(--font-dm-mono)' }}
            >
              {section.n} — {section.title}
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-[16px] leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
              {section.body}
            </p>
            {showImages && (
              <div className={`grid grid-cols-1 ${imageCount > 2 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-4`}>
                {Array.from({ length: imageCount }).map((_, i) => (
                  (firstImage && i === 0) || (secondImage && i === 1) ? (
                    <div
                      key={i}
                      className="p-3 md:p-4 border"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
                    >
                      <img
                        src={i === 0 ? firstImage : secondImage}
                        alt={
                          section.n === '05'
                            ? i === 0
                              ? 'Jun Bank introductory mid-fidelity wireframes'
                              : 'Jun Bank account access mid-fidelity wireframes'
                            : i === 0
                              ? 'Jun Bank onboarding user flow'
                              : 'Jun Bank send money user flow'
                        }
                        className="w-full object-cover"
                        style={{ aspectRatio: imageAspect }}
                      />
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="p-3 md:p-4 border"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
                    >
                      <ImagePlaceholder
                        label={`Jun Bank — ${imageLabel} ${i + 1}`}
                        aspectRatio={firstImage ? imageAspect : imageCount <= 2 ? '16/9' : '4/3'}
                        accentColor={accent}
                        style={{ border: 'none' }}
                      />
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function NextProject({
  to,
  label,
  name,
  category,
  accent,
}: {
  to: string
  label: string
  name: string
  category: string
  accent: string
}) {
  return (
    <section
      className="border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <Link
        to={to}
        className="group block max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20"
      >
        <p
          className="text-[11px] tracking-widest uppercase mb-4"
          style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
        >
          {label}
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[13px] mb-2" style={{ color: 'var(--muted-foreground)' }}>{category}</p>
            <h3
              className="text-[clamp(2.5rem,5vw,6rem)] font-light tracking-[-0.03em] leading-[1.0] transition-opacity duration-300 group-hover:opacity-60"
              style={{ fontFamily: 'var(--font-fraunces)', color: '#F4778C' }}
            >
              {name}
            </h3>
          </div>
          <span
            className="text-[clamp(2rem,4vw,4rem)] font-light transition-transform duration-300 group-hover:translate-x-3"
            style={{ color: accent, fontFamily: 'var(--font-fraunces)' }}
          >
            →
          </span>
        </div>
      </Link>
    </section>
  )
}
