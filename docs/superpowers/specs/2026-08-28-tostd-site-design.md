# TOST'D Final-Form Site — Phase 1 Mock Design

**Date:** 2026-08-28
**Status:** Approved by user (split decision: this mock takes tostd.francces.co; the pitch deck moves to deck.francces.co; TOST'D branding)

## Purpose

Frontend-only mockup of what The One Stop Drop's real public site will be — a consumer-facing
site for audiences, artists, and partners (vs. the investor pitch deck, which is now a separate
site). Placeholder artists/images until the real roster and media package land.

## Stack & Hosting

Same as the deck site: Vite + React (JS), react-router-dom, Tailwind v4, MUI sparingly.
GitHub Pages via Actions from public repo `Frank-cntrl/tostd-site`, custom domain
**tostd.francces.co** (taken over from the deck repo). Dark editorial style per the
established design rules: hairline dividers, no tinted callout boxes, no numbered card
grids, restrained amber accent. Reuses the drop logo badge + favicons from the deck repo.

## Branding & Voice

- Name: **TOST'D** / "The One Stop Drop" wordmark
- Tagline: **"Learn to be limitless"**
- Ethos quotes: Rumi ("You are not a drop in the ocean. You are the entire ocean in a drop.")
  and Tupac ("Reality is wrong. Dreams are for real.")
- Copy cleaned of internal author notes and typos; substance faithful to the provided docs.

## Pages

1. **Home** (`/`) — hero (badge logo, wordmark, tagline), mission summary, featured
   upcoming events (3), featured artists strip, content teaser linking to Watch.
2. **Artists** (`/artists`) — roster directory with discipline filter (All / Fine Art /
   Comedy / Music); placeholder artist cards linking to profiles.
3. **Artist profile** (`/artists/:id`) — the marketplace view: portrait placeholder, bio
   placeholder ("Artist Bio" — personalized introductions from the founder), **works for
   sale** (artworks with prices, or music releases), **contact info**, **upcoming shows**.
4. **Events** (`/events`) — event listing mock: launch party, monthly comedy at The Stand
   (first show: Dave's Buds launch w/ The Flowery LES), music nights, "Death & Rebirth Walk
   Into A Bar" exhibition month with its cultural programming.
5. **Watch** (`/watch`) — content hub: Dom Irrera doc (YouTube teaser embed), Mentors
   (companion-site link), The Roll Up series pilot placeholder, clips grid placeholder.
6. **About** (`/about`) — mission statement + the full history: 2004 origins (comedy +
   cannabis delivery), 2010 Glasschord (100+ artists, 100 countries, Brandon Stanton
   interview), gallery era (Brian Morris Gallery / Midtown / Morris-Warren; 40+ exhibitions
   NYC, Brooklyn, Miami, Paris), 2017–present (first NYC Cannabis Comedy Club at The Huron
   Club, Soho Playhouse; "legalized cannabis within 100 yards of himself" in 2018), Huron
   Club history (Mayor Jimmy Walker's speakeasy, the original "one stop shop", Lenape →
   Washington → Burr → Tammany Hall → Elisabeth Irwin → Edward Albee), ethos (Rumi, Tupac).
7. **Team** (`/team`) — Brian D. Morris (CEO, bio TBD), Jesse LaVercombe (Director of
   Communications, full provided bio), Francesco Petta (Web Developer, bio TBD), plus
   placeholder slots.
8. 404 within layout.

## Data Model

- `src/content/site.js` — brand, nav, page copy.
- `src/data/artists.js` — placeholder roster: 9 artists (3 per discipline), each
  `{id, name, discipline, tag, bio, contact:{email, instagram}, works:[{title, kind, price}],
  shows:[{date, venue, title}]}`. Clearly placeholder names ("Featured Fine Artist I" etc.)
  so no real person is implied. Artist profile route reads from this module.

## Domain Migration (part of this project)

1. Deck repo: `public/CNAME` → `deck.francces.co`; Pages API cname → deck.francces.co.
2. This repo: Pages enabled, cname → tostd.francces.co (already has DNS pointing at GitHub).
3. User adds DNS: `CNAME deck → frank-cntrl.github.io`.

## Out of Scope (Phase 1)

Real commerce/checkout, real calendar backend, CMS, real artist data, search, auth.
Marketplace is visual mock only ("Inquire" mailto buttons, no cart).
