import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { site } from '../content/site'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo-badge.png" alt="" className="h-8 w-8 rounded-full" />
          <span className="font-display text-lg sm:text-xl text-white tracking-widest uppercase whitespace-nowrap">
            The One Stop Drop
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {site.nav.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : 'text-neutral-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{ color: 'white', display: { md: 'none' } }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </nav>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#0a0a0a', backgroundImage: 'none' } }}
      >
        <div className="flex items-center justify-between border-b border-edge px-4 py-3">
          <span className="font-display tracking-widest uppercase text-white">TOST'D</span>
          <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {site.nav.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded px-3 py-2.5 text-sm tracking-wide transition-colors hover:bg-surface ${
                  isActive ? 'text-accent' : 'text-neutral-200'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  )
}
