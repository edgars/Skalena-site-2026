import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Target, Users, Lightbulb, Zap } from "lucide-react";

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
        
        <div className="container relative z-10 mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 max-w-4xl">
              Nós somos motivados por <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">sonhos, ideais e propósitos.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              Queremos ser uma empresa brasileira que possibilita exportar com excelência tecnologias, talentos e grandes casos de sucesso. Através da remotabilidade queremos agregar o nosso time e dar oportunidade a diversos profissionais, sejam no Brasil e até no mundo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Pragmáticos</h3>
                <p className="text-white/60 leading-relaxed">
                  O que nos propomos a fazer, assumimos o compromisso de fazer da melhor forma possível aplicando todo o nosso conhecimento e esforços.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Pessoas, não recursos</h3>
                <p className="text-white/60 leading-relaxed">
                  Na Skalena nós acreditamos em 'pessoas' e não em 'recursos', por isso cuidamos e valorizamos nosso time que não para de crescer.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Inovação Contínua</h3>
                <p className="text-white/60 leading-relaxed">
                  Quando se trata de criar um novo produto digital, você deve tentar construí-lo o mais certo possível desde a primeira vez.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Entrega Ágil</h3>
                <p className="text-white/60 leading-relaxed">
                  Do conceito ao consumidor, nossas equipes combinam arquitetura profunda, design, engenharia e estratégia de produto com tecnologias e práticas modernas.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Descoberta</h2>
            <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-3xl">
              <div className="bg-background rounded-[22px] p-8 md:p-12">
                <p className="text-xl text-white/80 leading-relaxed">
                  Nosso programa de descoberta serve para entender os objetivos do seu negócio, o ambiente operacional, e para alinhar a entrega com os resultados esperados. Definimos requisitos de desempenho, escalabilidade, segurança e privacidade desde o início.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}