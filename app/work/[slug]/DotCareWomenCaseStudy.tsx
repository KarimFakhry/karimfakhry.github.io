import EvidenceMedia from "./EvidenceMedia";
import styles from "./DotCareWomenCaseStudy.module.css";

const figmaUrl = "https://www.figma.com/design/R3bhGEte9gg6A5bU2sEN1r/DotCare-Women?node-id=0-1&t=wq0YiGPzeZOoNglG-1";

const media = {
  home: { file: "home", title: "Home", alt: "DotCare Women home showing cycle context, a personal insight, health check-in and care navigation" },
  describe: { file: "describe-feeling", title: "Describe how you feel", alt: "Natural-language health check-in before any information is saved" },
  review: { file: "review-entries", title: "Review suggested entries", alt: "Suggested health entries presented for review, editing or exclusion before confirmation" },
  calendar: { file: "calendar", title: "Calendar", alt: "Personal cycle calendar with distinct phases and logged context" },
  pattern: { file: "pattern-detail", title: "Pattern detail", alt: "Personal pattern insight grounded in confirmed health entries" },
  source: { file: "pattern-source", title: "How this pattern was found", alt: "Source entries and explanation behind a personal pattern" },
  visit: { file: "visit-summary", title: "Visit summary", alt: "Reviewable doctor-visit summary with the sources of each item made visible" },
  doctor: { file: "doctor-results", title: "Find a doctor", alt: "Doctor discovery with care options and appointment access" },
  appointment: { file: "appointment-details", title: "Appointment details", alt: "Appointment details keeping clinician, place and visit information together" },
  homeCare: { file: "home-healthcare", title: "Home healthcare", alt: "Home healthcare service option within the care journey" },
  systemAppointment: { file: "system-appointment-card", title: "Appointment component", alt: "Approved Design System appointment card and its states" },
  systemPattern: { file: "system-pattern-insight", title: "Pattern insight component", alt: "Approved Design System pattern-insight card" },
  systemAssistance: { file: "system-ai-patterns", title: "Assistive interaction patterns", alt: "Approved Design System patterns for suggested entries and explainable assistance" },
} as const;

function Screen({ item, eager = false }: { item: (typeof media)[keyof typeof media]; eager?: boolean }) {
  const isSystem = item.file.startsWith("system-");
  const dimensions = item.file === "system-appointment-card" ? { width: 417, height: 339 }
    : item.file === "system-pattern-insight" ? { width: 417, height: 361 }
    : item.file === "system-ai-patterns" ? { width: 417, height: 1013 }
    : { width: 393, height: 852 };
  const root = `/screens/dotcare-women/${item.file}`;
  return (
    <EvidenceMedia
      src={`${root}.png`}
      fullSrc={`${root}@2x.png`}
      srcSet={`${root}.png ${dimensions.width}w, ${root}@2x.png ${dimensions.width * 2}w`}
      sizes={isSystem ? "(max-width: 700px) 88vw, 360px" : "(max-width: 700px) 72vw, 390px"}
      width={dimensions.width}
      height={dimensions.height}
      title={item.title}
      alt={item.alt}
      label="REDESIGN"
      device={isSystem ? "desktop" : "mobile"}
      showLabel={false}
      eager={eager}
    />
  );
}

export default function DotCareWomenCaseStudy() {
  return (
    <div className={styles.story}>
      <section className={styles.opening} id="women-story">
        <div className={styles.openingText}>
          <p className={styles.eyebrow}>Portfolio redesign · iOS</p>
          <h2>A connected journey through personal health and care.</h2>
          <p>DotCare Women is an existing women’s-health mobile app. This portfolio redesign explores how its tracking, care and educational capabilities could work together: a person can record how they feel, understand what their own information suggests, prepare for a visit and reach care without starting over at each step.</p>
          <div className={styles.sourceLinks}>
            <a href={figmaUrl} target="_blank" rel="noreferrer">View redesign prototype in Figma ↗</a>
            <a href="https://apps.apple.com/se/app/dotcare-women/id1590728047" target="_blank" rel="noreferrer">View existing app on the App Store ↗</a>
          </div>
        </div>
        <div className={styles.heroScreen}><Screen item={media.home} eager /></div>
      </section>

      <section className={styles.model} aria-labelledby="women-model-title">
        <p className={styles.eyebrow}>Product architecture</p>
        <h2 id="women-model-title">Context travels with the person.</h2>
        <div className={styles.modelSteps}>
          <div><span>01</span><h3>Log</h3><p>Describe a health moment in your own words.</p></div>
          <div><span>02</span><h3>Understand</h3><p>Inspect patterns grounded in confirmed entries.</p></div>
          <div><span>03</span><h3>Prepare</h3><p>Review relevant information before a visit.</p></div>
          <div><span>04</span><h3>Get care</h3><p>Move into booking, consultation or home care.</p></div>
        </div>
      </section>

      <section className={styles.chapter} id="women-log">
        <div className={styles.chapterText}>
          <p className={styles.eyebrow}>01 · Log</p>
          <h2>Make the first entry easy, but never automatic.</h2>
          <p>The check-in accepts natural language, then proposes structured health entries. Each suggestion remains editable or removable. Nothing becomes part of the personal record until the person confirms it.</p>
        </div>
        <div className={styles.screenPair}>
          <figure><Screen item={media.describe} /><figcaption>Start with a description, not a form full of assumptions.</figcaption></figure>
          <figure><Screen item={media.review} /><figcaption>Keep the person in control of what is recorded.</figcaption></figure>
        </div>
      </section>

      <section className={`${styles.chapter} ${styles.soft}`} id="women-understand">
        <div className={styles.chapterText}>
          <p className={styles.eyebrow}>02 · Understand</p>
          <h2>Let patterns be questioned.</h2>
          <p>Cycle context and logged experiences come together in personal insights. A pattern is useful only when its basis can be inspected: the detail explains the observation and lets the person return to the entries behind it, without presenting it as a diagnosis.</p>
        </div>
        <div className={styles.screenTriple}>
          <figure><Screen item={media.calendar} /><figcaption>Tracking keeps time and context together.</figcaption></figure>
          <figure><Screen item={media.pattern} /><figcaption>The insight stays specific to the personal record.</figcaption></figure>
          <figure><Screen item={media.source} /><figcaption>Source entries remain visible.</figcaption></figure>
        </div>
      </section>

      <section className={styles.visit} id="women-prepare">
        <div className={styles.visitText}>
          <p className={styles.eyebrow}>03 · Prepare</p>
          <h2>Carry the story into the appointment.</h2>
          <p>Visit preparation gathers relevant information into a summary the person can review and edit. Labels distinguish what came from their own logs, what they added and what DotCare organised. Sharing remains a deliberate choice.</p>
        </div>
        <div className={styles.visitScreen}><Screen item={media.visit} /></div>
      </section>

      <section className={`${styles.chapter} ${styles.care}`} id="women-care">
        <div className={styles.chapterText}>
          <p className={styles.eyebrow}>04 · Get care</p>
          <h2>Keep the next care decision in reach.</h2>
          <p>Doctor discovery and appointment details carry the journey from preparation to action. Online consultation and home healthcare remain available as distinct care routes, without crowding the primary decision.</p>
        </div>
        <div className={styles.screenTriple}>
          <figure><Screen item={media.doctor} /><figcaption>Find a clinician.</figcaption></figure>
          <figure><Screen item={media.appointment} /><figcaption>Keep the appointment context together.</figcaption></figure>
          <figure><Screen item={media.homeCare} /><figcaption>Access a different kind of care when needed.</figcaption></figure>
        </div>
      </section>

      <section className={styles.principles} aria-labelledby="women-principles-title">
        <p className={styles.eyebrow}>Responsible assistance</p>
        <h2 id="women-principles-title">Assist the journey without taking ownership away.</h2>
        <div className={styles.principleGrid}>
          <article><h3>Confirm before recording</h3><p>Suggested entries are reviewed before they become health data.</p></article>
          <article><h3>Show the source</h3><p>Patterns and visit summaries keep their provenance inspectable.</p></article>
          <article><h3>Keep care human</h3><p>Assistive content does not diagnose or prescribe; professional care remains the escalation path.</p></article>
        </div>
      </section>

      <section className={styles.system} id="women-design-system">
        <div className={styles.chapterText}>
          <p className={styles.eyebrow}>Design system</p>
          <h2>Components for health, tracking and trust.</h2>
          <p>The final Figma system uses SF Pro, semantic colour and reusable healthcare patterns to keep state and action recognisable across the journey. Cards, pattern explanations and assistive states share a visual language while keeping their different meanings clear.</p>
        </div>
        <div className={styles.systemGrid}>
          <figure><Screen item={media.systemAppointment} /><figcaption>Appointment components retain care context and state.</figcaption></figure>
          <figure><Screen item={media.systemPattern} /><figcaption>Insight components make the observation and its basis legible.</figcaption></figure>
          <figure><Screen item={media.systemAssistance} /><figcaption>Assistive patterns distinguish suggestion from confirmation.</figcaption></figure>
        </div>
        <p className={styles.accessibility}>The design also considers touch-target size, non-colour state cues, readable errors, chart interpretation and Dynamic Type. These behaviours need validation in the eventual implementation.</p>
      </section>

      <section className={styles.film} id="women-golden-path">
        <div className={styles.chapterText}>
          <p className={styles.eyebrow}>Golden Path</p>
          <h2>See the connected journey in motion.</h2>
          <p>The prototype walkthrough follows the product beyond isolated screens, from everyday context into logging, insight and care.</p>
        </div>
        <video controls playsInline preload="metadata" poster="/video/dotcare-women-golden-path-poster.jpg" width="3456" height="2234" aria-label="DotCare Women Golden Path prototype walkthrough">
          <source src="/video/dotcare-women-golden-path.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </section>

      <section className={styles.close}>
        <p className={styles.eyebrow}>What comes next</p>
        <h2>Validate the journey with real people and real care content.</h2>
        <p>The next step would be usability, accessibility and clinical-content review, followed by testing with production information. The portfolio prototype shows the design direction; it is not a claim of a shipped redesign or measured outcome.</p>
        <small>Names, clinicians, schedules, fees and medical content shown in the prototype are illustrative unless otherwise stated.</small>
      </section>
    </div>
  );
}
