import {
  Atom,
  Braces,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Hexagon,
  Layers,
  Leaf,
  PenTool,
  Route,
  Send,
  Server,
  Zap,
} from 'lucide-react'

/**
 * The tech-stack icon row (§1.2a).
 *
 * Each tool is rendered through a Lucide glyph that reads as that tool, in its
 * real brand colour. These are accurate product colours, so they are allowed to
 * sit outside the site palette as the one addition of "real colour" the brief
 * sanctions. Unknown ids render nothing rather than throwing.
 */
const tools = {
  react: { icon: Atom, color: 'var(--brand-react)' },
  'react-router': { icon: Route, color: 'var(--brand-react-router)' },
  vite: { icon: Zap, color: 'var(--brand-vite)' },
  axios: { icon: Send, color: 'var(--brand-axios)' },
  node: { icon: Hexagon, color: 'var(--brand-node)' },
  express: { icon: Server, color: 'var(--brand-express)' },
  mongodb: { icon: Leaf, color: 'var(--brand-mongodb)' },
  wordpress: { icon: Globe, color: 'var(--brand-wordpress)' },
  php: { icon: Braces, color: 'var(--brand-php)' },
  figma: { icon: PenTool, color: 'var(--brand-figma)' },
  html: { icon: FileCode2, color: 'var(--brand-html)' },
  css: { icon: Layers, color: 'var(--brand-css)' },
  git: { icon: GitBranch, color: 'var(--brand-git)' },
  github: { icon: Github, color: 'var(--brand-github)' },
}

const labels = {
  react: 'React',
  'react-router': 'React Router',
  vite: 'Vite',
  axios: 'Axios',
  node: 'Node.js',
  express: 'Express',
  mongodb: 'MongoDB',
  wordpress: 'WordPress',
  php: 'PHP',
  figma: 'Figma',
  html: 'HTML',
  css: 'CSS',
  git: 'Git',
  github: 'GitHub',
}

/** One brand-coloured tool icon. */
export function ToolIcon({ id, size = 16 }) {
  const tool = tools[id]
  if (!tool) return null

  const Icon = tool.icon
  return (
    <span
      className="tool-icon"
      title={labels[id] ?? id}
      aria-label={labels[id] ?? id}
    >
      <Icon size={size} style={{ color: tool.color }} strokeWidth={2} />
    </span>
  )
}

/** A compact row of brand-coloured tool icons. */
export default function ToolRow({ ids, className = '' }) {
  if (!ids?.length) return null
  return (
    <p className={`project-card__tools ${className}`.trim()}>
      {ids.map((id) => (
        <ToolIcon key={id} id={id} />
      ))}
    </p>
  )
}