import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  CreditCard,
  FileText,
  Filter,
  Globe2,
  LockKeyhole,
  Mail,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Upload,
  Users,
  WandSparkles,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import {
  AppShell,
  MetricCard,
  PageHeader,
  ProgressBar,
  PublicHeader,
} from "@/components/ProductLayout";
import {
  candidateApplications,
  companyCandidates,
  jobs,
  suggestedJobs,
  type Job,
} from "@/data/mock";

function JobRow({ job, compact = false }: { job: Job; compact?: boolean }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className={`job-row ${compact ? "compact" : ""}`}
    >
      <span
        className="job-mark"
        style={{
          background:
            job.company === "Nuvem Labs"
              ? "#f05a3c"
              : job.company === "Orla Health"
                ? "#2f7c68"
                : "#5874b8",
        }}
      >
        {job.companyMark}
      </span>
      <span className="job-row-main">
        <strong>{job.title}</strong>
        <small>
          {job.company} · {job.location}
        </small>
      </span>
      <span className="job-row-tags">
        {job.tags.slice(0, 2).map(tag => (
          <em key={tag}>{tag}</em>
        ))}
      </span>
      <span className="job-row-salary">{job.salary}</span>
      <ChevronRight size={16} />
    </Link>
  );
}

export function LandingPage() {
  return (
    <div className="product-page">
      <PublicHeader />
      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="page-eyebrow">The hiring layer for modern teams</p>
          <h1>Find work with more signal.</h1>
          <p>
            HireU helps candidates find the right next step and helps companies
            build a clearer path to the people they need.
          </p>
          <div className="product-search">
            <Search size={18} />
            <input placeholder="Search by role, skill or company" />
            <Link href="/jobs">
              Search jobs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-note">
            <CheckCircle2 size={14} /> Explore without an account · built for
            Brazil and LATAM
          </div>
        </div>
        <div className="hero-orchestration">
          <div className="orchestration-head">
            <span>
              <span className="live-dot" /> HireU workflow
            </span>
            <strong>Less noise, more context</strong>
          </div>
          <div className="orchestration-profile">
            <span className="large-avatar">AM</span>
            <span>
              <strong>Ana Martins</strong>
              <small>Senior Product Designer</small>
            </span>
            <span className="match-pill">Context aligned</span>
          </div>
          {["Profile understood", "Skills assessed", "Next step ready"].map(
            (item, i) => (
              <div className="orchestration-step" key={item}>
                <span>{i + 1}</span>
                <span>{item}</span>
                <Check size={14} />
              </div>
            )
          )}
          <div className="orchestration-foot">
            <span>Transparent by design</span>
            <ShieldCheck size={15} />
          </div>
        </div>
      </section>
      <section className="intent-panel">
        <div>
          <p className="page-eyebrow">Start where you are</p>
          <h2>Two sides. One clearer process.</h2>
        </div>
        <div className="intent-options">
          <Link href="/jobs" className="intent-option orange">
            <span className="option-icon">
              <Target size={19} />
            </span>
            <span>
              <small>For candidates</small>
              <strong>Find your next opportunity</strong>
              <em>
                Build a profile, discover relevant work and apply without the
                busywork.
              </em>
            </span>
            <ArrowRight size={20} />
          </Link>
          <Link href="/company" className="intent-option dark">
            <span className="option-icon">
              <Users size={19} />
            </span>
            <span>
              <small>For companies</small>
              <strong>Find your next great hire</strong>
              <em>
                Tell us the context and build a better hiring process around it.
              </em>
            </span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      <section className="product-section">
        <div className="section-intro">
          <p className="page-eyebrow">A better starting point</p>
          <h2>Job search should feel like progress.</h2>
          <p>
            Every screen is designed to help you make one clear decision at a
            time.
          </p>
        </div>
        <div className="feature-grid">
          {[
            {
              icon: WandSparkles,
              title: "AI-assisted context",
              copy: "Turn experience, goals and constraints into a profile people can actually understand.",
            },
            {
              icon: FileText,
              title: "Applications that move",
              copy: "One workspace for profiles, assessments, messages and next steps.",
            },
            {
              icon: CreditCard,
              title: "Clear employer billing",
              copy: "Simple plans for teams that want to pay for a thoughtful process, not noise.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <div className="feature-card" key={title}>
              <Icon size={20} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowRight size={15} />
            </div>
          ))}
        </div>
      </section>
      <section className="product-section home-jobs">
        <div className="section-heading">
          <div>
            <p className="page-eyebrow">Curated opportunities</p>
            <h2>Open roles with context.</h2>
          </div>
          <Link href="/jobs" className="product-outline-button">
            Explore all jobs <ArrowRight size={15} />
          </Link>
        </div>
        <div className="job-list">
          {jobs.slice(0, 3).map(job => (
            <JobRow job={job} key={job.id} />
          ))}
        </div>
      </section>
      <section className="product-cta">
        <div>
          <p className="page-eyebrow">Ready when you are</p>
          <h2>Make the next move clearer.</h2>
          <p>
            HireU is free for candidates. Companies can start with a structured
            job brief.
          </p>
        </div>
        <Link href="/jobs" className="product-light-button">
          Explore HireU <ArrowRight size={16} />
        </Link>
      </section>
      <PublicFooter />
    </div>
  );
}

export function PublicFooter() {
  return (
    <footer className="product-footer">
      <div>
        <span className="product-logo">
          hire<span>U</span>
        </span>
        <p>
          Work with more signal.
          <br />
          Hire with more context.
        </p>
      </div>
      <div>
        <small>Explore</small>
        <Link href="/jobs">Jobs</Link>
        <Link href="/how-it-works">How it works</Link>
      </div>
      <div>
        <small>Build</small>
        <Link href="/company">For companies</Link>
        <Link href="/auth">For candidates</Link>
      </div>
      <div>
        <small>HireU</small>
        <Link href="/pricing">Pricing</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
      <div className="footer-legal">
        © 2026 HireU · Brazil · LATAM · Remote-first
      </div>
    </footer>
  );
}

export function JobsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      jobs.filter(job => {
        const matches =
          !query ||
          [job.title, job.company, ...job.tags]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase());
        return (
          matches &&
          (filter === "All" || job.mode === filter || job.contract === filter)
        );
      }),
    [filter, query]
  );
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="public-content">
        <PageHeader
          eyebrow="Explore jobs"
          title="Work that fits the way you work."
          copy="Browse roles from teams that are clear about the challenge, the context and the next step."
        />
        <div className="job-search-large">
          <Search size={18} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search roles, skills or companies"
          />
          <button
            onClick={() =>
              toast.success(`${filtered.length} jobs in this selection`)
            }
          >
            Search
          </button>
        </div>
        <div className="jobs-layout">
          <aside className="filter-panel">
            <div>
              <Filter size={15} /> Filters
            </div>
            {["All", "Remote", "Hybrid", "Full-time", "Contractor"].map(
              item => (
                <button
                  className={filter === item ? "selected" : ""}
                  onClick={() => setFilter(item)}
                  key={item}
                >
                  {item}
                  <span>{item === "All" ? jobs.length : ""}</span>
                </button>
              )
            )}
            <div className="filter-note">
              <ShieldCheck size={15} />
              <span>
                We keep salary and location visible whenever the employer
                provides them.
              </span>
            </div>
          </aside>
          <div className="jobs-results">
            <div className="results-bar">
              <span>
                <strong>{filtered.length}</strong> opportunities in this
                selection
              </span>
              <button>
                Most relevant <ChevronRight size={14} />
              </button>
            </div>
            {filtered.map(job => (
              <JobRow job={job} key={job.id} />
            ))}
            {filtered.length === 0 && (
              <div className="empty-panel">
                <Search size={23} />
                <strong>No roles found.</strong>
                <span>Try another search or reset your filters.</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}

export function JobDetailsPage({ id }: { id: string }) {
  const job = jobs.find(item => item.id === id) ?? jobs[0];
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="job-detail-layout">
        <main>
          <Link href="/jobs" className="back-link">
            <ArrowLeft size={15} /> Back to jobs
          </Link>
          <div className="job-detail-heading">
            <span className="job-mark large" style={{ background: "#f05a3c" }}>
              {job.companyMark}
            </span>
            <div>
              <p className="page-eyebrow">
                {job.company} · {job.location}
              </p>
              <h1>{job.title}</h1>
              <div className="detail-meta">
                <span>{job.mode}</span>
                <span>{job.contract}</span>
                <span>{job.posted}</span>
              </div>
            </div>
          </div>
          <div className="job-detail-body">
            <h2>What you will do</h2>
            <p>{job.description}</p>
            <p>
              You will work with a focused team to turn a real business problem
              into a useful, measurable experience. The first conversation is
              about context, not a perfect keyword match.
            </p>
            <h2>What we are looking for</h2>
            <div className="detail-bullets">
              {job.tags
                .concat(["Clear communication", "Comfort with ambiguity"])
                .map(item => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </span>
                ))}
            </div>
            <h2>About the process</h2>
            <p>
              HireU keeps every step visible. You will see what happens next,
              why you were recommended and where to ask a question.
            </p>
          </div>
        </main>
        <aside className="apply-card">
          <span className="apply-label">
            <Sparkles size={14} /> Good context match
          </span>
          <h3>Ready to explore this role?</h3>
          <p>
            Start with a short profile. You can review everything before you
            submit.
          </p>
          <Link href={`/apply/${job.id}`} className="product-dark-button full">
            Apply for this role <ArrowRight size={16} />
          </Link>
          <div className="apply-trust">
            <ShieldCheck size={16} />
            <span>
              No spam. No hidden steps.
              <br />
              <strong>Free for candidates.</strong>
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function ApplyPage({ id }: { id: string }) {
  const job = jobs.find(item => item.id === id) ?? jobs[0];
  const [submitted, setSubmitted] = useState(false);
  if (submitted)
    return (
      <div className="center-page">
        <div className="success-card">
          <CheckCircle2 size={42} />
          <p className="page-eyebrow">Application received</p>
          <h1>Your next step is clear.</h1>
          <p>
            Your application for <strong>{job.title}</strong> at {job.company}{" "}
            is now in your workspace.
          </p>
          <Link href="/candidate/applications" className="product-dark-button">
            Open my applications <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="form-page">
        <Link href={`/jobs/${job.id}`} className="back-link">
          <ArrowLeft size={15} /> Back to role
        </Link>
        <div className="form-heading">
          <p className="page-eyebrow">Apply to {job.company}</p>
          <h1>Tell us enough to make the next step useful.</h1>
          <p>
            We keep it focused. Your profile and a few thoughtful answers are
            enough to begin.
          </p>
        </div>
        <form
          className="form-card"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            Your email
            <input required type="email" placeholder="you@example.com" />
          </label>
          <label>
            What would you like the team to know?
            <textarea
              required
              placeholder="Share the context behind your experience..."
            />
          </label>
          <label className="upload-field">
            <Upload size={18} />
            <span>
              <strong>Upload your resume</strong>
              <small>PDF or DOCX · optional for now</small>
            </span>
            <input type="file" />
          </label>
          <label className="checkbox-line">
            <input type="checkbox" required /> I agree to HireU processing my
            application for this role.
          </label>
          <button className="product-dark-button" type="submit">
            Review application <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="public-content narrow">
        <PageHeader
          eyebrow="How HireU works"
          title="A clearer process for both sides."
          copy="We use automation to remove repetitive work, not to hide the decision."
        />
        <div className="how-steps">
          {[
            {
              n: "01",
              icon: Bot,
              title: "Understand the context",
              copy: "AI turns goals, experience and constraints into a profile that is easier to evaluate.",
            },
            {
              n: "02",
              icon: Target,
              title: "Validate what matters",
              copy: "Short assessments and structured conversations replace black-box filters.",
            },
            {
              n: "03",
              icon: Send,
              title: "Keep moving",
              copy: "Applications, feedback and next steps stay together for candidates and teams.",
            },
            {
              n: "04",
              icon: CreditCard,
              title: "Charge clearly",
              copy: "Companies choose a simple plan. Candidates never pay to apply.",
            },
          ].map(({ n, icon: Icon, title, copy }) => (
            <div className="how-step" key={n}>
              <span>{n}</span>
              <Icon size={22} />
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
              <ArrowRight size={17} />
            </div>
          ))}
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}

export function PricingPage() {
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="public-content">
        <PageHeader
          eyebrow="For companies"
          title="Pay for the conversation, not the contact."
          copy="Explore anonymous profiles, invite the right people and let HireU handle the handoffs. Credits come back when a candidate does not respond or attend."
        />
        <div className="pricing-principles">
          <span>
            <ShieldCheck size={15} /> Candidate identity stays protected
          </span>
          <span>
            <RefreshCw size={15} /> Outcome-based credit refunds
          </span>
          <span>
            <Bot size={15} /> Agents handle scheduling and reminders
          </span>
        </div>
        <div className="pricing-grid">
          {[
            {
              name: "Discovery",
              price: "Free",
              copy: "Browse signal before you commit.",
              features: [
                "Anonymous candidate profiles",
                "Explainable AI matching",
                "Shortlists and saved searches",
                "Salary, location and availability context",
              ],
            },
            {
              name: "Interview Credits",
              price: "$59",
              copy: "For five qualified invitations.",
              features: [
                "5 interview credits",
                "Structured candidate invite",
                "Scheduling and reminders",
                "Automatic refund protection",
              ],
              featured: true,
            },
            {
              name: "Full Workspace",
              price: "$249",
              copy: "For teams hiring every month.",
              features: [
                "Advanced talent search",
                "25 qualified interviews / month",
                "Calendar, rooms and transcripts",
                "Automation and hiring analytics",
              ],
            },
            {
              name: "Custom",
              price: "Let’s talk",
              copy: "For a repeatable talent engine.",
              features: [
                "ATS ingestion and custom workflows",
                "Volume and dedicated support",
                "Google Workspace rollout",
                "Custom compliance and retention",
              ],
            },
          ].map(plan => (
            <div
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing-badge">Most popular</span>
              )}
              <p className="page-eyebrow">{plan.name}</p>
              <h2>{plan.price}</h2>
              <p>{plan.copy}</p>
              <div>
                {plan.features.map(feature => (
                  <span key={feature}>
                    <Check size={15} />
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href={
                  plan.name === "Discovery"
                    ? "/company/candidates"
                    : plan.name === "Custom"
                      ? "/auth?mode=company"
                      : "/company/billing"
                }
                className={
                  plan.featured
                    ? "product-dark-button full"
                    : "product-outline-button full"
                }
              >
                {plan.name === "Discovery"
                  ? "Explore talent"
                  : plan.name === "Custom"
                    ? "Talk to HireU"
                    : `Choose ${plan.name}`}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}

export function AuthPage() {
  const initialMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mode") === "company"
      ? "company"
      : "candidate";
  const [mode, setMode] = useState<"candidate" | "company">(initialMode);
  const [email, setEmail] = useState("");
  const [, setLocation] = useLocation();
  return (
    <div className="auth-page">
      <div className="auth-brand">
        <Link href="/">
          <span className="product-logo">
            hire<span>U</span>
          </span>
        </Link>
      </div>
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            className={mode === "candidate" ? "active" : ""}
            onClick={() => setMode("candidate")}
          >
            I am a candidate
          </button>
          <button
            className={mode === "company" ? "active" : ""}
            onClick={() => setMode("company")}
          >
            I am hiring
          </button>
        </div>
        <p className="page-eyebrow">
          {mode === "candidate" ? "Candidate workspace" : "Company workspace"}
        </p>
        <h1>
          {mode === "candidate"
            ? "Your next chapter starts here."
            : "Build a hiring process people trust."}
        </h1>
        <p>Sign in with a magic link. No password to remember.</p>
        <form
          onSubmit={async e => {
            e.preventDefault();
            toast.success("Mock mode: welcome to HireU", {
              description:
                "Your workspace is ready locally. Supabase authentication will be enabled later.",
            });
            setLocation(mode === "candidate" ? "/onboarding" : "/company");
          }}
        >
          <label>
            Email address
            <input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </label>
          <button className="product-dark-button full" type="submit">
            Send magic link <Mail size={16} />
          </button>
        </form>
        <div className="auth-note">
          <LockKeyhole size={14} /> Mock authentication is active for this
          product review.
        </div>
      </div>
    </div>
  );
}

export function CandidateDashboard() {
  return (
    <AppShell kind="candidate">
      <PageHeader
        eyebrow="Monday, September 14"
        title="Good morning, Ana."
        copy="Here is what is worth your attention today."
        action={
          <Link href="/jobs" className="product-dark-button">
            Explore jobs <ArrowRight size={16} />
          </Link>
        }
      />
      <div className="metric-grid">
        <MetricCard
          label="Active applications"
          value="03"
          detail="1 needs your attention"
          tone="orange"
        />
        <MetricCard
          label="Profile strength"
          value="78%"
          detail="Add your portfolio link"
          tone="lime"
        />
        <MetricCard
          label="Saved jobs"
          value="12"
          detail="3 new matches this week"
        />
      </div>
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Keep moving</p>
              <h2>Applications</h2>
            </div>
            <Link href="/candidate/applications">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {candidateApplications.map(item => (
            <Link
              href={`/jobs/${item.job.id}`}
              className="application-row"
              key={item.job.id}
            >
              <span className="job-mark" style={{ background: "#f05a3c" }}>
                {item.job.companyMark}
              </span>
              <span>
                <strong>{item.job.title}</strong>
                <small>{item.job.company}</small>
                <ProgressBar value={item.progress} />
              </span>
              <span
                className={`status-pill ${item.status.toLowerCase().replace(" ", "-")}`}
              >
                {item.status}
              </span>
            </Link>
          ))}
        </section>
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Recommended for you</p>
              <h2>Good context matches</h2>
            </div>
            <Sparkles size={18} />
          </div>
          {suggestedJobs.map(job => (
            <JobRow job={job} compact key={job.id} />
          ))}
        </section>
      </div>
    </AppShell>
  );
}

export function CandidateApplicationsPage() {
  return (
    <AppShell kind="candidate">
      <PageHeader
        eyebrow="Candidate workspace"
        title="Your applications"
        copy="Every next step, in one place."
      />
      <div className="tabs-row">
        <button className="active">
          All applications <span>3</span>
        </button>
        <button>
          In progress <span>2</span>
        </button>
        <button>
          Completed <span>1</span>
        </button>
      </div>
      <div className="dashboard-card wide-card">
        {candidateApplications.map(item => (
          <div className="application-detail-row" key={item.job.id}>
            <span className="job-mark" style={{ background: "#f05a3c" }}>
              {item.job.companyMark}
            </span>
            <div>
              <p className="page-eyebrow">{item.job.company}</p>
              <h3>{item.job.title}</h3>
              <p>{item.job.location} · Applied 3 days ago</p>
            </div>
            <div className="application-progress">
              <span
                className={`status-pill ${item.status.toLowerCase().replace(" ", "-")}`}
              >
                {item.status}
              </span>
              <ProgressBar value={item.progress} />
              <small>Next: {item.next}</small>
            </div>
            <ChevronRight size={17} />
          </div>
        ))}
      </div>
    </AppShell>
  );
}

export function CandidateProfilePage() {
  return (
    <AppShell kind="candidate">
      <PageHeader
        eyebrow="Candidate workspace"
        title="Your profile"
        copy="Give teams enough context to start a useful conversation."
        action={
          <button
            className="product-dark-button"
            onClick={() => toast.success("Profile saved in mock mode")}
          >
            Save changes <Check size={16} />
          </button>
        }
      />
      <div className="profile-grid">
        <section className="form-card">
          <div className="profile-identity">
            <span className="profile-photo">AM</span>
            <div>
              <h2>Ana Martins</h2>
              <p>Senior Product Designer · São Paulo, Brazil</p>
            </div>
            <button className="product-outline-button">Change photo</button>
          </div>
          <label>
            Headline
            <input defaultValue="Senior Product Designer building clear, human products" />
          </label>
          <label>
            About you
            <textarea defaultValue="I work at the intersection of product strategy, interaction and systems thinking." />
          </label>
          <div className="two-fields">
            <label>
              Location
              <input defaultValue="São Paulo, Brazil" />
            </label>
            <label>
              English level
              <select defaultValue="C1">
                <option>C1 — Advanced</option>
                <option>B2 — Upper intermediate</option>
              </select>
            </label>
          </div>
          <label>
            Skills
            <div className="skill-input">
              {["Product design", "Figma", "Design systems", "Research"].map(
                skill => (
                  <span key={skill}>{skill} ×</span>
                )
              )}
              <input placeholder="Add a skill" />
            </div>
          </label>
        </section>
        <aside className="profile-side">
          <div className="profile-completion">
            <p className="page-eyebrow">Profile strength</p>
            <strong>78%</strong>
            <ProgressBar value={78} />
            <p>
              Add a portfolio link and one work sample to improve your context
              match.
            </p>
            <button className="product-outline-button">
              Add portfolio <Plus size={15} />
            </button>
          </div>
          <div className="profile-completion">
            <p className="page-eyebrow">Privacy</p>
            <p>
              Your profile is visible only when you apply or choose to be
              discoverable.
            </p>
            <button className="text-link">
              Manage visibility <ArrowRight size={14} />
            </button>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

export function CompanyDashboard() {
  return (
    <AppShell kind="company">
      <PageHeader
        eyebrow="Monday, September 14"
        title="Good morning, Nuvem Labs."
        copy="Here is a clear view of your hiring motion."
        action={
          <Link href="/company/jobs/new" className="product-dark-button">
            Post a new job <Plus size={16} />
          </Link>
        }
      />
      <div className="metric-grid">
        <MetricCard
          label="Active roles"
          value="02"
          detail="1 needs candidates"
          tone="orange"
        />
        <MetricCard
          label="Candidates in flow"
          value="18"
          detail="5 new this week"
          tone="lime"
        />
        <MetricCard
          label="Average time to review"
          value="2.4d"
          detail="Down from 3.1d"
        />
      </div>
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Your roles</p>
              <h2>Active hiring</h2>
            </div>
            <Link href="/company/jobs/new">
              Manage roles <ArrowRight size={14} />
            </Link>
          </div>
          {jobs.slice(0, 2).map(job => (
            <div className="company-role-row" key={job.id}>
              <span className="job-mark" style={{ background: "#f05a3c" }}>
                {job.companyMark}
              </span>
              <span>
                <strong>{job.title}</strong>
                <small>
                  {job.mode} · {job.contract}
                </small>
              </span>
              <span>
                <strong>{job.id === jobs[0].id ? "12" : "06"}</strong>
                <small>candidates</small>
              </span>
              <Link
                href="/company/candidates"
                className="product-outline-button"
              >
                Review <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </section>
        <section className="dashboard-card signal-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Hiring signal</p>
              <h2>Where to focus</h2>
            </div>
            <Bot size={18} />
          </div>
          <div className="signal-score">
            <span>Candidate context quality</span>
            <strong>84%</strong>
            <ProgressBar value={84} />
          </div>
          <p>
            Most candidates are clear on role expectations. Add a work sample to
            improve decision quality.
          </p>
          <Link href="/company/candidates" className="text-link">
            Review candidates <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </AppShell>
  );
}

export function CompanyPostJobPage() {
  const [step, setStep] = useState(1);
  return (
    <AppShell kind="company">
      <PageHeader
        eyebrow="Company workspace"
        title="Post a role"
        copy="A clear brief is the first step to a better hiring process."
      />
      <div className="stepper">
        {["Role context", "Requirements", "Review & pay"].map((item, i) => (
          <span
            className={step === i + 1 ? "active" : step > i + 1 ? "done" : ""}
            key={item}
          >
            <b>{step > i + 1 ? <Check size={13} /> : i + 1}</b>
            {item}
          </span>
        ))}
      </div>
      <section className="form-card wide-form">
        {step === 1 && (
          <>
            <h2>Start with the challenge.</h2>
            <p>Tell candidates what they would actually be working on.</p>
            <label>
              Role title
              <input placeholder="e.g. Senior Product Designer" />
            </label>
            <div className="two-fields">
              <label>
                Department
                <select>
                  <option>Product & Design</option>
                  <option>Engineering</option>
                  <option>Growth & Sales</option>
                </select>
              </label>
              <label>
                Location
                <input placeholder="Brazil · LATAM" />
              </label>
            </div>
            <label>
              What will this person own?
              <textarea placeholder="Describe the outcome this role is responsible for..." />
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Make the signal useful.</h2>
            <p>Set expectations before someone spends time applying.</p>
            <div className="two-fields">
              <label>
                Work mode
                <select>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </label>
              <label>
                Employment type
                <select>
                  <option>Full-time</option>
                  <option>Contractor</option>
                </select>
              </label>
            </div>
            <label>
              Salary range
              <input placeholder="e.g. R$ 14k – 19k / month" />
            </label>
            <label>
              Skills and context
              <div className="skill-input">
                <span>Product design ×</span>
                <span>Figma ×</span>
                <input placeholder="Add a skill" />
              </div>
            </label>
            <label>
              How will you evaluate the role?
              <textarea placeholder="Add a short assessment or portfolio prompt..." />
            </label>
          </>
        )}
        {step === 3 && (
          <>
            <h2>Review before you publish.</h2>
            <p>
              Your role will be visible in the mock workspace. Stripe billing
              and Supabase persistence activate after the environment is
              connected.
            </p>
            <div className="review-box">
              <CheckCircle2 size={18} />
              <div>
                <strong>Starter plan · $49</strong>
                <span>
                  1 active role · AI-assisted matching · candidate workspace
                </span>
              </div>
              <CreditCard size={18} />
            </div>
            <label className="checkbox-line">
              <input type="checkbox" /> I agree to HireU's hiring terms.
            </label>
          </>
        )}
        <div className="form-actions">
          {step > 1 && (
            <button
              className="product-outline-button"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            className="product-dark-button"
            onClick={() =>
              step < 3
                ? setStep(step + 1)
                : toast.success("Role saved in mock mode", {
                    description:
                      "Connect Supabase and Stripe to publish for real.",
                  })
            }
          >
            {step < 3 ? "Continue" : "Save and continue"}{" "}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </AppShell>
  );
}

export function CompanyCandidatesPage() {
  const [selected, setSelected] = useState(companyCandidates[0]);
  return (
    <AppShell kind="company">
      <PageHeader
        eyebrow="Company workspace"
        title="Candidates"
        copy="Review the context behind each application."
        action={
          <button className="product-outline-button">
            <Filter size={15} /> Filter
          </button>
        }
      />
      <div className="candidate-review-layout">
        <section className="dashboard-card candidate-list">
          {companyCandidates.map(candidate => (
            <button
              className={
                selected.name === candidate.name
                  ? "candidate-list-row active"
                  : "candidate-list-row"
              }
              onClick={() => setSelected(candidate)}
              key={candidate.name}
            >
              <span
                className="candidate-avatar"
                style={{ background: candidate.accent }}
              >
                {candidate.initials}
              </span>
              <span>
                <strong>{candidate.name}</strong>
                <small>
                  {candidate.role} · {candidate.location}
                </small>
              </span>
              <span className="candidate-match">{candidate.match}</span>
              <ChevronRight size={15} />
            </button>
          ))}
        </section>
        <aside className="dashboard-card candidate-detail">
          <div className="candidate-detail-top">
            <span
              className="candidate-avatar large"
              style={{ background: selected.accent }}
            >
              {selected.initials}
            </span>
            <div>
              <p className="page-eyebrow">{selected.stage}</p>
              <h2>{selected.name}</h2>
              <p>
                {selected.role} · {selected.location}
              </p>
            </div>
            <button className="product-outline-button">
              Message <Mail size={14} />
            </button>
          </div>
          <div className="candidate-context">
            <span>
              <Sparkles size={15} /> {selected.match}
            </span>
            <span>
              <CheckCircle2 size={15} /> Salary aligned
            </span>
            <span>
              <Globe2 size={15} /> Remote ready
            </span>
          </div>
          <h3>Suggested next step</h3>
          <p>
            Invite {selected.name.split(" ")[0]} to a structured conversation
            about the problem this role owns.
          </p>
          <button
            className="product-dark-button"
            onClick={() => toast.success("Interview step saved in mock mode")}
          >
            Move to interview <ArrowRight size={16} />
          </button>
        </aside>
      </div>
    </AppShell>
  );
}

export function PrivacyPage() {
  return (
    <div className="product-page">
      <PublicHeader />
      <div className="public-content narrow">
        <PageHeader
          eyebrow="Trust & privacy"
          title="Your context stays yours."
          copy="HireU is designed to make hiring clearer without turning people into a score."
        />
        <div className="privacy-copy">
          <h2>What we collect</h2>
          <p>
            We collect the information you choose to share in a candidate
            profile, job brief or application. We use it to show relevant
            opportunities, organize a hiring process and keep the people
            involved informed.
          </p>
          <h2>How automation is used</h2>
          <p>
            AI can help structure context, surface relevant matches and suggest
            next steps. It does not make a final hiring decision, and you can
            ask to review or remove your data.
          </p>
          <h2>Your controls</h2>
          <p>
            You can update your profile, change visibility, export your
            information or ask for deletion. Production data policies will be
            connected to Supabase Auth and row-level security before launch.
          </p>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}

export function SettingsPage({ kind }: { kind: "candidate" | "company" }) {
  return (
    <AppShell kind={kind}>
      <PageHeader
        eyebrow={`${kind === "candidate" ? "Candidate" : "Company"} workspace`}
        title="Settings"
        copy="Manage access, notifications and workspace preferences."
      />
      <div className="settings-grid">
        <section className="form-card">
          <h2>Notifications</h2>
          <label className="toggle-row">
            <span>
              <strong>Weekly job digest</strong>
              <small>Get a calm summary of relevant opportunities.</small>
            </span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="toggle-row">
            <span>
              <strong>Process updates</strong>
              <small>
                Know when an application or candidate moves forward.
              </small>
            </span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="toggle-row">
            <span>
              <strong>Product notes</strong>
              <small>Occasional notes about new HireU tools.</small>
            </span>
            <input type="checkbox" />
          </label>
        </section>
        <section className="form-card">
          <h2>Account</h2>
          <label>
            Email address
            <input
              defaultValue={
                kind === "candidate" ? "ana@example.com" : "hello@nuvemlabs.com"
              }
            />
          </label>
          <label>
            Workspace visibility
            <select defaultValue="private">
              <option value="private">Private</option>
              <option value="discoverable">Discoverable</option>
            </select>
          </label>
          <button
            className="product-dark-button"
            onClick={() => toast.success("Settings saved in mock mode")}
          >
            Save settings <Check size={16} />
          </button>
        </section>
      </div>
    </AppShell>
  );
}
