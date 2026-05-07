import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Code2, Shield, Layout as LayoutIcon } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                Be Water. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Be RNC.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl">
                Assim como a água se adapta a qualquer forma, a metodologia RNC (Reengineering New Code) transforma a rigidez dos legados em fluidez digital. Inspirado no princípio de Bruce Lee, através de Inteligência Artificial (IA), o RNC ajuda empresas a se reinventarem, tornando sistemas complexos mais ágeis, resilientes e preparados para o futuro.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <Link href="/solucoes" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] group">
                Saber Mais
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <StaggerItem className="flex flex-col items-center text-center md:px-8 py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-bold text-primary font-['Space_Grotesk'] mb-4">40%</span>
              <span className="text-white/70 font-medium">Redução no Tempo de Entrega</span>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center text-center md:px-8 py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-bold text-primary font-['Space_Grotesk'] mb-4">50%</span>
              <span className="text-white/70 font-medium">Melhoria na Qualidade do Código</span>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-center text-center md:px-8 py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-bold text-primary font-['Space_Grotesk'] mb-4">35%</span>
              <span className="text-white/70 font-medium">Redução nos Custos de Desenvolvimento</span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Serviços e Soluções</h2>
              <p className="text-white/60 max-w-2xl text-lg">Tecnologia avançada aplicada aos desafios mais complexos da sua infraestrutura e estratégia de negócios.</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Link href="/solucoes" className="block h-full">
                <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code2 size={80} />
                  </div>
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Code2 className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Modernização de Legados</h3>
                  <p className="text-white/60 leading-relaxed">
                    70% de redução de tempo e até 40-50% de redução do custo comparado a métodos manuais. Qualquer tecnologia legada, qualquer stack de destino — prezamos por liberdade de escolha e inovação.
                  </p>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/solucoes" className="block h-full">
                <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Shield size={80} />
                  </div>
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Shield className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Parceiros de Negócios</h3>
                  <p className="text-white/60 leading-relaxed">
                    A Skalena representa como revenda, integrador e entrega de serviços tecnológicos: API7, KrakenD, Apiable, Black Duck, exo Platform.
                  </p>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/estrategia-digital" className="block h-full">
                <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <LayoutIcon size={80} />
                  </div>
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <LayoutIcon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Agência Digital / UX</h3>
                  <p className="text-white/60 leading-relaxed">
                    Unimos estratégia, design e tecnologia para criar experiências digitais que conectam e convertem. Foco em UX transforma interfaces complexas em jornadas intuitivas.
                  </p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para fluir?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Transforme a rigidez dos seus sistemas legados na agilidade e flexibilidade que o mercado exige hoje.
            </p>
            <Link href="/contato" className="inline-flex items-center gap-2 bg-white text-background hover:bg-white/90 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Fale com nossos especialistas
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}