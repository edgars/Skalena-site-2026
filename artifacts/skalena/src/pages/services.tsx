import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SOLUTIONS } from "@/data/solutions";
import { BrainCircuit, Layers, ShieldCheck, Zap, Cpu, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const GREEN = "#0cfa64";

const ICONS = [
  <BrainCircuit size={26} />,
  <Layers size={26} />,
  <ShieldCheck size={26} />,
  <Zap size={26} />,
  <Cpu size={26} />,
  <Globe size={26} />,
];

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

export default function ServicesPage() {
  const [, navigate] = useLocation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label="Soluções"
        title={<>Tudo que sua empresa<br />precisa para <span style={{ color: GREEN }}>escalar</span></>}
        subtitle="Portfólio completo de soluções tecnológicas — da modernização de legados à estratégia digital — para empresas que querem liderar."
        crumbs={[{ label: "Soluções" }]}
      />

      {/* Services list */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-5">
          {SOLUTIONS.map((service, i) => (
            <FadeUp key={service.id} delay={i * 0.05}>
              <div
                className="group grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 rounded-2xl border border-white/[0.07] transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.02)" }}
                onClick={() => navigate(`${base}/solucoes/${service.slug}`)}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`;
                  (e.currentTarget as HTMLDivElement).style.background = `${GREEN}06`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Icon + label */}
                <div className="lg:col-span-1 flex lg:flex-col items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${GREEN}15`, color: GREEN }}
                  >
                    {ICONS[i]}
                  </div>
                  <span className="text-xs font-bold opacity-30 mt-auto hidden lg:block" style={{ color: GREEN }}>
                    {service.id}
                  </span>
                </div>

                {/* Text */}
                <div className="lg:col-span-2">
                  <div className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60" style={{ color: GREEN }}>
                    {service.id}
                  </div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ letterSpacing: "-0.02em" }}>{service.title}</h3>
                  <div className="text-sm font-semibold text-white/50 mb-4">{service.subtitle}</div>
                  <p className="text-white/45 text-sm leading-relaxed">{service.longDesc.slice(0, 180)}…</p>
                </div>

                {/* Benefits + arrow */}
                <div className="lg:col-span-2 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    {service.benefits.slice(0, 4).map((b, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                        <span className="text-sm text-white/60">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="self-end flex items-center gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ color: GREEN }}
                  >
                    Ver detalhes <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 sm:py-24 border-t border-white/[0.07] relative overflow-hidden"
        style={{ background: "rgba(255,255,255,0.012)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center bottom, ${GREEN}18 0%, transparent 65%)` }}
        />
        <FadeUp className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.025em" }}>
            Pronto para começar?
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">
            Nossa equipe está pronta para entender seu desafio e montar a solução ideal para o seu negócio.
          </p>
          <a
            href="mailto:contato@skalena.com.br"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Fale com a Skalena <ArrowRight size={15} />
          </a>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
