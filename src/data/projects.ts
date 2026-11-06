import type { Project } from '../types/project'
import architecture from '../assets/images/projects/estik/architecture.svg'
import dashboard from '../assets/images/projects/estik/dashboard.webp'
import tickets from '../assets/images/projects/estik/chamados.webp'
import units from '../assets/images/projects/estik/unidades.webp'
import departments from '../assets/images/projects/estik/setores.webp'
import login from '../assets/images/projects/estik/login.webp'

export const projects: Project[] = [
  {
    id: 'estik',
    name: 'Estik',
    category: 'Aplicação full stack · Uso interno',
    description: 'Chamados, chat em tempo real e inventário de TI em um só lugar.',
    details: 'Sistema de gestão de TI e manutenção desenvolvido no estágio. Uma API REST em Java 25 e Spring Boot 4, organizada em arquitetura hexagonal por módulos, atende uma interface React servida por Nginx. A autenticação é stateless com JWT, refresh token revogável e hierarquia de perfis entre usuário, técnico e administrador.',
    highlights: [
      'Ciclo completo de chamados: triagem, encaminhamento, resolução, reabertura e histórico de status.',
      'Chat por chamado e notificações em tempo real via Server-Sent Events, com anexos servidos por URLs assinadas.',
      'Computadores, estoque e movimentações entre unidades e setores, com histórico automático.',
      'Docker Compose com redes segmentadas, migrações Flyway, Swagger e backups agendados do PostgreSQL.',
    ],
    technologies: ['Java 25', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'React', 'TypeScript', 'Docker Compose', 'Nginx'],
    repositoryUrl: 'https://github.com/marcosscheffer/estik-project-v2',
    relatedLinks: [{ label: 'API', href: 'https://github.com/marcosscheffer/estik-java-api-v2' }],
    featured: true,
    internal: true,
    screenshots: [
      { src: architecture, alt: 'Diagrama ilustrativo da arquitetura do Estik: React, Nginx, Spring Boot e PostgreSQL em containers Docker.', caption: '01 / Arquitetura da aplicação' },
      { src: dashboard, alt: 'Painel do Estik com resumo operacional e indicadores substituídos por dados de demonstração.', caption: '02 / Visão geral · Dados fictícios' },
      { src: tickets, alt: 'Central de chamados do Estik com busca, filtros por prioridade e status e conta de demonstração.', caption: '03 / Chamados · Dados fictícios' },
      { src: units, alt: 'Cadastro de unidades do Estik com nomes e códigos fictícios: Unidade Alfa e Unidade Beta.', caption: '04 / Unidades · Dados fictícios' },
      { src: departments, alt: 'Setor de testes com computador fictício, especificações de exemplo e histórico de movimentação sanitizado.', caption: '05 / Setores e equipamentos · Dados fictícios' },
      { src: login, alt: 'Tela de login do Estik em tema escuro, com campos de usuário e senha vazios.', caption: '06 / Login' },
    ],
  },
  {
    id: 'spelltrade-batch',
    name: 'SpellTrade Batch',
    category: 'Processamento de dados · Projeto de estudo',
    description: 'Importação de alto volume de dados com Spring Batch e PostgreSQL.',
    details: 'Importa o catálogo de cartas de Magic: The Gathering da Scryfall para PostgreSQL, deixando os dados prontos para outras aplicações. Um leitor customizado com Jackson Streaming processa uma carta por vez, sem carregar o arquivo inteiro em memória.',
    highlights: [
      'Jobs com múltiplos steps no modelo chunk: reader, processor e writer.',
      'Retry para falhas transitórias e skip para registros inválidos, sem interromper o job.',
      'Listeners com resumo do job, estatísticas por step e registros ignorados.',
      'Schema versionado com Flyway e constraints que garantem a integridade dos dados.',
    ],
    technologies: ['Java 25', 'Spring Boot', 'Spring Batch', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'Jackson', 'Docker Compose'],
    repositoryUrl: 'https://github.com/marcosscheffer/SpellTrade-batch',
  },
  {
    id: 'clinic-api',
    name: 'Clinic API',
    category: 'API REST · Projeto de estudo',
    description: 'Gestão de médicos e pacientes com Spring Boot e MySQL.',
    details: 'API REST para o cadastro de médicos e pacientes de uma clínica, com listagem paginada, validação de entrada e exclusão lógica para preservar o histórico dos registros.',
    highlights: [
      'CRUD de médicos e pacientes com endereço e dados de contato.',
      'Validação com Jakarta Validation e paginação nas listagens.',
      'Soft delete por flag de atividade e migrações com Flyway.',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Flyway', 'Maven'],
    repositoryUrl: 'https://github.com/marcosscheffer/clinic-api',
  },
]

export const featuredProjects = projects.filter(project => project.screenshots?.length)
export const otherProjects = projects.filter(project => !project.screenshots?.length)
