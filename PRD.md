---
title: Kendra Johng — Desktop Portfolio PRD
status: draft
date: 2026-09-01
---

# PRD: Kendra Johng Desktop Portfolio

## 1. Summary

Rebuild kendrajohng.vercel.app as an interactive "desktop OS" portfolio, in the
style of [parinazkassemi.com](https://www.parinazkassemi.com): a skeuomorphic
desktop with clickable icons that open draggable popup windows, a top menu
bar with live widgets, and a playful, personal tone. The visual theme is a
lavender/pink gradient rather than the reference site's blue/butter-yellow,
and the feature set is trimmed to what fits Kendra's content and maintenance
appetite — no chess game, synthesizer, animated stickies wall, or Spotify
widget, but yes to a single retro theme, a weather widget, a custom hobbies
widget, and live multiplayer cursors.

The current site (kendrajohng.vercel.app) is a clean single-page resume site.
Its content — bio, experience, client list, work samples, and social links —
becomes the material that lives *inside* the new desktop's windows, rather
than being deleted.

## 2. Goals

- Replace the current scrolling single-page layout with an interactive
  desktop metaphor: wallpaper, arranged icons, a top menu bar, and windows
  that open, close, drag, and stack like a real OS.
- Preserve and re-present all real content from the current site (resume,
  experience, clients, work samples, contact/social links) inside the new
  windows — nothing gets lost, it just gets a new container.
- Add a "Not AI" folder/icon showcasing Kendra's skateboarding videos and
  original art, as proof of human-made, non-AI creative work — a distinct
  personal touch not present on the reference site.
- Add a hobbies widget (skateboarding, sewing, drawing, piano) in the menu
  bar, replacing the reference site's language-learning widget.
- Support live multiplayer cursors, so visitors can see other visitors'
  cursors on the desktop in real time, matching the reference site's most
  distinctive social feature.
- Ship a single cohesive visual theme (lavender/pink gradient) — no theme
  switcher.
- Deploy to the same kendrajohng.vercel.app Vercel project (or the new
  `kendrajohng/desktop` GitHub repo Kendra provided, which is currently
  empty).

## 3. Non-goals / explicitly out of scope

Based on Kendra's direction, the following reference-site features are
**excluded**:

- Chess minigame against the computer.
- Particle synthesizer sound toy.
- Animated/collaborative stickies wall (drag, emoji, pin, approve notes).
- "Now Playing" Spotify widget.
- Theme switcher / multiple color themes (New York vs. San Francisco, etc.).
- CSSDA-style awards badge row.
- Password-protected case studies flow (not applicable — Kendra's work
  samples are not access-gated today; revisit only if she asks for it later).

## 4. Reference site analysis (parinazkassemi.com)

Researched via the live site (source code was not directly accessible, so
some low-level implementation details — exact fonts, JS framework, realtime
backend — are inferred rather than confirmed):

- **Desktop icons** (8, grid-arranged): Case Studies, My Shelf, Chess,
  Synthesizer, Photographs, Resume, Stickies, Notebook. Each shows a small
  caption under the icon (e.g. "pdf · 2026", "books · films · music").
- **Window chrome**: vintage Mac OS-style windows — title bar with
  close/minimize/maximize controls, rounded corners, soft drop shadows,
  draggable by the title bar.
- **Menu bar** (top, left to right): clock, weather widget (location +
  temperature), "Now Playing" Spotify widget, a Duolingo-style language
  streak widget (🔥 day streak + flag + fluency level), and a row of award
  badges.
- **About Me popup**: circular headshot, name, title/tagline, a short bio
  line, a list of personal interests, mentions of side projects, social
  links (Instagram, LinkedIn, X), email, and a decorative lat/long
  coordinate string under the name.
- **Live multiplayer cursors**: other visitors' cursors are shown moving in
  real time, each presumably labeled or colored, reinforcing the sense of a
  shared "live" desktop.
- **Overall tone**: playful, personal, and a little irreverent — the desktop
  is presented as if it's genuinely Parinaz's own computer, not a portfolio
  template.

## 5. Current site inventory (kendrajohng.vercel.app)

Content confirmed from the live site, to be preserved and re-homed into the
new desktop's windows:

- **Bio**: "I help businesses achieve operational efficiency by optimizing
  workflow through effective documentation. I also skateboard and make art."
- **Experience**:
  - Vector Resources, Inc. (current) — Technical Proposal Writer for U.S.
    Government solicitations; also handles marketing materials and document
    administration.
  - Kentik — Senior Technical Writer; release notes, system overviews,
    instructions, portal structure articles.
  - U.S. EPA (via Systalex, 2021–2025) — public documents including release
    notes, CONOPS, and regulatory guidance.
- **Clients**: Vector Resources, NuWave Laser, a'lei beauty, Gilead, BSI
  Group, Western Growers, Kentik, EPA, Brown Girl Surf.
- **Work samples**: user manuals (NuWave Laser), SOPs (pharmacy, phlebotomy,
  SharePoint), marketing/PM documentation, GitHub contributions (UI/UX
  writing, user guides).
- **Social/contact links**: LinkedIn, GitHub, email, Instagram, Substack.

Exact copy, images, and file links should be pulled directly from the live
site (or from Kendra) during implementation rather than re-typed from this
summary.

## 6. Desktop icon map

| Icon | Opens | Content source |
|---|---|---|
| **Resume** | A window showing/embedding Kendra's resume (PDF viewer or styled HTML resume) with a download link. | Current resume file; confirm latest version with Kendra. |
| **Projects** | A window (or folder of sub-items) listing Kendra's technical writing work: user manuals, SOPs, marketing/PM docs, GitHub contributions, organized by client where useful. | Current "work samples" + client list content. |
| **About Me** | The About Me popup: headshot, name, title, bio, interests, links — styled after the reference's About Me popup but with Kendra's real bio and interests (skateboarding, art, and whatever else she wants listed). | Current bio + experience summary. |
| **Substack** | Either opens a window previewing/linking out to her Substack, or opens Substack directly in a new tab — needs a decision (see Open Questions). | Substack link from current site. |
| **Not AI** | A folder/window showcasing Kendra's skateboarding videos and original art — framed as proof of human-made, non-AI creative work. | New content Kendra will supply (video links/embeds, art images). |

Icons are arranged in a grid on the desktop, matching the reference site's
layout pattern, with a short caption under each icon name (e.g. "pdf ·
2026" style captions, reworded for Kendra's content).

## 7. Menu bar spec

Left to right:

1. **Clock** — current local time.
2. **Weather widget** — current conditions/temperature for a location (default
   location TBD with Kendra — likely wherever she's based).
3. **Hobbies widget** — replaces the reference's language-streak widget.
   Shows Kendra's hobbies: skateboarding, sewing, drawing, piano (icons or
   short labels, rotating or all visible — see design.md for layout).

No theme switcher, no Spotify "Now Playing," no awards row.

## 8. Live multiplayer cursors

Visitors' cursors are visible to each other in real time on the desktop,
each presumably distinguished by color and/or a small label. This requires
a realtime backend (the reference site's implementation isn't visible from
the outside, so we'll need to choose one):

- Options: a managed realtime/presence service (e.g. Liveblocks, PartyKit,
  Supabase Realtime, Ably, or Pusher) — most have a free tier sufficient for
  a personal portfolio's traffic.
- Scope for v1: cursor position + a color per session. Optional stretch:
  a name label if a visitor opts to enter one.
- Privacy note: no personal data is collected beyond an ephemeral session
  color/position; this should be stated briefly if we add any kind of
  footer/privacy note.

This is the single biggest technical lift in the project (everything else
is front-end only) and should be validated early — see Milestones.

## 9. Technical approach

The `kendrajohng/desktop` GitHub repo Kendra provided is currently empty, so
this will be a fresh build rather than an adaptation of existing code.
Proposed stack (to confirm with Kendra/whoever implements):

- **Framework**: Next.js (React), matching the current site's likely stack
  and Vercel's native deploy path.
- **Styling/animation**: Tailwind CSS + Framer Motion for window drag/open/
  close/minimize animations.
- **Realtime cursors**: one managed presence service (see §8).
- **Deployment**: Vercel, either replacing the current kendrajohng.vercel.app
  project or as a new project pointed at `kendrajohng/desktop`.
- **Content**: resume file, work-sample files/links, and Not-AI media
  (video/art) stored as static assets or linked externally (e.g. YouTube/
  Instagram embeds for skate videos).

## 10. Success criteria

- All content currently on kendrajohng.vercel.app is reachable somewhere in
  the new desktop (no dead ends, nothing silently dropped).
- Every icon in §6 opens a working window with real content, not
  placeholder text.
- Menu bar shows live clock, live weather, and the hobbies widget.
- Multiple simultaneous visitors can see each other's cursors moving.
- The whole experience uses one consistent lavender/pink theme (see
  design.md) — no leftover blue/yellow reference-site colors.
- Site is usable (even if simplified) on mobile/small screens — see Open
  Questions.

## 11. Open questions

- **Mobile behavior**: a draggable-window desktop metaphor doesn't translate
  directly to a phone screen. Do we (a) build a simplified mobile fallback
  (e.g. icons open full-screen views instead of draggable windows), or (b)
  show a "best viewed on desktop" message on small screens? Recommend (a)
  for reach, but this is Kendra's call.
- **Substack icon behavior**: open a window with an embedded/linked preview,
  or just open Substack in a new tab? Recommend a simple window with a
  "read on Substack" link plus a couple of embedded recent posts if
  Substack's embed supports it.
- **Not AI content**: what specific videos/art should populate this folder,
  and in what format (uploaded files vs. links to existing Instagram/
  YouTube posts)?
- **Weather widget location**: what city/location should it default to?
- **Realtime service choice**: needs a decision once we check current
  pricing/limits of Liveblocks vs. PartyKit vs. Supabase Realtime vs. Ably
  for a low-traffic personal site.
- **Repo/deploy access**: the `kendrajohng/desktop` repo is empty and I
  don't currently have push access to it — Kendra will need to either grant
  access or pull the finished code and push it herself.

## 12. Milestones (proposed)

1. Validate the realtime-cursors approach with a minimal proof of concept
   (this is the highest-risk piece).
2. Build the static desktop shell: wallpaper, icon grid, menu bar (clock +
   weather + hobbies widget), window chrome (open/close/drag/minimize).
3. Wire up each window's real content (Resume, Projects, About Me,
   Substack, Not AI).
4. Add live cursors.
5. Mobile fallback pass.
6. Content review with Kendra, polish, deploy.
