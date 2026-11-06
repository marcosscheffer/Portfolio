import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { profile } from '../data/profile'
import { LanguageContext } from './LanguageContext'
import type { Language } from './LanguageContext'
import { english } from './translations'

const STORAGE_KEY = 'portfolio-language'

const metadata: Record<Language, { htmlLang: string; locale: string; title: string; description: string }> = {
  pt: {
    htmlLang: 'pt-BR',
    locale: 'pt_BR',
    title: `${profile.displayName} | Desenvolvedor Backend Java`,
    description: `Portfólio de ${profile.name}, desenvolvedor backend Java. APIs REST com Spring Boot, PostgreSQL, Flyway e Docker.`,
  },
  en: {
    htmlLang: 'en',
    locale: 'en_US',
    title: `${profile.displayName} | Java Backend Developer`,
    description: `${profile.name}’s portfolio, Java backend developer. REST APIs with Spring Boot, PostgreSQL, Flyway and Docker.`,
  },
}

function readStoredLanguage(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt'
  } catch {
    return 'pt'
  }
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* Storage may be unavailable. */
    }
    const meta = metadata[language]
    document.documentElement.lang = meta.htmlLang
    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:locale"]', meta.locale)
  }, [language])

  const t = useCallback((text: string) => (language === 'en' ? english[text] ?? text : text), [language])
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
