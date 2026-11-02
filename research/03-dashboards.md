# Padrões de dashboards para candidatos em ATSs e marketplaces

## O que os produtos públicos mostram

### Greenhouse / MyGreenhouse: o benchmark mais completo de portal

O MyGreenhouse reúne descoberta de vagas, perfil reutilizável, candidatura e acompanhamento em um único lugar. A página pública promete **atualizações de status em tempo real**, alertas, autofill e um rastreador de candidaturas [1]. O anúncio do produto acrescenta três elementos especialmente relevantes para o HireU: o candidato pode acompanhar o status, **aut agendar entrevistas** e concluir tarefas de pré-contratação no próprio portal [2].

A documentação oficial também explicita um limite importante: o portal só mostra as atualizações e tarefas que a empresa escolhe compartilhar; não revela todos os passos ou decisões internas e não contata recrutadores em nome do candidato [3]. Isso sugere que o HireU deve distinguir entre “status confirmado” e “processo em andamento”, evitando prometer uma precisão que depende do empregador.

O modelo de conta é simples: um perfil por candidato, com nome, contato, currículo, links, localização, preferências de trabalho e idiomas. O candidato pode editar ou apagar seus dados no perfil; para corrigir ou apagar dados já enviados a uma empresa, precisa falar com ela diretamente [3]. Para documentos, o FAQ recomenda PDF, avisa que o parsing pode errar e informa que o currículo mais recente pode ser o padrão; o portal não mantém múltiplas versões de currículo [3]. Para o HireU, isso aponta para uma área explícita de documentos enviados por candidatura, com versão, data e uso, em vez de esconder tudo no perfil global.

O produto também usa sinais de intenção: “Dream Job”, preferências de trabalho, vagas vistas e alertas. O valor desses sinais está em conectar recomendação com contexto declarado pelo candidato, não apenas com uma pontuação algorítmica [2].

### Lever: forte no fluxo interno, pouca evidência de um portal candidato unificado

A página institucional da Lever descreve um ATS/CRM que centraliza candidaturas, agendamento, automações, follow-ups, colaboração e analytics [4]. O material público enfatiza produtividade da equipe e automação de mensagens e agenda, mas não apresenta um painel público equivalente ao MyGreenhouse para que o candidato veja todas as candidaturas, documentos e histórico. A implicação de produto é importante: quando o ATS não oferece uma superfície única ao candidato, o e-mail vira o “painel” informal. O HireU deve fazer o contrário e consolidar eventos de e-mail, mensagens, tarefas e agenda em uma linha do tempo própria.

### Ashby: bons vínculos de contexto para recrutadores; exposição ao candidato é mais limitada

A atualização pública da Ashby mostra uma decisão de arquitetura interna: no perfil do candidato, a coluna “Considered For Jobs” liga diretamente à vaga por meio de “View Job” [5]. O padrão é útil para o HireU porque preserva o contexto da candidatura: cada evento deve apontar para a vaga, empresa e etapa que o originou. Fontes públicas de mercado e relatos de usuários indicam que, em muitos fluxos Ashby, a atualização chega por e-mail ou links seguros em vez de um login candidato completo; essa observação deve ser tratada como sinal de mercado, não como especificação oficial do produto.

### LinkedIn Jobs: rastreador pessoal, recomendações, alertas e transparência de resposta

O LinkedIn oferece um **Job Tracker** como espaço centralizado para salvar e organizar oportunidades ao longo da busca [6]. A ajuda pública lista cinco estados de organização no rastreador, incluindo “saved” e “in progress”; o desenho é deliberadamente pessoal e não pretende representar o estágio interno da empresa. O LinkedIn também oferece recomendações baseadas em perfil, preferências e outros sinais, com explicação de por que uma vaga foi mostrada [6].

Os alertas podem ser diários ou semanais e chegar por e-mail, notificação no aplicativo ou ambos [7]. Outro padrão relevante é o “hirer responsiveness insight”: a própria central de ajuda enquadra a capacidade de resposta do contratante como informação útil para reduzir a ansiedade de esperar [6]. Para o HireU, isso justifica mostrar “tempo típico de resposta” ou “última atividade” somente quando houver base suficiente, com linguagem cuidadosa e sem sugerir garantia.

O LinkedIn ainda separa “vaga salva”, “candidatura em andamento” e candidatura efetivamente submetida. Essa separação deve ser preservada no HireU: salvar uma oportunidade não é o mesmo que aplicar, e aplicar via marketplace pode redirecionar para o site externo.

### Indeed: descoberta, mensagens e suporte; integração de candidatura pode variar

A central de ajuda do Indeed organiza a experiência de candidato em busca, conta, mensagens e suporte. “Messages” é um tópico próprio, e o guia de início inclui configuração do perfil e alertas [8]. Isso reforça que mensagens e notificações devem ser objetos de primeira classe no dashboard, não apenas links para uma caixa de e-mail.

Como o Indeed agrega fluxos em que a candidatura pode ocorrer no próprio Indeed ou no site do empregador, o HireU deve mostrar a origem e o destino da candidatura. Uma vaga pode estar “salva”, “aplicação iniciada”, “enviada ao empregador” ou “aguardando confirmação externa”; não se deve apresentar um estado interno que o HireU não consegue verificar.

## O que comunidades públicas revelam sobre a compreensão dos estados

Em uma discussão pública de profissionais de recrutamento, um participante descreve o uso de etapas separadas “TBD” e “Scheduled”: “Phone Screen TBD” significa que há uma ação de agendamento pendente; “Phone Screen Scheduled” significa que o horário está confirmado [9]. A distinção resolve um problema recorrente: “entrevista” pode significar convite enviado, resposta aguardada ou evento no calendário. Para candidatos, o HireU deve usar rótulos compreensíveis equivalentes: **“Agendamento solicitado”**, **“Escolha um horário”**, **“Confirmado”**, **“Remarcar”** e **“Concluído”**.

Outra discussão pública pergunta como recrutadores ordenam candidatos em Workday, Greenhouse, Lever e Ashby e mostra que a própria lógica de triagem é percebida como pouco transparente [10]. Isso não prova como cada ATS funciona, mas evidencia uma necessidade de UX: o painel do candidato não deve expor “posição na fila”, “score interno” ou uma falsa precisão de ranking. Deve explicar apenas fatos observáveis, próximos passos e prazos.

## Padrões recorrentes e lacunas

1. **Status útil é orientado a ação.** “Em análise” sozinho é pouco informativo. O candidato precisa saber se deve responder, enviar documento, escolher horário ou simplesmente aguardar.
2. **Há dois fluxos que não devem ser misturados.** O primeiro é o estágio da candidatura controlado pelo empregador. O segundo é o organizador pessoal do candidato, como “salva”, “prioridade” e “acompanhar”. LinkedIn exemplifica o segundo; MyGreenhouse combina os dois, mas mantém o limite de que só exibe o que a empresa compartilha.
3. **Calendário é uma entidade, não apenas uma mensagem.** Convite, confirmação, fuso horário, entrevistadores, link, endereço, lembrete e remarcação precisam ficar juntos.
4. **Documentos precisam de escopo.** Perfil global, currículo usado em uma candidatura, carta de apresentação e documentos solicitados depois da entrevista são coisas diferentes.
5. **Mensagens, tarefas e notificações devem ser consolidadas.** Quando não há portal forte, o e-mail vira a fonte de verdade percebida. O HireU deve importar ou espelhar eventos autorizados, mantendo uma timeline.
6. **Estados vazios precisam ensinar o próximo passo.** “Você ainda não tem candidaturas” deve oferecer busca, recomendações e importação; “sem mensagens” deve explicar que isso é normal e indicar como configurar alertas; “sem entrevistas” deve mostrar que nenhuma foi agendada, não sugerir falha.

## Arquitetura de informação recomendada para o painel real do HireU

### Navegação principal

- **Visão geral:** resumo de candidaturas ativas, próxima ação, próxima entrevista, mensagens não lidas e recomendações recentes.
- **Candidaturas:** lista ou cards agrupados por estado compreensível: `Rascunho`, `Enviada`, `Recebida`, `Em análise`, `Próxima etapa`, `Entrevista`, `Oferta`, `Encerrada` e `Retirada`. Cada card mostra empresa, vaga, origem, última atualização, próximo passo e prazo.
- **Agenda:** entrevistas e tarefas em ordem temporal, com fuso explícito, participantes, links, endereço, lembretes e ações `Confirmar`, `Remarcar` e `Adicionar ao calendário`.
- **Mensagens:** conversas por empresa/vaga, com indicador de resposta necessária e anexos. Mensagens transacionais devem aparecer também na timeline da candidatura.
- **Documentos:** biblioteca do candidato com currículo, cartas e anexos; em cada candidatura, mostrar exatamente qual versão foi enviada e permitir substituir apenas se o empregador aceitar.
- **Recomendações:** vagas explicadas por sinais visíveis — competências, localização, modalidade, faixa salarial e preferências — com ações `Salvar`, `Ignorar` e `Ver vaga`.
- **Notificações e preferências:** canais, frequência, alertas de novas vagas, lembretes de prazo, mudanças de status e mensagens. Permitir granularidade por tipo.
- **Perfil e privacidade:** dados reutilizáveis, consentimentos, integrações e exportação/exclusão.

### Modelo de uma candidatura

O detalhe deve abrir com cabeçalho fixo: cargo, empresa, origem, data de envio, estado atual e **próxima ação**. Abaixo, uma timeline de eventos com data e fonte: candidatura enviada, confirmação recebida, mensagem, mudança de etapa, convite, documento solicitado e decisão. Cada estado deve ter três camadas de texto:

- **Estado:** “Entrevista a agendar”.
- **Explicação:** “A empresa enviou um convite, mas ainda não há horário confirmado.”
- **Ação:** “Escolher horário até 12 de maio”.

Quando não houver atualização, usar uma linguagem honesta: “Nenhuma nova atualização compartilhada pela empresa desde 4 de maio. Você não precisa fazer nada agora.” Se houver integração incompleta: “A candidatura foi enviada para o site da empresa; o HireU ainda não recebeu confirmação de status.”

### Estados vazios prioritários

- **Sem candidaturas:** explicar a diferença entre salvar e enviar; oferecer recomendações, busca e botão `Adicionar candidatura externa`.
- **Sem entrevistas:** “Nenhuma entrevista agendada” + link para candidaturas ativas e preparação.
- **Sem mensagens:** informar que não há mensagens pendentes e oferecer ativação de notificações.
- **Sem documentos:** oferecer upload de PDF, explicar onde o arquivo será usado e aceitar um documento depois, quando solicitado.
- **Sem recomendações suficientes:** pedir preferências mínimas ou explicar que serão necessárias mais informações; não mostrar uma grade vazia sem orientação.
- **Falha de sincronização:** exibir origem, última sincronização e ação de tentar novamente, sem apagar o histórico local.

## Recomendação final para o MVP

O MVP do HireU deve priorizar a página **Candidaturas** e o detalhe de cada candidatura, com status orientado a ação, timeline, próximo passo, mensagens e agenda contextual. Em seguida, deve consolidar documentos e notificações. Recomendações podem começar como uma área explicável baseada em preferências explícitas, enquanto métricas de responsividade devem ser lançadas apenas quando houver dados suficientes.

A regra de confiança deve ser: nunca inventar uma etapa interna; sempre indicar a fonte e a data da última atualização; separar “confirmado”, “solicitado” e “aguardando”; e oferecer uma ação ou uma expectativa temporal para cada estado.

## References

[1]: https://my.greenhouse.com/ "MyGreenhouse — job search and application tracking"
[2]: https://www.greenhouse.com/blog/meet-mygreenhouse-a-new-kind-of-candidate-portal "Meet MyGreenhouse: A new kind of candidate portal"
[3]: https://support.greenhouse.io/hc/en-us/articles/43418495049499-MyGreenhouse-FAQ-for-Candidates "MyGreenhouse FAQ for Candidates"
[4]: https://www.lever.co/ "Lever — AI-Powered Hiring Platform"
[5]: https://www.ashbyhq.com/product-updates/view-jobs-from-the-candidate-profile "Ashby: View Jobs from the Candidate Profile"
[6]: https://www.linkedin.com/help/linkedin/topic/a153003 "LinkedIn Help — Search and Apply for Jobs"
[7]: https://www.linkedin.com/help/linkedin/answer/a511279 "Job alerts on LinkedIn"
[8]: https://support.indeed.com/hc/en-us "Indeed Jobseeker Help Center"
[9]: https://www.reddit.com/r/recruiting/comments/1knpkam/ats_candidate_workflow/ "Reddit r/recruiting — ATS Candidate Workflow"
[10]: https://www.reddit.com/r/ResumesATS/comments/1udeuos/how_do_recruiters_actually_sort_candidates_in/ "Reddit r/ResumesATS — How do recruiters actually sort candidates in ATSs?"
