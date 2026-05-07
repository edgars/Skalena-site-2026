import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroCanvas } from "@/components/hero-canvas";
import { ArrowDown, Code2, Layers, Cpu, ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function IndexPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-[100vh] min-h-[600px] flex items-center overflow-hidden">
        <HeroCanvas />
        <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="text-[11px] md:text-sm uppercase tracking-[0.2em] text-accent mb-6 font-medium">
                Reengenharia com Inteligência Artificial
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(36px,8vw,100px)] leading-[1.1] font-light mb-6">
                Be Water.<br />
                Be RNC.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mb-12">
                Transformamos a rigidez dos legados em fluidez digital.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollTo("#contato")}
                className="bg-white text-black px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-white/90 transition-all"
              >
                Fale Conosco
              </button>
              <button 
                onClick={() => scrollTo("#servicos")}
                className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-white hover:text-black transition-all"
              >
                Saber Mais
              </button>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10 text-white/50 hover:text-white" onClick={() => scrollTo("#stats")}>
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="border-y border-white/[0.06] bg-black">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            <StaggerItem className="p-12 md:p-16 flex flex-col items-start justify-center">
              <span className="text-5xl md:text-7xl font-semibold text-white mb-4">40%</span>
              <span className="text-muted-foreground font-light text-lg">Redução no Tempo de Entrega</span>
            </StaggerItem>
            <StaggerItem className="p-12 md:p-16 flex flex-col items-start justify-center">
              <span className="text-5xl md:text-7xl font-semibold text-white mb-4">50%</span>
              <span className="text-muted-foreground font-light text-lg">Melhoria na Qualidade do Código</span>
            </StaggerItem>
            <StaggerItem className="p-12 md:p-16 flex flex-col items-start justify-center">
              <span className="text-5xl md:text-7xl font-semibold text-white mb-4">35%</span>
              <span className="text-muted-foreground font-light text-lg">Redução nos Custos de Desenvolvimento</span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-32 bg-black border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium">Serviços</div>
            <h2 className="text-4xl md:text-6xl font-light mb-16">O que fazemos</h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="group relative border border-white/[0.08] p-10 h-full hover:border-white/30 transition-colors duration-500 rounded-sm">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code2 className="text-white mb-8" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-light mb-4">Modernização de Legados</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Refatoração com IA, redução de custos e preparo de infraestruturas para o futuro sem perder a essência do negócio.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group relative border border-white/[0.08] p-10 h-full hover:border-white/30 transition-colors duration-500 rounded-sm">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Layers className="text-white mb-8" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-light mb-4">API Management</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Governança, segurança e escalabilidade para ecossistemas conectados. Integração fluida entre sistemas e parceiros.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group relative border border-white/[0.08] p-10 h-full hover:border-white/30 transition-colors duration-500 rounded-sm">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Cpu className="text-white mb-8" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-light mb-4">Agência Digital & UX</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Estratégia e design para criar experiências digitais memoráveis que convertem e retêm clientes.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-32 bg-black border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <div className="sticky top-32">
                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium">Sobre</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white">
                  Motivados por sonhos, ideais e propósitos.
                </h2>
              </div>
            </FadeIn>
            
            <div className="flex flex-col gap-0">
              <FadeIn delay={0.1} className="py-8 border-t border-white/[0.06]">
                <h3 className="text-2xl font-light mb-4">Pragmáticos</h3>
                <p className="text-muted-foreground font-light text-lg">Soluções diretas que resolvem o problema real, sem burocracia desnecessária. Entregamos valor de ponta a ponta.</p>
              </FadeIn>
              <FadeIn delay={0.2} className="py-8 border-t border-white/[0.06]">
                <h3 className="text-2xl font-light mb-4">Pessoas, não recursos</h3>
                <p className="text-muted-foreground font-light text-lg">Acreditamos que a tecnologia é feita por e para pessoas. Valorizamos o talento humano potencializado pela IA.</p>
              </FadeIn>
              <FadeIn delay={0.3} className="py-8 border-t border-white/[0.06]">
                <h3 className="text-2xl font-light mb-4">Inovação Contínua</h3>
                <p className="text-muted-foreground font-light text-lg">Estamos sempre um passo à frente, explorando as fronteiras do RNC e desenvolvimento adaptativo.</p>
              </FadeIn>
              <FadeIn delay={0.4} className="py-8 border-t border-white/[0.06]">
                <h3 className="text-2xl font-light mb-4">Entrega Ágil</h3>
                <p className="text-muted-foreground font-light text-lg">Velocidade sem abrir mão da qualidade e segurança. Ciclos curtos e feedback constante.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Hub */}
      <section id="solucoes" className="py-32 bg-black border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium">Soluções</div>
            <h2 className="text-4xl md:text-6xl font-light mb-16">Hub de Soluções</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {[
              { id: "01", title: "RNC", desc: "Reengineering New Code para legados complexos." },
              { id: "02", title: "Open Source", desc: "Integração com o melhor do ecossistema livre." },
              { id: "03", title: "Estratégia Digital", desc: "Jornadas mapeadas para máximo impacto." },
              { id: "04", title: "API Management", desc: "Controle total sobre seus dados e integrações." },
              { id: "05", title: "Black Duck", desc: "Auditoria e compliance de software contínuos." },
              { id: "06", title: "Design & UX", desc: "Interfaces projetadas para o comportamento humano." },
            ].map((item, i) => (
              <StaggerItem key={item.id}>
                <div className="group py-8 border-b border-white/[0.06] flex flex-col items-start cursor-default">
                  <span className="text-sm font-medium text-muted-foreground mb-4">{item.id}</span>
                  <h3 className="text-2xl font-light mb-2 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Black Duck Feature */}
      <section id="blackduck" className="py-32 bg-[#0a0a0a] border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-accent" size={32} strokeWidth={1.5} />
                <h2 className="text-3xl md:text-5xl font-light">Black Duck</h2>
              </div>
              <p className="text-xl md:text-2xl font-light text-white mb-6">
                Segurança e Compliance para qualquer software
              </p>
              <p className="text-muted-foreground font-light mb-10 text-lg leading-relaxed">
                Garanta a integridade do seu código com a solução líder global em gerenciamento de riscos de código aberto e segurança de aplicações.
              </p>
              <button onClick={() => scrollTo("#contato")} className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-white hover:text-black transition-all flex items-center gap-3">
                Solicite uma Demo <ChevronRight size={16} />
              </button>
            </FadeIn>

            <StaggerContainer className="flex flex-col gap-6">
              {[
                "Escaneamento estático (SAST)",
                "Análise de composição (SCA)",
                "Scans dinâmicos para APIs",
                "Automação CI/CD completa"
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="pl-6 border-l border-white/[0.06] py-2 hover:border-accent transition-colors duration-300">
                    <p className="text-xl font-light text-white">{feature}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-32 bg-black border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium">Clientes</div>
            <h2 className="text-4xl md:text-6xl font-light mb-6">Parceiros de sucesso</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              Temos mais que clientes — são parceiros em grandes desafios de transformação digital.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] mb-16">
            {[
              "Embrapa", "Petrobras", "Banco do Brasil", 
              "Serpro", "Caixa Econômica", "Totvs", 
              "Stefanini", "CI&T", "Senior Sistemas"
            ].map((client) => (
              <StaggerItem key={client}>
                <div className="bg-black p-8 md:p-12 flex items-center justify-center h-full hover:bg-white/[0.02] transition-colors">
                  <span className="text-xl md:text-2xl font-light text-white/80">{client}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="border border-white/[0.06] p-8 md:p-12 rounded-sm bg-gradient-to-br from-white/[0.03] to-transparent">
              <p className="text-lg md:text-xl font-light leading-relaxed">
                <span className="text-accent font-medium uppercase tracking-wider text-sm block mb-4">Caso de Sucesso</span>
                Skalena na <strong>Embrapa</strong> — Modernização de plataforma de dados com RNC e integração arquitetural avançada de APIs para o agronegócio global.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium">Contato</div>
              <h2 className="text-4xl md:text-6xl font-light mb-8">Fale com a Skalena</h2>
              <p className="text-xl text-muted-foreground font-light mb-8">
                Prontos para transformar seu negócio. Respondemos em até 1 dia útil.
              </p>
              <a href="mailto:contato@skalena.com.br" className="text-2xl font-light hover:text-accent transition-colors">
                contato@skalena.com.br
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              {formStatus === "success" ? (
                <div className="border border-accent p-12 text-center rounded-sm bg-accent/5">
                  <h3 className="text-2xl font-light text-accent mb-4">Mensagem enviada com sucesso.</h3>
                  <p className="text-muted-foreground font-light">Nossa equipe entrará em contato em breve.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 border border-white/30 text-white px-8 py-3 text-sm font-medium rounded-sm hover:bg-white hover:text-black transition-all"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormStatus("success");
                  }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-light text-muted-foreground uppercase tracking-wider">Nome completo</label>
                    <input required type="text" className="bg-black border-2 border-white/[0.08] p-4 text-white rounded-sm focus:outline-none focus:border-accent transition-colors font-light" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-light text-muted-foreground uppercase tracking-wider">E-mail corporativo</label>
                    <input required type="email" className="bg-black border-2 border-white/[0.08] p-4 text-white rounded-sm focus:outline-none focus:border-accent transition-colors font-light" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-light text-muted-foreground uppercase tracking-wider">Empresa</label>
                    <input required type="text" className="bg-black border-2 border-white/[0.08] p-4 text-white rounded-sm focus:outline-none focus:border-accent transition-colors font-light" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-light text-muted-foreground uppercase tracking-wider">Mensagem</label>
                    <textarea required rows={4} className="bg-black border-2 border-white/[0.08] p-4 text-white rounded-sm focus:outline-none focus:border-accent transition-colors font-light resize-none" />
                  </div>
                  <button type="submit" className="bg-white text-black px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-white/90 transition-all mt-4">
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}