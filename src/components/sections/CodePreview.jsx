import { Fragment } from 'react'

import { codePreview } from '../../data/codePreview.js'

/**
 * A tiny syntax highlighter for the decorative hero preview.
 *
 * It only needs to understand the one known source string, so instead of
 * shipping a parser it walks the code with a single alternation and wraps each
 * token in a span carrying one of four meaning classes. Syntax colours reuse
 * the existing palette: keywords and property names in the violet accent,
 * string values in the amber/peach tone, and bracket punctuation in the teal
 * tone — mirroring a real editor without introducing a new hue anywhere.
 */
const TOKEN_RE =
  /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(const)\b|\b([A-Za-z_$][\w$]*)(?=\s*:)|([{}[\](),:;])/g

function highlight(text) {
  const nodes = []
  let last = 0

  for (const match of text.matchAll(TOKEN_RE)) {
    const [full, string, keyword, property, punctuation] = match

    if (match.index > last) {
      nodes.push(
        <Fragment key={`raw-${last}`}>{text.slice(last, match.index)}</Fragment>,
      )
    }

    let className = null
    if (string) className = 'tok-str'
    else if (keyword) className = 'tok-kw'
    else if (property) className = 'tok-prop'
    else if (punctuation) className = 'tok-punct'

    nodes.push(
      <span className={className} key={`tok-${match.index}`}>
        {full}
      </span>,
    )
    last = match.index + full.length
  }

  if (last < text.length) {
    nodes.push(<Fragment key={`raw-${last}`}>{text.slice(last)}</Fragment>)
  }
  return nodes
}

/** Renders the hero's code sample with syntax colours. Decorative only. */
export default function CodePreview() {
  return (
    <pre className="hero__code" aria-hidden="true">
      <code>{highlight(codePreview)}</code>
    </pre>
  )
}