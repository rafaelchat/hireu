# HireU — Plano de produto para o fluxo completo de candidato

## 1. Síntese executiva

As sínteses convergem em um produto que deve reduzir esforço sem sacrificar controle, transparência ou acessibilidade. O padrão mais confiável é: descoberta de vaga com informação suficiente para decidir; entrada curta; importação de currículo com revisão explícita; perfil reutilizável e progressivo; perguntas específicas e justificadas; avaliações curtas, job-relevant e auditáveis; candidatura com recibo; acompanhamento baseado apenas em atualizações confirmadas; comunicação interna e notificações acionáveis; e controles de confiança, privacidade e denúncia desde o primeiro contato.

O HireU não deve tentar reproduzir o ranking interno de um ATS nem prometer que uma recomendação é uma garantia de contratação. Deve representar com precisão o que o candidato sabe, o que a empresa confirmou, o que ainda está pendente e quais dados serão usados, por quem e por quanto tempo. Para Brasil/LATAM, elegibilidade por país, fuso, idioma e modelo contratual (CLT/local employee, contractor/PJ ou EOR) precisam ser atributos visíveis da vaga, não detalhes descobertos no fim do funil.

### Decisões de produto recomendadas

1. **Núcleo de entrada:** nome, e-mail, consentimento necessário e currículo; telefone é opcional ou pedido quando houver justificativa operacional. Não exigir carta, pronomes, dados sensíveis ou documento nacional na candidatura inicial.
2. **Perfil reutilizável:** permitir candidatura sem criar senha antes do primeiro envio; após o envio, oferecer conta por magic link ou outro acesso de baixo atrito. Separar biblioteca global de perfil/documentos dos dados efetivamente enviados em cada candidatura.
3. **Parsing assistido, não autoritário:** preservar o arquivo original, mostrar confiança por campo, permitir edição inline e oferecer preenchimento manual sem bloqueio. A confirmação humana do candidato é um evento de produto, não uma suposição do sistema.
4. **Vaga transparente:** mostrar faixa salarial e moeda, modalidade, local/fuso, países aceitos, modelo contratual, benefícios/itens não incluídos, etapas, duração estimada, prazo esperado de resposta, entidade contratante e data da última revalidação.
5. **Avaliação justa:** limitar testes iniciais a 30–60 minutos; excepcionalmente até 90 minutos. Take-home deve ter teto explícito, dados fictícios, não ser trabalho produtivo e ser remunerado ou substituído quando exceder esforço pequeno. Oferecer demo, salvamento, retomada, reteste e acomodação.
6. **Status sem ficção:** distinguir estados pessoais (salva, aplicada, retirada) de estados confirmados pela empresa. Não exibir score interno, posição na fila ou etapas não confirmadas.
7. **Comunicação como objeto principal:** cada candidatura tem timeline, próximo passo, responsável/fonte, última atualização e prazo. “Agendamento solicitado”, “escolha um horário” e “confirmado” são estados diferentes.
8. **Confiança por camadas:** verificar empresa, domínio, entidade pagadora e pessoa autorizada; exibir selo com escopo e data, não uma garantia abstrata. Comunicação interna é padrão; links e pedidos de dados são analisados por risco.
9. **Privacidade granular:** separar consentimento para candidatura, banco de talentos, contato futuro e marketing. Permitir visibilidade privada, por candidatura ou somente para empresas verificadas; pausar, corrigir, exportar e excluir dados.
10. **Acessibilidade como requisito de qualidade:** fluxo navegável por teclado, zoom, contraste, foco visível, leitor de tela, erros anunciados, linguagem simples, alternativas textuais e canal alternativo. Medir conclusão assistiva e não apenas conversão média.

## 2. Padrões confiáveis e conflitos entre fontes

### Padrões confiáveis

- LinkedIn, Wellfound, Workable, Greenhouse e Lever apontam para entrada curta, campos configuráveis e reutilização de perfil/currículo.
- Evidência acadêmica e guias de recrutamento acessível convergem em WCAG, alternativa de candidatura, ajustes razoáveis e linguagem simples; o estudo com leitores de tela reforça que acessibilidade não pode ser presumida.
- HackerRank, CodeSignal, SIOP e OPM convergem em preparação, análise do cargo, estrutura, rubricas, consistência, validade, revisão humana e auditoria de impacto adverso.
- Greenhouse/MyGreenhouse, LinkedIn, Indeed e padrões de ATS sustentam um painel de candidaturas com status, timeline, alertas, mensagens, tarefas e agenda.
- FTC, Indeed, LinkedIn e ANPD convergem em prevenção a impersonação, pagamentos, phishing, coleta precoce de documentos financeiros, finalidade, necessidade, transparência, segurança e responsabilização.
- O contexto Brasil/LATAM exige declarar país elegível, fuso, inglês aplicado, modalidade contratual, moeda e entidade pagadora; a pesquisa regional disponível é útil para hipóteses, mas não representa toda a população.

### Conflitos ou limites que viram decisões

1. **Entrada curta versus triagem rica:** reduzir abandono não significa eliminar sinais necessários. Decisão: núcleo mínimo na primeira tela e perfil progressivo; perguntas específicas entram depois apenas quando ligadas à vaga.
2. **Automação versus explicabilidade:** parsing, matching, recomendações e avaliação automatizada podem escalar, mas erram e podem gerar viés. Decisão: mostrar origem/razão do match, confiança, possibilidade de correção e revisão humana em decisões de alto impacto; nunca usar aparência, cenário doméstico, sotaque ou “personalidade” como proxy.
3. **Status em tempo real versus realidade operacional:** alguns sistemas só mostram atualizações compartilhadas pela empresa; o candidato pode interpretar silêncio como rejeição. Decisão: dizer “nenhuma nova atualização compartilhada”, exibir última data/fonte e não inventar estados internos.
4. **Vídeo/monitoramento versus acessibilidade e privacidade:** avaliações assíncronas oferecem flexibilidade e padronização, mas expõem ambiente e ampliam barreiras técnicas. Decisão: não exigir vídeo, câmera ou gravação de tela quando não forem essenciais; oferecer alternativa textual/áudio, tempo flexível e reteste.
5. **Recomendação versus promessa:** recomendações podem ajudar descoberta, mas não devem parecer endosso de contratação. Decisão: explicar competências, preferências e restrições que motivaram a recomendação e separar recomendação de candidatura.
6. **Transparência versus segurança de itens:** feedback detalhado melhora confiança, mas pode vazar questões. Decisão: feedback por competência e explicação curta; usar bancos equivalentes quando houver reteste.
7. **Dados para confiança versus minimização:** KYC, referências e documentos podem ser necessários no onboarding, não na candidatura. Decisão: coletar por etapa e finalidade, com retenção, acesso e exclusão explícitos.
8. **Claims comerciais versus prova:** benchmarks e observações do HireABrazilian ajudam a entender o mercado, mas não comprovam performance. Decisão: claims do HireU sempre com data, escopo, denominador e metodologia; não copiar superlativos, comparações não datadas ou garantias ambíguas.

## 3. Princípios de produto

1. **Esforço proporcional:** pedir apenas o mínimo necessário para a próxima decisão.
2. **Transparência antes do compromisso:** salário, modelo contratual, elegibilidade, etapas, duração e uso dos dados aparecem antes do envio.
3. **Candidato no controle:** revisar, editar, pausar, retirar, corrigir, excluir e escolher visibilidade.
4. **Automação corrigível:** todo dado importado ou match automatizado deve ser revisável; o sistema não pode bloquear o candidato por um erro do parser.
5. **Nenhuma surpresa de tempo:** testes e tarefas mostram teto, cronômetro, regras, suporte e tratamento de falhas antes do início.
6. **Acessibilidade equivalente:** alternativas acessíveis preservam a mesma oportunidade de demonstrar competência.
7. **Evidência de trabalho, não performance social:** avaliar competência e resultados relevantes, não carisma, aparência, conexão ou ambiente doméstico.
8. **Status factual:** exibir o que foi confirmado, por quem e quando; distinguir silêncio de rejeição.
9. **Privacidade por padrão:** visibilidade restrita, finalidade específica, retenção limitada e consentimentos separados.
10. **Segurança sem culpabilização:** alertar sobre fraude de forma contextual e proteger quem denuncia.
11. **Contexto local explícito:** país, fuso, idioma, moeda e relação contratual são parte da proposta, não rodapé.
12. **Métricas com denominador:** decisões de funil, equidade e confiança usam período, população e denominador próprios do HireU.

## 4. Sequência recomendada de telas, estados e eventos

### Tela 0 — Descoberta e decisão da vaga

**Conteúdo:** título, empresa e selo de verificação com escopo/data; local, remoto/híbrido/presencial, países aceitos, fuso/janela de colaboração; faixa salarial, moeda, periodicidade, benefícios e itens não incluídos; CLT/local employee, contractor/PJ ou EOR; stack, senioridade, idioma, etapas, duração estimada de testes, prazo de resposta, entidade contratante, última revalidação e denúncia.

**Estados:** vaga ativa; salva; candidatura iniciada; vaga expirada; vaga pausada; vaga atualizada; vaga removida por risco.

**Eventos:** `job_viewed`, `job_saved`, `job_alert_created`, `job_reported`, `job_revalidated`, `job_expired`.

**Decisão:** CTA primário “Candidatar-se”; CTAs secundários “Salvar”, “Ver como funciona” e “Denunciar”.

### Tela 1 — Entrada curta

**Conteúdo:** nome, e-mail, currículo PDF/DOCX; telefone apenas se necessário e marcado como opcional/justificado; link para privacidade; opção de continuar sem criar senha.

**Estados:** rascunho; arquivo carregando; upload concluído; upload falhou; tipo/tamanho inválido; candidatura iniciada.

**Eventos:** `application_started`, `candidate_identity_entered`, `resume_upload_started`, `resume_uploaded`, `resume_upload_failed`, `consent_recorded`.

**Microcopy:** explicar finalidade de cada dado, preservação do arquivo original, retenção e canal alternativo acessível.

### Tela 2 — Importação e confirmação

**Conteúdo:** comparação lado a lado entre arquivo original e campos extraídos; confiança por campo; edição inline; “não encontrado”; adicionar manualmente; preservar versões.

**Estados:** parsing em andamento; parsing concluído; revisão pendente; revisão concluída; fallback manual; conflito de dados.

**Eventos:** `resume_parsed`, `parse_low_confidence_detected`, `parsed_field_edited`, `manual_field_added`, `resume_version_saved`, `profile_import_confirmed`.

**Decisão:** nenhum campo extraído é tratado como confirmado sem ação do candidato ou regra explicitamente segura.

### Tela 3 — Perfil progressivo e preferências

**Conteúdo:** headline, resumo, experiência, formação, competências, idiomas, portfólio/GitHub/cases, disponibilidade, fuso, janela de colaboração, expectativa salarial, modelo contratual e preferências. Permitir PT/ES/EN; contextualizar impacto e colaboração.

**Estados:** perfil incompleto; perfil mínimo pronto; preferências salvas; visibilidade privada; visível para esta candidatura; visível para empresas verificadas; perfil pausado.

**Eventos:** `profile_created`, `profile_section_completed`, `preference_saved`, `visibility_changed`, `portfolio_added`, `profile_shared`.

**Decisão:** dados sensíveis, pronomes e inclusão não são obrigatórios para candidatura; perguntas de diversidade ficam separadas, voluntárias e com finalidade declarada.

### Tela 4 — Perguntas específicas da vaga

**Conteúdo:** perguntas obrigatórias, opcionais e “pode responder depois”; justificativa/uso quando relevante; perguntas privadas claramente marcadas; alternativa acessível.

**Estados:** não iniciada; em andamento; respondida; resposta inválida; pulada quando permitido; bloqueada por dependência justificada.

**Eventos:** `screening_question_viewed`, `screening_question_answered`, `screening_question_skipped`, `sensitive_answer_opted_in`.

**Decisão:** cada pergunta deve estar mapeada a uma decisão real da vaga; não repetir dados já disponíveis nem exigir carta sem necessidade.

### Tela 5 — Inclusão, acomodação e consentimento

**Conteúdo:** opção de solicitar acomodação sem exigir diagnóstico; leitor de tela/teclado, tempo flexível, alternativa textual/áudio, idioma; finalidade, base legal, destinatários, retenção e direitos LGPD; consentimentos separados para candidatura, banco de talentos, contato futuro e marketing.

**Estados:** sem solicitação; solicitação enviada; acomodação em análise; acomodação confirmada; canal alternativo ativado.

**Eventos:** `accommodation_requested`, `accommodation_confirmed`, `legal_basis_presented`, `purpose_consent_given`, `talent_pool_consent_given`, `marketing_consent_given`.

### Tela 6 — Avaliação, se necessária

**Pré-instruções:** competência avaliada, duração estimada e teto, formato, regras sobre documentação/IA, dados coletados, retenção, suporte, reteste, acomodação e prazo de retorno.

**Estados:** convite; compatibilidade verificada; demo não pontuada; disponível; iniciada; salva; pausada; enviada; falha técnica; reteste; em correção; resultado compartilhado; expirada.

**Eventos:** `assessment_invited`, `compatibility_checked`, `assessment_demo_completed`, `assessment_started`, `assessment_saved`, `assessment_paused`, `assessment_submitted`, `technical_failure_reported`, `retest_granted`, `assessment_scored`, `assessment_feedback_published`.

**Decisões:** itens mapeados a competências; perguntas equivalentes; rubrica e pesos pré-especificados; pelo menos dois avaliadores em decisão de alto impacto; sem câmera/monitoramento desnecessário; sem trabalho produtivo disfarçado. Take-home acima de esforço pequeno é pago ou substituído.

### Tela 7 — Revisão final e envio

**Conteúdo:** resumo da vaga, versão exata do currículo e documentos enviados, respostas, preferências, consentimentos, visibilidade e prazo de resposta; edição por seção; confirmação de que dados sensíveis não foram pedidos indevidamente.

**Estados:** revisão pendente; pronto para enviar; erro bloqueante; enviado; envio duplicado evitado.

**Eventos:** `application_reviewed`, `application_field_corrected`, `application_submitted`, `duplicate_application_prevented`.

**Decisão:** mostrar claramente o que é obrigatório, o que é opcional e o que poderá ser pedido depois.

### Tela 8 — Recibo e pós-envio

**Conteúdo:** número da candidatura, data/hora, vaga, empresa, documentos e versão enviados, consentimentos, próxima etapa esperada, prazo de resposta, canal oficial e opção de retirar candidatura.

**Estados da candidatura:** `Rascunho` → `Enviada` → `Recebida` → `Em análise` → `Próxima etapa` → `Agendamento solicitado` → `Escolha um horário` → `Confirmada` → `Entrevista concluída` → `Avaliação` → `Oferta` ou `Encerrada`; sempre permitir `Retirada` e `Aguardando atualização` quando aplicável.

**Eventos:** `application_receipt_issued`, `employer_status_received`, `next_step_requested`, `application_withdrawn`, `response_deadline_changed`.

**Decisão:** não transformar “Entrevista” em um estado único; não preencher etapas não confirmadas pela empresa.

### Tela 9 — Dashboard e detalhe da candidatura

**Navegação:** Visão geral, Candidaturas, Agenda, Mensagens, Documentos, Recomendações, Notificações e Perfil/Privacidade.

**Detalhe:** timeline contextual por vaga/empresa; estado atual; explicação factual; próximo passo; prazo; fonte; última atualização; mensagens; tarefas; calendário; versão de documentos enviada; retirada e denúncia.

**Estados vazios:** sem candidaturas; sem entrevistas; sem mensagens; sem documentos; poucas recomendações; falha de sincronização; nenhuma atualização compartilhada.

**Eventos:** `dashboard_viewed`, `timeline_opened`, `calendar_actioned`, `message_sent`, `message_reported`, `notification_opened`, `notification_preference_changed`.

### Tela 10 — Recomendações e alertas

**Conteúdo:** vagas recomendadas por competências, preferências, elegibilidade, fuso e disponibilidade; explicação “por que esta vaga”; alertas diários/semanais por e-mail/notificação; organização pessoal separada do status do empregador.

**Estados:** recomendada; salva; dispensada; alerta ativo; alerta pausado; match insuficiente; recomendação contestada.

**Eventos:** `recommendation_shown`, `recommendation_reason_opened`, `recommendation_saved`, `recommendation_dismissed`, `recommendation_feedback_given`, `alert_enabled`, `alert_paused`.

**Decisão:** não mostrar score interno ou ranking; permitir corrigir preferências e informar que recomendação não é garantia de entrevista.

### Tela 11 — Documentos e privacidade

**Conteúdo:** biblioteca global; anexos por candidatura; histórico de versões; quem viu; origem; finalidade; retenção; exportar, corrigir, baixar, pausar visibilidade e excluir.

**Estados:** privado; compartilhado com esta candidatura; compartilhado com empresa verificada; expirando; excluído; retenção legal.

**Eventos:** `document_added`, `document_version_selected`, `document_shared`, `document_accessed`, `document_downloaded`, `data_export_requested`, `data_deletion_requested`, `visibility_paused`.

**Decisão:** CPF/RG, passaporte/CNH, dados bancários, cartão, senhas, códigos 2FA e pagamentos nunca são pedidos antes de contratação legítima e finalidade necessária.

### Tela 12 — Segurança e denúncia

**Conteúdo:** denúncia em vaga, empresa, perfil, mensagem e link; categorias de fraude, phishing, pagamento, impersonação, salário/local incorreto, discriminação, excesso de dados e spam; texto, URL e anexos; alertas “Nunca pague para conseguir uma vaga” e “Não envie CPF/RG ou dados bancários nesta etapa”.

**Estados:** denúncia recebida; em triagem; risco alto interrompido; ação tomada; sem violação; recurso; denunciante protegido.

**Eventos:** `safety_warning_shown`, `entity_reported`, `high_risk_link_blocked`, `moderation_case_created`, `moderation_action_taken`, `appeal_submitted`, `reporter_notified`.

**SLA:** interromper rapidamente riscos financeiros e links maliciosos; medir denúncias, tempo de resposta, remoção, reincidência e falsos positivos.

## 5. Notificações e regras de comunicação

- **Imediatas:** recibo de candidatura, pedido de ação, convite de avaliação, falha técnica, alteração de prazo, agendamento/remarcação, mensagem da empresa, resultado de denúncia e alerta de segurança.
- **Digest configurável:** novas vagas, recomendações e alertas de busca em frequência diária ou semanal.
- **Canal:** comunicação interna como padrão; e-mail/notificação como espelho, com preferências por tipo. Nunca depender de um e-mail para recuperar uma ação crítica sem disponibilizá-la no dashboard.
- **Microcopy:** usar verbos e estados concretos (“Escolha um horário até…”, “A empresa não compartilhou nova atualização desde…”). Não usar “em avaliação” para mascarar ausência de informação.
- **Privacidade:** não colocar documentos ou dados sensíveis no corpo de notificações; links devem levar ao domínio/app oficial e ter análise de risco.

## 6. Métricas, experimentos e governança

### Funil e qualidade

Medir por etapa: visualização→início; início→upload; upload→correção; correção→envio; abandono por campo; erro de upload; tempo até envio; conclusão assistiva; convite→início→envio de avaliação; falhas técnicas; retestes; resposta dentro do prazo; retirada; conversão em entrevista/oferta; latência de atualização; taxa de mensagens respondidas.

### Equidade e acessibilidade

Segmentar, com proteção e base legal, por tecnologia assistiva/acomodação, dispositivo, idioma, país, fuso, modelo contratual e outras dimensões permitidas. Monitorar impacto adverso, diferenças de conclusão, pontuação, avanço e desempenho posterior. Não usar segmentação para excluir; usar para encontrar barreiras e corrigir o produto.

### Confiança e privacidade

Acompanhar denúncias por categoria, severidade, tempo de triagem, bloqueios preventivos, remoção, reincidência, apelações, falsos positivos, pedidos de dados financeiros, acessos a documentos, exportações, exclusões, consentimentos e prazo de retenção cumprido.

### Experimento prioritário

Comparar formulário completo versus entrada curta + perfil progressivo, mantendo o mesmo núcleo mínimo de triagem e a mesma qualidade de informação para recrutadores. Sucessos: mais candidaturas concluídas sem aumento de candidaturas inelegíveis, retrabalho, fraude, abandono assistivo ou impacto adverso. Guardrail: correções após parsing, denúncias, tempo do recrutador, avanço por competência e satisfação do candidato.

### Governança de avaliações e IA

Registrar versão do modelo, item, rubrica, avaliador, justificativa, população, métricas de validade, impacto adverso, taxa de recurso e data de revalidação. Reavaliar quando mudar cargo, população, tecnologia ou modelo. Decisões de alto impacto exigem revisão humana e canal de recurso.

## 7. Roadmap acionável

### MVP — confiança e candidatura básica

Implementar tela de vaga transparente; entrada curta; upload PDF/DOCX; parsing editável com arquivo original; perfil mínimo reutilizável; perguntas required/optional; revisão/envio; recibo; dashboard de candidaturas; timeline; estados de agendamento separados; notificações de ação; privacidade básica; denúncia e alertas de fraude; acessibilidade de teclado/leitor de tela; métricas do funil.

### V1 — progressão, avaliações e contexto regional

Adicionar documentos por candidatura e histórico; preferências e recomendações explicáveis; agenda e autoagendamento; avaliações com demo, salvamento, retomada, acomodação, reteste e feedback por competência; verificação em camadas de empresa; filtros de país/fuso/idioma/modelo; comparador de proposta; consentimentos separados; exportação e exclusão; moderação de risco baseada em sinais.

### V2 — escala e governança

Adicionar auditoria de impacto adverso e validade; scorecards multiavaliador; onboarding por país; status de onboarding documental/contratual; métricas públicas agregadas de segurança; integração controlada com ATS; localização PT/ES/EN; automações de revalidação de vagas e expiração; centro de recursos sobre CLT/PJ/contractor/EOR com ressalva de que cenários fiscais são indicativos e não aconselhamento profissional.

## 8. Perguntas abertas para validação

1. Qual é o primeiro segmento do HireU: candidatos gerais, tecnologia, nearshore Brasil-EUA ou outro recorte?
2. O HireU será marketplace, camada de candidatura sobre ATSs, serviço de recrutamento, ou combinação? Quem controla cada status?
3. Quais campos são realmente necessários para a primeira decisão de cada tipo de vaga?
4. O telefone deve ser opcional no MVP e em quais casos passa a ser necessário?
5. Qual mecanismo de acesso pós-envio atende melhor recuperação, segurança e baixa fricção?
6. Quais empresas e entidades serão verificadas, por quais fontes, com que periodicidade e qual o processo de recurso?
7. Quais categorias de avaliação serão suportadas inicialmente e quais competências têm evidência de validade?
8. Qual é o teto operacional e financeiro para take-homes acima de duas horas?
9. Quais fornecedores processarão currículo, vídeo, áudio ou avaliação, em que países e por quanto tempo?
10. Como o HireU tratará bases legais, transferências internacionais, encarregado/DPO, retenção e solicitações LGPD?
11. Quais acomodações o produto consegue cumprir diretamente e quais exigem operação humana?
12. Como medir sucesso de acessibilidade sem coletar dados sensíveis desnecessários?
13. Qual fonte de verdade alimenta estados de candidatura e como lidar com empresas que não atualizam o sistema?
14. O candidato poderá contestar recomendação, parsing, avaliação ou decisão de moderação? Qual SLA?
15. Quais regras definem contractor/PJ versus EOR/local employee por país, e quem responde por compliance?
16. Como mostrar remuneração líquida sem oferecer aconselhamento fiscal ou criar falsa precisão?
17. O marketplace aceitará vagas confidenciais, banco de talentos e terceirizadas? Como rotulá-las?
18. Qual será a política para mensagens externas, links, anexos e pedidos de documentos?
19. Qual denominador será usado para claims de prazo, economia, colocação, acessibilidade e segurança?
20. Quais três riscos impedem o lançamento e quais métricas têm poder de interromper uma funcionalidade?

## 9. Referências e URLs

As referências abaixo foram fornecidas nas sínteses de pesquisa e não foram reconsultadas para este relatório.

### Cadastro, acessibilidade e candidatura

- LinkedIn — Candidate experience: https://www.linkedin.com/business/talent/blog/talent-acquisition/what-is-candidate-experience
- Wellfound — Candidate overview: https://wellfound.com/candidates/overview
- Workable — Application form: https://help.workable.com/hc/en-us/articles/115012231948-Customizing-the-application-form
- Greenhouse — Custom application questions: https://support.greenhouse.io/hc/en-us/articles/360025222851-Add-a-custom-application-question-to-a-job-post
- Greenhouse — Unsuccessful resume parse: https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse
- Lever — Application form: https://help.lever.co/s/article/Configuring-your-Lever-Application-Form
- Reddit — Upload and redigitação: https://www.reddit.com/r/jobs/comments/1cupyyq/why_companies_want_us_to_upload_resume_and_then/
- Reddit — Autofill gone wrong: https://www.reddit.com/r/recruitinghell/comments/1tn5tzm/autofill_gone_wrong/
- Estudo de acessibilidade em recrutamento: https://pmc.ncbi.nlm.nih.gov/articles/PMC10961918/
- Accessible recruitment: https://www.makethingsaccessible.com/guides/accessible-recruitment/

### Avaliações e entrevistas

- HackerRank — Candidate experience: https://support.hackerrank.com/articles/6477583642-ensuring-a-great-candidate-experience
- CodeSignal — Reducing bias: https://codesignal.com/blog/how-codesignals-talent-science-team-reduces-bias/
- SIOP — AI-based assessments: https://www.siop.org/wp-content/uploads/2024/06/Considerations-and-Recommendations-for-the-Validation-and-Use-of-AI-Based-Assessments-for-Employee-Selection-January-2023.pdf
- OPM — Structured interviews: https://www.opm.gov/policy-data-oversight/assessment-and-selection/other-assessment-methods/structured-interviews/
- Entrevistas assíncronas: https://pmc.ncbi.nlm.nih.gov/articles/PMC12151341/
- Acessibilidade em entrevistas: https://www.hiretruffle.com/blog/one-way-interview-accessibility-guide
- Reddit — Take-home assessments: https://www.reddit.com/r/cscareerquestions/comments/1b25o1e/take_home_assessments_are_a_joke/
- Reddit — Recusa de take-home: https://www.reddit.com/r/cscareerquestions/comments/1ecem9q/anyone_refuse_to_do_take_home_assignments/
- Portfolio reviews: https://cellainc.com/insights/blog/learn-more-about-your-candidates-through-structured-portfolio-reviews/

### Dashboard, status e notificações

- Greenhouse MyGreenhouse FAQ: https://support.greenhouse.io/hc/en-us/articles/43418495049499-MyGreenhouse-FAQ-for-Candidates
- Greenhouse — MyGreenhouse: https://www.greenhouse.com/blog/meet-mygreenhouse-a-new-kind-of-candidate-portal
- MyGreenhouse: https://my.greenhouse.com/
- Lever: https://www.lever.co/
- Ashby — View jobs from candidate profile: https://www.ashbyhq.com/product-updates/view-jobs-from-the-candidate-profile
- LinkedIn Job Tracker: https://www.linkedin.com/help/linkedin/topic/a153003
- LinkedIn job alerts: https://www.linkedin.com/help/linkedin/answer/a511279
- Indeed Help: https://support.indeed.com/hc/en-us
- Reddit — Candidate workflow states: https://www.reddit.com/r/recruiting/comments/1knpkam/ats_candidate_workflow/
- Reddit — ATS sorting opacity: https://www.reddit.com/r/ResumesATS/comments/1udeuos/how_do_recruiters_actually_sort_candidates_in/

### Confiança, fraude e privacidade

- FTC — Job scams: https://consumer.ftc.gov/articles/job-scams
- FTC — Impersonation scams: https://consumer.ftc.gov/consumer-alerts/2023/08/scammers-impersonate-well-known-companies-recruit-fake-jobs-linkedin-other-job-platforms
- Indeed — Safe job search: https://www.indeed.com/help/job-seekers/articles/216354123-guidelines-for-a-safe-job-search
- Indeed Security: https://www.indeed.com/security
- Indeed — Report phishing: https://www.indeed.com/help/job-seekers/articles/360040122551-reporting-a-message-or-phishing-attempt?hl=en&co=US
- Indeed — Report a job: https://www.indeed.com/help/job-seekers/articles/360028156452-how-to-report-a-job?hl=en&co=US
- LinkedIn — Verification: https://www.linkedin.com/help/linkedin/answer/a9551007
- LinkedIn — Reporting: https://www.linkedin.com/help/linkedin/answer/a513290
- LinkedIn — Safety/reporting: https://www.linkedin.com/help/linkedin/answer/a1336387
- ANPD — Glossário/princípios: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/glossario-anpd/p

### Brasil/LATAM e contratação internacional

- Revelo report: https://report.revelo.com/
- RemoFirst — Hiring in LATAM: https://www.remofirst.com/post/opportunities-and-risks-of-hiring-in-latam
- RemoFirst — Contractor onboarding: https://www.remofirst.com/post/onboarding-contractors-in-other-countries
- Reddit — Trabalho internacional/PJ: https://www.reddit.com/r/brdev/comments/192l171/pra_quem_trabalha_pra_fora_como_funciona_o/
- Reddit — Contratação por empresa estrangeira: https://www.reddit.com/r/brdev/comments/10ff74g/existe_forma_de_trabalhar_do_br_contratado_por/
- Reddit — Vagas internacionais: https://www.reddit.com/r/brdev/comments/11zs484/indica%C3%A7%C3%A3o_de_profissionais_que_conseguiram_vagas/
- Stack Overflow Developer Survey 2024: https://survey.stackoverflow.co/2024/work
- Banco Central — RMCCI: https://www.bcb.gov.br/content/estabilidadefinanceira/cambiocapitais/normas_cambio/rmcci/RMCCI-1-11.pdf
- Receita Federal — Exportação por pessoa física: https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/exportacao-portal-unico/situacoes-especiais-na-exportacao/exportacao-promovida-por-pessoa-fisica

### Arqueologia competitiva: HireABrazilian

- Portal autenticado: https://app.hireabrazilian.online/
- Landing: https://www.hireabrazilian.online/
- Privacidade: https://www.hireabrazilian.online/privacy
- Termos: https://www.hireabrazilian.online/terms
- Referral: https://www.hireabrazilian.online/referral
- Careers: https://www.hireabrazilian.online/careers
- Comparação: https://www.hireabrazilian.online/vs-hirelatam
- Presentation: https://www.hireabrazilian.online/presentation
