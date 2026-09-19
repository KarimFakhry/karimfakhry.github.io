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
          <h2>From signal to follow-up, in one connected flow.</h2>
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
            <p className="eyebrow">Executive hierarchy</p>
            <h2>Start with the signal. Keep the work behind it close.</h2>
          </div>
          <p>
            The dashboard balances portfolio-level measures with the tasks, issues, meetings and
            dates that need attention now. Leaders can scan the state of work without turning the
            first view into a wall of operational detail.
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
              <h3>From personal attention to portfolio health.</h3>
              <p>
                The EMS Dashboard keeps the same records and status language, then shifts the
                emphasis to distribution, progress and the day&apos;s operational agenda.
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
          <p className="eyebrow">Workflow architecture</p>
          <h2>A shared structure for tasks and issues.</h2>
          <p>
            Tasks and issues share a predictable structure for search, filtering, ownership,
            status, priority and progress. Their detail views then make room for the fields,
            attachments and decisions each object actually needs.
          </p>
        </div>
        <div className="ems-workflow-grid">
          <article>
            <h3>Tasks make ownership and progress scannable.</h3>
            <EmsMedia
              file="tasks-desktop"
              title="EMS tasks search and results"
              alt="Andalusia EMS task results showing consistent search, filters, ownership, priority, status and progress"
            />
          </article>
          <article>
            <h3>Issues use the same grammar without becoming the same object.</h3>
            <EmsMedia
              file="issues-desktop"
              title="EMS issues search and results"
              alt="Andalusia EMS issue results using the shared enterprise search, status and ownership structure"
            />
          </article>
        </div>
        <div className="ems-detail-feature">
          <div>
            <h3>Task details without the clutter.</h3>
            <p>
              Metadata, description, assignment and attachments are grouped by decision value,
              so a record can carry enterprise depth without losing its reading order.
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
            <p className="eyebrow">Meeting continuity</p>
            <h2>Connecting meetings to follow-up work.</h2>
          </div>
          <p>
            Plans, attendees, agenda items and minutes remain connected rather than forming a
            separate documentation layer. The list keeps the meeting plan visible; the minutes
            view gives outcomes enough structure to become accountable follow-up.
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
            <p className="eyebrow">Enterprise governance</p>
            <h2>Making sensitive actions explicit.</h2>
          </div>
          <p>
            Administration separates people, scope and available actions so access remains
            explicit across business units. Sensitive changes use deliberate confirmation rather
            than hiding risk inside a generic settings table.
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
            <p className="eyebrow">Responsive system</p>
            <h2>Density changes. The operating model does not.</h2>
          </div>
          <p>
            Desktop keeps the full navigation and analytical canvas. Tablet compresses the shell
            and reorganizes modules around a narrower reading path. Mobile prioritizes the current
            signal and turns the same system into a focused single-column review.
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
          <h2>One system, reused across every workflow.</h2>
          <p>
            A shared component system keeps tasks, issues, meetings and administration visually
            consistent while allowing each workflow to keep its own structure.
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
        <h2>Complex executive work, shaped as one product.</h2>
        <p>
          Dashboard signals, operational records, meeting outcomes and permissions now share one
          responsive structure—giving each workflow room to work without fragmenting the system.
        </p>
      </section>
    </div>
  );
}
