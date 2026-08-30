type WalkthroughProject = "academy" | "health-web" | "health-app" | "kpi-hub" | "pharmacy-bi";

const walkthroughs: Record<WalkthroughProject, {
  heading: string;
  intro: string;
  video: string;
  poster: string;
  ariaLabel: string;
  duration: string;
  path: string;
  note: string;
  className: string;
}> = {
  academy: {
    heading: "One course, carried from discovery to My Courses.",
    intro: "A cursor-guided walkthrough of the wired learning journey, using the finished desktop prototype and its real scroll positions.",
    video: "/video/andalusia-academy-golden-path.mp4",
    poster: "/video/andalusia-academy-golden-path-poster.jpg",
    ariaLabel: "Andalusia Academy golden-path walkthrough from course discovery and filtering through enrolment, payment confirmation and My Courses",
    duration: "40 seconds",
    path: "Discover → filter → evaluate → enrol → confirm → learn.",
    note: "The path follows the prototype's actual connected screens and representative enrolment state. It is a design proposal, not a deployed-product recording.",
    className: "academy-prototype-walkthrough",
  },
  "health-web": {
    heading: "One appointment, carried from doctor discovery to its full record.",
    intro: "A cursor-guided walkthrough of the finished desktop prototype, including its complete booking and appointment-management path.",
    video: "/video/andalusia-health-website-golden-path.mp4",
    poster: "/video/andalusia-health-website-golden-path-poster.jpg",
    ariaLabel: "Andalusia Health website golden-path walkthrough from doctor discovery through booking confirmation, appointments and appointment details",
    duration: "41 seconds",
    path: "Find care → choose → evaluate → book → confirm → manage.",
    note: "The path uses the prototype's wired doctor, booking and appointment states. It is a design proposal, not a deployed-product recording.",
    className: "health-web-prototype-walkthrough",
  },
  "health-app": {
    heading: "One appointment, carried from discovery to secure follow-up.",
    intro: "A cursor-guided recording of the finished light-mode prototype, following the product's wired interactions and states.",
    video: "/video/andalusia-health-app-golden-path.mp4?v=20260826-fix",
    poster: "/video/andalusia-health-app-golden-path-poster.jpg?v=20260826-fix",
    ariaLabel: "Andalusia Health App golden-path walkthrough from doctor discovery through booking, queue status and secure lab follow-up",
    duration: "51 seconds",
    path: "Find care → choose a time → confirm → arrive → follow up.",
    note: "The path uses the prototype's actual navigation, processing state, live queue context, biometric gate and clinical follow-up record. It is a design proposal, not a deployed-product recording.",
    className: "health-app-prototype-walkthrough",
  },
  "kpi-hub": {
    heading: "One performance cycle, seen from both sides of the management system.",
    intro: "A cursor-guided walkthrough of the Manager and Employee workspaces, using the finished role-based prototype and its connected states.",
    video: "/video/kpi-performance-hub-golden-path.mp4",
    poster: "/video/kpi-performance-hub-golden-path-poster.jpg",
    ariaLabel: "KPI Performance Hub golden-path walkthrough from manager overview and employee drill-down through daily KPI entry and the employee performance view",
    duration: "54 seconds",
    path: "Monitor → drill down → update → save → self-monitor.",
    note: "The path demonstrates the product's Manager and Employee role model without implying deployment or measured business outcomes.",
    className: "kpi-prototype-walkthrough",
  },
  "pharmacy-bi": {
    heading: "One signal, traced through the Pharmacy decision journey.",
    intro: "A cursor-guided walkthrough of the finished BI prototype, following connected analytics, drill-down, account and theme states.",
    video: "/video/pharmacy-bi-golden-path.mp4?v=20260830-tooltip",
    poster: "/video/pharmacy-bi-golden-path-poster.jpg?v=20260830",
    ariaLabel: "BI Dashboards Pharmacy golden-path walkthrough from executive overview through financial trends, inventory risk and item detail, referral performance, account access and Dark Mode",
    duration: "56 seconds",
    path: "See the signal → inspect the trend → prioritise risk → drill down → switch context.",
    note: "The walkthrough uses the prototype’s connected states and representative demo data. It demonstrates the designed product experience without claiming deployed business outcomes.",
    className: "pharmacy-bi-prototype-walkthrough",
  },
};

export default function HealthAppWalkthrough({ projectId = "health-app" }: { projectId?: WalkthroughProject }) {
  const walkthrough = walkthroughs[projectId];

  return (
    <section className="screen-section health-app-walkthrough-section" id="prototype-walkthrough">
      <div className="screen-heading">
        <p className="eyebrow">Golden-path walkthrough</p>
        <h2>{walkthrough.heading}</h2>
        <p>{walkthrough.intro}</p>
      </div>
      <figure className={`prototype-walkthrough ${walkthrough.className}`}>
        <video
          controls
          playsInline
          preload="metadata"
          poster={walkthrough.poster}
          aria-label={walkthrough.ariaLabel}
        >
          <source src={walkthrough.video} type="video/mp4" />
          Your browser does not support embedded video. <a href={walkthrough.video}>Open the walkthrough video.</a>
        </video>
        <figcaption>
          <span>Interactive prototype · {walkthrough.duration}</span>
          <strong>{walkthrough.path}</strong>
          <p>{walkthrough.note}</p>
        </figcaption>
      </figure>
    </section>
  );
}
