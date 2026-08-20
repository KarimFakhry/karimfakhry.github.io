export default function KpiProjectPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`kpi-preview${compact ? " compact" : ""}`} aria-label="KPI Performance Hub interface preview">
      <div className="kpi-preview-bar">
        <span className="kpi-preview-brand">KPI Hub</span>
        <span>Sprint 167</span>
      </div>
      <div className="kpi-preview-body">
        <aside aria-hidden="true">
          <span className="active">Overview</span>
          <span>Daily entry</span>
          <span>Employees</span>
          <span>Sprints</span>
        </aside>
        <div className="kpi-preview-main">
          <div className="kpi-preview-title">
            <div>
              <small>Team performance</small>
              <strong>Sprint overview</strong>
            </div>
            <span>Finalised</span>
          </div>
          <div className="kpi-score-row">
            <div><small>Team score</small><strong>87.4</strong><span>↑ 2.8</span></div>
            <div><small>Daily inputs</small><strong>60</strong><span>Complete</span></div>
            <div><small>KPIs</small><strong>10</strong><span>Tracked</span></div>
          </div>
          <div className="kpi-chart" aria-hidden="true">
            <div className="kpi-chart-labels"><span>Performance trend</span><span>6 sprints</span></div>
            <svg viewBox="0 0 520 118" role="img" aria-label="Upward performance trend across six sprints">
              <path className="grid" d="M0 20H520M0 59H520M0 98H520" />
              <path className="area" d="M0 94 L104 80 L208 84 L312 55 L416 62 L520 29 L520 118 L0 118 Z" />
              <path className="line" d="M0 94 L104 80 L208 84 L312 55 L416 62 L520 29" />
              <g className="dots"><circle cx="0" cy="94" r="4"/><circle cx="104" cy="80" r="4"/><circle cx="208" cy="84" r="4"/><circle cx="312" cy="55" r="4"/><circle cx="416" cy="62" r="4"/><circle cx="520" cy="29" r="4"/></g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
