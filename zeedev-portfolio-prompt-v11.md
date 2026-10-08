Act as a highly experienced senior front-end developer. You have been given a reference UI image (a personal portfolio design). Carefully analyze it and generate a complete design system exactly as seen in that reference, including but not limited to the exact typography, spacing, buttons, icons, and text spacing.

Build a polished, responsive portfolio website for **Azeezat Yusuf**, a software developer, under the personal brand **Zeedev** (compact mark **ZDEV**).

**Make sure the layout does not look like the reference image, but keep the entire design system** (colors, typography, spacing, buttons, cards, icon style). This is a personal site for Azeezat specifically, not a generic template and not a copy of the reference's content or layout.

I already have an existing project started in VS Code and I'm building with Opencode AI. Apply this design on top of / in place of whatever is currently there.

**Do not include any numeric stats or counters anywhere on the site** — no "X+ years," "X+ projects completed," "X+ happy clients," no floating number badges. Communicate credibility through what is actually shown (real projects, real skills, clear writing), not invented or placeholder numbers.

Do not use the reference image itself anywhere in the build. Use suitable professional stock photography instead, as noted in the stock image section below.

**Primary audience: clients and business owners, not developers.** Every visual should speak to them. Do not use developer-facing imagery anywhere on the page: no code snippets, no code editors, no terminals, no screens full of code. If a screen appears in a photo or mockup, it should show a clean, finished website interface.

---

# 1. DESIGN SYSTEM — extracted from the reference, apply exactly

### 1.1 Overall visual language
Soft glassmorphism on a light, airy background. Semi-transparent frosted cards sit on a pale lavender-grey backdrop with large, soft, barely-visible blurred color orbs in the corners (a cool white/silver glow near the top, a soft violet glow elsewhere on the page, e.g. behind the contact section). Nothing is flat-colored or hard-edged; every surface feels like frosted glass lifted off the page with a soft shadow.

**Keep the background effects very restrained.** The orbs are quiet atmosphere, not a feature. Use at most two or three of them on the whole page, at low opacity (roughly 15-25%), and keep them static. Do not animate the background gradient: no pulsing, no color or hue shifting, no looping blob movement, no parallax-driven movement. If any motion is used at all, it must be an extremely slow, barely noticeable drift (a cycle of 60 seconds or more, with a very small travel distance), and it must be switched off under `prefers-reduced-motion`. If in doubt, make it static. Text readability always wins over atmosphere.

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

### 1.2a Adding color — stay inside this palette, don't introduce new hues
The current build reads a little too monochrome (mostly background/charcoal/violet, color used sparingly). Add real color in these specific, contained places — all reusing colors already defined above, nothing new:

- **Hero and About photography:** choose professional photos with natural color in them (warm tones, greenery, soft blue or violet in the environment) and grade them lightly toward the palette, so the images add life to the page without clashing with the lavender-grey background. This replaces the old code-snippet visual entirely.
- **Project card tags:** add a small pastel tag chip under each project title (e.g. "MERN," "WordPress"), cycling through the four pastel/icon pairs from 1.2 — reuse the same chip style used in the skills section.
- **Filter pills** (the "All / Full-stack / React / MERN / E-commerce" row above Selected Work): give each category pill its own pastel background from the same four pairs when active, instead of only the active pill being violet and the rest staying grey.
- **Tech-stack icon row:** render each tool's icon in its real brand color (React blue, Node green, MongoDB green, WordPress blue, PHP indigo) rather than flat charcoal icons. This is accurate color, not decoration, so it's safe to add freely.
- **Footer:** let the soft violet gradient orb that sits behind the Contact section continue softly into the footer background instead of cutting off to flat white/grey. Keep it static and low-opacity, following the restraint rules in 1.1.

Do not add a solid saturated color band anywhere (no full navy or bright-blue hero section) — that would break the light, frosted-glass identity. All color additions should feel like accents within the existing system, not a new section of branding.

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
Two-column layout. All hero copy speaks to clients and business owners: lead with what they get, not the tools used to build it. Left side, in this order:

- Eyebrow label: "HELLO, I'M"
- H1: Azeezat Yusuf
- Violet accent subheading: "Websites your customers find easy to use."
- Supporting paragraph (polish the wording if needed, keep the meaning and the plain, friendly tone): "I'm a web developer who builds clear, good-looking websites for businesses, brands and organizations. Tell me what you need, whether that's a new site, a refresh of an old one, or a finished design that needs building, and I'll take care of it, so you end up with a site that looks right, works on every device and is easy for you to update."
- A small row of plain-language pills under the paragraph: "Business websites", "WordPress sites", "Web apps", "Design to website". No framework names in the hero.
- Primary dark CTA button ("View My Work") and a secondary frosted button ("Start a Conversation").

Right side: a professional stock photograph inside a large rounded glass frame, chosen for a client audience (see the stock image section for what to pick). No code snippet, no code editor, and no floating number badges. A small floating text label or icon chip overlapping the frame edge is fine.

### About section
Eyebrow label ("ABOUT ME") + H2 ("Let's build something that works for your business"). Write this section for a client reading it, in a warm, direct first-person voice. Suggested copy (polish the wording, keep the meaning, do not add claims, results or numbers that were not supplied):

"Most people who come to me already know what they need: a website that looks professional, works well on a phone, and is simple to keep up to date. I listen first, agree with you what we are building and what it should do for your customers, then build it step by step and show you progress along the way, so there are no surprises at the end. Whether you are starting from an idea, a finished design, or an old site that needs a fresh start, I will work with what you have."

Follow the paragraph with a short list of four plain-language promises, each with a small outline icon in a pastel chip and one line of text. These are qualities, not statistics:
- Clear communication: you always know where the project stands.
- Works on every device: phones, tablets and desktops.
- Easy for you to update: so you are not stuck calling a developer for small changes.
- Built properly: tidy, reliable work that lasts.

Finish with one quiet supporting line in grey text: "Behind the scenes I work with React, WordPress, and both the MERN and LAMP stacks, so I can match whatever your project needs." Keep it to that one line; technical detail belongs in the Skills section, not here. No stat row, no numbers.

Add a supporting image alongside the text: a professional photo that suggests working together on a website with a client, such as a bright modern workspace with a laptop or tablet showing a clean, finished website design (not code), or a relaxed client consultation. Soft natural light, uncluttered. Avoid stiff, posed "smiling at the camera" stock shots. Place it inside a frosted glass frame matching the card radius (~20-24px) with a soft shadow, and apply a light, slightly cool color grade so it sits naturally against the lavender-grey background.

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
Screenshot file (already captured, full page hero-to-footer): `src/assets/projects/arriyaadh.png`
An Islamic and Arabic learning website for women and girls (Umm Abdillah Ar-Riyaadh Academy), covering Qur'an, Hadith, Tafsir, Arabic language, Islamic education, lectures, and Hijaamah instruction. Built on the MERN stack, full build (front end and back end).

**Project 2 — Grandeur**
Live site: https://grandeur-fd77.vercel.app/
Screenshot file (already captured, full page hero-to-footer): `src/assets/projects/grandeur.png`
A bespoke men's fashion and tailoring site covering Nigerian native wear, kaftans, agbada, suits, and men's fashion design training.

Both screenshot files already exist in the project — use them directly. Do not fetch, embed, or link to the live URLs for the preview itself; the URLs are only for the "Visit Site" outbound link on each card.

Each project card: screenshot thumbnail, small corner arrow-icon button linking out, title, and a one-line category/description. Keep one additional open slot clearly labeled "more work in progress" for future projects, rather than inventing a third one.

**Responsive preview behavior — this is a specific interaction requirement, not optional styling. The current build shows plain flat screenshots with rounded corners; replace that with real device-frame mockups as specified below:**

- **Desktop (and tablet landscape):** show each project inside a realistic browser-chrome frame — a rounded top bar with traffic-light dots and a simple address/URL bar showing the project's domain (arriyaadh.com / grandeur-fd77.vercel.app). Inside the frame, use a tall, full-page screenshot of the live site and auto-scroll it vertically within the frame (top to bottom, then reset or reverse) so the whole page is revealed without the visitor scrolling the actual portfolio page. Trigger the scroll on hover, or run it as a slow continuous loop once the card scrolls into view — either is acceptable, but keep the motion slow and smooth, and respect `prefers-reduced-motion` by freezing on a static frame for users who have that setting on.
- **Mobile:** swap the browser-chrome frame for a phone-mockup frame (rounded device bezel). Use the **same screenshot file** as the desktop version, but show only a cropped top portion of it (roughly the hero/visible-area crop, not the full scrolled page) as a static image inside the phone frame — no internal scroll on mobile. Instead, switch between the two projects with a page-flip transition (the preview flips like a turning page, not a side-slide carousel), triggered by a swipe gesture or simple prev/next tap controls. Include small dot indicators showing which project is currently in view. The motion here comes from the flip between projects, not from scrolling within one.
- **Do not embed the live site via `<iframe>`.** Many sites, including Vercel-hosted ones, send security headers (`X-Frame-Options` / CSP `frame-ancestors`) that block being framed by another page entirely — when that happens the frame renders blank, which breaks the whole section. Instead, use one real full-page screenshot image per project (captured hero through footer as a single tall image, not just the visible viewport) and animate that image sliding upward inside the frame. This produces the same visual effect — watching the page scroll past from top to bottom — without depending on the target site allowing itself to be embedded. These screenshot files must actually exist in the project's image folder before this will work; a code reference to a URL or a missing file path will render as a blank or broken section, not an error the visitor can diagnose.
- Implementation approach: use Framer Motion for the flip transition on mobile (a 3D rotateY flip between project cards works well, with `AnimatePresence` handling the transition), and a CSS `@keyframes` translateY animation inside an `overflow: hidden` frame for the desktop auto-scroll effect — no extra library needed for that part. Keep both effects performant on lower-end devices: pause the desktop auto-scroll when the card isn't in the viewport.
- This is a hard switch between two different component variants at the mobile breakpoint, not one frame that just resizes: build a `ProjectCardDesktop` (browser-frame + auto-scroll) and a `ProjectCardMobile` (phone-frame + flip), and swap which one renders based on viewport width (CSS media query or a resize-aware React hook) — not a single frame shape stretched to fit both.

### Process section
Eyebrow label ("MY PROCESS") + H2 ("How I Work"). A 4-step numbered row (badges like "01," "02" — these are step numbers, not stats, so they're fine): Discovery, Planning, Design & Development, Refinement & Delivery. Each with an icon, short title, one-line description.

### Contact
Eyebrow label ("LET'S CONNECT") + H2. Two-column layout: left side has a heading, short supporting copy, and direct contact details with icon bullets — email, phone number (placeholder, tap-to-call or WhatsApp link), and location; right side is a frosted glass contact form (Name, Email, Project type, Message, dark pill "Send Message" button). Include one soft, static, low-opacity violet orb as a background decoration near this section.

### Footer
Keep it simple: logo and brand name on one side, nav menu, contact details, and a copyright line. Nothing extra.

---

# 4. STOCK IMAGE GUIDANCE

Don't use the reference image. Use real, professional stock photography (Unsplash or Pexels are good free sources) chosen for a client and business-owner audience, not developers.

- **Hero:** a bright, professional scene a client would recognize themselves in, such as a business owner or small team reviewing a website on a laptop or tablet, a client consultation in a modern office, or a designer presenting a website mockup. Natural, candid, well lit. Suggested search terms: "business owner reviewing website laptop", "client consultation modern office", "presenting website design to client", "small business owner tablet", "team collaboration bright office".
- **About:** a calmer companion image, such as a tidy modern workspace with a finished website design on screen, or a relaxed one-to-one meeting. Suggested search terms: "modern workspace laptop website design", "two people reviewing website on laptop".
- **Rules for every photo:** no code on any screen, no terminals or code editors, no stiff posed stock cliches, no watermarks. Use one consistent light, airy color grade across all photos so they look like one set. Dress and setting should stay professional and modest.
- If Azeezat supplies her own photo, use hers in place of a stock portrait.

---

# 5. TECHNICAL NOTES

- Define all colors, spacing, radius, and shadow values from Section 1 as CSS variables/design tokens so the system stays consistent across every component.
- Backdrop-blur and translucent surfaces need a solid fallback background color for contexts where backdrop-filter isn't supported.
- Maintain strong text contrast — verify grey body text and the violet accent both pass contrast checks against the light background.
- Keep the glass effect subtle; over-blurring or over-transparent cards will make text hard to read.
- Respect reduced-motion preferences for any hover/scroll animation.
- Reusable components: Navbar, Hero, About, Skills, Projects, Process, Contact, Footer, Button, SectionHeading, ProjectCard (with a desktop browser-frame variant and a mobile phone-frame variant), SkillCard.
- Keep project and skill data in separate, easy-to-edit data files, with the two real projects above as the actual starting data, not placeholders.
- Add `framer-motion` as a dependency for the mobile flip transition if it isn't already in the project.

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
8a. Desktop project cards show the browser-frame auto-scroll effect correctly; mobile shows the phone-frame flip transition instead of scrolling; both respect `prefers-reduced-motion`.
8b. Color additions (professional color-graded photography, pastel project tags, colored filter pills, brand-colored tech icons, soft footer gradient) are present and use only colors already defined in Section 1.2, no new hues introduced.
8b2. Background orbs are static (or an extremely slow, barely visible drift), low opacity, and switched off under `prefers-reduced-motion`. No animated gradient anywhere.
8d. Hero and About copy is written for clients (benefits first, plain language, no framework names in the hero, no invented claims or numbers).
8c. Hero and About use professional client-facing stock photos in frosted glass frames. No code snippets, code editors, or code-on-screen imagery appear anywhere on the page.
9. Phone number field is present and easy to find and replace.
10. README explains how to run the project, edit content, replace the logo, and deploy.
11. Logo works in full color, monochrome, light-background, and favicon size.
12. Azeezat's name is clearly present, and the site reads as calm, capable, and polished, matching the reference's design system without copying its layout.
