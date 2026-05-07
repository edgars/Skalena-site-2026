import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Building2 } from "lucide-react";

const CLIENTS = [
  "Embrapa", "Petrobras", "Banco do Brasil", "Serpro", "Caixa Econômica", "Totvs", "Stefanini", "CI&T", "Senior Sistemas"
];

export default function Clientes() {
  return (
    <Layout>
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Clientes</h1>
            <p className="text-2xl text-primary font-['Space_Grotesk'] mb-6">Nós temos mais que clientes — são nossos parceiros de sucesso em grandes desafios.</p>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              Fazemos de tudo para proporcionar a melhor experiência possível. Como advisors, nossa missão é trazer o que for de melhor para o cumprimento dos objetivos de negócios e crescimento nestes tempos onde a agilidade é fundamental para o sucesso das organizações.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-12 text-center text-white/50 tracking-wider uppercase text-sm">Clientes e parceiros que já atuamos</h2>
          </FadeIn>
          
          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-6">
            {CLIENTS.map((client) => (
              <StaggerItem key={client}>
                <div className="bg-background border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 hover:border-primary/40 hover:bg-white/[0.05] transition-all cursor-default">
                  <Building2 size={16} className="text-white/40" />
                  <span className="font-bold text-lg text-white/90">{client}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-background border border-primary/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">Estudo de Caso</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Caso de Sucesso: Skalena na Embrapa</h3>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  Modernização da plataforma de dados da Embrapa utilizando metodologia RNC e integração de APIs. Resultados expressivos em tempo e custo.
                </p>
                <button className="bg-white text-background px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-colors">
                  Ler Caso Completo
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}