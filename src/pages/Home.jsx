import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'
import { artists } from '../data/artists'

const { brand, home, events } = site

export default function Home() {
  const featuredEvents = events.list.slice(0, 3)
  const featuredArtists = [artists[0], artists[3], artists[6]]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-edge">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,185,66,0.12), transparent)',
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-36">
          <img
            src="/logo-badge.png"
            alt="The One Stop Drop logo"
            className="mb-8 h-28 w-28 rounded-full sm:h-36 sm:w-36"
          />
          <h1 className="font-display text-4xl uppercase tracking-[0.15em] text-white sm:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-4 font-display text-lg italic text-accent sm:text-xl">
            {brand.tagline}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">
            {home.heroLead}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/events"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
            >
              Upcoming Events
            </Link>
            <Link
              to="/artists"
              className="rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
            >
              Meet the Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="The One Stop Drop">
          A platform for artists to shine
        </SectionHeading>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-neutral-400">
          {home.mission.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Featured events */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="On the Calendar">Upcoming events</SectionHeading>
          <div className="max-w-3xl">
            {featuredEvents.map((e) => (
              <div key={e.id} className="border-t border-edge py-5">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {e.kind} · {e.date}
                </p>
                <h3 className="mt-1 text-base font-medium text-white">{e.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{e.venue}</p>
              </div>
            ))}
          </div>
          <Link
            to="/events"
            className="mt-8 inline-block border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            Full calendar
          </Link>
        </div>
      </section>

      {/* Featured artists */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="The Roster">Featured artists</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-3">
            {featuredArtists.map((a) => (
              <Link key={a.id} to={`/artists/${a.id}`} className="group">
                <Placeholder label={`${a.discipline} — photo`} ratio="aspect-[4/5]" />
                <p className="mt-3 text-sm text-white transition-colors group-hover:text-accent">
                  {a.name}
                </p>
                <p className="text-xs text-neutral-500">{a.tag}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/artists"
            className="mt-8 inline-block border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            Full roster
          </Link>
        </div>
      </section>

      {/* Watch teaser */}
      <section className="border-t border-edge">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Watch">Documentaries, series & clips</SectionHeading>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
            {site.watch.intro}
          </p>
          <Link
            to="/watch"
            className="border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            Start watching
          </Link>
        </div>
      </section>
    </>
  )
}
