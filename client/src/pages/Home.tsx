import { useMemo, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  Compass,
  FileCheck2,
  Filter,
  Headphones,
  Leaf,
  Moon,
  Palette,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

type Job = {
  id: number;
  title: string;
  company: string;
  mark: string;
  accent: string;
  location: string;
  mode: "Remoto" | "Híbrido";
  contract: string;
  salary: string;
  tags: string[];
  posted: string;
  response: string;
  featured?: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Nuvem Labs",
    mark: "NL",
    accent: "#f05a3c",
    location: "Brasil · LATAM",
    mode: "Remoto",
    contract: "Full-time",
    salary: "R$ 14k – 19k / mês",
    tags: ["Figma", "Produto", "Inglês C1"],
    posted: "há 2h",
    response: "faixa salarial aberta",
    featured: true,
  },
  {
    id: 2,
    title: "Full-stack Engineer",
    company: "Orla Health",
    mark: "OH",
    accent: "#2f7c68",
    location: "São Paulo · Brasil",
    mode: "Híbrido",
    contract: "Full-time",
    salary: "US$ 4.5k – 6.5k / mês",
    tags: ["TypeScript", "React", "Node.js"],
    posted: "há 5h",
    response: "processo em 4 etapas",
    featured: true,
  },
  {
    id: 3,
    title: "Customer Success Lead",
    company: "Semente Co.",
    mark: "SC",
    accent: "#d89724",
    location: "Brasil · Global",
    mode: "Remoto",
    contract: "Contractor",
    salary: "US$ 2.8k – 4k / mês",
    tags: ["B2B", "SaaS", "Espanhol"],
    posted: "ontem",
    response: "candidatura rápida",
  },
  {
    id: 4,
    title: "Data & Analytics Manager",
    company: "Ponto Norte",
    mark: "PN",
    accent: "#5874b8",
    location: "Brasil · LATAM",
    mode: "Remoto",
    contract: "Full-time",
    salary: "R$ 18k – 24k / mês",
    tags: ["SQL", "Analytics", "Liderança"],
    posted: "ontem",
    response: "faixa salarial aberta",
  },
  {
    id: 5,
    title: "AI Content Strategist",
    company: "Mosaico Studio",
    mark: "MS",
    accent: "#b35b88",
    location: "Brasil · Global",
    mode: "Remoto",
    contract: "Part-time",
    salary: "R$ 8k – 11k / mês",
    tags: ["Conteúdo", "IA", "Inglês B2"],
    posted: "há 2 dias",
    response: "match recomendado",
  },
];

const categories = [
  { label: "Produto & Design", icon: Palette },
  { label: "Engenharia", icon: Code2 },
  { label: "Dados & IA", icon: BarChart3 },
  { label: "Growth & Vendas", icon: Compass },
  { label: "Suporte & Ops", icon: Headphones },
];

const filters = [
  "Todas",
  "Remoto",
  "Híbrido",
  "Full-time",
  "Contractor",
] as const;

type FilterName = (typeof filters)[number];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="HireU início">
      <span className="brand-word">
        hire<span>U</span>
      </span>
      <span className="brand-line" aria-hidden="true" />
    </a>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <article
      className="job-card"
      style={{ "--job-accent": job.accent } as CSSProperties}
    >
      <div className="job-card-topline">
        <div
          className="company-mark"
          style={{ backgroundColor: job.accent }}
          aria-hidden="true"
        >
          {job.mark}
        </div>
        <div className="job-card-meta">
          {job.featured && (
            <span className="featured-label">
              <Sparkles size={12} /> destaque
            </span>
          )}
          <span>{job.posted}</span>
        </div>
        <button
          className="icon-button subtle"
          aria-label={`Salvar vaga de ${job.title}`}
          onClick={() =>
            toast.success("Vaga salva", {
              description: "Você pode revisitá-la no seu painel.",
            })
          }
        >
          <Leaf size={16} />
        </button>
      </div>
      <div className="job-card-body">
        <p className="company-name">
          {job.company} <ShieldCheck size={14} />
        </p>
        <h3>{job.title}</h3>
        <div className="job-location">
          <span className="status-dot" /> {job.location}{" "}
          <span className="separator">·</span> {job.mode}
        </div>
        <p className="job-salary">{job.salary}</p>
      </div>
      <div className="job-card-footer">
        <div className="tag-row">
          {job.tags.map(tag => (
            <span className="skill-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <span className="response-note">
          <Clock3 size={13} /> {job.response}
        </span>
      </div>
    </article>
  );
}

function IntentCard({
  icon: Icon,
  eyebrow,
  title,
  copy,
  action,
  tone,
  onClick,
}: {
  icon: typeof BriefcaseBusiness;
  eyebrow: string;
  title: string;
  copy: string;
  action: string;
  tone: "orange" | "ink";
  onClick: () => void;
}) {
  return (
    <button className={`intent-card intent-${tone}`} onClick={onClick}>
      <span className="intent-icon">
        <Icon size={19} />
      </span>
      <span className="intent-copy">
        <span className="eyebrow">{eyebrow}</span>
        <strong>{title}</strong>
        <span>{copy}</span>
      </span>
      <span className="intent-arrow">
        <ArrowRight size={18} />
      </span>
      <span className="intent-action">{action}</span>
    </button>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterName>("Todas");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const visibleJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return jobs.filter(job => {
      const matchesQuery =
        !normalizedQuery ||
        [job.title, job.company, job.location, ...job.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesFilter =
        activeFilter === "Todas" ||
        job.mode === activeFilter ||
        job.contract === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  const submitSearch = () => {
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
    if (query.trim()) {
      toast.success(
        `${visibleJobs.length} ${visibleJobs.length === 1 ? "vaga encontrada" : "vagas encontradas"}`,
        { description: `Resultados para “${query.trim()}”` }
      );
    }
  };

  const startFlow = (flow: "candidate" | "company") => {
    toast.success(
      flow === "candidate" ? "Modo candidato ativado" : "Modo empresa ativado",
      {
        description:
          flow === "candidate"
            ? "Em breve você poderá criar seu perfil em poucos minutos."
            : "Vamos estruturar sua vaga e o processo ideal.",
      }
    );
  };

  return (
    <div className="site-shell" id="top">
      <div className="top-strip">
        <span>
          <Zap size={13} /> contratação com contexto, não com ruído
        </span>
        <span className="top-strip-link">
          feito no Brasil <span className="mini-flag">●</span>
        </span>
      </div>
      <header className="site-header">
        <BrandMark />
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#jobs">Explorar vagas</a>
          <a href="#how-it-works">Como funciona</a>
          <a href="#for-companies">Para empresas</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            aria-label="Alternar tema"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="text-button"
            onClick={() =>
              toast.info("Login seguro em breve", {
                description: "O onboarding sem senha está sendo preparado.",
              })
            }
          >
            Entrar
          </button>
          <button className="header-cta" onClick={() => startFlow("company")}>
            Publicar vaga <ArrowRight size={15} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="eyebrow-mark" /> a nova camada do trabalho remoto
            </div>
            <h1>
              Seu próximo capítulo começa com <em>contexto.</em>
            </h1>
            <p className="hero-lede">
              O HireU tira o ruído da contratação. Encontre oportunidades que
              fazem sentido para você — ou as pessoas certas para fazer seu time
              avançar.
            </p>
            <div
              className={`hero-search ${isSearchFocused ? "is-focused" : ""}`}
            >
              <Search size={19} />
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyDown={event => event.key === "Enter" && submitSearch()}
                placeholder="cargo, habilidade ou empresa"
                aria-label="Buscar vagas"
              />
              {query && (
                <button
                  className="clear-search"
                  onClick={() => setQuery("")}
                  aria-label="Limpar busca"
                >
                  <X size={15} />
                </button>
              )}
              <button className="search-submit" onClick={submitSearch}>
                Encontrar meu match <ArrowRight size={16} />
              </button>
            </div>
            <div className="search-hint">
              <CircleHelp size={14} /> sem cadastro para explorar · contexto
              antes do clique
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Prévia do processo automatizado do HireU"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="match-card">
              <div className="match-card-header">
                <span className="live-indicator">
                  <span /> HireU intelligence
                </span>
                <span className="match-score">match em contexto</span>
              </div>
              <div className="match-profile">
                <div className="profile-avatar">AM</div>
                <div>
                  <strong>Ana Martins</strong>
                  <span>Product Designer · São Paulo</span>
                </div>
                <div className="match-ring">
                  <span>U</span>
                </div>
              </div>
              <div className="match-reasons">
                <span>
                  <Check size={12} /> faixa alinhada
                </span>
                <span>
                  <Check size={12} /> skills compatíveis
                </span>
                <span>
                  <Check size={12} /> cultura de trabalho
                </span>
              </div>
              <div className="match-footer">
                <span>próximo passo sugerido</span>
                <strong>
                  conversa inicial <ArrowRight size={14} />
                </strong>
              </div>
            </div>
            <div className="floating-note note-top">
              <ShieldCheck size={15} />
              <span>sinais de confiança</span>
            </div>
            <div className="floating-note note-bottom">
              <Sparkles size={15} />
              <span>triagem estruturada</span>
            </div>
            <span className="visual-caption">
              IA que explica o porquê do match.
            </span>
          </div>
        </section>

        <section className="intent-section" aria-label="Escolha seu caminho">
          <div className="section-kicker">
            <span>01</span>
            <span>por onde você quer começar?</span>
          </div>
          <div className="intent-grid">
            <IntentCard
              icon={Compass}
              eyebrow="para quem quer avançar"
              title="Estou buscando uma oportunidade"
              copy="Perfil, vagas e candidaturas em um só lugar."
              action="Encontrar meu próximo passo"
              tone="orange"
              onClick={() => startFlow("candidate")}
            />
            <IntentCard
              icon={Users}
              eyebrow="para quem quer construir"
              title="Estou buscando uma pessoa"
              copy="Defina o desafio. A gente encontra o contexto."
              action="Montar meu processo"
              tone="ink"
              onClick={() => startFlow("company")}
            />
          </div>
        </section>

        <section className="category-section">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">
                <span>02</span>
                <span>explore por intenção</span>
              </div>
              <h2>O trabalho certo não precisa parecer uma caça ao tesouro.</h2>
            </div>
            <a href="#jobs" className="arrow-link">
              ver todas as áreas <ArrowRight size={16} />
            </a>
          </div>
          <div className="category-rail">
            {categories.map(({ label, icon: Icon }) => (
              <a href="#jobs" className="category-pill" key={label}>
                <span className="category-icon">
                  <Icon size={17} />
                </span>
                <span>{label}</span>
                <small>explorar área</small>
                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </section>

        <section className="jobs-section" id="jobs">
          <div className="jobs-heading">
            <div>
              <div className="section-kicker">
                <span>03</span>
                <span>vagas com contexto</span>
              </div>
              <h2>Algumas oportunidades que valem sua atenção.</h2>
            </div>
            <div className="jobs-count">
              <strong>{visibleJobs.length.toString().padStart(2, "0")}</strong>
              <span>
                exemplos de vagas
                <br />
                nesta seleção
              </span>
            </div>
          </div>
          <div className="jobs-toolbar">
            <div className="filter-row">
              <Filter size={15} />
              <span className="filter-label">filtrar por</span>
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="sort-button">
              mais recentes <ChevronDown size={15} />
            </button>
          </div>
          <div className="jobs-list">
            {visibleJobs.length > 0 ? (
              visibleJobs.map(job => <JobCard job={job} key={job.id} />)
            ) : (
              <div className="empty-state">
                <Search size={22} />
                <strong>Nenhuma vaga com esse recorte.</strong>
                <span>
                  Tente outra palavra ou remova um filtro para ampliar sua
                  busca.
                </span>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveFilter("Todas");
                  }}
                >
                  limpar busca
                </button>
              </div>
            )}
          </div>
          <div className="list-footer">
            <span>
              mostrando {visibleJobs.length} de {jobs.length} oportunidades
              curadas
            </span>
            <button
              className="outline-cta"
              onClick={() =>
                toast.info("Mais vagas chegando", {
                  description: "A curadoria do HireU é atualizada diariamente.",
                })
              }
            >
              ver mais vagas <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="how-intro">
            <div className="section-kicker">
              <span>04</span>
              <span>menos operação, mais conversa</span>
            </div>
            <h2>
              O HireU trabalha nos bastidores para você poder focar no que
              importa.
            </h2>
            <p>
              Um processo transparente, com automação onde ela ajuda e pessoas
              onde elas fazem diferença.
            </p>
            <button
              className="dark-cta"
              onClick={() => toast.info("Tour do HireU em breve")}
            >
              ver como funciona <ArrowRight size={16} />
            </button>
          </div>
          <div className="process-list">
            {[
              {
                icon: WandSparkles,
                number: "01",
                title: "Entenda o contexto",
                copy: "A IA organiza experiência, intenção e momento — não só palavras-chave.",
              },
              {
                icon: FileCheck2,
                number: "02",
                title: "Valide o que importa",
                copy: "Testes curtos e conversas estruturadas substituem filtros cegos.",
              },
              {
                icon: BriefcaseBusiness,
                number: "03",
                title: "Candidate-se sem fricção",
                copy: "Aplicações, testes e próximos passos ficam organizados em um só fluxo.",
              },
              {
                icon: ReceiptText,
                number: "04",
                title: "Cobre com clareza",
                copy: "Para empresas, publicação e cobrança entram no processo sem surpresas ou atalhos.",
              },
            ].map(({ icon: Icon, number, title, copy }) => (
              <div className="process-item" key={number}>
                <span className="process-number">{number}</span>
                <span className="process-icon">
                  <Icon size={19} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <ArrowRight size={16} />
              </div>
            ))}
          </div>
        </section>

        <section className="company-banner" id="for-companies">
          <div className="company-banner-mark">
            hire<span>U</span>
          </div>
          <div className="company-banner-copy">
            <div className="eyebrow">para times que contratam com intenção</div>
            <h2>Uma vaga é só o começo da conversa.</h2>
            <p>
              Conte o desafio, o contexto e o que você espera construir. O HireU
              transforma isso em um processo que as pessoas certas querem
              participar — com aplicação, testes e cobrança organizados para o
              seu time.
            </p>
          </div>
          <button className="light-cta" onClick={() => startFlow("company")}>
            encontrar meu próximo hire <ArrowRight size={16} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <BrandMark />
          <p>
            trabalho com mais sinal.
            <br />
            contratação com mais contexto.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>explore</span>
            <a href="#jobs">Vagas</a>
            <a href="#how-it-works">Como funciona</a>
          </div>
          <div>
            <span>construa</span>
            <a href="#for-companies">Para empresas</a>
            <a href="#top">Para candidatos</a>
          </div>
          <div>
            <span>hireU</span>
            <a href="#top">Sobre nós</a>
            <a href="#top">Privacidade</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 HireU. feito para o próximo capítulo.</span>
          <span>Brasil · LATAM · remoto</span>
        </div>
      </footer>
    </div>
  );
}
