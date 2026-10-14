# TASK: REDESIGN THE ZEEDEV HEADER (NAVIGATION BAR)

Work in the existing React + Vite project. Redesign **only the site header** (utility bar excluded) so it looks clean, premium and fully legible. A visual preview of the four states is supplied as `header-redesign.png`. Match it. Do not change unrelated components. Use the existing zeedev logo files and the existing contact/nav data files.

The look is inspired by a modern agency hero (logo left, simple centered links with a small dot under the active page, one solid violet pill button on the right). It must feel light, confident and uncluttered.

---

## 1. WHAT IS WRONG NOW (fix all of it)

1. The header is a floating pill filled with a **translucent dark grey-purple** on top of a **light** page. The result is a muddy, dirty-looking bar.
2. The nav links are light grey on that grey, so contrast is weak and they are hard to read.
3. The active link ("Home") sits in a grey blob that looks like a disabled button.
4. The logo mark is tiny and low-contrast, so the brand barely shows.
5. The CTA is a heavy near-black pill with a long label ("Start a Conversation") that competes with everything else.
6. The bar touches the strip above it with no breathing room.

**Root cause:** the bar uses one fixed dark-glass style regardless of what is behind it. The fix is below: the bar's colors must depend on the section underneath it.

---

## 2. TOKENS

```
--ink:          #16161C
--nav-link:     #3F3F4D      /* links on light */
--nav-link-dk:  #D9D8EA      /* links on dark */
--violet:       #7C5CFC
--violet-soft:  #A794FF      /* active dot on dark */
--cta:          #6B48F0      /* header button, white text passes AA (about 5.4:1) */
--midnight:     #0B0C2A
--hairline:     #E4E2EE
--hairline-dk:  rgba(255,255,255,0.12)
```
Keep using the existing font (Inter or equivalent). Do not introduce new colors.

---

## 3. LAYOUT (desktop, 960px and up)

- Full-width bar, content in a container of max-width 1200px, horizontal padding 24px.
- Height 72px. Three zones on one row, vertically centered:
  - **Left:** logo. Mark at **36px**, then the wordmark "zeedev" in 22px, weight 700, letter-spacing -0.02em, 12px gap. Use the real logo files. On dark sections use the light/white version of the mark and white text. The violet tile behind the mark in the preview is only a placeholder, so do not add a tile unless the real logo needs one to stay visible.
  - **Center:** links Home, About, Services, Projects, Reviews, Contact. 15px, weight 500, color `--nav-link`, 36px gap. Hover: color `--violet` (150ms). **Active link:** color `--ink`, weight 600, plus a **5px violet dot centered 10px under the label**. No pill, no background on the active link.
  - **Right:** one CTA button. Label **"Start a Project"** (shorter and clearer for clients), 15px weight 600, white on `--cta`, height 46px, padding 0 26px, fully rounded, with a 16px diagonal arrow icon after the text. Soft glow shadow `0 8px 22px rgba(107,72,240,0.35)`. Hover: lift 1px, arrow moves 2px up and right. Focus-visible: 3px ring in `--violet` with 2px offset.
- No outer floating pill, no rounded container around the whole bar.
- If the utility bar (phone, email, socials) is present, the header sits directly below it in the normal flow with no gap, then becomes `position: sticky; top: 0` once the utility bar has scrolled away. The utility bar is hidden below 960px.

---

## 4. THE FOUR STATES

**1. Top of page over the light hero:** the bar is **fully transparent**, no background, no border. Nothing is boxed behind the nav.

**2. After scrolling (more than 8px) over a light section:** background `rgba(255,255,255,0.86)` with `backdrop-filter: blur(14px)` (solid `#FFFFFF` fallback where unsupported), a 1px `--hairline` bottom border, and a very soft shadow `0 8px 30px rgba(22,22,60,0.06)`.

**3. Over a dark section** (dark hero, services band, contact, footer): background `rgba(11,12,42,0.72)` with blur, 1px `--hairline-dk` bottom border, links `--nav-link-dk`, active link white with a `--violet-soft` dot, logo in light version, and the CTA becomes a **white pill with `--midnight` text** (no glow).

**4. Mobile (below 960px):** bar height 64px, logo left (mark 32px), a **44px round menu button** on the right (soft violet-tinted circle with a three-line icon). The CTA is not in the bar. See Section 6.

**Theme switching (this is the main fix):** every page section gets `data-nav-theme="light"` or `"dark"`. The header reads which section is currently behind its bottom edge and sets `data-theme` on itself, so the dark style is never applied over a light background and vice versa. Use an `IntersectionObserver` (preferred, with a thin observation band at the header's bottom edge) or a passive scroll listener throttled with `requestAnimationFrame`. Transition `background`, `color`, `border-color`, `box-shadow` over 200ms ease. Set `data-scrolled="true"` when `scrollY > 8`.

**No layout shift:** the header must never push page content when its state changes. Either keep it a constant 72px, or shrink only the visual bar (72px to 64px) while its outer wrapper keeps the 72px height.

---

## 5. ACTIVE LINK AND SCROLL SPY

The site is a single page with sections, so highlight the link for the section in view. Update the active state with an `IntersectionObserver` on the sections, set `aria-current="location"` on the active link (or `"page"` for separate routes), and keep the dot position fixed so there is no jump. Clicking a link smooth-scrolls to its section with a scroll offset equal to the header height, so headings are not hidden under the bar. Respect `prefers-reduced-motion` by using an instant jump.

---

## 6. MOBILE MENU

- Menu button: `<button aria-expanded aria-controls="mobile-nav" aria-label="Open menu">`. When open, the icon becomes an X and the label becomes "Close menu".
- The drawer is a full-width sheet that slides down from the header (not a side drawer), white background, 1px hairline under the header row. Links 20px, weight 500, color `--nav-link`, 44px minimum tap height, the active link in `--ink` weight 600 with the violet dot to its left. All six links are shown. The "Start a Project" button sits at the bottom as a full-width violet pill.
- Behavior: opens and closes in 220ms (opacity plus 8px slide, no animation under reduced motion). Lock body scroll while open. Trap focus inside while open, close on `Escape`, close when a link is chosen, return focus to the menu button on close. When closed the drawer must be `inert` / `visibility: hidden` so it is not tabbable.
- If the page behind the open drawer is dark, the drawer stays white so it stays readable.

---

## 7. ACCESSIBILITY AND QUALITY

- `<header>` with a `<nav aria-label="Primary">`. Add a "Skip to main content" link that appears on focus.
- Contrast at least 4.5:1 for every link and button label in both light and dark states. Check them, do not assume.
- All interactive elements keyboard-reachable with a visible focus ring.
- Touch targets at least 44px.
- No horizontal overflow at 320px width. The logo must never be pushed off the bar.
- No console errors. No layout shift (CLS 0 from the header).
- Remove all old header styles that are no longer used (the grey pill background, the active-link blob, the floating container).

---

## 8. ACCEPTANCE CHECKLIST

1. Top of page over a light hero: bar is transparent, links dark and readable, violet CTA, no grey wash anywhere.
2. After scrolling: white frosted bar with hairline and soft shadow, same layout, nothing jumps.
3. Over a dark section: the bar switches to the dark variant automatically and back again on the way up.
4. Active link has a dot, not a pill. It updates as sections scroll into view.
5. CTA reads "Start a Project", is violet on light and white on dark, and has the hover and focus states described.
6. Mobile: logo plus round menu button, full drawer with all six links and the CTA, focus trap, Escape to close.
7. Logo mark is clearly visible at 36px (32px on mobile) in both themes.
8. Compared against `header-redesign.png`, spacing, sizes and colors match.

---

## OPTIONAL PART B: HERO TWEAKS FROM THE SAME REFERENCE (only if asked)

Apply these to the hero directly beneath the header, keeping our content and colors:
- A small pale-violet pill badge above the headline stating what I do, for example "Websites for growing businesses", with a tiny icon.
- Headline set in three tight, bold lines, with the final line in the violet accent color.
- Two buttons: a solid violet primary ("View My Work") and a round play-style or arrow secondary with a text label beside it ("See how I work").
- On the right, a large soft device frame containing a **real screenshot of one of my projects** (Ar-Riyaadh Academy or Grandeur), with two or three small floating glass cards overlapping its edge, carrying plain text only (for example "Built from your design", "Works on every phone").
- **Do not** add "Trusted by 1,000+ companies", client logos, counters, percentages, stock buildings, or plants. No invented numbers or logos anywhere.
