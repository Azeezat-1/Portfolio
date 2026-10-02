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

/** Renders a named icon. Unknown names render nothing rather than throwing. */
export default function Icon({ name, ...rest }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component {...rest} />
}