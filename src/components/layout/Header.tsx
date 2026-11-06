import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/LanguageContext'

const languages: { code: Language; label: string; htmlLang: string; name: string }[] = [
  { code: 'pt', label: 'PT', htmlLang: 'pt-BR', name: 'Português' },
  { code: 'en', label: 'EN', htmlLang: 'en', name: 'English' },
]

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={`#${sectionIds.hero}`} aria-label={t('Marcos Scheffer, início')} onClick={close}>
          ms<span>.</span><span className="brand-slash">/</span>
        </a>

        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? t('Fechar menu') : t('Abrir menu')}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          id="navigation"
          className={open ? 'navigation is-open' : 'navigation'}
          aria-label={t('Navegação principal')}
          onKeyDown={event => {
            if (event.key !== 'Escape') return
            close()
            toggle.current?.focus()
          }}
        >
          {navigation.map(({ label, id }) => <a key={id} href={`#${id}`} onClick={close}>{t(label)}</a>)}
          <a href={`#${sectionIds.contact}`} className="nav-contact" onClick={close}>
            {t('Vamos conversar')} <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="language-switch" role="group" aria-label={t('Escolher idioma')}>
          {languages.map(item => (
            <button
              key={item.code}
              type="button"
              lang={item.htmlLang}
              aria-label={item.name}
              aria-pressed={language === item.code}
              onClick={() => setLanguage(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
