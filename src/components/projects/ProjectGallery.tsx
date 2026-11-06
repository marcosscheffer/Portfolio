import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCarousel } from '../../hooks/useCarousel'
import type { ProjectScreenshot } from '../../types/project'
import { ProjectSlides } from './ProjectSlides'

interface Props {
  name: string
  screenshots: ProjectScreenshot[]
}

export function ProjectGallery({ name, screenshots }: Props) {
  const { t } = useLanguage()
  const carousel = useCarousel(screenshots.length)
  const dialog = useRef<HTMLDialogElement>(null)
  const screenshot = screenshots[carousel.index]
  const slideProps = { index: carousel.index, previous: carousel.previous, direction: carousel.direction, step: carousel.step }

  if (!screenshot) {
    return <div className="project-visual"><div className="empty-image">{t('Capturas em preparação')}</div></div>
  }

  const controls = screenshots.length > 1 && (
    <div className="flex gap-2">
      <button type="button" aria-label={`${t('Imagem anterior de')} ${name}`} onClick={carousel.previousSlide}>
        <ChevronLeft size={18} />
      </button>
      <button type="button" aria-label={`${t('Próxima imagem de')} ${name}`} onClick={carousel.next}>
        <ChevronRight size={18} />
      </button>
    </div>
  )

  return (
    <div className="project-visual">
      <button
        type="button"
        className="screenshot-button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`${t('Ampliar imagem de')} ${name}: ${t(screenshot.caption)}`}
      >
        <ProjectSlides screenshots={screenshots} {...slideProps} />
        <span className="screenshot-zoom"><Maximize2 size={16} /> {t('Ampliar imagem')}</span>
      </button>
      <div className="gallery-bar">
        <span aria-live="polite">{t(screenshot.caption)}</span>
        {controls}
      </div>

      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-label={`${t('Galeria de')} ${name}`}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight') carousel.next()
          if (event.key === 'ArrowLeft') carousel.previousSlide()
        }}
      >
        <div className="dialog-content">
          <div className="gallery-bar">
            <span>{name} / {t(screenshot.caption)}</span>
            <button type="button" aria-label={t('Fechar imagem ampliada')} onClick={() => dialog.current?.close()}>
              <X size={20} />
            </button>
          </div>
          <ProjectSlides screenshots={screenshots} {...slideProps} />
          <div className="gallery-bar">
            <span aria-live="polite">{t('Imagem')} {carousel.index + 1} {t('de')} {screenshots.length}</span>
            {controls}
          </div>
        </div>
      </dialog>
    </div>
  )
}
