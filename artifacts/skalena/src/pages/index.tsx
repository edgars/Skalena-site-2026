import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroCanvas } from "@/components/hero-canvas";
import { Code2, Layers, Cpu, ShieldCheck, Zap, Globe, ArrowRight, CheckCircle2, UserCheck, Settings, MessageSquare, BarChart3, BrainCircuit } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-5 px-3 py-1.5 rounded-full border"
      style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
      {children}
    </div>
  );
}

const SERVICES = [
  {
    icon: <Code2 size={22} />,
    title: "Modernização de Legados",
    desc: "Metodologia RNC com IA: até 70% de redução no tempo e 40–50% nos custos versus métodos manuais. Qualquer tecnologia, qualquer stack de destino.",
  },
  {
    icon: <Layers size={22} />,
    title: "API Management",
    desc: "Governança, segurança e escalabilidade com KrakenD, Apiable, NASPH e API7. Ecossistemas conectados com controle total.",
  },
  {
    icon: <Cpu size={22} />,
    title: "Agência Digital & UX",
    desc: "Estratégia, design e tecnologia unidos para criar experiências digitais que conectam e convertem.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Segurança (Black Duck)",
    desc: "Visibilidade completa sobre componentes open-source, vulnerabilidades e riscos de licenciamento em qualquer aplicação.",
  },
  {
    icon: <Zap size={22} />,
    title: "Open Source & Cloud",
    desc: "Suporte especializado para Kubernetes, Rancher, N8N e stacks abertas líderes. Sua jornada cloud livre de riscos.",
  },
  {
    icon: <Globe size={22} />,
    title: "Estratégia Digital",
    desc: "Abordagem holística e adaptável: inovação contínua, foco no cliente, transformação digital e inteligência artificial.",
  },
];

const VALUES = [
  {
    title: "Pragmáticos",
    desc: "O que nos propomos a fazer, assumimos o compromisso de fazer da melhor forma possível, aplicando todo o nosso conhecimento e esforços.",
  },
  {
    title: "Pessoas, não recursos",
    desc: "Acreditamos em pessoas e não em recursos. Por isso cuidamos e valorizamos nosso time que não para de crescer.",
  },
  {
    title: "Inovação Contínua",
    desc: "Quando se trata de criar um novo produto digital, você deve tentar construí-lo o mais certo possível desde a primeira vez.",
  },
  {
    title: "Entrega Ágil",
    desc: "Combinamos arquitetura profunda, design, engenharia e estratégia de produto com tecnologias e práticas modernas.",
  },
];

const CLIENTS = [
  "Embrapa", "Petrobras", "Banco do Brasil",
  "Serpro", "Caixa Econômica", "Totvs",
  "Stefanini", "CI&T", "Senior Sistemas",
];

const BLACKDUCK_FEATURES = [
  "Escaneamento estático (SAST) de código e IaC",
  "Análise de composição de software (SCA)",
  "Scans dinâmicos para aplicações Web e APIs",
  "Automação completa no CI/CD e em produção",
];

export default function IndexPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <HeroCanvas />

        {/* Glowing orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "min(420px, 55vw)",
            background: `radial-gradient(ellipse at center, ${GREEN}55 0%, ${GREEN}22 35%, transparent 70%)`,
            filter: "blur(60px)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center">
          <FadeUp>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
              style={{
                background: `${GREEN}18`,
                borderColor: `${GREEN}44`,
                color: GREEN,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: GREEN }}
              />
              Reengenharia com Inteligência Artificial
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              className="font-extrabold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(42px, 8vw, 88px)", letterSpacing: "-0.03em" }}
            >
              Be Water.{" "}
              <span style={{ color: GREEN }}>Be RNC.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p
              className="text-white/55 mb-10 max-w-xl"
              style={{ fontSize: "clamp(16px, 2.2vw, 20px)", lineHeight: 1.65 }}
            >
              Transformamos a rigidez dos legados em fluidez digital. Combinando IA e metodologia própria, aceleramos a modernização do seu negócio.
            </p>
          </FadeUp>

          <FadeUp delay={0.26} className="flex flex-col sm:flex-row gap-3 items-center">
            <button
              onClick={() => scrollTo("#contato")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-85"
              style={{ background: GREEN, color: "#000" }}
            >
              Fale Conosco <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("#solucoes")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/15 text-white/80 hover:border-white/30 hover:text-white transition-all"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              Ver Soluções
            </button>
          </FadeUp>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 animate-bounce"
          onClick={() => scrollTo("#stats")}
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="border-y border-white/[0.07]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {[
            { num: "40%", label: "Redução no Tempo de Entrega" },
            { num: "50%", label: "Melhoria na Qualidade do Código" },
            { num: "35%", label: "Redução nos Custos de Desenvolvimento" },
          ].map(({ num, label }) => (
            <FadeUp key={num} className="px-10 py-14 flex flex-col items-center text-center sm:items-start sm:text-left">
              <span
                className="text-6xl font-extrabold mb-3 leading-none"
                style={{ color: GREEN }}
              >
                {num}
              </span>
              <span className="text-sm text-white/50 font-medium">{label}</span>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS BENTO ── */}
      <section id="servicos" className="py-28 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Serviços</SectionLabel>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(32px, 5vw, 54px)", letterSpacing: "-0.025em" }}
          >
            O que fazemos
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto text-base">
            Soluções que transformam como sua empresa opera, integra e inova.
          </p>
        </FadeUp>

        {/* Bento grid: 1 large left + 2×2 right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

          {/* Featured card */}
          <FadeUp className="lg:col-span-1 lg:row-span-2">
            <div
              className="relative rounded-2xl p-8 h-full min-h-[380px] flex flex-col justify-between overflow-hidden border border-white/[0.08]"
              style={{
                background: "linear-gradient(145deg, #0d1f10 0%, #061009 60%, #020702 100%)",
              }}
            >
              {/* orb glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-20%", left: "10%",
                  width: "80%", height: "70%",
                  background: `radial-gradient(ellipse at center, ${GREEN}40 0%, ${GREEN}12 45%, transparent 75%)`,
                  filter: "blur(40px)",
                }}
              />
              {/* star dots */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                  maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                  style={{ background: GREEN, color: "#000" }}
                >
                  <BrainCircuit size={22} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                  Modernização de Legados com IA
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  A metodologia RNC usa Inteligência Artificial para transformar sistemas legados em infraestrutura moderna. Até 70% de redução no tempo e 40–50% nos custos.
                </p>
              </div>

              <button
                onClick={() => scrollTo("#contato")}
                className="relative z-10 mt-8 self-start flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-85"
                style={{ background: GREEN, color: "#000" }}
              >
                Saber Mais <ArrowRight size={14} />
              </button>
            </div>
          </FadeUp>

          {/* 4 small cards — 2×2 */}
          {[
            {
              icon: <UserCheck size={18} />,
              title: "Integração de Sistemas",
              desc: "Conecte aplicações, parceiros e dados com API Management de ponta. KrakenD, Apiable, API7 e NASPH.",
            },
            {
              icon: <Settings size={18} />,
              title: "Open Source & Cloud",
              desc: "Suporte especializado para Kubernetes, Rancher e N8N. Sua jornada cloud livre de riscos.",
            },
            {
              icon: <MessageSquare size={18} />,
              title: "Estratégia Digital",
              desc: "Roadmaps de transformação digital centrados no cliente, impulsionados por dados e IA.",
            },
            {
              icon: <BarChart3 size={18} />,
              title: "Segurança & Compliance",
              desc: "Black Duck SCA para visibilidade total sobre vulnerabilidades, licenças e riscos open-source.",
            },
          ].map((card, i) => (
            <FadeUp key={card.title} delay={0.1 + i * 0.07}>
              <div
                className="relative rounded-2xl p-7 h-full min-h-[170px] flex flex-col overflow-hidden border border-white/[0.07] transition-all duration-300 group cursor-default"
                style={{ background: "linear-gradient(140deg, #0c1a0e 0%, #060d07 100%)" }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"}
              >
                {/* subtle corner glow */}
                <div
                  className="absolute -top-8 -right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    width: 100, height: 100,
                    background: `radial-gradient(circle, ${GREEN}30 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
                {/* icon */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-5 border flex-shrink-0"
                  style={{ borderColor: `${GREEN}55`, color: GREEN, background: `${GREEN}0f` }}
                >
                  {card.icon}
                </div>
                <h3 className="text-base font-bold mb-2 leading-snug">{card.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-28 border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            <FadeUp>
              <SectionLabel>Sobre</SectionLabel>
              <h2
                className="font-extrabold leading-[1.1] mb-6"
                style={{ fontSize: "clamp(30px, 4.5vw, 50px)", letterSpacing: "-0.025em" }}
              >
                Motivados por sonhos, ideais e propósitos.
              </h2>
              <p className="text-white/45 text-base leading-relaxed">
                Queremos ser uma empresa brasileira que exporta com excelência tecnologias, talentos e grandes casos de sucesso. Acreditamos que desenvolver o potencial de cada talento é o segredo para converter desafios em sucesso.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-0">
              {VALUES.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.08}>
                  <div className="py-7 border-t border-white/[0.07] group">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: GREEN }}
                      />
                      <h3 className="text-lg font-bold">{v.title}</h3>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed pl-7">{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES HUB ── */}
      <section id="solucoes" className="py-28 border-t border-white/[0.07]" style={{ background: "rgba(255,255,255,0.012)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <SectionLabel>Soluções</SectionLabel>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(32px, 5vw, 54px)", letterSpacing: "-0.025em" }}
            >
              Hub de Soluções
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { id: "01", title: "RNC", desc: "Reengineering New Code para legados complexos com IA." },
              { id: "02", title: "Open Source", desc: "Suporte e integração com o melhor do ecossistema livre." },
              { id: "03", title: "Estratégia Digital", desc: "Jornadas mapeadas para máximo impacto e crescimento." },
              { id: "04", title: "API Management", desc: "Controle total sobre dados, integrações e governança." },
              { id: "05", title: "Black Duck", desc: "Auditoria e compliance de software em tempo real." },
              { id: "06", title: "Design & UX", desc: "Interfaces projetadas para o comportamento humano." },
            ].map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.06}>
                <div
                  className="bg-black p-8 group cursor-default transition-all duration-200 hover:bg-white/[0.03]"
                >
                  <div
                    className="text-xs font-bold mb-4 opacity-40 group-hover:opacity-80 transition-opacity"
                    style={{ color: GREEN }}
                  >
                    {item.id}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLACK DUCK ── */}
      <section id="blackduck" className="py-28 border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeUp>
              <SectionLabel>Segurança</SectionLabel>
              <h2
                className="font-extrabold mb-5 leading-[1.1]"
                style={{ fontSize: "clamp(28px, 4.5vw, 50px)", letterSpacing: "-0.025em" }}
              >
                Black Duck
              </h2>
              <p
                className="font-semibold mb-4"
                style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.7)" }}
              >
                Segurança e Compliance para qualquer software
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Plataforma SCA líder global que oferece visibilidade completa sobre componentes open-source, vulnerabilidades e riscos de licenciamento. Ideal para DevSecOps, auditorias e operações em nuvem.
              </p>
              <button
                onClick={() => scrollTo("#contato")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-85"
                style={{ background: GREEN, color: "#000" }}
              >
                Solicite uma Demo <ArrowRight size={15} />
              </button>
            </FadeUp>

            <div className="flex flex-col gap-4">
              {BLACKDUCK_FEATURES.map((f, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] transition-all duration-200 hover:border-opacity-30"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"}
                  >
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <p className="text-sm font-medium text-white/80">{f}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <section id="clientes" className="py-28 border-t border-white/[0.07]" style={{ background: "rgba(255,255,255,0.012)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel>Clientes</SectionLabel>
            <h2
              className="font-extrabold mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 54px)", letterSpacing: "-0.025em" }}
            >
              Parceiros de sucesso
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Temos mais que clientes — são parceiros em grandes desafios de transformação digital.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {CLIENTS.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div
                  className="py-5 px-6 rounded-xl border border-white/[0.07] flex items-center justify-center text-center transition-all duration-200 hover:border-white/20 cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-sm font-semibold text-white/70">{c}</span>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div
              className="p-8 rounded-2xl border"
              style={{ borderColor: `${GREEN}33`, background: `${GREEN}08` }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: GREEN }}
              >
                Caso de Sucesso
              </span>
              <p className="text-base font-medium leading-relaxed text-white/80">
                <strong className="text-white">Skalena na Embrapa</strong> — Modernização da plataforma de dados do agronegócio global utilizando metodologia RNC e integração arquitetural avançada de APIs, com resultados expressivos em tempo e custo de entrega.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-28 border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <FadeUp>
              <SectionLabel>Contato</SectionLabel>
              <h2
                className="font-extrabold mb-5 leading-[1.1]"
                style={{ fontSize: "clamp(30px, 5vw, 54px)", letterSpacing: "-0.025em" }}
              >
                Fale com a Skalena
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-6">
                Prontos para transformar seu negócio. Respondemos em até 1 dia útil.
              </p>
              <a
                href="mailto:contato@skalena.com.br"
                className="text-base font-semibold transition-colors hover:opacity-80"
                style={{ color: GREEN }}
              >
                contato@skalena.com.br
              </a>
            </FadeUp>

            <FadeUp delay={0.15}>
              {formStatus === "success" ? (
                <div
                  className="p-10 rounded-2xl border text-center"
                  style={{ borderColor: `${GREEN}44`, background: `${GREEN}0a` }}
                >
                  <CheckCircle2 size={36} className="mx-auto mb-4" style={{ color: GREEN }} />
                  <h3 className="text-xl font-bold mb-2">Mensagem enviada!</h3>
                  <p className="text-white/50 text-sm mb-6">Nossa equipe entrará em contato em breve.</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold border border-white/15 text-white hover:bg-white/5 transition-all"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setFormStatus("success"); }}
                  className="flex flex-col gap-5"
                >
                  {[
                    { label: "Nome completo", type: "text" },
                    { label: "E-mail corporativo", type: "email" },
                    { label: "Empresa", type: "text" },
                  ].map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/40">{f.label}</label>
                      <input
                        required
                        type={f.type}
                        className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-[#0cfa64] focus:bg-white/[0.06]"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none resize-none transition-all focus:border-[#0cfa64] focus:bg-white/[0.06]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm mt-1 transition-all hover:opacity-85"
                    style={{ background: GREEN, color: "#000" }}
                  >
                    Enviar Mensagem <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
