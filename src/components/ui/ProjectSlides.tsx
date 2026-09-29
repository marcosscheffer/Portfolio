import type { ProjectScreenshot } from '../../types/project'
import { useLanguage } from '../../hooks/useLanguage'

interface Props {
  screenshots: ProjectScreenshot[]
  index: number
  previous: number | null
  direction: 'next' | 'previous'
  step: number
}

export function ProjectSlides({ screenshots, index, previous, direction, step }: Props) {
  const { t } = useLanguage()

  return (
    <span className="project-slides" key={step} data-direction={direction}>
      {previous !== null && (
        <span className="project-slide slide-out" aria-hidden="true">
          <img src={screenshots[previous].src} alt="" />
        </span>
      )}
      <span className={`project-slide${previous !== null ? ' slide-in' : ''}`}>
        <img src={screenshots[index].src} alt={t(screenshots[index].alt)} width="1920" height="1360" loading="lazy" />
      </span>
    </span>
  )
}
