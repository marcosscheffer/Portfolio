import { ArrowUpRight, FileCode2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { CodeSnippet } from '../../types/project'
import { ExternalLink } from '../ui/ExternalLink'

const KEYWORDS = new Set([
  'public', 'private', 'protected', 'final', 'static', 'return', 'new', 'class', 'interface', 'void',
  'if', 'else', 'null', 'this', 'throws', 'throw', 'var', 'try', 'catch', 'extends', 'implements',
])
const TOKEN = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(@\w+)|(\b[A-Z]\w*\b)|(\b[a-z]\w*\b)|(\b\d+\b)/gm

/** Realce leve de sintaxe Java, sem dependências. */
function highlight(code: string): ReactNode[] {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of code.matchAll(TOKEN)) {
    const [text, comment, string, annotation, type, word, number] = match
    const index = match.index ?? 0
    if (index > last) parts.push(code.slice(last, index))
    let className = ''
    if (comment) className = 'tok-comment'
    else if (string) className = 'tok-string'
    else if (annotation) className = 'tok-annotation'
    else if (type) className = 'tok-type'
    else if (word && KEYWORDS.has(word)) className = 'tok-keyword'
    else if (number) className = 'tok-number'
    parts.push(className ? <span key={index} className={className}>{text}</span> : text)
    last = index + text.length
  }
  parts.push(code.slice(last))
  return parts
}

export function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const { t } = useLanguage()

  return (
    <figure className="code-snippet">
      <div className="code-snippet-bar">
        <span><FileCode2 size={14} /> {snippet.file}</span>
        {snippet.href && (
          <ExternalLink href={snippet.href}>{t('Arquivo completo')} <ArrowUpRight size={13} /></ExternalLink>
        )}
      </div>
      <pre tabIndex={0}><code>{highlight(snippet.code)}</code></pre>
      <figcaption>{t(snippet.caption)}</figcaption>
    </figure>
  )
}
