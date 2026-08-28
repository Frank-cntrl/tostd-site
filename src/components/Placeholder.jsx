export default function Placeholder({ label = 'Image', ratio = 'aspect-video', className = '' }) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink ${className}`}
    >
      <span className="px-4 text-center text-xs uppercase tracking-widest text-neutral-600">
        {label}
      </span>
    </div>
  )
}
