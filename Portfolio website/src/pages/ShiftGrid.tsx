import { Link } from 'react-router-dom'
import ShiftGridCover from '../components/ShiftGridCover'
import workerDashboard from '../assets/shiftgrid-worker-dashboard.png'
import requestSent from '../assets/shiftgrid-request-sent.png'
import swapApproved from '../assets/shiftgrid-swap-approved.png'
import notifications from '../assets/shiftgrid-notifications.png'
import profile from '../assets/shiftgrid-profile.png'
import requestPending from '../assets/shiftgrid-request-pending.png'
import requestNew from '../assets/shiftgrid-request-new.png'
import roster from '../assets/shiftgrid-roster.png'
import shiftDetails from '../assets/shiftgrid-shift-details.png'
import swapDetails from '../assets/shiftgrid-swap-details.png'
import requestsReceived from '../assets/shiftgrid-requests-received.png'
import requestsSent from '../assets/shiftgrid-requests-sent.png'
import swapShift from '../assets/shiftgrid-swap-shift.png'
import wellbeing from '../assets/shiftgrid-wellbeing.png'
import managerDashboard from '../assets/shiftgrid-manager-dashboard.png'
import managerPending from '../assets/shiftgrid-manager-pending.png'
import managerReview from '../assets/shiftgrid-manager-review.png'
import managerApproved from '../assets/shiftgrid-manager-approved.png'
import problemWorkflow from '../assets/shiftgrid-problem-workflow.png'
import problemThemes from '../assets/shiftgrid-problem-themes.png'
import interfaceStructure from '../assets/shiftgrid-interface-structure.png'

const ACCENT = '#F4778C'

const swapFlowScreens = [
  { src: swapShift, alt: 'ShiftGrid available colleagues for a shift swap' },
  { src: swapDetails, alt: 'ShiftGrid shift swap review' },
  { src: requestSent, alt: 'ShiftGrid swap request confirmation' },
  { src: requestsSent, alt: 'ShiftGrid sent swap requests' },
  { src: requestPending, alt: 'ShiftGrid pending swap request details' },
  { src: requestNew, alt: 'ShiftGrid new received swap request' },
  { src: requestsReceived, alt: 'ShiftGrid received swap requests' },
  { src: swapApproved, alt: 'ShiftGrid approved swap details' },
]

const workerScreens = [
  { src: workerDashboard, alt: 'ShiftGrid healthcare worker dashboard' },
  { src: roster, alt: 'ShiftGrid monthly roster' },
  { src: shiftDetails, alt: 'ShiftGrid shift details' },
  { src: notifications, alt: 'ShiftGrid notifications' },
  { src: wellbeing, alt: 'ShiftGrid wellbeing and rest tracking' },
  { src: profile, alt: 'ShiftGrid healthcare worker profile' },
]

const managerScreens = [
  { src: managerDashboard, alt: 'ShiftGrid manager dashboard' },
  { src: managerPending, alt: 'ShiftGrid manager pending requests' },
  { src: managerReview, alt: 'ShiftGrid manager swap request review' },
  { src: managerApproved, alt: 'ShiftGrid manager approved swap confirmation' },
]

export default function ShiftGrid() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-0">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p
            className="text-[11px] tracking-widest uppercase mb-6"
            style={{ color: ACCENT, fontFamily: 'var(--font-dm-mono)' }}
          >
            Healthcare / Productivity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <h1
              className="md:col-span-8 text-[clamp(3rem,7vw,7.5rem)] font-light tracking-[-0.03em] leading-[0.95]"
              style={{ fontFamily: 'var(--font-fraunces)', color: ACCENT }}
            >
              ShiftGrid
            </h1>
            <div className="md:col-span-3 md:col-start-10 pb-2">
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                A shift-management application designed to help healthcare workers organize shifts, manage swaps and keep track of rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        <ShiftGridCover aspectRatio="21/9" />
      </section>

      {/* Meta */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Tools', value: 'Figma, FigJam' },
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

      {/* 01 — Overview */}
      <ContentSection accent={ACCENT} n="01" title="Overview">
        <p className="text-[16px] leading-relaxed">
          ShiftGrid was developed as a Jun Academy Design Bootcamp project. It focuses on the challenges healthcare workers face with unpredictable schedules, shift swaps and limited rest. The goal was to design a product that helps healthcare teams manage their time with less friction and more clarity — so they can focus on patient care rather than administrative chaos.
        </p>
      </ContentSection>

      {/* 02 — The Problem */}
      <ContentSection accent={ACCENT} n="02" title="The Problem">
        <p className="text-[16px] leading-relaxed mb-6">
          Healthcare workers — nurses, doctors, support staff — often manage their shifts through disconnected channels: group chats, spreadsheets, paper schedules and informal arrangements. This creates miscommunication, missed swaps, burnout and staff scheduling gaps that affect patient care.
        </p>
        <p className="text-[16px] leading-relaxed">
          ShiftGrid was designed to consolidate scheduling, swap requests and rest tracking into a single, clear product that works for both individual workers and team administrators.
        </p>
        <div className="mt-8">
          <ScreenFrame>
            <img
              src={problemWorkflow}
              alt="Current healthcare shift scheduling workflow and breakdown points"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </ScreenFrame>
        </div>
      </ContentSection>

      {/* 03 — Target Users */}
      <ContentSection accent={ACCENT} n="03" title="Target Users">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              role: 'Healthcare Worker',
              desc: 'Nurses, doctors and support staff who need to view their schedule, request swaps, track rest hours and receive notifications about changes.',
            },
            {
              role: 'Shift Administrator',
              desc: 'Ward managers and scheduling coordinators who manage team rosters, approve swap requests and identify scheduling gaps.',
            },
          ].map(({ role, desc }) => (
            <div
              key={role}
              className="p-6 border"
              style={{ borderColor: 'var(--border)' }}
            >
              <p
                className="text-[11px] tracking-widest uppercase mb-3"
                style={{ color: ACCENT, fontFamily: 'var(--font-dm-mono)' }}
              >
                {role}
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 04 — Problem Framing */}
      <ContentSection accent={ACCENT} n="04" title="Problem Framing">
        <p className="text-[16px] leading-relaxed mb-8">
          The problem was framed around five qualitative themes: visibility, rest and wellbeing, communication, manager oversight and the different needs of workers and managers.
        </p>
        <ScreenFrame>
          <img
            src={problemThemes}
            alt="ShiftGrid qualitative problem-framing themes"
            className="w-full object-cover"
            style={{ aspectRatio: '4/3' }}
          />
        </ScreenFrame>
      </ContentSection>

      {/* 05 — User Flow */}
      <ContentSection accent={ACCENT} n="05" title="User Flow">
        <p className="text-[16px] leading-relaxed mb-8">
          The core worker journey moves from finding a compatible colleague through reviewing the exchange, sending the request, tracking its status and receiving approval.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {swapFlowScreens.map((screen) => (
            <ScreenFrame key={screen.alt}>
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full object-cover"
                style={{ aspectRatio: '402/874' }}
              />
            </ScreenFrame>
          ))}
        </div>
      </ContentSection>

      {/* 06 — Interface Structure */}
      <ContentSection accent={ACCENT} n="06" title="Interface Structure">
        <p className="text-[16px] leading-relaxed mb-8">
          This reconstructed structure study documents the hierarchy used across the final worker and manager interfaces. It is included as design-system documentation rather than presented as an original early-stage wireframe.
        </p>
        <ScreenFrame>
          <img
            src={interfaceStructure}
            alt="Reconstructed ShiftGrid interface structure study"
            className="w-full object-cover"
            style={{ aspectRatio: '1600/1100' }}
          />
        </ScreenFrame>
      </ContentSection>

      {/* 08 — Visual Design */}
      <ContentSection accent={ACCENT} n="07" title="Worker Experience">
        <p className="text-[16px] leading-relaxed mb-8">
          The worker experience brings roster planning, shift details, notifications, wellbeing and personal work information into one consistent mobile system.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {workerScreens.map((screen) => (
            <ScreenFrame key={screen.alt}>
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full object-cover"
                style={{ aspectRatio: '402/874' }}
              />
            </ScreenFrame>
          ))}
        </div>
      </ContentSection>

      {/* 09 — Key Screens */}
      <ContentSection accent={ACCENT} n="08" title="Manager Experience">
        <p className="text-[16px] leading-relaxed mb-8">
          The desktop manager experience provides an operational view of staffing, pending requests, fatigue risk and shift-swap approvals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {managerScreens.map((screen) => (
            <ScreenFrame key={screen.alt}>
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full object-cover"
                style={{ aspectRatio: '1488/1024' }}
              />
            </ScreenFrame>
          ))}
        </div>
      </ContentSection>

      {/* 11 — Reflection */}
      <ContentSection accent={ACCENT} n="09" title="Reflection">
        <p className="text-[16px] leading-relaxed mb-4">
          ShiftGrid challenged me to design for a high-stakes, high-stress environment where errors have real consequences. I learned that in products for professionals, clarity and speed are more important than visual elegance — and that edge cases like last-minute swaps and emergency shifts need to be designed for from the beginning.
        </p>
        <p className="text-[16px] leading-relaxed">
          Given more time, I would invest more heavily in user testing with real healthcare workers and explore how the administrator view could be expanded to handle more complex team structures.
        </p>
      </ContentSection>

      {/* Next project */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <Link
          to="/work/budgetbite"
          className="group block max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20"
        >
          <p
            className="text-[11px] tracking-widest uppercase mb-4"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-dm-mono)' }}
          >
            Next project
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[13px] mb-2" style={{ color: 'var(--muted-foreground)' }}>Food Ordering / Delivery</p>
              <h3
                className="text-[clamp(2.5rem,5vw,6rem)] font-light tracking-[-0.03em] leading-[1.0] transition-opacity duration-300 group-hover:opacity-60"
                style={{ fontFamily: 'var(--font-fraunces)', color: '#D14A73' }}
              >
                Jun Foods
              </h3>
            </div>
            <span
              className="text-[clamp(2rem,4vw,4rem)] font-light transition-transform duration-300 group-hover:translate-x-3"
              style={{ color: '#D14A73', fontFamily: 'var(--font-fraunces)' }}
            >
              →
            </span>
          </div>
        </Link>
      </section>
    </main>
  )
}

function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-3 md:p-4 border"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
    >
      {children}
    </div>
  )
}

function ContentSection({
  n,
  title,
  accent,
  children,
}: {
  n: string
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-12 md:pb-16">
      <div className="border-t pt-12" style={{ borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p
              className="text-[11px] tracking-widest uppercase md:sticky top-24"
              style={{ color: accent, fontFamily: 'var(--font-dm-mono)' }}
            >
              {n} — {title}
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5 text-[var(--muted-foreground)]">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
