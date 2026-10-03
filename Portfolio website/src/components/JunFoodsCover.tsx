import home from '../assets/junfoods-home.png'

interface JunFoodsCoverProps {
  aspectRatio?: string
  className?: string
}

export default function JunFoodsCover({
  aspectRatio = '16/9',
  className = '',
}: JunFoodsCoverProps) {
  return (
    <div
      className={`motion-cover relative w-full overflow-hidden border bg-black ${className}`}
      style={{ aspectRatio, borderColor: 'rgba(209,74,115,0.6)' }}
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[#D14A73]" />

      <div className="absolute inset-0 grid grid-cols-12 items-center">
        <div className="col-span-7 md:col-span-6 pl-6 pr-3 md:pl-12">
          <p className="text-[12px] md:text-[14px] font-medium mb-3" style={{ color: '#D14A73' }}>
            Food ordering / Delivery
          </p>
          <p className="text-[clamp(2rem,5vw,5.5rem)] font-medium tracking-[-0.05em] leading-[0.9]">
            Jun Foods
          </p>
          <p className="hidden sm:block mt-4 text-[13px] md:text-[15px] leading-relaxed max-w-[340px]" style={{ color: 'var(--muted-foreground)' }}>
            Discover, order and track food in one accessible experience.
          </p>
        </div>

        <div className="col-span-5 md:col-span-6 h-full relative overflow-hidden">
          <img
            src={home}
            alt="Jun Foods home and restaurant discovery screen"
            className="absolute h-[82%] w-auto max-w-none top-[8%] right-[12%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
