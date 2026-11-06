export interface ProjectScreenshot {
  src: string
  alt: string
  caption: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  name: string
  category: string
  description: string
  details: string
  highlights?: string[]
  technologies: string[]
  /** Galeria opcional. Projetos sem capturas são exibidos em cards compactos. */
  screenshots?: ProjectScreenshot[]
  repositoryUrl?: string
  /** Repositórios relacionados, como o repositório da API. */
  relatedLinks?: ProjectLink[]
  liveUrl?: string
  featured?: boolean
  /** Sistema de uso interno, sem demonstração pública. */
  internal?: boolean
}
