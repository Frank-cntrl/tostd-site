import { Link } from 'react-router-dom'
import { site } from '../content/site'

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-badge.png" alt="" className="h-8 w-8 rounded-full" />
              <span className="font-display text-lg text-white tracking-widest uppercase">
                {site.brand.name}
              </span>
            </div>
            <p className="mt-3 text-sm italic text-neutral-500">{site.brand.tagline}</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {site.nav.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-sm text-neutral-400 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-edge pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</span>
          <span>{site.footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
