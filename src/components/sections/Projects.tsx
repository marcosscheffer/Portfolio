import { useLanguage } from '../../hooks/useLanguage'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const { t } = useLanguage()
  return <section id="projetos" className="section projects-section"><div className="shell"><SectionHeading number="03" label={t("PROJETOS")} title={t("Código que se transforma em solução.")} /><div className="grid gap-7">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div><p className="projects-footnote">{t("Construindo, aprendendo e evoluindo. Novos projetos por aqui em breve.")}</p></div></section>
}
