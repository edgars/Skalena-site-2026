import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

const GREEN = "#0cfa64";

const HASH_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#clientes", label: "Clientes" },
  { href: "#blackduck", label: "Black Duck" },
  { href: "#contato", label: "Contato" },
];

const PAGE_LINKS = [
  { href: "/equipe", label: "Equipe" },
  { href: "/fundador", label: "Fundador" },
  { href: "/solucoes-detalhes", label: "Soluções" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setPagesOpen(false); }, [location]);

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    if (isHome) {
      e.preventDefault();
      setOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home then scroll
      window.location.href = `/${href}`;
    }
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const navHref = (path: string) => `${base}${path}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={navHref("/")} className="flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png"
            alt="Skalena"
            className="h-7 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {HASH_LINKS.map((l) => (
            <a
              key={l.href}
              href={isHome ? l.href : navHref(`/${l.href}`)}
              onClick={(e) => handleHashLink(e, l.href)}
              className="text-sm text-white/55 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}

          {/* Pages dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors font-medium"
              onClick={() => setPagesOpen((p) => !p)}
              onBlur={() => setTimeout(() => setPagesOpen(false), 150)}
            >
              Empresa <ChevronDown size={14} className={`transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
            </button>
            {pagesOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-44 rounded-xl border border-white/[0.08] py-2 z-50"
                style={{ background: "#111" }}
              >
                {PAGE_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={navHref(l.href)}
                    className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={(e) => handleHashLink(e as unknown as React.MouseEvent, "#contato")}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-85"
            style={{ background: GREEN, color: "#000" }}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-black z-40 flex flex-col px-6 pt-8 gap-5 overflow-y-auto">
          {HASH_LINKS.map((l) => (
            <a
              key={l.href}
              href={isHome ? l.href : navHref(`/${l.href}`)}
              onClick={(e) => handleHashLink(e, l.href)}
              className="text-xl font-semibold text-white/80"
            >
              {l.label}
            </a>
          ))}

          <div className="border-t border-white/[0.07] pt-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/30">Empresa</span>
            {PAGE_LINKS.map((l) => (
              <a key={l.href} href={navHref(l.href)} className="text-xl font-semibold text-white/80">
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={(e) => handleHashLink(e as unknown as React.MouseEvent, "#contato")}
            className="mt-4 w-full py-4 rounded-xl text-lg font-semibold"
            style={{ background: GREEN, color: "#000" }}
          >
            Fale Conosco
          </button>
        </div>
      )}
    </header>
  );
}
