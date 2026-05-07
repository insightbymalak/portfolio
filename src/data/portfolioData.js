// ─────────────────────────────────────────────────────────────────────────────
// portfolioData.js — Single source of truth for all portfolio content.
// Edit this file to update any section. The UI re-renders automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Malak Hussein',
  location: 'Based in Maadi | On-site & Hybrid available in New Cairo, Nasr City, and the New Capital.',
  title: 'Junior ERP & Operations Associate',
  tagline: 'Helping teams move from manual processes to structured, digital workflows.',
  goalStatement:
    'Information Systems graduate with hands-on exposure to ERP systems, SQL, Excel, and workflow automation. I enjoy helping businesses organize their operations, improve reporting, and digitize manual processes — and I\'m currently deepening my knowledge in Odoo customization and implementation to contribute meaningfully to real ERP projects.',
  availability: 'Open to ERP, operations, and data support roles',
};

export const contact = {
  email: 'malak.hussein9803@gmail.com',
  phone: '+201023004315',
  whatsapp: 'https://wa.me/201023004315',
  linkedin: 'https://www.linkedin.com/in/malak-hussein-24946a221/',
  github: 'https://github.com/insightbymalak',
};

export const education = [
  {
    school: 'Future University in Egypt',
    degree: "Bachelor's Degree in Information Systems",
    period: 'Oct 2021 – June 2025',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Honest stats — real numbers, no exaggeration
// ─────────────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '1',  label: 'Odoo Module Built',       note: 'Real estate module — bootcamp project' },
  { value: '6+', label: 'Months ERP Exposure',     note: 'Odoo bootcamp + self-driven projects' },
  { value: '6',  label: 'Certifications Earned',   note: 'CCNA, SQL, OWASP, GDSC & more' },
  { value: '1',  label: 'Internship',               note: 'Software Intern · Khwarizm' },
];

// ─────────────────────────────────────────────────────────────────────────────
// What I Can Help With — practical capabilities, honest framing
// ─────────────────────────────────────────────────────────────────────────────
export const capabilities = [
  {
    icon: 'Settings',
    title: 'ERP Support & Configuration',
    description:
      'Assist with Odoo module setup, testing, and basic customization. Support implementation projects, help document processes, and coordinate between technical and business teams.',
  },
  {
    icon: 'Database',
    title: 'SQL Querying & Data Tasks',
    description:
      'Write SQL queries to extract, filter, and transform data. Clean and prepare datasets using Excel, Power Query, and Pandas for reporting or ERP data entry.',
  },
  {
    icon: 'BarChart2',
    title: 'Reporting & Dashboards',
    description:
      'Build Excel dashboards, Pivot Table reports, and simple Power BI visuals to help teams track KPIs, monitor operational metrics, and share results with stakeholders.',
  },
  {
    icon: 'GitBranch',
    title: 'Workflow Digitization',
    description:
      'Help map and document manual business workflows, then assist in moving them toward structured digital systems — approval flows, automated steps, and clear process logic.',
  },
  {
    icon: 'Users',
    title: 'Team & Stakeholder Support',
    description:
      'Communicate technical concepts to non-technical users. Support demos, prepare training materials, and assist with system rollouts and user adoption.',
  },
  {
    icon: 'FileText',
    title: 'Process Documentation',
    description:
      'Document business processes, system workflows, and operational procedures clearly — so teams have a reliable reference and onboarding becomes easier.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skills — four honest categories, no fake percentages
// ─────────────────────────────────────────────────────────────────────────────
export const skills = {
  'Comfortable With': {
    color: 'crystal-blue',
    dot: '🟢',
    items: [
      'Microsoft Excel',
      'Pivot Tables & VLOOKUP',
      'Power Query (Data Cleaning)',
      'SQL Querying (SELECT, JOIN, GROUP BY)',
      'Data Validation & Cleaning',
      'Workflow Documentation',
      'Business Process Understanding',
      'Stakeholder Communication',
    ],
  },
  'Working Knowledge': {
    color: 'dreamy-lilac',
    dot: '🟡',
    items: [
      'Odoo (Modules, Models, Views)',
      'Python (Automation & Pandas)',
      'Django (REST API basics)',
      'React.js (Component basics)',
      'Power BI (Basic Dashboards)',
      'Git & Version Control',
      'Linux (Command Line)',
      'Docker (Basic Usage)',
    ],
  },
  'Currently Learning': {
    color: 'fairy-pink',
    dot: '🔵',
    items: [
      'Odoo Implementation Methodology',
      'Advanced SQL & Database Design',
      'ERP Customization & Configuration',
      'KPI Dashboard Design',
      'Business Intelligence Concepts',
    ],
  },
  'Practical Exposure': {
    color: 'honey-deep',
    dot: '⚪',
    items: [
      'Network Fundamentals (CCNA)',
      'Security Awareness (OWASP Top 10)',
      'Agile & Scrum Basics',
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Current Learning Journey — honest, growth-oriented
// ─────────────────────────────────────────────────────────────────────────────
export const learning = [
  {
    id: 'odoo-impl',
    topic: 'Odoo Implementation & Customization',
    description:
      'Studying how Odoo modules are configured and customized for real client projects — including functional setup, data migration concepts, and ERP rollout support.',
    resources: 'Odoo docs, Technical Bootcamp, hands-on module building',
    status: 'active',
  },
  {
    id: 'advanced-sql',
    topic: 'Advanced SQL & Database Design',
    description:
      'Practicing more complex queries, subqueries, window functions, and thinking about how databases are structured for business reporting use cases.',
    resources: 'DataCamp Intermediate SQL course, personal practice projects',
    status: 'active',
  },
  // {
  //   id: 'power-bi',
  //   topic: 'Power BI & Business Intelligence',
  //   description:
  //     'Learning to build business dashboards that turn raw data into clear visuals — currently focusing on DAX basics and report layout best practices.',
  //   resources: 'Microsoft Learn, YouTube tutorials, Excel-to-BI practice',
  //   status: 'active',
  // },
  {
    id: 'python-automation',
    topic: 'Python for Business Automation',
    description:
      'Using Python and Pandas to automate repetitive data tasks — cleaning spreadsheets, merging files, and preparing data for reporting or ERP uploads.',
    resources: 'Personal projects, Odoo scripting practice, documentation',
    status: 'ongoing',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Work experience — shown in Work History (Timeline ↔ Kanban toggle)
// ─────────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 'khwarizm-intern',
    role: 'Software Intern',
    company: 'Khwarizm (Software Consulting)',
    period: 'Dec 2025 – Present',
    status: 'in-progress',
    bullets: [
      'Replaced manual processes with automated approval workflows, improving operational clarity for internal business systems.',
      'Contributed to full-stack development using Django and React.js — building and testing workflow interfaces.',
      'Performed data analysis and reporting using SQL and Excel; supported stakeholder system demos and process walkthroughs.',
    ],
    stack: ['Python', 'Django', 'React.js', 'SQL', 'Excel'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Certifications — real certs identified from your certificates folder.
// Add `link` (credential URL) when available to enable the verify ↗ button.
// ─────────────────────────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 'odoo-bootcamp',
    name: 'Odoo Technical Bootcamp',
    issuer: 'Odoo',
    date: 'April 2026',
    color: 'dreamy-lilac',
    link: null,                // ← paste Odoo credential URL here
    appliesTo: ['odoo-real-estate'],
  },
  {
    id: 'ccna-itn',
    name: 'CCNA — Introduction to Networks',
    issuer: 'Cisco',
    date: 'March 2024',
    color: 'crystal-blue',
    link: null,
    appliesTo: [],
  },
  {
    id: 'intermediate-sql',
    name: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2025',
    color: 'honey-deep',
    link: null,
    appliesTo: ['kpi-reporting-dashboard'],
  },
  {
    id: 'owasp-top10',
    name: 'Learning the OWASP Top 10',
    issuer: 'LinkedIn Learning',
    date: '2025',
    color: 'fairy-pink',
    link: null,
    appliesTo: [],
  },
  {
    id: 'gdsc',
    name: 'Certificate of Completion',
    issuer: 'Google Developer Student Clubs',
    date: '2024',
    color: 'crystal-blue',
    link: null,
    appliesTo: [],
  },
  {
    id: 'linkedin-cert',
    name: 'Skills That Set Data Scientists Apart',
    issuer: 'LinkedIn Learning',
    date: '2025',
    color: 'honey-deep',
    link: null,                // ← update name + link once you check the PDF
    appliesTo: [],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Flow chart — Automation Logic diagram
// ─────────────────────────────────────────────────────────────────────────────
export const flowChart = {
  title: 'How I Think About Workflow Improvement',
  stages: [
    { id: 'understand', label: 'Understand', sub: 'Map the current process' },
    { id: 'clean',      label: 'Clean Data', sub: 'SQL · Power Query · Excel' },
    { id: 'automate',   label: 'Automate',   sub: 'Workflows · Odoo · Python' },
    { id: 'report',     label: 'Report',     sub: 'Power BI · KPI dashboards' },
    { id: 'support',    label: 'Support',    sub: 'Docs · Training · Handoff' },
  ],
};
