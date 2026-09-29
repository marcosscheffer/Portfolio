import { useLanguage } from './hooks/useLanguage'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Technologies } from './components/sections/Technologies'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

export default function App() {
  const { t } = useLanguage()
  return <><a href="#conteudo" className="skip-link">{t("Pular para o conteúdo")}</a><Header /><main id="conteudo"><Hero /><About /><Technologies /><Projects /><Experience /><Contact /></main><Footer /></>
}
