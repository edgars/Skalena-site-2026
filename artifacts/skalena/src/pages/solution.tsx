import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { getSolution, SOLUTIONS } from "@/data/solutions";
import { CheckCircle2, ArrowLeft, ArrowRight, Wrench } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const solution = getSolution(params.slug ?? "");

  if (!solution) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col" style={{ fontFamily: "'Figtree', sans-serif" }}>
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-white/40 mb-6 text-lg">Solução não encontrada.</p>
          <button
            onClick={() => navigate(`${base}/solucoes-detalhes`)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: GREEN, color: "#000" }}
          >
            <ArrowLeft size={15} /> Ver todas as soluções
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = SOLUTIONS.findIndex((s) => s.slug === solution.slug);
  const prev = SOLUTIONS[currentIndex - 1];
  const next = SOLUTIONS[currentIndex + 1];

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label={`Solução ${solution.id}`}
        title={
          <>
            {solution.shortTitle === solution.title ? (
              <span style={{ color: GREEN }}>{solution.title}</span>
            ) : (
              <>
                {solution.shortTitle}{" "}
                <span style={{ color: GREEN }}>em profundidade</span>
              </>
            )}
          </>
        }
        subtitle={solution.subtitle}
      />

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
        <button
          onClick={() => navigate(`${base}/solucoes-detalhes`)}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> Todas as soluções
        </button>
      </div>

      {/* Overview */}
      <section className="py-14 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <FadeUp className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GREEN }}>Visão Geral</h2>
            <p className="text-white/65 leading-relaxed text-base">{solution.longDesc}</p>
          </FadeUp>

          {/* Benefits sidebar */}
          <FadeUp delay={0.1}>
            <div
              className="p-6 rounded-2xl border border-white/[0.07] h-fit"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GREEN }}>Benefícios</h2>
              <div className="flex flex-col gap-3">
                {solution.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-white/65 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-14 border-t border-white/[0.07]"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GREEN }}>Como Funciona</h2>
            <p className="text-2xl font-extrabold" style={{ letterSpacing: "-0.02em" }}>
              Capacidades principais
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solution.features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div
                  className="p-6 rounded-2xl border border-white/[0.07] h-full transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`;
                    (e.currentTarget as HTMLDivElement).style.background = `${GREEN}07`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-xs font-black"
                    style={{ background: `${GREEN}18`, color: GREEN }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ letterSpacing: "-0.015em" }}>{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + Tools */}
      <section className="py-14 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use cases */}
            <FadeUp>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GREEN }}>Casos de Uso</h2>
              <div className="flex flex-col gap-3">
                {solution.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-white/[0.06] last:border-0">
                    <span
                      className="text-xs font-black mt-0.5 flex-shrink-0 opacity-50"
                      style={{ color: GREEN }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/65 text-sm">{uc}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Tools */}
            {solution.tools && (
              <FadeUp delay={0.08}>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GREEN }}>
                  Ferramentas & Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {solution.tools.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border"
                      style={{ borderColor: `${GREEN}33`, background: `${GREEN}0d`, color: "rgba(255,255,255,0.75)" }}
                    >
                      <Wrench size={10} style={{ color: GREEN }} />
                      {t}
                    </span>
                  ))}
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 border-t border-white/[0.07] relative overflow-hidden"
        style={{ background: "rgba(255,255,255,0.012)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center, ${GREEN}15 0%, transparent 65%)` }}
        />
        <FadeUp className="relative z-10 max-w-xl mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.025em" }}>
            Pronto para começar?
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">{solution.cta}.</p>
          <a
            href="mailto:contato@skalena.com.br"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Fale com a Skalena <ArrowRight size={15} />
          </a>
        </FadeUp>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="border-t border-white/[0.07]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
            {prev ? (
              <button
                onClick={() => navigate(`${base}/solucoes/${prev.slug}`)}
                className="flex items-center gap-4 px-8 py-8 text-left group hover:bg-white/[0.02] transition-colors"
              >
                <ArrowLeft size={18} className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/30 mb-1">Anterior</div>
                  <div className="font-semibold text-sm group-hover:text-white transition-colors">{prev.shortTitle}</div>
                </div>
              </button>
            ) : (
              <div />
            )}
            {next ? (
              <button
                onClick={() => navigate(`${base}/solucoes/${next.slug}`)}
                className="flex items-center justify-end gap-4 px-8 py-8 text-right group hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <div className="text-xs text-white/30 mb-1">Próxima</div>
                  <div className="font-semibold text-sm group-hover:text-white transition-colors">{next.shortTitle}</div>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
