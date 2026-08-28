import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { watch } = site

function Media({ film }) {
  if (film.format === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${film.youtubeId}`}
        title={`${film.title} — ${film.mediaLabel}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-video w-full rounded-md border border-edge"
      />
    )
  }
  return (
    <a
      href={film.url}
      target="_blank"
      rel="noreferrer"
      className="group flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-md border border-edge bg-surface p-8 text-center transition-colors hover:border-neutral-500"
    >
      <p className="font-display text-2xl text-white sm:text-3xl">{film.tagline}</p>
      <span className="border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent">
        Visit the {film.mediaLabel}
      </span>
    </a>
  )
}

export default function Watch() {
  return (
    <>
      <PageHeader eyebrow="Original Content" title="Watch" intro={watch.intro} />

      <section className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6">
        {watch.films.map((film) => (
          <div key={film.title} className="grid items-start gap-10 lg:grid-cols-2">
            <Media film={film} />
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {film.kind}
              </p>
              <h2 className="font-display text-3xl text-white sm:text-4xl">{film.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-400">{film.logline}</p>
            </div>
          </div>
        ))}

        {/* The Roll Up */}
        <div className="grid items-start gap-10 border-t border-edge pt-16 lg:grid-cols-2">
          <Placeholder label="The Roll Up — series art" ratio="aspect-video" />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Series · {watch.series.status}
            </p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{watch.series.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">{watch.series.blurb}</p>
          </div>
        </div>

        {/* Clips */}
        <div className="border-t border-edge pt-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            From the Live Shows
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Clips</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">
            {watch.clipsNote}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <Placeholder key={i} label={`Clip ${i + 1}`} ratio="aspect-video" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
