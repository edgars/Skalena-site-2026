import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

const GREEN = "#0cfa64";

const HASH_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#clientes", label: "Clientes" },
  { href: "#advisory", label: "Advisory" },
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
  const [mobileEmpresaOpen, setMobileEmpresaOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPagesOpen(false);
    setMobileEmpresaOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const navHref = (path: string) => `${base}${path}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-black/95 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href={navHref("/")} className="flex-shrink-0 z-10">
            <img
              src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png"
              alt="Skalena"
              className="h-6 sm:h-7 object-contain"
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

            {/* Empresa dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors font-medium"
                onClick={() => setPagesOpen((p) => !p)}
                onBlur={() => setTimeout(() => setPagesOpen(false), 150)}
              >
                Empresa{" "}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2.5 w-48 rounded-xl border border-white/[0.08] py-1.5 z-50 overflow-hidden"
                    style={{ background: "#0e0e0e" }}
                  >
                    {PAGE_LINKS.map((l) => (
                      <a
                        key={l.href}
                        href={navHref(l.href)}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                      >
                        {l.label}
                        <ChevronRight size={12} className="opacity-30" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={(e) => handleHashLink(e as unknown as React.MouseEvent, "#contato")}
              className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-85 active:scale-95"
              style={{ background: GREEN, color: "#000" }}
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-10 flex items-center justify-center w-9 h-9 rounded-lg text-white transition-colors hover:bg-white/[0.06]"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — outside header so z-index is clean */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto md:hidden"
            style={{ background: "#000" }}
          >
            <div className="flex flex-col px-5 pt-6 pb-10 gap-1 flex-1">
              {/* Hash links */}
              {HASH_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.04, duration: 0.2 }}
                  href={isHome ? l.href : navHref(`/${l.href}`)}
                  onClick={(e) => handleHashLink(e, l.href)}
                  className="flex items-center justify-between py-4 border-b border-white/[0.06] text-base font-semibold text-white/75 hover:text-white transition-colors"
                >
                  {l.label}
                  <ChevronRight size={15} className="text-white/20" />
                </motion.a>
              ))}

              {/* Empresa accordion */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 + HASH_LINKS.length * 0.04, duration: 0.2 }}
                className="border-b border-white/[0.06]"
              >
                <button
                  className="w-full flex items-center justify-between py-4 text-base font-semibold text-white/75 hover:text-white transition-colors"
                  onClick={() => setMobileEmpresaOpen((o) => !o)}
                >
                  Empresa
                  <ChevronDown
                    size={15}
                    className={`text-white/30 transition-transform duration-200 ${mobileEmpresaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileEmpresaOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-2">
                        {PAGE_LINKS.map((l) => (
                          <a
                            key={l.href}
                            href={navHref(l.href)}
                            className="flex items-center gap-3 py-3 pl-4 text-sm font-medium text-white/50 hover:text-white transition-colors"
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: GREEN }}
                            />
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="flex-1" />

              {/* CTA button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.22 }}
                onClick={(e) => handleHashLink(e as unknown as React.MouseEvent, "#contato")}
                className="mt-6 w-full py-4 rounded-xl text-base font-bold transition-all active:scale-95"
                style={{ background: GREEN, color: "#000" }}
              >
                Fale Conosco
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
