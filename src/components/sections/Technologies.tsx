import { useLanguage } from '../../hooks/useLanguage'
import { Braces, Database, PanelsTopLeft, Workflow } from 'lucide-react'
import { technologies } from '../../data/technologies'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [Braces, PanelsTopLeft, Database, Workflow]
export function Technologies() {
  const { t } = useLanguage()
  return <section id="tecnologias" className="section shell"><SectionHeading number="02" label={t("TECNOLOGIAS")} title={t("As ferramentas do meu trabalho.")} /><div className="technology-grid">{technologies.map((group, index) => { const Icon = icons[index]; return <article key={t(group.title)} className="technology-card"><Icon size={25} /><h3>{t(group.title)}</h3><p>{t(group.description)}</p><div className="flex flex-wrap gap-2">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article> })}</div></section>
}
