import { useLocation } from "wouter";

const GREEN = "#0cfa64";

const QUICK_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#clientes", label: "Clientes" },
  { href: "#blackduck", label: "Black Duck" },
  { href: "#contato", label: "Contato" },
];

const COMPANY_LINKS = [
  { href: "/equipe", label: "Nossa Equipe" },
  { href: "/fundador", label: "Fundador" },
  { href: "/solucoes-detalhes", label: "Soluções em Detalhe" },
  { href: "/privacidade", label: "Política de Privacidade" },
];

export function Footer() {
  const [location] = useLocation();
  const isHome = location === "/" || location === "";
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `${base}/${href}`;
    }
  };

  return (
    <footer className="bg-black border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href={`${base}/`}>
              <img
                src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png"
                alt="Skalena"
                className="h-7 object-contain mb-4 opacity-80"
              />
            </a>
            <p className="text-white/40 text-xs leading-relaxed mb-5">
              Empresa brasileira que transforma legados em infraestrutura digital moderna.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/skalena/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/skalena"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">Navegação</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={isHome ? l.href : `${base}/${l.href}`}
                    onClick={(e) => handleHashLink(e, l.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">Empresa</h3>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={`${base}${l.href}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + fiscal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">Endereço</h3>
            <address className="not-italic text-sm text-white/50 leading-relaxed mb-5">
              Avenida Paulista 1471<br />
              Conj 511 — Bela Vista<br />
              01311-927 — São Paulo — SP
            </address>
            <a
              href="mailto:contato@skalena.com.br"
              className="text-sm font-semibold hover:opacity-80 transition-opacity block mb-1"
              style={{ color: GREEN }}
            >
              contato@skalena.com.br
            </a>
            <a
              href="mailto:dpo@skalena.com.br"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              dpo@skalena.com.br
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            {/* Fiscal info */}
            <div className="text-xs text-white/25 leading-relaxed space-y-0.5">
              <p className="font-semibold text-white/35">Skalena Tecnologia e Software LTDA</p>
              <p>CNPJ: 39.824.075/0001-22 &nbsp;·&nbsp; NIRE: 35.2.3657567-7 &nbsp;·&nbsp; IE: 138275105119</p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/25 flex-shrink-0">
              © 2018 — {new Date().getFullYear()} Skalena. Todos os Direitos Reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
