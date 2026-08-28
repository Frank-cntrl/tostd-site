import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-display text-6xl text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl text-white">Page not found</h1>
      <Link
        to="/"
        className="mt-8 rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </section>
  )
}
