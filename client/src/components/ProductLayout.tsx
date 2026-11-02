import { Link, useLocation } from "wouter";
import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Command,
  FileText,
  CreditCard,
  LayoutDashboard,
  LogOut,
  LockKeyhole,
  Menu,
  MessageCircle,
  Moon,
  Sparkles,
  Search,
  Settings,
  Sun,
  Target,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { copy, useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export function Logo() {
  return (
    <Link href="/" className="product-logo" aria-label="HireU home">
      hire<span>U</span>
    </Link>
  );
}

export function PublicHeader() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <header className="product-public-header">
      <Logo />
      <nav>
        <Link href="/jobs">{t.exploreJobs}</Link>
        <Link href="/how-it-works">{t.howItWorks}</Link>
        <Link href="/pricing">{t.forCompanies}</Link>
      </nav>
      <div className="product-header-actions">
        <LanguageSwitcher />
        <button
          className="product-icon-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <Link href="/auth" className="product-text-link">
          {t.signIn}
        </Link>
        <Link href="/auth?mode=company" className="product-dark-button">
          {t.postJob} <span>→</span>
        </Link>
      </div>
    </header>
  );
}

const candidateLinks = [
  ["/candidate", "overview", LayoutDashboard],
  ["/candidate/applications", "applications", BriefcaseBusiness],
  ["/candidate/assessments", "assessments", Target],
  ["/candidate/calendar", "calendar", CalendarDays],
  ["/candidate/documents", "documents", FileText],
  ["/candidate/recommendations", "recommendations", Sparkles],
  ["/candidate/messages", "messages", MessageCircle],
  ["/candidate/profile", "myProfile", UserRound],
  ["/candidate/privacy", "privacy", LockKeyhole],
  ["/candidate/settings", "settings", Settings],
] as const;
const companyLinks = [
  ["/company", "overview", LayoutDashboard],
  ["/company/candidates", "discoverTalent", UserRound],
  ["/company/interviews", "interviews", CalendarDays],
  ["/company/billing", "creditsBilling", CreditCard],
  ["/company/jobs/new", "postJob", BriefcaseBusiness],
  ["/company/settings", "companySettings", Settings],
] as const;

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={
        language === "en"
          ? "Mudar para português do Brasil"
          : "Switch to English"
      }
      title={language === "en" ? "Português (Brasil)" : "English"}
    >
      <span aria-hidden="true">{language === "en" ? "🇺🇸" : "🇧🇷"}</span>
      <strong>{language === "en" ? "EN" : "PT-BR"}</strong>
    </button>
  );
}

export function AppShell({
  kind,
  children,
}: {
  kind: "candidate" | "company";
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = copy[language];
  const links = kind === "candidate" ? candidateLinks : companyLinks;
  const label =
    kind === "candidate" ? t.candidateWorkspace : t.companyWorkspace;
  return (
    <div className="app-shell">
      <aside className={`app-sidebar ${open ? "open" : ""}`}>
        <div className="app-sidebar-top">
          <Logo />
          <button
            className="product-icon-button mobile-only"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        <div className="workspace-switch">
          <span className="workspace-avatar">
            {kind === "candidate" ? "AM" : "NL"}
          </span>
          <span>
            <small>{label}</small>
            <strong>
              {kind === "candidate" ? "Ana Martins" : "Nuvem Labs"}
            </strong>
          </span>
          <ChevronDown size={15} />
        </div>
        <nav className="app-nav">
          {links.map(([href, text, Icon]) => (
            <Link
              key={href}
              href={href}
              className={location === href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <Icon size={17} />
              {t[text as keyof typeof t]}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button onClick={toggleTheme}>
            <span>
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              {t.appearance}
            </span>
            <small>{theme === "light" ? "Light" : "Dark"}</small>
          </button>
          <button
            onClick={() => toast.info("Sign out will connect to Supabase Auth")}
          >
            <span>
              <LogOut size={17} />
              {t.signOut}
            </span>
          </button>
        </div>
      </aside>
      <div className="app-main">
        <header className="app-topbar">
          <button
            className="product-icon-button mobile-only"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={19} />
          </button>
          <div className="app-search">
            <Search size={16} />
            <input
              placeholder={
                kind === "candidate" ? t.searchSavedJobs : t.searchCandidates
              }
            />
            <kbd>
              <Command size={11} /> K
            </kbd>
          </div>
          <div className="app-top-actions">
            <LanguageSwitcher />
            <button className="product-icon-button">
              <Bell size={17} />
              <span className="notification-dot" />
            </button>
            <button className="avatar-button">
              {kind === "candidate" ? "AM" : "NL"}
            </button>
          </div>
        </header>
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
      </div>
      {action}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  tone = "default",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "default" | "orange" | "lime";
}) {
  return (
    <div className={`metric-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="progress-track">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
