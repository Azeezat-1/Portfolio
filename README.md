# Zeedev

Portfolio website for **Azeezat Yusuf**, a full-stack software developer working
under the brand Zeedev. She builds responsive websites and web applications with
React and either the MERN stack or LAMP, across both the front end and the back
end.

Static front end built with React and Vite, structured so a back end can be
connected later.

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

Near-black and warm off-white, with a deep emerald accent and Space Grotesk
over Inter. Sections alternate light and dark so each band is clearly separated.

| Token | Value | Used for |
| --- | --- | --- |
| `--c-black` | `#0E1113` | Dark bands, primary text on light |
| `--c-offwhite` | `#F7F7F4` | Light bands, primary text on dark |
| `--c-slate` | `#5A5F66` | Body text on light (6.00:1) |
| `--c-emerald` | `#0F7A5C` | Accent on light (4.94:1) |
| `--c-emerald-light` | `#2FC08C` | Accent on dark |
| `--c-slate-light` | `#6B7078` | Body text on dark |

Typography is Space Grotesk for headings and Inter for body copy and UI. No
serif, script, monospace or decorative display family is used. Tokens live in
`src/styles/tokens.css`; the rest of the styling is split across `base.css`,
`layout.css`, `components.css` and `sections.css`.

---

## Structure

```
src/
  data/            all editable content
  components/
    brand/         logo mark
    layout/        navbar, footer, page shell
    project/       project card
    sections/      one file per page section
    ui/            button, reveal, section heading, tag list
  styles/          design tokens and CSS
  api/             contact form transport
```

Sections render in this order, alternating light and dark:

Hero (dark) → About → Skills → Services (dark) → Projects → Process (dark) →
Achievements → Call to action, Contact and Footer (dark).

---

## Editing the content

Almost everything on the page comes from `src/data/`. You should not need to
touch a component to change a word.

| File | Holds |
| --- | --- |
| `src/data/site.js` | Name, role, tagline, contact details, social links |
| `src/data/skills.js` | The six skill groups and the stack summary |
| `src/data/services.js` | The eleven services, what each one delivers |
| `src/data/projects.js` | Projects, screenshots, filter categories |
| `src/data/process.js` | The four process steps |
| `src/data/achievements.js` | Achievement entries |
| `src/data/contact.js` | Form options, budget ranges, currency |

### Before publishing

A few values are placeholders and need replacing with real details:

- `contactDetails.phone` in `src/data/site.js`
- The GitHub and LinkedIn `href` values in `src/data/site.js`
- `CURRENCY` in `src/data/contact.js` (currently `NGN`)

To add a project, add an entry to `projects` in `src/data/projects.js`. Its
`categories` must match an existing filter, or it will not appear under any
filter other than All. Drop a screenshot in `public/images/` and point
`screenshot` at it. The filter bar is derived from the projects, so no separate
edit is needed.

---

## The contact form

The form validates on the client and reports errors inline, linked to each field
with `aria-describedby`.

Out of the box there is no server to receive submissions, so
`src/api/contact.js` reports success without sending or storing anything. Wire up
an endpoint before launch, or visitors will be told their message was sent when
nothing was sent:

```bash
VITE_CONTACT_ENDPOINT=https://example.com/api/contact
```

Set that variable and the form will POST JSON to it. Expect `{ name, email,
projectType, budget, message }` and return any 2xx status on success.

---

## Accessibility

- Skip link, one `h1`, and a heading order with no skipped levels
- Landmarks: one `header`, `main` and `footer`, with labelled `nav` elements
- All text meets WCAG AA against its real background
- Every image has descriptive alt text
- The mobile drawer takes focus on open, closes on Escape and returns focus to
  the button that opened it, and locks page scroll while open
- The project filter uses `aria-pressed` buttons and announces the count through
  a live region
- Invalid form fields get `aria-invalid`, a described error message, and focus
  moves to the first one after a failed submit
- `prefers-reduced-motion` disables reveals and transitions

---

## Projects shown

Both entries are shipped projects with live URLs, and each screenshot is
captured from the home page of the live site.

| Project | URL | Stack verified from the live bundle |
| --- | --- | --- |
| Ar-Riyaadh Academy | `https://arriyaadh.com/` | React, React Router, Axios on `/api` |
| Grandeur | `https://grandeur-fd77.vercel.app/` | React, React Router, Axios on `/api` |

The Node, Express and MongoDB entries are part of the build but cannot be
confirmed from a front-end bundle on their own.

---

## Deploying

`npm run build` produces a fully static `dist/`. The build uses a relative
`base`, so it can be served from a subdirectory as well as a domain root.

Any static host works. If you host it somewhere other than Apache, nothing else
needs changing.

---

## Stack

React 18, Vite 6, plain CSS with custom properties, and `lucide-react` for
icons. No UI framework and no CSS framework.

---

## Notes

`Zeedev.md` in the project root is the source brief. Where the two disagree, the
brief wins.