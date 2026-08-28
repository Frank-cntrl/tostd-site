import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { artists, disciplines } from '../data/artists'

export default function Artists() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? artists : artists.filter((a) => a.discipline === filter)

  return (
    <>
      <PageHeader
        eyebrow="The Roster"
        title="Artists"
        intro="Fine artists, comedians, and musicians of the TOST'D network — each with a personalized introduction from our founder. Select artists will replace these placeholders as the roster is confirmed."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-10 flex flex-wrap gap-6 border-b border-edge pb-4">
          {['All', ...disciplines].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`text-sm tracking-wide transition-colors ${
                filter === d ? 'text-accent' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <Link key={a.id} to={`/artists/${a.id}`} className="group">
              <Placeholder label={`${a.discipline} — photo`} ratio="aspect-[4/5]" />
              <p className="mt-3 text-sm text-white transition-colors group-hover:text-accent">
                {a.name}
              </p>
              <p className="text-xs text-neutral-500">
                {a.discipline} · {a.tag}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
