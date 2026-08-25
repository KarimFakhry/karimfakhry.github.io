export type ProjectScreen = { title: string; image: string; device: "desktop" | "mobile" };
export type ProjectEvidence = { value: string; label: string; detail: string };
export type CaseStudyChapter = { number: string; title: string; problem: string; response: string };
export type JourneyStep = { stage: string; before: string; after: string };

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
  executiveSummary: { problem: string; approach: string; result: string };
  evidence: ProjectEvidence[];
  chapters: CaseStudyChapter[];
  journey?: JourneyStep[];
  tags: string[];
  image?: string;
  thumbnail?: string;
  theme: "sand" | "mint" | "forest" | "copper" | "signal";
  visual?: "image" | "kpi" | "dotcare";
  caseStudyMode?: "redesign" | "product" | "managerial" | "pharmacy-redesign";
  liveUrl?: string;
  liveLabel?: string;
  screens: ProjectScreen[];
};

export const projects: Project[] = ([
  {
    id: "academy",
    slug: "andalusia-academy",
    number: "02",
    title: "Andalusia Academy",
    type: "Education platform",
    year: "2026",
    summary: "Redesigned the Academy website so professionals can find, compare and enrol in courses without digging through promotional content.",
    challenge: "Dates, fees, accreditation and availability were difficult to find and compare across the live site.",
    outcome: "A responsive journey that brings the right information forward at each step—from browsing to enrolment.",
    role: "UX strategy & product design",
    scope: "Discovery, comparison and enrolment",
    platform: "Responsive web",
    status: "Design complete · interactive prototype",
    method: "UX audit · content inventory · journey design · responsive prototype",
    primaryUsers: [
      "Professionals comparing accredited courses",
      "People registering for conferences",
      "Returning learners managing enrolments",
    ],
    executiveSummary: {
      problem: "Course dates, fees, accreditation and availability were spread across posters, filters and detail pages.",
      approach: "Reorganise the site around how people choose a course: subject, date, format, location, accreditation and cost.",
      result: "A clearer path from browsing to enrolment, supported by one responsive system for courses, programmes and conferences.",
    },
    evidence: [
      { value: "74", label: "courses reviewed", detail: "Only ten results were visible at a time." },
      { value: "7", label: "filter groups", detail: "All seven appeared before the first result." },
      { value: "9/10", label: "events had ended", detail: "Registration was still promoted for past events." },
      { value: "65", label: "screens designed", detail: "Built with 92 tokens, 34 components and 78 variants." },
    ],
    chapters: [
      { number: "01", title: "Make the first screen useful", problem: "The homepage led with five poster-style panels before visitors could browse courses.", response: "Lead with the Academy offer, search and course discovery in the first viewport." },
      { number: "02", title: "Simplify course discovery", problem: "Seven open filter groups pushed results down the page and made the catalogue harder to scan.", response: "Keep the most useful filters visible, place the rest under More filters and show the result count beside them." },
      { number: "03", title: "Support comparison", problem: "Course cards omitted the date, city, fee, accreditation and enrolment status people needed to decide.", response: "Bring the comparison details into every card and keep them beside the enrolment action on the course page." },
      { number: "04", title: "Use clear event states", problem: "Past conferences still appeared with a Register Now action.", response: "Define open, closing and completed states, then connect each state to the right action." },
    ],
    tags: ["UX strategy", "Responsive web", "Design system"],
    image: "/projects/andalusia-academy.jpg",
    thumbnail: "/screens/academy/home-desktop.webp",
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
    number: "04",
    title: "Andalusia Health",
    type: "Healthcare ecosystem",
    year: "2026",
    summary: "Reframed a large hospital website around the tasks patients come to complete: find care, choose a doctor and book.",
    challenge: "Patients had to interpret internal categories and move between disconnected pages to make a care decision.",
    outcome: "A responsive system that keeps the doctor, hospital, fee, availability and next action connected.",
    role: "Product design leadership",
    scope: "Care discovery and booking",
    platform: "Responsive web",
    status: "Design proposal · responsive system",
    method: "UX audit · task analysis · information architecture · responsive design",
    primaryUsers: ["Patients looking for a doctor", "People comparing services or departments", "Families choosing a hospital and appointment"],
    executiveSummary: {
      problem: "The site contained useful information, but doctor profiles, services, hospitals and booking worked as separate experiences.",
      approach: "Restructure the experience around patient intent: find care, compare options and book with enough context to feel confident.",
      result: "A connected responsive design where profiles, availability, fees, hospital information and booking stay in one journey.",
    },
    evidence: [
      { value: "6/8", label: "results were clinics", detail: "The doctor list mixed people with screening clinics." },
      { value: "13", label: "doctor-title filters", detail: "Several labels overlapped or contradicted one another." },
      { value: "15", label: "eight-minute slots", detail: "One two-hour period was split into hard-to-picture choices." },
      { value: "6", label: "service types mixed", detail: "Clinics, centres, departments and emergency care used the same card pattern." },
    ],
    chapters: [
      { number: "01", title: "Make doctor search trustworthy", problem: "Six of the first eight doctor results were screening clinics, while many profiles had no photo or decision details.", response: "Make each result a person and show specialty, hospital, experience and next availability before the profile opens." },
      { number: "02", title: "Give patients enough to decide", problem: "Profiles lacked qualifications, experience, services and clear appointment times.", response: "Bring credentials, location, reviews, fees and real availability onto one decision page." },
      { number: "03", title: "Make booking easier to understand", problem: "A two-hour period became fifteen eight-minute options inside a modal with conflicting selection states.", response: "Group times by day and part of day, while keeping the doctor, hospital and fee visible." },
      { number: "04", title: "Organise around patient intent", problem: "Services and hospital pages reflected the organisation, not the questions patients needed answered.", response: "Lead with care needs, specialties, doctors, directions and booking; keep emergency and hotline access persistent." },
    ],
    tags: ["Product design", "Responsive web", "Information architecture"],
    image: "/projects/andalusia-health-web.jpg",
    thumbnail: "/screens/health-website/homepage.webp",
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
    summary: "Rebuilt the mobile experience around one continuous patient journey—from finding a doctor to booking, arrival and follow-up.",
    challenge: "The app offered many services, but each step behaved like a separate destination with different language and controls.",
    outcome: "A more focused mobile flow that keeps the patient's next action visible across booking, arrival and records.",
    role: "Product design leadership",
    scope: "Appointments, visits and records",
    platform: "Mobile app",
    status: "Design proposal · not shipped",
    method: "Screen inventory · heuristic review · journey mapping · interactive prototype",
    primaryUsers: ["Patients booking care", "Patients arriving for an appointment", "People reviewing results and follow-up actions"],
    executiveSummary: {
      problem: "Booking, appointments, queue status and records were separate journeys with inconsistent states and repeated decisions.",
      approach: "Use the appointment as the connecting object and design every screen around the patient's next step.",
      result: "A fifteen-screen prototype connecting doctor discovery, appointment time, confirmation, arrival, queue and follow-up.",
    },
    evidence: [
      { value: "6", label: "equal home actions", detail: "The next appointment competed with every other service." },
      { value: "4 hrs", label: "availability windows", detail: "Patients chose clinic hours rather than a specific time." },
      { value: "5", label: "hospital names only", detail: "The choice lacked location, distance, hours and service context." },
      { value: "15", label: "screens redesigned", detail: "One connected path from discovery to follow-up." },
    ],
    journey: [
      { stage: "Start", before: "Six equal actions; the next appointment sat below the fold.", after: "Search, the next appointment and relevant follow-up actions lead the home screen." },
      { stage: "Choose care", before: "Doctor profiles showed four-hour clinic ranges booked by order.", after: "Patients compare doctor context and choose a clear appointment time." },
      { stage: "Confirm", before: "The flow asked again for identity already stored in the account.", after: "A single summary confirms patient, doctor, hospital, time and booking conditions." },
      { stage: "Arrive", before: "Queue status was a separate destination that repeated the clinic choice.", after: "Queue information belongs to the booked appointment, with room and contact details." },
      { stage: "Follow up", before: "Records were split into empty sections and manually created reminders.", after: "Visits, results and certificates form a timeline with the next relevant action." },
    ],
    chapters: [
      { number: "01", title: "Lead with the next appointment", problem: "Six equal home actions pushed the patient's most relevant information below the fold.", response: "Prioritise search, the next appointment, records and contextual follow-up actions." },
      { number: "02", title: "Show real appointment choices", problem: "Doctor profiles showed clinic opening hours instead of a time the patient could book.", response: "Use clear appointment slots and keep the chosen doctor, hospital and time visible." },
      { number: "03", title: "Carry context through the visit", problem: "Confirmation, queue status and arrival repeated information or sent patients into separate flows.", response: "Connect confirmation, queue, room, contact and notifications to the same appointment." },
      { number: "04", title: "Make records useful after care", problem: "Empty record areas did not explain what was missing or what the patient should do next.", response: "Use a chronological record with results, visits, notes and relevant follow-up actions." },
    ],
    tags: ["Mobile product", "Journey design", "Interaction design"],
    image: "/projects/andalusia-health-app.jpg",
    thumbnail: "/screens/health-app/home.png",
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
    number: "05",
    title: "KPI Performance Hub",
    type: "Performance management product",
    year: "2026",
    summary: "Created a managerial solution that helps managers monitor team performance, identify where support is needed and give every employee a private view of their own progress.",
    challenge: "The KPI model worked in Google Sheets, but monitoring the team was still manual and employees had no direct way to follow their own performance.",
    outcome: "One shared performance system: managers can monitor the team and act on patterns, while employees can privately follow their KPIs and progress over time.",
    role: "Product owner & design manager",
    scope: "Team performance monitoring and development",
    platform: "Secure responsive web app",
    status: "Live internal product",
    method: "Management workflow mapping · role design · product prototyping · iterative implementation",
    primaryUsers: ["Managers monitoring performance and identifying where support is needed", "Employees following their own KPIs, feedback and progress", "Leadership reviewing team patterns over time"],
    executiveSummary: {
      problem: "The spreadsheet could calculate performance, but it did not support the management work around it. Monitoring, follow-up and employee visibility still depended on manual effort.",
      approach: "Build the solution around two complementary roles: a manager workspace for monitoring the team and guiding improvement, and a private employee workspace for self-awareness and follow-up.",
      result: "Daily evidence, sprint evaluation, team monitoring and individual history now work as one continuous performance-management loop.",
    },
    evidence: [
      { value: "Daily", label: "evidence in context", detail: "Attendance and delivery are captured during the sprint instead of reconstructed at the end." },
      { value: "Sprint", label: "review at the right moment", detail: "Quality and collaboration are considered when the manager has the full cycle in view." },
      { value: "Private", label: "access designed by role", detail: "Managers see the team; each employee sees only their own report and history." },
      { value: "History", label: "continuity over time", detail: "The imported 2024–2025 record remains available for comparison and follow-up." },
    ],
    chapters: [
      { number: "01", title: "Keep the model, change the work around it", problem: "The team already understood the KPI model and had two years of useful history. Replacing it would remove trust and context.", response: "Keep the existing KPIs and history, then simplify how managers move through input, review and reporting." },
      { number: "02", title: "Capture evidence while it is fresh", problem: "When daily signals are left until sprint close, the manager has to rebuild what happened from memory and scattered notes.", response: "Give attendance and delivery a focused daily flow, with context stored beside each input." },
      { number: "03", title: "Make sprint close a review, not an admin task", problem: "Daily tracking and sprint-level evaluation happened in the same working surface, even though they require different decisions.", response: "Separate the two moments. Daily evidence is ready before the manager reviews quality, collaboration and overall delivery." },
      { number: "04", title: "Give each role the view it needs", problem: "Managers need to monitor the team, but employees should not have access to one another's performance information.", response: "Create a manager workspace for the team and a private employee workspace for personal reports and history." },
      { number: "05", title: "Turn performance into a conversation", problem: "A total score alone does not explain where performance changed or what should be discussed next.", response: "Keep the KPI breakdown, previous-sprint context and history together so the report can support a useful one-to-one." },
    ],
    tags: ["Performance management", "Product strategy", "Design leadership"],
    theme: "copper",
    visual: "kpi",
    caseStudyMode: "managerial",
    thumbnail: "/screens/kpi-performance/manager-overview.png",
    screens: [
      { title: "Manager overview — team performance and attention areas", image: "/screens/kpi-performance/manager-overview.png", device: "desktop" },
      { title: "Employee overview — private KPI performance", image: "/screens/kpi-performance/employee-overview.png", device: "desktop" },
      { title: "Manager drill-down — individual performance report", image: "/screens/kpi-performance/manager-employee-report.png", device: "desktop" },
      { title: "Employee sprint history — periodic performance context", image: "/screens/kpi-performance/employee-sprints.png", device: "desktop" },
    ],
  },
  {
    id: "dotcare",
    slug: "dotcare-hmis",
    number: "01",
    title: "DotCare Pharmacy",
    type: "Enterprise pharmacy workflow",
    year: "2026",
    summary: "Redesigning DotCare Pharmacy’s core medication workflow — from order intake to verified dispensing and clinical traceability.",
    challenge: "The live Pharmacy product gives charging an explicit state, while the pharmacist’s professional act of verifying medication is weak or absent from the product model.",
    outcome: "An evidence-based redesign prototype that makes verification, safety resolution, fulfilment, charging, dispensing and provenance distinct parts of one medication lifecycle.",
    role: "Product design · IA · interaction · design system",
    scope: "Phase 1 · safety-critical Pharmacy core",
    platform: "Enterprise web application",
    status: "Redesign prototype · not deployed",
    method: "Live-product audit · workflow modelling · clinical state design · interactive prototype",
    primaryUsers: [
      "Pharmacists reviewing and verifying medication orders",
      "Pharmacy teams resolving safety, stock and approval exceptions",
      "Clinicians and operations teams who depend on an auditable medication record",
    ],
    executiveSummary: {
      problem: "The live module is strong at recording system and financial transactions, but it does not clearly model the pharmacist’s clinical verification before medication reaches the patient.",
      approach: "Redefine the product around a seven-state medication lifecycle, with an owner and record at every safety-critical transition.",
      result: "The prototype separates clinical approval, financial charging and physical dispensing, then preserves who acted, for which patient, from which lot and when.",
    },
    evidence: [
      { value: "LIVE", label: "production evidence", detail: "Current DotCare screens establish the real transaction-led Pharmacy model the redesign began from." },
      { value: "7 states", label: "one medication lifecycle", detail: "Worklist, verification, safety resolution, fulfilment, charging, dispensing and history are explicitly separated." },
      { value: "Clinical", label: "verification becomes a state", detail: "The pharmacist’s decision gains an author, timestamp, signature and structural effect on what follows." },
      { value: "Prototype", label: "behaviour is specified", detail: "Loading, contention, blocked, failure and recovery states are defined without claiming deployment outcomes." },
    ],
    chapters: [
      { number: "01", title: "Start from work, not a patient search", problem: "The live module expects the pharmacist to know which patient to find before the shift’s workload is visible.", response: "A worklist ranks medication orders by urgency, clinical risk, waiting time and exception state." },
      { number: "02", title: "Make verification the professional act", problem: "Charging is recorded; clinical verification is not.", response: "Verification becomes an explicit state with an author, timestamp, signature and the clinical picture visible at the decision point." },
      { number: "03", title: "Resolve safety and operational exceptions", problem: "A warning or stock problem can become a dismissible interruption or a dead end.", response: "Severity, acknowledgement, prescriber queries, stock resolution and approval remain within the medication workflow." },
      { number: "04", title: "Separate verification, charging and dispensing", problem: "One transaction cannot truthfully represent clinical responsibility, payment and physical release.", response: "Each event becomes a distinct state owned by the person or system responsible for it." },
      { number: "05", title: "Preserve clinical provenance", problem: "A financial ledger cannot answer who dispensed a medication, to whom, from which lot and at what time.", response: "Clinical history and the financial record become complementary views with full dispenser, recipient, lot and timestamp traceability." },
    ],
    tags: ["Enterprise UX", "Clinical workflow", "Design systems"],
    thumbnail: "/screens/dotcare-redesign/worklist.png",
    theme: "signal",
    visual: "dotcare",
    caseStudyMode: "pharmacy-redesign",
    screens: [
      { title: "Pharmacy Worklist", image: "/screens/dotcare-redesign/worklist.png", device: "desktop" },
      { title: "Medication Verification", image: "/screens/dotcare-redesign/verification.png", device: "desktop" },
      { title: "Clinical Safety Review", image: "/screens/dotcare-redesign/safety-review.png", device: "desktop" },
      { title: "Controlled Dispensing", image: "/screens/dotcare-redesign/dispensing.png", device: "desktop" },
      { title: "Medication History", image: "/screens/dotcare-redesign/medication-history.png", device: "desktop" },
      { title: "Dispense Record — Full Provenance", image: "/screens/dotcare-redesign/dispense-provenance.png", device: "desktop" },
    ],
  },
] as Project[]).sort((a, b) => a.number.localeCompare(b.number));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
