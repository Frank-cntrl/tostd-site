import PageHeader from '../components/PageHeader'
import GalleryGrid from '../components/GalleryGrid'
import { site } from '../content/site'

const { about } = site

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Rooted in NYC Art & Culture" intro={about.lead} />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        {about.history.map((h) => (
          <div key={h.title} className="border-t border-edge py-10 first:border-t-0 first:pt-0">
            <h2 className="font-display text-2xl text-white sm:text-3xl">{h.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-400">
              {h.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* From the galleries */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="mb-8 font-display text-3xl text-white sm:text-4xl">From the galleries</h2>
          <GalleryGrid />
        </div>
      </section>

      {/* Ethos */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          {about.ethos.quotes.map((q) => (
            <blockquote key={q.attribution} className="mb-10">
              <p className="font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
                “{q.text}”
              </p>
              <cite className="mt-3 block text-xs uppercase tracking-widest text-neutral-500 not-italic">
                — {q.attribution}
              </cite>
            </blockquote>
          ))}
          <p className="mt-14 text-base text-neutral-300">{about.ethos.closing}</p>
        </div>
      </section>
    </>
  )
}
