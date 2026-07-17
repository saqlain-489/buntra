# Buntra Web Studio — Project Guide

Marketing landing page for **Buntra Web Studio**, an agency that builds websites for
**roofing contractors** that turn Google searches into phone calls. The site itself is a
sales asset: **its one job is to convert a visitor into a free-mockup lead.** Every
decision (copy, layout, color, motion) is judged by that goal, not by how "pretty" it looks.

Primary CTA everywhere, one intent, one label: **"Get my free mockup"** → `#mockup`.

---

## Stack & commands

- **Next.js 15** (App Router, React 19), **TypeScript**, **Tailwind CSS v4** (`@theme` in `app/globals.css`, no `tailwind.config`).
- **Motion**: GSAP + ScrollTrigger (scroll reveals), `@gsap/react`. Icons: **`@phosphor-icons/react`** only.
- **Node 22 via nvm.** If node/npm fail with `_load_nvm: command not found`, run `source ~/.nvm/nvm.sh` first.
- Commands: `npm run dev` (default port 3000), `npm run build`, `npm start`.
  - Google Fonts are fetched at build/dev start; offline builds log a font-fetch warning then fall back. Not an error.
- Import alias: `@/*` → repo root (e.g. `@/lib/content`, `@/components/Nav`).
- Remote images: only `picsum.photos` is whitelisted in `next.config.mjs` (placeholders). Add a host there before using `next/image` with a new domain.

## Repo conventions (follow these, do not reinvent)

- **All page copy lives in `lib/content.ts`.** Components never hardcode marketing strings. Add/edit copy there.
- **Shared primitives in `components/primitives.tsx`**: `Container`, `Section` (with `alt` for the deeper warm bg), `Button`, `Heading`. Reuse them; do not hand-roll section padding or button styles.
- **`components/Reveal.tsx`** = the scroll-in wrapper (GSAP, fires once, honors reduced motion). Wrap section blocks in `<Reveal>` / `<Reveal delay={...}>` for entrance motion.
- Section components live in `components/`, are composed in `app/page.tsx`, in page order.
- Default to **Server Components**. Add `'use client'` only for interactivity (state, pointer, hover) — see `Process.tsx`, `Concepts.tsx`, `Faq.tsx`, `Nav.tsx`.
- Anchor IDs are load-bearing (nav + CTAs link to them): `#top #problem #services #work #why #process #founder #faq #mockup`. Do not rename silently.

---

## Design system — "Slate & Azure" (locked identity)

Defined in `app/globals.css` under `@theme`. Cool, editorial, confident. Near-black slate type on
a cool off-white, azure used as a **graphic pop only** (never low-contrast text on white). The
palette reads as a modern tech studio that helps roofers: slate = clean and professional, azure =
approachable, dependable tech-trust.

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#10161d` | dominant cool near-black: headings, buttons, dark tiles |
| `--color-body` | `#48525f` | slate body text |
| `--color-muted` | `#949daa` | captions, helper text |
| `--color-line` | `#e2e6ec` | cool hairline borders / dividers |
| `--color-surface` | `#f6f8fa` | base cool off-white |
| `--color-surface-alt` | `#eceff3` | alternating deeper section bg |
| `--color-accent` | `#0284c7` | bright azure — icons, underlines, dots, big numbers, hovers |
| `--color-accent-strong` | `#036aa0` | deeper azure that passes WCAG AA as small text on light |
| `--color-accent-soft` | `#e2f2fb` | soft azure wash for tinted cells / pills |
| `--color-ink-deep` + `-line`/`-body` | cool near-black set (`#0f151c` …) | the ONE dark section (Differentiators) |

**Fonts:** `--font-display` = **Archivo** (600–900, headings), `--font-sans` = **Plus Jakarta Sans** (body). Reference display font as `font-[family-name:var(--font-display)]`.

**Shape scale (consistency lock):** every button/CTA/interactive control = `rounded-xl` (12px) — buttons are rectangles, not pills; cards/containers = `rounded-2xl` (20px); the scrolled nav card = `rounded-[20px]`; only small non-interactive labels (eyebrow pills, tags, badges) and genuinely circular elements (icon toggles, number/step circles, avatars, dots) use `rounded-full`. Do not mix other radii.

**Buttons are INK, not azure** (matches the hero). The lead form's submit is ink too. On the
dark section, invert to a white button with ink text. Azure is the accent, never the button fill.

**Color consistency lock:** azure is the only accent on the whole page. Do not introduce a
second accent hue (no amber/green/purple CTA or badge anywhere).

**Theme lock:** the page is light warm throughout, with exactly **one deliberate dark moment**
(the Differentiators / "Why us" section). Do not add more inverted sections; do not flip the
whole page to dark without an explicit request (that would fight the locked hero).

**Motion:** tasteful scroll reveals + hover feedback (buttons lift `-translate-y-0.5`; cards
scale/shadow). No scroll-hijack, no marquees — they would fight the hero's 3D orbit. Everything
must honor `prefers-reduced-motion`.

### The Hero is LOCKED
`components/Hero.tsx` (and its `CurvedShowcase`) was hand-crafted and sets the energy for the
whole page. **Do not change its layout or visual design.** Editing copy values it reads from
`lib/content.ts` (e.g. `hero`, `cta.href`) is fine; touching the component's markup/styles is not.
Match every other section to the hero's energy: warm, premium-but-approachable, high craft, real.

---

## Design rules — human psychology & conversion (apply to EVERY section)

This is a conversion page. When designing or editing any section, think about the visitor's
psychology first, aesthetics second. The audience is **blue-collar, skeptical, mobile-first
local business owners** who distrust "agencies."

1. **One goal per screen.** Each section should move the visitor one step closer to the free
   mockup. If a section doesn't build desire, trust, or reduce friction, cut it.
2. **Risk reversal is the spine.** Roofers fear being burned. Repeat the safety nets often:
   *free mockup, pay nothing until you approve, live in 7 days or it's free.* Put one near every
   decision point (hero, differentiators, final CTA, contact).
3. **Loss aversion > feature bragging.** Lead the Problem section with what they're *losing*
   (jobs going to the competitor with a better site) — losses motivate more than gains.
4. **Reduce cognitive load (Hick's Law).** Short copy, one primary action, generous whitespace.
   Sub-paragraphs ≤ ~25 words. Never make the visitor read a wall of text or choose between many CTAs.
5. **Trust before ask.** Order matters: agitate the problem → show the work → prove why you're
   different → explain the simple process → put a human name/face on it → then ask. Never ask for
   the lead before you've earned it.
6. **Honesty is a conversion tactic, not a limitation.** Buntra has few/no shipped client sites yet.
   **Never fabricate testimonials, client logos, or metrics** (no "300% more calls", no fake 5-star
   quotes). Label sample work as **"Concept"**. A skeptical roofer smells fake proof instantly, and it
   kills trust. Real honesty ("these are concepts, real ones replace them as they ship") converts better.
7. **Social proof, used truthfully.** When real reviews/results exist, feature them prominently
   (reviews close the call). Until then, substitute *founder credibility + guarantee + process
   transparency*. Do not invent social proof to fill the gap.
8. **Specificity earns belief.** Speak roofing: storm damage, insurance claims, click-to-call,
   local SEO, "the phone rings." Concrete beats generic ("book more jobs" > "grow your business").
9. **Visual hierarchy guides the eye (F/Z pattern).** One clear focal point per section: a bold
   Archivo headline, then support. Use the azure pop (underline, dot, big number) to draw the eye to
   the single most important thing — the Von Restorff effect (the standout is remembered).
10. **Make the CTA effortless (Fitts's Law).** Big tap targets, sticky nav CTA, form asks for the
    minimum (name, business, contact). Every extra field costs leads.
11. **Momentum & commitment.** The "See it first → You approve → Go live" framing lets the visitor
    say yes to a tiny, free first step. Small yeses lead to the big one.
12. **Mobile is the primary screen.** Most roofing searches are on a phone. Design mobile-first,
    verify layouts collapse cleanly, keep the CTA reachable with a thumb.

### Color psychology (why Slate & Azure)
- **Azure/blue** = trust, dependability, competence, and modern tech. It is the color banks,
  insurers, and software companies use to say "you can rely on us." It positions Buntra as the
  tech partner, not a roofing company. Used as the pop: icons, underlines, dots, the standout number.
- **Slate / cool near-black** = authority, precision, professional seriousness. Clean and engineered,
  not cheap.
- **Cool off-white** = calm, crisp, high-trust, SaaS-grade.
- The blend says: *a sharp, modern tech studio a roofer can trust to make them money online* — not a
  hi-vis construction brand. Keep it cool and credible; do not warm it back toward amber/orange.

---

## Design rules — craft (anti-slop; keep the page from looking templated)

- **NO em-dashes (`—`) or en-dashes as separators, anywhere** — copy, headings, alt text, labels.
  Use a period, comma, colon, or hyphen. This is the #1 AI tell; zero tolerance.
- **Eyebrow restraint.** The small uppercase label above a heading is rationed to ~1 per 3 sections.
  Most sections need only a headline. Don't stamp an eyebrow on everything.
- **No section-number eyebrows** (`01 / INDEX`), **no scroll cues** ("↓ scroll"), **no decorative
  status dots** except real state, **no locale/time/weather strips**, **no fake version stamps**.
- **No layout repetition.** Each section uses a distinct layout family (stat grid, bento, comparison
  slider + gallery, dark compare, expanding accordion, editorial split, accordion, centered close,
  form split). Don't ship two sections that look the same. No 3 identical feature cards.
- **Bento cells need visual variety** (a real photo, a dark tile, a tinted wash) — not 6 white text cards.
- **Real images only** (`picsum.photos/seed/...` placeholders for now, `next/image`). No div-based fake
  screenshots, no hand-drawn decorative SVGs. Replace picsum seeds with real photos before launch.
- **Contrast (WCAG AA).** Every button label, form field, placeholder, and helper text must pass on its
  background. Azure as small text on white must use `--color-accent-strong`.
- Match the existing code's comment density and idioms. Comment only non-obvious logic, one line max.

---

## Page structure (current order in `app/page.tsx`)

`Nav → Hero(locked) → Problem → Services → Concepts(work) → Differentiators(dark, "why us") →
Process → Founder → Faq → FinalCta → Contact(form) → Footer`

Rationale: agitate the problem, show what they get, prove why Buntra beats the alternatives (the
main lever, given the dark spotlight), explain the low-risk process, humanize with a founder note,
answer objections, then make the emotional close and present the form.

---

## Working rules

- **Analysis vs action:** if asked to "check / analyze / can we / why" → investigate and report only.
  Build/edit only when told to ("do it", "go", "build", "fix it"). (Inherited from global config.)
- **Ask before deleting** files or other state-changing side actions beyond what was requested.
- **Verify in the real browser, not just a build.** Use the chrome-devtools tools to load the page,
  screenshot, and drive the affected flow. React hover/enter state only reacts to a *real* cursor
  (the `hover` tool), not synthetic dispatched events. End with a `Verified:` / `Not verified:` line.
- **Responsive is mandatory (never ship desktop-only).** Every redesign or new build MUST be checked
  at phone (~390px), tablet (~800px), and desktop widths before it is called done. Rules:
  - No horizontal overflow, no overlapping elements, tap targets ≥ 44px, primary CTA reachable.
  - Small screens must share the SAME premium vibe as desktop, not a stripped/broken version. If a
    desktop-only visual (like the hero 3D showcase) can't fit, give mobile a tasteful equivalent, not nothing.
  - Scope desktop-only tricks (align-self, translate, multi-column grids) behind breakpoints (`lg:` etc.)
    so they don't distort the stacked mobile layout. Nav: full links/CTA appear at `lg`, hamburger below.
  - Actually resize the browser (resize_page) to 390 / 800 / 1280 and screenshot each before finishing.
- Keep responses concise; explain key decisions, don't narrate obvious ones.
