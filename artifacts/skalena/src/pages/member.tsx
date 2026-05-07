import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getMember } from "@/data/team";
import { Linkedin, Github, ArrowLeft, CheckCircle2 } from "lucide-react";

const GREEN = "#0cfa64";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MemberPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const member = getMember(params.slug ?? "");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!member) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center" style={{ fontFamily: "'Figtree', sans-serif" }}>
        <Navbar />
        <div className="text-center px-6">
          <p className="text-white/40 mb-6 text-lg">Membro não encontrado.</p>
          <button
            onClick={() => navigate(`${base}/equipe`)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: GREEN, color: "#000" }}
          >
            <ArrowLeft size={15} /> Voltar para a Equipe
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-28 pb-16 border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, ${GREEN}18 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <button
            onClick={() => navigate(`${base}/equipe`)}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Equipe
          </button>

          <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
            <div className="relative flex-shrink-0">
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover"
                style={{ border: `2px solid ${GREEN}44` }}
              />
              <div
                className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-black"
                style={{ background: GREEN }}
              />
            </div>

            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
                style={{ color: GREEN, borderColor: `${GREEN}44`, background: `${GREEN}12` }}
              >
                {member.department === "leadership" ? "Liderança" : "Time"}
              </div>
              <h1
                className="font-extrabold mb-2 leading-tight"
                style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.025em" }}
              >
                {member.name}
              </h1>
              <p className="text-lg font-semibold mb-4" style={{ color: GREEN }}>
                {member.role}
              </p>
              <div className="flex items-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-white/10 hover:border-white/25 transition-all text-white/60 hover:text-white"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-white/10 hover:border-white/25 transition-all text-white/60 hover:text-white"
                  >
                    <Github size={15} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <FadeUp delay={0.05} className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GREEN }}>Sobre</h2>
            <p className="text-white/65 leading-relaxed text-base mb-10">{member.longBio}</p>

            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GREEN }}>Destaques de Carreira</h2>
            <div className="flex flex-col gap-3">
              {member.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                  <span className="text-white/65 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Skills sidebar */}
          <FadeUp delay={0.12}>
            <div
              className="p-6 rounded-2xl border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: GREEN }}>Especialidades</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
                    style={{ borderColor: `${GREEN}33`, background: `${GREEN}0d`, color: "rgba(255,255,255,0.75)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
