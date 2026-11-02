import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pt-BR";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const translations: Array<[string, string]> = [
  ["Candidate workspace", "Área do candidato"],
  ["Company workspace", "Área da empresa"],
  ["Explore jobs", "Explorar vagas"],
  ["How it works", "Como funciona"],
  ["For companies", "Para empresas"],
  ["For candidates", "Para candidatos"],
  ["Sign in", "Entrar"],
  ["Post a job", "Publicar vaga"],
  ["Candidate", "Candidato"],
  ["Company", "Empresa"],
  ["Logged out", "Deslogado"],
  ["Public website", "Site público"],
  ["Mock environment", "Ambiente mock"],
  ["Mock mode", "Modo mock"],
  ["Auto login", "Auto login"],
  ["Overview", "Visão geral"],
  ["Applications", "Candidaturas"],
  ["Assessments", "Avaliações"],
  ["Calendar", "Agenda"],
  ["Documents", "Documentos"],
  ["Recommendations", "Recomendações"],
  ["Messages", "Mensagens"],
  ["My profile", "Meu perfil"],
  ["Privacy & control", "Privacidade e controle"],
  ["Settings", "Configurações"],
  ["Discover talent", "Encontrar talentos"],
  ["Interviews", "Entrevistas"],
  ["Credits & billing", "Créditos e cobrança"],
  ["Automations", "Automações"],
  ["Company settings", "Configurações da empresa"],
  ["Appearance", "Aparência"],
  ["Sign out", "Sair"],
  ["Light", "Claro"],
  ["Dark", "Escuro"],
  ["Search saved jobs...", "Buscar vagas salvas..."],
  ["Search candidates...", "Buscar candidatos..."],
  ["Good morning", "Bom dia"],
  ["Candidate workspace", "Área do candidato"],
  ["Company workspace", "Área da empresa"],
  ["Keep moving", "Continue avançando"],
  ["Recommended for you", "Recomendado para você"],
  ["Good context matches", "Matches com bom contexto"],
  ["Your applications", "Suas candidaturas"],
  ["Every next step, in one place.", "Cada próximo passo, em um só lugar."],
  ["Profile strength", "Força do perfil"],
  ["Saved jobs", "Vagas salvas"],
  ["Active applications", "Candidaturas ativas"],
  ["Profile readiness", "Prontidão do perfil"],
  ["Candidate workspace", "Área do candidato"],
  ["Your profile", "Seu perfil"],
  ["Your documents", "Seus documentos"],
  ["Your calendar", "Sua agenda"],
  ["Your assessments", "Suas avaliações"],
  ["Recommended for you", "Recomendado para você"],
  ["Privacy by default", "Privacidade por padrão"],
  ["Your profile is private", "Seu perfil é privado"],
  ["Manage visibility", "Gerenciar visibilidade"],
  ["For companies", "Para empresas"],
  [
    "Pay for the conversation, not the contact.",
    "Pague pela conversa, não pelo contato.",
  ],
  [
    "Explore anonymous profiles, invite the right people and let HireU handle the handoffs.",
    "Explore perfis anônimos, convide as pessoas certas e deixe o HireU cuidar das etapas.",
  ],
  ["Candidate identity stays protected", "Identidade do candidato protegida"],
  ["Outcome-based credit refunds", "Reembolso de créditos por resultado"],
  [
    "Agents handle scheduling and reminders",
    "Agentes cuidam da agenda e dos lembretes",
  ],
  ["Discovery", "Discovery"],
  ["Interview Credits", "Créditos de entrevista"],
  ["Full Workspace", "Workspace completo"],
  ["Custom", "Customizado"],
  ["Free", "Grátis"],
  ["Browse signal before you commit.", "Explore sinais antes de decidir."],
  ["For five qualified invitations.", "Para cinco convites qualificados."],
  [
    "For teams hiring every month.",
    "Para equipes que contratam todos os meses.",
  ],
  ["For a repeatable talent engine.", "Para um motor de talentos recorrente."],
  ["Explore talent", "Explorar talentos"],
  ["Talk to HireU", "Falar com o HireU"],
  ["Choose", "Escolher"],
  ["Most popular", "Mais popular"],
  ["Anonymous candidate profiles", "Perfis anônimos de candidatos"],
  ["Explainable AI matching", "Match explicável por IA"],
  ["Shortlists and saved searches", "Shortlists e buscas salvas"],
  [
    "Salary, location and availability context",
    "Salário, localização e disponibilidade",
  ],
  ["5 interview credits", "5 créditos de entrevista"],
  ["Structured candidate invite", "Convite estruturado ao candidato"],
  ["Scheduling and reminders", "Agendamento e lembretes"],
  ["Automatic refund protection", "Proteção automática de reembolso"],
  ["Advanced talent search", "Busca avançada de talentos"],
  ["25 qualified interviews / month", "25 entrevistas qualificadas / mês"],
  ["Calendar, rooms and transcripts", "Agenda, salas e transcrições"],
  ["Automation and hiring analytics", "Automação e análises de contratação"],
  ["Your next chapter starts here.", "Seu próximo capítulo começa aqui."],
  [
    "Build a hiring process people trust.",
    "Construa um processo de contratação confiável.",
  ],
  [
    "Sign in with a magic link. No password to remember.",
    "Entre com um magic link. Sem senha para lembrar.",
  ],
  ["Email address", "Endereço de e-mail"],
  ["Send magic link", "Enviar magic link"],
  ["I am a candidate", "Sou candidato"],
  ["I am hiring", "Estou contratando"],
  [
    "Mock authentication is active for this product review.",
    "A autenticação mock está ativa nesta revisão.",
  ],
  ["Discover talent", "Encontrar talentos"],
  [
    "Browse anonymous, explainable profiles.",
    "Explore perfis anônimos e explicáveis.",
  ],
  [
    "Pay only when a qualified conversation is ready.",
    "Pague somente quando uma conversa qualificada estiver pronta.",
  ],
  [
    "Identity stays protected until the candidate accepts.",
    "A identidade fica protegida até o candidato aceitar.",
  ],
  ["What you can know now", "O que você pode saber agora"],
  ["Why this profile appeared", "Por que este perfil apareceu"],
  ["Ready to meet this person?", "Pronto para conhecer esta pessoa?"],
  ["Invite to interview", "Convidar para entrevista"],
  ["Invite sent", "Convite enviado"],
  ["Anonymous profile", "Perfil anônimo"],
  ["Open to conversations", "Aberto a conversas"],
  ["Strong context", "Contexto forte"],
  ["Skills aligned", "Competências alinhadas"],
  ["Worth a look", "Vale olhar"],
  [
    "Search by role, skill or location",
    "Buscar por cargo, competência ou localização",
  ],
  ["Filters", "Filtros"],
  ["Candidate signals", "Sinais de candidatos"],
  ["Worth a closer look", "Vale olhar com atenção"],
  [
    "A clear view of your hiring motion, credits and candidate conversations.",
    "Uma visão clara do seu processo de contratação, créditos e conversas.",
  ],
  ["Available interview credits", "Créditos de entrevista disponíveis"],
  ["Candidate conversations", "Conversas com candidatos"],
  ["Active roles", "Vagas ativas"],
  ["Interview credits", "Créditos de entrevista"],
  ["Pay for a qualified conversation.", "Pague por uma conversa qualificada."],
  ["Buy credits", "Comprar créditos"],
  ["View interviews", "Ver entrevistas"],
  ["Automation watch", "Monitor de automação"],
  ["HireU is handling the handoffs.", "O HireU está cuidando das etapas."],
  ["Refund guard active", "Proteção de reembolso ativa"],
  ["Manage automations", "Gerenciar automações"],
  ["Upcoming", "Próximos eventos"],
  ["Interview calendar", "Agenda de entrevistas"],
  ["Confirmed", "Confirmada"],
  ["Choose time", "Escolher horário"],
  [
    "Every next step, in one place. Only confirmed updates appear here.",
    "Cada próximo passo, em um só lugar. Apenas atualizações confirmadas aparecem aqui.",
  ],
  ["All", "Todas"],
  ["Needs action", "Precisa de ação"],
  ["Completed", "Concluídas"],
  ["Portfolio review", "Revisão de portfólio"],
  ["Product thinking conversation", "Conversa sobre pensamento de produto"],
  ["Open room", "Abrir sala"],
  ["Choose a time", "Escolher um horário"],
  ["Google Meet room ready", "Sala do Google Meet pronta"],
  ["Recording off by default", "Gravação desligada por padrão"],
  [
    "Recording unavailable because recording was off",
    "Gravação indisponível porque estava desligada",
  ],
  ["Credit finalized", "Crédito finalizado"],
  ["Summary ready from notes", "Resumo pronto a partir das notas"],
  ["View notes", "Ver notas"],
  ["Credits & billing", "Créditos e cobrança"],
  [
    "Simple pricing for qualified conversations.",
    "Preços simples para conversas qualificadas.",
  ],
  ["Available balance", "Saldo disponível"],
  ["Interview credits", "Créditos de entrevista"],
  ["Outcome protection", "Proteção por resultado"],
  [
    "Pay for the conversation, not the contact.",
    "Pague pela conversa, não pelo contato.",
  ],
  ["Recent activity", "Atividade recente"],
  ["Credit ledger", "Ledger de créditos"],
  ["Add 5 credits", "Adicionar 5 créditos"],
  ["Choose workspace", "Escolher workspace"],
  ["Let’s talk", "Vamos conversar"],
  ["Refund", "Reembolso"],
  ["returned", "devolvido"],
  ["reserved", "reservado"],
  ["finalized", "finalizado"],
  [
    "Let agents handle handoffs while your team stays accountable for decisions.",
    "Deixe os agentes cuidarem das etapas enquanto sua equipe continua responsável pelas decisões.",
  ],
  ["Google Workspace", "Google Workspace"],
  [
    "Calendar and Meet are ready to connect.",
    "Calendar e Meet estão prontos para conectar.",
  ],
  ["Connect Google Workspace", "Conectar Google Workspace"],
  ["Scheduling agent", "Agente de agendamento"],
  ["Candidate follow-up agent", "Agente de acompanhamento"],
  ["Refund guard", "Proteção de reembolso"],
  ["Interview summary agent", "Agente de resumo da entrevista"],
  ["Human decisions stay human.", "Decisões humanas continuam humanas."],
  ["Calendar", "Agenda"],
  ["Meet", "Meet"],
  ["Gmail", "Gmail"],
  ["Basics", "Dados básicos"],
  ["Resume", "Currículo"],
  ["Experience", "Experiência"],
  ["Preferences", "Preferências"],
  ["Assessment", "Avaliação"],
  ["Review", "Revisão"],
  ["Continue", "Continuar"],
  ["Save and finish later", "Salvar e terminar depois"],
  ["Back to profile", "Voltar ao perfil"],
  ["Build your candidate profile", "Construa seu perfil de candidato"],
  ["Your profile is private", "Seu perfil é privado"],
  ["Profile strength", "Força do perfil"],
  ["Add evidence", "Adicionar evidência"],
  ["Save changes", "Salvar alterações"],
  ["Explore jobs", "Explorar vagas"],
  ["View all", "Ver tudo"],
  ["Next step", "Próximo passo"],
  ["Action needed", "Ação necessária"],
  ["Submitted", "Enviada"],
  ["In review", "Em análise"],
  ["Interview", "Entrevista"],
  ["New", "Nova"],
  ["Received by company", "Recebida pela empresa"],
  ["No update shared yet", "Nenhuma atualização compartilhada"],
  ["Withdraw application", "Retirar candidatura"],
  ["Start preview", "Iniciar prévia"],
  ["Request support", "Solicitar suporte"],
  ["Private by default", "Privado por padrão"],
  ["Add document", "Adicionar documento"],
  ["Not shared yet", "Ainda não compartilhado"],
  ["Tune preferences", "Ajustar preferências"],
  ["Review job", "Ver vaga"],
  ["Not for me", "Não é para mim"],
  ["Product updates", "Atualizações do produto"],
  ["Export my data", "Exportar meus dados"],
  ["Request account deletion", "Solicitar exclusão da conta"],
  ["Your next best step", "Seu próximo melhor passo"],
  ["Finish your work sample", "Finalize seu work sample"],
  [
    "Your profile is ready for recommendations.",
    "Seu perfil está pronto para recomendações.",
  ],
  [
    "One short sample will give teams more context",
    "Um work sample curto dará mais contexto às equipes",
  ],
  ["Latest activity", "Atividade recente"],
  ["What changed", "O que mudou"],
  ["See matches", "Ver matches"],
  ["Assessment principles", "Princípios das avaliações"],
  [
    "Show how you work, not how well you perform on camera.",
    "Mostre como você trabalha, não como se sai diante de uma câmera.",
  ],
  ["Ready for you", "Pronto para você"],
  ["Need an accommodation?", "Precisa de uma adaptação?"],
  ["Your week at a glance", "Sua semana em uma visão"],
  ["Next up", "Próximo evento"],
  [
    "Keep important hiring conversations in one calm place.",
    "Mantenha conversas importantes de contratação em um só lugar.",
  ],
  ["Write a reply in mock mode...", "Escreva uma resposta no modo mock..."],
  ["Core profile", "Perfil principal"],
  ["Your story", "Sua história"],
  ["Who can see your profile?", "Quem pode ver seu perfil?"],
  ["Keep my profile private", "Manter meu perfil privado"],
  ["Discoverable to verified companies", "Descoberto por empresas verificadas"],
  ["Separate choices", "Escolhas separadas"],
  ["Keep me in the talent pool", "Manter-me no banco de talentos"],
  ["Good morning, Ana.", "Bom dia, Ana."],
  [
    "Here is what is worth your attention today.",
    "Veja o que merece sua atenção hoje.",
  ],
  ["Good morning, Nuvem Labs.", "Bom dia, Nuvem Labs."],
  [
    "Credits are only consumed when a candidate accepts and completes an interview.",
    "Os créditos só são consumidos quando um candidato aceita e conclui uma entrevista.",
  ],
  ["Refund guard active", "Proteção de reembolso ativa"],
  ["Upcoming", "Próximos eventos"],
  ["Company interviews", "Entrevistas da empresa"],
  ["Company automations", "Automações da empresa"],
  [
    "Agents can schedule, remind, summarize and refund.",
    "Agentes podem agendar, lembrar, resumir e reembolsar.",
  ],
  [
    "They cannot reject candidates, reveal identity without consent or make a hiring decision.",
    "Eles não podem rejeitar candidatos, revelar identidade sem consentimento ou decidir uma contratação.",
  ],
];

function translate(value: string) {
  let result = value;
  for (const [from, to] of translations.sort(
    (a, b) => b[0].length - a[0].length
  )) {
    result = result.split(from).join(to);
  }
  return result;
}

function translateDom(language: Language) {
  if (typeof document === "undefined") return;
  const nodes = document.body.querySelectorAll("*:not(script):not(style)");
  nodes.forEach(element => {
    const htmlElement = element as HTMLElement;
    ["placeholder", "title", "aria-label"].forEach(attribute => {
      const current = htmlElement.getAttribute(attribute);
      if (!current) return;
      const originalKey = `data-hireu-original-${attribute}`;
      if (!htmlElement.hasAttribute(originalKey))
        htmlElement.setAttribute(originalKey, current);
      htmlElement.setAttribute(
        attribute,
        language === "pt-BR"
          ? translate(current)
          : htmlElement.getAttribute(originalKey) || current
      );
    });
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }
  textNodes.forEach(node => {
    const parent = node.parentElement;
    if (
      !parent ||
      ["SCRIPT", "STYLE", "INPUT", "TEXTAREA"].includes(parent.tagName)
    )
      return;
    if (!node.nodeValue?.trim()) return;
    const original = originalTextNodes.get(node) || node.nodeValue;
    originalTextNodes.set(node, original);
    const nextValue = language === "pt-BR" ? translate(original) : original;
    if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
  });
}

const originalTextNodes = new WeakMap<Text, string>();

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("hireu-language") === "pt-BR"
      ? "pt-BR"
      : "en";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("hireu-language", nextLanguage);
      document.documentElement.lang = nextLanguage === "pt-BR" ? "pt-BR" : "en";
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt-BR" ? "pt-BR" : "en";
    let translating = false;
    const scan = () => {
      if (translating) return;
      translating = true;
      translateDom(language);
      translating = false;
    };
    scan();
    const observer = new MutationObserver(scan);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "pt-BR" : "en"),
    }),
    [language]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export const copy = {
  en: {
    exploreJobs: "Explore jobs",
    howItWorks: "How it works",
    forCompanies: "For companies",
    signIn: "Sign in",
    postJob: "Post a job",
    appearance: "Appearance",
    signOut: "Sign out",
    candidateWorkspace: "Candidate workspace",
    companyWorkspace: "Company workspace",
    searchSavedJobs: "Search saved jobs...",
    searchCandidates: "Search candidates...",
    overview: "Overview",
    applications: "Applications",
    assessments: "Assessments",
    calendar: "Calendar",
    documents: "Documents",
    recommendations: "Recommendations",
    messages: "Messages",
    myProfile: "My profile",
    privacy: "Privacy & control",
    settings: "Settings",
    discoverTalent: "Discover talent",
    interviews: "Interviews",
    creditsBilling: "Credits & billing",
    automations: "Automations",
    companySettings: "Company settings",
    language: "Language",
  },
  "pt-BR": {
    exploreJobs: "Explorar vagas",
    howItWorks: "Como funciona",
    forCompanies: "Para empresas",
    signIn: "Entrar",
    postJob: "Publicar vaga",
    appearance: "Aparência",
    signOut: "Sair",
    candidateWorkspace: "Área do candidato",
    companyWorkspace: "Área da empresa",
    searchSavedJobs: "Buscar vagas salvas...",
    searchCandidates: "Buscar candidatos...",
    overview: "Visão geral",
    applications: "Candidaturas",
    assessments: "Avaliações",
    calendar: "Agenda",
    documents: "Documentos",
    recommendations: "Recomendações",
    messages: "Mensagens",
    myProfile: "Meu perfil",
    privacy: "Privacidade e controle",
    settings: "Configurações",
    discoverTalent: "Encontrar talentos",
    interviews: "Entrevistas",
    creditsBilling: "Créditos e cobrança",
    automations: "Automações",
    companySettings: "Configurações da empresa",
    language: "Idioma",
  },
} as const;
