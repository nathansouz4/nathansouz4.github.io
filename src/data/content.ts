// All site copy lives here. Edit this file to update the portfolio.
export type Lang = "en" | "pt";

type Localized = Record<Lang, string>;

export const profile = {
  name: "Nathan Souza",
  handle: "nathansouz4",
  location: { en: "Natal, Brazil", pt: "Natal, Brasil" } as Localized,
  links: {
    github: "https://github.com/nathansouz4",
    linkedin: "https://www.linkedin.com/in/n4thansouza/",
    lattes: "https://wwws.cnpq.br/cvlattesweb/PKG_MENU.menu?f_cod=42D80B93244182AF58A3F9600B7B8DCF",
    // Set to an address to show an email button in the contact section.
    email: "",
  },
};

export const ui = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", research: "Research", stack: "Stack", contact: "Contact" },
    role: "Data Engineer · Analytics Engineer",
    headline: "I build the pipelines, models and data products that turn raw operational data into decisions.",
    sub: "Data engineering at the core, with a full-stack web background and a data science research track. I own data end to end: ingestion, modeling, quality, and the app people actually use.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    available: "Open to Data Engineering roles",
    sections: {
      about: "about",
      experience: "experience",
      projects: "projects",
      research: "research",
      stack: "stack",
      contact: "contact",
    },
    aboutTitle: "From electrical engineering to data platforms",
    experienceTitle: "Where I've shipped",
    projectsTitle: "Selected work",
    researchTitle: "Research & publications",
    stackTitle: "Stack, by pipeline stage",
    contactTitle: "Let's build something reliable",
    contactText: "I'm interested in data engineering and analytics engineering roles, remote or hybrid. The fastest way to reach me is LinkedIn.",
    present: "present",
    code: "Code",
    live: "Live",
    private: "Private",
    footer: "Built with Astro and Tailwind. Deployed with GitHub Actions.",
    switchLang: "PT",
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", research: "Pesquisa", stack: "Stack", contact: "Contato" },
    role: "Engenheiro de Dados · Analytics Engineer",
    headline: "Construo os pipelines, modelos e produtos de dados que transformam dados operacionais brutos em decisão.",
    sub: "Engenharia de dados no centro, com bagagem forte em desenvolvimento web full-stack e uma trilha de pesquisa em ciência de dados. Cuido do dado de ponta a ponta: ingestão, modelagem, qualidade e o app que as pessoas de fato usam.",
    ctaProjects: "Ver projetos",
    ctaContact: "Fale comigo",
    available: "Aberto a vagas de Engenharia de Dados",
    sections: {
      about: "sobre",
      experience: "experiencia",
      projects: "projetos",
      research: "pesquisa",
      stack: "stack",
      contact: "contato",
    },
    aboutTitle: "Da engenharia elétrica às plataformas de dados",
    experienceTitle: "Onde entreguei",
    projectsTitle: "Trabalhos selecionados",
    researchTitle: "Pesquisa e publicações",
    stackTitle: "Stack, por etapa do pipeline",
    contactTitle: "Vamos construir algo confiável",
    contactText: "Tenho interesse em vagas de engenharia de dados e analytics engineering, remotas ou híbridas. O jeito mais rápido de falar comigo é pelo LinkedIn.",
    present: "atual",
    code: "Código",
    live: "Online",
    private: "Privado",
    footer: "Feito com Astro e Tailwind. Deploy com GitHub Actions.",
    switchLang: "EN",
  },
} as const;

export const about: Record<Lang, string[]> = {
  en: [
    "I'm an electrical engineer from UFRN with an exchange period at ENSEEIHT (Toulouse INP) in France, and a master's degree from PPGEEC/UFRN focused on deep learning for time series.",
    "Over the last years I moved from building web apps to building the data behind them. Today I design event-driven pipelines on AWS, model analytical marts on Databricks, and ship the dashboards and internal tools that sit on top of them.",
    "Having shipped full-stack products (React, TypeScript, PostgreSQL) makes me a data engineer who thinks about the consumer of the data: contracts, latency, and whether the number on the screen can be trusted.",
  ],
  pt: [
    "Sou engenheiro eletricista pela UFRN, com intercâmbio na ENSEEIHT (Toulouse INP), na França, e mestrado no PPGEEC/UFRN com foco em deep learning para séries temporais.",
    "Nos últimos anos saí da construção de aplicações web para a construção dos dados por trás delas. Hoje desenho pipelines orientados a eventos na AWS, modelo marts analíticos no Databricks e entrego os dashboards e ferramentas internas que ficam em cima deles.",
    "Ter entregado produtos full-stack (React, TypeScript, PostgreSQL) me faz um engenheiro de dados que pensa em quem consome o dado: contratos, latência e se o número na tela é confiável.",
  ],
};

export const highlights: { value: string; label: Localized }[] = [
  { value: "30+", label: { en: "serverless data functions in production", pt: "funções de dados serverless em produção" } },
  { value: "M.Sc.", label: { en: "Electrical & Computer Eng., UFRN", pt: "Eng. Elétrica e de Computação, UFRN" } },
  { value: "E2E", label: { en: "from ingestion to the app on top", pt: "da ingestão ao app no topo" } },
];

export type Experience = {
  company: string;
  role: Localized;
  start: string;
  end?: string;
  summary: Localized;
  bullets: Record<Lang, string[]>;
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Grupo Energisa",
    role: { en: "Data & Analytics", pt: "Dados e Analytics" },
    start: "2026",
    summary: {
      en: "Geospatial advanced analytics for one of Brazil's largest power distribution groups.",
      pt: "Analytics geoespacial avançado para um dos maiores grupos de distribuição de energia do Brasil.",
    },
    bullets: {
      en: [
        "Built GEO AA, an operational route efficiency product: marts that join field operations data with IBGE census geography, built in Databricks notebooks.",
        "Shipped the analytical app on Databricks Apps (Streamlit + pydeck) on top of Unity Catalog, solving volume access in the app runtime through the Files API.",
      ],
      pt: [
        "Construí o GEO AA, produto de eficiência de rotas operacionais: marts que cruzam dados de operação de campo com a geografia censitária do IBGE, construídos em notebooks Databricks.",
        "Entreguei o app analítico no Databricks Apps (Streamlit + pydeck) sobre o Unity Catalog, resolvendo o acesso a volumes no runtime do app via Files API.",
      ],
    },
    tags: ["Databricks", "Unity Catalog", "PySpark", "SQL", "Streamlit", "pydeck", "Geospatial"],
  },
  {
    company: "Carpediem Homes",
    role: { en: "Data Engineer", pt: "Engenheiro de Dados" },
    start: "2024",
    summary: {
      en: "Data platform for a short-term rental management company: every reservation, property and payment flows through it.",
      pt: "Plataforma de dados de uma empresa de gestão de aluguel por temporada: toda reserva, imóvel e cobrança passa por ela.",
    },
    bullets: {
      en: [
        "Designed an event-driven architecture with 30+ containerized AWS Lambda functions, fed by webhooks routed through Hookdeck.",
        "Integrated property management systems (Stays, Guesty), finance (Granatum), the operations platform (Jestor) and Supabase into consolidated master tables for reservations and properties.",
        "Owned data quality: deduplication, cross-system ID reconciliation and retroactive backfills, plus automated guest and owner notifications driven by the pipeline.",
        "Wrote internal Python SDKs for the main vendor APIs and built the guest-facing web area on the same data.",
      ],
      pt: [
        "Desenhei uma arquitetura orientada a eventos com mais de 30 funções AWS Lambda em contêiner, alimentadas por webhooks roteados pelo Hookdeck.",
        "Integrei sistemas de gestão de imóveis (Stays, Guesty), financeiro (Granatum), a plataforma de operações (Jestor) e o Supabase em master tables consolidadas de reservas e acomodações.",
        "Fui responsável pela qualidade dos dados: deduplicação, reconciliação de IDs entre sistemas e backfills retroativos, além de notificações automáticas para hóspedes e proprietários disparadas pelo pipeline.",
        "Escrevi SDKs internos em Python para as principais APIs de fornecedores e construí a área do hóspede sobre os mesmos dados.",
      ],
    },
    tags: ["AWS Lambda", "Docker", "Python", "Webhooks", "PostgreSQL", "Supabase", "ETL"],
  },
];

export type Project = {
  title: string;
  kind: Localized;
  description: Localized;
  tags: string[];
  code?: string;
  live?: string;
  private?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "GEO AA",
    kind: { en: "Geospatial analytics · Energisa", pt: "Analytics geoespacial · Energisa" },
    description: {
      en: "Operational route efficiency for field teams. Notebook-built marts that combine operations records with IBGE geography, served through an interactive map app on Databricks Apps.",
      pt: "Eficiência de rotas operacionais para equipes de campo. Marts construídos em notebooks combinando registros de operação com a geografia do IBGE, servidos por um app de mapas interativo no Databricks Apps.",
    },
    tags: ["Databricks", "Unity Catalog", "Streamlit", "pydeck", "SQLite mart"],
    private: true,
    featured: true,
  },
  {
    title: "Carpediem Data Platform",
    kind: { en: "Event-driven pipelines · AWS", pt: "Pipelines orientados a eventos · AWS" },
    description: {
      en: "Webhooks from booking and finance systems land in containerized Lambdas that normalize, reconcile and upsert into master tables, then trigger downstream automations.",
      pt: "Webhooks dos sistemas de reservas e financeiro chegam em Lambdas em contêiner que normalizam, reconciliam e fazem upsert em master tables, e então disparam automações downstream.",
    },
    tags: ["AWS Lambda", "Docker", "Hookdeck", "Supabase", "Python"],
    private: true,
    featured: true,
  },
  {
    title: "Trackash",
    kind: { en: "Open source · Personal finance", pt: "Open source · Finanças pessoais" },
    description: {
      en: "Self-hosted personal finance dashboard for Brazil. Ingests bank and card data via Open Finance (Pluggy) and B3 statements into local SQLite: cash flow, card bills, time-weighted returns and portfolio health.",
      pt: "Dashboard de finanças pessoais self-hosted para o Brasil. Ingere dados de contas e cartões via Open Finance (Pluggy) e extratos da B3 num SQLite local: fluxo de caixa, faturas, rentabilidade ponderada no tempo e saúde da carteira.",
    },
    tags: ["TypeScript", "TanStack Start", "SQLite", "Open Finance"],
    code: "https://github.com/nathansouz4/trackash-selfhosted",
    featured: true,
  },
  {
    title: "Dental Desk",
    kind: { en: "SaaS · Full-stack", pt: "SaaS · Full-stack" },
    description: {
      en: "Practice management software for dentists: scheduling, clinical records, treatment quotes with PDF delivery and billing. Multi-tenant PostgreSQL with row-level security and Edge Functions.",
      pt: "Software de gestão para dentistas: agenda, prontuário, orçamentos com envio em PDF e financeiro. PostgreSQL multi-tenant com row-level security e Edge Functions.",
    },
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    private: true,
  },
  {
    title: "RAPTOR RAG Assistant",
    kind: { en: "LLM · Retrieval", pt: "LLM · Recuperação" },
    description: {
      en: "Question-answering assistant over Brazilian electrical installation standards, using RAPTOR tree-organized retrieval with recursive summarization, plus an evaluation pipeline.",
      pt: "Assistente de perguntas e respostas sobre normas brasileiras de instalações elétricas, usando recuperação em árvore RAPTOR com sumarização recursiva, além de um pipeline de avaliação.",
    },
    tags: ["Python", "LangChain", "Vector store", "Streamlit", "Docker"],
    code: "https://github.com/nathansouz4/RAG-Project",
  },
  {
    title: "Energy Fraud Detection",
    kind: { en: "Deep learning · Research", pt: "Deep learning · Pesquisa" },
    description: {
      en: "Multivariate consumption time series converted to images (recurrence plots) and classified with multi-branch CNNs to detect non-technical losses in power distribution.",
      pt: "Séries temporais multivariadas de consumo convertidas em imagens (recurrence plots) e classificadas com CNNs multi-ramo para detectar perdas não técnicas na distribuição de energia.",
    },
    tags: ["PyTorch", "pyts", "scikit-learn", "Time series"],
  },
];

export type Publication = {
  title: Localized;
  venue: Localized;
  year: string;
  description: Localized;
};

export const research: Publication[] = [
  {
    title: {
      en: "Fraud detection in electrical energy consumption via time series imaging and deep convolutional neural networks",
      pt: "Detecção de fraude em consumo de energia elétrica via imageamento de séries temporais e redes neurais convolucionais profundas",
    },
    venue: { en: "M.Sc. dissertation · PPGEEC/UFRN", pt: "Dissertação de mestrado · PPGEEC/UFRN" },
    year: "2026",
    description: {
      en: "Imaging-based classification of consumer load profiles to flag fraud, benchmarked against native 1D time-series methods.",
      pt: "Classificação de perfis de consumo baseada em imageamento para sinalizar fraude, comparada com métodos nativos de séries temporais 1D.",
    },
  },
  {
    title: {
      en: "Fraud detection in electrical energy consumption via time series imaging and deep CNNs",
      pt: "Fraud detection in electrical energy consumption via time series imaging and deep CNNs",
    },
    venue: { en: "Paper · Congresso Brasileiro de Automática (CBA)", pt: "Artigo · Congresso Brasileiro de Automática (CBA)" },
    year: "2026",
    description: {
      en: "Conference paper derived from the dissertation.",
      pt: "Artigo de conferência derivado da dissertação.",
    },
  },
  {
    title: {
      en: "An intelligent chatbot assistant for electrical installations using RAPTOR",
      pt: "Desenvolvimento de um assistente chatbot inteligente para instalações elétricas",
    },
    venue: { en: "B.Sc. thesis · Electrical Engineering, UFRN", pt: "TCC · Engenharia Elétrica, UFRN" },
    year: "2024",
    description: {
      en: "LLM assistant grounded on ABNT technical standards with tree-organized retrieval.",
      pt: "Assistente LLM fundamentado em normas técnicas da ABNT com recuperação organizada em árvore.",
    },
  },
];

export const stack: { stage: Localized; items: string[] }[] = [
  { stage: { en: "Ingest", pt: "Ingestão" }, items: ["Python", "REST APIs", "Webhooks", "Hookdeck", "Open Finance"] },
  { stage: { en: "Process", pt: "Processamento" }, items: ["Databricks", "PySpark", "SQL", "pandas", "AWS Lambda"] },
  { stage: { en: "Store & model", pt: "Armazenamento e modelagem" }, items: ["Unity Catalog", "Data marts", "PostgreSQL", "Supabase", "SQLite"] },
  { stage: { en: "Serve", pt: "Entrega" }, items: ["Streamlit", "pydeck", "React", "TypeScript", "TanStack"] },
  { stage: { en: "ML & AI", pt: "ML e IA" }, items: ["PyTorch", "scikit-learn", "Time series", "LangChain", "RAG"] },
  { stage: { en: "Platform", pt: "Plataforma" }, items: ["AWS", "Docker", "GitHub Actions", "Git", "Linux"] },
];
