# Noble Exterior Cleaning Services — Design Identity

> **Source:** https://nobleexteriorcleaningservices.co.uk/
> **Extracted:** 2026-08-17
> **Aesthetic:** Corporate (warm/earthy trade-services variant)
> **Stack detected:** WordPress + Astra theme + Elementor page builder (visible content is 100% Elementor-authored; Astra theme fonts are present in the CSS but overridden almost everywhere)

---

## Brand Personality

A trust-first, professional trade-services site for a UK exterior cleaning company. The palette is a single olive-gold hue family (`#ACAD28` → `#838433`) set against warm cream neutrals (`#FBFBF8`, `#FAF5E5`, `#F0E6C5`) rather than a cool corporate blue — this reads as premium/earthy/natural ("Noble") rather than techy. Typography is one geometric sans (Poppins) used for everything — headings, buttons, and body — giving a clean, modern, slightly upscale feel without variety or personality flourishes. Buttons are outline-style (transparent fill, olive-gold text + 1px border) rather than solid-fill CTAs, which is unusual for a lead-gen trade site and reinforces a restrained, premium tone over an aggressive sales one. Shape language leans soft: large 25–30px radii on cards and images, fully pill-shaped (999px) badges and carousel dots. Motion is understated — a single dominant `0.3s` background-color transition used almost everywhere, no custom easing curves, no bounce/spring. One bespoke dark component exists (a mobile testimonial carousel card, `#151B26` navy-black) that breaks from the light theme and even from Poppins, suggesting it was custom-coded rather than built in Elementor.

---

## Color System

### Core Palette

| Token | Hex | RGB | HSL | Semantic Role |
|-------|-----|-----|-----|---------------|
| `--color-primary` | #ACAD28 | rgb(172, 173, 40) | hsl(60, 62%, 42%) | Button text/icon/fill color, primary CTA identity |
| `--color-primary-dark` | #838433 | rgb(131, 132, 51) | hsl(61, 44%, 36%) | Button border, heading emphasis spans ("East Grinstead", "Services") |
| `--color-primary-light` | #E9EABE *(inferred tint)* | rgb(233, 234, 190) | hsl(61, 51%, 83%) | Tinted backgrounds, focus rings |
| `--color-secondary` | #909431 | rgb(144, 148, 49) | hsl(62, 50%, 39%) | Rating-badge pill background, active carousel-dot indicator |
| `--color-accent` | #FFB800 | rgb(255, 184, 0) | hsl(43, 100%, 50%) | Star-rating glyphs (★★★★★) — the only non-olive brand hue |

Note: three near-identical olive-gold values were found in source (`#ACAD28`, `#838433`/`#848433`, `#909431`) — these are treated as one brand hue at different tints rather than distinct colors. A genuine `primary-light` tint was not present in source CSS and has been mathematically derived; it is marked inferred.

### Neutral Scale

All 10 shades below are real values pulled directly from the site's CSS (Astra global colors + Elementor per-page CSS) — none are inferred.

| Token | Hex | Use |
|-------|-----|-----|
| `--color-neutral-50` | #FBFBF8 | Page / section background |
| `--color-neutral-100` | #FAF5E5 | Cream card & alternate-section background |
| `--color-neutral-200` | #F0E6C5 | Light gold-cream tint background, subtle dividers |
| `--color-neutral-300` | #D8DEE7 | Borders, dividers (cool light gray) |
| `--color-neutral-400` | #98A3B2 | Placeholder / muted meta text |
| `--color-neutral-500` | #646360 | Muted secondary text (Astra `--ast-global-color-0`) |
| `--color-neutral-600` | #4A4A4A | Secondary body text (Astra `--ast-global-color-3`) |
| `--color-neutral-700` | #3F3F3F | Primary paragraph text (actual `.elementor-heading-title` body color) |
| `--color-neutral-800` | #2C2C2C | Heading text (actual H2 color site-wide) |
| `--color-neutral-900` | #141004 | Highest-contrast near-black (Astra `--ast-global-color-7`) |

### Semantic Colors

Not present on the source site (no alert/toast/form-validation UI was found in the fetched markup) — standard values inferred per convention.

| Token | Hex | Use |
|-------|-----|-----|
| `--color-success` | #16A34A *(inferred)* | Success states, confirmations |
| `--color-warning` | #D97706 *(inferred)* | Warnings, caution |
| `--color-error` | #DC2626 *(inferred)* | Errors, destructive actions |
| `--color-info` | #2563EB *(inferred)* | Informational messages |

### Surface Colors

| Token | Hex | Use |
|-------|-----|-----|
| `--color-surface` | #FBFBF8 | Page background (real) |
| `--color-surface-raised` | #FFFFFF | Cards, panels (real — used 20× in main page CSS) |
| `--color-surface-overlay` | #FFFFFF *(inferred)* | Modals, dropdowns — no true overlay/modal component exists on-site |

### Special: Dark Card Component

One bespoke dark surface exists — a mobile testimonial carousel (`.noble-mobile-reviews`) — not part of a site-wide dark mode:

| Token | Hex | Use |
|-------|-----|-----|
| `--color-dark-surface` | #151B26 | Testimonial card background |
| `--color-dark-border` | #2D3748 | Card internal divider (footer border-top) |
| `--color-dark-text` | #FFFFFF | Card heading/name text |
| `--color-dark-text-body` | #D8DEE7 | Card review-quote text |
| `--color-dark-text-muted` | #98A3B2 | Card meta text (date/location) |

### Third-Party Brand Color (not site brand)

`#25D366` — WhatsApp green, used only by the WhatsApp chat-widget plugin. Do not treat as part of the brand palette.

### Usage Rules
- The olive-gold primary is used exclusively for emphasis (heading spans, buttons, badges, active states) — it never appears as a large fill/background, only as text, border, or small pill background. Large areas stay neutral cream/white.
- Buttons are outline-style: transparent background, `primary` (#ACAD28) text/icon, `primary-dark` (#838433) 1px border. There is no solid-fill button variant found in source.
- Star ratings use the distinct accent amber (#FFB800), never the olive primary — keep this hue reserved for ratings/reviews only.
- The dark testimonial card is an isolated pattern; do not extend it into a full dark mode without new design decisions (none was found on-site).

---

## Typography

### Font Stack

| Role | Family | Weights Loaded | Import |
|------|--------|-----------------|--------|
| Heading | Poppins | 300, 400, 500, 600, 700, 800 | `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap` |
| Body | Poppins | 400, 500, 600, 700, 800 | `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap` |
| Buttons | Poppins | 600 (explicit) | (same as above) |
| Monospace | none detected | — | system stack inferred |

**Theme-default fonts present but not visually dominant:** Astra theme ships `IBM Plex Sans` (body) and `EB Garamond` (headings) as its default stylesheet fonts. Because the entire visible page is built with Elementor, which explicitly sets `font-family:"Poppins", Sans-serif` on every heading/button/text widget, Poppins is what actually renders everywhere a user looks. Treat Poppins as the true brand font; IBM Plex Sans / EB Garamond are template fallbacks only.

### Type Scale

Values marked "real" come directly from the site's CSS; others are interpolated to complete a standard scale.

| Token | px | rem | Weight | Line Height | Source |
|-------|----|-----|--------|-------------|--------|
| `--text-xs` | 12px | 0.75rem | 400 | 1.4 | real — testimonial meta (`.noble-mobile-review span`) |
| `--text-sm` | 14px | 0.875rem | 400 | 1.55 | real — testimonial body copy |
| `--text-base` | 16px | 1rem | 400 | 1.5 | real — Astra/Elementor default body & labels |
| `--text-lg` | 18px *(inferred)* | 1.125rem | 400 | 1.5 | interpolated |
| `--text-xl` | 20px | 1.25rem | 400 | 1.25 | real — small heading-title labels |
| `--text-2xl` | 26px | 1.625rem | 600 | 1.0 *(tight, tabular)* | real — stat/number callouts |
| `--text-3xl` | 32px *(inferred)* | 2rem | 600 | 1.2 | interpolated |
| `--text-4xl` | 42px | 2.625rem | 600 | 48px (1.14) | real — H2 site-wide (`#2C2C2C`) |
| `--text-5xl` | 50px | 3.125rem | 600 | 48px (0.96) | real — Hero H1 (white, on image background) |
| `--text-6xl` | 64px | 4rem | 600 | 1.4 | real — Astra theme H1 fallback (blog/archive titles) |

No `letter-spacing` (tracking) adjustments were found anywhere in the source CSS — headings use `0` tracking even at large sizes, unlike many modern sites that tighten large display type. Preserve this: **do not add negative letter-spacing to headings.**

---

## Spacing System

**Base unit:** No clean 4px/8px system — this site uses designer-eyeballed values (6, 10, 14, 15, 16, 18, 20, 21, 22, 30, 40px). Mapped below to the nearest standard scale for portability; real observed values are noted.

| Token | Value | Common Use | Note |
|-------|-------|------------|------|
| `--space-1` | 4px | Icon padding | inferred |
| `--space-2` | 8px | Tight inline gaps | inferred |
| `--space-3` | 12px | Compact padding | close to real `10px`/`14px` |
| `--space-4` | 16px | Standard component padding | real (mobile card margin) |
| `--space-5` | 20px | Medium gaps | real (card padding) |
| `--space-6` | 24px | Section padding, card gaps | inferred, close to real `21px`/`22px` |
| `--space-8` | 32px | Large component spacing | inferred |
| `--space-10` | 40px | Section gaps | real (container gap) |
| `--space-12` | 48px | Large section padding | inferred |
| `--space-16` | 64px | Section vertical margins | inferred |
| `--space-20` | 80px | Hero padding | inferred |
| `--space-24` | 96px | Large hero padding | inferred |

---

## Shape

| Token | Value | Use | Source |
|-------|-------|-----|--------|
| `--radius-none` | 0 | Sharp edges | — |
| `--radius-sm` | 8px *(inferred)* | Small tags | — |
| `--radius-md` | 14px | Testimonial/dark card | real |
| `--radius-lg` | 25px | **Dominant site radius** — content cards, images | real, used 5×+ |
| `--radius-xl` | 30px | Larger feature panels | real, used 2× |
| `--radius-2xl` | 40px *(inferred)* | Extra-large panels | — |
| `--radius-full` | 999px | Rating-badge pills, carousel dots | real |

Border-radius on buttons themselves was not overridden in page-specific CSS (inherits Elementor's default, not directly observable from static CSS) — if rebuilding, `--radius-lg` (25px) is the safest visual match given how pervasive that value is elsewhere on the page.

---

## Shadows (Elevation)

Only one real shadow was found in source. Others are proportionally inferred from it.

| Token | Value | Use | Source |
|-------|-------|-----|--------|
| `--shadow-sm` | 0 2px 6px rgba(0,0,0,0.12) *(inferred)* | Subtle hover lift | — |
| `--shadow-md` | 0 6px 16px rgba(0,0,0,0.16) *(inferred)* | Cards | — |
| `--shadow-lg` | 0 10px 25px rgba(0,0,0,0.20) | Testimonial card | **real** — `.noble-mobile-reviews` |
| `--shadow-xl` | 0 16px 36px rgba(0,0,0,0.24) *(inferred)* | Modals | — |

---

## Motion

The site uses one dominant, simple transition pattern everywhere — no custom cubic-bezier easing curves were found; everything uses the browser's default `ease`.

| Token | Value | Easing | Use | Source |
|-------|-------|--------|-----|--------|
| `--duration-fast` | 150ms *(inferred)* | ease | Micro hover feedback | — |
| `--duration-normal` | 300ms | ease | **Dominant pattern** — `transition:background 0.3s` appears 74× site-wide, plus `color 0.3s` and `fill 0.3s` | real |
| `--duration-slow` | 350ms | ease | Testimonial carousel slide (`opacity/transform/visibility 0.35s ease`) | real |
| `--ease-default` | ease | — | The only easing function found anywhere on-site (no cubic-bezier) | real |

---

## Layout & Breakpoints

| Token | Value | Use | Source |
|-------|-------|-----|--------|
| `--container-max` | 1200px | Astra normal container width | real (`--ast-normal-container-width`) |
| `--container-narrow` | 750px | Narrow/text container width | real (`--ast-narrow-container-width`) |
| `--breakpoint-mobile` | 767px (max-width) | Mobile layout | real |
| `--breakpoint-tablet` | 768px (min-width) | Tablet layout | real |
| `--breakpoint-desktop` | 1024px (max-width, i.e. tablet ceiling) | Desktop layout | real |

---

## Component Patterns

### Button — Primary (outline style, the only button style found on-site)
```css
background: transparent; /* source: #02010100 = #020101 at 0% alpha */
color: var(--color-primary);      /* #ACAD28 */
fill: var(--color-primary);       /* icon color, if present */
border: 1px solid var(--color-primary-dark); /* #838433 */
font-family: var(--font-body);    /* Poppins */
font-weight: 600;
border-radius: var(--radius-lg);  /* 25px — inferred match to site-wide radius */
padding: var(--space-3) var(--space-6); /* inferred — not found in static CSS */
transition: background var(--duration-normal) var(--ease-default);
/* Hover/focus in source keeps background transparent — no visible hover state was captured */
```

### Rating / Trust Badge (pill)
```css
background: var(--color-secondary); /* #909431 */
padding: var(--space-2) var(--space-4); /* 8px 14px, real */
border-radius: var(--radius-full); /* 999px, real */
color: #ffffff;
font-family: var(--font-body);
```

### Card (content/image, light theme)
```css
background: var(--color-surface-raised); /* #ffffff */
border-radius: var(--radius-lg); /* 25px, real */
```

### Dark Testimonial Card (bespoke component)
```css
background: var(--color-dark-surface); /* #151B26 */
border-radius: var(--radius-md); /* 14px desktop / 12px mobile, real */
box-shadow: var(--shadow-lg); /* 0 10px 25px rgba(0,0,0,0.2), real */
color: var(--color-dark-text); /* #ffffff */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; /* NOTE: breaks from Poppins — bespoke widget, likely hand-coded */
```
Internal elements: quote text `#D8DEE7` at 14px/1.55, name `#ffffff` at 13px, meta `#98A3B2` at 12px, footer divider `1px solid #2D3748`, inactive dot `#596274`, active dot `var(--color-secondary)` (#909431) at 999px radius.

### Heading Emphasis Span
A recurring pattern: within an `<h1>`/`<h2>`, one phrase is wrapped in `<span style="color:#848433">` to highlight it in olive-gold against the otherwise neutral heading color. Reproduce as:
```css
.heading-emphasis { color: var(--color-primary-dark); }
```

### Navigation
- Built on Astra theme header, logo max-width 150px, left-aligned (typical Astra default — not deeply verified from static CSS, confirm visually against `screenshot.png`).
- Link color: `#222222` (Astra `--ast-global-color-8`), hover: `#D09A40` (Astra `--ast-global-color-1`) — note this Astra-default gold is slightly different from the Elementor-authored primary (#ACAD28); both read as "olive/gold" and are brand-consistent.

---

## Dark Mode

**Not detected.** No `prefers-color-scheme: dark` media query or `[data-theme="dark"]`/`.dark` class overrides exist anywhere in the fetched CSS. The site is light-first only. The single dark surface (`#151B26` testimonial card, see above) is a standalone bespoke component, not a site-wide dark mode — do not generalize it into a dark theme without new design decisions.

---

## Brand Signals

- **Logo:** `https://nobleexteriorcleaningservices.co.uk/wp-content/uploads/2025/01/noble-logo-300-dpi-cmyk-png-3-150x150.png` (also used as favicon, cropped square variant)
- **Page title:** "Exterior Cleaning Services in East Grinstead | Patio & Driveway Cleaning East Grinstead | Noble Exterior Cleaning"
- **Primary CTA color identity:** olive-gold outline button (#ACAD28 / #838433), Poppins 600 — never a solid-fill button
- **Trust signals:** 5-star ratings in amber (#FFB800), testimonial cards, before/after galleries, numbered process steps (01–04)
- **Overall aesthetic:** Corporate — professional/trustworthy trade-services tone, but with a warm/earthy olive-gold and cream palette instead of the cooler blues typical of the category. Restrained (outline buttons, muted hue, no bright saturated fills) rather than bold or playful.

---

## How to Use This File

Load this file into your AI context alongside `screenshot.png` for visual ground-truth. Reference tokens by their `--token-name` when writing CSS or component code. For Tailwind projects, use `tailwind.config.js` alongside this file. For raw CSS, paste `tokens.css` into your project root stylesheet. Where a value is marked *(inferred)*, treat it as a reasonable placeholder — verify against `screenshot.png` before treating it as ground truth.
