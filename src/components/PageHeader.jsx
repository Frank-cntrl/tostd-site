export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-edge">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl text-white sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">{intro}</p>
        )}
      </div>
    </section>
  )
}
