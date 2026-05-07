import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Code2, Server, Layout as LayoutIcon, Network, ShieldCheck, Cpu } from "lucide-react";
import { Link } from "wouter";

export default function Solucoes() {
  return (
    <Layout>
      <section className="pt-40 pb-20 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hub de Soluções Skalena</h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              Suporte especializado para as tecnologias que movem o mundo. Implementação, consultoria e sustentação de stacks abertas com o rigor que sua empresa exige.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Modernização de Legados (RNC)</h3>
                <p className="text-white/60 leading-relaxed">
                  Transformação de sistemas legados usando IA. Redução de 70% no tempo e 40-50% nos custos vs. métodos manuais. Qualquer tecnologia, qualquer stack de destino.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Suporte Open Source</h3>
                <p className="text-white/60 leading-relaxed">
                  Ecossistema completo de suporte e consultoria para Kubernetes, Rancher, N8N e outras plataformas líderes. Sua jornada Open Source livre de riscos.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link href="/estrategia-digital" className="block h-full">
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Estratégia Digital</h3>
                  <p className="text-white/60 leading-relaxed">
                    Abordagem holística, adaptável e inovadora. Inovação contínua, foco no cliente, transformação digital e inteligência artificial.
                  </p>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">API Management</h3>
                <p className="text-white/60 leading-relaxed">
                  Parceiro oficial de KrakenD, Apiable, NASPH API Manager e API7. Gestão completa do ciclo de vida de APIs.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link href="/blackduck" className="block h-full">
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Segurança (Black Duck)</h3>
                  <p className="text-white/60 leading-relaxed">
                    Plataforma SCA para visibilidade completa sobre componentes open-source, vulnerabilidades e riscos de licenciamento.
                  </p>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/estrategia-digital" className="block h-full">
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <LayoutIcon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Agência Digital & UX</h3>
                  <p className="text-white/60 leading-relaxed">
                    Estratégia, design e tecnologia unidos para criar experiências digitais que conectam e convertem.
                  </p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}