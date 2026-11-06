import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ExperienceEntry {
  icon: LucideIcon
  label: string
  title: string
  organization: string
  activities: string[]
}

export const experience: ExperienceEntry[] = [
  {
    icon: BriefcaseBusiness,
    label: 'ATUALMENTE',
    title: 'Estagiário de TI',
    organization: 'Tecnologia da informação · Setor público',
    activities: [
      'Desenvolvimento do Estik, sistema interno de chamados e inventário',
      'Implantação e manutenção de aplicações',
      'Infraestrutura de TI',
      'Suporte técnico',
      'Manutenção de computadores',
    ],
  },
  {
    icon: GraduationCap,
    label: 'FORMAÇÃO',
    title: 'Análise e Desenvolvimento de Sistemas',
    organization: 'Anhanguera · Graduação tecnológica em andamento',
    activities: [],
  },
]
