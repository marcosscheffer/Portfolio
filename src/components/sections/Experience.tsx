import { useLanguage } from '../../hooks/useLanguage'
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const { t } = useLanguage()
  return <section id="experiencia" className="section shell"><SectionHeading number="04" label={t("EXPERIÊNCIA")} title={t("Desenvolvimento no mundo real.")} /><div className="experience"><div className="experience-title"><div className="experience-icon"><BriefcaseBusiness size={24} /></div><div><span className="current-label"><span className="status-dot" />{' '}{t("ATUALMENTE")}</span><h3>{t("Estagiário de TI")}</h3><p>{t("Tecnologia da informação")}</p></div></div><ul>{[t("Desenvolvimento de sistemas"), t("Implantação e manutenção de aplicações"), t("Infraestrutura de TI"), t("Suporte técnico"), t("Manutenção de computadores")].map(activity => <li key={activity}><ArrowUpRight size={16} />{activity}</li>)}</ul></div></section>
}
