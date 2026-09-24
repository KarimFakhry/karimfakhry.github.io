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
          <h2>Follow the product from executive signal to accountable follow-up.</h2>
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
            <h2>Put the signals that need attention ahead of the operational detail.</h2>
          </div>
          <p>
            EMS gives executives a quick read on workload, progress, priorities and upcoming
            commitments. The hierarchy surfaces what merits review first; calendars and records
            remain available when the signal needs explanation.
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
              <h3>Keep portfolio status close to the day&apos;s decisions.</h3>
              <p>
                The EMS Dashboard pairs cross-portfolio status with the daily agenda so summary
                and immediate action do not become separate destinations.
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
          <h2>Keep ownership familiar while preserving the meaning of the work.</h2>
          <p>
            Tasks and issues share the cues people need to scan—owner, priority, status and
            timing—but they lead to different decisions. Task views emphasise delivery and
            progress; issue views emphasise assignment and resolution. Reusing the interaction
            pattern reduces relearning without treating the records as interchangeable.
          </p>
        </div>
        <div className="ems-workflow-grid">
          <article>
            <h3>Make delivery responsibility easy to scan.</h3>
            <EmsMedia
              file="tasks-desktop"
              title="EMS tasks search and results"
              alt="Andalusia EMS task results showing consistent search, filters, ownership, priority, status and progress"
            />
          </article>
          <article>
            <h3>Carry the same interaction grammar into issue resolution.</h3>
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
              The detail view keeps description, ownership, progress and supporting material
              together. Moving from list to record adds depth without forcing the user to
              reconstruct what they were reviewing.
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
            The design treats minutes as a bridge between discussion and delivery. Agenda context
            remains visible while outcomes become owned follow-up, so a decision does not
            disappear inside the meeting record.
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
            <h2>Make the impact of an access change explicit before it takes effect.</h2>
          </div>
          <p>
            Permissions can affect people and business units beyond the current screen. The
            interface names the employee, scope and delegated action before commitment. Scope and
            confirmation remain visible before sensitive changes are applied.
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
            <p className="eyebrow">Responsive behaviour</p>
            <h2>Preserve the decision when the workspace gets smaller.</h2>
          </div>
          <p>
            Desktop supports broad scanning; Tablet and Mobile narrow the sequence without
            dropping the cues that drive action. Signal, ownership, status, priority and next
            action stay visible, while secondary detail moves deeper instead of competing for
            limited space.
          </p>
        </div>
        <div className="ems-responsive-stage" aria-label="EMS dashboard across Desktop, Tablet and Mobile">
          <figure className="ems-device ems-device-desktop">
            <EmsMedia
              file="dashboard-desktop"
              title="EMS dashboard on Desktop"
              alt="Andalusia EMS dashboard at the Desktop breakpoint"
            />
            <figcaption><strong>Desktop</strong><span>Compare signals with supporting context</span></figcaption>
          </figure>
          <figure className="ems-device ems-device-tablet">
            <EmsMedia
              file="dashboard-tablet"
              title="EMS dashboard on Tablet"
              alt="Andalusia EMS dashboard recomposed for Tablet"
              device="tablet"
              highDensityInline
            />
            <figcaption><strong>Tablet</strong><span>Reflow priorities before secondary detail</span></figcaption>
          </figure>
          <figure className="ems-device ems-device-mobile">
            <EmsMedia
              file="dashboard-mobile"
              title="EMS dashboard on Mobile"
              alt="Andalusia EMS dashboard recomposed for Mobile"
              device="mobile"
              highDensityInline
            />
            <figcaption><strong>Mobile</strong><span>Keep core status and the next action in view</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="ems-story ems-system" id="design-system">
        <div className="ems-section-copy">
          <p className="eyebrow">Design system</p>
          <h2>Make familiar patterns do more of the cognitive work.</h2>
          <p>
            Shared navigation, search, filters, status, priority and action treatments reduce
            relearning across dense workflows. The system stays consistent where the decision is
            consistent, then allows records, meetings and permissions to diverge when their
            consequences differ.
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
        <h2>Keep decisions connected to ownership and follow-up.</h2>
        <p>
          EMS turns dense executive information into a sequence: notice the signal, understand the
          context, assign responsibility and return to the outcome. Shared patterns support that
          sequence while each workflow keeps the distinctions its decisions require.
        </p>
      </section>
    </div>
  );
}
