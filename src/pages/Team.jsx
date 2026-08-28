import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { team } = site

export default function Team() {
  return (
    <>
      <PageHeader eyebrow="Our Team" title="The people behind the drop" intro={team.note} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="space-y-12">
          {team.members.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="grid items-start gap-8 border-t border-edge pt-8 sm:grid-cols-[180px_1fr]"
            >
              <Placeholder label="Photo" ratio="aspect-square" />
              <div>
                <h2 className="text-lg font-medium text-white">{m.name}</h2>
                <p className="text-xs uppercase tracking-widest text-neutral-500">{m.role}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
