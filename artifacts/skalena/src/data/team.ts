export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department: "leadership" | "team";
  photo: string;
  shortBio: string;
  longBio: string;
  linkedin?: string;
  github?: string;
  skills: string[];
  highlights: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "rodolfo-dino",
    name: "Rodolfo Dino",
    role: "CEO & Fundador",
    department: "leadership",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    shortBio: "Visionário em transformação digital, lidera a Skalena com foco em tecnologia, pessoas e inovação contínua.",
    longBio: "Nascido no Brasil e formado em Ciência da Computação, Rodolfo passou os primeiros anos de carreira descobrindo os bastidores dos grandes sistemas que movem o país — e os problemas que ninguém queria resolver. A metodologia RNC (Reengineering New Code) nasceu dessa observação: havia uma forma melhor, mais rápida e mais inteligente de modernizar sistemas críticos. Com mais de 15 anos de experiência no setor, Rodolfo liderou projetos em Embrapa, Petrobras, Banco do Brasil e diversas outras grandes organizações brasileiras. Sua visão é tornar a Skalena uma empresa que exporta tecnologia e talentos brasileiros para o mundo.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    github: "https://github.com/skalena",
    skills: ["Arquitetura de Software", "Modernização de Legados", "Inteligência Artificial", "Gestão Estratégica"],
    highlights: [
      "Criador da Metodologia RNC",
      "15+ anos de experiência em TI",
      "Projetos em Embrapa, Petrobras, BB",
      "Palestrante em eventos de tecnologia",
    ],
  },
  {
    slug: "ana-clara-moreira",
    name: "Ana Clara Moreira",
    role: "CTO",
    department: "leadership",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    shortBio: "Especialista em arquitetura de software e sistemas distribuídos. Referência em modernização de legados.",
    longBio: "Ana Clara é uma das principais referências em arquitetura de software do Brasil. Com doutorado em Ciência da Computação pela USP e experiência em empresas como Thoughtworks e CI&T, ela trouxe para a Skalena uma visão de excelência técnica que permeia todas as entregas. Especializada em sistemas distribuídos, microsserviços e arquitetura orientada a eventos, Ana lidera o time de engenharia com uma combinação rara de visão estratégica e profundidade técnica.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    github: "https://github.com/skalena",
    skills: ["Arquitetura Distribuída", "Microsserviços", "API Management", "DevSecOps"],
    highlights: [
      "Doutorado em Ciência da Computação - USP",
      "Ex-Thoughtworks e CI&T",
      "Certificada em AWS e GCP",
      "Especialista em API Management",
    ],
  },
  {
    slug: "felipe-goncalves",
    name: "Felipe Gonçalves",
    role: "Head de Engenharia",
    department: "leadership",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    shortBio: "Mais de 15 anos construindo sistemas críticos para o governo e o setor financeiro brasileiro.",
    longBio: "Felipe iniciou sua carreira como desenvolvedor Java em empresas de software para o governo federal e, ao longo de 15 anos, acumulou experiência em sistemas críticos de alta disponibilidade. Na Skalena, ele comanda o time de engenharia, definindo padrões de qualidade, processos de desenvolvimento e a aplicação da metodologia RNC nos projetos mais complexos. Sua abordagem combina rigor técnico com agilidade, garantindo que cada entrega supere as expectativas do cliente.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    github: "https://github.com/skalena",
    skills: ["Java", "Spring Boot", "Kubernetes", "DevOps", "CI/CD"],
    highlights: [
      "15+ anos em sistemas governamentais",
      "Expert em alta disponibilidade",
      "Certificado Kubernetes (CKA)",
      "Líder de mais de 50 projetos entregues",
    ],
  },
  {
    slug: "juliana-matos",
    name: "Juliana Matos",
    role: "Head de Design & UX",
    department: "leadership",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    shortBio: "Transforma requisitos complexos em experiências digitais claras, inclusivas e memoráveis.",
    longBio: "Juliana tem uma missão clara: fazer com que tecnologia complexa pareça simples para quem a usa. Com formação em Design pela ESDI e especialização em UX pela Interaction Design Foundation, ela construiu sua carreira trabalhando em produtos digitais que servem milhões de brasileiros. Na Skalena, ela lidera a prática de design e experiência do usuário, garantindo que cada produto entregue seja não apenas funcional, mas verdadeiramente encantador.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    skills: ["UX Research", "Design de Produto", "Figma", "Design System", "Acessibilidade"],
    highlights: [
      "Formação em Design - ESDI",
      "Especialização em UX - IDF",
      "Portfólio com 30+ produtos entregues",
      "Palestrante em UX Conf Brasil",
    ],
  },
  {
    slug: "carlos-ribeiro",
    name: "Carlos Ribeiro",
    role: "Arquiteto de Soluções",
    department: "team",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    shortBio: "Especialista em open source, Kubernetes e ecossistemas cloud. Referência em segurança e DevSecOps.",
    longBio: "Carlos é o guardião das infraestruturas na Skalena. Com vasta experiência em ambientes cloud e open source, ele garante que os sistemas entregues sejam escaláveis, seguros e eficientes. Seu trabalho com Kubernetes, Rancher e ferramentas de segurança como Black Duck é fundamental para a qualidade dos projetos mais críticos da empresa.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    github: "https://github.com/skalena",
    skills: ["Kubernetes", "Rancher", "Black Duck", "Terraform", "Cloud Security"],
    highlights: [
      "Certified Kubernetes Administrator",
      "Especialista Black Duck SCA",
      "Expert em infraestrutura como código",
      "5+ anos em ambientes cloud críticos",
    ],
  },
  {
    slug: "mariana-torres",
    name: "Mariana Torres",
    role: "Gerente de Projetos",
    department: "team",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    shortBio: "PMO certificada com experiência em grandes entregas ágeis para Embrapa, Petrobras e Serpro.",
    longBio: "Mariana transforma caos em clareza. Com certificação PMP e Scrum Master, ela é responsável por garantir que cada projeto da Skalena seja entregue no prazo, dentro do orçamento e com qualidade máxima. Sua experiência em gestão de projetos complexos para grandes clientes como Embrapa e Petrobras a torna uma peça fundamental na operação da empresa.",
    linkedin: "https://www.linkedin.com/company/skalena/",
    skills: ["Scrum", "Kanban", "PMBOK", "Gestão de Riscos", "OKRs"],
    highlights: [
      "PMP + Scrum Master certificada",
      "Projetos em Embrapa e Petrobras",
      "Gestão de times de até 30 pessoas",
      "100% de projetos entregues no prazo",
    ],
  },
  {
    slug: "lucas-mendes",
    name: "Lucas Mendes",
    role: "Engenheiro de Software Sênior",
    department: "team",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    shortBio: "Desenvolvedor full-stack com foco em modernização e integração de sistemas legados.",
    longBio: "Lucas é um dos pilares técnicos da metodologia RNC em ação. Com expertise em múltiplas linguagens e frameworks, ele transita com facilidade entre o código legado e as tecnologias modernas, sendo peça chave nas maiores transformações de sistemas que a Skalena conduz.",
    github: "https://github.com/skalena",
    linkedin: "https://www.linkedin.com/company/skalena/",
    skills: ["Java", "Node.js", "Python", "React", "Microsserviços"],
    highlights: [
      "10+ anos de desenvolvimento",
      "Expert em migração de sistemas",
      "Contribuidor open source",
      "Speaker em JavaOne Brasil",
    ],
  },
  {
    slug: "fernanda-lima",
    name: "Fernanda Lima",
    role: "Desenvolvedora Frontend Sênior",
    department: "team",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    shortBio: "Especialista em React e design systems, constrói interfaces que encantam e performam.",
    longBio: "Fernanda combina habilidade técnica com sensibilidade de design para construir interfaces que realmente funcionam para os usuários. Com experiência em grandes produtos digitais e sólido conhecimento em acessibilidade e performance web, ela eleva o padrão de qualidade das entregas de frontend na Skalena.",
    github: "https://github.com/skalena",
    linkedin: "https://www.linkedin.com/company/skalena/",
    skills: ["React", "TypeScript", "Design System", "Acessibilidade", "Performance Web"],
    highlights: [
      "8+ anos em desenvolvimento frontend",
      "Criadora do Design System interno",
      "Especialista em Web Accessibility",
      "Google Developer Expert Alumni",
    ],
  },
  {
    slug: "bruno-cardoso",
    name: "Bruno Cardoso",
    role: "Engenheiro DevOps",
    department: "team",
    photo: "https://randomuser.me/api/portraits/men/79.jpg",
    shortBio: "Especialista em pipelines CI/CD, automação e infraestrutura resiliente em cloud.",
    longBio: "Bruno é quem garante que o código chegue em produção com rapidez, segurança e qualidade. Com experiência em ambientes de alta criticidade, ele projeta e opera pipelines de integração e entrega contínua que permitem à Skalena entregar software com confiança e velocidade.",
    github: "https://github.com/skalena",
    linkedin: "https://www.linkedin.com/company/skalena/",
    skills: ["Docker", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"],
    highlights: [
      "Redução de 60% no tempo de deploy",
      "Expert em observabilidade",
      "AWS Certified DevOps Professional",
      "N8N workflows automation specialist",
    ],
  },
];

export function getMember(slug: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((m) => m.slug === slug);
}
