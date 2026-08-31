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

      <section className="pharmacy-bi-story pharmacy-bi-responsive">
        <header>
          <p className="eyebrow">Responsive decision system</p>
          <h2>One decision model, three workspaces.</h2>
          <p>The questions stay connected as the interface changes shape. Desktop carries density, Tablet protects analytical depth, and Mobile turns wide tables and hover-dependent detail into touch-first disclosure.</p>
        </header>

        <div className="pharmacy-bi-responsive-block">
          <div className="pharmacy-bi-responsive-block-copy">
            <h3>The overview keeps its hierarchy—not its layout.</h3>
            <p>Executive signal, change, attention and drill-down remain in the same order while navigation, filtering and KPI density adapt to the available workspace.</p>
          </div>
          <div className="pharmacy-bi-breakpoint-stage" aria-label="Pharmacy Overview across Desktop, Tablet and Mobile">
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-desktop">
              <EvidenceMedia
                src="/screens/pharmacy-bi/overview.png"
                title="Pharmacy Overview on Desktop"
                alt="Desktop Pharmacy Overview with labelled sidebar, dense KPI grid and analytical canvas"
                label="PRODUCT"
              />
              <figcaption><strong>Desktop</strong><span>1440 × 900</span></figcaption>
            </figure>
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-tablet">
              <EvidenceMedia
                src="/screens/pharmacy-bi/overview-tablet-light.png"
                title="Pharmacy Overview on Tablet"
                alt="Tablet Pharmacy Overview with icon rail, two-row controls and two-column KPI layout"
                label="PRODUCT"
              />
              <figcaption><strong>Tablet</strong><span>768 × 1024</span></figcaption>
            </figure>
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-mobile">
              <EvidenceMedia
                src="/screens/pharmacy-bi/overview-mobile-light.png"
                title="Pharmacy Overview on Mobile"
                alt="Mobile Pharmacy Overview with app bar, compact metrics and vertically prioritised attention items"
                label="PRODUCT"
              />
              <figcaption><strong>Mobile</strong><span>390 × 844</span></figcaption>
            </figure>
          </div>

          <dl className="pharmacy-bi-breakpoint-notes">
            <div>
              <dt>Desktop</dt>
              <dd>A 240px labelled sidebar, dense analytical canvas, full tables and pointer detail for focused investigation.</dd>
            </div>
            <div>
              <dt>Tablet</dt>
              <dd>A 72px icon rail, two-row header and filters, two-column KPIs, tap-accessible charts and local table scrolling.</dd>
            </div>
            <div>
              <dt>Mobile</dt>
              <dd>An App Bar and drawer, bottom-sheet filters, compact metric rows, card-based tables and progressive disclosure.</dd>
            </div>
          </dl>
        </div>

        <div className="pharmacy-bi-responsive-block pharmacy-bi-responsive-inventory">
          <div className="pharmacy-bi-responsive-block-copy">
            <h3>The inventory evidence changes form, not meaning.</h3>
            <p>The desktop table exposes the full field set. Tablet keeps that native table inside a local horizontal scroller. Mobile recomposes each item as a card, with the same risk, quantity, cost and movement data before revealing batch, value at risk, aging and category.</p>
          </div>
          <div className="pharmacy-bi-breakpoint-stage pharmacy-bi-breakpoint-stage-inventory" aria-label="Inventory Detail across Desktop, Tablet and Mobile">
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-desktop">
              <EvidenceMedia
                src="/screens/pharmacy-bi/inventory-detail.png"
                title="Inventory Detail table on Desktop"
                alt="Desktop Inventory Detail showing grouped item rows and expanded batch detail"
                label="PRODUCT"
              />
              <figcaption><strong>Full table</strong><span>Desktop</span></figcaption>
            </figure>
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-tablet">
              <EvidenceMedia
                src="/screens/pharmacy-bi/inventory-detail-tablet-light.png"
                title="Inventory Detail table on Tablet"
                alt="Tablet Inventory Detail preserving a native-width table inside a local horizontal scroller"
                label="PRODUCT"
              />
              <figcaption><strong>Local table scroll</strong><span>Tablet</span></figcaption>
            </figure>
            <figure className="pharmacy-bi-device-frame pharmacy-bi-device-mobile">
              <EvidenceMedia
                src="/screens/pharmacy-bi/inventory-detail-mobile-light.png"
                title="Inventory Detail card on Mobile"
                alt="Mobile Inventory Detail with an expanded item card showing expiry, quantity, unit cost, movement, batch and value at risk"
                label="PRODUCT"
              />
              <figcaption><strong>Card + details</strong><span>Mobile</span></figcaption>
            </figure>
          </div>
        </div>

        <div className="pharmacy-bi-responsive-support">
          <article>
            <div>
              <h3>Touch changes the interaction model.</h3>
              <p>Primary navigation moves into a drawer, filters into a bottom sheet, and chart detail becomes tap-accessible rather than hover-only.</p>
            </div>
            <figure className="pharmacy-bi-device-frame pharmacy-bi-support-mobile">
              <EvidenceMedia
                src="/screens/pharmacy-bi/navigation-mobile-light.png"
                title="Mobile navigation drawer"
                alt="Mobile Pharmacy BI navigation drawer with analytics destinations, user context and appearance control"
                label="PRODUCT"
              />
              <figcaption><strong>Menu open</strong><span>Touch navigation</span></figcaption>
            </figure>
          </article>
          <article>
            <div>
              <h3>Theme parity follows the responsive system.</h3>
              <p>Light and Dark preserve hierarchy, state meaning and page context at every breakpoint rather than behaving as separate products.</p>
            </div>
            <div className="pharmacy-bi-dark-responsive-pair">
              <figure className="pharmacy-bi-device-frame pharmacy-bi-support-tablet">
                <EvidenceMedia
                  src="/screens/pharmacy-bi/overview-tablet-dark.png"
                  title="Dark Pharmacy Overview on Tablet"
                  alt="Dark Tablet Pharmacy Overview with the same responsive hierarchy and analytical context"
                  label="PRODUCT"
                />
                <figcaption><strong>Tablet</strong><span>Dark</span></figcaption>
              </figure>
              <figure className="pharmacy-bi-device-frame pharmacy-bi-support-mobile">
                <EvidenceMedia
                  src="/screens/pharmacy-bi/overview-mobile-dark.png"
                  title="Dark Pharmacy Overview on Mobile"
                  alt="Dark Mobile Pharmacy Overview preserving the responsive KPI and attention hierarchy"
                  label="PRODUCT"
                />
                <figcaption><strong>Mobile</strong><span>Dark</span></figcaption>
              </figure>
            </div>
          </article>
        </div>
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
