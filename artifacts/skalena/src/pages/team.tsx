import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { TEAM_MEMBERS, type TeamMember } from "@/data/team";
import { Linkedin, Github, ArrowRight } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MemberCard({ member, featured = false, delay = 0 }: { member: TeamMember; featured?: boolean; delay?: number }) {
  const [, navigate] = useLocation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <FadeUp delay={delay}>
      <div
        className={`group relative rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300 cursor-pointer ${featured ? "flex flex-col sm:flex-row gap-0" : "flex flex-col"}`}
        style={{ background: "rgba(255,255,255,0.025)" }}
        onClick={() => navigate(`${base}/equipe/${member.slug}`)}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}44`;
          (e.currentTarget as HTMLDivElement).style.background = `${GREEN}07`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
        }}
      >
        {/* Photo */}
        <div className={`relative overflow-hidden flex-shrink-0 ${featured ? "sm:w-52 h-48 sm:h-auto" : "h-52"}`}>
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(to bottom, transparent 50%, ${GREEN}22 100%)` }}
          />
        </div>

        {/* Content */}
        <div className={`p-6 flex flex-col ${featured ? "justify-between flex-1" : "flex-1"}`}>
          <div>
            <div
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: GREEN }}
            >
              {member.department === "leadership" ? "Liderança" : "Time"}
            </div>
            <h3 className={`font-extrabold mb-1 ${featured ? "text-xl" : "text-lg"}`} style={{ letterSpacing: "-0.02em" }}>
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-white/50 mb-3">{member.role}</p>
            <p className="text-white/45 text-sm leading-relaxed">{member.shortBio}</p>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
                >
                  <Linkedin size={13} />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
                >
                  <Github size={13} />
                </a>
              )}
            </div>
            <span
              className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{ color: GREEN }}
            >
              Ver perfil <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

const leadership = TEAM_MEMBERS.filter(m => m.department === "leadership");
const contributors = TEAM_MEMBERS.filter(m => m.department === "team");

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
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/[0.07]">
          {DEPARTMENTS.map(({ name, count }) => (
            <FadeUp key={name} className="px-8 py-10 text-center">
              <div className="text-4xl font-extrabold mb-1" style={{ color: GREEN }}>{count}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">{name}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6">
        <FadeUp className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
            Liderança
          </div>
          <h2
            className="mt-4 font-extrabold"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", letterSpacing: "-0.025em" }}
          >
            Time de Liderança
          </h2>
          <p className="text-white/40 text-sm mt-2 max-w-lg">
            Os responsáveis pela visão, cultura e direção técnica da Skalena.
          </p>
        </FadeUp>

        {/* Featured: first leadership member wide, rest grid */}
        <div className="flex flex-col gap-4 mb-4">
          <MemberCard member={leadership[0]} featured delay={0.05} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.slice(1).map((m, i) => (
            <MemberCard key={m.slug} member={m} delay={0.08 + i * 0.07} />
          ))}
        </div>
      </section>

      {/* Contributors */}
      <section
        className="py-16 sm:py-24 border-t border-white/[0.07]"
        style={{ background: "rgba(255,255,255,0.012)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
              Colaboradores
            </div>
            <h2
              className="mt-4 font-extrabold"
              style={{ fontSize: "clamp(26px, 4vw, 42px)", letterSpacing: "-0.025em" }}
            >
              Nosso Time
            </h2>
            <p className="text-white/40 text-sm mt-2 max-w-lg">
              Especialistas que entregam excelência em cada projeto.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contributors.map((m, i) => (
              <MemberCard key={m.slug} member={m} delay={0.06 + i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 sm:py-24 border-t border-white/[0.07]">
        <FadeUp className="max-w-2xl mx-auto text-center px-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
            style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
            Junte-se a Nós
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ letterSpacing: "-0.025em" }}>
            Quer fazer parte do time?
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">
            Buscamos pessoas apaixonadas por tecnologia e impacto real. Respondemos a todas as candidaturas.
          </p>
          <a
            href="mailto:carreiras@skalena.com.br"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Enviar Candidatura <ArrowRight size={15} />
          </a>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
