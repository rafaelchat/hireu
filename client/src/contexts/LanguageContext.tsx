import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pt-BR";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

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
