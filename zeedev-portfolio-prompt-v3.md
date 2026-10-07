Build a polished, responsive portfolio website for Azeezat Yusuf, a full-stack web and software developer, under the personal brand Zeedev.

**This replaces the earlier "sharp, dark/light, near-black and emerald" direction entirely.** The new direction below is soft glassmorphism in a violet/lavender palette, extracted from a reference UI image. Build from this version, not the previous one.

The brand name is Zeedev, written as:

zeedev

The compact brand mark may use:

ZDEV

---

# 1. DESIGN SYSTEM — build this exactly

### 1.1 Overall visual language
Soft glassmorphism on a light, airy background. Semi-transparent frosted cards sit on a pale lavender-grey backdrop with large, soft, barely-visible blurred color orbs in the corners (a cool white/silver glow near the top, a soft violet glow near another part of the page, e.g. behind the contact section). Nothing is flat-colored or hard-edged; every surface feels like frosted glass lifted off the page with a soft shadow.

This replaces the earlier "sharp and geometric" direction. The new feel is calm, soft, and light rather than sharp and dark — still confident and clean, just through softness and clarity rather than contrast and edge.

### 1.2 Color palette
Starting values — fine-tune against the reference image with an eyedropper for pixel-perfect accuracy if needed:

- **Page background:** very light lavender-grey, near white — `#F4F3F8`
- **Card/glass surface:** white at low opacity over the background (e.g. `rgba(255,255,255,0.55)`) with a subtle 1px border in `rgba(255,255,255,0.8)` and backdrop-blur
- **Primary text:** near-black charcoal — `#16161C`
- **Secondary/body text:** medium grey — `#6B7280`
- **Primary accent (violet):** `#7C5CFC` — eyebrow labels, the highlighted role/tagline in the hero, active nav state, links, icon accents
- **Dark CTA button:** near-black — `#15161A`, white text
- **Pastel icon-chip backgrounds**, each paired with a deeper icon color in the same hue — rotate these across any 4-up icon grid, don't repeat the same pair on adjacent cards:
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
- **Text links with arrow:** plain charcoal or violet text with a trailing ↗, no button background — e.g. "More About Me ↗"
- **Small circular icon buttons:** frosted glass circle with a centered arrow icon, used as a corner affordance on project preview cards

### 1.6 Icons
Simple outline (stroke, not filled) icon style, sitting inside a rounded-square pastel chip (~40-48px) per the pairs in 1.2. Minimal and geometric, never cluttered illustrations.

### 1.7 Cards and floating badges
- Standard cards: frosted glass surface, medium radius, soft drop shadow, icon chip + title + short description.
- Floating stat badges (small frosted rectangles with a number and label): used sparingly, overlapping the edge of a larger visual element for depth, not placed inside the normal grid.
- Testimonial cards: frosted surface, small quote-mark icon, quote text, avatar + name + role row.

---

# 2. LOGO

**Build order note:** a coding agent generating logo shapes directly in CSS/SVG from a text description tends to produce something generic. Treat the logo as a separate design step: commission or generate the mark first (designer, Canva, or an AI image tool), review it until it matches the direction below, export it as an asset, and only then hand it to the coding agent to integrate into the header, footer, and favicon.

Logo direction (updated to match the new soft glass language): a calm, rounded abstract monogram built from the letters Z and D, in the violet accent color, soft enough to sit naturally against frosted glass surfaces rather than sharp and angular. Should feel capable and precise without being hard-edged.

Create: primary horizontal logo (symbol + zeedev wordmark), compact symbol-only mark, ZDEV compact mark, a version for light backgrounds, a monochrome version, and a small favicon version. Use lowercase "zeedev" for the primary wordmark and "ZDEV" for the compact mark, consistently everywhere in the codebase.

---

# 3. PAGE STRUCTURE

### Navigation
Sticky nav on a frosted glass bar: Zeedev logo/wordmark left, a centered pill-style nav group (Home, About, Skills, Projects, Contact), dark pill CTA button top-right ("Let's Talk" or "Start a Conversation").

### Hero
Two-column layout. Left: eyebrow label ("HELLO, I'M"), bold H1 with Azeezat's name, violet accent subheading ("Full-Stack Web & Software Developer"), a short supporting paragraph covering what she does (designs and builds responsive websites and web applications, front end and back end, using React, Node, WordPress, MERN or LAMP depending on the project, and can turn a Figma design into a fully built live site), a primary dark CTA button ("View My Work") and a secondary frosted button ("Download CV" or "Start a Conversation"). Right: a structured interface/code preview or an abstract product visual inside a large rounded glass frame — not a stock photo of a person — with one or two floating stat badges overlapping its edge (e.g. years of experience, projects completed, once real numbers are supplied; use clearly labeled placeholders until then).

### About section
Eyebrow label ("ABOUT ME") + H2. A row of stat cards (e.g. years of experience, projects completed, happy clients — placeholders until Azeezat supplies real numbers) beside a paragraph on her approach: practical, maintainable software, attention to detail, comfortable adapting to whatever stack or starting point (including Figma) a project needs. Include a "More About Me ↗" link if there's a dedicated About page, otherwise omit.

### Services section
Eyebrow label ("WHAT I DO") + H2 ("Services I Offer"). A 4-up grid using the pastel icon-chip system: Full-Stack Web Development (MERN or LAMP, depending on the project), WordPress Website Design, Figma-to-Code (turning a Figma design into a fully built, responsive site), and React Front-End Development. Each card: icon, title, one-line description, small arrow link.

### Tools/technologies row
Eyebrow label ("TOOLS & SKILLS") + H2 ("Technologies I Use"). Horizontal row of small icon chips: React, Node.js, Express, MongoDB, PHP, WordPress, Figma, Git, GitHub, Tailwind CSS — same treatment as the reference's tools row.

### Selected work
Eyebrow label ("FEATURED PROJECTS") + H2 ("Selected Work"). A 2-3 card grid, each with a project screenshot thumbnail, a small corner arrow-icon button, a title, and a short category label underneath. Reserve:
- **Project slot 1** for a project built from a Figma design turned into a live website.
- **Project slot 2** for her second completed project.
Leave both clearly labeled as placeholders for Azeezat to fill in with real titles, links, descriptions, and screenshots — do not invent project names or results. Keep one additional open slot for future work.

### Process section
Eyebrow label ("MY PROCESS") + H2 ("How I Work"). A 4-step numbered row (badges like "01," "02"), each with an icon, short title, and one-line description: Discovery, Planning, Design & Development, Refinement & Delivery.

### Testimonials
Eyebrow label ("TESTIMONIALS") + H2 ("What Clients Say"). A 2-3 card grid of frosted testimonial cards: quote icon, quote text, avatar + name + role. Use clearly labeled placeholder content until real testimonials are supplied.

### Contact
Eyebrow label ("LET'S CONNECT") + H2. Two-column layout: left side has a heading, short supporting copy, and direct contact details with icon bullets — **email, phone number (placeholder, tap-to-call or WhatsApp link), and location**; right side is a frosted glass contact form (Name, Email, Project type, Message, dark pill "Send Message" button). Include the soft blurred violet orb as a background decoration near this section.

### Footer
Keep it simple: logo and brand name on one side, nav menu, contact details, and a copyright line. Nothing extra beyond that.

---

# 4. STOCK IMAGE GUIDANCE

Don't use a stock photo of a person for the hero — use a structured interface/code preview or an abstract product visual instead, since this is a developer portfolio, not a headshot-led personal-brand site. If a photo is wanted anywhere (e.g. a small About-section portrait), that should be Azeezat's own photo rather than a generic stock image.

---

# 5. TECHNICAL NOTES

- Define all colors, spacing, radius, and shadow values from Section 1 as CSS variables/design tokens so the system stays consistent across every component.
- Backdrop-blur and translucent surfaces need a solid fallback background color for contexts where backdrop-filter isn't supported.
- Maintain strong text contrast — verify grey body text and the violet accent both pass contrast checks against the light background.
- Keep the glass effect subtle; over-blurring or over-transparent cards will make text hard to read.
- Respect reduced-motion preferences for any hover/scroll animation.
- Reusable components: Navbar, Hero, About, Services, Tools, Projects, Process, Testimonials, Contact, Footer, Button, SectionHeading, ProjectCard, ServiceCard, StatBadge.
- Keep project, service, and testimonial data in separate, easy-to-edit data files.

---

# 6. FINAL CHECKLIST

1. Works cleanly on mobile, tablet, and desktop.
2. Glass/frosted surfaces stay readable at every breakpoint.
3. All navigation links, buttons, and mobile menu work correctly.
4. Contact form validation and states all work.
5. No horizontal scrolling issues.
6. No generic stock photos used in place of real content.
7. Project slots, stats, testimonials, and phone number are clearly marked as placeholders and easy to find and replace.
8. README explains how to run the project, edit content, finalize the two project slots, replace the logo, and deploy.
9. Logo works in full color, monochrome, light-background, and favicon size.
10. Azeezat's name is clearly present, and the site reads as calm, capable, and polished.
