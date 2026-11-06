import { useLanguage } from '../../i18n/LanguageContext'
import type { CarouselState } from '../../hooks/useCarousel'
import type { ProjectScreenshot } from '../../types/project'

interface Props extends CarouselState {
  screenshots: ProjectScreenshot[]
}

export function ProjectSlides({ screenshots, index, previous, direction, step }: Props) {
  const { t } = useLanguage()
  const current = screenshots[index]

  return (
    <span className="project-slides" key={step} data-direction={direction}>
      {previous !== null && (
        <span className="project-slide slide-out" aria-hidden="true">
          <img src={screenshots[previous].src} alt="" />
        </span>
      )}
      <span className={`project-slide${previous !== null ? ' slide-in' : ''}`}>
        <img src={current.src} alt={t(current.alt)} loading="lazy" decoding="async" />
      </span>
    </span>
  )
}
