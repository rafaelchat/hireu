# HireU — contexto consolidado para próxima IA

> Documento de handoff do projeto. Ele consolida decisões, requisitos, pesquisa, arquitetura, histórico de implementação e pendências da conversa entre o usuário e a IA. Não contém tokens, senhas, chaves privadas ou dados pessoais reais além dos nomes fictícios usados no mock.
>
> **Importante sobre segurança:** o repositório `rafaelchat/hireu` está atualmente público no GitHub. Esta pasta organiza o contexto, mas não é privada por si só. Para tratar este documento como confidencial, o repositório precisa ser tornado privado ou o arquivo precisa ser movido para um repositório privado antes de incluir informações sensíveis.

## 1. Produto e objetivo

O produto se chama **HireU**. Ele é um novo projeto, separado do HireABrazilian. O HireABrazilian é um serviço existente e não deve ser alterado nem conectado ao HireU. O HireU pretende ser uma plataforma de recrutamento automatizada com IA, cobrança, candidatura, avaliações, agendamento, entrevistas, transcrição e automações, mas sempre com transparência e controle humano.

Existem dois lados do marketplace:

- Candidato: entra procurando uma oportunidade, cria um perfil reutilizável, adiciona currículo, competências, preferências e evidências, faz avaliações quando necessário e acompanha candidaturas.
- Empresa: entra procurando candidatos, explora perfis anonimizados, entende os motivos do match, envia convites estruturados para entrevistas e acompanha créditos, agenda, entrevistas, reembolsos e candidaturas.

A primeira fase usa **mock data** e interações locais. Supabase e Vercel já foram provisionados, mas o frontend deliberadamente não depende de chamadas ao Supabase nesta fase. A conexão real será feita depois que os fluxos forem validados.

O site deve ser todo em inglês por padrão, mas agora possui seletor persistente de idioma entre English e Português (Brasil). A tradução global foi adicionada para textos visíveis, botões, placeholders, títulos, labels e superfícies principais.

## 2. Direção de produto

A proposta deve evitar vender o candidato como um lead ou vender diretamente telefone/e-mail. A recomendação aprovada é cobrar por uma **introdução qualificada** ou um **Interview Credit**:

1. A empresa vê um perfil anônimo.
2. O perfil mostra cargo, senioridade, competências, localização aproximada, modalidade, faixa salarial, idioma, disponibilidade e motivos explicáveis do match.
3. A empresa reserva um crédito para enviar um convite estruturado.
4. O candidato recebe o convite dentro do HireU e aceita, recusa ou não responde.
5. A identidade só é revelada conforme o consentimento e a necessidade do processo.
6. O sistema agenda a conversa e cria a experiência de entrevista.
7. O crédito é finalizado quando a entrevista é concluída.

Regras de reembolso:

- Reembolsar automaticamente se o candidato não responder dentro do prazo.
- Reembolsar se o candidato recusar.
- Reembolsar se o candidato aceitar, mas não comparecer.
- Reembolsar em caso de falha da plataforma.
- Não reembolsar se a entrevista ocorreu e a empresa decidiu não seguir.
- Não reembolsar se a empresa não compareceu ou cancelou.

A monetização planejada é:

- **Discovery:** exploração gratuita de perfis anônimos e matches explicáveis.
- **Interview Credits:** pacote de créditos para convites qualificados.
- **Full Workspace:** assinatura para busca avançada, shortlist, agenda, entrevistas, analytics e volume mensal.
- **Custom:** ATS ingestion, volume, workflows, suporte e necessidades específicas.

Os preços atuais são apenas mock/hipóteses de interface: `$59 / 5 credits`, `$249 / month` e Custom.

## 3. Pesquisa realizada

Foi feita uma pesquisa ampla com 58 fontes públicas, incluindo plataformas de carreira, ATSs, fontes de acessibilidade, comunidades, Reddit, fontes de segurança, FTC, ANPD, ferramentas de avaliação, boas práticas de recrutamento e páginas públicas do HireABrazilian. A pesquisa não conectou nem modificou o HireABrazilian; ele foi usado somente como referência cultural e de mercado.

Conclusões principais:

- Entrada curta e progressiva reduz esforço.
- Currículo deve ser importado como rascunho revisável, nunca como verdade automática.
- O candidato precisa confirmar todos os campos extraídos.
- A vaga deve mostrar salário, moeda, modelo contratual, país, fuso, idioma, etapas e duração.
- Avaliações devem ser job-relevant, curtas, acessíveis, salváveis, retomáveis e sem monitoramento desnecessário.
- Status devem mostrar somente o que foi confirmado pela empresa.
- Recomendações precisam explicar sinais e restrições, sem prometer contratação.
- Privacidade deve ser granular: candidatura, banco de talentos, contato futuro e marketing são consentimentos diferentes.
- A identidade do candidato deve ficar protegida até uma interação consentida.
- Agentes podem organizar tarefas, mas não devem tomar decisões de contratação, rejeitar candidatos ou revelar dados pessoais sem consentimento.
- Gravação e transcrição de entrevista devem ser opcionais e precedidas de consentimento explícito.

Relatórios preservados no repositório:

- `research/01-onboarding.md`
- `research/02-assessments.md`
- `research/03-dashboards.md`
- `research/04-trust-safety.md`
- `research/05-brazil-latam.md`
- `research/06-hireabrazilian.md`
- `research/candidate-flow-research.md`

## 4. Stack e infraestrutura

- React + TypeScript + Vite.
- Wouter para roteamento.
- Tailwind/TW animate no starter, com uma camada grande de CSS próprio em `client/src/index.css`.
- Lucide React para ícones.
- Sonner para toasts.
- Vercel para deploy e GitHub para o repositório principal.
- Supabase separado do HireABrazilian, já criado, mas em pausa no frontend.
- Projeto local: `/home/ubuntu/hireu` no sandbox Manus.
- Repositório: `https://github.com/rafaelchat/hireu.git`.
- Branch principal: `main`.
- O repositório Vercel está conectado ao GitHub e o deploy é automático.

Não colocar segredos neste arquivo. Não commitar `.env.local`, tokens, chaves privadas, senhas de banco ou credenciais de Google Workspace.

## 5. Estrutura atual relevante

- `client/src/App.tsx`: providers, roteamento e botão global de Auto login.
- `client/src/components/ProductLayout.tsx`: logo, cabeçalho público, language switcher, AppShell e navegação de candidato/empresa.
- `client/src/contexts/ThemeContext.tsx`: tema claro/escuro.
- `client/src/contexts/LanguageContext.tsx`: idioma persistente EN/PT-BR, dicionário e tradução global dos textos/atributos visíveis.
- `client/src/pages/ProductPages.tsx`: landing pública, jobs, job details, candidatura, how it works, pricing, autenticação, privacidade, telas legadas e parte do fluxo de empresa.
- `client/src/pages/CandidateFlow.tsx`: onboarding e telas completas do candidato.
- `client/src/pages/CompanyFlow.tsx`: overview, descoberta de talentos, entrevistas e créditos/cobrança. A tela separada de automações foi removida conforme decisão posterior.
- `client/src/data/mock.ts`: vagas, candidaturas, recomendações e candidatos mock.
- `client/src/index.css`: identidade visual, responsividade, dashboards, onboarding, pricing, empresa, idioma e Auto login.
- `client/public/manus-routes.json`: manifesto das rotas navegáveis.
- `supabase/schema.sql`: schema inicial planejado.
- `supabase/migrations/20261102000000_initial.sql`: migration inicial.
- `vercel.json`: configuração da SPA para Vercel.
- `DEPLOYMENT.md`: documentação do deploy e modo mock.
- `plan.md`: plano de produto e decisões de design.
- `TODO.md`: critérios e resultados do projeto.

## 6. Fluxo do candidato implementado

A entrada de candidato vai para `/auth` e, após o envio mock do magic link, navega para `/onboarding`.

O onboarding possui etapas de:

1. Basics: nome, e-mail, localização e foco profissional.
2. Resume: upload mock de PDF/DOCX com importação revisável.
3. Experience: headline, resumo, skills e confiança da importação.
4. Preferences: modalidade, contrato, expectativa, janela, idioma e visibilidade.
5. Assessment: avaliação opcional, curta, acessível e sem câmera/monitoramento.
6. Review: conferência do que será compartilhado.

O painel do candidato tem estas rotas:

- `/candidate`
- `/candidate/applications`
- `/candidate/assessments`
- `/candidate/calendar`
- `/candidate/documents`
- `/candidate/recommendations`
- `/candidate/messages`
- `/candidate/profile`
- `/candidate/privacy`
- `/candidate/settings`

O painel mostra próximos passos, perfil, candidaturas, timeline factual, recomendações explicáveis, avaliações, agenda, documentos, mensagens e controles de privacidade.

## 7. Fluxo da empresa implementado

A página `/pricing` agora apresenta Discovery, Interview Credits, Full Workspace e Custom.

O workspace da empresa possui:

- `/company`: overview com créditos, conversas, vagas, sinais de candidatos e próximos eventos.
- `/company/candidates`: descoberta de perfis anônimos, busca, filtros mock, motivos de match e convite com reserva de crédito.
- `/company/interviews`: entrevistas confirmadas, entrevistas aguardando escolha de horário e entrevistas concluídas.
- `/company/billing`: saldo, compra mock de créditos, planos, política de reembolso e ledger.
- `/company/jobs/new`: criação de vaga existente no fluxo anterior.
- `/company/settings`: configurações mock existentes.

A tela `/company/automations` foi **excluída** a pedido do usuário. Ela não deve voltar a ser adicionada sem nova autorização. A ideia de agentes continua válida como arquitetura futura, mas não existe mais uma tela separada de automações no produto atual.

## 8. Entrevistas e Google Workspace

A primeira experiência mock representa:

- Invite estruturado.
- Reserva de Interview Credit.
- Resposta do candidato.
- Escolha de horário.
- Google Meet room ready em mock.
- Gravação off by default.
- Transcript condicionado a consentimento.
- Summary a partir de notas.
- Crédito finalizado ou devolvido.

Google Workspace foi escolhido como infraestrutura futura:

- Google Calendar para eventos.
- Google Meet para salas.
- Gmail para notificações controladas.
- Google Drive para armazenamento de gravações/transcripts com acesso restrito.

Nenhuma API Google está ativa ainda. Não enviar e-mails ou criar eventos reais nesta fase.

## 9. Auto login mock

Existe um botão fixo no canto inferior direito chamado **Auto login**. Ele alterna entre:

- Logged out: navega para `/`.
- Candidate: navega para `/candidate`.
- Company: navega para `/company`.

Ele é um controle de desenvolvimento e deve continuar claramente marcado como ambiente mock. Não substituir autenticação real por esse mecanismo quando o Supabase Auth for ativado.

## 10. Idiomas

O idioma padrão é English. O botão de idioma aparece no cabeçalho público e nos AppShells. Ele alterna entre `🇺🇸 EN` e `🇧🇷 PT-BR`, grava a seleção em `localStorage` usando `hireu-language` e atualiza `document.documentElement.lang`.

`LanguageContext.tsx` possui:

- Dicionário das frases principais.
- Tradução de nós de texto visíveis via `TreeWalker`.
- Tradução de `placeholder`, `title` e `aria-label`.
- Observador de mutações para textos dinâmicos.
- Restauração para inglês usando um `WeakMap` dos textos originais.

Ao alterar novas telas, preferir textos que possam ser adicionados ao dicionário. Evitar inventar outro sistema de idioma.

## 11. Decisão sobre a tela de automações

A tela de automações foi removida em 2 de novembro de 2026 após o usuário pedir explicitamente sua exclusão. Não confundir essa decisão com a rejeição da automação como conceito. Agentes continuam parte da visão do produto, mas devem aparecer futuramente em contextos de agenda, reminders, refunds e entrevista, ou em uma área que o usuário autorize depois.

## 12. Validações realizadas

Comandos usados regularmente:

```bash
pnpm check
pnpm build:static
```

As últimas validações passaram. As rotas principais retornaram HTTP 200 no servidor local. Vite imprime um aviso já existente sobre `/api/platform/config.js` sem `type="module"` e um aviso de chunk acima de 500 kB; ambos não impediram o build.

## 13. Histórico recente

- `b009a1a` — Build complete candidate workspace flow
- `88ae349` — Clean up research report duplicates
- `a8ba709` — Add interview credits and company workspace
- `8ac4a72` — Add mock auto login switcher
- `b324e15` — Add English and Brazilian Portuguese switcher
- `4263c88` — Translate all visible product surfaces

A próxima alteração deverá criar um novo commit, validar `pnpm check` e `pnpm build:static`, e fazer push para `github/main` sem force push.

## 14. Próximos passos recomendados

1. Revisar visualmente as telas após a remoção de automações e confirmar que nenhum link antigo aparece.
2. Completar a tradução revisada por superfície, principalmente descrições longas e mensagens de toast.
3. Definir entidades de banco para candidates, companies, jobs, applications, interview credits, invites, interviews, refunds, consent, documents e transcripts.
4. Conectar Supabase Auth depois que o fluxo mock for aprovado.
5. Implementar Stripe ou outro provedor de pagamentos com confirmação explícita, ledger e idempotência.
6. Implementar Google OAuth com escopos mínimos para Calendar/Meet/Gmail.
7. Criar sala de entrevista e consentimento de gravação/transcrição.
8. Implementar jobs/agentes server-side para reminder, expiry e refund.
9. Implementar moderação, denúncia, rate limits e proteção contra outreach abusivo.
10. Construir founder/admin panel somente depois que os dois fluxos de candidato e empresa estiverem estabilizados.

## 15. Restrições e cuidados

- Não alterar o HireABrazilian.
- Não conectar dados entre HireU e HireABrazilian.
- Não usar dados pessoais reais nos mocks.
- Não expor contato de candidato sem consentimento.
- Não usar score interno como promessa de contratação.
- Não deixar IA rejeitar ou contratar automaticamente.
- Não gravar entrevista sem consentimento explícito.
- Não enviar e-mail, convite Google ou cobrança real no mock mode.
- Não commitar segredos.
- Não afirmar que o repositório público é seguro; tornar o GitHub privado antes de colocar detalhes confidenciais neste handoff.
