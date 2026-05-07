const GREEN = "#0cfa64";

interface Client {
  name: string;
  domain: string;
  url?: string;
}

const CLIENTS: Client[] = [
  { name: "Embrapa",        domain: "embrapa.br",         url: "https://www.embrapa.br" },
  { name: "Petrobras",      domain: "petrobras.com.br",   url: "https://petrobras.com.br" },
  { name: "Banco do Brasil",domain: "bb.com.br",          url: "https://bb.com.br" },
  { name: "Serpro",         domain: "serpro.gov.br",      url: "https://serpro.gov.br" },
  { name: "Caixa Econômica",domain: "caixa.gov.br",       url: "https://caixa.gov.br" },
  { name: "Totvs",          domain: "totvs.com",          url: "https://totvs.com" },
  { name: "Stefanini",      domain: "stefanini.com",      url: "https://stefanini.com" },
  { name: "CI&T",           domain: "ciandt.com",         url: "https://ciandt.com" },
  { name: "Senior Sistemas",domain: "senior.com.br",      url: "https://senior.com.br" },
];

function LogoItem({ client }: { client: Client }) {
  const inner = (
    <div
      className="logo-item flex items-center justify-center px-8 py-5 rounded-2xl border border-white/[0.07] mx-3 transition-all duration-300 cursor-pointer select-none"
      style={{
        background: "rgba(255,255,255,0.025)",
        minWidth: 160,
        height: 80,
      }}
    >
      <img
        src={`https://logo.clearbit.com/${client.domain}`}
        alt={client.name}
        className="logo-img h-8 max-w-[120px] object-contain transition-all duration-300"
        style={{ filter: "grayscale(1) brightness(0.5)", opacity: 0.6 }}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          img.style.display = "none";
          const span = img.nextSibling as HTMLElement;
          if (span) span.style.display = "block";
        }}
      />
      <span
        className="logo-label text-sm font-semibold text-white/40 transition-all duration-300"
        style={{ display: "none" }}
      >
        {client.name}
      </span>
    </div>
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const container = e.currentTarget as HTMLElement;
    const box = container.querySelector(".logo-item") as HTMLElement | null;
    const img = container.querySelector(".logo-img") as HTMLImageElement | null;
    const label = container.querySelector(".logo-label") as HTMLElement | null;
    if (box) {
      box.style.borderColor = `${GREEN}55`;
      box.style.background = `${GREEN}0d`;
      box.style.boxShadow = `0 0 24px ${GREEN}22`;
    }
    if (img) {
      img.style.filter = "grayscale(0) brightness(1.1)";
      img.style.opacity = "1";
    }
    if (label) label.style.color = GREEN;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const container = e.currentTarget as HTMLElement;
    const box = container.querySelector(".logo-item") as HTMLElement | null;
    const img = container.querySelector(".logo-img") as HTMLImageElement | null;
    const label = container.querySelector(".logo-label") as HTMLElement | null;
    if (box) {
      box.style.borderColor = "rgba(255,255,255,0.07)";
      box.style.background = "rgba(255,255,255,0.025)";
      box.style.boxShadow = "none";
    }
    if (img) {
      img.style.filter = "grayscale(1) brightness(0.5)";
      img.style.opacity = "0.6";
    }
    if (label) label.style.color = "rgba(255,255,255,0.4)";
  };

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={client.name}
      >
        {inner}
      </a>
    );
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {inner}
    </div>
  );
}

export function LogoCarousel() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
      <div
        className="flex items-center carousel-track"
        style={{
          animation: "marquee 36s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
        }}
      >
        {track.map((c, i) => (
          <LogoItem key={`${c.domain}-${i}`} client={c} />
        ))}
      </div>
    </div>
  );
}
