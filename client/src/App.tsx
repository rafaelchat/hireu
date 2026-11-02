import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useRoute } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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

function JobRoute() {
  const [, params] = useRoute("/jobs/:id");
  return <JobDetailsPage id={params?.id ?? "nuvem-product-designer"} />;
}

function ApplyRoute() {
  const [, params] = useRoute("/apply/:id");
  return <ApplyPage id={params?.id ?? "nuvem-product-designer"} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/jobs/:id" component={JobRoute} />
      <Route path="/apply/:id" component={ApplyRoute} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/candidate" component={CandidateDashboard} />
      <Route
        path="/candidate/applications"
        component={CandidateApplicationsPage}
      />
      <Route path="/candidate/profile" component={CandidateProfilePage} />
      <Route
        path="/candidate/settings"
        component={() => <SettingsPage kind="candidate" />}
      />
      <Route path="/company" component={CompanyDashboard} />
      <Route path="/company/jobs/new" component={CompanyPostJobPage} />
      <Route path="/company/candidates" component={CompanyCandidatesPage} />
      <Route
        path="/company/settings"
        component={() => <SettingsPage kind="company" />}
      />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster position="bottom-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
