// ─────────────────────────────────────────────────────────────────────────────
// portfolioData.js — Single source of truth for all portfolio content.
// Edit this file to update any section. The UI re-renders automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Malak Hussein',
  location: 'Based in Maadi | On-site & Hybrid available in New Cairo, Nasr City, and the New Capital.',
  title: 'ERP & Data Operations Associate',
  tagline: 'Helping teams organize processes, improve reporting, and move manual operations into efficient digital systems.',
  goalStatement:
    'Information Systems graduate with experience supporting reporting, internal systems, and workflow digitization using SQL, Excel, Django, and React.js. Interested in data analysis and ERP systems, with current hands-on learning in Odoo customization and business workflows. Focused on helping teams organize processes, improve reporting, and move manual operations into more efficient digital systems.',
  availability: 'Open to ERP, data operations, and workflow support roles',
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
  {
    school: 'Data Analysis Diploma',
    degree: 'In progress — currently enrolled',
    period: '2025 – Present',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Honest stats — real numbers, no exaggeration
// ─────────────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '1',  label: 'Odoo Module Built',         note: 'Real estate module — bootcamp project' },
  { value: '6',  label: 'Certifications Earned',     note: 'CCNA, SQL, OWASP, GDSC & more' },
  { value: '1',  label: 'Trainee Position',           note: 'Developer & Data Analysis · Khwarizm' },
  { value: '▲',  label: 'Data Analysis Diploma',     note: 'Currently enrolled — in progress' },
];

// ─────────────────────────────────────────────────────────────────────────────
// What I Can Help With — practical capabilities, honest framing
// ─────────────────────────────────────────────────────────────────────────────
export const capabilities = [
  {
    icon: 'Settings',
    title: 'ERP Support & Configuration',
    description: 'Assist with Odoo module setup, testing, and basic customization for implementation projects.',
  },
  {
    icon: 'Database',
    title: 'SQL & Data Preparation',
    description: 'Write SQL queries, clean datasets with Excel and Power Query, and prepare data for reporting or ERP entry.',
  },
  {
    icon: 'BarChart2',
    title: 'Reporting & Dashboards',
    description: 'Build Excel dashboards and Pivot Table reports to track KPIs and share results with stakeholders.',
  },
  {
    icon: 'GitBranch',
    title: 'Workflow Digitization',
    description: 'Map manual business workflows and help move them toward structured digital approval systems.',
  },
  {
    icon: 'Users',
    title: 'Stakeholder Support',
    description: 'Support demos, prepare documentation, and explain system processes to non-technical users.',
  },
  {
    icon: 'FileText',
    title: 'Process Documentation',
    description: 'Document workflows and operational procedures to support team alignment and onboarding.',
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
    id: 'data-diploma',
    topic: 'Data Analysis Diploma',
    description:
      'Currently enrolled in a structured data analysis diploma — covering data cleaning, statistical analysis, visualization, and practical reporting workflows.',
    resources: 'Diploma coursework, hands-on assignments',
    status: 'active',
  },
  {
    id: 'advanced-sql',
    topic: 'Advanced SQL & Database Design',
    description:
      'Practicing complex queries, subqueries, and window functions through DataCamp coursework and personal reporting projects.',
    resources: 'DataCamp Intermediate SQL, personal projects',
    status: 'active',
  },
  {
    id: 'python-automation',
    topic: 'Python for Data & Automation',
    description:
      'Using Python and Pandas to automate data cleaning tasks and prepare datasets for reporting or ERP uploads.',
    resources: 'Personal projects, Pandas documentation',
    status: 'active',
  },
  {
    id: 'odoo-erp',
    topic: 'Odoo & ERP Concepts',
    description:
      'Interested in Odoo customization and ERP workflows — completed a technical bootcamp and built one module. Exploring further as time allows.',
    resources: 'Odoo Technical Bootcamp, official Odoo documentation',
    status: 'interest',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Work experience — shown in Work History (Timeline ↔ Kanban toggle)
// ─────────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 'khwarizm-trainee',
    role: 'Developer and Data Analysis Trainee',
    company: 'Khwarizm, Cairo',
    period: 'Dec 2025 – Present',
    status: 'in-progress',
    bullets: [
      'Supported workflow automation and approval process digitization for internal business systems.',
      'Contributed to Django and React.js development for workflow management interfaces.',
      'Performed SQL reporting, Excel analysis, and operational data preparation.',
      'Assisted in documenting workflows and explaining system processes to stakeholders.',
    ],
    stack: ['Python', 'Django', 'React.js', 'SQL', 'Excel', 'Docker', 'Linux', 'Jira'],
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
