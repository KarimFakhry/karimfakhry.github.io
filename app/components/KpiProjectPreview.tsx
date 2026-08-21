type KpiView = "manager" | "daily" | "review" | "employee";

const viewCopy: Record<KpiView, { role: string; eyebrow: string; title: string; state: string }> = {
  manager: { role: "Manager workspace", eyebrow: "Team performance", title: "Manager overview", state: "Sprint 168" },
  daily: { role: "Manager workspace", eyebrow: "Capture while it is fresh", title: "Daily input", state: "Current sprint" },
  review: { role: "Manager workspace", eyebrow: "Close the cycle", title: "Sprint review", state: "Ready to review" },
  employee: { role: "Employee workspace", eyebrow: "Your performance", title: "My report", state: "Private" },
};

function ManagerView() {
  return <>
    <div className="kpi-status-grid">
      <article><small>Daily signals</small><strong>Up to date</strong><span>Capture attendance and delivery as work happens.</span></article>
      <article><small>Sprint review</small><strong>In progress</strong><span>Bring quality and collaboration into the closing review.</span></article>
      <article><small>Team reports</small><strong>Available</strong><span>Open the right employee report without leaving the cycle.</span></article>
    </div>
    <div className="kpi-flow-panel">
      <div className="kpi-panel-heading"><span>Management loop</span><span>One shared workflow</span></div>
      <ol>
        <li><b>01</b><span><strong>Capture</strong><small>Record the daily signals</small></span></li>
        <li><b>02</b><span><strong>Review</strong><small>Evaluate with sprint context</small></span></li>
        <li><b>03</b><span><strong>Discuss</strong><small>Use the report in one-to-ones</small></span></li>
      </ol>
    </div>
  </>;
}

function DailyView() {
  return <div className="kpi-entry-panel">
    <div className="kpi-panel-heading"><span>Today&apos;s team input</span><span>Saved to Sprint 168</span></div>
    <div className="kpi-entry-list">
      <article><div><strong>Attendance</strong><small>Record the day without waiting for sprint close.</small></div><span className="kpi-state complete">Complete</span></article>
      <article><div><strong>Delivery signal</strong><small>Add the work signal while the context is still clear.</small></div><span className="kpi-state">Review</span></article>
      <article><div><strong>Manager note</strong><small>Keep the reason beside the input, not in a separate document.</small></div><span className="kpi-state quiet">Optional</span></article>
    </div>
    <div className="kpi-entry-action"><span>Inputs stay editable until the sprint is closed.</span><b>Save daily input</b></div>
  </div>;
}

function ReviewView() {
  return <div className="kpi-review-panel">
    <div className="kpi-panel-heading"><span>End-of-sprint review</span><span>Manager only</span></div>
    <div className="kpi-review-list">
      <article><div><small>Delivery</small><strong>Review the completed work</strong></div><span>Open section →</span></article>
      <article><div><small>Quality</small><strong>Add the sprint-level assessment</strong></div><span>Open section →</span></article>
      <article><div><small>Collaboration</small><strong>Evaluate with the full cycle in view</strong></div><span>Open section →</span></article>
    </div>
    <p>Daily evidence is already in place, so sprint close becomes a review—not a reconstruction exercise.</p>
  </div>;
}

function EmployeeView() {
  return <>
    <div className="kpi-private-note"><b>Private employee view</b><span>You see your own report and history. Your manager sees the team workspace.</span></div>
    <div className="kpi-report-grid">
      <article><small>Delivery</small><strong>Current sprint</strong><span>View the breakdown and manager context.</span></article>
      <article><small>Quality</small><strong>Previous comparison</strong><span>Understand what changed between cycles.</span></article>
      <article><small>Collaboration</small><strong>Discussion context</strong><span>Bring a clear view into the next one-to-one.</span></article>
    </div>
    <div className="kpi-history-row"><span><small>Performance history</small><strong>Previous sprint reports remain in one place</strong></span><b>View history →</b></div>
  </>;
}

export default function KpiProjectPreview({ compact = false, view = "manager" }: { compact?: boolean; view?: KpiView }) {
  const copy = viewCopy[view];
  const isEmployee = view === "employee";
  const active = view === "daily" ? "Daily input" : view === "review" ? "Sprint review" : view === "employee" ? "My report" : "Overview";
  const nav = isEmployee ? ["My report", "Sprint history", "How KPIs work"] : ["Overview", "Daily input", "Sprint review", "Team reports"];

  return (
    <div className={`kpi-preview kpi-view-${view}${compact ? " compact" : ""}`} aria-label={`${copy.role}: ${copy.title}`}>
      <div className="kpi-preview-bar">
        <span className="kpi-preview-brand"><i aria-hidden="true">K</i> Performance Hub</span>
        <span className="kpi-preview-user">{copy.role}</span>
      </div>
      <div className="kpi-preview-body">
        <aside aria-hidden="true">
          <small>{isEmployee ? "Personal" : "Manage"}</small>
          {nav.map((item) => <span className={item === active ? "active" : ""} key={item}>{item}</span>)}
          <small>Account</small>
          <span>{isEmployee ? "Privacy & access" : "KPI settings"}</span>
        </aside>
        <div className="kpi-preview-main">
          <div className="kpi-preview-title">
            <div><small>{copy.eyebrow}</small><strong>{copy.title}</strong></div>
            <span>{copy.state}</span>
          </div>
          {view === "manager" && <ManagerView />}
          {view === "daily" && <DailyView />}
          {view === "review" && <ReviewView />}
          {view === "employee" && <EmployeeView />}
        </div>
      </div>
    </div>
  );
}
