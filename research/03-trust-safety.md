# Trust & safety em marketplaces de emprego: riscos e padrões de confiança para o HireU

**Escopo.** Pesquisa de fontes públicas oficiais (FTC, Indeed, LinkedIn e ANPD) e de discussões públicas em Reddit. As discussões comunitárias são sinais qualitativos de dor e não estimativas de prevalência. As recomendações abaixo são requisitos de produto e operação para Brasil/LATAM; devem ser validadas com assessoria jurídica local, especialmente quanto à LGPD, relações de trabalho e regras de publicidade.

## O que quebra a confiança

### Golpes, vagas falsas e impersonação

A FTC descreve um padrão recorrente: o golpista publica em sites legítimos, redes sociais ou anúncios, promete emprego e busca dinheiro ou dados pessoais. Variantes incluem “trabalho remoto” com kit/treinamento pago, reshipping de mercadorias, cheque falso, cobrança de taxa por intermediação e falsas vagas governamentais [1]. Em alerta específico, a FTC documenta a sequência de impersonação: mensagem de um suposto recrutador, entrevista virtual, carta com logo e depois cobrança de equipamento por dinheiro, Zelle ou PayPal, ou pedido antecipado de documento de identidade e conta bancária [2].

A orientação do Indeed trata como sinais de risco o domínio de e-mail que não corresponde à empresa, oferta diferente da candidatura (bait-and-switch), remuneração e benefícios extraordinários, contratação sem entrevista, pedido de dinheiro, movimentação financeira ou abertura de várias contas [3]. O LinkedIn acrescenta pressão imediata para sair da plataforma, anúncios vagos ou mal escritos, contratação rápida demais, domínio incompatível, perfil incompleto e compra de equipamento [4].

**Implicação para o HireU:** confiança não pode depender só da aparência do anúncio. O produto precisa verificar empresa, anunciante, domínio e fluxo de contratação, bloquear padrões financeiros perigosos e tornar a denúncia uma parte visível da experiência.

### Phishing e comunicação candidato–empresa

O Indeed identifica phishing por remetente desconhecido, urgência/ameaça, anexos inesperados e domínios “look-alike”; recomenda não enviar dados bancários ou de cartão por e-mail/mensageiro e usar um telefone obtido no site oficial para confirmar a empresa [5]. A página de comunicação do Indeed permite denunciar uma conversa, fornecer contexto, mover a mensagem para spam e encaminhar mensagens futuras do remetente para essa pasta; a plataforma revisa e pode remover o anúncio [6].

O LinkedIn recomenda manter a conversa na plataforma, evitar links de terceiros, conferir o domínio corporativo e parar de compartilhar dados ao detectar atividade suspeita [4]. Para o HireU, o canal interno deve ser o padrão seguro: avisos sobre links externos, análise de URLs, bloqueio de anexos executáveis/compactados perigosos, rate limits e histórico auditável da conversa. WhatsApp pode ser comum no Brasil, mas não deve ser exigido no primeiro contato nem substituir a identidade verificada da empresa.

### Privacidade e exposição do currículo

O Indeed oferece currículo privado, visível somente a empregadores que o candidato contata, e alerta que mensagens e e-mails enviados pelo navegador não são criptografados ponta a ponta [7]. O LinkedIn separa o que pode ser compartilhado cedo — currículo, perfil, localização geral, pretensão salarial e disponibilidade — do que não deve ser pedido antes de uma oferta legítima: documento nacional, dados bancários/cartão, passaporte/CNH e pagamento [4].

A ANPD resume os princípios da LGPD aplicáveis ao marketplace: finalidade específica e informada, necessidade (mínimo de dados), transparência, livre acesso, segurança, prevenção, qualidade dos dados, não discriminação e responsabilização [8]. Isso exige que o HireU explique quem verá o currículo, para qual vaga/finalidade, por quanto tempo, com quais terceiros e como o titular pode acessar, corrigir, ocultar ou excluir os dados. Consentimento granular é preferível para usos opcionais, como formar banco de talentos ou receber marketing; não se deve condicionar a candidatura a publicidade.

**Implicação para o HireU:** oferecer visibilidade por padrão controlável (privado, apenas para vagas aplicadas, ou pesquisável por empresas verificadas), mascarar telefone/e-mail até o candidato aceitar contato e impedir campos de alto risco no primeiro estágio. Documento, dados bancários e informações fiscais devem ser coletados apenas após contratação, por fluxo dedicado, com justificativa, retenção limitada e controles de acesso.

### Salário pouco claro, vaga “banco de talentos” e comunicação assimétrica

O recurso de denúncia do Indeed reconhece como “fake job” anúncios de “talent bank” criados apenas para coletar currículos e também aceita denúncia de erro em título, descrição, salário, localização ou outros detalhes [9]. Discussões no r/brasil relatam a percepção de vagas que não estariam realmente abertas, anúncios em nome de sites/RH genéricos e uso de salários/benefícios atraentes para captar cadastros; há também alegações anedóticas de venda de contatos [10]. Esse relato não comprova que a prática seja generalizada, mas mostra por que “vaga ativa”, “empresa identificada” e “salário informado” precisam ser estados verificáveis, não apenas texto livre.

No mesmo sentido, candidatos relatam no Reddit terem enviado currículo e telefone e recebido depois um link para “credit score” [11]. O padrão é coerente com a recomendação oficial de não pedir identificadores, conta bancária ou documento antes da contratação [4].

**Implicação para o HireU:** exigir faixa salarial ou declarar explicitamente “não informado” com explicação; separar salário fixo, variável, benefícios, moeda e periodicidade; informar se a vaga é efetiva, confidencial, banco de talentos ou terceirizada; mostrar data da última confirmação e prazo de encerramento; proibir alegações de salário garantido quando houver comissão. O candidato deve receber confirmações e atualizações de status, inclusive encerramento e rejeição, com linguagem respeitosa e sem prometer retorno que a empresa não dará.

## Padrões de confiança observados

1. **Verificação em camadas:** LinkedIn usa badges para identidade, empresa e vaga/anunciante; recomenda conferir histórico, empregados ativos, domínio corporativo e a página oficial de carreiras [4]. Para o HireU, “verificado” deve ser específico (CNPJ/razão social, domínio, pessoa autorizada, localidade), ter data e explicar o que foi checado; nunca representar garantia de contratação.
2. **Minimização e visibilidade controlada:** currículo privado, contato mascarado e compartilhamento por finalidade reduzem abuso [7] [8].
3. **Fricção proporcional ao risco:** bloquear pagamento, cheque, gift card, dados financeiros, links suspeitos e pedidos de documento antes da oferta; exigir confirmação adicional para sair do canal seguro [1] [3] [4] [5].
4. **Denúncia acionável e feedback:** Indeed e LinkedIn permitem denunciar vaga, mensagem, perfil ou empresa com categorias; os relatos são revisados e podem levar à remoção [6] [9]. O HireU deve confirmar recebimento, mostrar prazo/estado do caso e proteger o denunciante, sem revelar detalhes que facilitem evasão.
5. **Integridade do inventário de vagas:** expiração automática, revalidação do anunciante, detecção de duplicatas, trilha de alterações e indicador de atividade evitam “vagas zumbi” e bait-and-switch.
6. **Linguagem de alerta sem culpabilização:** avisos curtos e contextuais (“Nunca pague para conseguir uma vaga”; “Não envie CPF/RG ou dados bancários nesta etapa”; “Confirme o domínio no site oficial”) devem aparecer antes da ação de risco. A FTC registra que vítimas podem ser enganadas por comunicações muito convincentes; educação deve ser preventiva, não acusatória [2].

## Controles de produto recomendados para o HireU

### Antes de publicar

- Verificar empresa por CNPJ/razão social, domínio corporativo, e-mail do responsável, telefone e, quando possível, prova de autorização. Para LATAM, modelar identificadores locais (CNPJ no Brasil e equivalentes por país) sem assumir que um único registro sirva para toda a região.
- Exigir campos estruturados: cargo, local/remote, regime, jornada, faixa salarial, moeda, periodicidade, variável/benefícios, etapas, empresa contratante e data de abertura. Se a faixa não puder ser divulgada, exigir justificativa visível ao candidato e revisão de qualidade.
- Classificar risco com regras e modelos: domínio gratuito/look-alike, salário fora da faixa, urgência, contratação sem entrevista, pedido de pagamento/dados, links externos, texto copiado, múltiplas vagas idênticas e empresa recém-criada. Risco alto vai para revisão humana ou fica retido.
- Exibir selo granular (“empresa verificada”, “domínio confirmado”, “vaga revalidada em DD/MM”) e explicar o significado. Não usar selo genérico que sugira garantia.

### Durante descoberta e candidatura

- Oferecer três níveis de visibilidade do currículo: privado; visível somente a empresas e vagas com que o candidato interagiu; pesquisável por empresas verificadas. Permitir pausar, apagar e ver histórico de acessos/compartilhamentos.
- Mascarar e-mail/telefone e intermediar mensagens. Liberar contato direto somente após ação explícita do candidato ou avanço de etapa.
- Manter candidatura e comunicação dentro do HireU. Interstitial antes de links externos, checagem de domínio e bloqueio/escaneamento de anexos perigosos. Proibir coleta de CPF/RG, passaporte, CNH, conta bancária, cartão, senha, códigos 2FA e pagamentos antes de uma etapa formal de contratação.
- Mostrar “o que é seguro compartilhar agora” e “o que nunca pedimos”, em português e espanhol, com exemplos locais (PIX, boleto, gift card, taxa de cadastro, curso obrigatório, compra de equipamento).
- Capturar consentimento separado para: candidatura à vaga; banco de talentos; contato futuro; compartilhamento com terceiros. Registrar versão do aviso de privacidade, finalidade, data e destinatários.

### Moderação, report e resposta a incidentes

- Botão “Denunciar” em vaga, empresa, perfil, mensagem e link, com categorias: vaga falsa/duplicada, impersonação, phishing, pedido de dinheiro, salário/local incorreto, discriminação, coleta excessiva de dados, assédio e spam. Permitir texto, URL e anexos de evidência.
- Triage automática para interromper imediatamente links, mensagens e anúncios com risco financeiro; revisão humana para decisões de remoção e reincidência. Manter fila por severidade e SLA (por exemplo: risco financeiro/identidade no mesmo dia).
- Notificar candidato e empresa sobre recebimento, estado e resultado; oferecer apelação a anunciantes legítimos. Remover rede de contas, domínios e anúncios relacionados, não apenas o item reportado.
- Preservar logs mínimos para investigação, limitar acesso interno e ter procedimento de incidente, comunicação a titulares e avaliação de notificação à ANPD quando aplicável. Publicar métricas agregadas: denúncias, tempo mediano de resposta, remoções, reincidência e falsos positivos.

### Depois da candidatura

- Mostrar linha do tempo da candidatura: recebida, em análise, entrevista, decisão, encerrada. Exigir que empresas arquivem/encerrem a vaga e enviem atualização mínima ao candidato.
- Lembrar a empresa de não pedir dados não necessários e bloquear campos sensíveis no ATS do HireU. Eliminar ou anonimizar currículos após a finalidade e prazo informados, salvo base legal/consentimento válido para retenção.
- Medir confiança sem transformar denúncias em punição automática: taxa de vagas revalidadas, percentuais com salário, tempo até primeira resposta, cliques em alertas, taxa de report confirmado, reincidência por empresa/domínio e reclamações de privacidade.

## Referências

[1]: https://consumer.ftc.gov/articles/job-scams "FTC — Job Scams"
[2]: https://consumer.ftc.gov/consumer-alerts/2023/08/scammers-impersonate-well-known-companies-recruit-fake-jobs-linkedin-other-job-platforms "FTC — Scammers impersonate well-known companies and recruit for fake jobs"
[3]: https://www.indeed.com/help/job-seekers/articles/216354123-guidelines-for-a-safe-job-search "Indeed — Guidelines for a Safe Job Search"
[4]: https://www.linkedin.com/help/linkedin/answer/a9551007 "LinkedIn — Search for jobs confidently and safely"
[5]: https://www.indeed.com/security "Indeed — Security and phishing guidance"
[6]: https://www.indeed.com/help/job-seekers/articles/360040122551-reporting-a-message-or-phishing-attempt?hl=en&co=US "Indeed — Reporting a Message or Phishing Attempt"
[7]: https://www.indeed.com/security "Indeed — Private resumes and account security"
[8]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/glossario-anpd/p "ANPD — Glossário: princípios da LGPD"
[9]: https://www.indeed.com/help/job-seekers/articles/360028156452-how-to-report-a-job?hl=en&co=US "Indeed — How To Report a Job"
[10]: https://www.reddit.com/r/brasil/comments/1bbmi24/a_maioria_das_vagas_de_emprego_na_internet_n%C3%A3o/ "Reddit r/brasil — A maioria das vagas de emprego na internet não existem"
[11]: https://www.reddit.com/r/linkedin/comments/1adqlmv/i_realized_i_had_applied_to_a_scam_job_on/ "Reddit r/linkedin — Applied to a scam job and received a suspicious credit-score link"
[12]: https://www.linkedin.com/help/linkedin/answer/a513290 "LinkedIn — Reporting jobs"
[13]: https://www.linkedin.com/help/linkedin/answer/a1336387 "LinkedIn — Recognize and report scams"
