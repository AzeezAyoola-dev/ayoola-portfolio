interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: string
  className?: string
  style?: React.CSSProperties
  accentColor?: string
}

export default function ImagePlaceholder({
  label = 'Image placeholder',
  aspectRatio = '16/9',
  className = '',
  style = {},
  accentColor,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder w-full flex flex-col items-center justify-center relative ${className}`}
      style={{
        aspectRatio,
        backgroundColor: accentColor ? `${accentColor}12` : 'var(--muted)',
        borderColor: accentColor ? `${accentColor}30` : 'var(--border)',
        border: '1px solid',
        ...style,
      }}
    >
      {/* Label */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{
            color: accentColor || 'var(--muted-foreground)',
            fontFamily: 'var(--font-dm-mono)',
          }}
        >
          {label}
        </p>
      </div>
    </div>
  )
}
