import { useLanguage } from '../../hooks/useLanguage'
import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

export function Footer() {
  const { t } = useLanguage()
  return <footer className="shell footer"><p>© {new Date().getFullYear()} {profile.shortName}<span>{t("Construído com React & TypeScript.")}</span></p><a href="#inicio">{t("De volta ao topo")}{' '}<ArrowUp size={16} /></a></footer>
}
