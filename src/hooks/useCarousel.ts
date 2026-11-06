import { useCallback, useState } from 'react'

export type SlideDirection = 'next' | 'previous'

export interface CarouselState {
  index: number
  /** Slide que está saindo, usado para a animação de transição. */
  previous: number | null
  direction: SlideDirection
  /** Incrementa a cada navegação para reiniciar a animação. */
  step: number
}

const initialState: CarouselState = { index: 0, previous: null, direction: 'next', step: 0 }

export function useCarousel(length: number) {
  const [state, setState] = useState<CarouselState>(initialState)

  const navigate = useCallback((direction: SlideDirection) => {
    if (length < 2) return
    setState(current => ({
      index: (current.index + (direction === 'next' ? 1 : -1) + length) % length,
      previous: current.index,
      direction,
      step: current.step + 1,
    }))
  }, [length])

  return { ...state, next: () => navigate('next'), previousSlide: () => navigate('previous') }
}
