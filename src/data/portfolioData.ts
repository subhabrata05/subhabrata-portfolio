export interface PlannedCapability {
  title: string;
  description: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  status: 'planned' | 'in-progress' | 'implemented';
  statusLabel: string;
  details: string;
}

export interface ProjectCaseStudy {
  vision: string;
  problem: string;
  architecture: string;
  plannedTechnologies: string[];
  capabilities: PlannedCapability[];
  securityConsiderations: string;
  roadmap: RoadmapItem[];
  currentStatus: string;
  nextMilestones: string[];
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  category: string;
  technologies: string[];
  summary: string;
  features: string[];
  architectureNotes: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: string;
  badge: string;
  subtitle?: string;
  tagline?: string;
  isUpcoming?: boolean;
  plannedCapabilities?: PlannedCapability[];
  caseStudy?: ProjectCaseStudy;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  academicYear: string;
  summary: string;
  progression?: string[];
  highlights: string[];
}

export interface MilestoneItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  timeline: string;
  score: string;
  scoreLabel: string;
  description?: string;
  isCurrent?: boolean;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Subhabrata Dey",
  brand: "SUBHABRATA.DEV",
  roles: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "AI Enthusiast",
    "Cybersecurity Enthusiast"
  ],
  identity: "Full-Stack Developer | Mobile App Developer | AI Enthusiast | Cybersecurity Enthusiast",
  location: "Jaipur, Rajasthan, India",
  email: "deysubhabrata010@gmail.com",
  linkedin: "https://linkedin.com/in/subhabrata-dey-53892440b",
  github: "https://github.com/subhabrata05",
  academicStatus: "Third-Year B.Tech Computer Science and Engineering",
  university: "University of Engineering & Management, Jaipur",
  expectedGraduation: "2028",
  cgpa: "6.85",
  heroEyebrow: "FULL-STACK DEVELOPER · MOBILE · AI",
  heroIntro: "Hi, I'm",
  heroName: "SUBHABRATA DEY.",
  heroSupportingHeadline: "I build ideas into digital experiences.",
  heroSupportingDescription:
    "I'm a Computer Science student and developer exploring full-stack engineering, mobile applications, AI-powered products, and interactive 3D experiences.",
  heroPrimaryCta: "Explore My Work",
  heroSecondaryCta: "Let's Connect",
  heroResumeCta: "Download Resume",
  heroHeadline: "Building ideas into digital experiences.",
  heroSupportingText:
    "I'm a Computer Science student and developer exploring full-stack engineering, mobile applications, AI-powered products, and interactive 3D experiences.",
  aboutLabel: "A LITTLE ABOUT ME",
  aboutHeading: "Curious by nature. A builder by choice.",
  aboutParagraphs: [
    "I'm Subhabrata Dey, a third-year Computer Science and Engineering student at the University of Engineering & Management, Jaipur.",
    "I enjoy building applications that combine useful functionality with engaging user experiences. My work spans full-stack web development, Android and cross-platform mobile development, AI-powered assistants, and interactive 3D interfaces.",
    "Beyond coding, I serve as President of Atrang, my college cultural club. I progressed from Member to Technical Coordinator and then President, taking on increasing responsibility for technical execution, team coordination, and event operations.",
    "I'm also interested in cybersecurity, ethical hacking, and secure coding. I enjoy exploring new technologies, solving problems, collaborating with others, and turning ideas into working projects."
  ],
  interests: [
    "Full-stack web development",
    "Android application development",
    "Cross-platform mobile development",
    "AI-powered applications",
    "Interactive 3D web experiences",
    "Cybersecurity and secure coding",
    "Open-source contributions",
    "Building practical software products"
  ]
};

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Mobile Development",
    categoryKey: "mobile",
    description: "Native Android and cross-platform mobile applications crafted for speed and usability.",
    skills: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Flutter" },
      { name: "React Native" }
    ]
  },
  {
    title: "Web & Full-Stack",
    categoryKey: "web",
    description: "Modern component architectures, typed interfaces, and scalable RESTful backends.",
    skills: [
      { name: "React" },
      { name: "React 19" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "JavaScript" },
      { name: "TypeScript" }
    ]
  },
  {
    title: "AI & Interactive Experiences",
    categoryKey: "ai",
    description: "Intelligent conversational interfaces, 3D rendering, and computer vision integration.",
    skills: [
      { name: "Groq API" },
      { name: "Llama models" },
      { name: "LLM API integration" },
      { name: "Three.js" },
      { name: "MediaPipe" },
      { name: "Web Speech API" }
    ]
  },
  {
    title: "Security & Defensive Practices",
    categoryKey: "security",
    description: "Security-first mindset applied to application architecture, authentication, and APIs.",
    skills: [
      { name: "Ethical hacking fundamentals" },
      { name: "CTF challenges" },
      { name: "Secure coding practices" },
      { name: "CORS and API hardening" }
    ]
  },
  {
    title: "Tools & Cloud Platforms",
    categoryKey: "tools",
    description: "Version control, databases, cloud hosting, and rapid continuous deployment.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Firebase" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Vercel" },
      { name: "Netlify" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "jarvis",
    tag: "AI · FULL-STACK",
    title: "JARVIS — Personal AI Chat Assistant",
    category: "Full-Stack AI Application",
    technologies: ["React 19", "Node.js", "Express", "Groq LLM API", "Llama 3.3 70B", "REST APIs"],
    summary:
      "JARVIS is a full-stack personal AI chat assistant with a React frontend and an Express REST API backend, powered by Groq's Llama 3.3 70B Versatile model.",
    features: [
      "Full-stack conversational assistant architecture",
      "React 19 frontend with real-time conversational states",
      "Express REST API backend managing LLM request cycles",
      "Groq LLM integration for ultra-fast conversational responses",
      "CORS-protected API endpoints to guard against unauthorized origins",
      "Request-logging middleware for operational visibility",
      "Backend health-check endpoint for continuous uptime monitoring",
      "Decoupled frontend and backend architecture for modular deployment"
    ],
    architectureNotes:
      "Engineered with a clean separation of concerns: the client dispatches chat requests through typed contracts to a hardened Express gateway. Groq's low-latency inference endpoint processes conversational state using Llama 3.3 70B Versatile, returned with structured error handling.",
    githubUrl: "https://github.com/subhabrata05",
    featured: true,
    status: "Completed Prototype",
    badge: "Groq Llama 3.3 Powered"
  },
  {
    id: "ultron",
    tag: "3D · COMPUTER VISION",
    title: "U.L.T.R.O.N. — Interactive 3D Orb Interface",
    category: "Interactive 3D Web & Vision",
    technologies: ["Next.js", "React 19", "Three.js", "MediaPipe", "Web Speech API", "GLSL / Shaders"],
    summary:
      "U.L.T.R.O.N. is an interactive 3D interface combining real-time rendering, webcam-based hand tracking, voice commands, and keyboard controls.",
    features: [
      "Real-time 3D rendering using Three.js with custom lighting",
      "MediaPipe hand tracking processing camera frames in real time",
      "More than ten custom gesture controls mapped to 3D dynamics",
      "Webcam-based gesture interaction with low-latency tracking",
      "Web Speech API voice commands for hands-free audio triggers",
      "Keyboard-shortcut alternatives for universal accessibility",
      "Three complementary input methods seamlessly coexisting in one interface"
    ],
    architectureNotes:
      "Combines a Three.js canvas pipeline with Google MediaPipe hands running client-side. The state engine reconciles multi-modal input channels (camera gestures, speech synthesis recognition, and keyboard events) to modulate particle dispersion, rotation vectors, and shader illumination in real-time.",
    githubUrl: "https://github.com/subhabrata05",
    featured: true,
    status: "Interactive System",
    badge: "Multi-Modal 3D Interface"
  },
  {
    id: "phantomnet",
    tag: "MOBILE · MESH NETWORK",
    title: "PhantomNet",
    subtitle: "AI-Powered Offline Mesh Network",
    tagline: "When the internet goes offline, communication shouldn't have to.",
    category: "Decentralized Mobile Network Architecture",
    technologies: [
      "Flutter",
      "Dart",
      "Android networking APIs",
      "Rust",
      "Python",
      "TensorFlow Lite",
      "SQLite",
      "Cryptographic protocols"
    ],
    summary:
      "PhantomNet is an upcoming Flutter-based project exploring decentralized, offline-first communication for situations where internet connectivity is unavailable or unreliable. The project aims to combine local peer discovery, peer-to-peer messaging, end-to-end encryption, intelligent routing, and emergency communication in a privacy-focused mobile experience. The planned architecture explores Android networking, Rust-based cryptographic components, on-device machine learning, and a real-time mesh topology interface.",
    features: [
      "Offline peer-to-peer messaging (local device discovery without cloud servers)",
      "Secure messaging exploring authenticated encryption and key exchange",
      "Intelligent mesh routing exploring on-device connection quality prediction",
      "Ghost Mode exploring multi-hop routing and privacy-preserving communication",
      "Emergency SOS exploring offline emergency signaling and store-and-forward delivery",
      "Interactive network visualization planning a real-time topology radar interface",
      "Burn Notes exploring timed message expiration and user-controlled deletion",
      "Native cryptographic components exploring Rust integration for low-level primitives"
    ],
    architectureNotes:
      "Proposed architecture structured across four discrete tiers: A Flutter/Dart mobile UI layer with reactive state management; an Android native networking layer interfacing Wi-Fi Direct and BLE peripheral channels; a core Rust cryptographic engine compiled via FFI/NDK for key derivation and authenticated encryption; and a lightweight on-device TensorFlow Lite model evaluating connection RSSI, hop count, and node mobility to inform dynamic routing decisions.",
    featured: true,
    isUpcoming: true,
    status: "UPCOMING PROJECT",
    badge: "Upcoming / In Development",
    plannedCapabilities: [
      {
        title: "Offline peer-to-peer messaging",
        description: "Explore local device discovery and communication without depending on a cloud server."
      },
      {
        title: "Secure messaging",
        description: "Explore authenticated encryption and key exchange for message confidentiality and integrity."
      },
      {
        title: "Intelligent mesh routing",
        description: "Explore on-device prediction of connection quality and routing decisions."
      },
      {
        title: "Ghost Mode",
        description: "Explore multi-hop routing and privacy-preserving communication."
      },
      {
        title: "Emergency SOS",
        description: "Explore offline emergency signaling and store-and-forward communication."
      },
      {
        title: "Interactive network visualization",
        description: "Plan a live topology interface showing connected peers, link quality, and hop relationships."
      },
      {
        title: "Burn Notes",
        description: "Explore timed message expiration and user-controlled deletion."
      },
      {
        title: "Native cryptographic components",
        description: "Explore Rust integration for selected cryptographic operations."
      }
    ],
    caseStudy: {
      vision:
        "PhantomNet is conceived as a resilient, community-first communication system engineered to maintain vital connectivity when centralized internet infrastructure fails—whether during natural disasters, remote expeditions, cellular outages, or network congestion. By treating every mobile device as an autonomous relay node, the project envisions decentralized digital lifelines that prioritize user privacy, low battery consumption, and operational resilience.",
      problem:
        "Modern digital communication is almost entirely dependent on centralized servers, telecom base stations, and global internet routing. When extreme weather, infrastructure failure, or geographic isolation severs these backbones, individuals lose all communication capabilities. Existing ad-hoc communication tools are frequently fragmented, battery-intensive, or lack authenticated end-to-end security and clear topology visibility.",
      architecture:
        "The proposed design explores a layered hybrid stack: (1) Presentation Layer: Cross-platform Flutter client with real-time reactive streams; (2) Network Abstraction: Android Wi-Fi Direct (P2P) and Bluetooth Low Energy (BLE) channels coordinated by a custom peer manager; (3) Native Security Layer: High-performance Rust cryptographic module connected via Dart FFI for key exchange and authenticated encryption; (4) Local Persistence: Encrypted SQLite storage with automatic store-and-forward message queues; (5) Machine Learning Routing: On-device TensorFlow Lite classifier assessing link quality metrics and historical peer stability.",
      plannedTechnologies: [
        "Flutter",
        "Dart",
        "Android networking APIs",
        "Rust",
        "Python",
        "TensorFlow Lite",
        "SQLite",
        "Cryptographic protocols"
      ],
      capabilities: [
        {
          title: "Offline Peer-to-Peer Messaging",
          description: "Explore local device discovery and communication without depending on a cloud server."
        },
        {
          title: "Secure Messaging",
          description: "Explore authenticated encryption and key exchange for message confidentiality and integrity."
        },
        {
          title: "Intelligent Mesh Routing",
          description: "Explore on-device prediction of connection quality and routing decisions."
        },
        {
          title: "Ghost Mode",
          description: "Explore multi-hop routing and privacy-preserving communication."
        },
        {
          title: "Emergency SOS",
          description: "Explore offline emergency signaling and store-and-forward communication."
        },
        {
          title: "Interactive Network Visualization",
          description: "Plan a live topology interface showing connected peers, link quality, and hop relationships."
        },
        {
          title: "Burn Notes",
          description: "Explore timed message expiration and user-controlled deletion."
        },
        {
          title: "Native Cryptographic Components",
          description: "Explore Rust integration for selected cryptographic operations."
        }
      ],
      securityConsiderations:
        "Security and privacy in PhantomNet are treated as core architectural tenets rather than afterthoughts. The intended cryptographic design relies on standard authenticated encryption (such as ChaCha20-Poly1305) and modern key agreement protocols (X25519) implemented through vetted Rust crates. The project explicitly avoids claims of 'military-grade security' or unverified anonymity guarantees. All cryptographic implementations and protocol handshakes will require rigorous unit testing, fuzzing, and external peer review before production consideration. The architectural focus is firmly on privacy-preserving communication, data integrity, and emergency connectivity.",
      roadmap: [
        {
          phase: "Phase 1",
          title: "Architecture & Native Crypto Core",
          status: "in-progress",
          statusLabel: "In Development",
          details: "Formulating system protocols, Rust cryptographic bindings via Dart FFI, and local key generation routines."
        },
        {
          phase: "Phase 2",
          title: "Local Peer Discovery & Transport",
          status: "in-progress",
          statusLabel: "In Development",
          details: "Prototyping Android Wi-Fi Direct and BLE peripheral discovery handlers, peer handshake states, and SQLite message queue."
        },
        {
          phase: "Phase 3",
          title: "Multi-Hop Mesh & Ghost Mode Routing",
          status: "planned",
          statusLabel: "Planned",
          details: "Designing store-and-forward packet relaying, hop-count budgeting, and privacy-preserving metadata handling."
        },
        {
          phase: "Phase 4",
          title: "ML Link Quality & Radar Visualization",
          status: "planned",
          statusLabel: "Planned",
          details: "Integrating TensorFlow Lite routing heuristic model and real-time Flutter canvas topology radar interface."
        },
        {
          phase: "Phase 5",
          title: "Security Auditing & Testnet Evaluation",
          status: "planned",
          statusLabel: "Planned",
          details: "Conducting packet analysis, cryptographic verification, fuzz testing, and simulated field trials."
        }
      ],
      currentStatus: "Upcoming Project / Active Architectural Prototyping",
      nextMilestones: [
        "Finalize Rust FFI cryptographic bridge for cross-compilation on Android targets",
        "Implement baseline Wi-Fi Direct P2P service discovery and initial frame exchange",
        "Design schema for local encrypted SQLite store-and-forward message buffer",
        "Benchmark BLE beacon battery consumption profile during active discovery"
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "atrang",
    role: "President",
    organization: "Atrang, College Cultural Club",
    academicYear: "Third Year (Current)",
    summary:
      "I lead a core team responsible for the club's technical and operational functioning. My journey progressed from Member to Technical Coordinator and then President.",
    progression: ["Member", "Technical Coordinator", "President"],
    highlights: [
      "Lead and coordinate the core student leadership team across events",
      "Oversee technical execution for cultural events and college festivals",
      "Handle stage, acoustic engineering, and audiovisual setup",
      "Support online registration systems and on-ground technical operations",
      "Represented the college and coordinated participation at MOOD INDIGO, IIT Bombay"
    ]
  },
  {
    id: "hackathon",
    role: "Hackathon Participant",
    organization: "College-Organized Hackathon",
    academicYear: "Competitive Engineering",
    summary:
      "Ideated, prototyped, and delivered a working demo under time pressure, placing in the Top 15 after three rounds of judging.",
    highlights: [
      "Built and deployed a functional working software prototype under strict time limits",
      "Successfully defended technical choices through three consecutive rounds of jury evaluation",
      "Achieved Top 15 ranking among competing university development teams"
    ]
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: "gssoc-2026",
    number: "01",
    title: "GirlScript Summer of Code 2026",
    subtitle: "Selected Open-Source Contributor",
    description:
      "Selected as a contributor for GirlScript Summer of Code 2026. My resume records selection from a pool of more than 95,000 applicants.",
    tag: "Open Source"
  },
  {
    id: "hackathon-top15",
    number: "02",
    title: "Hackathon — Top 15 Finish",
    subtitle: "Rapid Prototyping & Defense",
    description:
      "Finished in the Top 15 at a college-organized hackathon after three rigorous rounds of judging and live technical demonstration.",
    tag: "Competition"
  },
  {
    id: "mood-indigo",
    number: "03",
    title: "MOOD INDIGO — IIT Bombay",
    subtitle: "College Representation & Coordination",
    description:
      "Represented the college and coordinated student participation at IIT Bombay's flagship cultural festival, managing logistical and team responsibilities.",
    tag: "Leadership"
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "Cybersecurity Community",
    subtitle: "CTF Challenges & Secure Coding",
    description:
      "Active in cybersecurity communities, engaging in Capture The Flag (CTF) challenges and practicing ethical hacking and defensive secure coding techniques.",
    tag: "Security"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "University of Engineering & Management, Jaipur",
    qualification: "B.Tech in Computer Science and Engineering",
    timeline: "Expected 2028 · Currently 3rd Year",
    score: "6.85",
    scoreLabel: "Current CGPA",
    description:
      "Focusing on computer systems, software engineering, algorithms, mobile computing, and intelligent systems.",
    isCurrent: true
  },
  {
    institution: "Kendriya Vidyalaya, Adra",
    qualification: "Higher Secondary Certificate (Class XII — CBSE)",
    timeline: "Completed 2023",
    score: "65%",
    scoreLabel: "CBSE Examination",
    isCurrent: false
  },
  {
    institution: "Kendriya Vidyalaya, Adra",
    qualification: "Secondary School Examination (Class X — CBSE)",
    timeline: "Completed 2021",
    score: "91%",
    scoreLabel: "CBSE Examination",
    isCurrent: false
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Explore the problem, requirements, users, and constraints.",
    details: "Analyze system architecture, user requirements, data contracts, and security edge cases before writing code."
  },
  {
    number: "02",
    title: "Build",
    summary: "Design the interface, implement the application, and integrate the required technology.",
    details: "Engineer modular React 19 components, native Android/Flutter views, hardened Express APIs, and low-latency Groq AI integrations."
  },
  {
    number: "03",
    title: "Refine",
    summary: "Test, improve usability, fix issues, and prepare the project for deployment.",
    details: "Conduct responsive viewport stress tests, performance profiling, accessibility checks, and seamless continuous deployment."
  }
];

