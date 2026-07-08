export const profile = {
  name: "Neha",
  title: "Backend Software Engineer",
  tagline:
    "Turning complex data problems into fast, reliable systems.",
  bio: "Backend Software Engineer with a year of production experience turning complex data problems into fast, reliable systems. Proficient in Go, OpenSearch, MongoDB, and PostgreSQL — with hands-on depth in concurrent programming, distributed data pipelines, and high-performance API design. Brings a rare combination of engineering rigor and end-to-end ownership: from architecting data models to deploying on AWS independently. Eager to work on hard backend problems where performance, reliability, and clean system design actually matter.",
  location: "Noida, UP, India",
  email: "ghardwalneha15@gmail.com",
  phone: "8700507765",
  resumeUrl: "/Neha_Resume.pdf",
  social: {
    github: "https://github.com/neha-ghardwal",
    linkedin: "https://linkedin.com/in/nehaghardwal",
    email: "mailto:ghardwalneha15@gmail.com",
  },
};

export const experience = [
  {
    company: "Orangutan Technologies Pvt Ltd",
    role: "Backend/Golang Developer",
    location: "Noida, UP",
    period: "July 2025 – Present",
    points: [
      "Owned the backend development of FloDMS, a business-critical dealer management platform supporting Faber India's nationwide network of 4.5K+ trade partners and 96+ field sales members.",
      "Implemented a production-grade ingestion workflow for dealer/sales data, automating file lifecycle management in Wasabi and indexing 50K+ records/min into OpenSearch.",
      "Eliminated daily reporting delays by developing AWS-scheduled enrichment jobs that hydrate 10k–100k MongoDB records with dealer and user metadata using in-memory synchronization caches.",
      "Served sub-200ms search and analytics queries across 1M+ sales records by designing paginated REST APIs integrating OpenSearch, PostgreSQL, and MongoDB.",
      "Built a composable reporting engine enabling HO-level revenue analysis across zones, channels, and product categories with YoY growth insights, replacing static Excel-based reports with on-demand business intelligence dashboards.",
      "Containerized backend services using Docker and contributed to deployment and operational workflows.",
    ],
    stack: ["Go", "OpenSearch", "MongoDB", "PostgreSQL", "AWS", "Docker", "Wasabi"],
  },
];

export const projects = [
  {
    name: "Learnly — Skill Barter System",
    period: "Feb 2025 – June 2025",
    description:
      "Full-stack peer-to-peer skill exchange platform with JWT-secured auth, a searchable user directory, and real-time WebSocket notifications — deployed and live on Vercel. Backend architected in Node.js and Express with WebSocket-powered real-time notifications and Calendly-integrated session scheduling.",
    stack: ["React.js", "TypeScript", "Redux", "Node.js", "Express", "WebSockets"],
    links: {},
  },
  {
    name: "ProHealth AI Disease Predictor",
    period: "Sept 2024 – Jan 2025",
    description:
      "Machine learning pipeline that achieved 90% disease prediction accuracy on 10,000+ records and cut training compute time by 25% through linear programming optimization.",
    stack: ["Python", "Scikit-learn", "SciPy"],
    links: {},
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Go", "C++", "Python", "TypeScript", "SQL"],
  },
  {
    group: "Backend",
    items: [
      "REST APIs",
      "Concurrency (Goroutines, Semaphores)",
      "Data Pipelines",
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },
  {
    group: "Databases",
    items: ["OpenSearch", "MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "AWS", "Git", "CI/CD"],
  },
];

export const education = [
  {
    school: "Bennett University, Greater Noida",
    degree: "BTech – Computer Science and Technology",
    period: "Aug 2021 – June 2025",
    detail: "GPA: 9.3/10.0",
  },
  {
    school: "Army Public School, Dehuroad Pune",
    degree: "Physics, Chemistry, Maths",
    period: "Mar 2020 – Apr 2021",
    detail: "Percent: 89%",
  },
];

export const awards = [
  "Company Award: Monthly Top Performer Award for delivering high-impact backend solutions.",
  "Academic Commendation from Bennett University for achieving a perfect 10.0 SGPA in 3 semesters.",
  "Won 1st place in CodeCraze-CP and Innovate and Inspire, and 2nd place in Bits by Bytes.",
  "Served as Technical Head of GDSC, conducting 30+ workshops on cloud and programming technologies.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
