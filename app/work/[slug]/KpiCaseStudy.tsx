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
    detail: "A compact rail and reflowed performance modules preserve team context.",
  },
  {
    file: "manager-overview-mobile",
    title: "Manager overview on Mobile",
    alt: "KPI Performance Hub Manager overview adapted to a focused Mobile card layout",
    device: "mobile" as const,
    label: "Manager · Mobile",
    detail: "Priority signals become a focused sequence for quick team review.",
  },
  {
    file: "employee-overview-mobile",
    title: "Employee overview on Mobile",
    alt: "KPI Performance Hub private Employee overview adapted for Mobile",
    device: "mobile" as const,
    label: "Employee · Mobile",
    detail: "Personal results, trends and KPI context remain private and easy to scan.",
  },
] as const;

export default function KpiCaseStudy() {
  return (
    <div className="kpi-case-study">
      <section className="kpi-story kpi-product-model" id="product-model">
        <div className="kpi-section-copy kpi-copy-pair">
          <div>
            <p className="eyebrow">The product</p>
            <h2>Daily inputs become Sprint-level understanding.</h2>
          </div>
          <p>
            KPI Performance Hub replaces a spreadsheet-heavy process with one workspace for
            recording daily activity, reviewing Sprint performance and understanding longer-term
            KPI patterns. The product keeps the evidence close to the moment it happens, then
            turns it into context for managers and employees.
          </p>
        </div>
        <ol className="kpi-product-loop" aria-label="KPI Performance Hub product model">
          <li><span>Daily</span><strong>Record the working signal</strong><small>Work mode, standup attendance, TFS score and completion</small></li>
          <li><span>Sprint</span><strong>Review performance in context</strong><small>Team result, qualitative measures and attention areas</small></li>
          <li><span>History</span><strong>Understand change over time</strong><small>Reports, KPI trends and individual performance context</small></li>
        </ol>
      </section>

      <section className="kpi-story kpi-roles" id="role-experiences">
        <div className="kpi-section-copy">
          <p className="eyebrow">Two roles, one system</p>
          <h2>Team visibility for managers. Private progress for employees.</h2>
          <p>
            Both roles work from the same performance model, but the interface changes with the
            responsibility. Managers monitor the team and follow up on patterns; employees see
            only their own progress, history and KPI breakdown.
          </p>
        </div>
        <div className="kpi-role-stage">
          <article>
            <div><span>Manager</span><h3>See what is happening across the team.</h3><p>Current Sprint performance, trends, KPI health and the person needing attention stay in one decision view.</p></div>
            <KpiMedia
              file="manager-overview"
              title="Manager performance overview"
              alt="KPI Performance Hub Manager dashboard with current Sprint team score, attention signal, trend and KPI performance"
              eager
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
          <article>
            <div><span>Employee</span><h3>Understand personal performance without exposing the team.</h3><p>The private workspace combines the latest Sprint, annual context, personal trend and KPI strengths in one focused view.</p></div>
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
            <p className="eyebrow">Daily entry</p>
            <h2>A lightweight daily action, not another end-of-Sprint reconstruction.</h2>
          </div>
          <p>
            Managers record the operational signals that change day by day: Work Mode, Standup
            Attendance, TFS score and completion. Qualitative measures stay at Sprint level, where
            they can be considered with the complete cycle in view instead of being repeated daily.
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
          <p className="eyebrow">People &amp; reports</p>
          <h2>Move from the team roster into one employee&apos;s performance story.</h2>
          <p>
            The directory gives managers a quick read on role, latest Sprint and annual average.
            Opening an employee report brings the latest result, team context, historical trend
            and KPI breakdown together without losing the person behind the numbers.
          </p>
        </div>
        <div className="kpi-people-grid">
          <article>
            <h3>Scan the active team before opening detail.</h3>
            <KpiMedia
              file="employees"
              title="Employee directory"
              alt="KPI Performance Hub employee directory with active team members, roles, latest Sprint results and annual averages"
              sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
            />
          </article>
          <article>
            <h3>Read personal performance with team context.</h3>
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
            <p className="eyebrow">Sprint &amp; KPI context</p>
            <h2>Move from the current result into the history behind it.</h2>
          </div>
          <p>
            Sprint Detail keeps the team result, annual average, previous Sprint and individual
            contributions together. KPI Detail then explains a single measure through its current
            result, target, weight, annual context, trend and scoring definition.
          </p>
        </div>
        <div className="kpi-context-grid">
          <article>
            <h3>Review one Sprint without losing the year around it.</h3>
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
            <p className="eyebrow">Employee experience</p>
            <h2>A personal workspace, not a reduced Manager dashboard.</h2>
          </div>
          <p>
            The Employee experience removes team operations and keeps the information needed for
            self-understanding: personal results, KPI patterns and private Sprint history. Each
            report remains easy to revisit without opening access to another employee&apos;s data.
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
            <p className="eyebrow">Responsive experience</p>
            <h2>The hierarchy adapts when the workspace gets smaller.</h2>
          </div>
          <p>
            Tablet and Mobile replace the dense desktop canvas with more focused card and list
            patterns. Role, Sprint context and the next useful signal remain visible while
            navigation and supporting detail move into layouts suited to the available space.
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
          <p className="eyebrow">Design system</p>
          <h2>Shared patterns keep performance states clear across both roles.</h2>
          <p>
            Navigation, semantic status, metric cards, charts, progress, controls and responsive
            patterns use one visual language. The system gives dense performance information a
            consistent hierarchy without making every workflow look identical.
          </p>
        </div>
        <div className="kpi-system-grid">
          <article className="kpi-system-band kpi-system-foundations">
            <div className="kpi-system-band-copy">
              <h3>Foundations establish the reading order.</h3>
              <p>Semantic color separates status from decoration, while the type scale keeps operational labels, page headings and performance values distinct at a glance.</p>
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
              <h3>One application shell adapts by role and breakpoint.</h3>
              <p>Manager and Employee headers share identity and account patterns. On Tablet and Mobile, role-specific navigation moves into compact drawers while preserving location, active state and today cues.</p>
            </div>
            <div className="kpi-system-shell-media">
              <KpiMedia
                file="ds-shell-topbar"
                title="Responsive application topbars"
                alt="KPI Performance Hub Manager and Employee topbars across desktop and compact breakpoints"
              />
              <div className="kpi-system-media-split">
                <KpiMedia
                  file="ds-responsive-tablet-nav"
                  title="Tablet Manager navigation states"
                  alt="KPI Performance Hub Tablet Manager navigation drawer states for Overview, Daily Entry, Employees, Sprints and Settings"
                  sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
                />
                <KpiMedia
                  file="ds-responsive-mobile-nav"
                  title="Mobile Manager navigation states"
                  alt="KPI Performance Hub Mobile Manager navigation drawer states for Overview, Daily Entry, Employees, Sprints and Settings"
                  sizes="(max-width: 1100px) calc(100vw - 80px), 50vw"
                />
              </div>
            </div>
          </article>

          <article className="kpi-system-band">
            <div className="kpi-system-band-copy">
              <h3>Controls communicate state before submission.</h3>
              <p>Buttons, fields and attendance controls expose default, focus, error, disabled and selected states without changing the interaction model from one workflow to the next.</p>
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
              <h3>Performance data uses repeatable comparison patterns.</h3>
              <p>Metric cards, target progress and archive rows keep value, comparison, period and status in predictable positions so the same data remains scannable across dashboards and reports.</p>
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

          <article className="kpi-system-band">
            <div className="kpi-system-band-copy">
              <h3>Status and identity remain legible from summary to detail.</h3>
              <p>Text labels, avatar identity and interaction states accompany color. The same language carries from employee records into the Sprint summary that anchors the Manager overview.</p>
            </div>
            <div className="kpi-system-state-media">
              <KpiMedia
                file="ds-status-states"
                title="Performance status badges"
                alt="KPI Performance Hub status badges for Finalized, In progress, Active and Archived"
              />
              <KpiMedia
                file="ds-employee-card-states"
                title="Employee summary card states"
                alt="KPI Performance Hub employee summary card in default, hover and pressed states"
              />
              <KpiMedia
                file="ds-sprint-banner"
                title="Sprint summary pattern"
                alt="KPI Performance Hub finalized Sprint summary banner with period, reporting status and team score"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="kpi-reflection">
        <h2>One performance model, shaped around the responsibility of each role.</h2>
        <p>
          KPI Performance Hub connects daily evidence, Sprint review and historical context so
          managers can guide the team while employees can understand their own progress privately.
        </p>
      </section>
    </div>
  );
}
