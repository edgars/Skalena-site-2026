export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img 
          src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png" 
          alt="Skalena" 
          className="h-6 opacity-70"
        />
        <p className="text-muted-foreground text-sm font-light">
          © 2025 Skalena. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}