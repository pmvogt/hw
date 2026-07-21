---
name: Hardwire
description: The harness for physical, real-world AI — deployment HUD on industrial amber.
colors:
  industrial-amber: "#e8a020"
  void-black: "#050505"
  console-card: "#0c0c0c"
  machine-ink: "#0a0a0a"
  phosphor-white: "#f2f2f0"
  border-hard: "#f2f2f0"
  border-muted: "#ffffff66"
  amber-soft: "#e8a02090"
typography:
  wordmark:
    fontFamily: "Motorblock, sans-serif"
    fontSize: "clamp(2rem, 2.8vw + 1rem, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.01em"
  tagline:
    fontFamily: "Geist Pixel Square, monospace"
    fontSize: "clamp(1.25rem, 2.4vw + 0.55rem, 2.35rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Geist Pixel Square, monospace"
    fontSize: "clamp(2rem, 4.2vw + 0.6rem, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.01em"
  title:
    fontFamily: "Geist Pixel Square, monospace"
    fontSize: "clamp(1.0625rem, 0.35vw + 0.9rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(0.9375rem, 0.2vw + 0.85rem, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(0.5625rem, 0.08vw + 0.52rem, 0.625rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  status: "9999px"
spacing:
  3xs: "0.125rem"
  2xs: "0.25rem"
  xs: "0.375rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2.5rem"
components:
  display-card:
    backgroundColor: "{colors.console-card}"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.none}"
    padding: "4px 6px"
  mission-console:
    backgroundColor: "#000000b3"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.none}"
    padding: "8px 16px 8px 12px"
  brand-bar:
    backgroundColor: "{colors.industrial-amber}"
    textColor: "{colors.machine-ink}"
    rounded: "{rounded.none}"
    padding: "0.875rem clamp(1rem, 2.24vw, 2.6875rem)"
  status-chip:
    backgroundColor: "#00000059"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
---

# Design System: Hardwire

## 1. Overview

**Creative North Star: "Deployment HUD"**

Hardwire's visual system is a soft-launch investor surface that must read in seconds as mission-grade physical AI infrastructure, not a product brochure. The page behaves like an operations console: black stage, instrumented density, industrial amber as the only saturated signal. Typography is pixel + mono instrumentation paired with a sharp Motorblock wordmark. Every surface should feel bolted on, evidence-first, and closer to Anduril / Palantir / defense-industrial systems than consumer SaaS.

Density is intentional. Prefer tight groupings and precise spacing over airy marketing whitespace. The amber brand bar is a committed drench at the base of the first viewport; the stage above stays void-black and instrumental. Depth comes from hard borders and tonal layering (void → console card → phosphor text), not soft shadows or glass stacks. Amber glow is reserved for acquire, focus, and active console states.

This system explicitly rejects soft SaaS marketing (purple gradients, rounded card grids, friendly illustrations), neon cyberpunk / Matrix cosplay, editorial magazine / Klim-specimen landing aesthetics, "AI wrapper" consumer product pages, and playful startup whimsy (emojis, pill clusters, stat strips in the hero).

**Key Characteristics:**
- Industrial amber drench on the brand bar; void-black stage everywhere else
- Hard edges (0 radius) on cards, bars, and chips; full borders, never soft chrome
- Motorblock wordmark + Geist Pixel Square titles + Geist Mono body/labels
- HUD density: compact orbit cards, edge-docked console, tight section rhythm
- Flat / tonal elevation; amber glow only as operational feedback

## 2. Colors

Committed strategy: one saturated amber carries identity; neutrals stay near-black with a slight warm phosphor text.

### Primary
- **Industrial Amber** (`#e8a020`): Brand drench on the footer bar, hub mark field, focus rings, status dots, acquire/radar accents, and active console borders. Rarity outside the drench is the point; on the stage it is a signal, not a wash.

### Neutral
- **Void Black** (`#050505`): Page and stage background. The field under the globe and summary sections.
- **Console Card** (`#0c0c0c`): Orbit display cards and dense instrument panels slightly lifted from the void.
- **Machine Ink** (`#0a0a0a`): Text and emblem on the amber brand bar (WCAG AA on amber).
- **Phosphor White** (`#f2f2f0`): Primary light text on dark surfaces. Not pure white.
- **Border Hard** (`#f2f2f0` at full or ~90%): Outer stroke on display cards.
- **Border Muted** (`#ffffff` at ~40%): Idle console edges and quieter dividers.

### Named Rules
**The Amber Signal Rule.** Industrial amber is identity on the brand bar and a sparse operational signal on the black stage. Never wash large dark regions in amber gradients or purple-indigo substitutes.

**The No Pure Black/White Rule.** Prefer void black and phosphor white over `#000` / `#fff` for large surfaces and body text. Selection may use mixed amber; UI chrome may use white opacity for borders only.

## 3. Typography

**Display Font:** Motorblock (with sans-serif fallback)
**Title Font:** Geist Pixel Square (with monospace fallback)
**Body / Label Font:** Geist Mono (with ui-monospace, monospace)

**Character:** American-machine sharpness for the wordmark; pixel instrumentation for titles and taglines; mono for evidence and labels. The trio should feel like a deployment rack readout, not a marketing specimen.

### Hierarchy
- **Wordmark** (Motorblock, `clamp(2rem, 2.8vw + 1rem, 3.5rem)`, lh 0.88): HARDWIRE hero brand on the amber bar. Never demote to nav-scale type.
- **Tagline** (Geist Pixel Square, `clamp(1.25rem, 2.4vw + 0.55rem, 2.35rem)`, lh 1.2): Locked line above the brand bar: "The harness for physical, real-world AI."
- **Headline** (Geist Pixel Square, `clamp(1.5rem, 2.1vw + 0.85rem, 2.35rem)`, lh 1.08): Summary section titles below the fold.
- **Title** (Geist Pixel Square, summary points `clamp(1.0625rem, 0.35vw + 0.9rem, 1.25rem)`; orbit cards stay on the smaller card-title token): Point labels and compact HUD headings.
- **Body** (Geist Mono regular, `clamp(0.9375rem, 0.2vw + 0.85rem, 1.0625rem)`, lh 1.6): Supporting copy. Cap measure near 58ch on summary prose.
- **Label** (Geist Mono, micro ~0.5625–0.6875rem, tracking 0.12–0.18em, often uppercase): Eyebrows, status, USE CASE metadata.

### Named Rules
**The Brand-First Rule.** On the first viewport, HARDWIRE must remain a hero-level signal. No headline may overpower the wordmark or amber bar.

**The Instrumentation Rule.** Prefer Pixel Square + Mono for UI chrome. Do not introduce Inter, Roboto, or editorial serifs.

## 4. Elevation

Flat by default. Depth is tonal: void black → console card → phosphor text, plus 1px hard borders. Soft multi-layer drop shadows for marketing cards are prohibited.

Amber glow (`box-shadow` with `rgba(232,160,32,…)`) is operational feedback only: hub presence, active mission console, radar acquire, focus-visible. It is not ambient decoration on every panel.

### Shadow Vocabulary
- **Acquire / Hub** (`0 0 14px` amber at ~35%): Harness hub presence on the globe.
- **Console Active** (`0 0 18px` amber at ~25%): Mission console when pressed/active.
- **Mission Overlay** (`0 0 80px` amber at ~22%): Rare, large glow on the Friendly Fleet sphere overlay only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. If a shadow appears without an active or focus state, remove it.

## 5. Components

Sparse and instrumental. Components are instruments bolted to the stage, not floating marketing modules.

### Buttons / Console Trigger
- **Shape:** Hard rectangle (0 radius). Mission console bleeds off the right edge (no right border).
- **Idle:** Black/70 fill, white/40 border, phosphor labels, amber standby dot.
- **Active:** Amber border + soft amber glow; status reads ACTIVE.
- **Focus:** 2px amber outline, offset 2px.

### Cards / Display Cards
- **Corner Style:** Sharp (0 radius)
- **Background:** Console card (`#0c0c0c`)
- **Border:** Hard phosphor/white stroke (~1px)
- **Internal Padding:** Tight (`4–8px`); sm ~6.5rem wide, md ~8.25rem
- **Typography:** Pixel Square title + Mono body
- **Rule:** Cards exist for interactive/instrument content (orbit nodes). Do not grid the hero with equal marketing cards.

### Chips / Tags
- **Style:** Hard border, black translucent fill, Mono tracking, no pills-as-decoration
- **Use:** Capability tags inside mission overlays (Comms, Sensors, Robots, …)

### Brand Bar
- **Background:** Full industrial amber drench
- **Content:** Motorblock HARDWIRE left; geometric emblem right
- **Mobile:** Content-driven height with ~0.875rem vertical padding; emblem ~2.25×2rem (smaller than desktop, never postage-stamp)
- **Desktop (`sm+`):** Taller bar via `min(14vh, 148px)` with larger emblem clamp

### Navigation
- No traditional top nav on this surface. Wayfinding is the stage instruments (orbit cards, mission console) plus scroll into summary sections.

### Signature: Harness Hub + Wireframe Globe
- Center aggregation point for comms, sensors, robots, compute, power, models
- Visual hierarchy must keep Hardwire as the deployment layer center, not a feature grid of equal cards

## 6. Do's and Don'ts

### Do:
- **Do** keep the first viewport as one composition: brand, tagline, amber drench, and the globe stage.
- **Do** use industrial amber as the committed identity color on the brand bar and as sparse HUD signals above it.
- **Do** use hard edges (0 radius) and full borders on cards and consoles.
- **Do** set body/label type in Geist Mono and titles in Geist Pixel Square; reserve Motorblock for HARDWIRE / mission display.
- **Do** respect `prefers-reduced-motion` for globe spin, ripple, and radar choreography.
- **Do** keep summary copy sparse, exact, and evidence-first (defense-industrial voice).

### Don't:
- **Don't** use soft SaaS marketing: purple gradients, rounded card grids, or friendly illustrations.
- **Don't** drift into neon cyberpunk / Matrix cosplay.
- **Don't** adopt editorial magazine / Klim-specimen landing aesthetics (display serif + hairline rules as the brand).
- **Don't** ship "AI wrapper" consumer product page patterns.
- **Don't** add playful startup whimsy: emojis, pill clusters, or stat strips in the hero.
- **Don't** place detached badges, promo stickers, or callout chips on top of hero media.
- **Don't** use side-stripe borders (`border-left` / `border-right` >1px) as a colored accent pattern; use full borders or leading numerals.
- **Don't** use gradient text, glassmorphism stacks, or multi-layer marketing shadows.
- **Don't** shrink the mobile emblem below ~2rem height or inflate the mobile brand bar with unnecessary `vh` padding.
