import { createContext, useContext } from 'react'

export type Language = 'pt' | 'en'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  /** Returns the English copy when EN is active; Portuguese text is the key. */
  t: (text: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage requires LanguageProvider')
  return value
}
