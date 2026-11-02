# HireABrazilian public product archaeology

## Escopo observado

A análise ficou restrita às páginas públicas acessíveis sem autenticação em `app.hireabrazilian.online` e no domínio claramente relacionado `hireabrazilian.online`. Não houve login, envio de formulários, pagamento, conexão de contas, API, banco, Git ou outro sistema.

## Síntese

O HireABrazilian se posiciona como uma consultoria/recrutadora nearshore especializada em talento brasileiro para empresas, sobretudo startups dos EUA. A proposta é deliberadamente comercial e direta: contratação com preço fixo, dois modelos de relação (Find & Place / Direct Hire e Find & Employ / Managed Hire), sobreposição de fuso horário, triagem humana de inglês e promessa de economia frente a contratação local. A landing page organiza a decisão por preço, modelo operacional e velocidade, e repete CTAs de ativação por US$149 e agendamento de discovery call.

A principal força a preservar para o HireU é a clareza da escolha e da próxima ação. O principal ponto a adaptar é a construção de confiança: há explicações de processo, FAQ, política, termos e garantia, mas não aparecem publicamente perfis reais de candidatos, nomes de clientes, depoimentos verificáveis, equipe fundadora ou evidências independentes que sustentem vários claims. Há também inconsistências e riscos de expectativa: o app público abre uma tela de autenticação sem contexto; a landing promete informações de deck e algumas rotas que retornam 404; e a linguagem de comparação competitiva é agressiva e factualiza preços/garantias de terceiros sem evidência visível na página.

## Evidências observadas diretamente

### 1. Entrada pública e jornada

- `https://app.hireabrazilian.online/` abre uma tela escura intitulada “HIRE A BR / PORTAL ACCESS AUTHENTICATION”, com campos de username/password e botão “Access Portal”. Não há explicação pública, recuperação de acesso, cadastro ou link visível para a proposta comercial. Isso indica uma superfície de produto autenticada, não uma vitrine pública.
- `https://www.hireabrazilian.online/` funciona como landing comercial. O cabeçalho expõe “HOW IT WORKS”, “PRICING”, “FAQ”, “Log in” e “Start for $149”. A hero usa “Hire top Brazilian … for a flat $1,648”, “Flat-fee recruiting · No percentage cuts ever”, “Start your search for $149” e “Book a discovery call”.
- Os CTAs de “Start for $149”, “Start your search for $149” e “Book a discovery call” são botões client-side. A inspeção não acionou nenhum deles; portanto, não foi possível confirmar o destino final sem iniciar uma jornada potencialmente transacional.
- A landing oferece um comparador de escolha em 30 segundos (`#fit-quiz`) e um seletor de fusos EST/CST/MST/PST. O visualizador mostra, por exemplo, 9:00 AM EST e 11:00 AM no Brasil, destacando “2h ahead” e “100% of your working hours”.

### 2. Posicionamento, linguagem e proposta de valor

- A mensagem central é econômica e operacional: sem comissão percentual baseada em salário, talento brasileiro pré-avaliado, compatibilidade de horário e suporte para retenção.
- O tom combina performance (“top”, “elite”, “massive savings”, “ready to scale”) com redução de risco (“90-day replacement guarantee”, “no hidden fees”, “no commitment”).
- O site explica duas rotas sem exigir progressão: “Find & Place (Direct Hire)” por taxa única e “Find & Employ (Managed Hire)” com folha, benefícios, compliance e suporte local.
- A seção “Why Brazil works for US companies” repete três razões: sobreposição com fusos dos EUA, inglês profissional verificado por entrevista oral humana e eficiência de orçamento.

### 3. Preços, processo e confiança

- Direct Hire: taxa de ativação de US$149, taxa de colocação de US$1.499 e total anunciado de US$1.648; shortlist de 3–5 candidatos em 5–10 dias; garantia de substituição de 90 dias.
- O processo público é descrito em quatro passos: ativar busca, receber shortlist, entrevistar com apoio e contratar; em outro trecho, a expectativa é “2–3 weeks from payment to hire”.
- Managed Hire anuncia faturamento mensal sem taxa inicial de sucesso, com payroll, benefícios, compliance, check-ins, suporte local, cursos, prevenção de burnout, infraestrutura, benefícios e acompanhamento de KPIs.
- A FAQ explicita que, no Direct Hire, o cliente contrata e administra diretamente o profissional; no Managed Hire, a empresa diz cuidar de payroll/compliance. A FAQ também delimita papéis procurados a growth marketing, UI/UX e customer success, com buscas técnicas apenas quando houver aderência.
- A landing afirma “screened via live technical and English fluency interviews”, mas não mostra exemplos de scorecards, critérios de avaliação ou perfis públicos de candidatos.
- Há comparações numéricas de custo, por exemplo US$130k/ano para “US W2 Senior” contra US$45k/ano para “Brazil Remote Senior”, resultando em economia anunciada de US$85k/ano. A página não apresenta metodologia ou fonte independente para esses números.

### 4. Perfis, empresas e comunidade

- Não foram encontrados perfis públicos de candidatos, nomes de profissionais, portfólio individual, depoimentos de clientes, logos de empresas contratantes ou estudos de caso identificados nominalmente na landing examinada.
- Existe um exemplo de vaga “Meta Ads Manager”, com escopo de atividades, cobrança mensal de US$1.899–2.399 e equivalente local anunciado de US$6.500+; é um arquétipo de função e preço, não um perfil de pessoa identificável.
- `https://www.hireabrazilian.online/careers` apresenta uma única vaga pública: “B2B Client Acquisition Representative”, freelance, remoto, comissão por performance. A página diz que o negócio é early-stage, em crescimento, e que a equipe interna faz sourcing, vetting e testes técnicos no Brasil. Também promete, após 60 dias, PTO, estipêndios, learning budget e suporte de saúde mental.
- `https://www.hireabrazilian.online/referral` mostra um programa “Founder-to-Founder Referral Program”: desconto recorrente de 5% na fatura Managed por indicação ativa, sem limite declarado, e isenção da taxa de busca de US$149 para o indicado. A página coleta nome/e-mail do indicador e nome/e-mail da empresa indicada em formulário público. Não foi enviado o formulário.

### 5. Domínios, documentos e lacunas de execução

- `https://www.hireabrazilian.online/privacy` publica política atualizada em 8 de julho de 2026. Ela menciona coleta de dados de contato, requisitos de vaga, pagamentos via Stripe, analytics e provedores de hospedagem/e-mail; oferece contato por `hello@hireabrazilian.online`.
- `https://www.hireabrazilian.online/terms` publica termos atualizados em 8 de julho de 2026. Define Find & Place e Find & Employ, responsabilidades do cliente, taxa de US$149 não reembolsável salvo acordo, taxa de sucesso de US$1.499 e lei brasileira como regente. A página identifica a operação apenas como “independent recruiting consultancy”, com e-mail e domínio principal.
- O rodapé da landing oferece “Presentation (Deck)” em `/presentation`, mas `https://www.hireabrazilian.online/presentation` retornou página 404 pública. Isso é uma quebra concreta de jornada e de expectativa.
- O rodapé também expõe “Privacy Policy”, “Terms of Service”, “Compare to HireLATAM”, “Referral Program” e “Careers”, o que ajuda a sinalizar transparência, mas a identidade institucional continua pouco detalhada.

### 6. Comparação competitiva

- `https://www.hireabrazilian.online/vs-hirelatam` apresenta comparação “factual” com HireLATAM, incluindo US$3.500 contra US$1.648, suposta economia de 53%, depósito concorrente não reembolsável e diferenciação de foco geográfico.
- A mesma página inclui CTAs “Start Hiring”, “Choose Direct Placement”, “Request Managed EOR Info” e FAQ específica sobre reembolso, buyout e garantia.
- Observação direta: a comparação é uma forte ferramenta de conversão e enquadra a decisão em custo, risco e profundidade regional. Inferência: sem fontes, data de verificação ou metodologia exibidas, claims sobre terceiros podem reduzir confiança, gerar contestação e envelhecer rapidamente.

## O que preservar no HireU

1. **Escolha operacional simples.** Manter dois caminhos claramente nomeados, com uma explicação curta de quem emprega, quem paga, quem cuida de compliance e quem administra o dia a dia.
2. **Preço e próxima ação visíveis.** Preservar preço inicial, custo total ou faixa, o que está incluído e um CTA primário único. O modelo “comece com uma ativação” pode ser adaptado se a economia e as condições forem reais e explicadas.
3. **Processo em etapas.** Repetir uma jornada curta e concreta, com expectativa de prazo, quantidade de perfis entregues e o que acontece depois da shortlist.
4. **Fuso como benefício verificável.** Preservar a visualização de sobreposição de horários, mas permitir que o usuário escolha sua cidade/fuso e veja o resultado real.
5. **FAQ orientada à objeção.** Manter respostas sobre preço, garantia, contratação, compliance, papéis atendidos e vetting. Isso reduz ansiedade antes do CTA.
6. **Transparência documental.** Ter política de privacidade, termos, contato institucional e condições de garantia acessíveis antes de qualquer pagamento.

## O que adaptar no HireU

1. **Trocar claims genéricos por evidência de confiança.** Publicar perfis de exemplo consentidos, critérios de avaliação, amostras de scorecard, depoimentos verificáveis, estudos de caso e, quando autorizado, logos ou setores atendidos.
2. **Separar “perfil”, “empresa” e “vaga”.** O HireABrazilian mostra principalmente o arquétipo da função. O HireU deve permitir navegar por profissionais, experiências, idiomas, disponibilidade, faixa de preço, fuso e preferências de trabalho, sem expor dados pessoais indevidos.
3. **Fazer filtros explicáveis.** Exibir por que um perfil aparece: stack, senioridade, inglês, fuso, disponibilidade e evidência correspondente. Evitar que “vetted” seja apenas um selo sem critério visível.
4. **Resolver a bifurcação pública/autenticada.** Se houver portal autenticado, a página `app` deve explicar o que é, para quem serve e como obter acesso; deve apontar claramente para a vitrine pública e oferecer recuperação de acesso. Não deixar a entrada pública parecer uma tela quebrada ou sem contexto.
5. **Garantir consistência entre link e destino.** Antes de lançar, validar todos os links do rodapé e CTAs. Um deck prometido que retorna 404 deve ser removido ou substituído por uma página funcional.
6. **Tornar a unidade econômica comparável.** Diferenciar taxa de plataforma, taxa de recrutamento, salário/remuneração, impostos, benefícios, conversão cambial e custos opcionais. Mostrar exemplos com premissas e data de atualização.
7. **Explicar garantias com condições no próprio CTA.** A garantia de substituição deve trazer prazo, eventos cobertos, exclusões, janela para aviso e obrigação de cooperação, em linguagem curta e ligada aos termos completos.
8. **Usar comparações competitivas com governança.** Se o HireU comparar fornecedores, registrar data, fonte, escopo e incerteza; preferir critérios auditáveis a “X% mais barato” sem metodologia.
9. **Conectar cultura a experiência real.** A página de careers sugere uma cultura early-stage, mas isso não substitui prova de como talentos e clientes são tratados. No HireU, mostrar princípios de seleção, feedback, suporte e retenção com exemplos.
10. **Manter o CTA proporcional ao estágio da decisão.** Oferecer “ver perfis”, “simular compatibilidade”, “falar com especialista” e só depois “pagar/ativar”, especialmente se o usuário ainda não entendeu o produto.

## O que evitar no HireU

- Evitar superlativos como “elite”, “top” ou “world-class” sem sinais verificáveis.
- Evitar prometer economia, prazo, inglês, retenção ou “100% de overlap” como universal; apresentar como faixa, critério ou condição.
- Evitar expor ou coletar dados de terceiros em programas de indicação sem consentimento, aviso de privacidade e controle de compartilhamento.
- Evitar transformar comparação com concorrentes em ataque ou em afirmação factual não datada.
- Evitar misturar contratação direta, EOR, contractor e payroll como se fossem a mesma coisa; a responsabilidade legal e financeira precisa ser inequívoca.
- Evitar formulários sem contexto sobre finalidade, retenção e próximo passo.
- Evitar esconder custos recorrentes, buyout, conversão, câmbio, benefícios ou responsabilidades atrás de “sem taxas ocultas”.
- Evitar uma experiência pública que dependa de login antes de explicar valor, elegibilidade e caminho de acesso.

## Referências

[1]: https://app.hireabrazilian.online/ "HireABrazilian app portal público"
[2]: https://www.hireabrazilian.online/ "Hire a Brazilian landing page"
[3]: https://www.hireabrazilian.online/privacy "Hire a Brazilian Privacy Policy"
[4]: https://www.hireabrazilian.online/terms "Hire a Brazilian Terms of Service"
[5]: https://www.hireabrazilian.online/referral "Hire a Brazilian Referral Partner Program"
[6]: https://www.hireabrazilian.online/careers "Hire a Brazilian Careers"
[7]: https://www.hireabrazilian.online/vs-hirelatam "Hire a Brazilian vs HireLATAM"
[8]: https://www.hireabrazilian.online/presentation "Hire a Brazilian Presentation route (observed 404)"
