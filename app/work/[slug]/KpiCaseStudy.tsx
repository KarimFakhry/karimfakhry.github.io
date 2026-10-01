import EvidenceMedia from "./EvidenceMedia";
import styles from "./KpiCaseStudy.module.css";

const root = "/screens/kpi-performance";

const assets = {
  "final-auth": { width: 1440, height: 900 },
  "final-manager": { width: 1440, height: 900 },
  "final-employee": { width: 1440, height: 900 },
  "final-daily": { width: 1440, height: 900 },
  "final-insights": { width: 1440, height: 900 },
  "final-growth": { width: 1440, height: 900 },
  "final-checkins": { width: 1440, height: 900 },
  "final-sprint": { width: 1440, height: 900 },
  "final-mobile-employee-home": { width: 393, height: 852 },
  "final-mobile-employee-daily": { width: 393, height: 852 },
  "final-mobile-employee-growth": { width: 393, height: 852 },
  "final-mobile-employee-focus": { width: 393, height: 852 },
  "final-mobile-employee-checkins": { width: 393, height: 852 },
  "final-mobile-manager-home": { width: 393, height: 852 },
  "final-mobile-manager-insights": { width: 393, height: 852 },
  "final-mobile-manager-checkins": { width: 393, height: 852 },
  "final-mobile-manager-sprints": { width: 393, height: 852 },
  "final-system-web-intelligence": { width: 3168, height: 964 },
  "final-system-mobile-performance": { width: 1760, height: 1041 },
  "final-system-mobile-actions": { width: 1760, height: 1595 },
} as const;

type Asset = keyof typeof assets;

function Screen({
  file,
  title,
  alt,
  eager = false,
}: {
  file: Asset;
  title: string;
  alt: string;
  eager?: boolean;
}) {
  const { width, height } = assets[file];
  const url = `${root}/${file}`;
  const isPhone = height === 852;
  return (
    <EvidenceMedia
      src={`${url}.webp`}
      srcSet={`${url}.webp ${width}w, ${url}@2x.webp ${width * 2}w`}
      sizes={isPhone
        ? "(max-width: 700px) 72vw, (max-width: 1100px) 36vw, 290px"
        : "(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 1320px"}
      fullSrc={`${url}@2x.png`}
      width={width}
      height={height}
      title={title}
      alt={alt}
      label="PRODUCT"
      showLabel={false}
      device={isPhone ? "mobile" : "desktop"}
      eager={eager}
    />
  );
}

const employeeMobile = [
  { file: "final-mobile-employee-home", title: "Employee Home", alt: "Private Employee Home with current Sprint context and daily actions", caption: "The current result and next useful action meet in one place." },
  { file: "final-mobile-employee-daily", title: "Employee Daily Entry", alt: "Employee Daily Entry with self-reported work context and an explicit saved state", caption: "Self-reporting stays short; it does not calculate a KPI score." },
  { file: "final-mobile-employee-growth", title: "Employee Growth", alt: "Private Growth view with personal strengths, development and explainable insight", caption: "Compare with your own history before drawing a conclusion." },
  { file: "final-mobile-employee-focus", title: "Employee Focus", alt: "Employee Focus detail connecting a development area to a chosen action", caption: "Turn an insight into a specific focus without prescribing the response." },
  { file: "final-mobile-employee-checkins", title: "Employee Check-ins", alt: "Employee Check-ins with an upcoming conversation and its status", caption: "Keep the conversation and its preparation close to the work." },
] as const;

const managerMobile = [
  { file: "final-mobile-manager-home", title: "Manager Home", alt: "Manager Home with team signals and current Sprint context", caption: "Team attention comes before operational detail." },
  { file: "final-mobile-manager-insights", title: "Manager Insights", alt: "Manager Insights highlighting patterns to discuss and recognise", caption: "Patterns are explained, not presented as a ranking of people." },
  { file: "final-mobile-manager-checkins", title: "Manager Check-ins", alt: "Manager Check-ins with upcoming conversations and follow-up states", caption: "Follow-up remains visible after the meeting is arranged." },
  { file: "final-mobile-manager-sprints", title: "Manager Sprint Result", alt: "Manager mobile Sprint 167 team summary with KPI context", caption: "The Sprint result remains connected to its contributing measures." },
] as const;

export default function KpiCaseStudy() {
  return (
    <div className={`kpi-case-study ${styles.story}`}>
      <section className={`kpi-story ${styles.architecture}`} id="experience-architecture">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className="eyebrow">Experience architecture</p>
            <h2>Same performance model. Different responsibilities and moments.</h2>
            <p>The web platform holds the deeper work of reviewing evidence, evaluating a Sprint and understanding change. The native mobile companion puts shorter actions, personal growth and follow-up within reach. Neither surface should simply inherit the other’s density.</p>
          </div>
          <div className={styles.roleGrid}>
            <article><span>Manager</span><h3>See the team without reducing people to a ranking.</h3><p>Comparison and attention signals lead into evidence, insight and a conversation with the person concerned.</p></article>
            <article><span>Employee</span><h3>Understand personal performance without exposing the team.</h3><p>The private workspace starts with the person’s own result, history and growth—not a Manager dashboard with controls removed.</p></article>
          </div>
        </div>
      </section>

      <section className={`kpi-story ${styles.web}`} id="web-platform">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className="eyebrow">Web platform</p>
            <h2>Keep the evidence close to the judgement it supports.</h2>
            <p>The final web experience separates daily recording from Sprint evaluation. Self-reported work context and Manager verification preserve the source of an entry; qualitative KPI scores are entered at Sprint level, when the full cycle can be considered. Missing scores stay missing rather than becoming zero.</p>
          </div>
          <figure className={styles.wideFigure}>
            <Screen file="final-auth" title="Final sign-in experience" alt="Final KPI Performance Hub sign-in with emerald brand field, Andalusia identity and a white role-aware authentication panel" eager />
            <figcaption>Brand and access establish that performance information is private before a role-specific workspace opens.</figcaption>
          </figure>
          <div className={styles.webGrid}>
            <figure>
              <Screen file="final-manager" title="Manager Overview" alt="Final Manager Overview with Sprint health, team trends, insight cards and upcoming check-ins" />
              <figcaption><strong>Manager overview</strong>Lead with the signal; open individual context when it needs attention.</figcaption>
            </figure>
            <figure>
              <Screen file="final-employee" title="Employee Overview" alt="Final private Employee Overview with Sprint result, personal trend and growth context" />
              <figcaption><strong>Employee overview</strong>Personal performance is legible without colleague-level information.</figcaption>
            </figure>
            <figure>
              <Screen file="final-daily" title="Manager Daily Entry" alt="Final Manager Daily Entry showing employee self-logs, verification state, TFS assessment and a visible discrepancy" />
              <figcaption><strong>Daily Entry</strong>Capture what belongs to the day, and keep disagreement visible until it is resolved.</figcaption>
            </figure>
            <figure>
              <Screen file="final-insights" title="Manager Insights" alt="Final Manager Insights with explained changes, development signals and a KPI-by-person pattern view" />
              <figcaption><strong>Insights</strong>Explain a pattern with its underlying scores; never turn it into an employee ranking.</figcaption>
            </figure>
            <figure>
              <Screen file="final-growth" title="Employee My Growth" alt="Final private My Growth view with strengths, area to develop, personal best and KPI profile" />
              <figcaption><strong>My Growth</strong>Compare against the person’s own history before suggesting a next step.</figcaption>
            </figure>
            <figure>
              <Screen file="final-checkins" title="Manager Check-ins" alt="Final Manager Check-ins workspace for requests, upcoming conversations and follow-up" />
              <figcaption><strong>Check-ins</strong>Make a performance conversation accountable beyond the meeting slot.</figcaption>
            </figure>
          </div>
          <figure className={styles.wideFigure}>
            <Screen file="final-sprint" title="Manager Sprint 167 detail" alt="Final Sprint detail with team result, change from previous Sprint, results by person and all eight weighted KPI measures" />
            <figcaption>Interpret the KPI, not only the number. Sprint results keep contribution, comparison and historical movement together.</figcaption>
          </figure>
        </div>
      </section>

      <section className={`kpi-story ${styles.mobile}`} id="mobile-companion">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className="eyebrow">Native mobile companion</p>
            <h2>Short actions and personal context travel with the working day.</h2>
            <p>Mobile recomposes the same responsibilities around today’s task. Current performance, status and the next meaningful action remain visible; deeper explanation is still available when a signal warrants it. These are native mobile designs, not reduced desktop screenshots.</p>
          </div>
          <div className={styles.mobileGroup}>
            <div className={styles.groupHeading}><span>Employee</span><h3>A private place to record, reflect and prepare.</h3></div>
            <div className={styles.phoneGrid}>
              {employeeMobile.map((item) => (
                <figure key={item.file}><Screen file={item.file} title={item.title} alt={item.alt} /><figcaption>{item.caption}</figcaption></figure>
              ))}
            </div>
          </div>
          <div className={styles.mobileGroup}>
            <div className={styles.groupHeading}><span>Manager</span><h3>Review the signal, then follow through with the person.</h3></div>
            <div className={styles.phoneGrid}>
              {managerMobile.map((item) => (
                <figure key={item.file}><Screen file={item.file} title={item.title} alt={item.alt} /><figcaption>{item.caption}</figcaption></figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`kpi-story ${styles.system}`} id="design-system">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className="eyebrow">Cross-platform design system</p>
            <h2>Keep performance meaning consistent across both surfaces.</h2>
            <p>Scores, status and progress keep the same semantics for Managers and Employees. Shared interaction rules make evidence, insight and follow-up familiar, while web and mobile can compose them differently for the moment at hand.</p>
          </div>
          <div className={styles.systemGrid}>
            <figure><Screen file="final-system-web-intelligence" title="Web performance intelligence patterns" alt="Current web design-system performance intelligence patterns for insights and KPI explanation" /><figcaption>Web patterns preserve the explanation behind a performance signal.</figcaption></figure>
            <figure><Screen file="final-system-mobile-performance" title="Mobile Sprint and performance components" alt="Current mobile design-system Sprint and performance components" /><figcaption>Mobile components carry the same result and state language into shorter actions.</figcaption></figure>
            <figure><Screen file="final-system-mobile-actions" title="Mobile actions and inputs" alt="Current mobile design-system actions and input patterns" /><figcaption>Shared control states keep entry and follow-up predictable.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className={`kpi-story ${styles.close}`}>
        <div className={styles.inner}>
          <p className="eyebrow">Current product state</p>
          <h2>Performance should be easier to understand without becoming harder to record.</h2>
          <p>The web platform now connects daily evidence, Sprint evaluation, explainable insights and private reporting. The mobile companion carries the shorter actions and conversations into everyday use. The product story is continuity between those moments—not a larger dashboard.</p>
        </div>
      </section>
    </div>
  );
}
