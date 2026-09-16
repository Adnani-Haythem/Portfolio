/** Central content for Haythem Adnani's portfolio. */

export const IDENTITY = {
  name: "Haythem Adnani",
  firstName: "Haythem",
  lastName: "Adnani",
  initials: "HA",
  role: "Computer Science Engineering Student",
  focusLine: "Cybersecurity • Artificial Intelligence • Software Engineering",
  heroDescription:
    "Computer Science Engineering student at ENIT focused on cybersecurity and artificial intelligence, with hands-on experience building security automation, applied machine-learning, and full-stack systems.",
  location: "Sousse, Tunisia",
  coordinates: { lat: "35.8256", lon: "10.6369" },
  quote: "Build systems that are useful, secure, and explainable.",
  cursiveTag: "Security × Intelligence",
  phrases: {
    heroLine1: "SECURE  BUILD  AUTOMATE",
    heroLine2: "FROM SIGNALS TO DECISIONS",
    ideasToProducts: "AI → SECURITY → ACTION",
    alwaysBuilding: "ALWAYS LEARNING // ALWAYS TESTING",
  },
} as const;

export const SOCIALS = {
  github: "https://github.com/haythem-adnani",
  linkedin: "https://www.linkedin.com/in/haythem-adnani",
  email: "haythem.adnani@etudiant-enit.utm.tn",
  phone: "+216 94 320 099",
  phoneHref: "tel:+21694320099",
  resume: "/assets/haythem-adnani-resume.pdf",
} as const;

export const PORTRAIT = {
  current: "/assets/haythem-adnani-portrait.png",
  alt: "Haythem Adnani",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Stack" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT_SUMMARY =
  "I am a Computer Science Engineering student at the National Engineering School of Tunis (ENIT), passionate about cybersecurity and artificial intelligence. My work combines software engineering, security automation, machine learning, LLM-based analysis, and practical networking and systems knowledge. I am currently deepening my AI-security expertise through Hack The Box's AI Red Teamer path.";

export type Expertise = {
  number: string;
  title: string;
  description: string;
  stack: string[];
};

export const EXPERTISE: Expertise[] = [
  {
    number: "01",
    title: "AI Security",
    description:
      "Exploring adversarial AI, prompt injection, LLM output attacks, and secure AI-assisted analysis through hands-on projects and specialist training.",
    stack: ["LLM Security", "Prompt Injection", "Adversarial AI", "Hack The Box"],
  },
  {
    number: "02",
    title: "Security Automation",
    description:
      "Building workflows that connect reconnaissance, vulnerability assessment, controlled exploitation, evidence correlation, and AI-assisted reporting.",
    stack: ["Nmap", "Metasploit", "Tshark", "Kali Linux"],
  },
  {
    number: "03",
    title: "Applied AI & ML",
    description:
      "Developing practical ML and RAG systems for fraud scoring, movement prediction, intent parsing, contextual retrieval, and explainable decisions.",
    stack: ["XGBoost", "TensorFlow", "LangChain", "RAG"],
  },
];

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  title: string;
  highlights: string[];
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Internship",
    organization: "AI Cybersecurity Voice Agent",
    location: "Tunisia",
    period: "2026",
    title: "Real-Time Fraud Detection Platform",
    highlights: [
      "Designed an end-to-end AI-powered cybersecurity voice agent combining ML-based fraud detection, ASR/TTS, local LLM intent parsing, and Retrieval-Augmented Generation over local logs.",
      "Built an XGBoost fraud-scoring service exposed through Flask REST APIs with risk levels and human-readable rationales.",
      "Implemented a Chroma + sentence-transformer + LangChain RAG engine, an SSE live-alert stream, and an analyst dashboard for real-time SOC visibility.",
    ],
    stack: ["Python", "Flask", "XGBoost", "LangChain", "Chroma", "ASR/TTS", "SSE"],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
};

export const EDUCATION: Education[] = [
  {
    school: "National Engineering School of Tunis (ENIT)",
    degree: "Master's in Information System Techniques (IST) — Second Year (M2)",
    period: "2026 — Present",
    location: "Tunis, Tunisia",
    details: [
      "Pursuing M2 concurrently with the third year of the Computer Science Engineering degree.",
      "English-taught program offered through cooperation between Tunis El Manar University and Technische Universität Braunschweig, Germany, including advanced coursework and a semester-long master's research project.",
    ],
  },
  {
    school: "National Engineering School of Tunis (ENIT)",
    degree: "Computer Science Engineering Degree",
    period: "2024 — 2027",
    location: "Tunis, Tunisia",
  },
  {
    school: "Preparatory Institute for Engineering Studies of Monastir (IPEIM)",
    degree: "Preparatory Cycle for Engineering Studies — Physics & Technology (PT)",
    period: "2022 — 2024",
    location: "Monastir, Tunisia",
  },
];

export const STACK_GROUPS = [
  { title: "Programming", items: ["Python", "Java", "C"] },
  { title: "Backend & Applications", items: ["Spring Boot", "Flask", "FastAPI", "JavaFX", "REST APIs", "WebSockets"] },
  { title: "Cybersecurity", items: ["Nmap", "Metasploit", "Wireshark/Tshark", "Kali Linux", "Penetration Testing", "SSH"] },
  { title: "AI & Machine Learning", items: ["XGBoost", "scikit-learn", "TensorFlow/Keras", "LangChain", "LLM Integration", "RAG", "Embeddings"] },
  { title: "Data", items: ["PostgreSQL", "PostGIS", "SQL", "Chroma"] },
  { title: "Platforms & Tools", items: ["Git", "Docker", "VirtualBox", "Streamlit", "Ollama"] },
  { title: "Networking", items: ["TCP/IP", "Network Security", "CCNA Fundamentals"] },
  { title: "AI Security", items: ["Prompt Injection", "LLM Output Attacks", "Adversarial AI", "AI Data Attacks"] },
] as const;

export const MARQUEE_TECH = [
  "Python",
  "Java",
  "C",
  "Spring Boot",
  "Flask",
  "FastAPI",
  "XGBoost",
  "TensorFlow",
  "LangChain",
  "RAG",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Docker",
  "PostgreSQL",
  "Chroma",
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  github: string;
  live?: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "cattracker-v2",
    name: "CatTracker v2",
    category: "Full-Stack & Applied ML",
    year: "2026",
    shortDesc:
      "A containerized GPS pet-tracking platform with real-time geofencing, analytics, and LSTM-based movement prediction.",
    fullDesc:
      "Built with FastAPI, PostgreSQL/PostGIS, Streamlit, and Docker Compose. The system uses an LSTM with Bahdanau attention to predict a cat's next GPS location, supports transfer learning per animal, ingests public GPS data from 233 tracked cats, detects geofence entry and exit events, and broadcasts live alerts over WebSockets.",
    tags: ["FastAPI", "PostGIS", "TensorFlow", "LSTM", "Docker", "WebSockets"],
    github: "",
  },
  {
    slug: "auditpack",
    name: "AuditPack",
    category: "Cybersecurity Automation",
    year: "2025 — 2026",
    shortDesc:
      "An automated enterprise-security audit platform integrating discovery, vulnerability assessment, controlled exploitation, traffic capture, and AI reporting.",
    fullDesc:
      "Designed an orchestration workflow integrating Nmap, Metasploit, and Tshark. Built a Spring Boot backend and JavaFX desktop client, added PostgreSQL-backed CVE-to-Metasploit matching, normalized heterogeneous XML/log/PCAP outputs, and generated AI-assisted reports exportable as PDF, HTML, or DOCX. The platform was validated in an isolated lab and presented at WEITA 2026.",
    tags: ["Spring Boot", "JavaFX", "Nmap", "Metasploit", "Tshark", "PostgreSQL"],
    github: "",
  },
  {
    slug: "ai-cybersecurity-voice-agent",
    name: "AI Cybersecurity Voice Agent",
    category: "AI Security",
    year: "2026",
    shortDesc:
      "A real-time fraud-detection and SOC-assistance platform combining ML scoring, voice interaction, LLM intent parsing, and RAG.",
    fullDesc:
      "The platform combines XGBoost fraud scoring, Flask APIs, speech-to-text and text-to-speech, a local LLM intent parser, Chroma-based vector retrieval, sentence-transformer embeddings, and LangChain. It also includes a live SSE alert stream, analyst dashboard, and synthetic transaction simulator.",
    tags: ["XGBoost", "Flask", "LangChain", "Chroma", "LLM", "RAG"],
    github: "",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "iiot-security",
    name: "Security Challenges in Industrial IoT",
    category: "Cybersecurity Research",
    year: "2025",
    shortDesc:
      "A final-year project investigating practical threats to Industrial IoT devices and networks in manufacturing environments.",
    fullDesc:
      "Investigated real-world IIoT security threats and proposed improvements using edge-level filtering, encrypted protocols, and AI-assisted intrusion detection. The work produced a technical report grounded in a literature review and practical case studies.",
    tags: ["IIoT", "Network Security", "Intrusion Detection", "AI", "Research"],
    github: "",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  note?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy — ENIT",
    date: "January 2026",
  },
  {
    name: "CAPT — Certified Associate Penetration Tester",
    issuer: "Hackviser",
    date: "December 2025",
    note: "Certificate ID: HV-CAPT-L3025JU7",
  },
  {
    name: "AI Red Teamer Job Path",
    issuer: "Hack The Box",
    date: "2026",
    note: "Prompt Injection Attacks and LLM Output Attacks completed; AI Data Attacks in progress.",
  },
];

export type Activity = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Active Member",
    organization: "Securinets ENIT — Cybersecurity Club",
    period: "2024 — Present",
    description: "Participating in cybersecurity activities, technical workshops, CTF competitions, and security-related events.",
  },
  {
    title: "Golden Member & Event Organizer",
    organization: "G2FOSS ENIT — Software Club",
    period: "2024 — Present",
    description: "Helped organize League of Coders, a major competitive-programming and problem-solving event in Tunisia, and was later recognized as a Golden Member.",
  },
  {
    title: "Participant",
    organization: "Injaz El Arab Competition",
    period: "2025",
    description: "Worked on a sustainability project developing thermal-insulation panels from natural materials.",
  },
  {
    title: "Participant — Team EL Kes7inn",
    organization: "CyberHorizon Hackathon — 5G Edition",
    period: "2025",
    description: "Competed in a cybersecurity challenge under time constraints and ranked among the winning teams.",
  },
];

export const CONFERENCE = {
  name: "WEITA 2026 — Cybercriminalité & Gouvernance",
  venue: "ESPRIT",
  date: "April 2026",
  description:
    "Presented AuditPack to cybersecurity experts, researchers, and institutional representatives as part of ENIT's student delegation.",
} as const;

export const LANGUAGES = [
  { language: "English", level: "Professional Proficiency" },
  { language: "French", level: "Professional Proficiency" },
  { language: "German", level: "Basic Proficiency" },
] as const;

export const HERO_STATS = [
  { value: String(ALL_PROJECTS.length), label: "Core Projects" },
  { value: String(CERTIFICATIONS.length), label: "Certifications / Paths" },
  { value: "2026", label: "Current Focus" },
];
