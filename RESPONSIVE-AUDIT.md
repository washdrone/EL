# Responsive UI/UX Audit — GridDrone (EL)

**Date:** 2026-03-08
**Scope:** Full responsive layout, interaction, and accessibility audit
**Status:** Audit + action plan (no code changes)

---

## 1. Executive Summary

### Top 5 Most Important Issues

1. **Undefined Tailwind utility classes** — `shadow-elevated`, `shadow-soft`, `gradient-subtle`, and `surface-panel` are used across 7+ files but never defined in `tailwind.config.ts` or `globals.css`. These classes produce no visual output, meaning shadows, gradients, and container styling are silently broken in production.

2. **StickyCTA overlaps footer content on mobile** — The fixed-bottom StickyCTA (`z-40`) is present on all sub-pages via layout files. While `pb-24 lg:pb-0` is applied to `<main>`, the footer sits *outside* main, so its bottom content is permanently obscured by the StickyCTA bar on mobile. Additionally, when the CookieConsent banner (`z-[45]`) is visible simultaneously, the two fixed bars stack and consume ~120px+ of viewport height.

3. **`section-intro-wide` class is undefined** — Used in the kraftledningsinspektion comparison section but never defined. The comparison section heading has no centering or max-width constraint.

4. **Hero decorative blurs can cause horizontal overflow on narrow viewports** — The Hero component places absolutely-positioned blur elements at `-right-40`, `-left-20`, etc. While `overflow-hidden` on the section prevents visible overflow, the 500px-wide blur circles can cause layout issues if any ancestor has `overflow: visible`. The HeroSection (homepage) uses `overflow-hidden` on its own section, but this is fragile and relies on every usage remembering to clip.

5. **Mobile menu shows truncated items** — `SERVICE_ITEMS.slice(0, 6)` and `BRANCH_ITEMS.slice(0, 5)` in the mobile menu silently hide services and branches from mobile users. There is no "see all" link or indication that items are hidden.

### Overall Quality Assessment

The codebase has a well-structured component architecture with good use of shared utility classes (`.container-section`, `.btn-primary`, `.section-padding`, etc.). The responsive strategy is generally sound — mobile-first with `sm:`, `lg:` breakpoints. However, several critical styling tokens are missing, creating invisible failures. The mobile experience has specific issues around the sticky CTA overlap and truncated navigation.

### Biggest Risks to Usability/Conversion

- Silent CSS failures from undefined classes reduce visual polish (missing shadows, missing panel styling on the contact form)
- StickyCTA covering footer and CookieConsent stacking degrade mobile conversion paths
- Hidden mobile menu items prevent discovery of full service catalog

---

## 2. Findings by Severity

### CRITICAL

#### C1: Undefined utility classes — `shadow-elevated`, `shadow-soft`, `gradient-subtle`, `surface-panel`

**What:** Four Tailwind utility/component classes are referenced in code but never defined.
**Where:**
- `shadow-elevated`: `StickyCTA.tsx:8`, `CookieConsent.tsx:53`, `ProcessSteps.tsx:53`
- `shadow-soft`: `ProgramCards.tsx:102`, `kraftledningsinspektion/page.tsx:258`
- `gradient-subtle`: `ProcessSteps.tsx:30`
- `surface-panel`: `kontakt/page.tsx:93`

**Why:** These classes were likely planned as design tokens but never added to the Tailwind config or CSS layer.
**Root cause:** Missing definitions in `tailwind.config.ts` (extend.boxShadow / extend.backgroundImage) and/or `globals.css` @layer components.
**Impact:** StickyCTA has no shadow elevation. Cookie consent has no shadow. ProcessSteps has no subtle gradient background. Contact form panel has no background/border styling. Addon cards in ProgramCards have no shadow.
**Fix:** Define all four in `tailwind.config.ts` or `globals.css`:
```css
/* globals.css @layer components */
.surface-panel {
  @apply rounded-2xl border border-surface-200 bg-surface-50 p-6 sm:p-8;
}
```
```ts
// tailwind.config.ts extend
boxShadow: {
  soft: '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
  elevated: '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
},
```

#### C2: StickyCTA + CookieConsent stacking on mobile

**What:** Both `StickyCTA` (z-40, fixed bottom) and `CookieConsent` (z-[45], fixed bottom) can render simultaneously, stacking two bars at the bottom of the viewport.
**Where:** `StickyCTA.tsx`, `CookieConsent.tsx`, all sub-page layouts
**Why:** CookieConsent renders for first-time visitors while StickyCTA renders on all sub-pages. No coordination between them.
**Root cause:** Independent z-index stacking with no awareness of each other.
**Impact:** On a 667px iPhone (375×667), roughly 120-130px is consumed by fixed bars, leaving only ~540px of visible content. On 320px-wide devices this is even worse.
**Fix:** Either hide StickyCTA when CookieConsent is visible, or position CookieConsent above StickyCTA, or merge them into a single bottom bar manager.

#### C3: Footer content obscured by StickyCTA on mobile

**What:** The footer renders after `</main>` in all sub-page layouts, so the `pb-24` padding on `<main>` doesn't protect footer content.
**Where:** All layout files (`tjanster/layout.tsx`, `branscher/layout.tsx`, etc.)
**Why:** `pb-24` is on `<main>`, but `<Footer />` is a sibling after `</main>`, not a child. The footer's bottom area (copyright, privacy link) is behind the StickyCTA.
**Root cause:** The bottom padding for sticky CTA clearance is on the wrong element.
**Fix:** Move `pb-24 lg:pb-0` to the `<footer>` element itself (as additional bottom padding), or wrap Footer inside main, or add `pb-24 lg:pb-0` to the footer component.

### MAJOR

#### M1: Contact form `surface-panel` produces no styling

**What:** The form container on `/kontakt` uses `className="surface-panel"` which is undefined.
**Where:** `kontakt/page.tsx:93`
**Why:** The form sits in an unstyled div — no background, no border, no padding from the panel class.
**Root cause:** Missing class definition (see C1).
**Impact:** The form blends into the white background with no visual container, reducing visual hierarchy and perceived professionalism.

#### M2: Mobile menu hides services without indication

**What:** `SERVICE_ITEMS.slice(0, 6)` and `BRANCH_ITEMS.slice(0, 5)` truncate the navigation.
**Where:** `Header.tsx:277`, `Header.tsx:295`
**Why:** Hardcoded slice limits.
**Root cause:** Design decision to keep mobile menu short, but no fallback UX.
**Impact:** Services like `Vindkraftinspektion`, `Järnvägsinspektion`, `Underhållsabonnemang` may be invisible on mobile.
**Fix:** Either show all items, or add a "Visa alla tjänster →" link after the sliced list.

#### M3: `section-intro-wide` class is undefined

**What:** Class `section-intro-wide` is used but not defined.
**Where:** `kraftledningsinspektion/page.tsx:173`
**Why:** Likely intended as a wider variant of `.section-intro` (which has `max-w-2xl text-center`).
**Root cause:** Missing definition.
**Impact:** The comparison section heading is not centered and has no max-width constraint.
**Fix:** Add to `globals.css`:
```css
.section-intro-wide {
  @apply mx-auto max-w-3xl text-center;
}
```

#### M4: LeadForm `inputClass` uses `rounded-xl` while global buttons use `rounded-sm`

**What:** Form inputs use `rounded-xl` (12px radius) while all buttons use `rounded-sm` (2px radius per config). CookieConsent buttons also use `rounded-xl`.
**Where:** `LeadForm.tsx:29`, `CookieConsent.tsx:71,78`
**Why:** Inconsistent border-radius strategy.
**Root cause:** `tailwind.config.ts` sets `borderRadius.sm: "2px"`. The `.btn-*` classes use `rounded-sm`. But LeadForm and CookieConsent manually use `rounded-xl`.
**Impact:** Visual inconsistency — inputs look like a different design system than buttons.
**Fix:** Standardize on one border radius for interactive elements. Either update inputs to `rounded-sm` to match buttons, or adjust `rounded-sm` to a slightly larger value and use it everywhere.

#### M5: Homepage has no StickyCTA — mobile CTA only in hero

**What:** The homepage (`page.tsx`) directly renders `<Header />`, `<main>`, `<Footer />` without the StickyCTA wrapper used by sub-page layouts.
**Where:** `src/app/page.tsx`
**Why:** Homepage uses direct component composition instead of a shared layout.
**Root cause:** No StickyCTA in the homepage template.
**Impact:** Once a mobile user scrolls past the hero section, there is no persistent CTA until PreFooterCTA far down the page. This hurts mobile conversion.
**Fix:** Add StickyCTA to the homepage, or create a shared layout that includes it.

#### M6: Comparison table may clip text on tablet portrait

**What:** The comparison table uses `grid-cols-[1fr,1fr,1fr]` with centered text. Longer Swedish text like "Kan ofta undvikas vid visuell inspektion" can overflow or force multi-line wrapping.
**Where:** `kraftledningsinspektion/page.tsx:258-302`
**Why:** `text-center` on potentially long strings in equal-width columns.
**Root cause:** No minimum column width or text truncation strategy.
**Impact:** At tablet portrait (768px), the equal-width columns can get cramped, especially with the `max-w-4xl` container constraint.
**Fix:** Switch to `grid-cols-[1.2fr,1fr,1fr]` to give the "Aspekt" column more space, or allow left-aligned text in data cells.

#### M7: FAQ `max-h-96` limits answer visibility

**What:** FAQ answers use `max-h-96` (384px) for the open state animation. Longer answers will be clipped.
**Where:** `FAQ.tsx:62-63`
**Why:** CSS max-height transition workaround for animating height.
**Root cause:** Hardcoded max-height. No `max-h-none` fallback after animation completes.
**Impact:** Very long FAQ answers (>384px of content) will be cut off with no scrollbar.
**Fix:** After transition completes, switch to `max-h-none` via a `transitionEnd` handler, or use a larger value like `max-h-[2000px]`.

### MINOR

#### m1: TrustBar contrast is low

**What:** Trust items use `text-slate-400` on `bg-slate-50` background.
**Where:** `TrustBar.tsx:17`
**Why:** `slate-400` (#9ca3af) on `slate-50` (#f8fafc) = contrast ratio ~2.8:1, well below WCAG AA 4.5:1 for normal text.
**Root cause:** Intentional light styling, but fails accessibility.
**Fix:** Change to `text-slate-500` (~4.6:1 ratio) to pass WCAG AA.

#### m2: ProofBar trust badges contrast

**What:** Badge text uses `text-surface-600` with checkmark icons in `text-accent-600`.
**Where:** `ProofBar.tsx:72`
**Why:** `text-surface-600` (#4b5563) is fine for contrast, but `text-accent-600` (#029e92) on white is borderline (~3.5:1 for small icons).
**Root cause:** Accent-600 is a teal that's too bright for small UI elements.
**Impact:** Minor — icons are decorative, but the visual weakness is noticeable.
**Fix:** Use `text-accent-700` (#067e76) for icons — passes WCAG AA.

#### m3: Hero glassmorphism cards text contrast

**What:** `text-slate-400` subtitle text on semi-transparent cards (`bg-white/5`) over dark video.
**Where:** `HeroSection.tsx:66`
**Why:** `slate-400` on an essentially black/dark background is fine (~6.5:1), but the `bg-white/5` panel border (`border-white/15`) is very faint.
**Root cause:** Ultra-low-opacity borders barely visible, especially with video movement.
**Impact:** Cards may look like floating text without clear card boundaries on some screens.
**Fix:** Increase border opacity to `border-white/20` or `border-white/25`.

#### m4: HeroSection secondary CTA has inconsistent styling

**What:** The "Se en exempelrapport" button uses custom inline styles (`rounded-md border border-white bg-white/10 px-5 py-2.5`) instead of `.btn-ghost` class.
**Where:** `HeroSection.tsx:46-48`
**Why:** Custom one-off styling.
**Root cause:** Different padding, border-radius, and border approach vs `.btn-ghost`.
**Impact:** Height mismatch with primary CTA. `btn-ghost` has `min-h-11` and `rounded-sm`; this button has `py-2.5` and `rounded-md`.
**Fix:** Use `btn-ghost` or create a `btn-secondary-dark` variant.

#### m5: CaseCard list has no gap between cards

**What:** Case cards are rendered in a loop without spacing.
**Where:** `kraftledningsinspektion/page.tsx:327-329`
**Why:** `sampleCases.map()` with no `space-y-*` or `gap-*` on the container.
**Root cause:** Missing gap class on the parent `div`.
**Fix:** Add `space-y-4` to the container `<div className="mx-auto mt-12 max-w-2xl space-y-4">`.

#### m6: ProcessSteps connector line is misaligned

**What:** The vertical connector line uses `left-1/2 -translate-x-1/2` on a 4-column grid. This centers the line in the overall container rather than connecting the step circles.
**Where:** `ProcessSteps.tsx:42`
**Why:** The line is meant to run through the center of all 4 steps, but `left-1/2` of the container doesn't align with the circles when they're spread across 4 columns.
**Root cause:** Incorrect positioning strategy for a horizontal step connector.
**Impact:** Desktop only. The connector line runs down the vertical center rather than connecting steps horizontally.
**Fix:** Replace with horizontal connector segments between each step icon (similar pattern already used in `home/ProcessSection.tsx`).

#### m7: `border-radius: 2px` override affects `rounded-sm` globally

**What:** `tailwind.config.ts` overrides `borderRadius.sm` to `2px` (default is `0.125rem` = 2px, so this is actually the same). However, components use `rounded-xl`, `rounded-2xl`, `rounded-full`, and `rounded-lg` inconsistently alongside `rounded-sm`.
**Where:** Across all components.
**Why:** Mixed border-radius usage without a clear system.
**Root cause:** No documented border-radius design tokens.
**Impact:** Visual inconsistency — cards use `rounded-sm`, but inputs use `rounded-xl`, some containers use `rounded-2xl`, badges use `rounded-full`.
**Fix:** Document the radius system: e.g., `rounded-sm` for interactive elements, `rounded-xl` for containers, `rounded-full` for badges.

#### m8: No `aria-haspopup` on desktop dropdown triggers

**What:** Desktop dropdown buttons in Header lack `aria-haspopup="menu"` or `aria-haspopup="true"`.
**Where:** `Header.tsx:142`, `Header.tsx:188`
**Why:** Oversight.
**Root cause:** Only `aria-expanded` is set.
**Fix:** Add `aria-haspopup="true"` to both dropdown trigger buttons.

#### m9: Mobile menu "Öppna meny" label doesn't update to "Stäng meny"

**What:** The hamburger button's `aria-label` stays "Öppna meny" even when the menu is open.
**Where:** `Header.tsx:258`
**Why:** Static aria-label.
**Fix:** `aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}`.

---

## 3. Standardization Opportunities

### 3.1 Border Radius System
Currently mixed: `rounded-sm` (buttons), `rounded-xl` (inputs, some containers), `rounded-2xl` (panels), `rounded-full` (badges), `rounded-lg` (hero cards). Define and document:
- `rounded-sm` — buttons, cards, interactive controls
- `rounded-xl` — form inputs, secondary containers
- `rounded-2xl` — modal/panel containers
- `rounded-full` — badges, pills, avatars

### 3.2 Missing Design Tokens
Define the following in Tailwind config:
- `shadow-soft` — subtle card elevation
- `shadow-elevated` — sticky/floating elements
- `gradient-subtle` — light section backgrounds

### 3.3 Component Class `surface-panel`
Used for form containers but undefined. Should be a shared component class.

### 3.4 Button Variants
Five button variants exist: `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-primary-dark`, plus inline custom styles in HeroSection. The secondary CTA in HeroSection should use an existing class.

### 3.5 Section Background Pattern
Sections alternate between `bg-white`, `bg-slate-50`, `bg-surface-50`, and `gradient-hero`. The `bg-slate-50` vs `bg-surface-50` distinction is unclear since `surface-50` is `#f8fafc` (same as `slate-50`). Standardize on one.

### 3.6 Icon sizing
Icons range from `h-3.5 w-3.5` to `h-7 w-7` without a clear scale. Consider standardizing on 4 sizes: `sm` (3.5/4), `md` (5), `lg` (6/7).

---

## 4. Proposed Implementation Plan

### Phase 1: Must-Fix (Critical Issues)

1. Define missing Tailwind tokens: `shadow-soft`, `shadow-elevated`, `gradient-subtle` in `tailwind.config.ts`
2. Define `surface-panel` component class in `globals.css`
3. Define `section-intro-wide` component class in `globals.css`
4. Fix footer overlap with StickyCTA: add bottom padding to footer on mobile
5. Coordinate StickyCTA + CookieConsent: hide StickyCTA while consent banner shows, or offset

### Phase 2: Should-Fix (Major Issues)

6. Add StickyCTA to homepage (or create shared layout)
7. Show all mobile menu items or add "see all" fallback link
8. Standardize border-radius: inputs to match buttons, or document the mixed strategy
9. Fix comparison table column width for tablet
10. Fix FAQ `max-h-96` clipping with larger max-height or post-animation override
11. Fix CaseCard spacing (add `space-y-4`)

### Phase 3: Polish (Minor Issues)

12. Fix TrustBar contrast: `text-slate-400` → `text-slate-500`
13. Fix ProofBar icon contrast: `text-accent-600` → `text-accent-700`
14. Standardize HeroSection secondary CTA to use `btn-ghost`
15. Increase glassmorphism card border opacity
16. Fix ProcessSteps connector line alignment
17. Add `aria-haspopup` to dropdown triggers
18. Update mobile menu button aria-label dynamically
19. Standardize `bg-slate-50` vs `bg-surface-50` usage

---

## 5. Ready-for-Implementation Checklist

### Phase 1 — Critical
- [ ] 1. Add `boxShadow: { soft: '...', elevated: '...' }` to `tailwind.config.ts` extend
- [ ] 2. Add `backgroundImage: { 'gradient-subtle': '...' }` or add `.gradient-subtle` to globals.css @layer utilities
- [ ] 3. Add `.surface-panel` to globals.css @layer components with border, background, padding, border-radius
- [ ] 4. Add `.section-intro-wide` to globals.css @layer components with `@apply mx-auto max-w-3xl text-center`
- [ ] 5. In all sub-page layout files, add `pb-24 lg:pb-0` to the Footer wrapper or add `mobile-safe-padding` to Footer
- [ ] 6. In `StickyCTA.tsx`, accept a prop or use a shared state to hide when CookieConsent is visible (or combine bottom bars)

### Phase 2 — Major
- [ ] 7. Add `<StickyCTA />` to `src/app/page.tsx` and add `pb-24 lg:pb-0` to main
- [ ] 8. In `Header.tsx`, remove `.slice()` from mobile menu SERVICE_ITEMS and BRANCH_ITEMS, or add "Visa alla →" link
- [ ] 9. Change `LeadForm.tsx` inputClass from `rounded-xl` to `rounded-sm` (or document why different)
- [ ] 10. Change `CookieConsent.tsx` button classes from `rounded-xl` to `rounded-sm`
- [ ] 11. In `kraftledningsinspektion/page.tsx:260`, change grid template to `grid-cols-[1.2fr,1fr,1fr]`
- [ ] 12. In `FAQ.tsx:63`, change `max-h-96` to `max-h-[2000px]` or add onTransitionEnd
- [ ] 13. In `kraftledningsinspektion/page.tsx:326`, add `space-y-4` to CaseCard container

### Phase 3 — Polish
- [ ] 14. `TrustBar.tsx:17`: change `text-slate-400` to `text-slate-500`
- [ ] 15. `ProofBar.tsx:69`: change `text-accent-600` to `text-accent-700` on checkmark icons
- [ ] 16. `HeroSection.tsx:46-48`: replace inline button styles with `btn-ghost`
- [ ] 17. `HeroSection.tsx:60`: change `border-white/15` to `border-white/25`
- [ ] 18. `ProcessSteps.tsx:42`: replace vertical center line with horizontal connector segments
- [ ] 19. `Header.tsx:142,188`: add `aria-haspopup="true"` to dropdown buttons
- [ ] 20. `Header.tsx:258`: change `aria-label` to `{mobileOpen ? "Stäng meny" : "Öppna meny"}`
- [ ] 21. Audit all uses of `bg-slate-50` vs `bg-surface-50` and standardize to one
