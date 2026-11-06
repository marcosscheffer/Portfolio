import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Project } from '../../types/project'
import { ExternalLink } from '../ui/ExternalLink'
import { TagList } from '../ui/TagList'
import { ProjectGallery } from './ProjectGallery'

interface Props {
  project: Project
  /** Card compacto, sem galeria, usado na grade de outros projetos. */
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: Props) {
  const { t } = useLanguage()

  return (
    <article className={compact ? 'project-card project-card--compact' : 'project-card'}>
      {!compact && <ProjectGallery name={project.name} screenshots={project.screenshots ?? []} />}

      <div className="project-copy">
        <p className="eyebrow">
          {project.featured && <span className="featured-label">{t('EM DESTAQUE')}</span>} {t(project.category)}
        </p>
        <h3>{project.name}<span className="accent">.</span></h3>
        <h4>{t(project.description)}</h4>
        <p>{t(project.details)}</p>
        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map(highlight => <li key={highlight}>{t(highlight)}</li>)}
          </ul>
        )}
        <TagList items={project.technologies} />
        <div className="project-actions">
          <ExternalLink href={project.repositoryUrl} className="button button-secondary">
            <Github size={17} /> {t('Ver código')} <ArrowUpRight size={16} />
          </ExternalLink>
          {project.relatedLinks?.map(link => (
            <ExternalLink key={link.href} href={link.href} className="button button-secondary">
              <Github size={17} /> {t(link.label)} <ArrowUpRight size={16} />
            </ExternalLink>
          ))}
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl} className="button button-primary">
              {t('Ver projeto')} <ArrowUpRight size={16} />
            </ExternalLink>
          )}
        </div>
        {project.internal && !project.liveUrl && (
          <p className="privacy-note"><LockKeyhole size={14} /> {t('Uso interno. Sem demonstração pública.')}</p>
        )}
      </div>
    </article>
  )
}
