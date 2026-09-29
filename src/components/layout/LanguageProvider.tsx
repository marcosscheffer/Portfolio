import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from '../../hooks/useLanguage'
import type { Language } from '../../hooks/useLanguage'
import { english } from '../../data/translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt' }
    catch { return 'pt' }
  })

  useEffect(() => {
    try { localStorage.setItem('portfolio-language', language) } catch { /* Storage may be unavailable. */ }
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = `Marcos Vinicius Scheffer | ${language === 'pt' ? 'Desenvolvedor' : 'Developer'}`
    const description = language === 'pt'
      ? 'Portfólio de Marcos Vinicius Scheffer da Conceição. Desenvolvimento backend e full stack com Java, Spring Boot, React, PostgreSQL e Docker.'
      : 'Marcos Vinicius Scheffer da Conceição’s portfolio. Backend and full stack development with Java, Spring Boot, React, PostgreSQL and Docker.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'pt' ? 'pt_BR' : 'en_US')
  }, [language])

  const t = (text: string) => language === 'en' ? english[text] ?? text : text
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
