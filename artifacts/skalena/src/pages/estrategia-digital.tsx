import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Lightbulb, UserCheck, RefreshCw, Database } from "lucide-react";

export default function EstrategiaDigital() {
  return (
    <Layout>
      <section className="pt-40 pb-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-primary/10 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Estratégia Digital</h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              A Estratégia Digital é um componente crucial para qualquer empresa de tecnologia que visa prosperar na era digital. Nossa abordagem é holística, adaptável e inovadora.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:bg-white/[0.04] hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk']">Inovação Contínua</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  A inovação não é um evento único, mas um processo contínuo. Investimos em pesquisa e desenvolvimento para manter empresas à frente das tendências tecnológicas.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:bg-white/[0.04] hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk']">Foco no Cliente</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  A experiência do cliente deve estar no centro de todas as decisões estratégicas digitais. Entendemos profundamente as necessidades e comportamentos dos clientes.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:bg-white/[0.04] hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <RefreshCw size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk']">Transformação Digital</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  A transformação digital vai além da adoção de novas tecnologias. Exige uma mudança cultural que abraça a agilidade, a colaboração e a disposição para experimentar.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 h-full hover:bg-white/[0.04] hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <Database size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk']">Análise de Dados & IA</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  Utilizamos análise de dados avançada e inteligência artificial para tomar decisões baseadas em dados, personalizar experiências e identificar novas oportunidades.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}