export type Job = {
  id: string;
  title: string;
  company: string;
  companyMark: string;
  location: string;
  mode: "Remote" | "Hybrid";
  contract: "Full-time" | "Contractor" | "Part-time";
  salary: string;
  tags: string[];
  description: string;
  posted: string;
  stage: "New" | "In review" | "Interview";
};

export const jobs: Job[] = [
  {
    id: "nuvem-product-designer",
    title: "Senior Product Designer",
    company: "Nuvem Labs",
    companyMark: "NL",
    location: "Brazil · LATAM",
    mode: "Remote",
    contract: "Full-time",
    salary: "R$ 14k – 19k / month",
    tags: ["Figma", "Product", "English C1"],
    description:
      "Own the product experience from first insight to shipped detail. You will partner with product, engineering and customer teams to make complex work feel clear.",
    posted: "2h ago",
    stage: "New",
  },
  {
    id: "orla-fullstack",
    title: "Full-stack Engineer",
    company: "Orla Health",
    companyMark: "OH",
    location: "São Paulo · Brazil",
    mode: "Hybrid",
    contract: "Full-time",
    salary: "US$ 4.5k – 6.5k / month",
    tags: ["TypeScript", "React", "Node.js"],
    description:
      "Build reliable tools for a health platform used by teams across Latin America. We value pragmatic engineering and thoughtful collaboration.",
    posted: "5h ago",
    stage: "In review",
  },
  {
    id: "semente-success",
    title: "Customer Success Lead",
    company: "Semente Co.",
    companyMark: "SC",
    location: "Brazil · Global",
    mode: "Remote",
    contract: "Contractor",
    salary: "US$ 2.8k – 4k / month",
    tags: ["B2B", "SaaS", "Spanish"],
    description:
      "Help customers turn a great product into a repeatable operating rhythm. This role sits close to product, sales and the people doing the work.",
    posted: "Yesterday",
    stage: "Interview",
  },
  {
    id: "ponto-data",
    title: "Data & Analytics Manager",
    company: "Ponto Norte",
    companyMark: "PN",
    location: "Brazil · LATAM",
    mode: "Remote",
    contract: "Full-time",
    salary: "R$ 18k – 24k / month",
    tags: ["SQL", "Analytics", "Leadership"],
    description:
      "Create the data foundation that helps a growing team make fewer guesses and better decisions.",
    posted: "Yesterday",
    stage: "New",
  },
  {
    id: "mosaico-ai",
    title: "AI Content Strategist",
    company: "Mosaico Studio",
    companyMark: "MS",
    location: "Brazil · Global",
    mode: "Remote",
    contract: "Part-time",
    salary: "R$ 8k – 11k / month",
    tags: ["Content", "AI", "English B2"],
    description:
      "Shape useful, human content systems for teams adopting AI without losing their point of view.",
    posted: "2 days ago",
    stage: "New",
  },
];

export const candidateApplications = [
  {
    job: jobs[0],
    status: "Interview",
    next: "Share your portfolio",
    progress: 72,
  },
  { job: jobs[1], status: "In review", next: "AI skills screen", progress: 38 },
  {
    job: jobs[3],
    status: "Submitted",
    next: "Waiting for review",
    progress: 18,
  },
];

export const suggestedJobs = [jobs[2], jobs[4], jobs[3]];

export const companyCandidates = [
  {
    initials: "AM",
    name: "Ana Martins",
    role: "Product Designer",
    location: "São Paulo, Brazil",
    match: "Strong context",
    stage: "Interview",
    accent: "#f05a3c",
  },
  {
    initials: "JP",
    name: "João Pedro",
    role: "Product Designer",
    location: "Curitiba, Brazil",
    match: "Skills aligned",
    stage: "New",
    accent: "#5874b8",
  },
  {
    initials: "LS",
    name: "Luisa Santos",
    role: "UX Researcher",
    location: "Recife, Brazil",
    match: "Worth a look",
    stage: "Assessment",
    accent: "#2f7c68",
  },
];
