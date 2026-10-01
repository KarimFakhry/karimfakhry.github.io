import EvidenceMedia from "./EvidenceMedia";
import styles from "./DotCarePhysiciansCaseStudy.module.css";

const root = "/screens/dotcare-physicians";
const frames = {
  splash: { width: 393, height: 852, title: "Splash", alt: "DotCare for Physicians branded mobile opening screen" },
  onboarding: { width: 393, height: 852, title: "Onboarding", alt: "Physician onboarding screen introducing the clinical workspace" },
  auth: { width: 393, height: 852, title: "Sign in", alt: "Physician mobile sign-in screen" },
  worklist: { width: 393, height: 852, title: "Physician worklist", alt: "Physician worklist with patient entries and their current clinical context" },
  "patient-overview": { width: 393, height: 852, title: "Patient overview", alt: "Patient overview bringing identity and clinical information into one mobile view" },
  results: { width: 393, height: 852, title: "Results", alt: "Patient results presented for review in the physician mobile app" },
  medications: { width: 393, height: 852, title: "Medications", alt: "Medication information within the patient clinical workflow" },
  "order-entry": { width: 393, height: 852, title: "Order entry", alt: "Physician order-entry screen with the current patient context" },
  "clinical-note": { width: 393, height: 852, title: "Clinical note", alt: "Clinical note screen for documenting patient care" },
  discharge: { width: 393, height: 852, title: "Discharge", alt: "Discharge documentation screen in the physician workflow" },
  "tablet-worklist": { width: 1194, height: 834, title: "Tablet worklist", alt: "Tablet physician worklist using wider space for patient information and actions" },
} as const;

type Frame = keyof typeof frames;

function Screen({ file, eager = false }: { file: Frame; eager?: boolean }) {
  const frame = frames[file];
  const url = `${root}/${file}`;
  return (
    <EvidenceMedia
      src={`${url}.webp`}
      srcSet={`${url}.webp ${frame.width}w, ${url}@2x.webp ${frame.width * 2}w`}
      sizes={file === "tablet-worklist"
        ? "(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 80vw, 1100px"
        : "(max-width: 700px) 72vw, (max-width: 1100px) 38vw, 360px"}
      fullSrc={`${url}@2x.png`}
      width={frame.width}
      height={frame.height}
      title={frame.title}
      alt={frame.alt}
      label="PRODUCT"
      showLabel={false}
      device={file === "tablet-worklist" ? "tablet" : "mobile"}
      eager={eager}
    />
  );
}

export default function DotCarePhysiciansCaseStudy() {
  return (
    <div className={styles.story}>
      <section className={styles.opening} id="physicians-story">
        <div className={styles.openingCopy}>
          <p className={styles.eyebrow}>Physician-facing mobile product</p>
          <h2>Clinical context should follow the work.</h2>
          <p>DotCare for Physicians brings the patient worklist, clinical review and documentation into a mobile workspace. The design question is what a physician needs to recognise, inspect and act on at each moment—not how much of the record can fit on one screen.</p>
          <a href="https://www.figma.com/design/3JcEcFvX7D6yQfu2f5B2HE/DotCare-for-Physicians?node-id=0-1" target="_blank" rel="noreferrer">View the Figma product design ↗</a>
        </div>
        <div className={styles.openingMedia}><Screen file="worklist" eager /></div>
      </section>

      <section className={styles.foundation}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Entry and orientation</p>
          <h2>Establish the clinical workspace before the first task.</h2>
          <p>The opening, onboarding and sign-in screens introduce a physician-specific product. Once inside, the worklist becomes the starting point for patient work rather than a generic service menu.</p>
        </div>
        <div className={styles.phoneGrid}>
          <figure><Screen file="splash" /><figcaption>A distinct product identity for the clinical role.</figcaption></figure>
          <figure><Screen file="onboarding" /><figcaption>Orientation before the working day begins.</figcaption></figure>
          <figure><Screen file="auth" /><figcaption>Access leads into the physician workspace.</figcaption></figure>
        </div>
      </section>

      <section className={styles.clinical}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Review before action</p>
          <h2>Keep patient identity and evidence in the same decision path.</h2>
          <p>The worklist gives the physician a way into a patient’s record. The overview and results then bring relevant information forward before an order or note is made. Clinical detail stays available without making every list item carry the whole chart.</p>
        </div>
        <div className={styles.phoneGrid}>
          <figure><Screen file="worklist" /><figcaption>Start from the patient work requiring attention.</figcaption></figure>
          <figure><Screen file="patient-overview" /><figcaption>Re-establish patient context before moving deeper.</figcaption></figure>
          <figure><Screen file="results" /><figcaption>Inspect results within the patient workflow.</figcaption></figure>
        </div>
      </section>

      <section className={styles.actions}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Clinical actions</p>
          <h2>Different actions deserve different working surfaces.</h2>
          <p>Medication review, order entry and clinical documentation are related, but they are not interchangeable. Each view keeps its own task legible while the patient remains the connecting context.</p>
        </div>
        <div className={styles.phoneGrid}>
          <figure><Screen file="medications" /><figcaption>Review medication information in context.</figcaption></figure>
          <figure><Screen file="order-entry" /><figcaption>Make the order a deliberate, inspectable action.</figcaption></figure>
          <figure><Screen file="clinical-note" /><figcaption>Give documentation a focused place in the flow.</figcaption></figure>
        </div>
      </section>

      <section className={styles.continuity}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Continuity of care</p>
          <h2>Close the encounter without losing its context.</h2>
          <p>The discharge view extends the same patient-centred hierarchy into the end of the encounter. It is presented as part of the designed workflow, not as a claim about clinical outcomes.</p>
        </div>
        <div className={styles.singlePhone}><Screen file="discharge" /></div>
      </section>

      <section className={styles.tablet}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Tablet adaptation</p>
          <h2>Use width to compare, not to dilute the priority.</h2>
          <p>The tablet worklist gives patient information more room while preserving the same entry into care. The wider layout is an adaptation of the physician workflow, not a different product.</p>
        </div>
        <figure><Screen file="tablet-worklist" /><figcaption>The worklist retains patient context and action at a wider scale.</figcaption></figure>
      </section>

      <section className={styles.close}>
        <p className={styles.eyebrow}>Product-design direction</p>
        <h2>Make the next clinical decision easier to locate and document.</h2>
        <p>This case study presents the current high-fidelity design across mobile and tablet. It does not claim a shipped release, an integration or a measured change in clinical practice.</p>
      </section>
    </div>
  );
}
