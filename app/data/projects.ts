export type ProjectScreen = {
  title: string;
  image: string;
  device: "desktop" | "mobile";
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
  tags: string[];
  image: string;
  thumbnail: string;
  theme: "sand" | "mint" | "forest";
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
      "The original experience hid the information people needed to choose a course or conference behind dense navigation and fragmented pages.",
    outcome:
      "A responsive product system that brings dates, fees, format and availability into the decision itself.",
    role: "UX strategy & product design",
    scope: "Discovery, decision and enrolment",
    platform: "Responsive web",
    tags: ["UX strategy", "Website redesign", "Design system"],
    image: "/projects/andalusia-academy.jpg",
    thumbnail: "/projects/andalusia-academy-cover.webp",
    theme: "sand",
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
      "People had to piece together doctors, hospitals, services and availability across a healthcare network that behaved like separate products.",
    outcome:
      "One responsive ecosystem that keeps care context visible from discovery through booking.",
    role: "Product design leadership",
    scope: "Discovery, services and booking",
    platform: "Responsive web",
    tags: ["Product design", "Responsive web", "Information architecture"],
    image: "/projects/andalusia-health-web.jpg",
    thumbnail: "/projects/andalusia-health-web-cover.webp",
    theme: "mint",
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
      "Core care journeys were fragmented across inconsistent screens, forcing patients to work out what to do next.",
    outcome:
      "A calmer mobile system that makes appointments, doctors, records and follow-up care feel connected.",
    role: "Product design leadership",
    scope: "Care, appointments and records",
    platform: "Mobile app",
    tags: ["Mobile product", "UX audit", "Interaction design"],
    image: "/projects/andalusia-health-app.jpg",
    thumbnail: "/projects/andalusia-health-app-cover.webp",
    theme: "forest",
    screens: [
      { title: "Personalised home", image: "/screens/health-app/home.png", device: "mobile" },
      { title: "Doctor discovery", image: "/screens/health-app/doctors-list.png", device: "mobile" },
      { title: "Doctor details", image: "/screens/health-app/doctor-details.png", device: "mobile" },
      { title: "Booking summary", image: "/screens/health-app/booking-summary.png", device: "mobile" },
      { title: "Health articles", image: "/screens/health-app/articles-home.png", device: "mobile" },
      { title: "Lab record details", image: "/screens/health-app/records-lab-details.png", device: "mobile" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
