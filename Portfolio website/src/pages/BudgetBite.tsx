import { Link } from 'react-router-dom'
import JunFoodsCover from '../components/JunFoodsCover'
import splashSolid from '../assets/junfoods-splash-solid.png'
import splashLogo from '../assets/junfoods-splash-logo.png'
import getStarted from '../assets/junfoods-get-started-clean.png'
import accessibility from '../assets/junfoods-accessibility.png'
import signUp from '../assets/junfoods-sign-up.png'
import signIn from '../assets/junfoods-sign-in.png'
import addressSearch from '../assets/junfoods-address-search.png'
import addressMap from '../assets/junfoods-address-map.png'
import home from '../assets/junfoods-home.png'
import search from '../assets/junfoods-search.png'
import searchCategories from '../assets/junfoods-search-categories.png'
import menu from '../assets/junfoods-menu.png'
import order from '../assets/junfoods-order.png'
import checkout from '../assets/junfoods-checkout.png'
import paymentMethod from '../assets/junfoods-payment-method.png'
import paymentConfirmed from '../assets/junfoods-payment-confirmed.png'
import trackingOne from '../assets/junfoods-tracking-01.png'
import trackingTwo from '../assets/junfoods-tracking-02.png'
import trackingThree from '../assets/junfoods-tracking-03.png'
import trackingFour from '../assets/junfoods-tracking-04.png'
import trackingFive from '../assets/junfoods-tracking-05.png'
import rateExperience from '../assets/junfoods-rate-experience.png'
import interfaceStructure from '../assets/junfoods-interface-structure.png'

const ACCENT = '#D14A73'

const entryScreens = [
  { src: splashSolid, alt: 'Jun Foods opening brand screen' },
  { src: splashLogo, alt: 'Jun Foods logo splash screen' },
  { src: getStarted, alt: 'Jun Foods get started screen' },
  { src: accessibility, alt: 'Jun Foods accessibility adjustments' },
  { src: signUp, alt: 'Jun Foods account creation screen' },
  { src: signIn, alt: 'Jun Foods sign in screen' },
]

const discoveryScreens = [
  { src: addressSearch, alt: 'Jun Foods address search' },
  { src: addressMap, alt: 'Jun Foods delivery and pickup address settings' },
  { src: home, alt: 'Jun Foods home and restaurant discovery' },
  { src: search, alt: 'Jun Foods food search' },
  { src: searchCategories, alt: 'Jun Foods cuisine categories' },
  { src: menu, alt: 'Jun Foods restaurant menu' },
]

const orderingScreens = [
  { src: order, alt: 'Jun Foods order review' },
  { src: checkout, alt: 'Jun Foods checkout' },
  { src: paymentMethod, alt: 'Jun Foods payment method selection' },
  { src: paymentConfirmed, alt: 'Jun Foods payment confirmation' },
]

const trackingScreens = [
  { src: trackingOne, alt: 'Jun Foods confirmed order tracking state' },
  { src: trackingTwo, alt: 'Jun Foods order processing tracking state' },
  { src: trackingThree, alt: 'Jun Foods order prepared tracking state' },
  { src: trackingFour, alt: 'Jun Foods delivery in progress tracking state' },
  { src: trackingFive, alt: 'Jun Foods completed delivery tracking state' },
  { src: rateExperience, alt: 'Jun Foods delivery experience rating' },
]

export default function BudgetBite() {
  return (
    <main className="pt-24 md:pt-32">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-b pb-12 md:pb-16" style={{ borderColor: 'var(--border)' }}>
          <p className="text-[13px] mb-6" style={{ color: ACCENT }}>
            Food ordering / Delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <h1
              className="md:col-span-8 text-[clamp(3rem,7vw,7.5rem)] font-medium tracking-[-0.04em] leading-[0.95]"
              style={{ color: ACCENT }}
            >
              Jun Foods
            </h1>
            <p className="md:col-span-3 md:col-start-10 text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              An accessible food-ordering experience spanning discovery, checkout, delivery tracking and feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        <JunFoodsCover aspectRatio="21/9" />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b" style={{ borderColor: 'var(--border)' }}>
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Team', value: '3 Product Designers' },
            { label: 'Tools', value: 'Figma, FigJam' },
            { label: 'Year', value: '2025' },
          ].map(({ label, value }) => (
            <div key={label} className="py-6 px-4 first:pl-0 border-r last:border-r-0" style={{ borderColor: 'var(--border)' }}>
              <p className="text-[13px] mb-2" style={{ color: 'var(--muted-foreground)' }}>{label}</p>
              <p className="text-[14px] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentSection n="01" title="Overview">
        <p className="text-[16px] leading-relaxed">
          Jun Foods is a mobile food-ordering product designed to help people discover nearby restaurants, choose delivery or pickup, complete payment, track an order and share feedback in one connected experience.
        </p>
      </ContentSection>

      <ContentSection n="02" title="Collaboration">
        <p className="text-[16px] leading-relaxed mb-5">
          Jun Foods was completed collaboratively by a team of three product designers. The project demonstrates my ability to contribute within a shared design process, work through decisions with teammates and help carry one product language across a large set of connected screens.
        </p>
        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
          Individual contribution details are intentionally kept broad here rather than assigning work that was completed collectively.
        </p>
      </ContentSection>

      <ContentSection n="03" title="Problem Framing">
        <p className="text-[16px] leading-relaxed mb-8">
          The product was framed around reducing friction across the full ordering journey while making accessibility, delivery context and order status visible throughout.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Discovery', 'Help people move from broad cuisine choices to a useful restaurant and menu quickly.'],
            ['Delivery context', 'Establish address, delivery or pickup, and timing before the user commits to an order.'],
            ['Checkout clarity', 'Keep order details, fees, payment choices and confirmation understandable.'],
            ['Confidence after payment', 'Show clear delivery progress and provide a direct path to feedback.'],
          ].map(([title, body]) => (
            <div key={title} className="p-6 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
              <p className="text-[16px] font-medium mb-3" style={{ color: ACCENT }}>{title}</p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{body}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection n="04" title="Interface Structure">
        <p className="text-[16px] leading-relaxed mb-8">
          This reconstructed structure study documents the hierarchy of the final home, address, menu and checkout layouts. It is not presented as an original early-stage wireframe.
        </p>
        <ScreenFrame>
          <img
            src={interfaceStructure}
            alt="Reconstructed Jun Foods interface structure study"
            className="w-full object-cover"
            style={{ aspectRatio: '1600/1100' }}
          />
        </ScreenFrame>
      </ContentSection>

      <ScreenGallery
        n="05"
        title="Entry & Access"
        description="Brand entry, accessibility preferences and account access establish the experience before ordering begins."
        screens={entryScreens}
      />

      <ScreenGallery
        n="06"
        title="Discovery & Address"
        description="Users can set their location, choose delivery or pickup, browse nearby options and move from search into a restaurant menu."
        screens={discoveryScreens}
      />

      <ScreenGallery
        n="07"
        title="Ordering & Payment"
        description="The ordering flow connects basket review, delivery details, payment selection and confirmation."
        screens={orderingScreens}
      />

      <ScreenGallery
        n="08"
        title="Tracking & Feedback"
        description="After payment, the experience communicates each delivery stage and closes the journey with a rating and feedback confirmation."
        screens={trackingScreens}
      />

      <ContentSection n="09" title="Reflection">
        <p className="text-[16px] leading-relaxed mb-5">
          Jun Foods reinforced that collaboration depends on consistency. With three designers contributing to one product, shared decisions around components, navigation, content and interaction patterns became as important as the individual screens.
        </p>
        <p className="text-[16px] leading-relaxed">
          The project also highlighted the importance of treating accessibility and post-purchase communication as part of the core journey rather than optional additions.
        </p>
      </ContentSection>

      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col md:flex-row justify-between gap-8">
          <Link to="/work" className="text-[14px] font-medium transition-opacity hover:opacity-50">
            ← Back to work
          </Link>
          <Link to="/work/jun-bank" className="group text-right">
            <p className="text-[13px] mb-2" style={{ color: 'var(--muted-foreground)' }}>Next project</p>
            <p className="text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.04em] transition-opacity group-hover:opacity-60" style={{ color: '#0000FF' }}>
              Jun Bank →
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}

function ContentSection({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-12 md:pb-16">
      <div className="border-t pt-12" style={{ borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <p className="md:col-span-3 text-[13px] md:sticky top-24 h-fit" style={{ color: ACCENT }}>
            {n} — {title}
          </p>
          <div className="md:col-span-8 md:col-start-5" style={{ color: 'var(--muted-foreground)' }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

function ScreenGallery({
  n,
  title,
  description,
  screens,
}: {
  n: string
  title: string
  description: string
  screens: Array<{ src: string; alt: string }>
}) {
  return (
    <ContentSection n={n} title={title}>
      <p className="text-[16px] leading-relaxed mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {screens.map((screen) => (
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
  )
}

function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 md:p-4 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
      {children}
    </div>
  )
}
