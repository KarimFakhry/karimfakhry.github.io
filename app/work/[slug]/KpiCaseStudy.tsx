import EvidenceMedia from "./EvidenceMedia";

const mediaRoot = "/screens/kpi-performance";
const mediaVersion = "20260921c";

const kpiAssets = {
  "manager-overview": { width: 1440, height: 900, retinaWidth: 2880, full: "manager-overview@2x.png" },
  "employee-overview": { width: 1440, height: 900, retinaWidth: 2880, full: "employee-overview@2x.png" },
  "daily-entry": { width: 1440, height: 900, retinaWidth: 2880, full: "daily-entry@2x.png" },
  employees: { width: 1440, height: 900, retinaWidth: 2880, full: "employees@2x.png" },
  "manager-employee-report": { width: 1440, height: 900, retinaWidth: 2880, full: "manager-employee-report@2x.png" },
  "manager-sprint-detail": { width: 1440, height: 900, retinaWidth: 2880, full: "manager-sprint-detail@2x.png" },
  "kpi-detail-tfs": { width: 1440, height: 900, retinaWidth: 2880, full: "kpi-detail-tfs@2x.png" },
  "employee-sprints": { width: 1440, height: 900, retinaWidth: 2880, full: "employee-sprints@2x.png" },
  "manager-overview-tablet": { width: 768, height: 1024, retinaWidth: 1536, full: "manager-overview-tablet@2x.png" },
  "manager-overview-mobile": { width: 390, height: 844, retinaWidth: 780, full: "manager-overview-mobile@2x.png" },
  "employee-overview-mobile": { width: 390, height: 844, retinaWidth: 780, full: "employee-overview-mobile@2x.png" },
  "ds-foundations-color": { width: 1280, height: 1044, retinaWidth: 2560, full: "ds-foundations-color@2x.webp" },
  "ds-foundations-type": { width: 1280, height: 1841, retinaWidth: 2560, full: "ds-foundations-type@2x.webp" },
  "ds-shell-topbar": { width: 1248, height: 408, retinaWidth: 2496, full: "ds-shell-topbar@2x.webp" },
  "ds-responsive-tablet-nav": { width: 1796, height: 1080, retinaWidth: 3592, full: "ds-responsive-tablet-nav@2x.webp" },
  "ds-responsive-mobile-nav": { width: 1808, height: 900, retinaWidth: 3616, full: "ds-responsive-mobile-nav@2x.webp" },
  "ds-action-states": { width: 902, height: 160, retinaWidth: 1804, full: "ds-action-states@2x.webp" },
  "ds-input-states": { width: 1688, height: 290, retinaWidth: 3376, full: "ds-input-states@2x.webp" },
  "ds-work-mode": { width: 1576, height: 91, retinaWidth: 3152, full: "ds-work-mode@2x.webp" },
  "ds-metric-cards-v2": { width: 963, height: 189, retinaWidth: 1926, full: "ds-metric-cards-v2@2x.webp" },
  "ds-progress-states-v2": { width: 536, height: 74, retinaWidth: 1072, full: "ds-progress-states-v2@2x.webp" },
  "ds-archive-rows": { width: 1572, height: 296, retinaWidth: 3144, full: "ds-archive-rows@2x.webp" },
  "ds-status-states": { width: 565, height: 81, retinaWidth: 1130, full: "ds-status-states@2x.webp" },
  "ds-employee-card-states": { width: 1174, height: 355, retinaWidth: 2348, full: "ds-employee-card-states@2x.webp" },
  "ds-sprint-banner": { width: 1206, height: 234, retinaWidth: 2412, full: "ds-sprint-banner@2x.webp" },
} as const;

type KpiAssetName = keyof typeof kpiAssets;

type KpiMediaProps = {
  file: KpiAssetName;
  title: string;
  alt: string;
  device?: "desktop" | "tablet" | "mobile";
  eager?: boolean;
  sizes?: string;
};

function KpiMedia({
  file,
  title,
  alt,
  device = "desktop",
  eager,
  sizes = "(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 1320px",
}: KpiMediaProps) {
  const asset = kpiAssets[file];

  return (
    <EvidenceMedia
      src={`${mediaRoot}/${file}.webp?v=${mediaVersion}`}
      srcSet={`${mediaRoot}/${file}.webp?v=${mediaVersion} ${asset.width}w, ${mediaRoot}/${file}@2x.webp?v=${mediaVersion} ${asset.retinaWidth}w`}
      sizes={sizes}
      fullSrc={`${mediaRoot}/${asset.full}`}
      width={asset.width}
      height={asset.height}
      title={title}
      alt={alt}
      label="PRODUCT"
      showLabel={false}
      device={device}
      eager={eager}
    />
  );
}

const responsiveMedia = [
  {
    file: "manager-overview-tablet",
    title: "Manager overview on Tablet",
    alt: "KPI Performance Hub Manager overview recomposed for Tablet",
    device: "tablet" as const,
    label: "Tablet",
    detail: "The current result and comparison stay in the first reading sequence.",
  },
  {
    file: "manager-overview-mobile",
    title: "Manager overview on Mobile",
    alt: "KPI Performance Hub Manager overview adapted to a focused Mobile card layout",
    device: "mobile" as const,
    label: "Manager · Mobile",
    detail: "Team attention is sequenced around the next useful action.",
  },
  {
    file: "employee-overview-mobile",
    title: "Employee overview on Mobile",
    alt: "KPI Performance Hub private Employee overview adapted for Mobile",
    device: "mobile" as const,
    label: "Employee · Mobile",
    detail: "Personal context stays private as supporting detail moves deeper.",
  },
] as const;

export default function KpiCaseStudy() {
  return (
    <div className="kpi-case-study">
      <section className="kpi-story kpi-roles" id="role-experiences">
        <div className="kpi-section-copy">
          <p className="eyebrow">Responsibility &amp; privacy</p>
          <h2>Different responsibilities need different views of performance.</h2>
          <p>
            Managers need comparison, team visibility and attention signals. Employees need a
            private view of their own progress. The product shares scoring logic without sharing
            inappropriate context or reducing the Employee experience to a restricted dashboard.
          </p>
        </div>
        <div className="kpi-role-stage">
          <article>
            <div><span>Manager</span><h3>Direct attention without exposing every detail at once.</h3><p>The overview prioritises current Sprint health, trends and the person needing review. It supports a move from team signal to individual context rather than treating the dashboard as the decision itself.</p></div>
            <KpiMedia
              file="manager-overview"
              title="Manager performance overview"
              alt="KPI Performance Hub Manager dashboard with current Sprint team score, attention signal, trend and KPI performance"
              eager
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
          <article>
            <div><span>Employee</span><h3>Understand personal performance without exposing the team.</h3><p>The Employee view removes team operations and comparison between colleagues. Personal results, trend and KPI context stay together without revealing information outside the Employee&apos;s responsibility.</p></div>
            <KpiMedia
              file="employee-overview"
              title="Private Employee performance overview"
              alt="KPI Performance Hub Employee dashboard with a private Sprint score, annual context, personal trend and KPI breakdown"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
        </div>
      </section>

      <section className="kpi-story kpi-daily-entry" id="daily-entry">
        <div className="kpi-section-copy kpi-copy-pair">
          <div>
            <p className="eyebrow">Evidence capture</p>
            <h2>A lightweight daily action, not another end-of-Sprint reconstruction.</h2>
          </div>
          <p>
            Daily Entry asks only for signals that genuinely change day by day: Work Mode,
            Standup Attendance, TFS score and completion. Keeping the action brief captures
            evidence while context is fresh and reduces reconstruction at Sprint end. Qualitative
            measures remain at Sprint level because they need the full cycle, not another daily rating.
          </p>
        </div>
        <KpiMedia
          file="daily-entry"
          title="Manager Daily Entry"
          alt="KPI Performance Hub Daily Entry with date tabs, employee work mode, standup attendance, TFS score and day completion controls"
        />
      </section>

      <section className="kpi-story kpi-people" id="employee-reports">
        <div className="kpi-section-copy">
          <p className="eyebrow">From signal to person</p>
          <h2>Follow a team signal into the context behind it.</h2>
          <p>
            The directory supports scanning; the report supports judgement. Opening an employee
            keeps the current result close to historical and team context so a Manager can
            understand whether a change is isolated, sustained or needs follow-up.
          </p>
        </div>
        <div className="kpi-people-grid">
          <article>
            <h3>Find the person behind the signal.</h3>
            <KpiMedia
              file="employees"
              title="Employee directory"
              alt="KPI Performance Hub employee directory with active team members, roles, latest Sprint results and annual averages"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
          <article>
            <h3>Keep the comparison close to the conversation.</h3>
            <KpiMedia
              file="manager-employee-report"
              title="Manager Employee Report"
              alt="KPI Performance Hub Manager Employee Report with the latest Sprint, annual average, team average, trend and KPI breakdown"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
        </div>
      </section>

      <section className="kpi-story kpi-history" id="performance-history">
        <div className="kpi-section-copy kpi-copy-pair">
          <div>
            <p className="eyebrow">Interpreting performance</p>
            <h2>A score needs context before it can guide action.</h2>
          </div>
          <p>
            Sprint and KPI views keep the relevant comparison close to the result: what changed,
            what it is being compared with, how much the measure contributes and whether the
            pattern deserves attention. History explains movement rather than simply accumulating rows.
          </p>
        </div>
        <div className="kpi-context-grid">
          <article>
            <h3>Review the Sprint as part of a longer pattern.</h3>
            <KpiMedia
              file="manager-sprint-detail"
              title="Manager Sprint Detail"
              alt="KPI Performance Hub Sprint Detail with team result, annual average, previous Sprint, employee scores, trend and KPI breakdown"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
          <article>
            <h3>Interpret the KPI, not only the number.</h3>
            <KpiMedia
              file="kpi-detail-tfs"
              title="TFS Compliance KPI Detail"
              alt="KPI Performance Hub TFS Compliance detail with a 9.0 out of 10 current result shown at 90 percent, annual context, target, weight, trend and scoring definition"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
        </div>
      </section>

      <section className="kpi-story kpi-employee-history" id="employee-experience">
        <div className="kpi-section-copy kpi-copy-pair">
          <div>
            <p className="eyebrow">Private reflection</p>
            <h2>A personal workspace, not a reduced Manager dashboard.</h2>
          </div>
          <p>
            The Employee experience keeps personal results, KPI patterns and Sprint history private.
            History supports reflection across periods while the current result remains the starting
            point; team operations and colleague-level comparisons stay outside the Employee view.
          </p>
        </div>
        <KpiMedia
          file="employee-sprints"
          title="Private Employee Sprint archive"
          alt="KPI Performance Hub Employee Sprint archive with private scores, periods and finalized report states"
        />
      </section>

      <section className="kpi-story kpi-responsive" id="responsive-experience">
        <div className="kpi-section-copy kpi-copy-pair">
          <div>
            <p className="eyebrow">Responsive priority</p>
            <h2>Keep the decision visible as space narrows.</h2>
          </div>
          <p>
            Smaller screens preserve the current result, comparison, identity, status and next
            meaningful action. Supporting detail moves deeper and dense desktop relationships are
            resequenced instead of shrinking every element into the available space.
          </p>
        </div>
        <div className="kpi-responsive-stage">
          {responsiveMedia.map((media) => (
            <figure className={`kpi-device kpi-device-${media.device}`} key={media.file}>
              <KpiMedia
                file={media.file}
                title={media.title}
                alt={media.alt}
                device={media.device}
                sizes={media.device === "tablet"
                  ? "(max-width: 760px) 88vw, (max-width: 1100px) 620px, 42vw"
                  : "(max-width: 760px) 74vw, (max-width: 1100px) 42vw, 21vw"}
              />
              <figcaption><strong>{media.label}</strong><span>{media.detail}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="kpi-story kpi-system" id="design-system">
        <div className="kpi-section-copy">
          <p className="eyebrow">System principles</p>
          <h2>Shared semantics reduce relearning across the product.</h2>
          <p>
            Scores, statuses and progress retain their meaning for Managers and Employees.
            Interaction rules remain predictable, while composition can change with responsibility
            and available space instead of forcing every workflow into the same arrangement.
          </p>
        </div>
        <div className="kpi-system-grid">
          <article className="kpi-system-band kpi-system-foundations">
            <div className="kpi-system-band-copy">
              <h3>Keep performance meaning stable when responsibility changes.</h3>
              <p>Colour and type create a consistent hierarchy for score, status, comparison and supporting context, whether the reader is monitoring a team or reviewing personal performance.</p>
            </div>
            <div className="kpi-system-foundation-media">
              <KpiMedia
                file="ds-foundations-color"
                title="Color primitives and semantic roles"
                alt="KPI Performance Hub color foundations showing product primitives and semantic roles for text, surfaces, borders and status"
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 58vw"
              />
              <KpiMedia
                file="ds-foundations-type"
                title="Product typography scale"
                alt="KPI Performance Hub typography scale from display and page headings through body, labels and performance metrics"
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 42vw"
              />
            </div>
          </article>

          <article className="kpi-system-band">
            <div className="kpi-system-band-copy">
              <h3>Make routine actions predictable.</h3>
              <p>Daily Entry and Settings use the same interaction rules for selection, focus, validation and submission, so a familiar action does not need to be relearned in each workflow.</p>
            </div>
            <div className="kpi-system-control-media">
              <KpiMedia
                file="ds-action-states"
                title="Button interaction states"
                alt="KPI Performance Hub primary and outline buttons in default, disabled, focus, hover, loading and pressed states"
              />
              <KpiMedia
                file="ds-input-states"
                title="Input validation states"
                alt="KPI Performance Hub input fields in default, focus, filled, error and disabled states"
              />
              <KpiMedia
                file="ds-work-mode"
                title="Work Mode selection states"
                alt="KPI Performance Hub Work Mode segmented control with Office, Home, Leave and Holiday selections"
              />
            </div>
          </article>

          <article className="kpi-system-band">
            <div className="kpi-system-band-copy">
              <h3>Carry the same meaning into a different composition.</h3>
              <p>Metric cards, progress and history rows keep value, comparison and state in a familiar order, then reflow when space changes instead of compressing the desktop arrangement.</p>
            </div>
            <div className="kpi-system-data-media">
              <KpiMedia
                file="ds-metric-cards-v2"
                title="Metric card semantic states"
                alt="KPI Performance Hub metric cards in default, attention and positive semantic states"
              />
              <KpiMedia
                file="ds-progress-states-v2"
                title="Progress and target indicators"
                alt="KPI Performance Hub progress indicators using green and orange semantic states"
              />
              <KpiMedia
                file="ds-archive-rows"
                title="Responsive Sprint archive rows"
                alt="KPI Performance Hub Sprint archive rows in regular and compact layouts with default, hover and pressed states"
              />
            </div>
          </article>

        </div>
      </section>

      <section className="kpi-reflection">
        <h2>Make performance easier to understand without making it harder to record.</h2>
        <p>
          KPI Performance Hub connects lightweight daily evidence to Sprint review, KPI
          interpretation and private reflection. Managers can follow a team signal into context;
          Employees can understand their own progress without inheriting the Manager view.
        </p>
      </section>
    </div>
  );
}
