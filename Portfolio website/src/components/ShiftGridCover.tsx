import dashboard from '../assets/shiftgrid-worker-dashboard.png'

interface ShiftGridCoverProps {
  aspectRatio?: string
  className?: string
}

export default function ShiftGridCover({
  aspectRatio = '16/9',
  className = '',
}: ShiftGridCoverProps) {
  return (
    <div
      className={`motion-cover relative w-full overflow-hidden border bg-black ${className}`}
      style={{ aspectRatio, borderColor: 'rgba(244,119,140,0.55)' }}
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[#F4778C]" />

      <div className="absolute inset-0 grid grid-cols-12 items-center">
        <div className="col-span-7 md:col-span-6 pl-6 pr-3 md:pl-12">
          <p className="text-[12px] md:text-[14px] font-medium mb-3" style={{ color: '#F4778C' }}>
            Healthcare / Shift management
          </p>
          <p className="text-[clamp(2rem,5vw,5.5rem)] font-medium tracking-[-0.05em] leading-[0.9]">
            ShiftGrid
          </p>
          <p className="hidden sm:block mt-4 text-[13px] md:text-[15px] leading-relaxed max-w-[340px]" style={{ color: 'var(--muted-foreground)' }}>
            Scheduling built around the realities of shift work.
          </p>
        </div>

        <div className="col-span-5 md:col-span-6 h-full relative overflow-hidden">
          <img
            src={dashboard}
            alt="ShiftGrid healthcare worker dashboard"
            className="absolute h-[82%] w-auto max-w-none top-[9%] right-[6%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
