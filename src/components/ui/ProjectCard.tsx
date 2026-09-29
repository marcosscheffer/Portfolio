import { useLanguage } from '../../hooks/useLanguage'
import { useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, LockKeyhole, Maximize2, X } from 'lucide-react'
import type { Project } from '../../types/project'
import { ExternalLink } from './ExternalLink'
import { ProjectSlides } from './ProjectSlides'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const [slide, setSlide] = useState<{ index: number; previous: number | null; direction: 'next' | 'previous'; step: number }>({ index: 0, previous: null, direction: 'next', step: 0 })
  const { index } = slide
  const navigate = (direction: 'next' | 'previous') => {
    setSlide(current => ({
      index: (current.index + (direction === 'next' ? 1 : -1) + project.screenshots.length) % project.screenshots.length,
      previous: current.index,
      direction,
      step: current.step + 1,
    }))
  }
  const dialog = useRef<HTMLDialogElement>(null)
  const screenshot = project.screenshots[index]

  const controls = project.screenshots.length > 1 && (
    <div className="flex gap-2">
      <button aria-label={`${t('Imagem anterior de')} ${project.name}`} onClick={() => navigate('previous')}>
        <ChevronLeft size={18} />
      </button>
      <button aria-label={`${t('Próxima imagem de')} ${project.name}`} onClick={() => navigate('next')}>
        <ChevronRight size={18} />
      </button>
    </div>
  )

  return (
    <article className="project-card">
      <div className="project-visual">
        {screenshot ? (
          <button className="screenshot-button" onClick={() => dialog.current?.showModal()} aria-label={`${t('Ampliar imagem de')} ${project.name}: ${t(screenshot.caption)}`}>
            <ProjectSlides screenshots={project.screenshots} {...slide} />
            <span className="screenshot-zoom"><Maximize2 size={16} />{' '}{t("Ampliar imagem")}</span>
          </button>
        ) : <div className="empty-image">{t("Capturas em preparação")}</div>}
        {screenshot && <div className="gallery-bar"><span aria-live="polite">{t(screenshot.caption)}</span>{controls}</div>}
      </div>

      <div className="project-copy">
        <p className="eyebrow">{project.featured && <span className="featured-label">{t("EM DESTAQUE")}</span>} {t(project.category)}</p>
        <h3>{project.name}<span className="accent">.</span></h3>
        <h4>{t(project.description)}</h4>
        <p>{t(project.details)}</p>
        {project.highlights && <ul className="project-highlights">{project.highlights.map(highlight => <li key={t(highlight)}>{t(highlight)}</li>)}</ul>}
        <div className="flex flex-wrap gap-2">{project.technologies.map(technology => <span className="tag" key={technology}>{technology}</span>)}</div>
        <div className="project-actions">
          <ExternalLink href={project.repositoryUrl} className="button button-secondary"><Github size={17} />{' '}{t("Ver código")}{' '}<ArrowUpRight size={16} /></ExternalLink>
          {project.liveUrl && <ExternalLink href={project.liveUrl} className="button button-primary">{t("Ver projeto")}{' '}<ArrowUpRight size={16} /></ExternalLink>}
        </div>
        {!project.liveUrl && <p className="privacy-note"><LockKeyhole size={14} />{' '}{t("Uso interno. Sem demonstração pública.")}</p>}
      </div>

      {screenshot && (
        <dialog ref={dialog} className="screenshot-dialog" aria-label={`${t('Galeria de')} ${project.name}`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
          <div className="dialog-content">
            <div className="gallery-bar"><span>{project.name} / {t(screenshot.caption)}</span><button aria-label={t("Fechar imagem ampliada")} onClick={() => dialog.current?.close()}><X size={20} /></button></div>
            <ProjectSlides screenshots={project.screenshots} {...slide} />
            <div className="gallery-bar"><span aria-live="polite">{t("Imagem")}{' '}{index + 1}{' '}{t("de")}{' '}{project.screenshots.length}</span>{controls}</div>
          </div>
        </dialog>
      )}
    </article>
  )
}
