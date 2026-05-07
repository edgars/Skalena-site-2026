import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src="https://static.wixstatic.com/media/6bd302_65a195346d254ab58d599d2e0b498f3e~mv2.png/v1/fill/w_1200,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-branca.png" 
              alt="Skalena" 
              className="h-8 mb-6"
            />
            <p className="text-white/60 max-w-sm leading-relaxed">
              Consultoria especializada em modernização de software, API management, infraestrutura open-source e estratégia digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link href="/sobre" className="text-white/60 hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/solucoes" className="text-white/60 hover:text-primary transition-colors">Soluções</Link></li>
              <li><Link href="/clientes" className="text-white/60 hover:text-primary transition-colors">Clientes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li><Link href="/estrategia-digital" className="text-white/60 hover:text-primary transition-colors">Estratégia Digital</Link></li>
              <li><Link href="/blackduck" className="text-white/60 hover:text-primary transition-colors">Black Duck</Link></li>
              <li><Link href="/contato" className="text-white/60 hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Skalena. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:contato@skalena.com.br" className="text-white/40 hover:text-white transition-colors text-sm">contato@skalena.com.br</a>
          </div>
        </div>
      </div>
    </footer>
  );
}