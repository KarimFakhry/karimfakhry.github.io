export function AcademyProjectPreview() {
  return (
    <div className="editorial-project-preview academy-editorial" aria-hidden="true">
      <div className="editorial-preview-copy">
        <i>Education platform · 2026</i>
        <b>From browsing<br />to enrolment.</b>
      </div>
      <span className="editorial-orbit academy-orbit" />
      <span className="editorial-browser academy-browser-main">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/academy/course-listing.webp" alt="" />
      </span>
      <span className="editorial-browser academy-browser-back">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/academy/home-desktop.webp" alt="" />
      </span>
      <span className="editorial-mobile academy-mobile">
        <img src="/screens/academy/course-detail-mobile.webp" alt="" />
      </span>
      <span className="editorial-flow"><i>Browse</i><em>→</em><i>Compare</i><em>→</em><i>Enrol</i></span>
    </div>
  );
}

export function HealthWebsiteProjectPreview() {
  return (
    <div className="editorial-project-preview health-web-editorial" aria-hidden="true">
      <div className="editorial-preview-copy">
        <i>Healthcare ecosystem · 2026</i>
        <b>Find care.<br />Book with clarity.</b>
      </div>
      <span className="health-web-ring health-web-ring-one" />
      <span className="health-web-ring health-web-ring-two" />
      <span className="editorial-browser health-browser-main">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/health-website/doctors-listing.webp" alt="" />
      </span>
      <span className="editorial-browser health-browser-back">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/health-website/homepage.webp" alt="" />
      </span>
      <span className="editorial-mobile health-web-mobile">
        <img src="/screens/health-website/booking-confirmation-mobile.webp" alt="" />
      </span>
      <span className="editorial-flow"><i>Discover</i><em>→</em><i>Choose</i><em>→</em><i>Book</i></span>
    </div>
  );
}

export function KpiEditorialPreview() {
  return (
    <div className="editorial-project-preview kpi-editorial" aria-hidden="true">
      <div className="editorial-preview-copy">
        <i>Performance management product · 2026</i>
        <b>Performance,<br />made visible.</b>
      </div>
      <div className="kpi-editorial-metrics">
        <span><b>Manager</b><i>Monitor the team</i></span>
        <span><b>Employee</b><i>Private report</i></span>
      </div>
      <span className="kpi-grid-lines" />
      <span className="editorial-browser kpi-browser-manager">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/kpi-performance/manager-overview.png" alt="" />
      </span>
      <span className="editorial-browser kpi-browser-employee">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/kpi-performance/employee-overview.png" alt="" />
      </span>
      <span className="editorial-flow"><i>Daily input</i><em>→</em><i>Sprint review</i><em>→</em><i>Private report</i></span>
    </div>
  );
}

export function DotCareProjectPreview() {
  return (
    <div className="editorial-project-preview dotcare-editorial" aria-hidden="true">
      <div className="editorial-preview-copy">
        <i>Enterprise Pharmacy workflow · Redesign prototype</i>
        <b>Verification<br />becomes a state.</b>
      </div>
      <span className="dotcare-grid" />
      <span className="editorial-browser dotcare-browser-back">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/dotcare-redesign/verification.png" alt="" />
      </span>
      <span className="editorial-browser dotcare-browser-main">
        <span className="browser-chrome"><i /><i /><i /></span>
        <img src="/screens/dotcare-redesign/worklist.png" alt="" />
      </span>
      <span className="dotcare-module-mark">LIVE <i>→</i> REDESIGN</span>
      <span className="editorial-flow"><i>Worklist</i><em>→</em><i>Verify</i><em>→</em><i>Dispense</i></span>
    </div>
  );
}
