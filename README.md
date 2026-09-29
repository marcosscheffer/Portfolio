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
public/favicon.svg
src/
├── assets/images/projects/estik/
│   ├── dashboard.png
│   ├── chamados.png
│   ├── unidades.png
│   ├── setores.png
│   └── login.png
├── components/
│   ├── layout/           # Header e Footer
│   ├── sections/         # Seções da página
│   └── ui/               # Links, títulos e card com galeria
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── technologies.ts
├── types/project.ts
├── App.tsx
├── main.tsx
└── styles.css
Dockerfile
nginx.conf
```

Pastas de hooks, utils e ícones próprios podem ser adicionadas quando necessárias; não há abstrações vazias. Tailwind atende a utilidades de layout; o CSS centraliza a identidade visual e os breakpoints.

## Idiomas

O seletor PT/EN no cabeçalho alterna os textos do portfólio, controles, legendas, textos alternativos e metadados no navegador. Português é o padrão; a preferência é salva em `localStorage` quando disponível. As capturas do Estik permanecem em português, como no sistema original.

As traduções em inglês ficam em `src/data/translations.ts`; o texto em português é a chave. Ao adicionar projetos ou alterar descrições, inclua a tradução correspondente nesse arquivo. Textos sem tradução usam o original como fallback. O HTML estático mantém SEO em português; os metadados em inglês são aplicados no cliente, sem criar rotas separadas.

## Alterar contatos

Edite `src/data/profile.ts` para alterar `github`, `linkedin` e `email`, já preenchidos com os contatos fornecidos por Marcos. Informe e-mail sem o prefixo `mailto:`. Se algum campo ficar vazio, o canal será exibido como indisponível, sem link falso.

Nome e cargo também ficam nesse arquivo. O nome de apresentação no Hero possui quebra editorial em `src/components/sections/Hero.tsx`; ajuste-o se mudar a identidade do portfólio. Metadados ficam em `index.html`.

## Adicionar um projeto

Edite apenas a lista em `src/data/projects.ts`, importando as imagens locais. Todos os cards são renderizados automaticamente. Exemplo de estrutura para um futuro projeto (substitua textos e links antes de publicar):

```tsx
import screenshot from '../assets/images/projects/spelltrade/overview.webp'

// Adicione ao array projects:
{
  id: 'spelltrade',
  name: 'Spelltrade',
  category: 'Aplicação web',
  description: 'Resumo real do projeto.',
  details: 'Descreva o problema, sua contribuição e a solução.',
  technologies: ['React', 'TypeScript'],
  repositoryUrl: '',
  // liveUrl: inclua somente quando houver uma URL pública real.
  featured: false,
  screenshots: [
    { src: screenshot, alt: 'Descrição objetiva da tela apresentada.', caption: '01 / Visão geral' },
  ],
}
```

O contrato está em `src/types/project.ts`. `repositoryUrl`, `liveUrl`, `featured` e a lista de funcionalidades `highlights` são opcionais. Sem repositório, “Ver código” fica indisponível; “Ver projeto” só aparece quando há `liveUrl`. A galeria aceita quantas imagens forem necessárias e apresenta controles apenas quando existem pelo menos duas. Clique na imagem para ampliar; use Escape ou o botão fechar para retornar. Uma lista vazia mostra um espaço reservado.

## Screenshots do Estik

As cinco telas fornecidas estão em `dashboard.png`, `chamados.png`, `unidades.png`, `setores.png` e `login.png`. As quatro telas internas foram editadas com IA para substituir identificação da conta, nomes e códigos de unidades, computador, especificações e data do registro por dados fictícios. São versões editadas para apresentação, não reproduções pixel a pixel. As legendas identificam os dados fictícios. A nova tela de login em tema escuro foi mantida como enviada, com campos vazios. Os originais com dados internos não são incluídos no projeto. O diagrama `architecture.svg` abre a galeria, seguido pelas cinco telas. O SVG de placeholder permanece como ilustração de reserva. Para novas imagens revisadas, use por exemplo:

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

A descrição combina o objetivo informado por Marcos com a leitura do código público em 29/09/2026: gestão de chamados com prioridade e busca, computadores vinculados a unidades/setores, registros de movimentação e autenticação JWT com regras por perfil. A infraestrutura declara serviços de backup, Prometheus e Grafana. Isso descreve a implementação disponível; não é uma certificação de segurança nem uma validação do ambiente de produção.

Fontes: [orquestração do Estik](https://github.com/marcosscheffer/estik-project), [backend](https://github.com/marcosscheffer/estik-api) e [frontend](https://github.com/marcosscheffer/estik-react). Foram lidas as branches atuais dos subprojetos, que podem diferir dos commits fixados pelos submódulos.

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

Edite título, descrição e Open Graph básico em `index.html`. Depois de ter um domínio público, você pode acrescentar `og:url` e uma URL canônica verdadeira. Substitua `public/favicon.svg` para mudar o favicon; se alterar o formato ou caminho, atualize o HTML. Não há domínio ou imagem social inventados.

A interface inclui link para pular ao conteúdo, landmarks semânticos, foco visível, botões de galeria com rótulos, menu mobile com `aria-expanded` e fechamento via Escape, textos alternativos e respeito a `prefers-reduced-motion`. Os layouts se adaptam a celular, tablet e desktop.

## Referências

- [Vite — Getting Started](https://vite.dev/guide/)
- [Tailwind CSS 3 — integração com Vite](https://v3.tailwindcss.com/docs/guides/vite)
