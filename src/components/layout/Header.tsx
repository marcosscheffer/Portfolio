import { useLanguage } from '../../hooks/useLanguage'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'



export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const links = [[t("Sobre"), 'sobre'], [t("Tecnologias"), 'tecnologias'], [t("Projetos"), 'projetos'], [t("Experiência"), 'experiencia']] as const
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="shell header-inner">
    <a className="brand" href="#inicio" aria-label={t("Marcos Scheffer, início")} onClick={() => setOpen(false)}>ms<span>.</span><span className="brand-slash">/</span></a>
    <button className="menu-toggle" aria-label={open ? t("Fechar menu") : t("Abrir menu")} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label={t("Navegação principal")} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus() } }}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="#contato" className="nav-contact" onClick={() => setOpen(false)}>{t("Vamos conversar")}{' '}<ArrowUpRight size={16} /></a>
    </nav>
    <div className="language-switch" role="group" aria-label={t('Escolher idioma')}>
      <button type="button" lang="pt-BR" aria-label="Português" aria-pressed={language === 'pt'} onClick={() => setLanguage('pt')}>PT</button>
      <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
    </div>
  </div></header>
}
