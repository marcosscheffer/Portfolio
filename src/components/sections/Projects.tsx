import { ArrowUpRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../../data/projects'
import { profile } from '../../data/profile'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import { ProjectCard } from '../projects/ProjectCard'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.projects} className="section projects-section">
      <div className="shell">
        <SectionHeading number="03" label={t('PROJETOS')} title={t('Código que se transforma em solução.')} />
        <div className="grid gap-7">
          {featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        {otherProjects.length > 0 && (
          <div className="project-grid">
            {otherProjects.map(project => <ProjectCard key={project.id} project={project} compact />)}
          </div>
        )}
        <p className="projects-footnote">
          {t('Construindo, aprendendo e evoluindo. Veja todos os repositórios no')}{' '}
          <ExternalLink href={profile.github}>GitHub <ArrowUpRight size={14} /></ExternalLink>
        </p>
      </div>
    </section>
  )
}
