import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import IndexPage from "@/pages/index";
import TeamPage from "@/pages/team";
import FounderPage from "@/pages/founder";
import ServicesPage from "@/pages/services";
import MemberPage from "@/pages/member";
import PrivacyPage from "@/pages/privacy";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/equipe/:slug" component={MemberPage} />
      <Route path="/equipe" component={TeamPage} />
      <Route path="/fundador" component={FounderPage} />
      <Route path="/solucoes-detalhes" component={ServicesPage} />
      <Route path="/privacidade" component={PrivacyPage} />
      <Route path="*" component={IndexPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
