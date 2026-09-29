import { useLanguage } from '../../hooks/useLanguage'
import { Code2, Layers3, Network } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { t } = useLanguage()
  return <section id="sobre" className="section shell"><SectionHeading number="01" label={t("SOBRE MIM")} title={t("Tecnologia com propósito.")} />
    <div className="about-grid"><div className="about-copy"><p>{t("Sou estudante da área de tecnologia e atuo profissionalmente em TI, conectando")}{' '}<strong>{t("desenvolvimento, suporte técnico e infraestrutura.")}</strong></p><p>{t("Meu foco está no backend e na construção de APIs REST com Java, Spring Boot, Python e Flask. Também desenvolvo aplicações completas, da interface em React ao PostgreSQL, Docker e deploy, com versionamento em Git.")}</p><p>{t("Gosto de entender o problema por inteiro e construir soluções claras, funcionais e fáceis de manter.")}</p></div>
      <div className="principles">{[{ icon: Code2, title: t("Backend como base"), text: t("APIs, regras de negócio e dados.") }, { icon: Layers3, title: t("Visão de ponta a ponta"), text: t("Frontend, backend e deploy conectados.") }, { icon: Network, title: t("Experiência na prática"), text: t("Desenvolvimento e operação em TI.") }].map(({ icon: Icon, title, text }) => <div key={title}><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
    </div>
  </section>
}
