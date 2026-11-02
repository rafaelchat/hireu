import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Check, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Route, Switch, useLocation, useRoute } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import {
  ApplyPage,
  AuthPage,
  CandidateApplicationsPage,
  CandidateDashboard,
  CandidateProfilePage,
  CompanyCandidatesPage,
  CompanyDashboard,
  CompanyPostJobPage,
  HowItWorksPage,
  JobDetailsPage,
  JobsPage,
  LandingPage,
  PricingPage,
  PrivacyPage,
  SettingsPage,
} from "./pages/ProductPages";
import {
  CandidateApplicationsPageV2,
  CandidateAssessmentsPage,
  CandidateCalendarPage,
  CandidateDashboardPage,
  CandidateDocumentsPage,
  CandidateMessagesPage,
  CandidateOnboardingPage,
  CandidatePrivacyPage,
  CandidateProfilePageV2,
  CandidateRecommendationsPage,
} from "./pages/CandidateFlow";
import {
  CompanyAutomationsPage,
  CompanyBillingPage,
  CompanyCandidatesPageV2,
  CompanyDashboardPage,
  CompanyInterviewsPage,
} from "./pages/CompanyFlow";

function JobRoute() {
  const [, params] = useRoute("/jobs/:id");
  return <JobDetailsPage id={params?.id ?? "nuvem-product-designer"} />;
}

function ApplyRoute() {
  const [, params] = useRoute("/apply/:id");
  return <ApplyPage id={params?.id ?? "nuvem-product-designer"} />;
}

type DemoIdentity = "logged-out" | "candidate" | "company";

function AutoLoginSwitcher() {
  const [location, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const pt = language === "pt-BR";
  const active: DemoIdentity = location.startsWith("/candidate")
    ? "candidate"
    : location.startsWith("/company")
      ? "company"
      : "logged-out";
  const labels: Record<DemoIdentity, string> = {
    "logged-out": "Logged out",
    candidate: "Candidate",
    company: "Company",
  };

  const switchIdentity = (identity: DemoIdentity) => {
    setOpen(false);
    if (identity === "candidate") setLocation("/candidate");
    else if (identity === "company") setLocation("/company");
    else setLocation("/");
  };

  return (
    <div className={`auto-login ${open ? "open" : ""}`}>
      {open && (
        <div className="auto-login-menu" role="menu">
          <div className="auto-login-menu-heading">
            <span>{pt ? "Auto login" : "Auto login"}</span>
            <small>{pt ? "Ambiente mock" : "Mock environment"}</small>
          </div>
          {(["logged-out", "candidate", "company"] as DemoIdentity[]).map(
            identity => (
              <button
                key={identity}
                className={active === identity ? "active" : ""}
                onClick={() => switchIdentity(identity)}
                role="menuitem"
              >
                <span className={`auto-login-avatar ${identity}`}>
                  {identity === "logged-out"
                    ? "○"
                    : identity === "candidate"
                      ? "AM"
                      : "NL"}
                </span>
                <span>
                  <strong>
                    {pt && identity === "logged-out"
                      ? "Deslogado"
                      : pt && identity === "candidate"
                        ? "Candidato"
                        : pt && identity === "company"
                          ? "Empresa"
                          : labels[identity]}
                  </strong>
                  <small>
                    {identity === "logged-out"
                      ? pt
                        ? "Site público"
                        : "Public website"
                      : identity === "candidate"
                        ? pt
                          ? "Ana Martins · área do candidato"
                          : "Ana Martins · candidate workspace"
                        : pt
                          ? "Nuvem Labs · área da empresa"
                          : "Nuvem Labs · company workspace"}
                  </small>
                </span>
                {active === identity && <Check size={14} />}
              </button>
            )
          )}
        </div>
      )}
      <button
        className="auto-login-trigger"
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-label="Open auto login switcher"
      >
        <span className="auto-login-trigger-dot" />
        <span>{pt ? "Auto login" : "Auto login"}</span>
        <ChevronUp size={14} className={open ? "rotated" : ""} />
      </button>
    </div>
  );
}

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/jobs" component={JobsPage} />
        <Route path="/jobs/:id" component={JobRoute} />
        <Route path="/apply/:id" component={ApplyRoute} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/onboarding" component={CandidateOnboardingPage} />
        <Route path="/candidate" component={CandidateDashboardPage} />
        <Route
          path="/candidate/applications"
          component={CandidateApplicationsPageV2}
        />
        <Route
          path="/candidate/assessments"
          component={CandidateAssessmentsPage}
        />
        <Route path="/candidate/calendar" component={CandidateCalendarPage} />
        <Route path="/candidate/documents" component={CandidateDocumentsPage} />
        <Route
          path="/candidate/recommendations"
          component={CandidateRecommendationsPage}
        />
        <Route path="/candidate/messages" component={CandidateMessagesPage} />
        <Route path="/candidate/profile" component={CandidateProfilePageV2} />
        <Route path="/candidate/privacy" component={CandidatePrivacyPage} />
        <Route
          path="/candidate/settings"
          component={() => <SettingsPage kind="candidate" />}
        />
        <Route path="/company" component={CompanyDashboardPage} />
        <Route path="/company/jobs/new" component={CompanyPostJobPage} />
        <Route path="/company/candidates" component={CompanyCandidatesPageV2} />
        <Route path="/company/interviews" component={CompanyInterviewsPage} />
        <Route path="/company/billing" component={CompanyBillingPage} />
        <Route path="/company/automations" component={CompanyAutomationsPage} />
        <Route
          path="/company/settings"
          component={() => <SettingsPage kind="company" />}
        />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <AutoLoginSwitcher />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster position="bottom-right" />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
