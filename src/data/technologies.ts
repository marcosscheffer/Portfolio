import { Braces, Database, Sparkles, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TechnologyGroup {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

/** Skills listadas no perfil do GitHub (github.com/marcosscheffer). */
export const technologies: TechnologyGroup[] = [
  {
    icon: Braces,
    title: 'Backend',
    description: 'A lógica por trás de tudo.',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Banco de dados',
    description: 'Dados bem estruturados.',
    items: ['PostgreSQL', 'MySQL', 'Flyway'],
  },
  {
    icon: Workflow,
    title: 'Ferramentas',
    description: 'Do código à aplicação.',
    items: ['Docker', 'Docker Compose', 'Git', 'Maven', 'Swagger / OpenAPI'],
  },
  {
    icon: Sparkles,
    title: 'Também já usei',
    description: 'Experiência complementar.',
    items: ['Python', 'Flask'],
  },
]
