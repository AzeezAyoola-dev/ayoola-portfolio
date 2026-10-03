import dashboard from '../assets/jun-bank-dashboard.png'

interface JunBankCoverProps {
  aspectRatio?: string
  className?: string
}

export default function JunBankCover({
  aspectRatio = '16/9',
  className = '',
}: JunBankCoverProps) {
  return (
    <div
      className={`motion-cover relative w-full overflow-hidden border bg-black ${className}`}
      style={{ aspectRatio, borderColor: 'rgba(0,0,255,0.55)' }}
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[#0000FF]" />

      <div className="absolute inset-0 grid grid-cols-12 items-center">
        <div className="col-span-7 md:col-span-6 pl-6 pr-3 md:pl-12">
          <p className="text-[12px] md:text-[14px] font-medium mb-3" style={{ color: '#0000FF' }}>
            Fintech / Mobile banking
          </p>
          <p className="text-[clamp(2rem,5vw,5.5rem)] font-medium tracking-[-0.05em] leading-[0.9]">
            Jun Bank
          </p>
          <p className="hidden sm:block mt-4 text-[13px] md:text-[15px] leading-relaxed max-w-[320px]" style={{ color: 'var(--muted-foreground)' }}>
            Everyday banking, made easier.
          </p>
        </div>

        <div className="col-span-5 md:col-span-6 h-full relative overflow-hidden">
          <img
            src={dashboard}
            alt="Jun Bank dashboard interface"
            className="absolute h-[88%] w-auto max-w-none top-[6%] right-[12%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
