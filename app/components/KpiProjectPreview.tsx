export default function KpiProjectPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`kpi-preview${compact ? " compact" : ""}`} aria-label="KPI Performance Hub interface preview">
      <div className="kpi-preview-bar">
        <span className="kpi-preview-brand"><i aria-hidden="true">K</i> Performance Hub</span>
        <span className="kpi-preview-user">Manager workspace</span>
      </div>
      <div className="kpi-preview-body">
        <aside aria-hidden="true">
          <small>Workspace</small>
          <span className="active">Manager overview</span>
          <span>Daily inputs</span>
          <span>Team reports</span>
          <span>Sprint archive</span>
          <small>System</small>
          <span>Employees</span>
          <span>KPI settings</span>
        </aside>
        <div className="kpi-preview-main">
          <div className="kpi-preview-title">
            <div>
              <small>Current cycle</small>
              <strong>Sprint 167</strong>
            </div>
            <span>Finalised</span>
          </div>
          <div className="kpi-score-row">
            <div><small>Daily inputs</small><strong>60</strong><span>Complete</span></div>
            <div><small>KPI model</small><strong>10</strong><span>Retained</span></div>
            <div><small>Imported history</small><strong>52</strong><span>Sprints</span></div>
          </div>
          <div className="kpi-workflow">
            <div className="kpi-workflow-heading"><span>One connected workflow</span><span>Sprint 168 · In progress</span></div>
            <ol>
              <li><b>01</b><span><strong>Daily input</strong><small>Attendance and delivery signals</small></span></li>
              <li><b>02</b><span><strong>Sprint review</strong><small>Quality, collaboration and delivery</small></span></li>
              <li><b>03</b><span><strong>Private report</strong><small>Each employee sees their own history</small></span></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
