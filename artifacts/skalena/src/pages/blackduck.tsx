import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ShieldAlert, Search, Layers, RefreshCw, Server } from "lucide-react";
import { Link } from "wouter";

export default function BlackDuck() {
  return (
    <Layout>
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">Segurança & Compliance</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Black Duck</h1>
            <p className="text-2xl text-white/90 font-['Space_Grotesk'] mb-6 max-w-4xl">A solução definitiva para garantir segurança e compliance em qualquer software.</p>
            <p className="text-xl text-white/70 max-w-4xl leading-relaxed">
              Black Duck é uma plataforma de Software Composition Analysis (SCA) que oferece visibilidade completa sobre componentes open-source, vulnerabilidades e riscos de licenciamento. Identifica dependências diretas e transitivas, gera SBOMs detalhados e detecta falhas de segurança em tempo real.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Principais Funcionalidades</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 h-full hover:border-primary/40 transition-colors flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Search className="text-primary" size={24} />
                </div>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  Escaneamento estático (SAST) de código, infraestrutura como código (IaC) e segredos
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 h-full hover:border-primary/40 transition-colors flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Layers className="text-primary" size={24} />
                </div>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  Análise de composição de software (SCA) para gerenciar riscos de open-source
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 h-full hover:border-primary/40 transition-colors flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldAlert className="text-primary" size={24} />
                </div>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  Scans dinâmicos para aplicações Web e APIs modernas
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 h-full hover:border-primary/40 transition-colors flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <RefreshCw className="text-primary" size={24} />
                </div>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  Automação completa: no repositório, no build, no CI/CD ou em produção
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-background border border-white/10 rounded-3xl p-8 h-full hover:border-primary/40 transition-colors flex flex-col items-start text-left lg:col-span-2">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Server className="text-primary" size={24} />
                </div>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                  Ideal para DevSecOps, auditorias, due diligence e operações com contêineres, nuvem ou firmware
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Descubra como o Black Duck pode proteger seu negócio</h2>
            <Link href="/contato" className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]">
              Solicite uma Demo
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
