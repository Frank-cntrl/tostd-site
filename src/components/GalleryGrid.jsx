import { useCallback, useEffect, useState } from 'react'

const COUNT = 54
const ids = Array.from({ length: COUNT }, (_, i) => `g${String(i + 1).padStart(2, '0')}`)

export default function GalleryGrid({ limit }) {
  const [open, setOpen] = useState(null)
  const shown = limit ? ids.slice(0, limit) : ids
  const prev = useCallback(() => setOpen((i) => (i + COUNT - 1) % COUNT), [])
  const next = useCallback(() => setOpen((i) => (i + 1) % COUNT), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, prev, next])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((id, i) => (
          <button
            key={id}
            type="button"
            onClick={() => setOpen(i)}
            className="cursor-zoom-in transition-opacity hover:opacity-75"
            aria-label={`Enlarge gallery photo ${i + 1}`}
          >
            <img
              src={`/photos/gallery/thumbs/${id}.jpg`}
              alt={`Gallery photo ${i + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-12"
          onClick={() => setOpen(null)}
        >
          <img
            src={`/photos/gallery/${ids[open]}.jpg`}
            alt={`Gallery photo ${open + 1}`}
            className="max-h-full max-w-full rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-3xl text-white transition-colors hover:text-accent sm:left-4"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-3xl text-white transition-colors hover:text-accent sm:right-4"
          >
            ›
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1.5 text-lg text-white transition-colors hover:text-accent"
          >
            ✕
          </button>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs tracking-widest text-neutral-400">
            {open + 1} / {COUNT}
          </span>
        </div>
      )}
    </>
  )
}
