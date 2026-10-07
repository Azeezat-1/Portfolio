# Zeedev

Portfolio website for **Azeezat Yusuf**, a software developer working under the
brand Zeedev. She builds responsive websites and web applications, front end
and back end, with React and either the MERN stack or LAMP, and also builds and
customises WordPress sites.

Static front end built with React and Vite, structured so a back end can be
connected later.

The visual direction is defined in `zeedev-portfolio-prompt-v9.md`, which
supersedes all earlier briefs.

---

## Run it

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
npm run lint     # ESLint, flat config
```

---

## Design

Soft glassmorphism on a light, airy ground. Frosted white cards, a violet
accent, large soft blurred orbs behind the content, and no dark bands: the
whole page shares one pale lavender-grey surface, and depth comes from the
glass and the colour floating behind it.

| Token | Value | Used for |
| --- | --- | --- |
| `--c-bg` | `#F4F3F8` | The page ground |
| `--c-charcoal` | `#16161C` | Headings and primary text |
| `--text-body` | `#565B68` | Body copy (darkened `#6B7280` for AA) |
| `--c-violet` | `#7C5CFC` | Accent on borders, chips, icons, large text |
| `--c-violet-ink` | `#6B48EE` | Accent-coloured small text (5.02:1) |
| `--c-dark-btn` | `#15161A` | The dark pill button |
| `--glass-bg` | `rgb(255 255 255 / 55%)` | Frosted card fill |
| `--glass-border` | `rgb(255 255 255 / 80%)` | The bright hairline edge |

### Colour accents (§1.2a)

Colour is added in deliberate, contained places, all reused from the same
palette:

- The hero code preview is syntax-highlighted: keywords and property names in
  violet, string values in amber/peach, bracket punctuation in teal.
- Project cards carry a pastel tag chip (MERN, E-commerce …) cycling the four
  pastel pairs.
- Each active filter pill gets its own pastel pair.
- The tech-stack icon row renders each tool in its real brand colour
  (`--brand-*` tokens).
- The violet glow behind Contact bleeds down into the footer.

### Pastel icon chips

Four background and icon pairs, each with a deeper icon of the same hue:

| Pair | Background | Icon |
| --- | --- | --- |
| `--chip-amber` | `#FBE7D4` | `#B76A18` |
| `--chip-lav` | `#E9E4FD` | `#7C5CFC` |
| `--chip-indigo` | `#E3E7FD` | `#4F5FE0` |
| `--chip-teal` | `#DEF5F2` | `#158075` |

They are exposed as `.chip--n0` through `.chip--n3` and rotated by index, so no
two adjacent cards in a grid repeat a pair.

### Typography

Space Grotesk for headings, Inter for body copy and UI, both loaded from Google
Fonts in `index.html`. No serif or script face is used. A monospace face is
used for the decorative code preview in the hero and the About workspace mockup.

Tokens live in `src/styles/tokens.css`; the rest of the styling is split across
`base.css`, `layout.css`, `components.css` and `sections.css`.

### Frosted surfaces

Translucent white fills with a `backdrop-filter` blur, gated behind
`@supports`, so browsers without `backdrop-filter` fall back to the solid
`--glass-fallback` instead of a near-transparent card. The blurred orbs are
decorative, hidden from assistive tech, and wrapped in `overflow: hidden`
containers so they never add horizontal scroll.

---

## Structure

```
src/
  data/            all editable content
  components/
    brand/         logo mark
    layout/        navbar, footer
    project/       project cards (desktop + mobile) and tool icons
    sections/      one file per page section
    ui/            button, icon, reveal, section heading, card bits
  hooks/           useMediaQuery (project card variant switch)
  styles/          design tokens and CSS
  api/             contact form transport
```

Sections render in this order, all on the same pale ground:

Hero → About → Skills → Selected Work → Process → Contact, then the footer.

### Project cards: two hard variants

The brief specifies a hard component switch at the breakpoint, not a stretched
frame (`src/components/project/ProjectCard.jsx`):

- **Desktop and tablet landscape** — `ProjectCardDesktop`: each project shows a
  full-page capture of its live homepage inside a browser-chrome frame
  (traffic-light dots and a URL bar naming the real domain). The page
  auto-scrolls top-to-bottom on a slow CSS loop, pauses while the card is
  off-screen (`IntersectionObserver`), and freezes on a static frame for
  `prefers-reduced-motion` users.
- **Mobile** — `ProjectCardMobile`: a single phone-frame mockup that flips
  between the projects with a 3D `rotateY` page-flip (Framer Motion
  `AnimatePresence`), controlled by swipe or prev/next taps with dot
  indicators. Reduced-motion users get a crossfade instead.

`src/hooks/useMediaQuery.js` picks the variant (`min-width: 48rem`).

---

## Editing the content

Almost everything on the page comes from `src/data/`. You should not need to
touch a component to change a word.

| File | Holds |
| --- | --- |
| `src/data/site.js` | Name, role, tagline, nav items, contact details, social links |
| `src/data/about.js` | About section copy |
| `src/data/skills.js` | The four skill cards |
| `src/data/projects.js` | Projects, screenshots, tags, tool rows, filter categories |
| `src/data/process.js` | The four process steps (with 01–04 badges) |
| `src/data/contact.js` | Form options and copy |
| `src/data/codePreview.js` | The decorative hero code preview |

Placeholder content is marked in the data files and rendered visibly where
relevant. What is still a placeholder:

- **Location.** `contactDetails.location` in `src/data/site.js` is a
  placeholder at the city level. Replace it with the city and country you
  actually work from.

Verified content that should not need changing: the phone number, email, GitHub
and LinkedIn URLs, and both live project entries.

### Replacing the phone number

`contactDetails.phone` in `src/data/site.js` must be digits and the country
code only. It generates both the tap-to-call link and the WhatsApp link, so
changing it updates the displayed number and both links together.

### Adding a project

Copy an existing entry in `projects` in `src/data/projects.js` and fill in
`name`, `url`, `oneLiner`, `tag`, `domain`, `screenshot` and `toolkit`:

- Drop a **full-page** screenshot of the live site (whole page, top to footer)
  into `src/assets/projects/` as `name.png` and import it at the top of
  `src/data/projects.js`, then point `screenshot` at that import. Both the
  desktop browser frame and the mobile phone frame auto-scroll it from the
  first screen to the footer. The files must exist — a reference to a URL or a
  missing file renders a blank card.
- `domain` is shown in the desktop browser-chrome URL bar.
- `toolkit` lists ids that map to brand-coloured icons in
  `src/components/project/ToolIcon.jsx` (add a new id there for a new tool).
- `categories` must match an existing filter or the project will only appear
  under All. The filter bar is derived from the projects, so no separate edit
  is needed.

---

## The contact form

The form validates on the client and reports errors inline, linked to each
field with `aria-describedby`.

Out of the box there is no server to receive submissions, so
`src/api/contact.js` reports success without sending or storing anything. Wire
up an endpoint before launch, or visitors will be told their message was sent
when nothing was sent:

```bash
VITE_CONTACT_ENDPOINT=https://example.com/api/contact
```

Set that variable and the form will POST JSON to it. Expect
`{ name, email, projectType, message }` and return any 2xx status on success.

---

## Accessibility

- Skip link, one `h1`, and a heading order with no skipped levels
- Landmarks: one `header`, `main` and `footer`, with labelled `nav` elements
- All text meets WCAG AA against its real background (grey and violet modified
  to darker derivatives where the brief's values fall short)
- Every image has descriptive alt text
- Every pointer target is at least 24x24 CSS px, the WCAG 2.2 minimum
- The mobile drawer takes focus on open, closes on Escape, and returns focus to
  the button that opened it
- The project filter uses `aria-pressed` buttons; the mobile flip uses labelled
  prev/next controls and dot buttons
- Invalid form fields get `aria-invalid`, a described error message, and focus
  moves to the first one after a failed submit
- `prefers-reduced-motion` disables reveals/transitions, freezes the project
  auto-scroll, and swaps the mobile flip for a crossfade
- No horizontal scroll at any width from 320px to 1920px

---

## Projects shown

Both entries are shipped projects with live URLs, and the full-page screenshot
on each card is captured from the home page of the live site.

| Project | URL | Stack verified from the live bundle |
| --- | --- | --- |
| Ar-Riyaadh Academy | `https://arriyaadh.com/` | React, React Router, Axios on `/api` |
| Grandeur | `https://grandeur-fd77.vercel.app/` | React, React Router, Axios on `/api` |

The Node, Express and MongoDB entries are part of the build but cannot be
confirmed from a front-end bundle on their own. There are no invented projects
on the page; add real ones as described in "Adding a project" above.

---

## Deploying

`npm run build` produces a fully static `dist/`. The build uses a relative
`base`, so it can be served from a subdirectory as well as a domain root. Any
static host works.

---

## Stack

React 18, Vite 6, plain CSS with custom properties, `lucide-react` for icons,
and `framer-motion` for the mobile page-flip transition. No CSS framework.

---

## Notes

`zeedev-portfolio-prompt-v9.md` in the project root is the source brief for
the design. Where anything else disagrees with it, the brief wins.