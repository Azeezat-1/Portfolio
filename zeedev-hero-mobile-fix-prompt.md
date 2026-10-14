# TASK: FIX THE HERO FEATURE CARDS ON MOBILE

Work in the existing React + Vite project. Fix only the two feature cards at the bottom of the hero ("Built from your design" and "WordPress or custom code") and the hero's bottom edge. Do not change anything else.

## What is wrong (seen on a phone)

The cards are translucent glass with white text, and on mobile they straddle the curved bottom edge of the dark hero. The top half of a card is over dark indigo, so its text is readable. The bottom half is over the light page, so the white description text ("I choose the right tools for your project and your budget") fades to near invisible. The card background also looks like a dark-to-light smear.

## Root cause

A translucent surface with white text is placed across a dark/light boundary. The text colour assumes a dark background that is only behind half of the card.

## The fix

1. **Make the cards solid.** White background, its own dark text, no transparency, no `backdrop-filter`.
2. **On mobile and tablet, stop overlapping the edge.** The cards sit entirely on the light section below the hero. Only on desktop (960px and up) do they overlap the curved edge.
3. Give the hero enough bottom padding so nothing is cramped against the curve.

```css
/* shared */
.hero-features {
  display: grid;
  gap: 16px;
  padding: 24px 20px 0;      /* mobile: cards live on the light section */
  margin-top: 0;
  position: relative;
  z-index: 2;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: #FFFFFF;                  /* solid, no transparency */
  border: 1px solid #E4E2EE;
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(22, 22, 60, 0.08);
  backdrop-filter: none;                /* remove any glass blur */
}
.feature-card h3 { color: #16161C; font-size: 17px; font-weight: 600; margin: 0 0 4px; }
.feature-card p  { color: #5B6773; font-size: 15px; line-height: 1.55; margin: 0; }

/* hero curve and spacing on mobile */
.hero { border-radius: 0 0 32px 32px; padding-bottom: 56px; }

@media (min-width: 640px) {
  .hero-features { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 960px) {
  .hero { border-radius: 0 0 56px 56px; padding-bottom: 96px; }
  .hero-features {
    margin-top: -56px;                  /* overlap the curve on desktop only */
    padding: 0 24px;
    max-width: 1200px;
    margin-inline: auto;
  }
}
```

Use the project's existing class names and tokens where they exist. The CSS above shows the intended values, so adapt the selectors rather than adding duplicate rules. Delete the old translucent card styles so they do not override these.

## General rule to keep from now on

Any element that overlaps the boundary between a dark and a light section must be a solid surface that carries its own text colours. Never put a translucent card with white text across that boundary.

## Acceptance checks

1. At 360px, 390px and 430px wide, both cards are fully on the light background. Title and description are clearly readable (title `#16161C`, description `#5B6773`, both at least 4.5:1 on white).
2. No card crosses the curved edge below 960px.
3. At 960px and wider the cards sit side by side and overlap the curve, still solid white with dark text.
4. No horizontal scroll at 320px.
5. The hero's curve looks clean, with no gap or gradient smear behind the cards.
6. Nothing else on the page has changed.
