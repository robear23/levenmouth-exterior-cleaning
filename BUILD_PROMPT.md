# Build Prompt: Levenmouth Exterior Cleaning Website

Copy everything below this line into your coding agent / AI website builder of choice.

---

## 1. Project Goal

Build a **stunning, fast, mobile-first, animation-rich marketing website** for **Levenmouth Exterior Cleaning**, a local exterior cleaning business (pressure washing, window cleaning, gutter clearing) serving Levenmouth, Leven, Kirkcaldy, and wider Fife, Scotland. This is a **client-ready deliverable** — it needs to look premium and "eye-popping," not like a generic template, while staying genuinely fast on mobile (most of this business's customers will find it on a phone, likely from a Facebook link).

The primary conversion goal is a **WhatsApp message** — the business owner responds to WhatsApp quickly and wants friction-free quote requests, ideally with customers attaching photos of their driveway/gutters directly in the chat.

---

## 2. Source Files (all in this project folder)

| File | What it is | How to use it |
|---|---|---|
| `business-info.md` | Structured brand/content brief | Primary source for all copy, contact info, CTAs, SEO keywords |
| `reviews.md` | Raw scrape of the business's Facebook reviews page | Source for testimonials **only** — see hygiene warning below |
| `logo.jpg` | The business's actual logo | Use as-is for nav/footer/favicon; see logo-handling notes below |
| `design-identity/DESIGN.md` | Extracted design system from a **competitor's** site ("Noble Exterior Cleaning Services") | Use for **structure only** — type scale, spacing, radius, shadow, and motion patterns. **Do not use its color palette** (see Section 3) |
| `design-identity/tokens.css` / `tokens.json` / `tailwind.config.js` | Machine-readable version of the same competitor design system | Same rule: reuse the non-color tokens, remap the color tokens per Section 3 |
| `design-identity/screenshot.png` | Screenshot of the competitor's site | Reference only, for a general sense of "trust-first trade-services" layout conventions. **Never copy its layout, copy, photos, or logo directly** — it's a different business |

### ⚠️ Content hygiene — read before using `reviews.md`

`reviews.md` is a raw scrape and contains noise that must **never** appear on the site:

- Dozens of stray `Facebook` lines (scraping artifacts) — ignore entirely.
- Scrambled/obfuscated timestamp text (random character sequences before some reviews) — ignore; use only the human-readable relative dates (e.g. "6 days ago", "11 July").
- **A private Messenger conversation between the site builder ("Robbie") and the business owner is embedded at the bottom of the file** (the "Hi there! Thanks for the response on my post..." thread). This is internal correspondence about building this exact website — it is absolutely not customer content and must not appear anywhere on the site.
- Reviews are Facebook **"recommends"** (thumbs-up), not 5-star ratings — there are no individual star counts per review. Don't fabricate per-review star ratings. Use the aggregate stat (100% recommend, 18 reviews) as the trust signal, and tag individual quotes with something like "✓ Recommends Levenmouth Exterior Cleaning" rather than invented stars.

Use these cleaned testimonials (typos/scrape artifacts already removed, wording otherwise preserved):

1. **Abbie Ireland** — "Highly recommend! Done a great job restoring our mono block driveway and making it much more manageable going forward. Reasonably priced and responded to messages really quickly. Would use again — our driveway looks brand new!"
2. **Colin McDonald Snr** — "Very efficient, friendly service. A pleasant young man to do business with."
3. **Julie Baillie** — "Excellent job — can't believe how new the drive looks. Would highly recommend!"
4. **Cer Dav** — "Highly recommend, excellent service."
5. **Richard Wilson** — "Excellent job and reasonable price, would highly recommend."
6. **Sam Yule** — "Absolutely amazing work — couldn't have asked for better. Gave me a whole new perspective on small businesses. Would totally use again and couldn't recommend more!"
7. **Lucy Whyte** — "Great first clean and our door looks fantastic now! Quality cleaning and good customer service — will definitely be a regular customer."
8. **Rita Sanderson** — "Hard worker who does a superb job — you will not be disappointed."

### Logo handling

`logo.jpg` has a **solid navy-blue background baked in** (it's not a transparent PNG). Don't try to auto-remove the background — instead:
- In the nav bar: place it in a small rounded/circular container sized to the logo, sitting comfortably against the site's own navy tones.
- In the footer / hero badge: it can run larger since the site background will already be navy in those zones.
- Use it directly as the favicon (may need a simple square crop/resize).
- If a transparent-background version becomes available later, swap it in — but don't block on that.

---

## 3. Brand & Design Direction

### Why the palette is being remapped

`design-identity/DESIGN.md` was extracted from a **competitor's** website and uses an olive-gold/cream palette. Levenmouth's own logo is **deep navy blue with bright cyan water-splash accents and white highlights** — a "clean water" story that's actually a stronger fit for an exterior/pressure-washing brand. Use the competitor file for its *structural* DNA (this is genuinely useful — it's a well-observed "trust-first trade services" pattern language), but the color system below **replaces** its color tokens entirely.

### Color tokens (starting point — fine-tune against `logo.jpg` for exact hex match if you have a color-picker available)

```css
/* Brand */
--color-primary:       #0F2A66;  /* deep navy — headings, nav, primary buttons, footer */
--color-primary-dark:  #081A45;  /* darkest navy — hero background, footer background */
--color-primary-light: #2F6FD1;  /* mid blue — gradients, links, secondary elements */
--color-secondary:     #29B6F6;  /* bright sky cyan — CTA highlights, icon accents, active states (matches the logo's splash graphic) */
--color-accent:        #FFB800;  /* amber gold — reserved ONLY for star/review/rating visuals, never for buttons or large fills */

/* Neutrals — cool-toned (shifted from the source's warm cream to suit navy/cyan) */
--color-neutral-50:  #F7FAFD;
--color-neutral-100: #EDF4FB;
--color-neutral-200: #DCEAF7;
--color-neutral-300: #B9CEE3;
--color-neutral-400: #7C93B3;
--color-neutral-500: #55698C;
--color-neutral-600: #3B4C6B;
--color-neutral-700: #263454;
--color-neutral-800: #172542;
--color-neutral-900: #0A1226;

--color-surface:        #F7FAFD;
--color-surface-raised: #FFFFFF;
```

**Usage rules (carried over from the source system's discipline, just remapped):**
- Primary navy is for text, nav, and solid CTA buttons — it can appear as large fills (hero background, footer), unlike the source system's outline-only approach. This site should feel bolder/more "eye-popping" than the restrained competitor reference — see motion notes below.
- Cyan (`--color-secondary`) is the "pop" color: use it for the WhatsApp CTA glow/accent, active nav states, icon highlights, section dividers, and hover states. Don't let it dominate large backgrounds — it works best as a bright accent against navy or white.
- Amber accent is reserved exclusively for star ratings / trust badges, exactly as the source system specifies. Never use it for a button.
- Check contrast before shipping: navy-on-white and white-on-navy are safe; if cyan text ever sits on a light background, darken it until it passes WCAG AA for the given text size — cyan is for accents and large elements, not small body text.

### Everything else: reuse from `design-identity/` as-is

Pull directly from `tokens.css` / `tailwind.config.js` / `DESIGN.md` (just with colors swapped per above):

- **Typography**: Poppins for everything (headings, body, buttons), the same type scale (12px → 64px), no letter-spacing on headings.
- **Spacing scale**: 4px → 96px as defined.
- **Border radius**: 25px as the dominant radius for cards/images, 999px pills for badges — this soft, friendly shape language suits a residential service business well.
- **Shadows**: reuse the shadow scale (`0 10px 25px rgba(0,0,0,0.20)` etc.) but consider shifting shadow tint toward navy (e.g. `rgba(15,42,102,0.15)`) instead of pure black for a more cohesive, less generic feel.
- **Layout**: 1200px max container, same breakpoints (768px / 1024px).

### Motion — deliberately elevate beyond the source

The source `DESIGN.md` explicitly describes its motion as "understated... no bounce/spring, one dominant 0.3s background transition." **Do not copy that restraint.** The user wants this site "animation-filled" and "visually eye-popping" — treat the source's motion tokens as a floor (durations/easing to keep for *micro* interactions like link hovers), not a ceiling. Layer in the richer motion system described in Section 5.

---

## 4. Content Inventory (use verbatim / near-verbatim)

- **Business name**: Levenmouth Exterior Cleaning
- **Tagline**: Professional residential and commercial exterior cleaning — restoring patios, driveways, windows, and gutters across Levenmouth and surrounding Fife.
- **Primary CTA copy**: "Get a Free Instant Quote on WhatsApp" / secondary: "Book an Exterior Clean"
- **Contact**: WhatsApp/phone `+44 7828 450059`
  - WhatsApp deep link (pre-filled message, strip `+`/spaces, drop leading 0 after country code): `https://wa.me/447828450059?text=Hi%20Levenmouth%20Exterior%20Cleaning%2C%20I%27d%20like%20a%20free%20quote%20for...`
  - Phone link: `tel:+447828450059`
- **Availability**: Always open — frame as "Message us anytime, we reply fast"
- **Location / service area**: Based in Leven, Fife. Serves Levenmouth and surrounding areas, including Kirkcaldy and wider Fife.
- **SEO target keywords** (work naturally into headings/copy/meta, don't keyword-stuff): exterior cleaning Levenmouth, pressure washing Leven, window cleaner Fife, driveway and patio cleaning Kirkcaldy, gutter cleaning Scotland.
- **Services**:
  1. **Pressure / Jet Washing** — deep cleaning and restoration for block paving, patios, driveways, decking, and pathways.
  2. **Window Cleaning** — streak-free exterior glass and frames for homes and commercial shopfronts.
  3. **Gutter Cleaning & Clearing** — removing debris, moss, and blockages from gutters and downpipes to prevent water damage.
  4. **Commercial Exterior Maintenance** — customised outdoor surface maintenance and washdowns for local businesses.
- **Trust points**: 100% recommend rate across 18 Facebook reviews; handles both domestic and commercial jobs; fast WhatsApp response time.
- **Testimonials**: the 8 cleaned quotes in Section 2.

### No real project photos were supplied

Only `logo.jpg` and a competitor's `screenshot.png` exist — there are no real before/after photos of Levenmouth's actual work. Do **not** use the competitor screenshot as site imagery. Instead:
- Build hero/section visuals from **CSS/SVG-driven motifs**: water ripples, spray particles, driveway/paving texture patterns, gutter/downpipe line art — all in the navy/cyan palette. These should look intentional and premium, not like empty placeholders.
- For the before/after showcase (Section 5), build the interactive slider component fully functional, but use clearly-labeled placeholder gradient/texture panels (e.g. a "before" grimy-texture gradient vs. an "after" clean gradient) with an inline HTML comment (`<!-- TODO: replace with real customer before/after photo -->`) at each insertion point, so the client can drop in real photos later with zero code changes.

---

## 5. Site Architecture (single-page, anchor-nav site)

Build as one scrolling page with a sticky nav — this suits a local service business's conversion funnel best and keeps load fast (no route changes).

1. **Sticky nav** — logo (small rounded container), anchor links (Services, Why Us, Gallery, Reviews, Contact), a filled cyan-accented WhatsApp button always visible, mobile hamburger → slide-in panel.
2. **Hero** — full viewport height. Animated navy background with subtle water-ripple/particle motion (CSS/canvas, GPU-cheap). Headline with staggered word/line reveal on load. Tagline. Dual CTA (WhatsApp instant quote — primary/filled cyan; Call Now — secondary/outline). Floating trust badge ("100% Recommend · 18 Reviews"). Animated bounce scroll-down indicator.
3. **Trust stats bar** — animated count-up numbers on scroll-into-view: 100% Recommend, 18+ Happy Customers, Always Open, Domestic & Commercial.
4. **Services grid** — 4 cards (one per service above), icon micro-animation on hover, staggered scroll-reveal.
5. **Why Choose Us** — USP list (rapid WhatsApp response, 100% recommend rate, domestic & commercial versatility, local Fife specialists), alternating image/text rhythm with light parallax.
6. **Before / After showcase** — draggable comparison slider(s), placeholder imagery per the note above, satisfying "wow" interaction even before real photos exist.
7. **How It Works** — 3–4 numbered steps (Message us on WhatsApp → Get an instant quote → Book your clean → Enjoy the results), connecting line/progress animates in as the user scrolls.
8. **Testimonials** — carousel or auto-scrolling marquee of the 8 cleaned quotes, swipeable on mobile, "✓ Recommends Levenmouth Exterior Cleaning" tag per quote (no fabricated stars).
9. **Service area** — Levenmouth, Leven, Kirkcaldy, wider Fife; simple stylized map graphic or animated pin list. A real embedded Google Map centered on Leven, Fife is a nice-to-have if time allows.
10. **Final CTA banner** — bold "Ready for a Free Instant Quote?" with both WhatsApp and phone CTAs.
11. **Footer** — larger logo, contact details, service area, quick links, Facebook page link, copyright, subtle wave-shaped section divider.

**Persistent element**: floating WhatsApp button, bottom-right, all breakpoints — subtle pulsing glow to draw the eye, expands slightly on hover/tap, appears after a short scroll delay rather than instantly (avoid it blocking the hero CTA on load).

---

## 6. Animation & Interaction Spec

This is the "eye-popping" layer — implement all of the following:

- **Scroll-triggered reveals** on every section (fade + slide-up, staggered children) via IntersectionObserver or a lightweight scroll-animation library (e.g. GSAP + ScrollTrigger).
- **Hero**: staggered text reveal, ambient background motion (ripple/particles), animated scroll-down cue.
- **Buttons**: liquid/ripple fill or magnetic hover effect on primary CTAs — should feel tactile and "water"-themed, tying back to the brand.
- **Cards**: lift + shadow-deepen + subtle scale on hover (services, testimonials).
- **Counters**: count up from 0 when scrolled into view, once only.
- **Before/after slider**: smooth drag on desktop, touch-drag on mobile, subtle reveal animation on first scroll into view.
- **Testimonial carousel**: smooth auto-advance with pause-on-hover/touch, swipe gesture support on mobile.
- **Nav**: smooth-scroll to anchors, active-section highlight as the user scrolls, mobile menu slide-in with backdrop fade.
- **Page load**: brief, tasteful intro (e.g. logo/hero fade-in), under ~800ms — never delay interactivity.
- **Accessibility**: respect `prefers-reduced-motion` — provide a reduced-motion path that keeps content fully usable with instant/opacity-only transitions instead of the full motion set.

Prefer transform/opacity-based animations (GPU-accelerated) over animating layout properties (width/height/top/left), especially for anything running on scroll, to keep this smooth on mid-range mobile devices.

---

## 7. Technical Requirements

- **Stack**: static site — plain HTML/CSS/JS (or a minimal Vite setup if preferred) + Tailwind CSS (extend the provided `tailwind.config.js`, remapping the `colors` block per Section 3) + GSAP with ScrollTrigger for the animation layer. No backend/CMS needed — content is small and stable, and the WhatsApp deep link replaces the need for a contact-form backend. Deployable as static files to any host (Netlify/Vercel/etc.).
- **Performance**: target LCP < 2.5s and near-zero CLS on 4G mobile. Lazy-load below-the-fold imagery. Self-host or preconnect Google Fonts (Poppins) with `font-display: swap`. Keep total JS lean — avoid heavy animation libraries beyond GSAP if possible.
- **Responsive**: mobile-first, test at 375px width minimum through desktop (1440px+). Touch targets ≥ 44px.
- **Accessibility**: semantic HTML, meaningful alt text on all imagery, keyboard-navigable nav/carousel/slider, visible focus states, `aria-label`s on icon-only buttons (WhatsApp button, hamburger menu), WCAG AA contrast throughout.
- **SEO**: descriptive `<title>`/meta description using the target keywords naturally, Open Graph tags (using the logo as the OG image), semantic heading hierarchy, `LocalBusiness` JSON-LD structured data (name, telephone, address locality "Leven, Fife", areaServed listing Levenmouth/Kirkcaldy/Fife, sameAs → Facebook page).
- **Favicon**: derived from `logo.jpg`.

---

## 8. Deliverables

```
/index.html
/css/           (or Tailwind build output)
/js/
  main.js
  animations.js
  before-after-slider.js
  testimonials-carousel.js
/assets/
  images/        (placeholder motifs + logo)
  icons/
README.md        (brief: how to swap placeholder photos for real ones, how to deploy)
```

## 9. Definition of Done

- [ ] Loads fast and smoothly on a mid-range mobile phone over 4G — no jank during scroll animations.
- [ ] Every section from Section 5 is present, using only the real content from Section 4 (no invented services, fabricated stats, or placeholder Lorem Ipsum copy).
- [ ] No trace of the `reviews.md` scrape artifacts (stray "Facebook" text, the private Messenger thread, fabricated per-review star ratings).
- [ ] Color palette is the navy/cyan system from Section 3, not the competitor's olive-gold.
- [ ] WhatsApp is the clearly dominant CTA throughout, using the correct `wa.me` deep link format.
- [ ] Animations are rich and premium-feeling but respect `prefers-reduced-motion`.
- [ ] Before/after slider is fully interactive even with placeholder imagery, with clear `TODO` markers for real photos.
- [ ] Passes a basic Lighthouse check (Performance/Accessibility/SEO all reasonably high — mobile especially).
