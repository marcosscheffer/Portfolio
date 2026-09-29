export interface ProjectScreenshot {
  src: string
  alt: string
  caption: string
}

export interface Project {
  id: string
  name: string
  category: string
  description: string
  details: string
  highlights?: string[]
  technologies: string[]
  screenshots: ProjectScreenshot[]
  repositoryUrl?: string
  liveUrl?: string
  featured?: boolean
}
