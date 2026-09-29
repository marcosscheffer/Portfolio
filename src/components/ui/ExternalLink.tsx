import { useLanguage } from '../../hooks/useLanguage'
import type { ReactNode } from 'react'

interface Props { href?: string; children: ReactNode; className?: string }

export function ExternalLink({ href, children, className = '' }: Props) {
  const { t } = useLanguage()
  if (!href) return <span className={`${className} unavailable`} aria-disabled="true" title={t("Link ainda não disponibilizado")}>{children}<span className="sr-only">{' '}{t("— link ainda não disponibilizado")}</span></span>
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only">{' '}{t("(abre em nova aba)")}</span></a>
}
