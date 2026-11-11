// Sample registry for the frontend prototype.
// Replace this module with a database query when candidate records move to PostgreSQL or Supabase.

export const categories = [
  {
    slug: "software-development",
    name: "Software Development",
    blurb: "People who design, build and look after software.",
    icon: "code",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    blurb: "Campaign, content and channel specialists.",
    icon: "megaphone",
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    blurb: "Partners who support managers and hiring.",
    icon: "users",
  },
  {
    slug: "finance-and-accounting",
    name: "Finance and Accounting",
    blurb: "Accountants, analysts and finance managers.",
    icon: "landmark",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    blurb: "Designers working across brand, print and product.",
    icon: "pen",
  },
  {
    slug: "sales-and-business-development",
    name: "Sales and Business Development",
    blurb: "People who manage accounts and new business.",
    icon: "handshake",
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    blurb: "Leads and specialists in customer operations.",
    icon: "headphones",
  },
  {
    slug: "project-management",
    name: "Project Management",
    blurb: "Managers who keep delivery on a readable plan.",
    icon: "kanban",
  },
];

export const availabilityOptions = [
  "Available now",
  "One month notice",
  "Three month notice",
  "Open to conversations",
];

export const experienceOptions = [
  { value: "0-2", label: "0 to 2 years" },
  { value: "3-5", label: "3 to 5 years" },
  { value: "6-9", label: "6 to 9 years" },
  { value: "10+", label: "10 years or more" },
];

export const candidates = [
  {
    id: "amira-hassan",
    name: "Amira Hassan",
    title: "Senior Product Designer",
    city: "London",
    country: "United Kingdom",
    category: "Graphic Design",
    years: 8,
    skills: ["Design systems", "User research", "Prototyping", "Interface writing", "Figma"],
    educationLevel: "Master's",
    education: [
      { qualification: "MA Interface Design", institution: "Holborn School of Design", year: "2018" },
      { qualification: "BA Graphic Design", institution: "Holborn School of Design", year: "2016" },
    ],
    history: [
      {
        role: "Senior Product Designer",
        employer: "Northwind Studio",
        period: "2021 to present",
        summary: "Sets the design rules for a suite of web applications and reviews major flows before release.",
      },
      {
        role: "Product Designer",
        employer: "Fieldnote",
        period: "2018 to 2021",
        summary: "Designed onboarding and account settings for a client portal used by operations teams.",
      },
    ],
    availability: "Available now",
    salary: "GBP 74,000 per year",
    summary:
      "Amira designs software that operations teams use every day. She is careful with language, spacing and the handoff to engineers.",
    portrait: { style: "hijab", skin: "#C68642", hair: "#17324F", shirt: "#F4F7FB", bg: "#EAF4FF" },
  },
  {
    id: "leila-mansour",
    name: "Leila Mansour",
    title: "Graphic Designer",
    city: "Casablanca",
    country: "Morocco",
    category: "Graphic Design",
    years: 5,
    skills: ["Art direction", "Typography", "Brand layout", "Adobe InDesign", "Illustration"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BA Graphic Design", institution: "Casablanca School of Visual Arts", year: "2020" },
    ],
    history: [
      {
        role: "Graphic Designer",
        employer: "Westferry Media",
        period: "2022 to present",
        summary: "Designs campaign assets and checks them on press and on screen before they go out.",
      },
      {
        role: "Junior Designer",
        employer: "Harborlight",
        period: "2020 to 2022",
        summary: "Produced layouts for seasonal offers and kept the file handover tidy.",
      },
    ],
    availability: "Available now",
    salary: "MAD 180,000 per year",
    summary:
      "Leila designs print and digital pieces that still look considered when they are reproduced in a hurry. She is particular about type size and the files she hands over.",
    portrait: { style: "curls", skin: "#C68642", hair: "#1F1A17", shirt: "#7A3142", bg: "#F4F7FB" },
  },
  {
    id: "hana-sato",
    name: "Hana Sato",
    title: "IT Project Analyst",
    city: "Tokyo",
    country: "Japan",
    category: "Project Management",
    years: 4,
    skills: ["Systems analysis", "SQL", "Requirements", "Stakeholder workshops", "IT service management"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BSc Information Systems", institution: "Kanto Institute of Technology", year: "2021" },
    ],
    history: [
      {
        role: "IT Project Analyst",
        employer: "Kestrel Analytics",
        period: "2023 to present",
        summary: "Turns operational complaints into a short list of system changes the engineering team can schedule.",
      },
      {
        role: "IT Support Analyst",
        employer: "Harborlight",
        period: "2021 to 2023",
        summary: "Supported front office staff and wrote the notes that stopped the same incident returning.",
      },
    ],
    availability: "Open to conversations",
    salary: "JPY 6,800,000 per year",
    summary:
      "Hana sits between the people who use a system and the people who change it. She writes requirements a developer can estimate.",
    portrait: { style: "bun", skin: "#F3D6C3", hair: "#1F1A17", shirt: "#3986D7", bg: "#EAF4FF" },
  },
  {
    id: "nadia-berg",
    name: "Nadia Berg",
    title: "Project Manager",
    city: "Amsterdam",
    country: "Netherlands",
    category: "Project Management",
    years: 9,
    skills: ["Project planning", "Risk logs", "Stakeholder updates", "Budget tracking", "Agile"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BSc Business Information Systems", institution: "Amsterdam School of Commerce", year: "2016" },
    ],
    history: [
      {
        role: "Project Manager",
        employer: "Fieldnote",
        period: "2021 to present",
        summary: "Runs delivery for a client portal, including the releases that slip and the ones that do not.",
      },
      {
        role: "Project Coordinator",
        employer: "Harborlight",
        period: "2016 to 2021",
        summary: "Kept agendas, risks and the list of decisions in one place the team would actually open.",
      },
    ],
    availability: "One month notice",
    salary: "EUR 78,000 per year",
    summary:
      "Nadia keeps a plan that the people doing the work still recognize. She would rather shrink a scope than pretend a date is comfortable.",
    portrait: { style: "side", skin: "#E6C2A6", hair: "#3A2A22", shirt: "#2F4A3C", bg: "#F7FAFE" },
  },
  {
    id: "jonah-adeyemi",
    name: "Jonah Adeyemi",
    title: "Backend Engineer",
    city: "Lagos",
    country: "Nigeria",
    category: "Software Development",
    years: 6,
    skills: ["Go", "PostgreSQL", "API design", "Distributed systems", "SQL"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BSc Computer Science", institution: "Yaba Institute of Technology", year: "2019" },
    ],
    history: [
      {
        role: "Backend Engineer",
        employer: "Kestrel Analytics",
        period: "2022 to present",
        summary: "Builds data ingestion services and keeps query times steady as the volume grows.",
      },
      {
        role: "Software Engineer",
        employer: "Quayline Systems",
        period: "2019 to 2022",
        summary: "Maintained payment and notification APIs for a logistics product.",
      },
    ],
    availability: "One month notice",
    salary: "NGN 14,000,000 per year",
    summary:
      "Jonah builds services that other teams depend on. He writes clear APIs and pays attention to the database when features get busy.",
    portrait: { style: "beard", skin: "#5C3A28", hair: "#1F1A17", shirt: "#172B46", bg: "#E7EEF6" },
  },
  {
    id: "omar-elsayed",
    name: "Omar El-Sayed",
    title: "Full Stack Developer",
    city: "Cairo",
    country: "Egypt",
    category: "Software Development",
    years: 5,
    skills: ["JavaScript", "React", "Node.js", "SQL", "Accessibility"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BSc Computer Science", institution: "Nile Technical University", year: "2020" },
    ],
    history: [
      {
        role: "Full Stack Developer",
        employer: "Fieldnote",
        period: "2022 to present",
        summary: "Builds internal tools and checks keyboard use and slow connections before a feature is called done.",
      },
      {
        role: "Web Developer",
        employer: "Quayline Systems",
        period: "2020 to 2022",
        summary: "Delivered marketing pages and a small customer portal for regional offices.",
      },
    ],
    availability: "Available now",
    salary: "EGP 480,000 per year",
    summary:
      "Omar builds interfaces that still make sense when the network is slow. He tests with the keyboard before he calls a feature done.",
    portrait: { style: "short", skin: "#C68642", hair: "#1F1A17", shirt: "#4A5568", bg: "#F4F7FB" },
  },
  {
    id: "daniel-cho",
    name: "Daniel Cho",
    title: "Digital Marketing Manager",
    city: "Singapore",
    country: "Singapore",
    category: "Digital Marketing",
    years: 9,
    skills: ["Campaign planning", "Paid media", "Email marketing", "Analytics", "Copywriting"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BA Communications", institution: "Marina Business School", year: "2016" },
    ],
    history: [
      {
        role: "Digital Marketing Manager",
        employer: "Westferry Media",
        period: "2020 to present",
        summary: "Plans campaigns for a publishing group and measures which stories bring subscribers.",
      },
      {
        role: "Marketing Executive",
        employer: "Harborlight",
        period: "2016 to 2020",
        summary: "Wrote launch material for a hotel group's regional offers.",
      },
    ],
    availability: "Open to conversations",
    salary: "SGD 120,000 per year",
    summary:
      "Daniel plans digital campaigns that a sales team can explain. He would rather show a useful report than a crowded slide.",
    portrait: { style: "side", skin: "#F3D6C3", hair: "#1F1A17", shirt: "#172B46", bg: "#EAF4FF", glasses: true },
  },
  {
    id: "freya-nielsen",
    name: "Freya Nielsen",
    title: "Brand Manager",
    city: "Copenhagen",
    country: "Denmark",
    category: "Digital Marketing",
    years: 7,
    skills: ["Brand management", "Art direction", "Campaign planning", "Copywriting", "Guidelines"],
    educationLevel: "Master's",
    education: [
      { qualification: "MA Marketing", institution: "Oresund School of Communication", year: "2018" },
    ],
    history: [
      {
        role: "Brand Manager",
        employer: "Westferry Media",
        period: "2021 to present",
        summary: "Looks after the visual system for three titles and briefs external studios.",
      },
      {
        role: "Brand Executive",
        employer: "Harborlight",
        period: "2018 to 2021",
        summary: "Produced guidelines for seasonal campaigns and checked the work before it went out.",
      },
    ],
    availability: "One month notice",
    salary: "DKK 620,000 per year",
    summary:
      "Freya protects a brand without freezing it. She writes guidelines that a junior designer can use on a Tuesday afternoon.",
    portrait: { style: "long", skin: "#F3D6C3", hair: "#8C6A4A", shirt: "#2F4A3C", bg: "#F7FAFE" },
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    title: "HR Business Partner",
    city: "Dubai",
    country: "United Arab Emirates",
    category: "Human Resources",
    years: 7,
    skills: ["Employee relations", "Hiring plans", "Policy writing", "Coaching", "HR systems"],
    educationLevel: "Master's",
    education: [
      { qualification: "MA Human Resource Management", institution: "Al Noor University", year: "2018" },
    ],
    history: [
      {
        role: "HR Business Partner",
        employer: "Sable Health",
        period: "2021 to present",
        summary: "Supports clinic managers on hiring, conduct and team structure.",
      },
      {
        role: "HR Advisor",
        employer: "Aster Schools",
        period: "2018 to 2021",
        summary: "Handled contracts and onboarding for academic and support staff.",
      },
    ],
    availability: "Available now",
    salary: "AED 300,000 per year",
    summary:
      "Priya is the person managers call before a problem becomes a formal case. She writes policies people can follow.",
    portrait: { style: "long", skin: "#8D5524", hair: "#1F1A17", shirt: "#7A3142", bg: "#EAF4FF" },
  },
  {
    id: "aisha-rahman",
    name: "Aisha Rahman",
    title: "Talent Partner",
    city: "Manchester",
    country: "United Kingdom",
    category: "Human Resources",
    years: 4,
    skills: ["Interview design", "Hiring plans", "Candidate care", "Scheduling", "HR systems"],
    educationLevel: "Bachelor's",
    education: [{ qualification: "BA Psychology", institution: "Irwell University", year: "2021" }],
    history: [
      {
        role: "Talent Partner",
        employer: "Sable Health",
        period: "2023 to present",
        summary: "Runs hiring for clinical support roles and tells candidates where they stand.",
      },
      {
        role: "Recruitment Coordinator",
        employer: "Aster Schools",
        period: "2021 to 2023",
        summary: "Scheduled panels and kept the offer paperwork moving.",
      },
    ],
    availability: "Available now",
    salary: "GBP 42,000 per year",
    summary:
      "Aisha thinks candidates remember how a process felt. She sends the update she promised, even when the answer is not ready.",
    portrait: { style: "hijab", skin: "#8D5524", hair: "#3986D7", shirt: "#F4F7FB", bg: "#F4F7FB" },
  },
  {
    id: "sofia-lindgren",
    name: "Sofia Lindgren",
    title: "Finance Manager",
    city: "Stockholm",
    country: "Sweden",
    category: "Finance and Accounting",
    years: 11,
    skills: ["Financial planning", "IFRS", "Forecasting", "Excel", "Leadership"],
    educationLevel: "Master's",
    education: [
      { qualification: "MSc Finance", institution: "Nordic School of Economics", year: "2014" },
      { qualification: "BSc Business", institution: "Nordic School of Economics", year: "2012" },
    ],
    history: [
      {
        role: "Finance Manager",
        employer: "Orchard Mutual",
        period: "2019 to present",
        summary: "Owns the quarterly forecast and works with department leads on hiring plans.",
      },
      {
        role: "Financial Analyst",
        employer: "Plover Insurance",
        period: "2014 to 2019",
        summary: "Built the reporting pack used by the regional leadership team.",
      },
    ],
    availability: "Three month notice",
    salary: "SEK 860,000 per year",
    summary:
      "Sofia likes a forecast that department leads can actually use. She explains the numbers without dressing them up.",
    portrait: { style: "bun", skin: "#F3D6C3", hair: "#6B4423", shirt: "#172B46", bg: "#E7EEF6" },
  },
  {
    id: "claire-dubois",
    name: "Claire Dubois",
    title: "Financial Accountant",
    city: "Lyon",
    country: "France",
    category: "Finance and Accounting",
    years: 8,
    skills: ["Month-end close", "Reconciliation", "Excel", "VAT", "Statutory reporting"],
    educationLevel: "Professional qualification",
    education: [
      {
        qualification: "Professional Diploma in Accounting",
        institution: "Lyon School of Accountancy",
        year: "2017",
      },
    ],
    history: [
      {
        role: "Financial Accountant",
        employer: "Orchard Mutual",
        period: "2020 to present",
        summary: "Closes the books for two European entities and prepares the audit file.",
      },
      {
        role: "Assistant Accountant",
        employer: "Plover Insurance",
        period: "2017 to 2020",
        summary: "Reconciled bank accounts and supplier statements.",
      },
    ],
    availability: "One month notice",
    salary: "EUR 52,000 per year",
    summary:
      "Claire runs a close that finishes when she said it would. She would rather fix a reconciliation than explain it away.",
    portrait: { style: "side", skin: "#F3D6C3", hair: "#3A2A22", shirt: "#4A5568", bg: "#F7FAFE", glasses: true },
  },
  {
    id: "lucas-ferreira",
    name: "Lucas Ferreira",
    title: "Account Executive",
    city: "São Paulo",
    country: "Brazil",
    category: "Sales and Business Development",
    years: 5,
    skills: ["Account management", "Negotiation", "Pipeline reviews", "CRM", "Business development"],
    educationLevel: "Bachelor's",
    education: [{ qualification: "BA Business", institution: "Paulista Business Faculty", year: "2020" }],
    history: [
      {
        role: "Account Executive",
        employer: "Copperlane Logistics",
        period: "2023 to present",
        summary: "Looks after regional shippers and renews annual contracts.",
      },
      {
        role: "Sales Associate",
        employer: "Southbank Markets",
        period: "2020 to 2023",
        summary: "Qualified inbound leads for a wholesale food group.",
      },
    ],
    availability: "Available now",
    salary: "BRL 190,000 per year",
    summary:
      "Lucas keeps a short list of accounts and knows where each contract stands. He writes follow-ups the same day he promises them.",
    portrait: { style: "beard", skin: "#D9A679", hair: "#1F1A17", shirt: "#172B46", bg: "#EAF4FF" },
  },
  {
    id: "maya-chen",
    name: "Maya Chen",
    title: "Sales Operations Manager",
    city: "Sydney",
    country: "Australia",
    category: "Sales and Business Development",
    years: 9,
    skills: ["Sales operations", "Forecasting", "CRM", "Excel", "Process design"],
    educationLevel: "Bachelor's",
    education: [{ qualification: "BA Commerce", institution: "Sydney College of Commerce", year: "2016" }],
    history: [
      {
        role: "Sales Operations Manager",
        employer: "Copperlane Logistics",
        period: "2021 to present",
        summary: "Maintains the pipeline stages and the weekly forecast the directors actually read.",
      },
      {
        role: "Sales Coordinator",
        employer: "Southbank Markets",
        period: "2016 to 2021",
        summary: "Kept pricing sheets and tender calendars in one place.",
      },
    ],
    availability: "Open to conversations",
    salary: "AUD 145,000 per year",
    summary:
      "Maya makes a sales team easier to understand. If a number cannot be traced, she does not put it in the forecast.",
    portrait: { style: "long", skin: "#F3D6C3", hair: "#1F1A17", shirt: "#3986D7", bg: "#F4F7FB" },
  },
  {
    id: "elena-petrova",
    name: "Elena Petrova",
    title: "Customer Support Lead",
    city: "Berlin",
    country: "Germany",
    category: "Customer Support",
    years: 6,
    skills: ["Support operations", "Quality review", "Help centre writing", "Coaching", "CRM"],
    educationLevel: "Diploma",
    education: [
      { qualification: "Diploma in Customer Operations", institution: "Berlin School of Service", year: "2019" },
    ],
    history: [
      {
        role: "Customer Support Lead",
        employer: "Linden Goods",
        period: "2022 to present",
        summary: "Runs a team of twelve and rewrites the replies that cause repeat contacts.",
      },
      {
        role: "Support Specialist",
        employer: "Paperline Retail",
        period: "2019 to 2022",
        summary: "Handled orders, returns and the cases that did not fit the template.",
      },
    ],
    availability: "One month notice",
    salary: "EUR 58,000 per year",
    summary:
      "Elena treats support as an operations job. She looks for the repeated question and fixes the article, not just the ticket.",
    portrait: { style: "short", skin: "#F3D6C3", hair: "#6B4423", shirt: "#2F4A3C", bg: "#EAF4FF" },
  },
  {
    id: "ingrid-solberg",
    name: "Ingrid Solberg",
    title: "Customer Experience Manager",
    city: "Oslo",
    country: "Norway",
    category: "Customer Support",
    years: 12,
    skills: ["Customer experience", "Quality review", "Support operations", "Coaching", "Voice of customer"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BA Service Management", institution: "Fjord College of Management", year: "2013" },
    ],
    history: [
      {
        role: "Customer Experience Manager",
        employer: "Linden Goods",
        period: "2018 to present",
        summary: "Studies why customers write in and changes the policy when the policy is the problem.",
      },
      {
        role: "Support Supervisor",
        employer: "Paperline Retail",
        period: "2013 to 2018",
        summary: "Supervised a contact centre shift and trained new starters.",
      },
    ],
    availability: "Three month notice",
    salary: "NOK 920,000 per year",
    summary:
      "Ingrid listens for the same complaint said in different ways. She would rather change a policy than add another help article.",
    portrait: { style: "bun", skin: "#F3D6C3", hair: "#C4B39A", shirt: "#172B46", bg: "#F7FAFE" },
  },
  {
    id: "noah-williams",
    name: "Noah Williams",
    title: "Engineering Project Lead",
    city: "Toronto",
    country: "Canada",
    category: "Project Management",
    years: 10,
    skills: ["Project planning", "CAD", "Prototyping", "Test plans", "Manufacturing"],
    educationLevel: "Bachelor's",
    education: [
      { qualification: "BEng Mechanical Engineering", institution: "Lakeshore Polytechnic", year: "2015" },
    ],
    history: [
      {
        role: "Engineering Project Lead",
        employer: "Lowgate Manufacturing",
        period: "2019 to present",
        summary: "Leads equipment projects from drawing through factory trials and records what the floor changes.",
      },
      {
        role: "Design Engineer",
        employer: "Redcedar Energy",
        period: "2015 to 2019",
        summary: "Produced drawings and test notes for small turbine components.",
      },
    ],
    availability: "Three month notice",
    salary: "CAD 118,000 per year",
    summary:
      "Noah leads equipment projects from drawing to factory trial. He documents what failed as carefully as what worked.",
    portrait: { style: "short", skin: "#E6C2A6", hair: "#6B4423", shirt: "#4A5568", bg: "#E7EEF6" },
  },
  {
    id: "rafael-ortega",
    name: "Rafael Ortega",
    title: "Infrastructure Project Manager",
    city: "Mexico City",
    country: "Mexico",
    category: "Project Management",
    years: 14,
    skills: ["Project planning", "Site supervision", "Contract review", "CAD", "Stakeholder updates"],
    educationLevel: "Master's",
    education: [
      { qualification: "MEng Civil Engineering", institution: "Escuela Tecnica del Centro", year: "2011" },
      { qualification: "BEng Civil Engineering", institution: "Escuela Tecnica del Centro", year: "2009" },
    ],
    history: [
      {
        role: "Infrastructure Project Manager",
        employer: "Marlow Civic",
        period: "2016 to present",
        summary: "Manages municipal works and checks that drawings match what the site can build.",
      },
      {
        role: "Site Engineer",
        employer: "Lowgate Manufacturing",
        period: "2011 to 2016",
        summary: "Coordinated contractors on industrial builds.",
      },
    ],
    availability: "Open to conversations",
    salary: "MXN 1,150,000 per year",
    summary:
      "Rafael manages civic works with as much time on site as at a desk. He reads a drawing with the weather and the neighbours in mind.",
    portrait: { style: "beard", skin: "#C68642", hair: "#1F1A17", shirt: "#172B46", bg: "#F4F7FB" },
  },
];

export const featuredIds = [
  "amira-hassan",
  "jonah-adeyemi",
  "sofia-lindgren",
  "priya-nair",
  "lucas-ferreira",
  "elena-petrova",
];

export function yearsLabel(years) {
  return years === 1 ? "1 year" : `${years} years`;
}

export function getCandidate(id) {
  return candidates.find((person) => person.id === id);
}

export function categorySummaries() {
  return categories.map((category) => ({
    ...category,
    count: candidates.filter((person) => person.category === category.name).length,
  }));
}

export function locationOptions() {
  return [...new Set(candidates.map((person) => `${person.city}, ${person.country}`))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function skillOptions() {
  return [...new Set(candidates.flatMap((person) => person.skills))].sort((a, b) => a.localeCompare(b));
}

export function relatedCandidates(person, limit = 3) {
  return candidates
    .filter((item) => item.category === person.category && item.id !== person.id)
    .slice(0, limit);
}

export function featuredCandidates() {
  return featuredIds.map((id) => getCandidate(id)).filter(Boolean);
}
