import {
  ArrowUpRight,
  Component,
  Database,
  FileText,
  Gauge,
  Github,
  Layers,
  Layout,
  Linkedin,
  Mail,
  PenTool,
  Phone,
  Plug,
  RefreshCw,
  Server,
  Wrench,
} from 'lucide-react'

/**
 * Icon lookup, so components can name an icon in data instead of importing
 * the library everywhere. Every name here is a Lucide icon.
 */
const icons = {
  arrowUpRight: ArrowUpRight,
  component: Component,
  database: Database,
  fileText: FileText,
  gauge: Gauge,
  github: Github,
  layers: Layers,
  layout: Layout,
  linkedin: Linkedin,
  mail: Mail,
  penTool: PenTool,
  phone: Phone,
  plug: Plug,
  refresh: RefreshCw,
  server: Server,
  wrench: Wrench,
}

/**
 * Accepts either `pen-tool` or `penTool`, so data files can use whichever reads
 * better. Without this the hyphenated names in `services.js` silently matched
 * nothing and the icon vanished.
 */
function resolve(name) {
  if (icons[name]) return icons[name]
  const camel = name.replace(/-(\w)/g, (_, c) => c.toUpperCase())
  return icons[camel]
}

/** Renders a named icon. Unknown names render nothing rather than throwing. */
export default function Icon({ name, ...rest }) {
  if (!name) return null
  const Component = resolve(name)
  if (!Component) return null
  return <Component {...rest} />
}