// Single source of truth for all portfolio content.
// Wrap a number in **double asterisks** to render it as a highlighted metric.
// Synced with Neha_Resume.pdf (Nov 2026).

// Production URL of the site. Set NEXT_PUBLIC_SITE_URL in Vercel once the
// domain is final — it drives canonical URLs, sitemap, robots and OG tags.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://neha-ghardwal.vercel.app"
).replace(/\/$/, "");

export const profile = {
  name: "Neha",
  fullName: "Neha Ghardwal",
  title: "Software Engineer · Go & Java",
  // Hero (left column). Each fact appears in exactly one section.
  hero: {
    latest: { label: "Building", text: "an event-driven payment system", href: "#projects" },
    lead: "Software engineer. I build",
    bold: "backend systems that hold up in production.",
    summary:
      "Go and Java across search, data pipelines and event-driven services, plus the GenAI tooling my team ships with.",
    stats: [
      { value: "1+ yrs", label: "shipping to production" },
      { value: "4.5K+", label: "trade partners on my services" },
      { value: "1825", label: "CodeChef rating (4★)" },
    ],
  },
  // Hero (right column) terminal: `whoami --now` key/value rows.
  now: [
    { key: "role", value: "SWE (Go) @ Orangutan" },
    { key: "stack", value: "Go · Java · Postgres · OpenSearch" },
    { key: "building", value: "Order-to-Payment system", href: "#projects" },
    { key: "status", value: "open to SWE roles", href: "#contact" },
  ],
  // About section.
  about: {
    headline: "I care about the unglamorous parts of backend work, the parts that keep systems fast and correct as they grow.",
    body: "Data models that stay sane at 100x the rows, pipelines that are safe to re-run, APIs with clear contracts. I like owning a feature from the first design doc to watching it in production, and I go deeper on distributed systems through side projects and competitive programming.",
    facts: [
      { icon: "briefcase", text: "SWE at Orangutan Technologies" },
      { icon: "pin", text: "Delhi, India" },
      { icon: "grad", text: "B.Tech CSE, Bennett University" },
    ],
  },
  location: "Delhi, India",
  email: "ghardwalneha15@gmail.com",
  phone: "+91 8700507765",
  resumeUrl: "/Neha_Resume.pdf",
  photo: "/neha.jpg",
  social: {
    github: "https://github.com/neha-ghardwal",
    linkedin: "https://linkedin.com/in/nehaghardwal",
    email: "mailto:ghardwalneha15@gmail.com",
  },
};

export const experience: {
  company: string;
  about: string;
  roles: {
    title: string;
    period: string;
    location: string;
    badge?: string;
    // Verb first, one sentence, measurable result. ** marks the number.
    // The first `visible` bullets show; the rest sit behind "Show N more".
    points: string[];
  }[];
}[] = [
  {
    company: "Orangutan Technologies",
    about: "FloDMS · Faber India's B2B distribution platform",
    roles: [
      {
        title: "Software Engineer (Golang)",
        period: "Jul 2025 to now",
        location: "Noida",
        badge: "Monthly Top Performer",
        points: [
          "Built an hourly Go ETL that syncs MongoDB into an OpenSearch read model, serving search over **1M+ records** in **under 200 ms**",
          "Rebuilt data ingestion as a bounded-concurrency Go worker pool, cutting runs from **30+ minutes to under 1 minute**",
          "Led the move of ticket filing (**6,000+** claims a month) from a synchronous to an event-driven pipeline with **zero disruption**",
          "Designed a self-serve reporting engine with a dynamic query builder that replaced manual Excel reports, saving **15 hours a week**",
          "Automated enrichment of up to **100K records** per run with AWS-scheduled jobs and a TTL cache that removed redundant DB reads",
          "Built a Java tool that anonymizes **4K+** client records with deterministic hashing, keeping referential integrity intact",
          "Rolled out shared GenAI workflows (Claude Code, MCP, agents) for PR review and regression tests, saving **3 to 4 hours** per feature",
        ],
      },
    ],
  },
];

export const experienceVisible = 4;

export type ProjectLinks = { live?: string; github?: string };

export const projects: {
  name: string;
  tagline: string;
  period: string;
  status?: string;
  points: string[];
  stack: string[];
  links: ProjectLinks;
}[] = [
  {
    name: "Order-to-Payment System",
    tagline: "Event-driven payments with exactly-once effects",
    period: "May 2026 – Present",
    status: "In progress",
    points: [
      "Designed a multi-tier payment platform: **2** microservices (orders, payments) with separate databases behind an API gateway.",
      "Reduced failed-payment recovery time by **40%** with event-driven processing: consumer groups for at-least-once delivery, idempotency keys against double charges, exponential-backoff retries and a dead-letter queue.",
    ],
    stack: ["Go", "PostgreSQL", "Redis Streams", "Docker", "Stripe"],
    links: {},
  },
  {
    name: "Learnly",
    tagline: "Skill barter platform — teach what you know, learn what you don't",
    period: "Feb 2025 – Jun 2025",
    points: [
      "Peer-to-peer skill exchange platform with JWT auth, a searchable user directory and real-time WebSocket notifications.",
      "Improved match relevance **3x** over keyword search with a recommender using LLM embeddings and vector similarity.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets"],
    links: { live: "https://learnly-dev.vercel.app" },
  },
  {
    name: "ProHealth AI Disease Predictor",
    tagline: "ML pipeline for early disease prediction",
    period: "Sept 2024 – Jan 2025",
    points: [
      "Machine learning pipeline that achieved **90%** disease prediction accuracy on **10,000+** records.",
      "Cut training compute time by **25%** through linear programming optimization.",
    ],
    stack: ["Python", "Scikit-learn", "SciPy"],
    links: {},
  },
];

// "What I build" cards in the About section (replaces a separate skills grid).
export const focusAreas = [
  {
    icon: "server",
    title: "Backend & APIs",
    text: "Go and Java services with clear API contracts, idempotent processing and event-driven flows.",
    tags: ["Go", "Java", "REST", "Microservices", "Redis Streams", "Docker"],
  },
  {
    icon: "database",
    title: "Data & Search",
    text: "Pipelines and read models that keep queries fast as data grows.",
    tags: ["OpenSearch", "PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    icon: "bot",
    title: "AI tooling",
    text: "GenAI workflows that take code review, debugging and regression testing off the team's plate.",
    tags: ["Claude Code", "MCP", "AI Agents", "LLM Embeddings"],
  },
];

export const alsoUse = ["AWS", "Linux", "Git", "CI/CD", "Python", "C++", "TypeScript"];

export const education = [
  {
    school: "Bennett University, Greater Noida",
    degree: "B.Tech, Computer Science and Engineering",
    period: "Aug 2021 – May 2025",
    detail: "CGPA: 9.3/10",
    coursework:
      "Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, OOP",
  },
];

export const competitive = [
  { platform: "CodeChef", rating: "4★ · 1825" },
  { platform: "LeetCode", rating: "1726" },
  { platform: "Codeforces", rating: "Pupil · 1327" },
  { platform: "GeeksforGeeks", rating: "5★" },
];

export const awards = [
  "Hackathons: 1st place in CodeCraze-CP and Innovate & Inspire; 2nd place in Bits by Bytes.",
  "Technical Head, GDSC: led and mentored the technical team and ran 30+ cloud and programming workshops.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
