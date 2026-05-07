import { ChevronRight, Home } from "lucide-react";

const GREEN = "#0cfa64";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const all: Crumb[] = [{ label: "Início", href: `${base}/` }, ...crumbs];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs text-white/35 flex-wrap"
    >
      {all.map((crumb, i) => {
        const isLast = i === all.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i === 0 && (
              <Home
                size={11}
                className="opacity-60"
                style={{ color: isLast ? "rgba(255,255,255,0.6)" : undefined }}
              />
            )}
            {crumb.href && !isLast ? (
              <a
                href={crumb.href}
                className="hover:text-white/70 transition-colors duration-150 font-medium"
              >
                {crumb.label}
              </a>
            ) : (
              <span
                className="font-semibold"
                style={{ color: isLast ? "rgba(255,255,255,0.6)" : undefined }}
              >
                {crumb.label}
              </span>
            )}
            {!isLast && (
              <ChevronRight size={10} className="opacity-30 flex-shrink-0" />
            )}
          </span>
        );
      })}
    </nav>
  );
}
