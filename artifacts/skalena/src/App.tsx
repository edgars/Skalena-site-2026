import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Sobre from "@/pages/sobre";
import Solucoes from "@/pages/solucoes";
import Clientes from "@/pages/clientes";
import Contato from "@/pages/contato";
import EstrategiaDigital from "@/pages/estrategia-digital";
import BlackDuck from "@/pages/blackduck";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/solucoes" component={Solucoes} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/contato" component={Contato} />
      <Route path="/estrategia-digital" component={EstrategiaDigital} />
      <Route path="/blackduck" component={BlackDuck} />
      <Route component={NotFound} />
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
