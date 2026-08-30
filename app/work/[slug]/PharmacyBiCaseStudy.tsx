import EvidenceMedia from "./EvidenceMedia";
import HealthAppWalkthrough from "./HealthAppWalkthrough";

export default function PharmacyBiCaseStudy() {
  return (
    <div className="pharmacy-bi-case-study">
      <section className="pharmacy-bi-architecture">
        <div className="case-study-intro">
          <p className="eyebrow">Decision architecture</p>
          <h2>One path from executive signal to the detail behind it.</h2>
          <p>The product changes analytical depth without changing the user’s mental model: orient, compare, prioritise, investigate.</p>
        </div>
        <ol aria-label="Pharmacy BI information architecture">
          <li><span>Overview</span><strong>What is happening?</strong></li>
          <li><span>Operations</span><strong>Which service is shaping it?</strong></li>
          <li><span>Financial</span><strong>How is performance moving?</strong></li>
          <li><span>Inventory risk</span><strong>Where is exposure concentrated?</strong></li>
          <li><span>Item detail</span><strong>Which item requires investigation?</strong></li>
          <li><span>Referral</span><strong>Which specialty or physician explains it?</strong></li>
        </ol>
      </section>

      <HealthAppWalkthrough projectId="pharmacy-bi" />

      <section className="pharmacy-bi-story pharmacy-bi-overview">
        <header>
          <p className="eyebrow">Executive overview</p>
          <h2>A concise performance picture with a clear route into investigation.</h2>
          <p>Revenue, volume, charge per prescription and referral performance share one hierarchy. Needs Attention keeps the next analytical question visible.</p>
        </header>
        <EvidenceMedia
          src="/screens/pharmacy-bi/overview.png"
          title="Pharmacy Overview"
          alt="Pharmacy BI Overview showing executive KPIs, trends, service mix and items needing attention"
          label="PRODUCT"
          eager
        />
      </section>

      <section className="pharmacy-bi-story pharmacy-bi-two-up">
        <header>
          <p className="eyebrow">Operations and finance</p>
          <h2>Different decisions, one analytical language.</h2>
          <p>Operational views compare CIVAS, Inpatient and Clinical performance. Financial analysis combines revenue, cost, gross profit, turnover and trends without breaking the product’s rhythm.</p>
        </header>
        <div className="pharmacy-bi-media-grid">
          <article>
            <h3>Compare services against their targets.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/operational-performance.png"
              title="Operational Performance"
              alt="Operational Performance dashboard comparing CIVAS, Inpatient and Clinical pharmacy services"
              label="PRODUCT"
            />
          </article>
          <article>
            <h3>Inspect the movement behind the headline.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/financial-chart-hover.png?v=20260830-tooltip"
              title="Financial and Trends chart detail"
              alt="Financial and Trends dashboard with a chart tooltip showing monthly performance detail"
              label="PRODUCT"
            />
          </article>
        </div>
      </section>

      <section className="pharmacy-bi-story pharmacy-bi-risk">
        <header>
          <p className="eyebrow">Inventory intelligence</p>
          <h2>Risk becomes a path: exposure → store → item.</h2>
          <p>Expiry, stagnant and slow-moving stock are prioritised first. The item view then supports search, grouping, sorting and expandable detail without losing the risk context.</p>
        </header>
        <div className="pharmacy-bi-media-grid pharmacy-bi-risk-grid">
          <article>
            <h3>Prioritise the exposure.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/inventory-risk.png"
              title="Inventory Risk"
              alt="Inventory Risk dashboard showing expiry, stagnant and slow-moving inventory exposure"
              label="PRODUCT"
            />
          </article>
          <article>
            <h3>Investigate the item.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/inventory-detail.png"
              title="Inventory Detail"
              alt="Inventory Detail table showing item quantities, unit cost, movement and expandable detail"
              label="PRODUCT"
            />
          </article>
        </div>
      </section>

      <section className="pharmacy-bi-story pharmacy-bi-two-up">
        <header>
          <p className="eyebrow">Referral and specialty</p>
          <h2>Move from specialty performance to the physician behind the result.</h2>
          <p>Targets, referral patterns and physician-level detail live in one view, so the comparison can become a focused management question.</p>
        </header>
        <div className="pharmacy-bi-media-grid">
          <article>
            <h3>Compare specialty performance.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/referral-specialty.png"
              title="Referral and Specialty Performance"
              alt="Referral and Specialty Performance dashboard comparing specialty targets and results"
              label="PRODUCT"
            />
          </article>
          <article>
            <h3>Select the physician to inspect.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/referral-physician.png"
              title="Physician performance selection"
              alt="Referral dashboard with a representative physician selected for investigation"
              label="PRODUCT"
            />
          </article>
        </div>
      </section>

      <section className="pharmacy-bi-story pharmacy-bi-access">
        <header>
          <p className="eyebrow">Account and access</p>
          <h2>Enterprise access stays present without taking over the product story.</h2>
          <p>Administrator, Pharmacy Manager and Viewer / Analyst responsibilities are explicit, while profile and appearance controls remain secondary to the analytical work.</p>
        </header>
        <div className="pharmacy-bi-media-grid">
          <article>
            <h3>Personal context and appearance.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/profile-access.png"
              title="Profile and appearance"
              alt="Pharmacy BI profile page showing account context and Light or Dark appearance controls"
              label="PRODUCT"
            />
          </article>
          <article>
            <h3>Roles aligned to responsibility.</h3>
            <EvidenceMedia
              src="/screens/pharmacy-bi/user-management.png"
              title="User management"
              alt="Pharmacy BI user management showing Administrator, Pharmacy Manager and Viewer or Analyst roles"
              label="PRODUCT"
            />
          </article>
        </div>
      </section>

      <section className="pharmacy-bi-story pharmacy-bi-themes">
        <header>
          <p className="eyebrow">One product system</p>
          <h2>Light and Dark themes preserve the same hierarchy, meaning and page context.</h2>
          <p>Navigation, analytics components, tables, statuses, charts and controls share semantic tokens across both working environments.</p>
        </header>
        <div className="pharmacy-bi-theme-pair">
          <EvidenceMedia
            src="/screens/pharmacy-bi/overview.png"
            title="Pharmacy Overview in Light Mode"
            alt="Pharmacy Overview in Light Mode"
            label="PRODUCT"
          />
          <EvidenceMedia
            src="/screens/pharmacy-bi/overview-dark.png"
            title="Pharmacy Overview in Dark Mode"
            alt="Pharmacy Overview in Dark Mode with the same information hierarchy and page context"
            label="PRODUCT"
          />
        </div>
        <blockquote>Pharmacy performance becomes easier to understand, investigate and act on—without turning every question into another disconnected report.</blockquote>
      </section>
    </div>
  );
}
