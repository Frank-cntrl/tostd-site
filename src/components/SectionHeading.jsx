export default function SectionHeading({ eyebrow, children }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-white sm:text-4xl">{children}</h2>
    </div>
  )
}
