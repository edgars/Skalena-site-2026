import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/clientes", label: "Clientes" },
  { href: "/estrategia-digital", label: "Estratégia Digital" },
  { href: "/blackduck", label: "Black Duck" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <img 
            src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png" 
            alt="Skalena Logo" 
            className="h-8 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-white/70"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contato" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-10 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-0 flex flex-col pt-24 px-6 lg:hidden">
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold font-['Space_Grotesk'] ${location === link.href ? "text-primary" : "text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8">
                <Link 
                  href="/contato" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium text-lg w-full text-center"
                >
                  Fale Conosco
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}