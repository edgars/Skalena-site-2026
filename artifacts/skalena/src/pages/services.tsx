import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { BrainCircuit, Layers, ShieldCheck, Zap, Globe, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: <BrainCircuit size={28} />,
    label: "01",
    title: "Modernização de Legados — RNC",
    subtitle: "Reengineering New Code com Inteligência Artificial",
    desc: "A metodologia RNC é o coração da Skalena. Usamos IA para analisar, mapear e transformar sistemas legados em código moderno, mantendo a lógica de negócio e eliminando a dívida técnica.",
    benefits: [
      "Até 70% de redução no tempo de modernização",
      "40–50% de redução nos custos versus métodos manuais",
      "Compatible com qualquer linguagem de origem",
      "Destino: Java, Node.js, Python, Go, .NET e mais",
    ],
  },
  {
    icon: <Layers size={28} />,
    label: "02",
    title: "API Management",
    subtitle: "Governança, segurança e escalabilidade",
    desc: "Implementamos e gerenciamos plataformas de API Management com as melhores ferramentas do mercado: KrakenD, Apiable, NASPH e API7. Conectamos ecossistemas com controle total.",
    benefits: [
      "Gateway de APIs de alto desempenho",
      "Autenticação, autorização e rate limiting",
      "Monitoramento e observabilidade em tempo real",
      "Estratégia de versionamento e documentação",
    ],
  },
  {
    icon: <ShieldCheck size={28} />,
    label: "03",
    title: "Segurança com Black Duck",
    subtitle: "SCA líder global para DevSecOps",
    desc: "Como parceiros certificados Black Duck, entregamos visibilidade completa sobre componentes open-source, vulnerabilidades (CVEs) e riscos de licenciamento em qualquer aplicação.",
    benefits: [
      "Escaneamento estático (SAST) de código e IaC",
      "Análise de composição de software (SCA)",
      "Scans dinâmicos para Web e APIs",
      "Integração completa ao pipeline CI/CD",
    ],
  },
  {
    icon: <Zap size={28} />,
    label: "04",
    title: "Open Source & Cloud",
    subtitle: "Kubernetes, Rancher, N8N e além",
    desc: "Suporte especializado para stacks open source líderes. Ajudamos empresas a adotar, operar e escalar tecnologias abertas com segurança e sem riscos de lock-in.",
    benefits: [
      "Kubernetes e Rancher (orquestração de containers)",
      "N8N para automação de processos e integrações",
      "Assessoria em licenciamento e compliance",
      "Migração de ambientes on-premise para cloud",
    ],
  },
  {
    icon: <Cpu size={28} />,
    label: "05",
    title: "Agência Digital & UX",
    subtitle: "Estratégia, design e tecnologia unidos",
    desc: "Do briefing ao deploy: nossa equipe de design e produto cria experiências digitais que convertem, retêm e encantam. Não fazemos sites bonitos — fazemos produtos que funcionam.",
    benefits: [
      "Discovery e estratégia de produto",
      "Design de interfaces (UI/UX) e prototipação",
      "Desenvolvimento front-end moderno (React, Vue)",
      "Testes de usabilidade e otimização contínua",
    ],
  },
  {
    icon: <Globe size={28} />,
    label: "06",
    title: "Estratégia Digital",
    subtitle: "Transformação digital end-to-end",
    desc: "Abordagem holística e adaptável: mapeamos sua jornada digital, identificamos oportunidades de inovação e construímos um roadmap claro para sua empresa se tornar verdadeiramente digital.",
    benefits: [
      "Diagnóstico de maturidade digital",
      "Roadmap de transformação customizado",
      "Adoção de IA no core do negócio",
      "Treinamento e capacitação de equipes",
    ],
  },
];

export default function ServicesPage() {
  const scrollToContact = () => window.location.href = "/#contato";

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label="Soluções"
        title={<>Tudo que sua empresa<br />precisa para <span style={{ color: GREEN }}>escalar</span></>}
        subtitle="Portfólio completo de soluções tecnológicas — da modernização de legados à estratégia digital — para empresas que querem liderar."
      />

      {/* Services list */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          {SERVICES.map((service, i) => (
            <FadeUp key={service.label} delay={i * 0.06}>
              <div
                className="group grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 rounded-2xl border border-white/[0.07] transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}33`;
                  (e.currentTarget as HTMLDivElement).style.background = `${GREEN}06`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Left: icon + label */}
                <div className="lg:col-span-1 flex lg:flex-col items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${GREEN}15`, color: GREEN }}
                  >
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold opacity-30 mt-auto hidden lg:block" style={{ color: GREEN }}>
                    {service.label}
                  </span>
                </div>

                {/* Center: text */}
                <div className="lg:col-span-2">
                  <div className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60" style={{ color: GREEN }}>
                    {service.label}
                  </div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ letterSpacing: "-0.02em" }}>{service.title}</h3>
                  <div className="text-sm font-semibold text-white/50 mb-4">{service.subtitle}</div>
                  <p className="text-white/45 text-sm leading-relaxed">{service.desc}</p>
                </div>

                {/* Right: benefits */}
                <div className="lg:col-span-2 flex flex-col gap-3">
                  {service.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                      <span className="text-sm text-white/60">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 border-t border-white/[0.07] relative overflow-hidden"
        style={{ background: "rgba(255,255,255,0.012)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center bottom, ${GREEN}18 0%, transparent 65%)`,
          }}
        />
        <FadeUp className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.025em" }}>
            Pronto para começar?
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">
            Nossa equipe está pronta para entender seu desafio e montar a solução ideal para o seu negócio.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Fale com a Skalena <ArrowRight size={15} />
          </button>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
