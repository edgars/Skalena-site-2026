import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Linkedin, Twitter } from "lucide-react";

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

const TEAM = [
  {
    name: "Rodolfo Dino",
    role: "CEO & Fundador",
    bio: "Visionário em transformação digital, lidera a Skalena com foco em tecnologia, pessoas e inovação contínua.",
    avatar: "RD",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ana Clara Moreira",
    role: "CTO",
    bio: "Especialista em arquitetura de software e sistemas distribuídos. Referência em modernização de legados e API Management.",
    avatar: "AC",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Felipe Gonçalves",
    role: "Head de Engenharia",
    bio: "Mais de 15 anos construindo sistemas críticos para o governo e o setor financeiro brasileiro.",
    avatar: "FG",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Juliana Matos",
    role: "Head de Design & UX",
    bio: "Transforma requisitos complexos em experiências digitais claras, inclusivas e memoráveis.",
    avatar: "JM",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Carlos Ribeiro",
    role: "Arquiteto de Soluções",
    bio: "Especialista em open source, Kubernetes e ecossistemas cloud. Referência em segurança e DevSecOps.",
    avatar: "CR",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mariana Torres",
    role: "Gerente de Projetos",
    bio: "PMO certificada com experiência em grandes entregas ágeis para Embrapa, Petrobras e Serpro.",
    avatar: "MT",
    linkedin: "https://linkedin.com",
  },
];

const DEPARTMENTS = [
  { name: "Engenharia", count: "12+" },
  { name: "Design", count: "4+" },
  { name: "Produto", count: "3+" },
  { name: "Consultoria", count: "8+" },
];

export default function TeamPage() {
  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      <PageHero
        label="Nossa Equipe"
        title={<>Pessoas que fazem a<br /><span style={{ color: GREEN }}>diferença</span></>}
        subtitle="Time multidisciplinar de especialistas apaixonados por tecnologia, inovação e pelo impacto real que geramos para nossos clientes."
      />

      {/* Department stats */}
      <section className="border-y border-white/[0.07]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.07]">
          {DEPARTMENTS.map(({ name, count }) => (
            <FadeUp key={name} className="px-8 py-12 text-center">
              <div className="text-4xl font-extrabold mb-2" style={{ color: GREEN }}>{count}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">{name}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.07}>
              <div
                className="group p-7 rounded-2xl border border-white/[0.07] transition-all duration-300 flex flex-col gap-5"
                style={{ background: "rgba(255,255,255,0.025)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`;
                  (e.currentTarget as HTMLDivElement).style.background = `${GREEN}08`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold flex-shrink-0"
                    style={{ background: `${GREEN}22`, color: GREEN, border: `1.5px solid ${GREEN}44` }}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-base">{member.name}</div>
                    <div className="text-xs font-semibold mt-0.5" style={{ color: GREEN }}>{member.role}</div>
                  </div>
                </div>
                <p className="text-white/45 text-sm leading-relaxed flex-1">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start flex items-center gap-2 text-xs font-semibold text-white/30 hover:text-white transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.07]">
        <FadeUp className="max-w-2xl mx-auto text-center px-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
            style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
            Junte-se a Nós
          </div>
          <h2 className="text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.025em" }}>
            Quer fazer parte do time?
          </h2>
          <p className="text-white/45 text-sm mb-8">
            Buscamos pessoas apaixonadas por tecnologia e impacto real. Confira nossas oportunidades abertas.
          </p>
          <a
            href="mailto:carreiras@skalena.com.br"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Ver Vagas
          </a>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
