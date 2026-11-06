import type { ReactNode } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

interface Props {
  href?: string
  children: ReactNode
  className?: string
}

/** Link externo em nova aba. Sem `href`, renderiza um item indisponível. */
export function ExternalLink({ href, children, className = '' }: Props) {
  const { t } = useLanguage()

  if (!href) {
    return (
      <span className={`${className} unavailable`} aria-disabled="true" title={t('Link ainda não disponibilizado')}>
        {children}
        <span className="sr-only"> {t('— link ainda não disponibilizado')}</span>
      </span>
    )
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t('(abre em nova aba)')}</span>
    </a>
  )
}
