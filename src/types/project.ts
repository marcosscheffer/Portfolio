export interface ProjectScreenshot {
  src: string
  alt: string
  caption: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface CodeSnippet {
  /** Caminho do arquivo no repositório, exibido no cabeçalho do bloco. */
  file: string
  /** Frase curta sobre o que o trecho mostra. */
  caption: string
  code: string
  /** Link para o arquivo completo no GitHub. */
  href?: string
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
  /** Trecho real de código do repositório, exibido no card. */
  snippet?: CodeSnippet
  liveUrl?: string
  featured?: boolean
  /** Sistema de uso interno, sem demonstração pública. */
  internal?: boolean
}
