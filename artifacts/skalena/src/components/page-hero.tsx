import { HeroCanvas } from "@/components/hero-canvas";
import { Breadcrumb, type Crumb } from "@/components/breadcrumb";

const GREEN = "#0cfa64";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
}

export function PageHero({ label, title, subtitle, crumbs }: PageHeroProps) {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "62vh", paddingTop: "80px" }}
    >
      <HeroCanvas />

      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: "min(700px, 90vw)", height: "55%",
          background: `radial-gradient(ellipse at center, ${GREEN}44 0%, ${GREEN}18 40%, transparent 70%)`,
          filter: "blur(55px)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
        {crumbs && crumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb crumbs={crumbs} />
          </div>
        )}

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 border"
          style={{ background: `${GREEN}18`, borderColor: `${GREEN}44`, color: GREEN }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: GREEN }} />
          {label}
        </div>

        <h1
          className="font-extrabold leading-[1.08] mb-5 text-white"
          style={{ fontSize: "clamp(36px, 7vw, 76px)", letterSpacing: "-0.03em" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-white/50 max-w-xl"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
