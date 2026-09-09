import EvidenceMedia from "./EvidenceMedia";
import HealthAppWalkthrough from "./HealthAppWalkthrough";

type EssScreenProps = {
  file: string;
  title: string;
  alt: string;
  className?: string;
};

function EssScreen({ file, title, alt, className = "" }: EssScreenProps) {
  return (
    <figure className={`ess-phone-card ${className}`.trim()}>
      <EvidenceMedia
        src={`/screens/dotcare-ess/${file}.png`}
        fullSrc={`/screens/dotcare-ess/${file}@2x.png`}
        title={title}
        alt={alt}
        label="REDESIGN"
        device="mobile"
        highDensityInline
      />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default function DotCareEssCaseStudy() {
  return (
    <div className="ess-case-study">
      <section className="ess-architecture" id="information-architecture">
        <div className="ess-section-copy">
          <p className="eyebrow">Information architecture</p>
          <h2>Four stable destinations. Responsibility appears in context.</h2>
          <p>
            Home, Attendance, Leaves and More anchor both roles. Requests, Approvals,
            Notifications, Profile and Upcoming remain reachable from the moment that gives them
            meaning instead of competing for permanent navigation space.
          </p>
        </div>
        <ol aria-label="DotCare ESS information architecture">
          <li><span>01</span><strong>Home</strong><small>Current state and attention</small></li>
          <li><span>02</span><strong>Attendance</strong><small>Daily record and corrections</small></li>
          <li><span>03</span><strong>Leaves</strong><small>Balances and new requests</small></li>
          <li><span>04</span><strong>More</strong><small>Profile and work settings</small></li>
        </ol>
        <div className="ess-context-row" aria-label="Contextual product areas">
          <span>Requests</span><span>Approvals</span><span>Notifications</span><span>Upcoming</span><span>Profile</span>
        </div>
      </section>

      <HealthAppWalkthrough projectId="dotcare-ess" />

      <section className="ess-opening" id="product-model">
        <div className="ess-section-copy">
          <p className="eyebrow">The product model</p>
          <h2>Attendance is not two buttons. It is one current state.</h2>
          <p>
            DotCare ESS turns the working day into a clear status: what the employee has done,
            where they are, how long they have worked and the one action available next. Manager
            responsibilities enter the same Home experience only when they need attention.
          </p>
        </div>
        <div className="ess-home-stage" aria-label="Employee and manager Home states">
          <EssScreen
            file="home-employee"
            title="Employee Home · Ready to check in"
            alt="DotCare ESS Employee Home showing a verified work location and a single Check In action"
            className="ess-home-employee"
          />
          <EssScreen
            file="home-checked-in"
            title="Employee Home · Working now"
            alt="DotCare ESS checked-in Home showing hours worked, location verification and one Check Out action"
            className="ess-home-primary"
          />
          <EssScreen
            file="home-manager"
            title="Manager Home · Attention in context"
            alt="DotCare ESS Manager Home showing personal attendance alongside approvals needing attention"
            className="ess-home-manager"
          />
        </div>
      </section>

      <section className="ess-story ess-attendance" id="attendance">
        <div className="ess-section-copy">
          <p className="eyebrow">Attendance</p>
          <h2>Exceptions lead directly to correction.</h2>
          <p>
            The overview establishes the day’s record. A missing check-out becomes an explicit
            exception, then carries its date, time and reason into a correction request rather than
            leaving the employee to resolve an ambiguous status elsewhere.
          </p>
        </div>
        <div className="ess-phone-grid ess-phone-grid-three">
          <EssScreen
            file="attendance-overview"
            title="Attendance overview"
            alt="Attendance overview with worked hours, daily status and attendance history"
          />
          <EssScreen
            file="attendance-missing-checkout"
            title="Missing check-out"
            alt="Attendance day detail showing a missing Check Out exception and correction action"
          />
          <EssScreen
            file="attendance-correction"
            title="Correction request"
            alt="Attendance correction form preserving the affected date, time and request context"
          />
        </div>
      </section>

      <section className="ess-story ess-requests" id="requests">
        <div className="ess-section-copy ess-copy-pair">
          <div>
            <p className="eyebrow">Leaves and requests</p>
            <h2>Balances, requests and decisions stay connected.</h2>
          </div>
          <p>
            Leave balances answer availability before a form opens. Submitted requests keep dates,
            duration, approver and status together, so Annual Leave from 13–16 September remains
            understandable throughout the approval cycle.
          </p>
        </div>
        <div className="ess-phone-grid ess-phone-grid-two">
          <EssScreen
            file="leaves-overview"
            title="Leave balances"
            alt="Leaves overview showing verified leave balances and request access"
          />
          <EssScreen
            file="leave-pending"
            title="Pending request"
            alt="Annual Leave request for 13 to 16 September 2026 showing pending approval with Nadia Khattab"
          />
        </div>
      </section>

      <section className="ess-story ess-manager" id="manager-experience">
        <div className="ess-section-copy">
          <p className="eyebrow">Manager experience</p>
          <h2>Managers keep their employee context while decisions gain detail.</h2>
          <p>
            The approval view brings the employee, dates and request facts to the decision point.
            Rejection requires a reason, the queue preserves the completed outcome, and Team Leaves
            is composed for a phone rather than compressing a desktop calendar.
          </p>
        </div>
        <div className="ess-phone-grid ess-phone-grid-four">
          <EssScreen
            file="manager-approval-detail"
            title="Approval detail"
            alt="Manager approval detail for Yasmin Fouad Annual Leave from 13 to 16 September 2026"
          />
          <EssScreen
            file="manager-reject"
            title="Reason required"
            alt="Reject request sheet requiring a written reason before the manager can reject Annual Leave"
          />
          <EssScreen
            file="manager-after-decision"
            title="Decision continuity"
            alt="Approvals queue after a manager decision with request states retained"
          />
          <EssScreen
            file="team-leaves"
            title="Team Leaves"
            alt="Mobile Team Leaves view showing team availability and upcoming leave in a scannable list"
          />
        </div>
      </section>

      <section className="ess-story ess-role-awareness" id="role-awareness">
        <div className="ess-section-copy ess-copy-pair">
          <div>
            <p className="eyebrow">Role awareness</p>
            <h2>Notifications reflect each role’s responsibilities.</h2>
          </div>
          <p>
            Employee notifications focus on personal attendance and request progress. Manager
            notifications add approval and team responsibilities without changing the underlying
            navigation or interaction grammar.
          </p>
        </div>
        <div className="ess-phone-grid ess-phone-grid-two">
          <EssScreen
            file="notifications-employee"
            title="Employee notifications"
            alt="Employee notification list with personal attendance and request updates"
          />
          <EssScreen
            file="notifications-manager"
            title="Manager notifications"
            alt="Manager notification list adding approval and team responsibilities to personal updates"
          />
        </div>
      </section>

      <section className="ess-system" id="design-system">
        <div className="ess-section-copy">
          <p className="eyebrow">Design system</p>
          <h2>Reusable states keep operational meaning consistent.</h2>
          <p>
            Across 26 component sets, shared attendance, request and approval patterns use semantic
            status, explicit action language and consistent touch targets across employee and
            manager workflows.
          </p>
        </div>
        <div className="ess-system-media">
          <article>
            <h3>Attendance states carry their own next action.</h3>
            <EvidenceMedia
              src="/screens/dotcare-ess/system-attendance-card.png"
              title="Attendance card states"
              alt="DotCare ESS Attendance Card component states for check in, working, complete, location unavailable and holiday"
              label="REDESIGN"
            />
          </article>
          <article>
            <h3>Approval progress communicates ownership beyond colour.</h3>
            <EvidenceMedia
              src="/screens/dotcare-ess/system-approval-step@3x.png"
              title="Approval step states"
              alt="DotCare ESS Approval Step components showing pending, approved and rejected states"
              label="REDESIGN"
            />
          </article>
        </div>
      </section>

      <section className="ess-reflection">
        <p className="eyebrow">Design outcome</p>
        <h2>Attendance, requests and approvals now share one product model.</h2>
        <p>
          The prototype connects attendance, leave, permissions, requests, notifications and manager
          decisions through one information architecture and one reusable state language. It is a
          high-fidelity redesign prototype; no production or business outcome is claimed.
        </p>
      </section>
    </div>
  );
}
