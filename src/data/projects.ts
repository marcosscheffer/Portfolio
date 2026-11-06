import type { Project } from '../types/project'
import architecture from '../assets/images/projects/estik/architecture.svg'
import dashboard from '../assets/images/projects/estik/dashboard.webp'
import tickets from '../assets/images/projects/estik/chamados.webp'
import ticketChat from '../assets/images/projects/estik/chamado-chat.webp'
import map from '../assets/images/projects/estik/mapa.webp'
import computer from '../assets/images/projects/estik/computador.webp'
import balances from '../assets/images/projects/estik/estoque-saldos.webp'
import movements from '../assets/images/projects/estik/estoque-movimentacoes.webp'
import login from '../assets/images/projects/estik/login.webp'

export const projects: Project[] = [
  {
    id: 'estik',
    name: 'Estik',
    category: 'Sistema de gestão de TI · Uso interno',
    description: 'Chamados, chat em tempo real e inventário de TI em um só lugar.',
    details: 'Sistema de gestão de TI e manutenção desenvolvido no estágio. Sou responsável pela API REST em Java 25 e Spring Boot 4, organizada em arquitetura hexagonal por módulos. A autenticação é stateless com JWT, refresh token revogável e hierarquia de perfis entre usuário, técnico e administrador.',
    highlights: [
      'Ciclo completo de chamados: triagem, encaminhamento, resolução, reabertura e histórico de status.',
      'Chat por chamado e notificações em tempo real via Server-Sent Events, com anexos servidos por URLs assinadas.',
      'Computadores, estoque e movimentações entre unidades e setores, com histórico automático.',
      'Docker Compose com redes segmentadas, migrações Flyway, Swagger e backups agendados do PostgreSQL.',
    ],
    technologies: ['Java 25', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'Swagger / OpenAPI', 'Docker Compose'],
    repositoryUrl: 'https://github.com/marcosscheffer/estik-project-v2',
    relatedLinks: [{ label: 'API', href: 'https://github.com/marcosscheffer/estik-java-api-v2' }],
    snippet: {
      file: 'ticket/application/usecases/AssumeTicketUseCase.java',
      caption: 'Caso de uso que depende só de portas: assume o chamado, abre o chat e publica um evento de domínio.',
      href: 'https://github.com/marcosscheffer/estik-java-api-v2/blob/main/src/main/java/com/marcos/estik/ticket/application/usecases/AssumeTicketUseCase.java',
      code: `@Override
@Transactional
public TicketView execute(UUID ticketId, AuthenticatedUser principal) {
    Ticket ticket = ticketRepositoryPort.findTicketById(ticketId);
    TicketHistory ticketHistory = TicketHistory.create(
        ticket.getId(),
        StatusEnum.PROGRESS,
        ticket.getTicketType()
    );

    UUID chatId = loadTicketCreateChatPort.execute();
    ticket.assignTo(principal.id(), chatId);
    loadTicketCreateParticipantPort.execute(ticket.getAssigneeId(), chatId);
    loadTicketCreateParticipantPort.execute(ticket.getRequesterId(), chatId);

    ticketRepositoryPort.save(ticket);
    ticketHistoryRepositoryPort.save(ticketHistory);
    ticketEventPublisherPort.execute(
        new TicketAssumedNotifyEvent(
            ticket.getId(),
            ticket.getTitle(),
            ticket.getRequesterId(),
            principal.id()
        )
    );
    // ...monta e devolve a TicketView
}`,
    },
    featured: true,
    internal: true,
    screenshots: [
      { src: architecture, alt: 'Diagrama da arquitetura hexagonal da API do Estik: módulos, camadas, PostgreSQL com Flyway e backup em Docker Compose.', caption: '01 / Arquitetura da API' },
      { src: dashboard, alt: 'Painel inicial do Estik com contadores de chamados, distribuição por status e gráfico de chamados por mês.', caption: '02 / Painel · Dados fictícios' },
      { src: tickets, alt: 'Lista de chamados do Estik com filtros por status, prioridade, área e unidade.', caption: '03 / Chamados · Dados fictícios' },
      { src: ticketChat, alt: 'Detalhe de um chamado em andamento, com histórico de status e chat em tempo real entre solicitante e técnico.', caption: '04 / Chamado com chat em tempo real · Dados fictícios' },
      { src: map, alt: 'Mapa do Estik com unidades, departamentos, computadores e itens em estoque em árvore.', caption: '05 / Mapa de unidades e departamentos · Dados fictícios' },
      { src: computer, alt: 'Detalhe de um computador com hardware, localização e histórico de serviços.', caption: '06 / Computador e histórico · Dados fictícios' },
      { src: balances, alt: 'Saldos de estoque por item, com alerta para itens abaixo do mínimo.', caption: '07 / Saldos de estoque · Dados fictícios' },
      { src: movements, alt: 'Linha do tempo de movimentações de estoque: entradas, saídas, transferências e ajustes.', caption: '08 / Movimentações de estoque · Dados fictícios' },
      { src: login, alt: 'Tela de login do Estik em tema escuro, com campos vazios.', caption: '09 / Login' },
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
    snippet: {
      file: 'config/step/CardStepConfig.java',
      caption: 'Step tolerante a falhas: chunks de 500 cartas, retry em erros transitórios e skip de registros inválidos.',
      href: 'https://github.com/marcosscheffer/SpellTrade-batch/blob/main/src/main/java/com/marcos/cards_batch/config/step/CardStepConfig.java',
      code: `@Bean
public Step cardStep(JobRepository jobRepository) {
    return new StepBuilder("cardStep", jobRepository)
        .<ScryfallCardDto, CardJdbc>chunk(500)
        .reader(scryfallStreamReader)
        .processor(cardProcessor)
        .writer(cardWriter)
        .faultTolerant()
        .retry(CannotAcquireLockException.class)
        .retry(TransientDataAccessException.class)
        .retry(SQLException.class)
        .retryLimit(3)
        .skip(Exception.class)
        .skipLimit(100)
        .listener(stepSummaryListener)
        .listener(retryBatchListener)
        .listener(skipCardListener)
        .build();
}`,
    },
  },
]

export const featuredProjects = projects.filter(project => project.screenshots?.length)
export const otherProjects = projects.filter(project => !project.screenshots?.length)
