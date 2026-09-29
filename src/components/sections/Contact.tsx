import { useLanguage } from '../../hooks/useLanguage'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { ExternalLink } from '../ui/ExternalLink'

export function Contact() {
  const { t } = useLanguage()
  return <section id="contato" className="section shell contact"><p className="eyebrow"><span>05</span>{' '}{t("/ CONTATO")}</p><h2>{t("Uma boa conversa pode ser")}<br />{t("o próximo")}{' '}<span>{t("começo.")}</span></h2><p>{t("Vamos trocar ideias sobre tecnologia, projetos e oportunidades.")}</p><div className="contact-links"><ExternalLink href={profile.github}><Github size={20} /> GitHub <ArrowUpRight size={17} /></ExternalLink><ExternalLink href={profile.linkedin}><Linkedin size={20} /> LinkedIn <ArrowUpRight size={17} /></ExternalLink>{profile.email ? <a href={`mailto:${profile.email}`}><Mail size={20} />{' '}{t("E-mail")}{' '}<ArrowUpRight size={17} /></a> : <ExternalLink><Mail size={20} />{' '}{t("E-mail")}{' '}<ArrowUpRight size={17} /></ExternalLink>}</div>{!profile.github && !profile.linkedin && !profile.email && <p className="contact-pending">{t("Canais de contato em breve.")}</p>}</section>
}
