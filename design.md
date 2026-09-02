---
title: Kendra Johng — Desktop Portfolio Design Spec
status: draft
date: 2026-09-01
companion: PRD.md
---

# Design Spec: Kendra Johng Desktop Portfolio

Companion to PRD.md. This document covers the visual language, layout, and
interaction detail needed to build the desktop UI. Where the reference site
(parinazkassemi.com) doesn't expose exact values (fonts, precise hex codes,
spacing), this spec proposes concrete defaults in the same spirit, tuned to
Kendra's lavender/pink direction — treat those as a starting point to
refine once real screens are in front of her.

## 1. Visual language

Retro Mac OS desktop, matched closely to the reference site's chrome and
structure, but reskinned into a single lavender/pink gradient theme instead
of the reference's blue/butter-yellow. No theme switcher — this is the one
and only look.

Overall tone: soft, warm, a little nostalgic, personal rather than
corporate — the desktop should feel like it's genuinely Kendra's computer.

## 2. Color palette

A lavender-to-pink gradient family, used for the wallpaper and as accent
colors throughout the chrome. Proposed starting values:

- **Wallpaper gradient**: `#E7D9F7` (soft lavender) → `#FBD8E8` (soft pink),
  diagonal gradient (135deg), similar in softness/brightness to the
  reference site's light neutral desktop background.
- **Window background**: near-white with a faint lavender tint, `#FAF7FC`.
- **Title bar gradient**: `#D8BFE8` → `#F3C6DE`.
- **Accent/primary** (buttons, links, active states): `#9B6DC9` (deeper
  lavender-purple).
- **Secondary accent** (highlights, badges): `#F49AC1` (rose pink).
- **Text**: near-black `#2B2230` for body copy (not pure black, to stay warm),
  muted plum-gray `#8A7A93` for captions/secondary text.
- **Window border/shadow**: soft shadow using a plum tone at low opacity
  (e.g. `rgba(107, 66, 122, 0.18)`), rather than a neutral gray shadow —
  keeps shadows feeling part of the palette rather than generic.

Traffic-light window controls (close/min/max) keep their familiar red/
yellow/green so they stay instantly recognizable, but slightly desaturated
to sit comfortably against the lavender/pink palette.

## 3. Typography

Reference site's exact fonts aren't confirmed from the outside. Proposed
stack, chosen for a rounded, friendly, slightly retro feel consistent with
the aesthetic described in research:

- **Primary UI font**: a rounded sans-serif such as "Quicksand," "Nunito,"
  or "Comfortaa" for headings/icon labels (pick one after a quick type
  test — Nunito is the safest default for legibility at small sizes).
- **Body/window content font**: a clean, legible sans such as "Inter" or
  "System UI" stack, so long-form content (resume, project descriptions)
  stays easy to read even though chrome/labels are more playful.
- **Menu bar font**: same as primary UI font, slightly smaller, medium
  weight.

## 4. Wallpaper

Full-bleed lavender-to-pink gradient (see palette). Optionally a very
subtle grain/texture overlay (low-opacity noise) to avoid a flat, purely
digital gradient look and nod to the reference site's "textured" wallpaper
feel. No wallpaper icons/pattern beyond the desktop icon grid itself.

## 5. Desktop icon grid

- Icons arranged in a single grid, anchored top-left (or top-right —
  confirm preference), matching the reference site's numbered-position
  layout.
- Each icon: square glyph/illustration (rounded corners, soft drop shadow),
  label below in the primary UI font, and a short italic caption below the
  label in the muted plum-gray color (mirroring the reference's "pdf ·
  2026" / "books · films · music" style captions).
- Five icons for v1 (per PRD §6): **Resume**, **Projects**, **About Me**,
  **Substack**, **Not AI**. Suggested captions:
  - Resume — "pdf · updated 2026"
  - Projects — "writing samples · case studies"
  - About Me — "the basics"
  - Substack — "notes & essays"
  - Not AI — "skate clips · original art"
- Icon illustrations should be custom-drawn or selected to match the
  rounded, soft aesthetic (not literal Mac OS icons) — e.g. a rolled resume
  scroll, a stack of folders, a smiley/portrait glyph, a quill or open
  notebook, a skateboard.
- Double-click (desktop) or single tap (mobile) opens the window.

## 6. Window chrome

- Rounded corners (~12–16px radius).
- Title bar: gradient fill (see palette), traffic-light controls at the
  left (macOS convention) or right (Windows convention) — recommend left
  to match the reference site's Mac OS inspiration.
- Title bar text: window name, centered, primary UI font, medium weight.
- Drop shadow: soft, diffuse, tinted plum (see palette) rather than flat
  gray, to keep the whole scene feeling like one cohesive palette.
- Body: near-white lavender-tinted background, generous padding, body font
  for content.
- Draggable by title bar; resizable optional for v1 (fixed reasonable
  default sizes per window type are fine to start).
- Open animation: scale-up + fade-in from the icon's position (~150–200ms
  ease-out). Close animation: reverse. Minimize: scale-down toward a (future)
  dock position or simply fade out if no dock exists in v1.
- Multiple open windows stack with a subtle z-index shadow increase on the
  active/focused window; clicking a window brings it to front.

## 7. Menu bar

Fixed to the top of the viewport, full width, translucent lavender-tinted
background (slight blur/backdrop-filter for a frosted-glass feel).

Layout, left to right:

- **Far left**: site "logo"/home glyph (optional — simple monogram or
  house/desktop icon) that could reset/declutter open windows when clicked.
- **Left-center**: clock, live, format TBD (12-hour recommended, e.g.
  "2:47 PM").
- **Right side**, grouped:
  - **Weather widget**: small weather glyph + temperature + location name
    (e.g. "☀️ 72° Denver" — confirm default location with Kendra).
  - **Hobbies widget**: a compact row of four small glyphs/labels for
    skateboarding, sewing, drawing, and piano — replacing the reference
    site's Duolingo-style language-streak widget. Treat these as a rotating
    "currently into" display or a static row; static row is simpler for v1.
    Suggested glyphs: skateboard, needle/thread, pencil, piano keys.

No Spotify widget, no awards badges, no theme switcher — menu bar stays
compact: logo, clock, weather, hobbies.

## 8. About Me popup

Structured after the reference site's About Me window, populated with
Kendra's real content:

- Circular headshot at top.
- Name: "Kendra Johng."
- Title/tagline line (short, e.g. "Technical Writer · 2026" or similar,
  to confirm exact phrasing with Kendra).
- Bio paragraph: her existing bio — "I help businesses achieve operational
  efficiency by optimizing workflow through effective documentation. I also
  skateboard and make art." — lightly edited for the new format if needed.
- Interests list: skateboarding, art, sewing, drawing, piano (reuse hobbies
  list for consistency with the menu bar widget).
- Social links row: LinkedIn, GitHub, Instagram, Substack, email — icon +
  label, opening in new tabs.
- Optional playful detail matching the reference's coordinate string: not
  required, but could add a small "based in [city]" line instead if Kendra
  wants a lighter personal touch without the reference site's literal
  lat/long gimmick.

## 9. Live multiplayer cursors

- Each visitor gets a randomly assigned cursor color from the accent
  palette (lavender/pink/rose family — e.g. cycle through 5–6 pre-picked
  accent shades so cursors stay visually consistent with the theme).
- Cursor shape: simple pointer/arrow shape with a small color-filled flag,
  no label by default (per PRD §8 v1 scope); optional name label as a
  stretch goal.
- Cursors render above all windows and the desktop, but should not block
  clicking through to icons/windows underneath.

## 10. Responsive/mobile

Recommended approach (pending Kendra's confirmation in PRD Open Questions):

- Below a set breakpoint (e.g. 768px), disable free dragging; tapping an
  icon opens its window full-screen (or near-full-screen with a close
  button) instead of a small draggable window.
- Menu bar collapses to just the clock and a single weather/hobbies toggle
  if space is tight, or stays as-is if it fits.
- Live cursors can be disabled on mobile (touch doesn't have a persistent
  cursor position) or simply not rendered for touch-only sessions.

## 11. Accessibility

- Maintain readable contrast for body text against the near-white window
  background even though chrome uses softer, lower-contrast lavender/pink
  tones — body copy should meet at least WCAG AA contrast.
- All windows/icons operable via keyboard (tab to icon, enter to open,
  escape to close) in addition to mouse/touch.
- Respect `prefers-reduced-motion` for window open/close/drag animations.
