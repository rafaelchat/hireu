# HireU — plano de produto e design

## Escopo desta entrega

Criar a primeira experiência pública do HireU, separada do HireABrazilian, com foco Brazil-first e base preparada para expansão LATAM. A experiência deve deixar claros os dois atores do marketplace: candidato procurando uma oportunidade e empresa procurando uma pessoa. A primeira entrega é uma homepage funcional e responsiva com busca, filtros locais, cartões de vagas, chamadas para os dois fluxos e uma prévia visual do processo automatizado por IA. A camada de dados, cobrança, autenticação e automações será conectada em etapas seguintes sem comprometer a experiência pública.

## Implementação

- Frontend React + TypeScript + Vite, reaproveitando o starter web-db-user.
- Roteamento atual com Wouter; a homepage é a primeira superfície e as próximas rotas previstas ficam declaradas em `client/public/manus-routes.json`.
- Dados de demonstração locais e tipados para representar vagas verificadas; a contagem de resultados deriva do array, sem números de marketing inventados.
- Interações sem backend nesta etapa: pesquisa por texto, filtros por formato, alternância de tema, seleção de intenção candidato/empresa e CTAs com feedback por toast.
- Backend/Database já habilitados no projeto para as próximas etapas: perfis, empresas, vagas, aplicações, etapas de processo, testes, cobranças e logs de automação.
- Nenhuma dependência nova será adicionada.

## Estrutura

- `client/src/pages/Home.tsx`: composição da homepage e estado de busca/filtros.
- `client/src/index.css`: tokens visuais, tipografia, superfícies, grid editorial e responsividade.
- `client/src/App.tsx`: providers, tema e rotas.
- `client/public/manus-routes.json`: manifesto de rotas públicas.
- `drizzle/schema.ts` e `server/`: reservados para a próxima fase de dados e automações.

## Design

### Estilos considerados

1. **Editorial tech brasileira** — 0,07: tipografia de revista, blocos de cor solar e estrutura assimétrica orientada a conteúdo.
2. **Dashboard SaaS azul** — 0,06: interface tradicional, fria e muito centrada em cards.
3. **Neo-brutalismo neon** — 0,08: alto contraste, bordas duras e energia de startup experimental.

### Escolha: Editorial tech brasileira

**Design Movement:** editorial digital contemporâneo, com a clareza de uma revista de negócios e a energia de um produto AI-native.

**Princípios:** confiança antes de hype; densidade de informação com respiro; dois públicos, duas entradas; automação visível, nunca mágica.

**Filosofia de cor:** fundo marfim e tinta carvão criam sensação de publicação confiável; laranja queimado é a assinatura própria do HireU, usado como sinal de decisão e movimento; verde-lima aparece apenas em estados de verificação e prontidão.

**Paradigma de layout:** hero dividido em coluna de argumento e coluna de ação; faixas horizontais com overflow controlado; seção de vagas como uma “mesa de pauta” com lista vertical e filtros laterais, evitando um grid genérico centralizado.

**Elementos de assinatura:** logomarca tipográfica `hireU` com sublinhado laranja; marca circular de “match” com dois pontos conectados; pequenas etiquetas de confiança como “verificada”, “faixa salarial” e “responde em 48h”.

**Interação:** o usuário escolhe a intenção antes de preencher formulários; busca responde imediatamente; filtros têm linguagem natural; CTAs explicam o próximo passo em vez de apenas dizer “começar”.

**Animação:** entrada suave por blocos, hover com deslocamento de 2px e sombra curta, indicadores pulsando apenas quando representam atividade real; respeitar `prefers-reduced-motion`.

**Tipografia:** `DM Sans` para interface e corpo; `Space Grotesk` para títulos e números, criando contraste entre conversa e precisão.

**Essência da marca:** contratação remota com menos ruído e mais sinal para talentos e times que valorizam velocidade, contexto e confiança. Personalidade: direta, criteriosa, acolhedora.

**Tom de voz:** headlines curtas, concretas e humanas. CTAs descrevem resultado. Exemplos: “Seu próximo capítulo começa com contexto.” / “Mostre o trabalho. A IA cuida do ruído.”

**Wordmark:** `hire` em carvão + `U` em laranja queimado, com um traço curto sob o U lembrando uma ponte entre duas pessoas.

**Cor proprietária:** laranja queimado `#F05A3C`, usado como assinatura do HireU.

## Evolução prevista

1. Modelar empresas, candidatos, vagas e aplicações com confiança/etapa de parsing explícitas.
2. Implementar onboarding por intenção e login; manter candidatura gratuita.
3. Adicionar testes de habilidade, matching explicável e triagem assistida por IA.
4. Implementar publicação paga, Stripe, moderação anti-golpe, ingestão de ATS e alertas.
5. Construir dashboards de candidato e empresa, auditoria, LGPD e páginas SEO de salários somente com dados confiáveis.

## Fase atual — candidato antes do founder

A pesquisa ampla em plataformas de carreira, ATSs, comunidades, fontes de acessibilidade, segurança e no HireABrazilian confirmou que o primeiro produto deve reduzir esforço sem sacrificar controle. O fluxo implementado em mock mode começa com onboarding progressivo, importa currículo com revisão explícita, permite perfil reutilizável e preferências, oferece avaliação opcional acessível, confirma o envio e organiza o pós-candidatura em um workspace factual.

A nova superfície usa `client/src/pages/CandidateFlow.tsx` para onboarding e telas do candidato, `ProductLayout.tsx` para a navegação persistente e `index.css` para estados, cards, timeline, agenda, documentos e responsividade. O Supabase permanece provisionado, mas não é chamado nesta fase; as interações usam dados locais, toasts e estados React. O painel founder/empresa não será expandido até o fluxo de candidato ser revisado.

A direção visual mantém a editorial tech brasileira, mas o workspace ganha densidade operacional: sidebar por tarefas, próximo passo em destaque, timelines com fonte/data, privacy by default, explicações de match e ações reversíveis.
