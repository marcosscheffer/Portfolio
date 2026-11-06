# Marcos Scheffer — Portfólio

Portfólio profissional em português, com foco em desenvolvimento backend e full stack. Inclui apresentação, tecnologias, projetos, experiência e contato em uma página responsiva, com tema escuro, navegação sticky e suporte a movimento reduzido.

## Tecnologias

React, Vite, TypeScript, Tailwind CSS 3 (PostCSS), Lucide React e ESLint. Produção com Docker multi-stage e Nginx. Sem biblioteca de componentes, roteamento ou animação adicional.

Rollup e esbuild usam suas variantes oficiais WebAssembly, via aliases e overrides no npm, para compatibilidade com ambientes Windows que restringem binários nativos. Isso afeta apenas as ferramentas de desenvolvimento e build.

## Requisitos e instalação

Node.js 22.12+ (recomendado Node 24) e npm.

```bash
npm ci
npm run dev
```

Acesse o endereço exibido pelo Vite, normalmente http://localhost:5173.

## Validação e build

```bash
npm run lint
npm run build
npm run preview
```

O build verifica TypeScript e gera os arquivos estáticos em `dist/`. O preview normalmente abre em http://localhost:4173.

## Estrutura

```text
.github/workflows/ci.yml       # Lint e build a cada push e pull request
public/favicon.svg
src/
├── assets/images/projects/    # Capturas e diagramas (WebP/SVG)
├── components/
│   ├── layout/                # Header e Footer
│   ├── projects/              # ProjectCard, galeria e slides
│   ├── sections/              # Seções da página (Hero, Sobre, Projetos…)
│   └── ui/                    # Peças genéricas: links, títulos, tags
├── data/                      # Todo o conteúdo editável do site
│   ├── profile.ts             # Nome, cargo, disponibilidade e contatos
│   ├── about.ts               # Texto "Sobre mim" e princípios
│   ├── technologies.ts        # Grupos de tecnologias
│   ├── projects.ts            # Projetos exibidos
│   ├── experience.ts          # Experiência e formação
│   └── navigation.ts          # Ids das seções e itens do menu
├── hooks/useCarousel.ts       # Estado da galeria de imagens
├── i18n/                      # Contexto, provider e traduções PT/EN
├── types/project.ts
├── App.tsx
├── main.tsx
└── styles.css
Dockerfile
nginx.conf
```

Os componentes só renderizam; textos, links e listas ficam em `src/data/`. Para mudar o conteúdo do portfólio, normalmente basta editar esses arquivos e acrescentar a tradução em `src/i18n/translations.ts`.

## Idiomas

O seletor PT/EN no cabeçalho alterna os textos do portfólio, controles, legendas, textos alternativos e metadados no navegador. Português é o padrão; a preferência é salva em `localStorage` quando disponível. As capturas do Estik permanecem em português, como no sistema original.

As traduções em inglês ficam em `src/i18n/translations.ts`; o texto em português é a chave. Ao adicionar projetos ou alterar descrições, inclua a tradução correspondente nesse arquivo. Textos sem tradução usam o original como fallback. O HTML estático mantém SEO em português; os metadados em inglês são aplicados no cliente, sem criar rotas separadas.

## Alterar contatos

Edite `src/data/profile.ts` para alterar `github`, `linkedin`, `email`, `website`, localização, disponibilidade e a stack exibida no Hero (`heroStack`), já preenchidos com os contatos fornecidos por Marcos. Informe e-mail sem o prefixo `mailto:`. Se algum campo ficar vazio, o canal será exibido como indisponível, sem link falso.

Nome e cargo também ficam nesse arquivo. O nome de apresentação no Hero possui quebra editorial em `src/components/sections/Hero.tsx`; ajuste-o se mudar a identidade do portfólio. Metadados ficam em `index.html`.

## Adicionar um projeto

Edite apenas a lista em `src/data/projects.ts`. O contrato está em `src/types/project.ts`.

- Projetos **com** `screenshots` aparecem em destaque, com galeria (setas, teclado e imagem ampliada).
- Projetos **sem** `screenshots` aparecem em cards compactos, em grade de duas colunas.
- `repositoryUrl`, `relatedLinks` (ex.: repositório da API), `liveUrl`, `highlights`, `featured` e `internal` são opcionais. `internal: true` exibe o aviso de uso interno sem demonstração pública.

```ts
{
  id: 'meu-projeto',
  name: 'Meu Projeto',
  category: 'API REST · Projeto de estudo',
  description: 'Resumo em uma linha.',
  details: 'Problema, sua contribuição e a solução.',
  highlights: ['Funcionalidade relevante.'],
  technologies: ['Java', 'Spring Boot'],
  repositoryUrl: 'https://github.com/marcosscheffer/meu-projeto',
}
```

Os projetos atuais (Estik v2, SpellTrade Batch e Clinic API) foram descritos a partir dos READMEs públicos dos repositórios em 06/11/2026.

## Screenshots do Estik

As cinco telas fornecidas estão em `dashboard.webp`, `chamados.webp`, `unidades.webp`, `setores.webp` e `login.webp` (convertidas de PNG para WebP, de ~4 MB para ~180 KB no total). As quatro telas internas foram editadas com IA para substituir identificação da conta, nomes e códigos de unidades, computador, especificações e data do registro por dados fictícios. São versões editadas para apresentação, não reproduções pixel a pixel. As legendas identificam os dados fictícios. A nova tela de login em tema escuro foi mantida como enviada, com campos vazios. Os originais com dados internos não são incluídos no projeto. O diagrama `architecture.svg` abre a galeria, seguido pelas cinco telas. Para novas imagens revisadas, use por exemplo:

```text
src/assets/images/projects/estik/dashboard.webp
src/assets/images/projects/estik/login.webp
```

Importe-as em `src/data/projects.ts` e substitua ou amplie `screenshots`:

```tsx
import dashboard from '../assets/images/projects/estik/dashboard.webp'
import login from '../assets/images/projects/estik/login.webp'

screenshots: [
  { src: dashboard, alt: 'Painel do Estik com dados fictícios.', caption: '01 / Dashboard' },
  { src: login, alt: 'Tela de autenticação do Estik sem dados preenchidos.', caption: '02 / Login' },
],
```

Prefira WebP otimizado e preserve a proporção original das capturas. As imagens usam `object-fit: contain` para não cortar conteúdo e carregamento lazy na galeria.

### Conteúdo técnico do Estik

A descrição segue a versão 2 do Estik, conforme os READMEs públicos lidos em 06/11/2026: ciclo completo de chamados, chat e notificações em tempo real via SSE, computadores, estoque e movimentações, autenticação JWT com refresh token revogável e hierarquia de perfis, arquitetura hexagonal por módulos, Flyway e Docker Compose com redes segmentadas e backups. As capturas de tela foram feitas antes da v2 e podem não refletir todas as telas atuais. Isso descreve a implementação disponível; não é uma certificação de segurança nem uma validação do ambiente de produção.

Fontes: [orquestração do Estik v2](https://github.com/marcosscheffer/estik-project-v2) e [API](https://github.com/marcosscheffer/estik-java-api-v2). Foram lidas as branches atuais dos subprojetos, que podem diferir dos commits fixados pelos submódulos.

**Revise antes de adicionar arquivos ao repositório:** remova usuários, senhas, tokens, IPs, domínios internos, nomes da organização, dados reais, credenciais e variáveis de ambiente, inclusive em URLs visíveis e metadados das imagens. Use dados inteiramente fictícios. Não basta ocultar informações com CSS; todo arquivo publicado é acessível. O Estik não inclui demonstração pública. Só preencha o repositório após confirmar que seu conteúdo pode ser divulgado.

## Docker

Com Docker instalado e em execução:

```bash
docker build -t marcos-portfolio .
docker run --rm -p 8080:80 --name marcos-portfolio marcos-portfolio
```

Acesse http://localhost:8080. O primeiro estágio usa Node 24, `npm ci` e build. O segundo usa `nginx:alpine` e copia somente `dist/`. A configuração aplica fallback para `index.html`, cache longo para assets com hash e revalidação do HTML. Arquivos de ambiente e dependências locais são excluídos pelo `.dockerignore`.

## Deploy na Vercel

1. Envie o projeto e `package-lock.json` para um repositório GitHub, sem `node_modules`, `dist` ou arquivos privados.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Confirme o preset **Vite**, build `npm run build` e diretório de saída `dist`.
4. Clique em **Deploy**.

Não são necessárias variáveis de ambiente nem `vercel.json`. A navegação usa âncoras na mesma página, sem rotas que precisem de rewrites na Vercel. Docker é uma alternativa de hospedagem, não um requisito para a Vercel.

## SEO e acessibilidade

Edite título, descrição e Open Graph básico em `index.html`. `og:url` e a URL canônica apontam para https://portfolio-drab-nine-34.vercel.app; atualize-as se o domínio mudar. Substitua `public/favicon.svg` para mudar o favicon; se alterar o formato ou caminho, atualize o HTML. Não há imagem social inventada.

A interface inclui link para pular ao conteúdo, landmarks semânticos, foco visível, botões de galeria com rótulos, menu mobile com `aria-expanded` e fechamento via Escape, textos alternativos e respeito a `prefers-reduced-motion`. Os layouts se adaptam a celular, tablet e desktop.

## Referências

- [Vite — Getting Started](https://vite.dev/guide/)
- [Tailwind CSS 3 — integração com Vite](https://v3.tailwindcss.com/docs/guides/vite)
