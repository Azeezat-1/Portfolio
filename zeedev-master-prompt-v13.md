# ZEEDEV PORTFOLIO: PREMIUM REDESIGN MASTER PROMPT

You are a senior front-end engineer and art director. Redesign my existing portfolio project (a React + Vite app, currently running locally) for **Azeezat Yusuf**, a web and software developer, under the brand **zeedev** (compact mark **ZDEV**).

The goal: when a potential client lands on this site, within seconds they should think **"this person knows exactly what she is doing, and her work is not cheap."** The site must feel premium, calm and precise, the way a high-end studio's site does. It is a portfolio that sells services to **business owners and clients, not to other developers.**

Work inside the existing project. Reuse what already works (routing, components, the contact values already stored in the project's data files, the existing logo files). Restyle and restructure to match this brief. Do not delete unrelated files.

---

## 0. HOW TO WORK (read first)

1. **Inspect first.** Before changing anything, list the folder structure, installed packages, and everything in `src/assets/`. Then tell me which of the required assets in Appendix A are present and which are missing.
2. **Never fabricate.** If an asset or a fact is missing (a photo, a review, a number), do not invent it and do not use lorem ipsum. Build the component with a clean, designed empty state and a clear `TODO` comment, and list what is missing at the end.
3. **Build in phases and verify each one in the browser before moving on:**
   - Phase 1: design tokens, global styles, navigation, hero.
   - Phase 2: technologies strip, About, Services, Process.
   - Phase 3: Selected Work (the device mockups and effects), Testimonials.
   - Phase 4: Contact, footer, responsive pass, accessibility pass, performance pass, cleanup.
4. Keep content in separate data files (projects, services, testimonials, technologies, contact, nav) so I can edit text without touching components.
5. No em dashes in any visible copy. Use commas, periods or normal hyphens.
6. **No statistics or counters anywhere.** No "X+ years", "X+ projects", "X+ clients", no animated number counters. Credibility comes from real projects, real reviews and clear writing.

---

## 1. DESIGN CONCEPT: "MIDNIGHT GLASS"

This design deliberately combines three references:

- **WebTeck (purple IT agency):** a dark feature band with white cards overlapping its bottom edge, two-tone headings where the key words are in the accent color, organic blob-shaped photo masks, a small floating badge on the hero image.
- **Medzoon (medical theme):** a deep, saturated hero with a large curved bottom edge, a person cut out so they overlap the hero panel, two floating feature cards straddling the hero's lower edge, clean four-up cards, a simple step-by-step process.
- **Sagaz (premium blue landing page):** a faint blueprint-line texture in the background, photography layered over a solid color block, browser and phone mockups shown together, and a calm lead form with a reassurance line under it.

And it keeps the **frosted-glass system** from my earlier glass reference (soft glass cards, pill buttons, pastel icon chips, "Technologies I Use" tiles).

The result: **dark, deep midnight-indigo bands for drama and authority, alternating with light frosted-glass sections for clarity, tied together by one violet accent.** Premium comes from restraint: generous space, large confident type, hairline borders, layered overlaps, real photography, slow motion. Not from adding more effects.

### 1.1 Color tokens (define as CSS variables)

```
--midnight:   #0B0C2A   /* dark bands, hero, footer */
--indigo:     #1E1B5E   /* gradient partner for midnight */
--violet:     #7C5CFC   /* the one accent */
--violet-soft:#A794FF   /* accent on dark backgrounds */
--lavender:   #F4F3F8   /* light page background */
--white:      #FFFFFF
--ink:        #16161C   /* headings on light */
--grey:       #6B7280   /* body text on light */
--on-dark:    rgba(255,255,255,0.74)  /* body text on dark */
--glass:      rgba(255,255,255,0.55)  /* light glass surface */
--glass-line: rgba(255,255,255,0.8)   /* 1px glass border on light */
--glass-dark: rgba(255,255,255,0.07)  /* glass on dark bands */
--glass-dark-line: rgba(255,255,255,0.14)
```

Pastel icon-chip pairs (rotate across any 4-up group, never repeat adjacent):
- Amber: bg `#FBE7D4`, icon `#D9822B`
- Lavender: bg `#E9E4FD`, icon `#7C5CFC`
- Indigo: bg `#E3E7FD`, icon `#4F5FE0`
- Teal: bg `#DEF5F2`, icon `#1D9A8C`

Rules: violet is the only accent. No gold, no neon, no new hues. Dark bands use a flat `midnight` to `indigo` linear gradient. Light sections use `lavender` with glass cards. Verify text contrast in both modes.

### 1.2 Background effects (keep very restrained)
- Dark bands may carry a **blueprint texture**: thin lines in `rgba(255,255,255,0.05)` forming a faint grid, plus an optional faint wireframe-style outline of a browser window in one corner. Static.
- Light sections may carry at most two soft blurred violet orbs on the whole page, 15-25% opacity, **static**.
- **No animated gradients**, no pulsing, no hue shifting, no looping blobs, no particle effects.

### 1.3 Typography
Geometric sans-serif only (Inter, Satoshi or General Sans). No serif.
- Eyebrow labels: uppercase, ~12px, letter-spacing ~0.14em, medium weight, `violet` on light / `violet-soft` on dark.
- H1: bold/extrabold, 52-64px desktop (scale down on mobile), tight line-height (~1.05).
- H2: bold, 32-40px. **Two-tone headings:** put the key phrase in `violet` (or `violet-soft` on dark), e.g. "What I Can Build **For Your Business**".
- Card titles: semibold ~18px. Body: 15-17px, line-height 1.65, max line length ~65 characters.

### 1.4 Spacing, radius, depth
- Section vertical padding: 96-120px desktop, 64px mobile. Card padding 24-28px, grid gap 20-24px.
- Radius: 28-32px on large panels and the hero's curved edge, 20px on cards, full pill on buttons and badges.
- Depth: soft layered shadows only (`0 20px 50px rgba(20,18,70,0.10)`), plus 1px hairline borders. Overlapping layers are the main source of depth.

### 1.5 Buttons
- **Primary:** solid pill. On light: `#15161A` with white text and a trailing diagonal arrow. On dark: white pill with `midnight` text. Subtle lift on hover, visible keyboard focus ring in `violet`.
- **Secondary:** frosted glass pill with hairline border.
- **Text link:** text plus trailing arrow, underline slides in on hover.
- **Circular icon button:** glass circle with arrow, used on card corners.

### 1.6 Icons
Outline icons (Lucide or similar), inside rounded-square pastel chips (44-48px). Minimal, never decorative clutter.

---

## 2. LOGO AND BRAND

Use the logo files already in the project. Do not redraw or reinvent the mark. Wordmark is lowercase **zeedev**, compact mark is **ZDEV**; use them exactly like this everywhere (header, footer, favicon, page title). Provide a white version for dark backgrounds (invert or recolor the existing asset, do not redesign it). If a needed variant is missing, tell me instead of inventing one.

---

## 3. PAGE STRUCTURE (top to bottom)

### 3.1 Utility bar (WebTeck)
A thin bar above the nav on `midnight`: phone, email, small social icons (GitHub, LinkedIn). Values come from the existing contact data file. Hidden on mobile.

### 3.2 Navigation
Floating frosted pill navigation: logo left; Home, About, Services, Projects, Reviews, Contact in the centre; a CTA pill on the right ("Start a Conversation"). Over the dark hero it uses the dark-glass style; after scrolling it switches to the light-glass style. Mobile: a clean menu button with a smooth drawer, focus trapped while open, closes on Escape.

### 3.3 Hero (Medzoon + Sagaz + WebTeck)
A full-width `midnight` to `indigo` panel with the blueprint texture and a **large curved bottom edge**.

Left column, in this order:
- Eyebrow: "HELLO, I'M"
- H1: **Azeezat Yusuf**
- Accent line (violet-soft): "Websites your customers find easy to use."
- Paragraph (polish wording, keep meaning): "I'm a web developer who builds clear, good-looking websites for businesses, brands and organizations. Tell me what you need, whether that's a new site, a refresh of an old one, or a finished design that needs building, and I'll take care of it, so you end up with a site that looks right, works on every device and is easy for you to update."
- Plain-language pills: "Business websites", "WordPress sites", "Web apps", "Design to website". No framework names here.
- CTAs: white primary pill "View My Work", glass secondary pill "Start a Conversation".

Right column: **Azeezat's own professional portrait, cut out with a transparent background, overlapping the edge of the hero panel** (Medzoon style), standing in front of a solid `violet` colour block with a thin offset outline (Sagaz style). If the portrait file is not provided, use one professional, candid stock photo of a client consultation in an organic blob or arch mask (WebTeck style), and flag it as a placeholder. One small floating glass badge may overlap the image edge, text only, with the label read from a data field (default "Open to new projects"; I will confirm or change it).

**Two floating glass feature cards straddle the bottom edge of the hero** (Medzoon), half over the dark panel and half over the light section below. Each has a pastel icon chip, a short title and one line:
- "Built from your design": "Send me a Figma design and I will turn it into a fully working website."
- "WordPress or custom code": "I choose the right tools for your project and your budget."

### 3.4 Technologies I Use (sliding strip)
Eyebrow "TOOLS & SKILLS", H2 "Technologies I **Use**". An **infinitely sliding marquee** of glass tiles, each tile a rounded-square glass chip with the tool's logo in its real brand colour and its name underneath (exactly the treatment of the "Technologies I Use" row in my glass reference).

Tools (only these): HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, PHP, WordPress, Figma, Git, GitHub.

Implementation requirements:
- Use a local icon package (for example `simple-icons` or `react-icons/si`). Do not hotlink logos.
- CSS-only marquee: duplicate the list once, translate the track by -50%, linear, 45-60 seconds per loop. Duplicate set is `aria-hidden`.
- Fade the left and right edges with a mask gradient.
- Pause on hover and on keyboard focus.
- Under `prefers-reduced-motion`, stop the animation and show the tiles as a wrapped static grid.

### 3.5 About (WebTeck blob + Sagaz layering)
Two columns on a light section. Left: the existing `about-laptop.svg` illustration inside a frosted glass frame, sitting on a soft violet organic blob shape behind it. Keep its natural proportions (about 1200:760), never crop it, keep its alt text. Right: eyebrow "ABOUT ME", H2 "Let's build something that **works for your business**", then:

"Most people who come to me already know what they need: a website that looks professional, works well on a phone, and is simple to keep up to date. I listen first, agree with you what we are building and what it should do for your customers, then build it step by step and show you progress along the way, so there are no surprises at the end. Whether you are starting from an idea, a finished design, or an old site that needs a fresh start, I will work with what you have."

Then four promises as small icon rows (qualities, not statistics): Clear communication; Works on every device; Easy for you to update; Built properly. Finish with one quiet grey line: "Behind the scenes I work with React, WordPress, and both the MERN and LAMP stacks, so I can match whatever your project needs."

### 3.6 Services (WebTeck dark band with overlapping cards)
A `midnight` band with blueprint texture. Eyebrow "WHAT I DO", H2 "What I Can Build **For Your Business**" and a white "Get a Quote" style pill linking to Contact (label: "Start a Project"). **Four white cards overlap the bottom edge of the band**, extending into the light section below. Each card: pastel icon chip, title, two-line description, small "Learn more" arrow link to Contact.
- Business websites: clear, fast sites that present your business properly on every device.
- WordPress websites: sites you can edit yourself, built on a solid foundation.
- Web applications: custom full-stack apps built on MERN or LAMP, chosen to fit your project.
- Design to website: your Figma design turned into a pixel-faithful, responsive website.

### 3.7 Selected Work (Sagaz device composition)
Eyebrow "SELECTED WORK", H2 "Websites I've **Built**". Two featured projects, each as a large panel, alternating image side (left/right). Each panel: project name, a two-line client-friendly description, pastel tag chips, a "Visit Site" pill, and a layered device composition on a `violet`/`indigo` colour block.

**Projects (real, already built):**
1. **Ar-Riyaadh Academy**, https://arriyaadh.com/. An Islamic and Arabic learning website for women and girls (Umm Abdillah Ar-Riyaadh Academy): classes, lectures, Hijaamah instruction and student reviews, with a Telegram-based class access flow. Built on the MERN stack. Screenshot: `src/assets/projects/arriyaadh.png`.
2. **Grandeur**, https://grandeur-fd77.vercel.app/. A bespoke men's fashion and tailoring site: Nigerian native wear, kaftans, agbada, suits and fashion design training. Screenshot: `src/assets/projects/grandeur.png`. Do not state which stack or what exactly I built here; leave `role` and `stack` as clearly marked TODO fields in the data file.

**Desktop and tablet-landscape (`ProjectDevicesDesktop`):** a browser-chrome frame (rounded top bar, three dots, address bar showing the domain) containing the full-page screenshot, which **auto-scrolls vertically from hero to footer** using a CSS `translateY` animation inside an `overflow: hidden` frame (slow and smooth; start when the card enters the viewport, pause when it leaves or on hover, loop back to the top). A **smaller phone frame overlaps the lower corner** of the browser frame and shows a static crop of the top of the same screenshot.

**Mobile (`ProjectDevicesMobile`):** only a phone-mockup frame with a static top crop of the screenshot. Switch between the two projects with a **page-flip transition** (Framer Motion, `rotateY` flip with `AnimatePresence`), by swipe or prev/next buttons, with dot indicators. No scrolling effect on mobile.

Hard rules for this section:
- Two separate components swapped at the mobile breakpoint (CSS media query or a resize-aware hook), not one frame that merely resizes.
- **Never use an `<iframe>` of the live site.** Many sites block framing and it renders blank. Use the local screenshot files only. The URLs are only for the "Visit Site" links.
- If a screenshot file is missing, show a designed placeholder frame and report it. Do not crash or leave a blank gap.
- Under `prefers-reduced-motion`, freeze on a static frame and replace the flip with a simple fade.
- Optimise the screenshots (resize to a sensible width, serve WebP if possible) so the page stays fast.

### 3.8 Process (Medzoon)
Eyebrow "MY PROCESS", H2 "A Simple Process **You Can Follow**". Four glass cards in a row joined by a thin connecting line, each with a step number (01-04, these are step labels, not statistics), icon chip, title and one line: Discovery (understand your goals, audience and content), Planning (agree the pages, features and what is in scope), Design and Development (build it, with progress you can see as it happens), Refinement and Delivery (test on real devices, fix what breaks, hand it over with instructions).

### 3.9 Testimonials ("Words from clients")
Eyebrow "CLIENT REVIEWS", H2 "What My Clients **Say**". Two large frosted-glass review cards, side by side on desktop, stacked on mobile. Each card: a quote mark icon, the review text, a small avatar chip (initials, or the project's logo if available), the person's name, and their business.

Reviews come from my two clients:
- **Umm Abdillah, Ar-Riyaadh Academy**
- **The owner of Grandeur (Grandeur Tailors)**

**Do not write these reviews yourself.** Put them in `src/data/testimonials.js` with fields `name`, `role`, `business`, `quote`, `projectUrl`, `approved`. I will paste the real quotes myself. Leave `quote` as an empty string with a `TODO: paste real review` comment. Render a card only when `quote` is non-empty and `approved` is true; otherwise render that card as a refined, intentional "Review coming soon" state with the business name, never fake text. Do not reuse the student testimonials from the Ar-Riyaadh Academy site, those are about the teacher, not about my work.

### 3.10 Contact (Sagaz form + Medzoon band)
A `midnight` band with blueprint texture. Left: eyebrow "LET'S CONNECT", H2 "Tell me what you are **building**", a short line ("Faster to start with the form if the project is still an idea, or message me directly if you would rather talk it through first."), and direct contact rows with icon chips: **phone (tap-to-call), WhatsApp link, email, location**. Reuse the values already in the project's contact data file. Right: a frosted-glass form card with Name, Email, Project type (select), Budget range (optional select), Message, and a white primary pill "Send Message". Under the button, a quiet reassurance line with a small lock icon: "Your details stay private and are only used to reply to you." (Keep this line only if the form handler really does nothing else with the data.) Full validation with helpful messages, loading, success and error states, accessible labels and focus states.

### 3.11 Footer
Simple and calm, continuing the `midnight` band: logo and brand name with one short line, the nav menu, contact details (phone, email, location, GitHub and LinkedIn icons), and a copyright line "© [current year] Azeezat Yusuf". Nothing else.

---

## 4. IMAGERY RULES

- **Her own portrait is the strongest premium signal.** Use it as the hero cutout if supplied (Appendix A).
- Otherwise only real, professional stock photography (Unsplash or Pexels), chosen for a client audience: bright, candid, natural light, modest professional setting. No stiff posed stock cliches, no watermarks. Suggested search terms: "client consultation modern office", "business owner reviewing website laptop", "presenting website design to client".
- **No AI-generated images.** No cartoon or isometric illustrations (they cheapen the look).
- **No code visuals anywhere** except the supplied About laptop illustration. Any screen shown in a photo or mockup must show a clean, finished website.
- Apply one consistent light, slightly cool colour grade to every photograph so they read as one set.
- Use at most the hero portrait, the project mockups and the About illustration as large visuals. Fewer, better images feel more expensive.

---

## 5. MOTION

Slow, smooth and purposeful: section reveals (fade plus 8-12px rise, 400-600ms, once only), the hero entrance, the technology marquee, the project auto-scroll and flip, button hover lifts. Nothing bounces, spins or loops in the background. Everything respects `prefers-reduced-motion`.

---

## 6. TECHNICAL REQUIREMENTS

- React + Vite (existing). Framer Motion only where needed (mobile flip, reveals). Lucide for UI icons, a local brand-icon package for technology logos.
- Reusable components: UtilityBar, Navbar, Hero, TechMarquee, About, ServicesBand, ServiceCard, ProjectPanel, ProjectDevicesDesktop, ProjectDevicesMobile, ProcessSteps, TestimonialCard, ContactSection, Footer, Button, SectionHeading.
- All design tokens as CSS variables (colour, spacing, radius, shadow, transition). Backdrop-blur surfaces need a solid fallback colour.
- Performance: lazy-load below-the-fold images, explicit image dimensions to avoid layout shift, optimised screenshots, aim for Lighthouse 90+ on performance, accessibility and best practices.
- SEO: title "Azeezat Yusuf | Web Developer | zeedev", a client-focused meta description, Open Graph tags, favicon from the existing logo.
- Accessibility: semantic landmarks, correct heading order, visible focus states, keyboard-operable menu, marquee and carousel, meaningful alt text, WCAG AA contrast on both dark and light sections.

---

## 7. FINAL CHECKLIST

1. Works with no horizontal scroll on mobile, tablet, laptop and large desktop.
2. Dark and light sections both pass contrast checks.
3. Hero portrait overlaps the panel edge and the two feature cards straddle the hero's bottom edge, on desktop and gracefully stacked on mobile.
4. Technology marquee slides smoothly, pauses on hover and focus, and falls back to a static grid with reduced motion.
5. Services cards overlap the dark band edge correctly.
6. Desktop shows the browser frame with scrolling screenshot plus the small phone frame; mobile shows the phone frame with the page flip. Neither uses an iframe.
7. Both testimonial cards are present, with no invented review text anywhere.
8. No statistics or counters, no em dashes in visible copy, no AI-generated images, no code imagery except the About illustration.
9. Background effects are static and subtle.
10. Contact form validates and shows loading, success and error states. Phone, WhatsApp and email links work.
11. No console errors, no broken images, no unused code.
12. At the end, give me a short list of every placeholder or missing asset I still need to supply.

---

## APPENDIX A: ASSETS TO SUPPLY (check these in step 0)

| Asset | Path | Status |
|---|---|---|
| Logo files (colour and white) | `src/assets/logo/` | already in project |
| Ar-Riyaadh full-page screenshot | `src/assets/projects/arriyaadh.png` | already captured |
| Grandeur full-page screenshot | `src/assets/projects/grandeur.png` | already captured |
| About laptop illustration | `src/assets/about-laptop.svg` (+ `.png`) | already created |
| Azeezat's portrait, transparent-background PNG (waist-up, professional, plain or light clothing) | `src/assets/portrait.png` | **to supply** (optional, stock fallback otherwise) |
| Two client reviews with permission (Umm Abdillah, Grandeur owner) | `src/data/testimonials.js` | **to supply** |
| Grandeur owner's name, and Grandeur role and stack details | `src/data/projects.js` | **to supply** |
| Phone, WhatsApp, email, GitHub, LinkedIn | existing contact data file | confirm existing values |
| CV (PDF), optional | `public/cv.pdf` | optional |

## APPENDIX B: MESSAGE TO REQUEST THE REVIEWS (send on WhatsApp)

"Hello, I'm adding the website I built for you to my portfolio. Would you be happy to write two or three sentences about what it was like working with me and how the website has helped you? I'd like to display it with your name and business. Thank you so much."
