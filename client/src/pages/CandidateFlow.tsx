import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Globe2,
  LockKeyhole,
  MessageCircle,
  MoreHorizontal,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  Upload,
  WandSparkles,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import {
  AppShell,
  MetricCard,
  PageHeader,
  ProgressBar,
} from "@/components/ProductLayout";
import { candidateApplications, jobs, suggestedJobs } from "@/data/mock";

const steps = [
  ["Basics", "Start with the essentials"],
  ["Resume", "Let HireU draft your profile"],
  ["Experience", "Add the signal that matters"],
  ["Preferences", "Tell us what fits"],
  ["Assessment", "Show how you work"],
  ["Review", "You stay in control"],
];

const applicationStatus = [
  { label: "Submitted", tone: "submitted", done: true },
  { label: "Received by company", tone: "in-review", done: true },
  { label: "Portfolio review", tone: "interview", done: false },
  { label: "Interview", tone: "pending", done: false },
];

function CandidateHeader({
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
      eyebrow="Candidate workspace"
      title={title}
      copy={copy}
      action={action}
    />
  );
}

function StatusPill({
  children,
  tone = "submitted",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return <span className={`status-pill ${tone}`}>{children}</span>;
}

function ApplicationCard({
  item,
  selected,
  onSelect,
}: {
  item: (typeof candidateApplications)[number];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      className={`candidate-application-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="job-mark" style={{ background: "#f05a3c" }}>
        {item.job.companyMark}
      </span>
      <span className="candidate-application-main">
        <span className="candidate-application-topline">
          <span>
            <small>{item.job.company}</small>
            <strong>{item.job.title}</strong>
          </span>
          <StatusPill tone={item.status.toLowerCase().replace(" ", "-")}>
            {item.status}
          </StatusPill>
        </span>
        <span className="candidate-application-meta">
          {item.job.location} · Applied Sep 11 · {item.progress}% complete
        </span>
        <ProgressBar value={item.progress} />
        <span className="candidate-application-next">
          <Sparkles size={13} /> Next: {item.next}
        </span>
      </span>
      <ChevronRight size={17} />
    </button>
  );
}

export function CandidateOnboardingPage() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeAdded, setResumeAdded] = useState(false);
  const [assessmentDone, setAssessmentDone] = useState(false);
  const current = steps[step];
  const next = () => setStep(value => Math.min(value + 1, steps.length - 1));

  return (
    <div className="onboarding-page">
      <header className="onboarding-header">
        <Link href="/" className="product-logo">
          hire<span>U</span>
        </Link>
        <span className="onboarding-save">
          <CheckCircle2 size={15} /> Saved locally · Mock mode
        </span>
      </header>
      <main className="onboarding-main">
        <div className="onboarding-progress-row">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}% complete</span>
        </div>
        <div className="onboarding-progress">
          <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
        <div className="onboarding-layout">
          <aside className="onboarding-steps">
            <p className="page-eyebrow">Build your candidate profile</p>
            {steps.map(([label, description], index) => (
              <button
                className={
                  index === step ? "active" : index < step ? "done" : ""
                }
                key={label}
                onClick={() => index <= step && setStep(index)}
              >
                <span>{index < step ? <Check size={15} /> : index + 1}</span>
                <span>
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
              </button>
            ))}
            <div className="onboarding-trust">
              <ShieldCheck size={17} />
              <span>
                <strong>You control what is shared.</strong>
                <small>
                  Your profile stays private until you apply or choose to be
                  discoverable.
                </small>
              </span>
            </div>
          </aside>
          <section className="onboarding-card">
            <p className="page-eyebrow">{current[0]}</p>
            <h1>
              {step === 0
                ? "Let’s make your next move easier."
                : step === 1
                  ? "Bring your work with you."
                  : step === 2
                    ? "Context beats a keyword list."
                    : step === 3
                      ? "What would a good fit look like?"
                      : step === 4
                        ? "One small signal, your way."
                        : "Look it over before it leaves your hands."}
            </h1>
            <p className="onboarding-copy">
              {step === 0
                ? "A few essentials are enough to start. You can complete the rest when it becomes useful."
                : step === 1
                  ? "Upload a PDF or DOCX. We’ll draft fields for you, then you confirm every detail."
                  : step === 2
                    ? "Show the work, tools and outcomes you want teams to understand."
                    : step === 3
                      ? "These preferences help us explain recommendations. They never become a hidden score."
                      : step === 4
                        ? "This optional 12-minute work sample is fictional, accessible and saved as you go."
                        : "You’ll always see the exact profile, answers and document shared with a company."}
            </p>
            {step === 0 && (
              <div className="onboarding-form two-fields">
                <label>
                  Full name
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ana Martins"
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="ana@example.com"
                  />
                </label>
                <label>
                  Where are you based?
                  <input defaultValue="São Paulo, Brazil" />
                </label>
                <label>
                  What do you do best?
                  <input defaultValue="Product design" />
                </label>
              </div>
            )}
            {step === 1 && (
              <div className="resume-dropzone">
                <div className="upload-icon">
                  <Upload size={22} />
                </div>
                <strong>
                  {resumeAdded
                    ? "Ana_Martins_Product_Design.pdf added"
                    : "Drop your resume here"}
                </strong>
                <span>
                  {resumeAdded
                    ? "We found 8 profile fields ready for your review."
                    : "PDF or DOCX · up to 10 MB · your original file is preserved"}
                </span>
                <button
                  className="product-outline-button"
                  onClick={() => setResumeAdded(true)}
                >
                  {resumeAdded ? "Review imported fields" : "Choose a file"}{" "}
                  <FileText size={15} />
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="onboarding-form">
                <label>
                  Headline
                  <input defaultValue="Senior Product Designer building clear, human products" />
                </label>
                <label>
                  Short introduction
                  <textarea defaultValue="I work at the intersection of product strategy, interaction and systems thinking." />
                </label>
                <div className="skill-picker">
                  <span>Product design</span>
                  <span>Figma</span>
                  <span>Design systems</span>
                  <span>Research</span>
                  <button>
                    <Plus size={14} /> Add skill
                  </button>
                </div>
                <div className="import-confidence">
                  <WandSparkles size={16} />
                  <span>
                    <strong>Imported with high confidence</strong>
                    <small>
                      Every imported field stays editable. Nothing is shared
                      without your review.
                    </small>
                  </span>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="onboarding-form two-fields">
                <label>
                  Work model
                  <select defaultValue="Remote">
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </label>
                <label>
                  Contract preference
                  <select defaultValue="Open to both">
                    <option>Open to both</option>
                    <option>Full-time / CLT</option>
                    <option>Contractor / PJ</option>
                  </select>
                </label>
                <label>
                  Minimum monthly expectation
                  <input defaultValue="R$ 14,000" />
                </label>
                <label>
                  Collaboration window
                  <select defaultValue="BRT · 9am–6pm">
                    <option>BRT · 9am–6pm</option>
                    <option>Flexible overlap</option>
                    <option>US Eastern overlap</option>
                  </select>
                </label>
                <label>
                  English for work
                  <select defaultValue="C1 — Advanced">
                    <option>C1 — Advanced</option>
                    <option>B2 — Upper intermediate</option>
                    <option>Prefer not to say</option>
                  </select>
                </label>
                <label>
                  Profile visibility
                  <select defaultValue="Only when I apply">
                    <option>Only when I apply</option>
                    <option>Verified companies</option>
                    <option>Discoverable</option>
                  </select>
                </label>
              </div>
            )}
            {step === 4 && (
              <div className="assessment-preview">
                <div className="assessment-preview-top">
                  <span className="assessment-symbol">
                    <Target size={21} />
                  </span>
                  <span>
                    <strong>Product thinking · 12 min</strong>
                    <small>
                      3 scenarios · untimed preview · saved automatically
                    </small>
                  </span>
                  <StatusPill tone={assessmentDone ? "submitted" : "pending"}>
                    {assessmentDone ? "Complete" : "Optional"}
                  </StatusPill>
                </div>
                <div className="assessment-rules">
                  <span>
                    <Clock3 size={14} /> Maximum 12 minutes
                  </span>
                  <span>
                    <Globe2 size={14} /> Keyboard accessible
                  </span>
                  <span>
                    <MessageCircle size={14} /> Feedback by competency
                  </span>
                </div>
                <button
                  className="product-dark-button"
                  onClick={() => setAssessmentDone(true)}
                >
                  {assessmentDone
                    ? "Assessment completed"
                    : "Try the mock assessment"}{" "}
                  <Play size={15} />
                </button>
                <small className="field-hint">
                  No camera, screen recording or personality scoring.
                </small>
              </div>
            )}
            {step === 5 && (
              <div className="review-list">
                <div>
                  <span>Basics</span>
                  <strong>
                    {name || "Ana Martins"} · {email || "ana@example.com"}
                  </strong>
                  <button onClick={() => setStep(0)}>Edit</button>
                </div>
                <div>
                  <span>Profile</span>
                  <strong>
                    Senior Product Designer · 4 skills · C1 English
                  </strong>
                  <button onClick={() => setStep(2)}>Edit</button>
                </div>
                <div>
                  <span>Preferences</span>
                  <strong>
                    Remote · Brazil/LATAM · R$ 14k+ · Open to both
                  </strong>
                  <button onClick={() => setStep(3)}>Edit</button>
                </div>
                <div>
                  <span>Sharing</span>
                  <strong>Private until you apply</strong>
                  <button onClick={() => setStep(3)}>Edit</button>
                </div>
                <label className="check-row">
                  <input type="checkbox" defaultChecked />{" "}
                  <span>
                    I understand what will be shared when I apply.{" "}
                    <small>
                      Candidate profile, selected document and answers only.
                    </small>
                  </span>
                </label>
              </div>
            )}
            <div className="onboarding-actions">
              <button
                className="text-link"
                onClick={() =>
                  toast.info("You can come back to finish this later")
                }
              >
                {step === 0 ? "Save and finish later" : "Back to profile"}
              </button>
              <button
                className="product-dark-button"
                onClick={() =>
                  step === steps.length - 1
                    ? toast.success("Profile ready in mock mode")
                    : next()
                }
              >
                {step === steps.length - 1 ? "Open my workspace" : "Continue"}{" "}
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export function CandidateDashboardPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Good morning, Ana."
        copy="Here is what is worth your attention today."
      />
      <div className="metric-grid">
        <MetricCard
          label="Active applications"
          value="03"
          detail="1 needs your attention"
          tone="orange"
        />
        <MetricCard
          label="Profile readiness"
          value="86%"
          detail="Add one work sample"
          tone="lime"
        />
        <MetricCard
          label="Saved jobs"
          value="12"
          detail="3 strong matches this week"
        />
      </div>
      <div className="candidate-readiness-grid">
        <section className="dashboard-card readiness-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Your next best step</p>
              <h2>Finish your work sample</h2>
            </div>
            <span className="card-icon orange">
              <Target size={17} />
            </span>
          </div>
          <p>
            Your profile is ready for recommendations. One short sample will
            give teams more context without adding another long form.
          </p>
          <div className="readiness-row">
            <ProgressBar value={86} />
            <span>86%</span>
          </div>
          <Link href="/candidate/assessments" className="product-dark-button">
            See assessment <ArrowRight size={15} />
          </Link>
        </section>
        <section className="dashboard-card privacy-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Privacy by default</p>
              <h2>Your profile is private</h2>
            </div>
            <LockKeyhole size={18} />
          </div>
          <p>
            Nothing is shared with a company until you apply or choose to be
            discoverable.
          </p>
          <Link href="/candidate/privacy" className="text-link">
            Manage visibility <ArrowRight size={14} />
          </Link>
        </section>
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
              href="/candidate/applications"
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
              <StatusPill tone={item.status.toLowerCase().replace(" ", "-")}>
                {item.status}
              </StatusPill>
            </Link>
          ))}
        </section>
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Explainable recommendations</p>
              <h2>Good context matches</h2>
            </div>
            <Sparkles size={18} />
          </div>
          {suggestedJobs.map(job => (
            <Link
              className="job-row compact"
              href={`/jobs/${job.id}`}
              key={job.id}
            >
              <span className="job-mark" style={{ background: "#2f7c68" }}>
                {job.companyMark}
              </span>
              <span className="job-row-main">
                <strong>{job.title}</strong>
                <small>
                  {job.company} · {job.location}
                </small>
              </span>
              <ChevronRight size={16} />
            </Link>
          ))}
        </section>
      </div>
      <section className="dashboard-card timeline-card">
        <div className="card-heading">
          <div>
            <p className="page-eyebrow">Latest activity</p>
            <h2>What changed</h2>
          </div>
          <Link href="/candidate/messages">
            Open inbox <ArrowRight size={14} />
          </Link>
        </div>
        <div className="activity-line">
          <span className="activity-dot lime" />
          <span>
            <strong>Nuvem Labs shared a next step</strong>
            <small>Portfolio review · 2 hours ago</small>
          </span>
          <StatusPill tone="interview">Action needed</StatusPill>
        </div>
        <div className="activity-line">
          <span className="activity-dot" />
          <span>
            <strong>HireU found 3 new matches</strong>
            <small>Based on Product design, Remote and BRT overlap</small>
          </span>
          <Link href="/candidate/recommendations" className="text-link">
            See matches
          </Link>
        </div>
      </section>
    </AppShell>
  );
}

export function CandidateApplicationsPageV2() {
  const [selected, setSelected] = useState(candidateApplications[0]);
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Your applications"
        copy="Every next step, in one place. Only confirmed updates appear here."
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
      <div className="applications-layout">
        <div className="application-stack">
          {candidateApplications.map(item => (
            <ApplicationCard
              item={item}
              selected={selected.job.id === item.job.id}
              onSelect={() => setSelected(item)}
              key={item.job.id}
            />
          ))}
        </div>
        <section className="dashboard-card application-inspector">
          <div className="inspector-heading">
            <span className="job-mark" style={{ background: "#f05a3c" }}>
              {selected.job.companyMark}
            </span>
            <span>
              <p className="page-eyebrow">{selected.job.company}</p>
              <h2>{selected.job.title}</h2>
              <small>
                {selected.job.location} · {selected.job.contract}
              </small>
            </span>
            <MoreHorizontal size={18} />
          </div>
          <div className="inspector-next">
            <Sparkles size={17} />
            <span>
              <strong>Next step</strong>
              <small>{selected.next}</small>
            </span>
            <button
              className="product-dark-button"
              onClick={() => toast.success("Mock action saved")}
            >
              Open task <ArrowRight size={14} />
            </button>
          </div>
          <div className="application-timeline">
            {applicationStatus.map((status, index) => (
              <div
                className={`timeline-step ${status.done ? "done" : index === 2 ? "current" : ""}`}
                key={status.label}
              >
                <span>{status.done ? <Check size={13} /> : index + 1}</span>
                <div>
                  <strong>{status.label}</strong>
                  <small>
                    {status.done
                      ? `Confirmed · ${index === 0 ? "Sep 11" : "Sep 12"}`
                      : index === 2
                        ? "Shared by Nuvem Labs · Sep 14"
                        : "No update shared yet"}
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className="inspector-footer">
            <span>
              <ShieldCheck size={14} /> You can withdraw at any time
            </span>
            <button
              className="text-link"
              onClick={() => toast.info("Withdrawal stays in mock mode")}
            >
              Withdraw application
            </button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export function CandidateAssessmentsPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Your assessments"
        copy="Short, relevant signals. No hidden personality scoring."
      />
      <div className="assessment-banner">
        <div>
          <p className="page-eyebrow">Assessment principles</p>
          <h2>Show how you work, not how well you perform on camera.</h2>
          <p>
            Every assessment tells you the skill, time limit, format, support
            and how results are used before you start.
          </p>
        </div>
        <ShieldCheck size={30} />
      </div>
      <div className="dashboard-grid assessment-grid">
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Ready for you</p>
              <h2>Product thinking</h2>
            </div>
            <StatusPill tone="pending">Optional</StatusPill>
          </div>
          <p className="card-copy">
            Three realistic scenarios about prioritization, clarity and working
            with constraints.
          </p>
          <div className="assessment-meta">
            <span>
              <Clock3 size={14} /> 12 minutes max
            </span>
            <span>
              <Target size={14} /> 3 competencies
            </span>
          </div>
          <button
            className="product-dark-button"
            onClick={() => toast.success("Assessment started in mock mode")}
          >
            Start preview <Play size={15} />
          </button>
        </section>
        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Completed</p>
              <h2>Communication in English</h2>
            </div>
            <StatusPill tone="submitted">Shared</StatusPill>
          </div>
          <p className="card-copy">
            A short written exercise shared with your Nuvem Labs application.
          </p>
          <div className="feedback-row">
            <span>Clarity</span>
            <ProgressBar value={88} />
            <strong>Strong</strong>
          </div>
          <div className="feedback-row">
            <span>Context</span>
            <ProgressBar value={76} />
            <strong>Clear</strong>
          </div>
          <button
            className="text-link"
            onClick={() =>
              toast.info("Feedback details are available in mock mode")
            }
          >
            View feedback <ArrowRight size={14} />
          </button>
        </section>
      </div>
      <div className="accommodation-note">
        <MessageCircle size={18} />
        <span>
          <strong>Need an accommodation?</strong>
          <small>
            Ask for keyboard navigation, extra time or an alternative format
            without sharing a diagnosis.
          </small>
        </span>
        <button
          className="product-outline-button"
          onClick={() =>
            toast.success("Accommodation request saved in mock mode")
          }
        >
          Request support
        </button>
      </div>
    </AppShell>
  );
}

export function CandidateCalendarPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Your calendar"
        copy="Clear handoffs between you and the teams you meet."
      />
      <div className="calendar-layout">
        <section className="dashboard-card calendar-main">
          <div className="calendar-month">
            <button>←</button>
            <strong>September 2026</strong>
            <button>→</button>
          </div>
          <div className="calendar-week">
            {[
              "Mon 14",
              "Tue 15",
              "Wed 16",
              "Thu 17",
              "Fri 18",
              "Sat 19",
              "Sun 20",
            ].map(day => (
              <span key={day} className={day === "Tue 15" ? "today" : ""}>
                {day}
              </span>
            ))}
          </div>
          <div className="calendar-placeholder">
            <CalendarDays size={30} />
            <strong>Your week at a glance</strong>
            <p>
              Only confirmed interviews and requested scheduling steps appear
              here.
            </p>
          </div>
        </section>
        <aside className="dashboard-card upcoming-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Next up</p>
              <h2>Portfolio review</h2>
            </div>
            <StatusPill tone="interview">Requested</StatusPill>
          </div>
          <p>Nuvem Labs · 45 minutes · online</p>
          <div className="schedule-box">
            <Clock3 size={16} />
            <span>
              <strong>Choose a time</strong>
              <small>The company shared 3 available slots.</small>
            </span>
          </div>
          <button
            className="product-dark-button full"
            onClick={() =>
              toast.success("Scheduling choices opened in mock mode")
            }
          >
            Choose a time <ArrowRight size={14} />
          </button>
          <button
            className="product-outline-button full"
            onClick={() => toast.info("Accessibility support is available")}
          >
            Ask for an accommodation
          </button>
        </aside>
      </div>
    </AppShell>
  );
}

export function CandidateDocumentsPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Your documents"
        copy="Keep a private library and see exactly what each application received."
      />
      <div className="documents-toolbar">
        <span>
          <LockKeyhole size={14} /> Private by default
        </span>
        <button
          className="product-dark-button"
          onClick={() => toast.success("Document picker opened in mock mode")}
        >
          <Upload size={15} /> Add document
        </button>
      </div>
      <div className="document-grid">
        {[
          {
            name: "Ana_Martins_Product_Design.pdf",
            type: "Resume",
            updated: "Used in 3 applications",
            size: "2.4 MB",
          },
          {
            name: "Product_Case_Study.pdf",
            type: "Work sample",
            updated: "Not shared yet",
            size: "4.8 MB",
          },
          {
            name: "Portfolio link",
            type: "External evidence",
            updated: "behance.net/anamartins",
            size: "Public link",
          },
        ].map(doc => (
          <article className="document-card" key={doc.name}>
            <span className="document-icon">
              <FileText size={19} />
            </span>
            <div>
              <strong>{doc.name}</strong>
              <small>
                {doc.type} · {doc.size}
              </small>
              <small>{doc.updated}</small>
            </div>
            <button aria-label={`More options for ${doc.name}`}>
              <MoreHorizontal size={17} />
            </button>
          </article>
        ))}
      </div>
      <div className="document-callout">
        <ShieldCheck size={18} />
        <span>
          <strong>We preserve your original file.</strong>
          <small>
            Imported fields are editable drafts. The file sent with a specific
            application is versioned and visible to you.
          </small>
        </span>
      </div>
    </AppShell>
  );
}

export function CandidateRecommendationsPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Recommended for you"
        copy="Matches are explained by your preferences and evidence, never a secret score."
      />
      <div className="recommendation-intro">
        <div>
          <p className="page-eyebrow">Your current signals</p>
          <div className="signal-chips">
            <span>Product design</span>
            <span>Remote</span>
            <span>BRT overlap</span>
            <span>English C1</span>
          </div>
        </div>
        <Link href="/candidate/profile" className="product-outline-button">
          Tune preferences <ArrowRight size={14} />
        </Link>
      </div>
      <div className="recommendation-list">
        {[...suggestedJobs, jobs[0]].map((job, index) => (
          <article className="recommendation-card" key={`${job.id}-${index}`}>
            <span
              className="job-mark"
              style={{ background: index % 2 ? "#2f7c68" : "#f05a3c" }}
            >
              {job.companyMark}
            </span>
            <div>
              <p className="page-eyebrow">{job.company}</p>
              <h2>{job.title}</h2>
              <p>
                {job.location} · {job.mode} · {job.contract}
              </p>
              <div className="match-reasons">
                <span>
                  <CheckCircle2 size={13} /> {job.tags[0]} in your profile
                </span>
                <span>
                  <CheckCircle2 size={13} /> {job.mode} matches your preference
                </span>
                <span>
                  <CheckCircle2 size={13} /> Salary range is visible
                </span>
              </div>
            </div>
            <div className="recommendation-actions">
              <StatusPill tone="interview">Good context</StatusPill>
              <Link href={`/jobs/${job.id}`} className="product-dark-button">
                Review job <ArrowRight size={14} />
              </Link>
              <button
                className="text-link"
                onClick={() =>
                  toast.info("Recommendation dismissed in mock mode")
                }
              >
                Not for me
              </button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}

export function CandidateMessagesPage() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Messages"
        copy="Keep important hiring conversations in one calm place."
      />
      <div className="messages-layout">
        <aside className="dashboard-card message-list">
          {[
            {
              company: "Nuvem Labs",
              subject: "Portfolio review",
              time: "2h",
              unread: true,
            },
            {
              company: "HireU",
              subject: "3 new recommendations",
              time: "Yesterday",
              unread: false,
            },
          ].map(message => (
            <button
              className={`message-preview ${message.unread ? "unread" : ""}`}
              key={message.subject}
            >
              <span
                className="job-mark"
                style={{
                  background:
                    message.company === "Nuvem Labs" ? "#f05a3c" : "#5874b8",
                }}
              >
                {message.company === "Nuvem Labs" ? "NL" : "HU"}
              </span>
              <span>
                <strong>{message.company}</strong>
                <small>{message.subject}</small>
              </span>
              <time>{message.time}</time>
            </button>
          ))}
        </aside>
        <section className="dashboard-card message-thread">
          <div className="thread-header">
            <span className="job-mark" style={{ background: "#f05a3c" }}>
              NL
            </span>
            <span>
              <strong>Nuvem Labs</strong>
              <small>Senior Product Designer · Application #HU-1048</small>
            </span>
            <ShieldCheck size={16} />
          </div>
          <div className="message-bubble company">
            <small>Nuvem Labs · 2 hours ago</small>Thanks for sharing your
            portfolio context. We’d like to review one case together. Choose a
            time that works for you.
          </div>
          <div className="message-bubble system">
            <small>HireU timeline</small>Portfolio review requested · No
            external links required
          </div>
          <div className="message-compose">
            <input placeholder="Write a reply in mock mode..." />
            <button onClick={() => toast.success("Reply saved in mock mode")}>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export function CandidateProfilePageV2() {
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Your profile"
        copy="The context teams need to start a useful conversation."
        action={
          <button
            className="product-dark-button"
            onClick={() => toast.success("Profile saved in mock mode")}
          >
            Save changes <Check size={16} />
          </button>
        }
      />
      <div className="profile-overview-strip">
        <span className="profile-photo">AM</span>
        <div>
          <strong>Ana Martins</strong>
          <small>Senior Product Designer · São Paulo · BRT</small>
        </div>
        <span className="profile-visibility">
          <LockKeyhole size={14} /> Private until you apply
        </span>
      </div>
      <div className="profile-sections">
        <section className="form-card">
          <div className="section-heading">
            <span>
              <p className="page-eyebrow">Core profile</p>
              <h2>Your story</h2>
            </span>
            <span className="section-complete">4/4 complete</span>
          </div>
          <label>
            Headline
            <input defaultValue="Senior Product Designer building clear, human products" />
          </label>
          <label>
            About you
            <textarea defaultValue="I work at the intersection of product strategy, interaction and systems thinking. I care about useful details, clear decisions and teams that share context." />
          </label>
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
          <label>
            Links
            <div className="link-field">
              <Globe2 size={15} />
              <input defaultValue="behance.net/anamartins" />
            </div>
          </label>
        </section>
        <aside className="profile-side">
          <div className="profile-completion">
            <p className="page-eyebrow">Profile strength</p>
            <strong>86%</strong>
            <ProgressBar value={86} />
            <p>Add one work sample to improve your context match.</p>
            <Link
              href="/candidate/documents"
              className="product-outline-button"
            >
              Add evidence <Plus size={15} />
            </Link>
          </div>
          <div className="profile-completion">
            <p className="page-eyebrow">Preferences</p>
            <p>Remote · Brazil/LATAM · R$ 14k+ · C1 English</p>
            <Link href="/candidate/privacy" className="text-link">
              Manage visibility <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

export function CandidatePrivacyPage() {
  const [discoverable, setDiscoverable] = useState(false);
  const [talentPool, setTalentPool] = useState(true);
  return (
    <AppShell kind="candidate">
      <CandidateHeader
        title="Privacy & control"
        copy="Choose how your profile is used. Nothing is hidden in the fine print."
      />
      <div className="privacy-layout">
        <section className="dashboard-card privacy-settings-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Visibility</p>
              <h2>Who can see your profile?</h2>
            </div>
            <LockKeyhole size={18} />
          </div>
          <div className="setting-row">
            <span>
              <strong>Keep my profile private</strong>
              <small>
                Share only the exact profile and documents attached to an
                application.
              </small>
            </span>
            <button
              className={`toggle ${!discoverable ? "on" : ""}`}
              onClick={() => setDiscoverable(false)}
              aria-label="Keep profile private"
            >
              <span />
            </button>
          </div>
          <div className="setting-row">
            <span>
              <strong>Discoverable to verified companies</strong>
              <small>
                Let verified teams find your profile using your skills and
                preferences.
              </small>
            </span>
            <button
              className={`toggle ${discoverable ? "on" : ""}`}
              onClick={() => setDiscoverable(true)}
              aria-label="Make profile discoverable"
            >
              <span />
            </button>
          </div>
        </section>
        <section className="dashboard-card privacy-settings-card">
          <div className="card-heading">
            <div>
              <p className="page-eyebrow">Consent</p>
              <h2>Separate choices</h2>
            </div>
            <CheckCircle2 size={18} />
          </div>
          <div className="setting-row">
            <span>
              <strong>Keep me in the talent pool</strong>
              <small>
                HireU may contact you about relevant roles after an application
                closes.
              </small>
            </span>
            <button
              className={`toggle ${talentPool ? "on" : ""}`}
              onClick={() => setTalentPool(value => !value)}
              aria-label="Talent pool consent"
            >
              <span />
            </button>
          </div>
          <div className="setting-row">
            <span>
              <strong>Product updates</strong>
              <small>
                Occasional emails about candidate tools and new features.
              </small>
            </span>
            <button className="toggle" aria-label="Product updates">
              <span />
            </button>
          </div>
        </section>
      </div>
      <div className="privacy-actions">
        <button
          className="product-outline-button"
          onClick={() => toast.success("Data export prepared in mock mode")}
        >
          Export my data
        </button>
        <button
          className="text-link"
          onClick={() => toast.info("Deletion request saved in mock mode")}
        >
          Request account deletion
        </button>
      </div>
    </AppShell>
  );
}
