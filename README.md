# Kendra Johng — Desktop Portfolio

An interactive "desktop OS" portfolio (icons → draggable windows, a live menu
bar) in a lavender/pink theme, inspired by parinazkassemi.com. Built with
Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. See
`PRD.md` and `design.md` for the full spec this was built from.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces a production build;
`npm run lint` runs ESLint.

## What's built (Phase 1)

- A centered desktop layout: a persistent profile card (headshot, tagline,
  bio, "more about me" link) above a row of 4 icons (Resume, Projects,
  Substack, Not AI), all opening draggable, stackable, closable windows.
  About Me is reachable via the profile card's link rather than its own icon
  (matches the parinazkassemi.com reference — the persistent card already
  covers that role).
- Menu bar with a live clock, a live weather widget (Open-Meteo, no API key
  needed), and a static hobbies row.
- Mobile fallback: below 768px, icons open full-screen windows instead of
  small draggable ones.
- Keyboard support (Tab to an icon, Enter opens, Escape closes the focused
  window) and `prefers-reduced-motion` support.

**Not built yet: live multiplayer cursors.** That needs a realtime backend
(Liveblocks, PartyKit, Supabase Realtime, etc.), which means creating an
account and getting an API key — Kendra deferred this until she's picked a
service. Everything else here is pure front-end and deploys on its own.

## Placeholder checklist

Real content already in `lib/content.ts` (bio, job history, clients, work
samples). The following are placeholders and need to be swapped in before
this replaces the live site:

- `public/resume-placeholder.pdf` — replace with the real resume PDF (keep
  the filename or update `resumeFileUrl` in `lib/content.ts`).
- Headshot — `ProfileCard.tsx` and `AboutMeWindow.tsx` both currently show a
  "KJ" monogram instead of a photo.
- `currentProject` (Write Good) in `lib/content.ts` — has no URL yet (`#`);
  add the real link once it's live.
- `socialLinks` and `substackUrl` in `lib/content.ts` — all placeholder URLs
  (LinkedIn, GitHub, Instagram, Substack, email).
- `notAiItems` in `lib/content.ts` — sample slots only; needs real skate
  video/art links or embeds.
- `basedIn` in `lib/content.ts` — defaults to "Salt Lake City, Utah"; confirm
  this is OK to show publicly.

## Adding live cursors later

1. Pick a realtime service — Liveblocks (easiest, managed) or PartyKit
   (self-hosted on Cloudflare's free tier) both fit a low-traffic personal
   site.
2. Create an account and get an API key (or deploy a PartyKit worker).
3. Come back and ask for it to be wired into the desktop — cursor position +
   a color per session is the whole v1 scope, no personal data collected.
