# HireU — resultados

## Homepage própria do HireU para os dois lados do marketplace

- O projeto HireU deve ser separado do HireABrazilian e não deve alterar o projeto original.
- O candidato deve encontrar uma entrada clara para procurar emprego.
- A empresa deve encontrar uma entrada clara para procurar candidato.
- A homepage deve apresentar uma busca de vagas, categorias, filtros e cartões de vagas responsivos.
- A homepage deve comunicar que a plataforma automatiza matching, aplicações, testes e cobrança com IA, sem prometer automação invisível ou resultados garantidos.
- A interface deve ser própria, inspirada apenas nos princípios observados no HireABrazilian e no hiring.lat, sem copiar identidade ou conteúdo.
- A homepage deve evitar depoimentos falsos e números de marketing não calculados; contagens visíveis devem derivar do conjunto de dados exibido.
- A interface deve funcionar em desktop e mobile, com tema claro/escuro e estados vazios/feedback para ações.

## Fundação técnica para as próximas automações

- O projeto deve usar a estrutura React + TypeScript + Vite do starter inicializado.
- O servidor e o banco gerenciado devem permanecer habilitados para receber autenticação, perfis, vagas, aplicações, testes, cobrança e automações.
- O manifesto de rotas deve declarar as rotas públicas atuais e as rotas principais previstas sem incluir APIs ou assets.
- Diagnósticos TypeScript devem permanecer registrados no ambiente Sandbox.

## Fluxo completo e painel do candidato — mock mode

- O cadastro de candidato deve começar com uma entrada curta e progressiva: nome, e-mail, localização e foco profissional, sem exigir dados sensíveis, carta de apresentação ou senha antes do primeiro passo.
- O onboarding deve ter etapas visíveis para dados básicos, currículo, experiência, preferências, avaliação opcional e revisão final, com progresso salvo localmente e possibilidade de voltar/editar.
- O currículo PDF/DOCX deve ser representado como importação revisável: arquivo original preservado, campos editáveis, confiança explícita e fallback manual sem bloquear o candidato.
- O perfil deve representar headline, resumo, competências, idiomas, portfólio, localização, fuso, janela de colaboração, preferência contratual, expectativa e visibilidade.
- O candidato deve ter um painel real com Overview, Applications, Assessments, Calendar, Documents, Recommendations, Messages, Profile e Privacy & control.
- Cada candidatura deve exibir status factual, timeline, próximo passo, data/fonte da atualização, documentos enviados e opção de retirar; estados de agendamento devem distinguir solicitado, escolha de horário e confirmado.
- Avaliações mock devem mostrar competência, duração, teto, formato, acessibilidade, suporte, retomada, reteste e feedback por competência, sem câmera, monitoramento ou personality scoring.
- Documentos devem separar biblioteca privada global e versões enviadas por candidatura; recomendações devem explicar sinais usados e permitir dispensar.
- Privacidade deve oferecer visibilidade privada por padrão, descoberta por empresas verificadas, consentimento separado para talent pool e controle de exportação/exclusão.
- Mensagens, agenda, estados vazios e feedback devem funcionar sem Supabase, usando mock data honesto e toasts de estado local.
- O painel do founder/empresa não faz parte desta etapa e permanece como próxima entrega.
