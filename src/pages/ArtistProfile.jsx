import { Link, useParams } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { artists } from '../data/artists'
import NotFound from './NotFound'

function Section({ title, children }) {
  return (
    <div className="border-t border-edge pt-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default function ArtistProfile() {
  const { id } = useParams()
  const artist = artists.find((a) => a.id === id)
  if (!artist) return <NotFound />

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Link
        to="/artists"
        className="text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-accent"
      >
        ← All artists
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <Placeholder label={`${artist.discipline} — portrait`} ratio="aspect-[4/5]" />
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {artist.discipline} · {artist.tag}
            </p>
            <h1 className="mt-2 font-display text-4xl text-white sm:text-5xl">{artist.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400">
              {artist.bio}
            </p>
          </div>

          {artist.works.length > 0 && (
            <Section title={artist.discipline === 'Music' ? 'Music for Sale' : 'Works for Sale'}>
              <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {artist.works.map((w) => (
                  <div key={w.title}>
                    <Placeholder
                      label={artist.discipline === 'Music' ? 'Cover art' : 'Artwork'}
                      ratio="aspect-square"
                    />
                    <p className="mt-3 text-sm text-white">{w.title}</p>
                    <p className="text-xs text-neutral-500">{w.kind}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-neutral-300">{w.price}</span>
                      <span className="border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-widest text-accent">
                        Inquire
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {artist.shows.length > 0 && (
            <Section title="Upcoming Shows">
              <div className="max-w-2xl">
                {artist.shows.map((s) => (
                  <div key={`${s.title}-${s.date}`} className="border-t border-edge py-4">
                    <p className="text-xs uppercase tracking-widest text-neutral-500">{s.date}</p>
                    <p className="mt-1 text-sm text-white">{s.title}</p>
                    <p className="text-xs text-neutral-500">{s.venue}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section title="Contact">
            <div className="space-y-1 text-sm text-neutral-300">
              <p>{artist.contact.email}</p>
              <p className="text-neutral-500">{artist.contact.instagram}</p>
            </div>
          </Section>
        </div>
      </div>
    </section>
  )
}
