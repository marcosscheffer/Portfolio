import { Braces, Database, PanelsTopLeft, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TechnologyGroup {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

export const technologies: TechnologyGroup[] = [
  {
    icon: Braces,
    title: 'Backend',
    description: 'A lógica por trás de tudo.',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'REST APIs', 'JWT', 'Python', 'Flask'],
  },
  {
    icon: PanelsTopLeft,
    title: 'Frontend',
    description: 'Interfaces que conectam.',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    icon: Database,
    title: 'Banco de dados',
    description: 'Dados bem estruturados.',
    items: ['PostgreSQL', 'MySQL', 'Flyway', 'SQL'],
  },
  {
    icon: Workflow,
    title: 'DevOps & ferramentas',
    description: 'Do código à aplicação.',
    items: ['Docker', 'Docker Compose', 'Maven', 'Swagger / OpenAPI', 'Nginx', 'Git', 'GitHub', 'Linux'],
  },
]
