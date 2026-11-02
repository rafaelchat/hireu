import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  FileText,
  LockKeyhole,
  Mail,
  MessageCircle,
  Plus,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import {
  AppShell,
  MetricCard,
  PageHeader,
  ProgressBar,
} from "@/components/ProductLayout";

const anonymousCandidates = [
  {
    id: "HU-1084",
    title: "Senior Product Designer",
    location: "São Paulo · Brazil",
    experience: "8 years experience",
    salary: "R$ 14k–19k / month",
    skills: ["Figma", "Product strategy", "Design systems"],
    match: "Strong context",
    reasons: [
      "Product design appears in their profile",
      "Remote + BRT overlap",
      "Salary range is aligned",
    ],
    availability: "Open to conversations",
  },
  {
    id: "HU-1162",
    title: "Staff Product Designer",
    location: "Curitiba · Brazil",
    experience: "10 years experience",
    salary: "R$ 18k–24k / month",
    skills: ["Systems thinking", "Research", "Figma"],
    match: "Skills aligned",
    reasons: [
      "Design systems is a priority skill",
      "Available within 30 days",
      "English C1 confirmed",
    ],
    availability: "Open to conversations",
  },
  {
    id: "HU-1207",
    title: "Product Design Lead",
    location: "Recife · Brazil",
    experience: "7 years experience",
    salary: "R$ 16k–22k / month",
    skills: ["Leadership", "UX research", "B2B SaaS"],
    match: "Worth a look",
    reasons: [
      "B2B experience matches your brief",
      "Remote preference confirmed",
      "Portfolio evidence available",
    ],
    availability: "Open to conversations",
  },
];

function CompanyHeader({
  title,
  copy,
  action,
}: {
  title: string;
  copy: string;
  action?: React.ReactNode;
}) {
  return (
    <PageHeader
      eyebrow="Company workspace"
      title={title}
      copy={copy}
      action={action}
    />
  );
}

function CompanyStatus({
  children,
  tone = "interview",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return <span className={`status-pill ${tone}`}>{children}</span>;
}

export function CompanyDashboardPage() {
  return (
    <AppShell kind="company">
      <CompanyHeader
        title="Good morning, Nuvem Labs."
        copy="A clear view of your hiring motion, credits and candidate conversations."
        action={
          <Link href="/company/candidates" className="product-dark-button">
            Discover talent <Search size={15} />
          </Link>
        }
      />
      <div className="metric-grid">
        <MetricCard
          label="Available interview credits"
          value="08"
          detail="2 reserved · 6 ready"
          tone="orange"
        />
        <MetricCard
          label="Candidate conversations"
          value="04"
          detail="2 scheduled this week"
          tone="lime"
        />
        <MetricCard
          label="Active roles"
          value="02"
          detail="12 candidates in flow"
        />
      </div>
      <div className="company-credit-grid">
        <section className="dashboard-card company-credit-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Interview credits</p>
              <h2>Pay for a qualified conversation.</h2>
            </div>
            <CreditCard size={18} />
          </div>
          <p>
            Credits are only consumed when a candidate accepts and completes an
            interview. No response, refusal or candidate no-show triggers an
            automatic refund.
          </p>
          <div className="credit-balance">
            <strong>08</strong>
            <span>available credits</span>
            <ProgressBar value={62} />
          </div>
          <div className="company-card-actions">
            <Link href="/company/billing" className="product-dark-button">
              Buy credits <Plus size={15} />
            </Link>
            <Link href="/company/interviews" className="product-outline-button">
              View interviews <ArrowRight size={14} />
            </Link>
          </div>
        </section>
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Automation watch</p>
              <h2>HireU is handling the handoffs.</h2>
            </div>
            <Bot size={18} />
          </div>
          <div className="automation-mini-row">
            <CheckCircle2 size={15} />
            <span>
              <strong>3 reminders sent</strong>
              <small>Candidate responses · today</small>
            </span>
          </div>
          <div className="automation-mini-row">
            <ShieldCheck size={15} />
            <span>
              <strong>Refund guard active</strong>
              <small>Credits protected by outcome</small>
            </span>
          </div>
          <Link href="/company/automations" className="text-link">
            Manage automations <ArrowRight size={14} />
          </Link>
        </section>
      </div>
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Candidate signals</p>
              <h2>Worth a closer look</h2>
            </div>
            <Link href="/company/candidates">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {anonymousCandidates.slice(0, 2).map(candidate => (
            <Link
              className="company-candidate-row"
              href="/company/candidates"
              key={candidate.id}
            >
              <span className="anonymous-avatar">
                <UserRound size={18} />
              </span>
              <span>
                <strong>{candidate.title}</strong>
                <small>
                  {candidate.id} · {candidate.location}
                </small>
              </span>
              <CompanyStatus>{candidate.match}</CompanyStatus>
              <ChevronRight size={15} />
            </Link>
          ))}
        </section>
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Upcoming</p>
              <h2>Interview calendar</h2>
            </div>
            <Link href="/company/interviews">
              <CalendarDays size={17} />
            </Link>
          </div>
          <div className="upcoming-interview-row">
            <span className="date-block">
              <strong>16</strong>
              <small>SEP</small>
            </span>
            <span>
              <strong>Portfolio review</strong>
              <small>Candidate HU-1084 · 45 min</small>
            </span>
            <CompanyStatus tone="submitted">Confirmed</CompanyStatus>
          </div>
          <div className="upcoming-interview-row">
            <span className="date-block">
              <strong>18</strong>
              <small>SEP</small>
            </span>
            <span>
              <strong>Product thinking</strong>
              <small>Candidate HU-1162 · 30 min</small>
            </span>
            <CompanyStatus tone="pending">Choose time</CompanyStatus>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export function CompanyCandidatesPageV2() {
  const [selected, setSelected] = useState(anonymousCandidates[0]);
  const [invited, setInvited] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const visible = anonymousCandidates.filter(candidate =>
    `${candidate.title} ${candidate.location} ${candidate.skills.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <AppShell kind="company">
      <CompanyHeader
        title="Discover talent"
        copy="Browse anonymous, explainable profiles. Pay only when a qualified conversation is ready."
        action={
          <Link href="/company/billing" className="product-dark-button">
            <CreditCard size={15} /> 08 credits
          </Link>
        }
      />
      <div className="company-discovery-bar">
        <div className="discovery-search">
          <Search size={16} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by role, skill or location"
          />
        </div>
        <button
          className="product-outline-button"
          onClick={() => toast.info("Filters are ready for the next iteration")}
        >
          Filters <span>3</span>
        </button>
      </div>
      <div className="discovery-notice">
        <LockKeyhole size={16} />
        <span>
          <strong>Identity stays protected until the candidate accepts.</strong>
          <small>
            Profiles show relevant context, not personal contact data. Every
            invite includes the role, company and next step.
          </small>
        </span>
      </div>
      <div className="discovery-layout">
        <div className="candidate-discovery-list">
          {visible.map(candidate => (
            <button
              className={`candidate-discovery-card ${selected.id === candidate.id ? "selected" : ""}`}
              key={candidate.id}
              onClick={() => setSelected(candidate)}
            >
              <span className="anonymous-avatar large">
                <UserRound size={22} />
              </span>
              <span className="discovery-card-body">
                <span className="discovery-card-head">
                  <span>
                    <small>Anonymous profile · {candidate.id}</small>
                    <strong>{candidate.title}</strong>
                  </span>
                  <CompanyStatus>{candidate.match}</CompanyStatus>
                </span>
                <span className="discovery-card-meta">
                  {candidate.location} · {candidate.experience} ·{" "}
                  {candidate.salary}
                </span>
                <span className="tag-row">
                  {candidate.skills.map(skill => (
                    <em className="skill-tag" key={skill}>
                      {skill}
                    </em>
                  ))}
                </span>
                <span className="discovery-card-reason">
                  <Sparkles size={13} /> {candidate.reasons[0]}
                </span>
              </span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
        <section className="dashboard-card candidate-inspector">
          <div className="inspector-heading">
            <span className="anonymous-avatar large">
              <UserRound size={23} />
            </span>
            <span>
              <p className="page-eyebrow">Anonymous profile · {selected.id}</p>
              <h2>{selected.title}</h2>
              <small>
                {selected.location} · {selected.experience}
              </small>
            </span>
          </div>
          <div className="candidate-inspector-section">
            <p className="page-eyebrow">What you can know now</p>
            <div className="inspector-facts">
              <span>
                <strong>{selected.salary}</strong>
                <small>Expectation shared</small>
              </span>
              <span>
                <strong>{selected.availability}</strong>
                <small>Availability</small>
              </span>
              <span>
                <strong>English C1</strong>
                <small>Work language</small>
              </span>
            </div>
          </div>
          <div className="candidate-inspector-section">
            <p className="page-eyebrow">Why this profile appeared</p>
            {selected.reasons.map(reason => (
              <div className="reason-row" key={reason}>
                <CheckCircle2 size={14} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <div className="invite-box">
            <div>
              <strong>Ready to meet this person?</strong>
              <small>
                One Interview Credit sends a structured invite. The credit is
                refunded if they do not respond or do not attend.
              </small>
            </div>
            <button
              className="product-dark-button"
              disabled={invited.includes(selected.id)}
              onClick={() => {
                setInvited(value => [...value, selected.id]);
                toast.success("Interview invite sent", {
                  description:
                    "1 credit is reserved. HireU will handle the follow-up and refund rules.",
                });
              }}
            >
              {invited.includes(selected.id)
                ? "Invite sent"
                : "Invite to interview · 1 credit"}{" "}
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="inspector-guard">
            <ShieldCheck size={14} /> No personal contact is revealed without
            candidate consent.
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export function CompanyInterviewsPage() {
  const [tab, setTab] = useState("All");
  return (
    <AppShell kind="company">
      <CompanyHeader
        title="Interviews"
        copy="Schedule, run and close every candidate conversation from one timeline."
        action={
          <Link href="/company/candidates" className="product-dark-button">
            Find another candidate <Search size={15} />
          </Link>
        }
      />
      <div className="tabs-row">
        <button
          className={tab === "All" ? "active" : ""}
          onClick={() => setTab("All")}
        >
          All <span>4</span>
        </button>
        <button
          className={tab === "Needs action" ? "active" : ""}
          onClick={() => setTab("Needs action")}
        >
          Needs action <span>2</span>
        </button>
        <button
          className={tab === "Completed" ? "active" : ""}
          onClick={() => setTab("Completed")}
        >
          Completed <span>1</span>
        </button>
      </div>
      <div className="interview-list">
        <article className="interview-card">
          <div className="interview-card-top">
            <span className="anonymous-avatar">
              <UserRound size={18} />
            </span>
            <span>
              <p className="page-eyebrow">
                Candidate HU-1084 · Senior Product Designer
              </p>
              <h2>Portfolio review</h2>
              <small>Tue, Sep 16 · 10:00 BRT · 45 minutes</small>
            </span>
            <CompanyStatus tone="submitted">Confirmed</CompanyStatus>
          </div>
          <div className="interview-tools">
            <span>
              <Video size={14} /> Google Meet room ready
            </span>
            <span>
              <FileText size={14} /> Recording off by default
            </span>
            <button
              className="product-outline-button"
              onClick={() => toast.info("Interview room opening in mock mode")}
            >
              Open room <ArrowRight size={14} />
            </button>
          </div>
        </article>
        <article className="interview-card">
          <div className="interview-card-top">
            <span className="anonymous-avatar">
              <UserRound size={18} />
            </span>
            <span>
              <p className="page-eyebrow">
                Candidate HU-1162 · Staff Product Designer
              </p>
              <h2>Product thinking conversation</h2>
              <small>Candidate accepted · choose a time</small>
            </span>
            <CompanyStatus tone="pending">Needs action</CompanyStatus>
          </div>
          <div className="interview-tools">
            <span>
              <Clock3 size={14} /> 3 slots shared by candidate
            </span>
            <span>
              <MessageCircle size={14} /> Reminder scheduled
            </span>
            <button
              className="product-dark-button"
              onClick={() => toast.success("Time selected in mock mode")}
            >
              Choose a time <CalendarDays size={14} />
            </button>
          </div>
        </article>
        <article className="interview-card muted">
          <div className="interview-card-top">
            <span className="anonymous-avatar">
              <Check size={18} />
            </span>
            <span>
              <p className="page-eyebrow">
                Candidate HU-1031 · Product Designer
              </p>
              <h2>Intro conversation</h2>
              <small>
                Completed Sep 12 · Transcript unavailable because recording was
                off
              </small>
            </span>
            <CompanyStatus tone="interview">Completed</CompanyStatus>
          </div>
          <div className="interview-tools">
            <span>
              <ReceiptText size={14} /> Credit finalized
            </span>
            <span>
              <Bot size={14} /> Summary ready from notes
            </span>
            <button
              className="product-outline-button"
              onClick={() => toast.info("Interview notes opened in mock mode")}
            >
              View notes <ArrowRight size={14} />
            </button>
          </div>
        </article>
      </div>
    </AppShell>
  );
}

export function CompanyBillingPage() {
  const [credits, setCredits] = useState(8);
  return (
    <AppShell kind="company">
      <CompanyHeader
        title="Credits & billing"
        copy="Simple pricing for qualified conversations. Refunds follow the outcome."
        action={
          <button
            className="product-dark-button"
            onClick={() => setCredits(value => value + 5)}
          >
            Buy 5 credits <Plus size={15} />
          </button>
        }
      />
      <div className="billing-top-grid">
        <section className="dashboard-card balance-panel">
          <p className="page-eyebrow">Available balance</p>
          <strong>{credits}</strong>
          <span>Interview credits</span>
          <ProgressBar value={credits * 10} />
          <small>
            2 credits reserved · refunds return automatically when the candidate
            does not respond or attend.
          </small>
        </section>
        <section className="dashboard-card billing-policy">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Outcome protection</p>
              <h2>Pay for the conversation, not the contact.</h2>
            </div>
            <ShieldCheck size={18} />
          </div>
          <p>
            Invites reserve a credit. It is finalized only after the interview
            is completed. Company no-shows and post-interview decisions are not
            refundable.
          </p>
          <Link href="/privacy" className="text-link">
            Read trust policy <ArrowRight size={14} />
          </Link>
        </section>
      </div>
      <div className="billing-plans">
        <article className="billing-plan">
          <p className="page-eyebrow">Interview Credits</p>
          <h2>
            $59 <small>/ 5 credits</small>
          </h2>
          <p>For focused searches and occasional hiring.</p>
          <button
            className="product-outline-button full"
            onClick={() => setCredits(value => value + 5)}
          >
            Add 5 credits <Plus size={14} />
          </button>
        </article>
        <article className="billing-plan featured">
          <p className="page-eyebrow">Full Workspace</p>
          <h2>
            $249 <small>/ month</small>
          </h2>
          <p>
            Search, shortlist, automate and run up to 25 qualified interviews.
          </p>
          <button
            className="product-dark-button full"
            onClick={() =>
              toast.success("Full Workspace selected in mock mode")
            }
          >
            Choose workspace <ArrowRight size={14} />
          </button>
        </article>
        <article className="billing-plan">
          <p className="page-eyebrow">Custom</p>
          <h2>Let’s talk</h2>
          <p>ATS ingestion, volume, dedicated workflows and support.</p>
          <button
            className="product-outline-button full"
            onClick={() => toast.success("Custom request started in mock mode")}
          >
            Talk to HireU <Mail size={14} />
          </button>
        </article>
      </div>
      <section className="dashboard-card transaction-card">
        <div className="card-heading">
          <div>
            <p className="page-eyebrow">Recent activity</p>
            <h2>Credit ledger</h2>
          </div>
          <ReceiptText size={18} />
        </div>
        <div className="transaction-row">
          <span>
            <strong>Interview Credit · HU-1084</strong>
            <small>Reserved · Invite sent Sep 14</small>
          </span>
          <CompanyStatus tone="pending">-1 reserved</CompanyStatus>
        </div>
        <div className="transaction-row">
          <span>
            <strong>Interview Credit · HU-1031</strong>
            <small>Completed · Sep 12</small>
          </span>
          <CompanyStatus tone="submitted">-1 finalized</CompanyStatus>
        </div>
        <div className="transaction-row">
          <span>
            <strong>Refund · HU-1007</strong>
            <small>Candidate did not respond · Sep 10</small>
          </span>
          <CompanyStatus tone="interview">+1 returned</CompanyStatus>
        </div>
      </section>
    </AppShell>
  );
}
