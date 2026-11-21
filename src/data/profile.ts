// ข้อมูลทั้งหมดของหน้า Portfolio — แก้ไฟล์นี้ไฟล์เดียวพอ ไม่ต้องแตะ component
// ที่มา: Resume (Resume_ปิยะรัตน์_อุปชีวะ.pdf) · github.com/HelloPPiyaaa · portfolio-theta-nine-25.vercel.app

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  description: string;
  tech: string[];
  links?: Link[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

/** ตัวเลขสรุปผลงาน เช่น { value: "40+", label: "screens built" } */
export type Metric = { value: string; label: string };

/** งานลูกค้าที่ทำกับบริษัท — repo เป็น private จึงไม่มีลิงก์ code */
export type WorkProject = {
  name: string;
  context: string;
  description: string;
  /** ว่าง = ไม่แสดงแถวตัวเลข — ใส่เฉพาะตัวเลขที่เปิดเผยได้และเป็นงานของเราเอง */
  metrics?: Metric[];
  contributions: string[];
  tech: string[];
};

/** เล่างานแบบ case study — โจทย์ · สิ่งที่ทำ · ผลลัพธ์ */
export type CaseStudy = {
  name: string;
  context: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  tech: string[];
  links?: Link[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

const GITHUB = "https://github.com/HelloPPiyaaa";

export const profile = {
  name: "Piyarat Upacheewa",
  // ตำแหน่งที่สมัคร — เปิดทั้งสาย Frontend และ Full-Stack (ตำแหน่งจริงที่ Digix อยู่ใน experience)
  role: "Frontend & Full-Stack Developer",
  tagline:
    "Frontend-focused developer who builds responsive, user-friendly interfaces with React, Next.js and TypeScript — and the REST APIs behind them with NestJS, Prisma and PostgreSQL.",
  location: "Nakhon Ratchasima, Thailand",
  email: "piyarat4543@gmail.com",
  // URL โปรไฟล์ LinkedIn เช่น "https://www.linkedin.com/in/xxxx" — ว่าง = ไม่แสดงลิงก์
  linkedin: "",
  // ไฟล์ Resume ใน public/ — มีไฟล์เมื่อไหร่ปุ่ม "Download Resume" ขึ้นเอง (เช็คตอน build)
  resumePath: "/Resume_ปิยะรัตน์_อุปชีวะ.pdf",
  // ชื่อไฟล์ตอนกดดาวน์โหลด — ภาษาอังกฤษ อ่านง่ายบนเครื่อง HR / ระบบสมัครงานที่ไม่รองรับชื่อไทย
  resumeDownloadName: "Piyarat_Upacheewa_Resume.pdf",
  // URL จริงหลัง deploy (เช่น https://piyarat.vercel.app) — ใช้ใน metadata / OG
  siteUrl: "https://example.vercel.app",
  // หน้าเว็บ build เป็นไฟล์ static — Next.js 16 ไม่ให้ใช้ new Date() ตอน prerender
  copyrightYear: 2026,

  // ตัวเลขใต้ชื่อในส่วนแรกของหน้า — จำนวนโปรเจกต์นับจากข้อมูลด้านล่างเอง · ปีประสบการณ์แก้ที่นี่เมื่อครบปี
  // (เริ่มงานที่ Digix ส.ค. 2025)
  yearsExperience: "1+",

  about: [
    "I'm a frontend and full-stack developer and an IT graduate from Khon Kaen University. My strongest side is the frontend: I build web interfaces with React, Next.js, Angular, TypeScript and Tailwind CSS, and turn designs into responsive, easy-to-use pages.",
    "UI/UX is where I started: I was a Teaching Assistant for Human-Computer Interaction, guiding students on usability and interface design, and I design screens in Figma and Adobe XD before building them.",
    "On the backend I build and extend REST APIs with Node.js (NestJS, Hapi.js) and Prisma on PostgreSQL — authentication, permissions and the data behind each screen — so a feature works end to end. I enjoy solving problems, keep learning, and work well in Agile/Scrum teams.",
  ],

  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
    "UI/UX & Design": ["Figma", "Adobe XD", "Storybook"],
    "Backend & Data": ["Node.js", "NestJS", "Hapi.js", "Express.js", "RESTful APIs", "Socket.io", "Prisma ORM", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    Tools: ["Git", "GitHub", "Vitest", "Jest", "Postman", "Docker", "SonarQube", "VS Code"],
  } satisfies Record<string, string[]>,

  // งานลูกค้าที่ Digix Technology — ไม่ใส่ชื่อลูกค้า / โค้ด / URL / ระบบภายใน
  // ถ้าบริษัทอนุญาตให้ระบุชื่อลูกค้า เปลี่ยน name ได้ เช่น "AIS e-Bill"
  workProjects: [
    {
      name: "Enterprise e-Billing Platform",
      context: "Client project · Digix Technology · 2026",
      description:
        "A vendor portal and procurement back office for submitting, verifying and tracking invoices.",
      // ใส่ตัวเลขจริงของงานเรา เช่น { value: "40+", label: "screens built" },
      // { value: "20+", label: "reusable components in Storybook" }, { value: "2", label: "web apps (vendor + procurement)" }
      metrics: [] as Metric[],
      contributions: [
        "Built vendor screens for invoice submission, status tracking, e-acceptance and a help center, plus procurement admin tools for settings, announcements and vendor approvals.",
        "Made SAP invoice posting resilient: throttled calls under the service-bus rate limit and treated gateway rejections as retryable, so postings no longer got stuck.",
        "Extended NestJS + Prisma (PostgreSQL) APIs for invoice tracking, payments and acceptance lookups.",
        "Fixed data accuracy across both web apps and the API, including consistent number formatting and audit fields.",
        "Built a reusable UI component library documented in Storybook.",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Storybook", "NestJS", "Prisma", "PostgreSQL", "SAP Integration", "Vitest", "Jest"],
    },
    {
      name: "POCT — Point of Care Testing Platform",
      context: "Client project · Digix Technology · Sole developer (frontend & backend)",
      description:
        "A web application for managing point-of-care laboratory testing: users and roles, hospitals and departments, testing devices, quality control (IQC, EQA, control solutions), blood glucose tests and a summary dashboard.",
      // เช่น { value: "N", label: "hospitals on their own domain" }, { value: "N", label: "user roles" }
      metrics: [] as Metric[],
      contributions: [
        "Built the whole system on my own — the database, the REST APIs and every screen.",
        "Modelled the lab workflow: users and roles, hospitals and departments, testing devices, quality control (IQC, EQA, control solutions), blood glucose tests and a summary dashboard.",
        "Implemented JWT authentication stored in cookies and role-based permissions, enforced in the API and reflected in the UI.",
        "Built multi-tenant behaviour so each hospital works under its own domain.",
      ],
      // stack ที่ใช้จริง — หน้าบ้าน แล้วตามด้วยหลังบ้าน
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Context", "Axios", "SweetAlert2", "Hapi.js", "Prisma", "PostgreSQL", "REST API", "JWT", "Multi-tenant"],
    },
  ] satisfies WorkProject[],

  // ข้อมูลจาก README ของ repo / งานวิชา HCI — ไม่ใส่ตัวเลขที่ไม่มีที่มา
  caseStudies: [
    {
      name: "Trackify",
      context: "Personal project · Full-stack issue tracker",
      summary: "A simple issue tracker for software projects — from creating a project to moving each issue from Open to Done.",
      problem:
        "Small teams need one place to log issues per project and see what is still open, without the overhead of a heavy tool like Jira.",
      approach: [
        "Organised the app around a dashboard overview, project pages and issue management.",
        "Built the frontend in React and TypeScript with React Router for client-side routing and Axios for API calls.",
        "Modelled issue status as a clear Open → In Progress → Done flow, with toast notifications for user feedback.",
        "Kept the dashboard responsive with Bootstrap and custom CSS so it works on mobile and desktop.",
        "Wrote the REST API in Node.js / Express with MongoDB, and secured it with JWT sign-in and bcrypt-hashed passwords.",
      ],
      outcome: [
        "Deployed and usable online — create a project, report issues and track their status end to end.",
        "Hands-on experience owning a feature from UI design through API and authentication.",
      ],
      tech: ["React", "TypeScript", "React Router", "Axios", "Bootstrap", "Node.js", "Express", "MongoDB", "JWT"],
      links: [
        { label: "Live Demo", href: "https://trackify-orcin.vercel.app" },
        { label: "GitHub", href: `${GITHUB}/Trackify` },
      ],
    },
    {
      name: "Findaboss",
      context: "Human-Computer Interaction course · UX design",
      summary: "A job search platform designed user-first — from research to an interactive prototype.",
      problem:
        "Job seekers often struggle with cluttered job boards: it is hard to filter roles, compare openings and know where to start.",
      approach: [
        "Ran user research to understand how job seekers search and where they get stuck.",
        "Mapped user flows for the main tasks — searching, filtering and viewing a job — before drawing any screens.",
        "Designed the interface in Figma with accessibility in mind: readable type, clear contrast and simple navigation.",
        "Turned the screens into an interactive prototype to walk through the flows like a real app.",
      ],
      outcome: [
        "A clickable Figma prototype covering the core job-search journey.",
        "The HCI groundwork I later used as a Teaching Assistant for the same course.",
      ],
      tech: ["Figma", "User Research", "User Flows", "Prototyping", "Accessibility"],
      links: [{ label: "Figma Prototype", href: "https://www.figma.com/proto/oztG9YkLNOaHN2RvwF3ewq/" }],
    },
  ] satisfies CaseStudy[],

  // เรียงงานที่หน้าบ้านเด่นก่อน · คำอธิบายเล่า UI ก่อนแล้วตามด้วยหลังบ้าน (สมัครทั้งสาย Frontend และ Full-Stack)
  projects: [
    {
      name: "Trackify",
      description:
        "A full-stack issue tracker: a React and TypeScript UI with project and issue pages, a dashboard and an Open → In Progress → Done flow, backed by a Node.js / Express API on MongoDB with JWT sign-in.",
      tech: ["React", "TypeScript", "React Router", "Bootstrap", "Node.js", "MongoDB"],
      links: [
        { label: "Live Demo", href: "https://trackify-orcin.vercel.app" },
        { label: "GitHub", href: `${GITHUB}/Trackify` },
      ],
    },
    {
      name: "KKU Blogging Platform",
      description:
        "A blogging platform for KKU students: a React and TypeScript UI with a block editor for writing posts, tags and search, real-time chat and notifications, plus a separate admin dashboard — backed by a Node.js / Express API on MongoDB with JWT sessions, Google Sign-In and Socket.IO.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
      links: [
        { label: "Live Demo", href: "https://kku-blogging-platform.vercel.app" },
        { label: "GitHub", href: "https://github.com/PiyaratU/KKU-Blogging-Platform" },
      ],
    },
    {
      name: "Paopé — E-commerce Platform",
      description:
        "A responsive online bag shop designed in Figma and built with HTML, CSS and Bootstrap — product pages, a cart, intuitive navigation and an attractive product display (Web Design Technology course).",
      tech: ["Figma", "HTML", "CSS", "Bootstrap"],
      links: [{ label: "GitHub", href: `${GITHUB}/project-paope-design` }],
    },
    {
      name: "Findaboss",
      description:
        "A job search platform designed for the Human-Computer Interaction course — user research, user flows and an interactive Figma prototype focused on accessible design.",
      tech: ["Figma", "User Research", "UX Design"],
      links: [{ label: "Figma", href: "https://www.figma.com/proto/oztG9YkLNOaHN2RvwF3ewq/" }],
    },
    {
      name: "Tiger Book",
      description: "A web application for renting books online — browse titles, rent and pay — with server-rendered EJS pages and a MongoDB database.",
      tech: ["EJS", "JavaScript", "CSS", "MongoDB"],
      links: [{ label: "GitHub", href: `${GITHUB}/borrowbook-project` }],
    },
    {
      name: "Game EIEI",
      description: "A website that recommends games and compares prices across stores and platforms, with game details and reviews stored in MySQL.",
      tech: ["Java", "CSS", "MySQL"],
      links: [{ label: "GitHub", href: `${GITHUB}/Java-project` }],
    },
  ] satisfies Project[],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "Digix Technology",
      period: "Aug 2025 – Present",
      // รายละเอียดแต่ละงานอยู่ใน workProjects — ตรงนี้สรุปสั้น ไม่ให้ซ้ำ
      highlights: [
        "Build client web applications end to end — sole developer of a Point of Care Testing (POCT) system, and full-stack developer on an enterprise e-billing platform.",
        "Frontend with React, Next.js, TypeScript and Tailwind CSS; backend REST APIs with NestJS and Hapi.js on Prisma and PostgreSQL — authentication, permissions, multi-tenant routing and SAP integration.",
        "Keep quality gates green with unit tests (Vitest, Jest), SonarQube and security scans, working in an Agile/Scrum team.",
      ],
    },
    {
      role: "Teaching Assistant — Human-Computer Interaction",
      company: "Khon Kaen University",
      period: "Nov 2023 – Dec 2024",
      highlights: [
        "Guided students on usability principles and UI/UX design practices.",
        "Reviewed assignments and gave constructive feedback on web and app interfaces.",
        "Helped instructors organize workshops and class discussions.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "TPID Innovation Co., Ltd.",
      period: "Apr – May 2024",
      highlights: [
        "Designed website UIs in Figma and Adobe XD, then built the sites with CodeIgniter and MySQL.",
        "Integrated APIs, tested them with Postman and wrote test cases.",
        "Used Git/GitHub for version control and trained clients on the system.",
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      school: "Khon Kaen University",
      degree: "B.Sc. in Information Technology",
      period: "2021 – 2025",
      details:
        "Coursework: Human-Computer Interaction, Web Application Programming, Database Analysis and Design, Web Design Technologies, Mobile Device Programming, Mobile Web Application Development.",
    },
  ] satisfies Education[],

  // GitHub เสมอ · LinkedIn เพิ่มเมื่อกรอก `linkedin` ด้านบน
  links: [{ label: "GitHub", href: GITHUB }] satisfies Link[],
};
