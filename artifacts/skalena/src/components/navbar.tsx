import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#clientes", label: "Clientes" },
  { href: "#blackduck", label: "Black Duck" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black border-b border-white/[0.06] py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }} className="relative z-10 flex items-center">
          <img 
            src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png" 
            alt="Skalena Logo" 
            className="h-8 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-[13px] uppercase tracking-wider font-light transition-colors text-white/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}
            className="bg-white text-black px-6 py-2 rounded-sm text-[13px] uppercase tracking-wider font-medium hover:bg-white/90 transition-colors"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-10 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-0 flex flex-col pt-24 px-6 lg:hidden">
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-2xl font-light text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 border-t border-white/[0.06] pt-8">
                <a 
                  href="#contato" 
                  onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}
                  className="inline-block bg-white text-black px-8 py-4 rounded-sm font-medium text-lg w-full text-center"
                >
                  Fale Conosco
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}