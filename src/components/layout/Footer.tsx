import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="shell footer">
      <p>
        © {new Date().getFullYear()} {profile.shortName}
      </p>
      <a href={`#${sectionIds.hero}`}>{t('De volta ao topo')} <ArrowUp size={16} /></a>
    </footer>
  )
}
