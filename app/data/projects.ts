export type ProjectScreen = {
  title: string;
  image: string;
  device: "desktop" | "mobile";
};

export type ProjectEvidence = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudyChapter = {
  number: string;
  title: string;
  problem: string;
  response: string;
};

export type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  challenge: string;
  outcome: string;
  role: string;
  scope: string;
  platform: string;
  status: string;
  method: string;
  primaryUsers: string[];
  executiveSummary: {
    problem: string;
    approach: string;
    result: string;
  };
  evidence: ProjectEvidence[];
  chapters: CaseStudyChapter[];
  tags: string[];
  image?: string;
  thumbnail?: string;
  theme: "sand" | "mint" | "forest" | "copper";
  visual?: "image" | "kpi";
  liveUrl?: string;
  liveLabel?: string;
  screens: ProjectScreen[];
};

export const projects: Project[] = [
  {
    id: "academy",
    slug: "andalusia-academy",
    number: "01",
    title: "Andalusia Academy",
    type: "Education platform",
    year: "2026",
    summary:
      "A responsive redesign that turns a dense academic website into a clearer journey from discovery to enrolment.",
    challenge:
      "The Academy had the courses, conferences and accreditation, but the interface made finding, comparing and enrolling in them harder than it needed to be.",
    outcome:
      "A responsive product system that moves dates, fees, format, availability and status to the moment a learner needs to make a decision.",
    role: "UX strategy & product design",
    scope: "Discovery, comparison and enrolment",
    platform: "Responsive web",
    status: "Design complete · interactive prototype",
    method: "Live-site audit, content inventory, journey analysis and responsive prototyping",
    primaryUsers: [
      "Professionals comparing accredited courses",
      "Conference attendees checking status and dates",
      "Returning learners managing enrolments",
    ],
    executiveSummary: {
      problem:
        "Decision-critical information was dispersed across promotional artwork, expanded filters, course pages and a separate programme website.",
      approach:
        "Audit the live catalogue and rebuild the experience around the questions people compare: what, when, where, how long, accreditation, availability and cost.",
      result:
        "One coherent, responsive journey from discovery through enrolment, with visible feedback, comparable cards, truthful event states and one account.",
    },
    evidence: [
      { value: "74", label: "courses audited", detail: "The catalogue showed only ten results at once." },
      { value: "7", label: "filter groups", detail: "Every group opened before the first result." },
      { value: "9/10", label: "events already past", detail: "The page still promoted registration for an ended event." },
      { value: "65", label: "screens designed", detail: "Supported by 92 tokens, 34 components and 78 variants." },
    ],
    chapters: [
      {
        number: "01",
        title: "Give the first screen a job",
        problem: "The homepage opened with five poster-like panels whose messages were baked into artwork. Visitors reached courses only after scrolling through organisational content.",
        response: "State what the Academy offers, then place browse and search above the fold so the first viewport answers the visitor's question instead of advertising at them.",
      },
      {
        number: "02",
        title: "Turn filtering into a feedback loop",
        problem: "Seven expanded filter groups appeared before results, while the course count sat below the grid where it could not guide a choice.",
        response: "Promote six high-value controls into one row, move the rest behind More filters and keep the live result count visible throughout the decision.",
      },
      {
        number: "03",
        title: "Make courses comparable in the catalogue",
        problem: "Cards led with truncated module names and omitted the date, city, fee, accreditation and enrolment status needed to compare options.",
        response: "Rebuild cards around decision metadata so comparison happens in the list rather than across a collection of open tabs.",
      },
      {
        number: "04",
        title: "Put the decision before the syllabus",
        problem: "The enrolment action appeared before dates, venue and accreditation; one captured course had already started before that fact became visible.",
        response: "Keep dates, location, duration, accreditation, remaining places and fee beside the action, then carry the chosen course through sign-in, payment and confirmation.",
      },
      {
        number: "05",
        title: "Make event status explicit",
        problem: "A completed conference remained in the hero with a Register Now action, leaving visitors to compare every date against today.",
        response: "Treat open, closing and completed as first-class event states, and change the available action to match the state.",
      },
      {
        number: "06",
        title: "One product and one account",
        problem: "The MBA and DBA programme opened a different website with another identity and no clear route back to the Academy.",
        response: "Unify courses, conferences and programmes under one navigation system and one account that holds every enrolment and registration.",
      },
    ],
    tags: ["UX strategy", "Website redesign", "Design system"],
    image: "/projects/andalusia-academy.jpg",
    thumbnail: "/projects/andalusia-academy-cover.webp",
    theme: "sand",
    visual: "image",
    liveUrl: "https://andalusia-academy.com/",
    liveLabel: "Original website",
    screens: [
      { title: "Homepage", image: "/screens/academy/home-desktop.webp", device: "desktop" },
      { title: "Course discovery", image: "/screens/academy/course-listing.webp", device: "desktop" },
      { title: "Course decision", image: "/screens/academy/course-detail.webp", device: "desktop" },
      { title: "Conferences", image: "/screens/academy/conferences.webp", device: "desktop" },
      { title: "Mobile homepage", image: "/screens/academy/home-mobile.webp", device: "mobile" },
      { title: "Mobile course detail", image: "/screens/academy/course-detail-mobile.webp", device: "mobile" },
    ],
  },
  {
    id: "health-web",
    slug: "andalusia-health",
    number: "02",
    title: "Andalusia Health",
    type: "Healthcare ecosystem",
    year: "2026",
    summary:
      "A unified digital experience for a complex healthcare network, designed to make services, locations and care easier to navigate.",
    challenge:
      "Patients had to piece together doctors, hospitals, services and availability across pages that reflected internal records rather than real care decisions.",
    outcome:
      "One responsive ecosystem that keeps the next action and care context visible from discovery through booking.",
    role: "Product design leadership",
    scope: "Discovery, services and booking",
    platform: "Responsive web",
    status: "Design proposal · responsive system",
    method: "Live-site audit, task analysis, information architecture and end-to-end responsive design",
    primaryUsers: [
      "Patients finding the right doctor",
      "People choosing a service or department",
      "Families comparing hospitals and availability",
    ],
    executiveSummary: {
      problem:
        "The live site contained a large amount of information, but asked patients to interpret internal categories, incomplete profiles and disconnected booking steps.",
      approach:
        "Audit real pages and organise the system around patient intent: find a doctor, understand a service, choose a hospital and book with confidence.",
      result:
        "A responsive healthcare system where verified profiles, real availability, fees, hospital context and booking actions remain connected.",
    },
    evidence: [
      { value: "6/8", label: "early results were clinics", detail: "The doctor listing returned screening clinics wearing doctor cards." },
      { value: "13", label: "doctor-title filters", detail: "Several labels duplicated or contradicted one another." },
      { value: "15", label: "eight-minute slots", detail: "A single two-hour window was split into choices people could not easily picture." },
      { value: "6", label: "mixed service types", detail: "Clinics, centres, departments and emergency care appeared as equivalent cards." },
    ],
    chapters: [
      {
        number: "01",
        title: "Model the doctor, not the database record",
        problem: "The listing returned clinics as doctors, carried thirteen title filters and showed photos for only a small minority of cards.",
        response: "Make every card a person: photo, specialty, hospital, experience, rating and next available appointment before the visitor opens a profile.",
      },
      {
        number: "02",
        title: "Give the profile enough information to decide",
        problem: "The captured profile contained an icon, name, location and two broad time windows, but no biography, credentials, experience or services.",
        response: "Bring qualifications, specialisations, reviews, location and named appointment times onto one decision page.",
      },
      {
        number: "03",
        title: "Ask for a time a person can picture",
        problem: "Booking divided one two-hour period into fifteen eight-minute choices inside a modal and temporarily displayed contradictory selection states.",
        response: "Use named days and morning, afternoon and evening groups while keeping the doctor, hospital and consultation fee visible.",
      },
      {
        number: "04",
        title: "Organise services around intent",
        problem: "Six fundamentally different service types appeared in one undifferentiated grid, every card ending with the same Read More action.",
        response: "Lead with specialties and patient goals, then place departments and operational ownership where they belong in the hierarchy.",
      },
      {
        number: "05",
        title: "Make hospital pages actionable",
        problem: "The branch page offered photos, prose and an address, but no phone number, hours, departments, doctors or booking path.",
        response: "Answer the real arrival questions: specialties, facilities, accreditation, languages, directions, doctors and how to book.",
      },
      {
        number: "06",
        title: "Keep the patient's next step visible",
        problem: "The homepage prioritised organisational storytelling and recruitment before helping a visitor find care; booking appeared only near the bottom.",
        response: "Begin booking in the hero and keep emergency information, the hotline and a primary care action available throughout the site and mobile navigation.",
      },
    ],
    tags: ["Product design", "Responsive web", "Information architecture"],
    image: "/projects/andalusia-health-web.jpg",
    thumbnail: "/projects/andalusia-health-web-cover.webp",
    theme: "mint",
    visual: "image",
    liveUrl: "https://andalusiaegypt.com/en",
    liveLabel: "Original website",
    screens: [
      { title: "Healthcare homepage", image: "/screens/health-website/homepage.webp", device: "desktop" },
      { title: "Doctor discovery", image: "/screens/health-website/doctors-listing.webp", device: "desktop" },
      { title: "Doctor profile", image: "/screens/health-website/doctor-profile.webp", device: "desktop" },
      { title: "Booking flow", image: "/screens/health-website/booking-flow.webp", device: "desktop" },
      { title: "Mobile homepage", image: "/screens/health-website/homepage-mobile.webp", device: "mobile" },
      { title: "Booking confirmation", image: "/screens/health-website/booking-confirmation-mobile.webp", device: "mobile" },
    ],
  },
  {
    id: "health-app",
    slug: "andalusia-health-app",
    number: "03",
    title: "Andalusia Health App",
    type: "Mobile healthcare",
    year: "2026",
    summary:
      "A patient-centred mobile redesign that brings appointments, doctors, prescriptions and family care into one coherent experience.",
    challenge:
      "Core care journeys were fragmented across inconsistent screens, forcing patients to work out what to do next and whether information could be trusted.",
    outcome:
      "A calmer mobile system that connects booking, arrival, queue status, records and follow-up care around the state of one patient journey.",
    role: "Product design leadership",
    scope: "Care, appointments and records",
    platform: "Mobile app",
    status: "Design proposal · not shipped",
    method: "Screen inventory, heuristic audit, journey reconstruction and interactive mobile prototyping",
    primaryUsers: [
      "Patients booking an appointment",
      "Patients arriving and waiting for care",
      "People reviewing results and follow-up actions",
    ],
    executiveSummary: {
      problem:
        "The app carried many hospital services, but treated each as a separate destination and used inconsistent language, states and actions across the care journey.",
      approach:
        "Audit the live app screen by screen and rebuild it around one question: what does the patient need to do next?",
      result:
        "A fifteen-screen flow that connects discovery, real appointment times, confirmation, queue status, records and follow-up in one consistent product system.",
    },
    evidence: [
      { value: "6", label: "equal-weight front doors", detail: "A marketing product competed with the next appointment on the home screen." },
      { value: "4 hrs", label: "availability windows", detail: "Patients selected clinic opening hours rather than an appointment time." },
      { value: "5", label: "hospital names only", detail: "The first booking decision lacked address, distance, hours or service context." },
      { value: "15", label: "redesigned screens", detail: "One connected line of care from entry through follow-up." },
    ],
    chapters: [
      {
        number: "01",
        title: "Prioritise the next appointment",
        problem: "Six front doors gave every service the same weight while the next appointment sat below the fold as one row in a list.",
        response: "Make the home screen personal and state-led: search, the next confirmed appointment, records and relevant follow-up actions.",
      },
      {
        number: "02",
        title: "Replace opening hours with real availability",
        problem: "Doctor profiles presented four-hour clinic ranges booked by order, so patients chose a window without knowing their actual time.",
        response: "Offer comparable thirty-minute slots, retain unavailable times for context and hold the selected choice on screen.",
      },
      {
        number: "03",
        title: "Give branch choices enough context",
        problem: "Five hospital names appeared without address, distance, opening hours or a way to understand a membership-locked option.",
        response: "Add the minimum context required to decide and turn locked options into explainable membership benefits.",
      },
      {
        number: "04",
        title: "Speak in the patient's language",
        problem: "Specialties were alphabetical, duplicated and shaped by hospital taxonomy rather than how a patient describes a need.",
        response: "Lead with common care needs, consolidate duplicated categories and confirm each selection with available-doctor context.",
      },
      {
        number: "05",
        title: "Carry identity through booking",
        problem: "The flow recollected a name, gender and verified mobile number already stored in the account, then hid the last field behind the next action.",
        response: "Carry verified identity forward and use the final step for checking the appointment, payment and cancellation conditions.",
      },
      {
        number: "06",
        title: "Make queue position part of the visit",
        problem: "Queue status was a separate destination with another clinic-selection step and a control pattern used nowhere else.",
        response: "Attach queue number, estimated time, room, contact and notifications to the appointment it belongs to.",
      },
      {
        number: "07",
        title: "Turn records into a timeline",
        problem: "Empty record areas asked patients to manually construct clinical history through a taxonomy of reminder types and required fields.",
        response: "Show results, visits and certificates as a chronological record with reference ranges, clinician notes and the next recommended action.",
      },
      {
        number: "08",
        title: "Use truthful empty states and one system language",
        problem: "Missing clinical data appeared as the word Empty, while unrelated icon families, membership names and button hierarchies weakened trust.",
        response: "Explain why missing information matters, invite completion safely and standardise tiers, icons, actions and terminology across the account.",
      },
    ],
    tags: ["Mobile product", "UX audit", "Interaction design"],
    image: "/projects/andalusia-health-app.jpg",
    thumbnail: "/projects/andalusia-health-app-cover.webp",
    theme: "forest",
    visual: "image",
    screens: [
      { title: "Personalised home", image: "/screens/health-app/home.png", device: "mobile" },
      { title: "Doctor discovery", image: "/screens/health-app/doctors-list.png", device: "mobile" },
      { title: "Doctor details", image: "/screens/health-app/doctor-details.png", device: "mobile" },
      { title: "Booking summary", image: "/screens/health-app/booking-summary.png", device: "mobile" },
      { title: "Health articles", image: "/screens/health-app/articles-home.png", device: "mobile" },
      { title: "Lab record details", image: "/screens/health-app/records-lab-details.png", device: "mobile" },
    ],
  },
  {
    id: "kpi-hub",
    slug: "kpi-performance-hub",
    number: "04",
    title: "KPI Performance Hub",
    type: "Design leadership system",
    year: "2026",
    summary:
      "Turning a two-year Google Sheets performance process into a secure product for daily input, sprint reporting and employee self-service.",
    challenge:
      "A working spreadsheet process captured daily signals and generated sprint KPIs, but required manual administration and gave employees no private, persistent product experience of their own.",
    outcome:
      "A role-based web product that preserves the original KPI model while giving managers a faster operational view and every employee a private longitudinal report.",
    role: "Product owner, design manager & system designer",
    scope: "Performance operations and team development",
    platform: "Secure responsive web app",
    status: "Live internal product",
    method: "Workflow mapping, spreadsheet-model translation, role design, prototyping and iterative implementation",
    primaryUsers: [
      "Design manager entering and reviewing team performance",
      "Employees viewing private sprint and trend reports",
      "Team leadership reviewing longitudinal patterns",
    ],
    executiveSummary: {
      problem:
        "The underlying performance model worked, but the spreadsheet carried administration overhead, mixed operational input with reporting and was not designed for private employee access.",
      approach:
        "Preserve the established KPI logic, map the manager and employee journeys, then translate the workbook into a role-based product with persistent data and auditability.",
      result:
        "One system for daily input, sprint finalisation, team trends, employee reports and a complete two-year archive—without changing the evaluation model the team already used.",
    },
    evidence: [
      { value: "52", label: "sprints imported", detail: "The existing 2024–2025 history remains available in the product." },
      { value: "10", label: "KPIs preserved", detail: "The system translates rather than replaces the established evaluation model." },
      { value: "2", label: "role-based experiences", detail: "Managers see the team; employees see their own private history." },
      { value: "1", label: "operational source", detail: "Daily inputs, sprint reports and longitudinal trends share one persistent model." },
    ],
    chapters: [
      {
        number: "01",
        title: "Preserve the model, change the experience",
        problem: "The spreadsheet encoded two years of real operational knowledge. Replacing its KPI logic would have thrown away the team's shared understanding.",
        response: "Treat the workbook as the product model: import 52 sprints and ten KPIs, then redesign how people enter, read and act on the information.",
      },
      {
        number: "02",
        title: "Separate daily signals from sprint judgement",
        problem: "Operational attendance and delivery inputs occur daily, while qualitative judgements belong at the end of a sprint.",
        response: "Create a fast daily-entry flow and keep design quality, collaboration and delivery ratings in a separate sprint review.",
      },
      {
        number: "03",
        title: "Design two truthful roles",
        problem: "Managers need a complete team picture, while employees need privacy and useful context without exposure to colleagues' reports.",
        response: "Use role-based accounts and queries: manager dashboards cover the team; employee accounts receive only their own history plus appropriate team-average context.",
      },
      {
        number: "04",
        title: "Make every sprint explainable",
        problem: "A single score cannot show whether performance changed because of delivery, collaboration, quality or another KPI.",
        response: "Pair the score with trend lines, per-KPI breakdowns, change from the previous sprint and a complete report archive.",
      },
      {
        number: "05",
        title: "Build for continued operation",
        problem: "A portfolio prototype would not solve the original management problem if entries disappeared or access remained shared.",
        response: "Add persistent storage, authenticated sessions, account roles, daily-entry updates and an audit log so the system can function as an internal product.",
      },
    ],
    tags: ["Design leadership", "Product strategy", "Internal tools"],
    theme: "copper",
    visual: "kpi",
    liveUrl: "https://kpi-performance-hub.kia0481.chatgpt.site/",
    liveLabel: "Open live system",
    screens: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
