import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { events } = site

export default function Events() {
  return (
    <>
      <PageHeader eyebrow="Calendar" title="Events" intro={events.intro} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="space-y-14">
          {events.list.map((e) => (
            <div key={e.id} className="grid items-start gap-8 border-t border-edge pt-8 lg:grid-cols-[2fr_3fr]">
              {e.image ? (
                <img
                  src={e.image}
                  alt={e.title}
                  className="aspect-video w-full rounded-md object-cover"
                />
              ) : (
                <Placeholder label={`${e.kind} — event photo`} ratio="aspect-video" />
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {e.kind} · {e.date}
                </p>
                <h2 className="mt-2 font-display text-2xl text-white sm:text-3xl">{e.title}</h2>
                <p className="mt-1 text-sm text-neutral-500">{e.venue}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
                  {e.blurb}
                </p>
                <span className="mt-5 inline-block border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent">
                  Tickets coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
