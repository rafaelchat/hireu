import { Link, useLocation } from "wouter";
import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Command,
  FileText,
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
  return (
    <header className="product-public-header">
      <Logo />
      <nav>
        <Link href="/jobs">Explore jobs</Link>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/pricing">For companies</Link>
      </nav>
      <div className="product-header-actions">
        <button
          className="product-icon-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <Link href="/auth" className="product-text-link">
          Sign in
        </Link>
        <Link href="/auth?mode=company" className="product-dark-button">
          Post a job <span>→</span>
        </Link>
      </div>
    </header>
  );
}

const candidateLinks = [
  ["/candidate", "Overview", LayoutDashboard],
  ["/candidate/applications", "Applications", BriefcaseBusiness],
  ["/candidate/assessments", "Assessments", Target],
  ["/candidate/calendar", "Calendar", CalendarDays],
  ["/candidate/documents", "Documents", FileText],
  ["/candidate/recommendations", "Recommendations", Sparkles],
  ["/candidate/messages", "Messages", MessageCircle],
  ["/candidate/profile", "My profile", UserRound],
  ["/candidate/privacy", "Privacy & control", LockKeyhole],
  ["/candidate/settings", "Settings", Settings],
] as const;
const companyLinks = [
  ["/company", "Overview", LayoutDashboard],
  ["/company/jobs/new", "Post a job", BriefcaseBusiness],
  ["/company/candidates", "Candidates", UserRound],
  ["/company/settings", "Company settings", Settings],
] as const;

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
  const links = kind === "candidate" ? candidateLinks : companyLinks;
  const label =
    kind === "candidate" ? "Candidate workspace" : "Company workspace";
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
              {text}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button onClick={toggleTheme}>
            <span>
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              Appearance
            </span>
            <small>{theme === "light" ? "Light" : "Dark"}</small>
          </button>
          <button
            onClick={() => toast.info("Sign out will connect to Supabase Auth")}
          >
            <span>
              <LogOut size={17} />
              Sign out
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
                kind === "candidate"
                  ? "Search saved jobs..."
                  : "Search candidates..."
              }
            />
            <kbd>
              <Command size={11} /> K
            </kbd>
          </div>
          <div className="app-top-actions">
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
