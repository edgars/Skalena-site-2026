import { type ReactNode } from "react";

export interface Solution {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  useCases: string[];
  tools?: string[];
  cta: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "rnc",
    id: "01",
    shortTitle: "RNC",
    title: "Modernização de Legados — RNC",
    subtitle: "Reengineering New Code com Inteligência Artificial",
    shortDesc: "Reengineering New Code para legados complexos com IA.",
    longDesc:
      "A metodologia RNC (Reengineering New Code) é o coração da Skalena e representa mais de uma década de aprendizado transformando sistemas críticos em todo o Brasil. Com IA generativa integrada ao processo, analisamos, mapeamos e reescrevemos sistemas legados preservando 100% da lógica de negócio — eliminando dívida técnica sem interromper operações.",
    benefits: [
      "Até 70% de redução no tempo de modernização vs. reescrita manual",
      "40–50% de redução nos custos totais de desenvolvimento",
      "Compatível com qualquer linguagem e framework de origem",
      "Destino: Java, Node.js, Python, Go, .NET e mais",
      "Zero downtime durante a transição",
      "Rastreabilidade total entre código legado e código novo",
    ],
    features: [
      {
        title: "Análise Automatizada por IA",
        desc: "Modelos de linguagem treinados identificam padrões, dependências e lógica de negócio oculta no código legado em fração do tempo humano.",
      },
      {
        title: "Mapeamento de Dependências",
        desc: "Grafo completo de dependências entre módulos, banco de dados, integrações e interfaces para uma modernização sem surpresas.",
      },
      {
        title: "Migração Incremental",
        desc: "Abordagem strangler fig que permite modernizar componente por componente, com o legado e o novo sistema rodando em paralelo.",
      },
      {
        title: "Validação Contínua",
        desc: "Suítes de testes gerados automaticamente garantem que o comportamento do novo sistema seja idêntico ao do original.",
      },
    ],
    useCases: [
      "Sistemas COBOL bancários e governamentais",
      "Aplicações Delphi e Visual Basic legadas",
      "Monolíticos Java EE para microsserviços",
      "Sistemas mainframe para cloud-native",
      "ERPs customizados sem documentação",
    ],
    tools: ["GPT-4o", "Claude", "Java", "Spring Boot", "Kubernetes", "PostgreSQL"],
    cta: "Agende uma análise gratuita do seu legado",
  },
  {
    slug: "api-management",
    id: "02",
    shortTitle: "API Management",
    title: "API Management",
    subtitle: "Governança, segurança e escalabilidade de APIs",
    shortDesc: "Controle total sobre dados, integrações e governança.",
    longDesc:
      "APIs são a espinha dorsal da empresa digital moderna. A Skalena implementa e gerencia plataformas de API Management enterprise com as ferramentas líderes do mercado — conectando ecossistemas, garantindo segurança e dando visibilidade total sobre o tráfego de dados da sua organização.",
    benefits: [
      "Gateway de alta performance com latência sub-10ms",
      "Autenticação, autorização e políticas de segurança centralizadas",
      "Rate limiting, quotas e controle de uso por consumidor",
      "Portal de developer experience para parceiros e times internos",
      "Monetização de APIs com planos e analytics de uso",
      "Suporte a REST, GraphQL, gRPC e WebSockets",
    ],
    features: [
      {
        title: "KrakenD Gateway",
        desc: "O gateway open source mais rápido do mercado, com throughput de mais de 1 milhão de req/s em hardware commodity.",
      },
      {
        title: "Apiable & NASPH",
        desc: "Plataformas de developer portal e monetização de APIs com experiência de classe mundial para consumidores internos e externos.",
      },
      {
        title: "Observabilidade Total",
        desc: "Dashboards em tempo real com métricas de latência, erros, uso por endpoint e alertas configuráveis via Prometheus e Grafana.",
      },
      {
        title: "Segurança de Ponta",
        desc: "OAuth2, OpenID Connect, JWT, mTLS e WAF integrados para proteger todas as superfícies de exposição das suas APIs.",
      },
    ],
    useCases: [
      "Abertura de APIs bancárias (Open Banking/Finance)",
      "Integração de ecossistemas de parceiros",
      "Migração de integrações point-to-point para hub central",
      "Exposição de dados governamentais (Open Data)",
      "Plataformas de marketplace e B2B",
    ],
    tools: ["KrakenD", "Apiable", "NASPH", "API7", "Kong", "Prometheus", "Grafana"],
    cta: "Fale sobre sua estratégia de APIs",
  },
  {
    slug: "black-duck",
    id: "03",
    shortTitle: "Black Duck",
    title: "Segurança com Black Duck",
    subtitle: "SCA líder global para DevSecOps",
    shortDesc: "Auditoria e compliance de software em tempo real.",
    longDesc:
      "Como parceiros certificados Black Duck — a plataforma SCA (Software Composition Analysis) líder global — entregamos visibilidade completa sobre todos os componentes open-source em qualquer aplicação. Identificamos vulnerabilidades, riscos de licenciamento e problemas de conformidade antes que cheguem à produção.",
    benefits: [
      "Visibilidade total do inventário open-source (SBOM)",
      "Detecção de CVEs e vulnerabilidades em tempo real",
      "Análise de riscos de licenciamento (GPL, LGPL, MIT etc.)",
      "Integração nativa com GitHub, GitLab, Jenkins e Azure DevOps",
      "Relatórios prontos para auditorias e compliance",
      "Políticas automatizadas para bloquear componentes críticos",
    ],
    features: [
      {
        title: "Software Composition Analysis (SCA)",
        desc: "Identifica e rastreia cada componente open-source, sua versão, licença e histórico de vulnerabilidades.",
      },
      {
        title: "SAST — Static Analysis",
        desc: "Análise estática de código-fonte e Infrastructure as Code para detectar falhas de segurança antes do merge.",
      },
      {
        title: "DAST — Dynamic Testing",
        desc: "Testes dinâmicos em Web Apps e APIs em execução para descobrir vulnerabilidades que análise estática não detecta.",
      },
      {
        title: "Pipeline Integration",
        desc: "Scans automáticos em cada commit e pull request, com gates de qualidade configuráveis e notificações integradas.",
      },
    ],
    useCases: [
      "Auditorias de segurança para M&A (due diligence tecnológica)",
      "Compliance LGPD, PCI-DSS, ISO 27001",
      "DevSecOps em pipelines de CI/CD",
      "Gestão de vulnerabilidades em produtos SaaS",
      "Relatórios para BACEN, ANATEL e órgãos reguladores",
    ],
    tools: ["Black Duck", "Coverity", "GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
    cta: "Solicite uma demo do Black Duck",
  },
  {
    slug: "open-source",
    id: "04",
    shortTitle: "Open Source",
    title: "Open Source & Cloud",
    subtitle: "Kubernetes, Rancher, N8N e além",
    shortDesc: "Suporte e integração com o melhor do ecossistema livre.",
    longDesc:
      "O ecossistema open source representa hoje a infraestrutura de inovação do mundo. A Skalena oferece suporte especializado para as principais tecnologias abertas do mercado, ajudando empresas a adotar, operar e escalar essas ferramentas com segurança, eficiência e sem risco de lock-in com grandes fornecedores.",
    benefits: [
      "Eliminação de lock-in com fornecedores proprietários",
      "Redução de 40–60% nos custos de licenciamento",
      "Clusters Kubernetes de alta disponibilidade",
      "Automação de processos com N8N sem código",
      "Suporte a ambientes híbridos e multi-cloud",
      "Assessoria em licenciamento open-source",
    ],
    features: [
      {
        title: "Kubernetes & Rancher",
        desc: "Provisionamento, operação e monitoramento de clusters K8s em qualquer cloud. Rancher para gestão multi-cluster com visibilidade central.",
      },
      {
        title: "Automação com N8N",
        desc: "Plataforma de automação open-source para conectar sistemas, disparar fluxos e eliminar trabalho manual repetitivo sem código.",
      },
      {
        title: "Observabilidade",
        desc: "Stack completo com Prometheus, Grafana, Loki e Jaeger para métricas, logs, traces e alertas em tempo real.",
      },
      {
        title: "Migração Cloud",
        desc: "Lift-and-shift ou re-arquitectura cloud-native — migramos ambientes on-premise com segurança e plano de rollback.",
      },
    ],
    useCases: [
      "Migração de data centers para cloud pública/privada",
      "Adoção de Kubernetes em times de engenharia",
      "Automação de fluxos de RH, financeiro e operações",
      "Substituição de ferramentas proprietárias por open source",
      "Multi-cloud com governança central",
    ],
    tools: ["Kubernetes", "Rancher", "N8N", "Helm", "ArgoCD", "Terraform", "Prometheus", "Grafana"],
    cta: "Converse sobre sua infraestrutura",
  },
  {
    slug: "design-ux",
    id: "05",
    shortTitle: "Design & UX",
    title: "Agência Digital & UX",
    subtitle: "Estratégia, design e tecnologia unidos",
    shortDesc: "Interfaces projetadas para o comportamento humano.",
    longDesc:
      "Não fazemos sites bonitos — fazemos produtos digitais que funcionam. Nossa equipe une estratégia de produto, pesquisa com usuários, design de interface e desenvolvimento frontend para criar experiências que convertem, retêm e encantam. Do briefing ao deploy, com qualidade de produto de mercado.",
    benefits: [
      "Discovery baseado em dados reais de usuários",
      "Design systems escaláveis e componentizados",
      "Desenvolvimento frontend em React, Vue e Next.js",
      "Testes de usabilidade e otimização baseada em evidências",
      "Acessibilidade (WCAG 2.1 AA) como padrão",
      "Integração com APIs e backends existentes",
    ],
    features: [
      {
        title: "UX Research",
        desc: "Entrevistas, testes de usabilidade, análise de heatmaps e jornadas para entender o que seus usuários realmente precisam.",
      },
      {
        title: "Design de Produto",
        desc: "Do wireframe ao protótipo interativo em Figma — validamos conceitos antes de qualquer linha de código ser escrita.",
      },
      {
        title: "Design System",
        desc: "Biblioteca de componentes documentada que garante consistência visual e acelera o desenvolvimento em toda a organização.",
      },
      {
        title: "Desenvolvimento Frontend",
        desc: "Implementação em React, TypeScript e Tailwind com foco em performance, acessibilidade e manutenibilidade.",
      },
    ],
    useCases: [
      "Redesign de portais corporativos e intranets",
      "Criação de produtos digitais do zero",
      "Design system para times de engenharia",
      "Otimização de conversão em e-commerce e SaaS",
      "Apps mobile (React Native / Expo)",
    ],
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    cta: "Fale sobre seu projeto digital",
  },
  {
    slug: "estrategia-digital",
    id: "06",
    shortTitle: "Estratégia Digital",
    title: "Estratégia Digital",
    subtitle: "Transformação digital end-to-end",
    shortDesc: "Jornadas mapeadas para máximo impacto e crescimento.",
    longDesc:
      "Transformação digital não é projeto — é jornada. A Skalena atua como parceira estratégica, mapeando a maturidade digital da sua empresa, identificando oportunidades de inovação e construindo um roadmap claro e executável. Combinamos visão de negócio com profundidade técnica para garantir que cada iniciativa gere resultado real.",
    benefits: [
      "Diagnóstico de maturidade digital em 2 semanas",
      "Roadmap com iniciativas priorizadas por impacto e esforço",
      "Adoção de IA generativa no core do negócio",
      "Treinamento e capacitação de equipes internas",
      "Governança de dados e arquitetura de informação",
      "KPIs e OKRs alinhados aos objetivos estratégicos",
    ],
    features: [
      {
        title: "Diagnóstico Digital",
        desc: "Avaliação rápida e estruturada de processos, sistemas, cultura e capacidades digitais com benchmark do setor.",
      },
      {
        title: "Roadmap de Transformação",
        desc: "Plano de execução priorizado por impacto de negócio e capacidade de entrega — sem projetos grandiosos que nunca terminam.",
      },
      {
        title: "Adoção de IA",
        desc: "Identificamos casos de uso de IA com ROI claro e implementamos pilotos que evoluem para soluções em produção.",
      },
      {
        title: "Change Management",
        desc: "Suporte à mudança organizacional, treinamentos e comunicação interna para garantir adoção real das novas ferramentas.",
      },
    ],
    useCases: [
      "Empresas tradicionais iniciando transformação digital",
      "Startups escalando processos e tecnologia",
      "Governo digital — modernização de serviços públicos",
      "Fusões e aquisições com integração tecnológica",
      "Implementação de IA em setores regulados",
    ],
    tools: ["Miro", "Notion", "OKR Frameworks", "Lean Inception", "Design Thinking", "GPT-4o"],
    cta: "Agende um diagnóstico gratuito",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
