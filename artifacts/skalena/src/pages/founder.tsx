import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Linkedin, Quote } from "lucide-react";

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

const TIMELINE = [
  {
    year: "2010",
    title: "Início na Tecnologia",
    desc: "Primeiros anos como desenvolvedor, construindo soluções para empresas de médio porte no interior do Brasil.",
  },
  {
    year: "2014",
    title: "Especialização em Legados",
    desc: "Descoberta da oportunidade gigantesca na modernização de sistemas legados — área subatendida e repleta de dor.",
  },
  {
    year: "2018",
    title: "Fundação da Skalena",
    desc: "Criação da metodologia RNC e da Skalena, com o propósito de exportar excelência tecnológica brasileira.",
  },
  {
    year: "2020",
    title: "Aceleração com IA",
    desc: "Incorporação de Inteligência Artificial na metodologia RNC, reduzindo ainda mais o tempo e custo de modernização.",
  },
  {
    year: "2023",
    title: "Expansão e Reconhecimento",
    desc: "Projetos de sucesso na Embrapa, Petrobras e Banco do Brasil, consolidando a Skalena como referência nacional.",
  },
  {
    year: "Hoje",
    title: "Visão Global",
    desc: "Foco em tornar a Skalena uma exportadora de talentos e tecnologias, levando o Brasil para o mapa da inovação global.",
  },
];

const VALUES_PERSONAL = [
  { label: "Missão", value: "Transformar legados em ativos digitais competitivos para o Brasil." },
  { label: "Visão", value: "Ser uma empresa brasileira que exporta tecnologia e talentos com excelência." },
  { label: "Crença", value: "Pessoas primeiro. Recursos se encontram, talentos se constroem." },
];

export default function FounderPage() {
  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label="Nosso Fundador"
        title={<>Movido por propósito<br />e <span style={{ color: GREEN }}>inovação</span></>}
        subtitle="A história de quem acreditou que o Brasil poderia criar tecnologia de classe mundial."
        crumbs={[{ label: "Fundador" }]}
      />

      {/* Profile */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Avatar + name */}
          <FadeUp>
            <div
              className="relative rounded-3xl overflow-hidden border border-white/[0.07] p-10 flex flex-col items-center text-center"
              style={{ background: "linear-gradient(145deg, #0d1f10 0%, #060d08 100%)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top center, ${GREEN}30 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />
              <div
                className="relative w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-extrabold mb-6 border-2"
                style={{ background: `${GREEN}18`, color: GREEN, borderColor: `${GREEN}44` }}
              >
                RD
              </div>
              <h2 className="text-2xl font-extrabold mb-1">Rodolfo Dino</h2>
              <div className="text-sm font-semibold mb-4" style={{ color: GREEN }}>CEO & Fundador · Skalena</div>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-6">
                Empreendedor, arquiteto de software e apaixonado por transformação digital. Acredita que a tecnologia é o maior instrumento de equidade social e econômica do nosso tempo.
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 hover:border-white/25 transition-all text-white/70 hover:text-white"
              >
                <Linkedin size={15} /> Conectar no LinkedIn
              </a>

              {/* Values */}
              <div className="mt-8 w-full text-left flex flex-col gap-4">
                {VALUES_PERSONAL.map(v => (
                  <div key={v.label} className="border-t border-white/[0.07] pt-4">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GREEN }}>{v.label}</div>
                    <div className="text-sm text-white/60">{v.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Quote + story */}
          <FadeUp delay={0.12}>
            <div
              className="p-7 rounded-2xl border mb-8 relative"
              style={{ borderColor: `${GREEN}33`, background: `${GREEN}0a` }}
            >
              <Quote size={28} className="mb-4 opacity-50" style={{ color: GREEN }} />
              <p className="text-xl font-semibold leading-relaxed text-white/80" style={{ letterSpacing: "-0.01em" }}>
                "Be Water. Assim como a água toma a forma do recipiente sem perder sua essência, empresas que sobrevivem ao futuro são aquelas que se adaptam sem perder seus valores."
              </p>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-white/30">— Rodolfo Dino, Fundador da Skalena</div>
            </div>

            <p className="text-white/55 text-base leading-relaxed mb-5">
              Nascido no Brasil e formado em Ciência da Computação, Rodolfo passou os primeiros anos de carreira descobrindo os bastidores dos grandes sistemas que movem o país — e os problemas que ninguém queria resolver.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              A metodologia RNC (Reengineering New Code) nasceu dessa observação: havia uma forma melhor, mais rápida e mais inteligente de modernizar sistemas críticos. Com a chegada da IA, essa visão se tornou ainda mais poderosa — e a Skalena passou a ser a ponte entre o legado e o futuro.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
              style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
              Trajetória
            </div>
            <h2 className="text-3xl font-extrabold" style={{ letterSpacing: "-0.025em" }}>
              De desenvolvedor a fundador
            </h2>
          </FadeUp>

          <div className="relative flex flex-col gap-0">
            {/* vertical line */}
            <div
              className="absolute left-[72px] sm:left-[88px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />

            {TIMELINE.map((item, i) => (
              <FadeUp key={item.year} delay={i * 0.08}>
                <div className="flex items-start gap-8 py-8 border-t border-white/[0.06] group">
                  <div
                    className="flex-shrink-0 text-xs font-extrabold uppercase tracking-widest pt-1 w-14 sm:w-20 text-right"
                    style={{ color: i === TIMELINE.length - 1 ? GREEN : "rgba(255,255,255,0.25)" }}
                  >
                    {item.year}
                  </div>
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5 border-2 transition-colors duration-300 group-hover:border-green-400"
                    style={{ borderColor: `${GREEN}66`, background: i === TIMELINE.length - 1 ? GREEN : "transparent" }}
                  />
                  <div>
                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
