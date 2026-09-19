import EvidenceMedia from "./EvidenceMedia";

const mediaRoot = "/screens/ems";

type EmsMediaProps = {
  file: string;
  title: string;
  alt: string;
  device?: "desktop" | "tablet" | "mobile";
  eager?: boolean;
  highDensityInline?: boolean;
};

function EmsMedia({
  file,
  title,
  alt,
  device = "desktop",
  eager,
  highDensityInline,
}: EmsMediaProps) {
  return (
    <EvidenceMedia
      src={`${mediaRoot}/${file}.png`}
      fullSrc={`${mediaRoot}/${file}@2x.png`}
      title={title}
      alt={alt}
      label="REDESIGN"
      showLabel={false}
      device={device}
      eager={eager}
      highDensityInline={highDensityInline}
    />
  );
}

export default function EmsCaseStudy() {
  return (
    <div className="ems-case-study">
      <section className="ems-story ems-motion" id="prototype-walkthrough">
        <div className="ems-section-copy">
          <p className="eyebrow">Product in motion</p>
          <h2>See EMS in action across dashboards, tasks, meetings and follow-up.</h2>
        </div>
        <figure className="prototype-walkthrough ems-prototype-walkthrough">
          <video
            width={1920}
            height={1080}
            controls
            playsInline
            preload="metadata"
            poster="/video/ems-golden-path-poster.jpg"
            aria-label="Andalusia EMS Golden Path walkthrough"
          >
            <source src="/video/ems-golden-path.mp4" type="video/mp4" />
            Your browser does not support embedded video.{" "}
            <a href="/video/ems-golden-path.mp4">Open the walkthrough video.</a>
          </video>
        </figure>
      </section>

      <section className="ems-story ems-opening" id="executive-view">
        <div className="ems-section-copy ems-copy-pair">
          <div>
            <p className="eyebrow">Executive dashboards</p>
            <h2>Monitor priorities, progress and upcoming work in one view.</h2>
          </div>
          <p>
            The Main Dashboard shows each executive&apos;s current workload, completion signals,
            calendar and priority watchlist. The EMS Dashboard adds portfolio-level status,
            progress and a daily agenda, with records ready to open for detail.
          </p>
        </div>
        <div className="ems-dashboard-stack">
          <EmsMedia
            file="dashboard-desktop"
            title="EMS executive dashboard"
            alt="Andalusia EMS Main Dashboard with task, issue and meeting measures, an attention-led worklist and calendar"
            eager
          />
          <div className="ems-dashboard-followup">
            <div>
              <h3>Review portfolio status and the daily agenda.</h3>
              <p>
                The EMS Dashboard organizes tasks, issues and meetings by status, progress and
                date, while keeping the day&apos;s records alongside the summary.
              </p>
            </div>
            <EmsMedia
              file="ems-dashboard-desktop"
              title="EMS portfolio dashboard"
              alt="Andalusia EMS portfolio dashboard showing task status distribution, progress, avatar groups and the daily agenda"
            />
          </div>
        </div>
      </section>

      <section className="ems-story ems-workflows" id="workflow-architecture">
        <div className="ems-section-copy">
          <p className="eyebrow">Tasks &amp; issues</p>
          <h2>Manage ownership, priority, status and progress.</h2>
          <p>
            Tasks and issues use the same search, filters and record structure. Users can narrow
            results, scan ownership and due dates, and open a task or issue for its complete
            information and available actions.
          </p>
        </div>
        <div className="ems-workflow-grid">
          <article>
            <h3>Review task ownership and delivery progress.</h3>
            <EmsMedia
              file="tasks-desktop"
              title="EMS tasks search and results"
              alt="Andalusia EMS task results showing consistent search, filters, ownership, priority, status and progress"
            />
          </article>
          <article>
            <h3>Track issues from assignment through resolution.</h3>
            <EmsMedia
              file="issues-desktop"
              title="EMS issues search and results"
              alt="Andalusia EMS issue results using the shared enterprise search, status and ownership structure"
            />
          </article>
        </div>
        <div className="ems-detail-feature">
          <div>
            <h3>Open the complete record without losing context.</h3>
            <p>
              Metadata, description, assignment, progress and attachments are kept together so
              the full task can be reviewed without returning to the list.
            </p>
          </div>
          <EmsMedia
            file="task-detail-desktop"
            title="EMS task details"
            alt="Andalusia EMS task details with structured metadata, ownership, description and attachments"
          />
        </div>
      </section>

      <section className="ems-story ems-meetings" id="meeting-continuity">
        <div className="ems-section-copy ems-copy-pair">
          <div>
            <p className="eyebrow">Meetings</p>
            <h2>Plan meetings, capture minutes and carry actions into follow-up.</h2>
          </div>
          <p>
            Meeting plans keep attendees, agendas and schedules together. Minutes capture the
            outcomes and keep the resulting actions connected to follow-up work inside EMS.
          </p>
        </div>
        <div className="ems-meeting-grid">
          <EmsMedia
            file="meetings-desktop"
            title="EMS meetings list"
            alt="Andalusia EMS meetings list with meeting type, attendees, status and direct plan access"
          />
          <EmsMedia
            file="meeting-minutes-desktop"
            title="EMS meeting minutes"
            alt="Andalusia EMS meeting minutes with structured meeting details, agenda and outcomes"
          />
        </div>
      </section>

      <section className="ems-story ems-governance" id="administration">
        <div className="ems-section-copy ems-copy-pair">
          <div>
            <p className="eyebrow">Administration</p>
            <h2>Manage permissions and access across business units.</h2>
          </div>
          <p>
            Administration provides dedicated views for employee access, business-unit
            permissions, delegated actions and dashboard roles. Scope and confirmation remain
            visible before sensitive changes are applied.
          </p>
        </div>
        <EmsMedia
          file="admin-permission-desktop"
          title="EMS administration permissions"
          alt="Andalusia EMS administration view listing employees, business-unit scope and permission actions"
        />
      </section>

      <section className="ems-story ems-responsive" id="responsive-system">
        <div className="ems-section-copy ems-copy-pair">
          <div>
            <p className="eyebrow">Responsive experience</p>
            <h2>The same EMS workflows across Desktop, Tablet and Mobile.</h2>
          </div>
          <p>
            Desktop provides the complete navigation and highest-density workspace. Tablet
            reorganizes the same modules inside a compact shell, while Mobile presents the same
            records and actions in a focused single-column layout.
          </p>
        </div>
        <div className="ems-responsive-stage" aria-label="EMS dashboard across Desktop, Tablet and Mobile">
          <figure className="ems-device ems-device-desktop">
            <EmsMedia
              file="dashboard-desktop"
              title="EMS dashboard on Desktop"
              alt="Andalusia EMS dashboard at the Desktop breakpoint"
            />
            <figcaption><strong>Desktop</strong><span>Full navigation and dense executive canvas</span></figcaption>
          </figure>
          <figure className="ems-device ems-device-tablet">
            <EmsMedia
              file="dashboard-tablet"
              title="EMS dashboard on Tablet"
              alt="Andalusia EMS dashboard recomposed for Tablet"
              device="tablet"
              highDensityInline
            />
            <figcaption><strong>Tablet</strong><span>Compact shell and reflowed modules</span></figcaption>
          </figure>
          <figure className="ems-device ems-device-mobile">
            <EmsMedia
              file="dashboard-mobile"
              title="EMS dashboard on Mobile"
              alt="Andalusia EMS dashboard recomposed for Mobile"
              device="mobile"
              highDensityInline
            />
            <figcaption><strong>Mobile</strong><span>Focused single-column review</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="ems-story ems-system" id="design-system">
        <div className="ems-section-copy">
          <p className="eyebrow">Design system</p>
          <h2>A shared component system for the complete EMS interface.</h2>
          <p>
            Shared navigation, filters, status and priority treatments, tables, record layouts,
            forms and actions keep dashboards, tasks, issues, meetings and administration
            consistent across the product.
          </p>
        </div>
        <div className="ems-system-media">
          <EmsMedia
            file="design-system-data-display"
            title="EMS data-display system"
            alt="Andalusia EMS design-system components for status, priority, avatars, progress, tabs, tables and metric cards"
          />
        </div>
      </section>

      <section className="ems-reflection">
        <h2>One platform for executive oversight and operational follow-up.</h2>
        <p>
          EMS brings dashboard monitoring, operational records, meeting outcomes and
          administrative access together across Desktop, Tablet and Mobile.
        </p>
      </section>
    </div>
  );
}
