export const stats = [
  { value: "10,000+", label: "Candidate Profiles" },
  { value: "500+", label: "Companies" },
  { value: "40+", label: "Professional Categories" },
  { value: "25+", label: "Industries" },
];

export const seekerSteps = [
  {
    title: "Create your account.",
    body: "Add your name, email and the kind of role you want to be found for. In this prototype the form is checked in the browser and then left there.",
  },
  {
    title: "Upload your CV and complete your professional profile.",
    body: "Add a CV file, then set out your experience, education and the skills you use in the work. You can replace the file later in the finished product.",
  },
  {
    title: "Become discoverable to companies.",
    body: "Choose whether your profile is listed. Companies searching the registry can open it and download the CV while it is visible.",
  },
];

export const employerSteps = [
  {
    title: "Register your company.",
    body: "Add the company name and the person who will use the account. Registration on this site does not create a login.",
  },
  {
    title: "Search the candidate database.",
    body: "Filter the sample directory by location, experience, skills, category and availability.",
  },
  {
    title: "Discover suitable professionals and download their CVs.",
    body: "Open a profile, read the work history and download a demonstration CV. Saving a person keeps them on a shortlist in this browser.",
  },
];

export const benefits = [
  {
    title: "Search qualified professionals",
    body: "Look through people who have already set out their experience in one place, instead of starting from an empty inbox.",
  },
  {
    title: "Find candidates using relevant skills",
    body: "Filter the registry by the tools and methods a role actually needs, then read the profile before you decide.",
  },
  {
    title: "Explore professional experience",
    body: "Previous roles, education and a short summary sit on the same page, so a first review does not depend on a separate attachment.",
  },
  {
    title: "Save promising candidates",
    body: "Keep a shortlist while you compare people. In this prototype the list stays in your browser and is not shared with a team.",
  },
  {
    title: "Access CV downloads",
    body: "Each sample profile includes a demonstration CV. The file is generated on your device from the profile you are reading.",
  },
  {
    title: "Reduce manual recruitment effort",
    body: "Spend less time collecting files from different places and more time reading the people who fit the role.",
  },
];

export const testimonials = [
  {
    id: "helen",
    quote:
      "We stopped keeping CVs in three different folders. The shortlist is easier to share with a hiring manager who was not in the first conversation.",
    name: "Helen Okonkwo",
    role: "Head of People, Northwind Studio",
  },
  {
    id: "marcus",
    quote:
      "I replaced my CV on a Monday after rewriting the summary. It was obvious which version a company would see.",
    name: "Marcus Feld",
    role: "Product designer",
  },
  {
    id: "johanna",
    quote:
      "The profiles were specific enough that the first call was about the work, not about finding the CV.",
    name: "Johanna Berg",
    role: "Talent lead, Linden Goods",
  },
];

export const faqs = [
  {
    id: "free",
    question: "Is creating a candidate profile free?",
    answer:
      "Yes. Creating a candidate profile is free in this demonstration, and there is no payment step. A finished version of Halden may keep profiles free for candidates.",
  },
  {
    id: "discover",
    question: "How can companies discover my profile?",
    answer:
      "Companies search the directory by category, location, skills, experience and availability. If your profile is listed, it can appear in those results. This site shows sample people only, so a profile you type into the registration form is not added to the directory.",
  },
  {
    id: "update",
    question: "Can I update my CV later?",
    answer:
      "Yes. The intended product lets you replace the file and edit your summary, skills and work history. The directory would show the latest version you save. This prototype does not keep a copy of the file.",
  },
  {
    id: "access",
    question: "Who can access my uploaded CV?",
    answer:
      "In the product Halden is aiming for, an uploaded CV is available to signed-in employer accounts while your profile is listed. You would be able to hide the profile or limit access. In this prototype, sample CVs are created in the browser from fictional profiles, and any visitor can download them so the button can be reviewed. Do not upload a real CV here.",
  },
  {
    id: "download",
    question: "How can companies download candidate CVs?",
    answer:
      "Open a person's profile and choose Download CV, or use the same action from the directory. In this prototype the file is a sample PDF built in the browser. It is not supplied by the person named on it.",
  },
];

export const privacySections = [
  {
    heading: "What this prototype stores",
    paragraphs: [
      "Halden as it stands is a frontend demonstration. Registration, login, contact and CV forms are checked in your browser. They are not sent to a server and they are not written to an account.",
      "If you save a candidate, the id is stored in local storage on this device so the shortlist can be shown again. Clearing site data removes it.",
    ],
  },
  {
    heading: "CV files",
    paragraphs: [
      "A file you choose on the upload screen stays on your device. The directory downloads are sample PDFs generated from fictional profiles.",
      "A later version can keep CV files in private storage and show them only to employer accounts you allow.",
    ],
  },
  {
    heading: "Contact details on this site",
    paragraphs: [
      "The email address, phone number and street address in the footer are placeholders. They are not a monitored inbox or a staffed office.",
    ],
  },
];

export const termsSections = [
  {
    heading: "A demonstration site",
    paragraphs: [
      "Halden on this website is a design and interaction prototype. It does not offer a recruitment service, does not introduce you to an employer, and does not confirm anyone's identity or employment history.",
    ],
  },
  {
    heading: "Sample profiles",
    paragraphs: [
      "The people in the directory are fictional. Their employers, salaries and histories were written for the prototype. Do not treat a profile or a downloaded CV as a record of a real person.",
    ],
  },
  {
    heading: "Accounts",
    paragraphs: [
      "Login and registration accept any well-formed details so the screens can be reviewed. Submitting them does not create an account and does not grant access to private data.",
    ],
  },
  {
    heading: "Use of the prototype",
    paragraphs: [
      "Do not upload a real CV or enter someone else's personal information. The forms are not a secure place to store that material.",
    ],
  },
];
