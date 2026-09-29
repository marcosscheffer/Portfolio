import { useLanguage } from '../../hooks/useLanguage'
import { ArrowDown, ArrowUpRight, Github, Terminal } from 'lucide-react'
import { profile } from '../../data/profile'
import { ExternalLink } from '../ui/ExternalLink'

export function Hero() {
  const { t } = useLanguage()
  return <section id="inicio" className="hero shell">
    <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{' '}{t("CÓDIGO, CONTEXTO E SOLUÇÕES.")}</p>
      <h1>Marcos Vinicius<br /><span>Scheffer da Conceição<span className="accent">.</span></span></h1>
      <p className="hero-role">{t(profile.role)}</p>
      <p className="hero-description">{t("Transformando desafios reais em aplicações bem construídas. Do backend com Java e Python à experiência completa com React, banco de dados e infraestrutura.")}</p>
      <div className="flex flex-wrap gap-3"><a className="button button-primary" href="#projetos">{t("Ver projetos")}{' '}<ArrowUpRight size={18} /></a><ExternalLink href={profile.github} className="button button-secondary"><Github size={18} /> GitHub</ExternalLink></div>
    </div>
    <div className="code-window" aria-label={t("Resumo das tecnologias e áreas de atuação")}>
      <div className="code-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.ts</span><Terminal size={15} /></div>
      <div className="code-body"><p className="code-comment">{t("// Muito além de escrever código.")}</p><p><b>const</b> developer = {'{'}</p><p className="indent">name: <em>'Marcos Scheffer'</em>,</p><p className="indent">focus: <em>'Backend & Full Stack'</em>,</p><p className="indent">stack: [</p><p className="indent-double"><em>'Java'</em>, <em>'Spring Boot'</em>,</p><p className="indent-double"><em>'Python'</em>, <em>'React'</em>,</p><p className="indent-double"><em>'PostgreSQL'</em>, <em>'Docker'</em></p><p className="indent">],</p><p className="indent">mindset: <em>{t("'Sempre aprendendo'")}</em></p><p>{'};'}</p><p className="code-last"><span>developer</span>.build()<span className="cursor">_</span></p></div>
      <div className="code-footer"><span className="status-dot" />{' '}{t("Da ideia à aplicação.")}</div>
    </div>
    <div className="hero-bottom"><span>BACKEND FIRST. FULL STACK MINDSET.</span><a href="#sobre">{t("Explore o portfólio")}{' '}<ArrowDown size={16} /></a></div>
  </section>
}
