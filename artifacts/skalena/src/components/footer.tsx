export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png"
          alt="Skalena"
          className="h-6 object-contain opacity-60"
        />
        <div className="flex items-center gap-8">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#solucoes", label: "Soluções" },
            { href: "#clientes", label: "Clientes" },
            { href: "#contato", label: "Contato" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-white/30">
          © 2025 Skalena. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
