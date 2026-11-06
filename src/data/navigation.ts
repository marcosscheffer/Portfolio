/** Âncoras das seções. Os ids são usados pelo menu e pelas próprias seções. */
export const sectionIds = {
  hero: 'inicio',
  about: 'sobre',
  technologies: 'tecnologias',
  projects: 'projetos',
  experience: 'experiencia',
  contact: 'contato',
} as const

export const navigation = [
  { label: 'Sobre', id: sectionIds.about },
  { label: 'Tecnologias', id: sectionIds.technologies },
  { label: 'Projetos', id: sectionIds.projects },
  { label: 'Experiência', id: sectionIds.experience },
]
