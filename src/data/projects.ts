import architecture from '../assets/images/projects/estik/architecture.svg'
import type { Project } from '../types/project'
import dashboard from '../assets/images/projects/estik/dashboard.png'
import login from '../assets/images/projects/estik/login.png'
import tickets from '../assets/images/projects/estik/chamados.png'
import units from '../assets/images/projects/estik/unidades.png'
import departments from '../assets/images/projects/estik/setores.png'

export const projects: Project[] = [
  {
    id: 'estik',
    name: 'Estik',
    category: 'Aplicação full stack · Uso interno',
    description: 'Chamados de suporte e infraestrutura de TI em um só lugar.',
    details: 'Sistema full stack para centralizar o atendimento de suporte e organizar computadores, componentes e itens nas unidades. Integra uma interface React a uma API REST com Spring Boot e PostgreSQL, com autenticação JWT e controle de acesso por perfil.',
    highlights: [
      'Gestão de chamados com status, prioridades e busca por título.',
      'Cadastro de computadores com especificações e vínculo a unidades e setores.',
      'Organização de itens e registro de movimentações entre setores.',
      'Deploy com Docker Compose e Nginx, com serviços de backup e monitoramento via Prometheus e Grafana.',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'React', 'PostgreSQL', 'Docker', 'Docker Compose', 'Nginx'],
    repositoryUrl: 'https://github.com/marcosscheffer/estik-project',
    // liveUrl: adicione apenas se houver uma demonstração pública segura.
    featured: true,
    screenshots: [
      { src: architecture, alt: 'Diagrama ilustrativo da arquitetura do Estik: React, Nginx, Spring Boot e PostgreSQL em containers Docker.', caption: '01 / Arquitetura da aplicação' },
      { src: dashboard, alt: 'Painel do Estik com resumo operacional e indicadores substituídos por dados de demonstração.', caption: '02 / Visão geral · Dados fictícios' },
      { src: tickets, alt: 'Central de chamados do Estik com busca, filtros por prioridade e status e conta de demonstração.', caption: '03 / Chamados · Dados fictícios' },
      { src: units, alt: 'Cadastro de unidades do Estik com nomes e códigos fictícios: Unidade Alfa e Unidade Beta.', caption: '04 / Unidades · Dados fictícios' },
      { src: departments, alt: 'Setor de testes com computador fictício, especificações de exemplo e histórico de movimentação sanitizado.', caption: '05 / Setores e equipamentos · Dados fictícios' },
      { src: login, alt: 'Tela de login do Estik em tema escuro, com campos de usuário e senha vazios.', caption: '06 / Login' },
    ],
  },
]
