Act as a highly experienced senior front-end developer. You have been given a reference UI image (a personal portfolio design). Carefully analyze it and generate a complete design system exactly as seen in that reference, including but not limited to the exact typography, spacing, buttons, icons, and text spacing.

Build a polished, responsive portfolio website for **Azeezat Yusuf**, a software developer, under the personal brand **Zeedev** (compact mark **ZDEV**).

**Make sure the layout does not look like the reference image, but keep the entire design system** (colors, typography, spacing, buttons, cards, icon style). This is a personal site for Azeezat specifically, not a generic template and not a copy of the reference's content or layout.

I already have an existing project started in VS Code and I'm building with Opencode AI. Apply this design on top of / in place of whatever is currently there.

**Do not include any numeric stats or counters anywhere on the site** — no "X+ years," "X+ projects completed," "X+ happy clients," no floating number badges. Communicate credibility through what is actually shown (real projects, real skills, clear writing), not invented or placeholder numbers.

Do not use the reference image itself anywhere in the build. Suggest suitable alternative stock images or structured UI mockups instead, as noted below.

---

# 1. DESIGN SYSTEM — extracted from the reference, apply exactly

### 1.1 Overall visual language
Soft glassmorphism on a light, airy background. Semi-transparent frosted cards sit on a pale lavender-grey backdrop with large, soft, barely-visible blurred color orbs in the corners (a cool white/silver glow near the top, a soft violet glow elsewhere on the page, e.g. behind the contact section). Nothing is flat-colored or hard-edged; every surface feels like frosted glass lifted off the page with a soft shadow.

### 1.2 Color palette
Starting values — fine-tune against the reference image with an eyedropper for pixel-perfect accuracy if needed:

- **Page background:** very light lavender-grey, near white — `#F4F3F8`
- **Card/glass surface:** white at low opacity over the background (e.g. `rgba(255,255,255,0.55)`) with a subtle 1px border in `rgba(255,255,255,0.8)` and backdrop-blur
- **Primary text:** near-black charcoal — `#16161C`
- **Secondary/body text:** medium grey — `#6B7280`
- **Primary accent (violet):** `#7C5CFC` — eyebrow labels, the highlighted role/tagline in the hero, active nav state, links, icon accents
- **Dark CTA button:** near-black — `#15161A`, white text
- **Pastel icon-chip backgrounds**, each paired with a deeper icon color in the same hue — rotate across any 4-up icon grid, don't repeat the same pair on adjacent cards:
  - Amber/peach: bg `#FBE7D4`, icon `#D9822B`
  - Lavender: bg `#E9E4FD`, icon `#7C5CFC`
  - Indigo-blue: bg `#E3E7FD`, icon `#4F5FE0`
  - Teal: bg `#DEF5F2`, icon `#1D9A8C`

### 1.3 Typography
Modern geometric sans-serif throughout (Inter, Satoshi, or General Sans). No serif anywhere.

- **Eyebrow labels** (small section tags like "WHAT I DO," "SELECTED WORK"): uppercase, small (~12px), letter-spaced, medium weight, violet accent color. Every major section gets one directly above its heading.
- **H1 (hero name):** bold/extrabold, ~48-56px, charcoal
- **Accent subheading** (role/tagline directly under the name): semibold, ~28-32px, violet
- **H2 (section headings):** bold, ~28-32px, charcoal
- **Card titles:** semibold, ~16px, charcoal
- **Body/description text:** regular weight, ~14-16px, grey, line-height ~1.6

### 1.4 Spacing and radius
- Card padding: ~24px
- Grid gap between cards: ~16-20px
- Vertical spacing between sections: ~64-80px
- Border radius: large (~20-24px) on big surfaces (hero image frame, large panels), medium (~16px) on standard cards, full pill on all buttons and small badges

### 1.5 Buttons
- **Primary:** solid near-black pill (`#15161A`), white text, trailing diagonal arrow icon (↗) — e.g. "View My Work"
- **Secondary:** frosted glass pill, subtle border, dark text, small leading icon when relevant — e.g. "Download CV"
- **Text links with arrow:** plain charcoal or violet text with a trailing ↗, no button background — e.g. "View All Projects ↗"
- **Small circular icon buttons:** frosted glass circle with a centered arrow icon, used as a corner affordance on project preview cards

### 1.6 Icons
Simple outline (stroke, not filled) icon style, sitting inside a rounded-square pastel chip (~40-48px) per the pairs in 1.2. Minimal and geometric, never cluttered illustrations.

### 1.7 Cards
Frosted glass surface, medium radius, soft drop shadow, icon chip + title + short description where applicable. No floating number badges (see the no-stats rule above) — if a small floating accent element is wanted near the hero visual, use a short text label or icon, not a counter.

---

# 2. LOGO

**Build order note:** a coding agent generating logo shapes directly in CSS/SVG from a text description tends to produce something generic. Treat the logo as a separate design step: commission or generate the mark first (designer, Canva, or an AI image tool), review it until it matches the direction below, export it as an asset, and only then hand it to the coding agent to integrate into the header, footer, and favicon.

Logo direction: a calm, rounded abstract monogram built from the letters Z and D, in the violet accent color, soft enough to sit naturally against frosted glass surfaces. Capable and precise without being hard-edged.

Create: primary horizontal logo (symbol + zeedev wordmark), compact symbol-only mark, ZDEV compact mark, a light-background version, a monochrome version, and a favicon version. Use lowercase "zeedev" for the primary wordmark and "ZDEV" for the compact mark, consistently everywhere in the codebase.

---

# 3. PAGE STRUCTURE

### Navigation
Sticky nav on a frosted glass bar: Zeedev logo/wordmark left, a centered pill-style nav group (Home, About, Skills, Projects, Contact), dark pill CTA button top-right ("Let's Talk" or "Start a Conversation").

### Hero
Two-column layout. Left: eyebrow label ("HELLO, I'M"), bold H1 with Azeezat's name, violet accent subheading ("Software Developer"), a short supporting paragraph: she builds responsive websites and web applications, front end and back end, using HTML, CSS, JavaScript and React, works in either the MERN or LAMP stack depending on the project, builds and customizes WordPress sites, and can turn a Figma design into a fully built, live website. Primary dark CTA button ("View My Work") and a secondary frosted button ("Start a Conversation"). Right: a structured interface/code preview or an abstract product visual inside a large rounded glass frame — not a stock photo of a person, and no floating number badges.

### About section
Eyebrow label ("ABOUT ME") + H2. A paragraph on her approach: practical, maintainable software, attention to detail, comfortable adapting to whatever stack or starting point a project needs, including building directly from a Figma design. No stat row, no numbers — this section is pure writing, not a metrics block.

### Skills section
Eyebrow label ("WHAT I DO") + H2 ("Skills & Services"). A grid using the pastel icon-chip system, covering:
- **Front-end development:** HTML, CSS, JavaScript, React, responsive design
- **Full-stack development:** comfortable in both MERN (MongoDB, Express, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP), stack chosen based on the project
- **WordPress:** building and customizing WordPress websites
- **Figma-to-code:** turning a Figma design into a fully built, responsive, production-ready website

Each card: icon, title, one-line description. No icon-only "technology logo wall" — follow the reference's balance of icon, title, and short explanatory text per card.

### Selected work
Eyebrow label ("FEATURED PROJECTS") + H2 ("Selected Work"). Two real, already-completed projects — use this data directly, do not treat as placeholders:

**Project 1 — Ar-Riyaadh Academy**
Live site: https://arriyaadh.com/
An Islamic and Arabic learning website for women and girls (Umm Abdillah Ar-Riyaadh Academy), covering Qur'an, Hadith, Tafsir, Arabic language, Islamic education, lectures, and Hijaamah instruction. Built on the MERN stack, full build (front end and back end).

**Project 2 — Grandeur**
Live site: https://grandeur-fd77.vercel.app/
A bespoke men's fashion and tailoring site covering Nigerian native wear, kaftans, agbada, suits, and men's fashion design training.

Each project card: screenshot thumbnail, small corner arrow-icon button linking out, title, and a one-line category/description. Keep one additional open slot clearly labeled "more work in progress" for future projects, rather than inventing a third one.

### Process section
Eyebrow label ("MY PROCESS") + H2 ("How I Work"). A 4-step numbered row (badges like "01," "02" — these are step numbers, not stats, so they're fine): Discovery, Planning, Design & Development, Refinement & Delivery. Each with an icon, short title, one-line description.

### Contact
Eyebrow label ("LET'S CONNECT") + H2. Two-column layout: left side has a heading, short supporting copy, and direct contact details with icon bullets — email, phone number (placeholder, tap-to-call or WhatsApp link), and location; right side is a frosted glass contact form (Name, Email, Project type, Message, dark pill "Send Message" button). Include the soft blurred violet orb as a background decoration near this section.

### Footer
Keep it simple: logo and brand name on one side, nav menu, contact details, and a copyright line. Nothing extra.

---

# 4. STOCK IMAGE GUIDANCE

Don't use the reference image, and don't use a stock photo of a person for the hero — use a structured interface/code preview or an abstract product visual instead. If a photo is wanted anywhere (e.g. a small About-section portrait), it should be Azeezat's own photo rather than a generic stock image.

---

# 5. TECHNICAL NOTES

- Define all colors, spacing, radius, and shadow values from Section 1 as CSS variables/design tokens so the system stays consistent across every component.
- Backdrop-blur and translucent surfaces need a solid fallback background color for contexts where backdrop-filter isn't supported.
- Maintain strong text contrast — verify grey body text and the violet accent both pass contrast checks against the light background.
- Keep the glass effect subtle; over-blurring or over-transparent cards will make text hard to read.
- Respect reduced-motion preferences for any hover/scroll animation.
- Reusable components: Navbar, Hero, About, Skills, Projects, Process, Contact, Footer, Button, SectionHeading, ProjectCard, SkillCard.
- Keep project and skill data in separate, easy-to-edit data files, with the two real projects above as the actual starting data, not placeholders.

---

# 6. FINAL CHECKLIST

1. Works cleanly on mobile, tablet, and desktop.
2. Glass/frosted surfaces stay readable at every breakpoint.
3. No numeric stats, counters, or "X+" badges appear anywhere on the site.
4. All navigation links, buttons, and mobile menu work correctly.
5. Contact form validation and states all work.
6. No horizontal scrolling issues.
7. No generic stock photos used in place of real content; reference image itself is never used.
8. Both real projects (Ar-Riyaadh Academy, Grandeur) are correctly described and linked; the extra project slot is clearly labeled as a placeholder.
9. Phone number field is present and easy to find and replace.
10. README explains how to run the project, edit content, replace the logo, and deploy.
11. Logo works in full color, monochrome, light-background, and favicon size.
12. Azeezat's name is clearly present, and the site reads as calm, capable, and polished, matching the reference's design system without copying its layout.
