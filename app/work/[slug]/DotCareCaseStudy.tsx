import EvidenceMedia from "./EvidenceMedia";

const lifecycle = [
  ["Worklist", "work arrives"],
  ["Verification", "clinical decision"],
  ["Safety", "risk resolved"],
  ["Fulfilment", "stock prepared"],
  ["Charging", "payment posted"],
  ["Dispensing", "medicine released"],
  ["History", "provenance retained"],
];

export default function DotCareCaseStudy() {
  return (
    <section className="dotcare-case-study" id="pharmacy-workflow">
      <div className="dotcare-thesis">
        <p className="eyebrow">The product model</p>
        <h2>From three transaction lists to one medication lifecycle.</h2>
        <p>The redesign begins with state, ownership and traceability—not a visual refresh.</p>
        <ol aria-label="Redesigned medication lifecycle">
          {lifecycle.map(([stage, detail], index) => (
            <li key={stage}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{stage}</strong>
              <span>{detail}</span>
            </li>
          ))}
        </ol>
      </div>

      <article className="dotcare-story-block">
        <header>
          <p className="eyebrow">Entry point</p>
          <h3>The queue replaces patient-search-first work.</h3>
          <p>Work arrives ranked by urgency, clinical risk, waiting time and exception state. Search remains available; it no longer defines the shift.</p>
        </header>
        <div className="dotcare-comparison-grid">
          <EvidenceMedia
            src="/screens/dotcare/physician-orders.webp"
            title="Live DotCare physician orders"
            alt="Live DotCare Pharmacy physician orders screen with a persistent patient search rail"
            label="LIVE"
          />
          <EvidenceMedia
            src="/screens/dotcare-redesign/worklist.png"
            fullSrc="/screens/dotcare/worklist@2x.png"
            title="Redesigned Pharmacy Worklist"
            alt="Redesigned DotCare Pharmacy Worklist showing urgency, risk, waiting time and action states"
            label="REDESIGN"
            eager
          />
        </div>
      </article>

      <article className="dotcare-story-block dotcare-feature-block">
        <header>
          <p className="eyebrow">The professional act</p>
          <h3>Verification becomes an explicit clinical state.</h3>
          <p>The pharmacist reviews the full clinical picture, then creates a record with an author, timestamp and signature that can gate what follows.</p>
        </header>
        <EvidenceMedia
          src="/screens/dotcare-redesign/verification.png"
          fullSrc="/screens/dotcare/verification@2x.png"
          title="Medication Verification workspace"
          alt="DotCare medication verification workspace with patient, medication and clinical context"
          label="REDESIGN"
          highDensityInline
        />
        <div className="dotcare-detail-grid">
          <div>
            <h4>Safety means severity, acknowledgement and resolution.</h4>
            <p>Risk is expressed in words and structure—not colour alone—and each alert retains its own decision record.</p>
            <EvidenceMedia
              src="/screens/dotcare-redesign/safety-review.png"
              fullSrc="/screens/dotcare/safety-review@2x.png"
              title="Clinical Safety Review"
              alt="Clinical safety review showing structured alerts and severity"
              label="REDESIGN"
            />
          </div>
          <div>
            <h4>Resolution stays attached to the alert.</h4>
            <p>The prototype keeps the alert, justification and resulting state together instead of clearing a list with one generic reason.</p>
            <EvidenceMedia
              src="/screens/dotcare-redesign/interaction-resolution.png"
              fullSrc="/screens/dotcare/interaction-resolution@2x.png"
              title="Interaction resolution"
              alt="Medication interaction resolution with acknowledgement and justification"
              label="REDESIGN"
            />
          </div>
        </div>
      </article>

      <article className="dotcare-story-block">
        <header>
          <p className="eyebrow">Exceptions</p>
          <h3>An exception is work—not a dead end.</h3>
          <p>Prescriber queries, stock constraints and approvals remain inside the order as problem, context, action and resolution.</p>
        </header>
        <div className="dotcare-detail-grid">
          <EvidenceMedia
            src="/screens/dotcare-redesign/query-prescriber.png"
            fullSrc="/screens/dotcare/query-prescriber@2x.png"
            title="Query prescriber"
            alt="DotCare prescriber query workflow attached to the medication order"
            label="REDESIGN"
          />
          <EvidenceMedia
            src="/screens/dotcare-redesign/out-of-stock.png"
            fullSrc="/screens/dotcare/out-of-stock@2x.png"
            title="Out-of-stock resolution"
            alt="DotCare out-of-stock exception with alternative resolution paths"
            label="REDESIGN"
          />
        </div>
      </article>

      <article className="dotcare-story-block dotcare-state-block">
        <header>
          <p className="eyebrow">Lifecycle separation</p>
          <h3>Verified ≠ Charged ≠ Dispensed.</h3>
          <p>Clinical responsibility, a financial transaction and physical release are three different events owned by different actors.</p>
        </header>
        <div className="dotcare-state-strip" aria-label="Three distinct medication states">
          <div><strong>Verified</strong><span>Clinical approval recorded</span></div>
          <b aria-hidden="true">≠</b>
          <div><strong>Charged</strong><span>Financial posting completed</span></div>
          <b aria-hidden="true">≠</b>
          <div><strong>Dispensed</strong><span>Medication physically released</span></div>
        </div>
        <EvidenceMedia
          src="/screens/dotcare-redesign/charging.png"
          fullSrc="/screens/dotcare/charging@2x.png"
          title="Charging as a distinct state"
          alt="DotCare charging workspace separated from verification and dispensing"
          label="REDESIGN"
          highDensityInline
        />
      </article>

      <article className="dotcare-story-block">
        <header>
          <p className="eyebrow">Controlled release</p>
          <h3>Dispensing is withheld until identity and checks are satisfied.</h3>
          <p>Patient identification, scan verification, the Five Rights and—where required—an independent countersignature control the irreversible action.</p>
        </header>
        <div className="dotcare-comparison-grid redesign-pair">
          <EvidenceMedia
            src="/screens/dotcare-redesign/dispensing.png"
            fullSrc="/screens/dotcare/dispensing@2x.png"
            title="Controlled dispensing"
            alt="Controlled dispensing workflow with identity and scan verification"
            label="REDESIGN"
          />
          <EvidenceMedia
            src="/screens/dotcare-redesign/double-check.png"
            fullSrc="/screens/dotcare/double-check@2x.png"
            title="Independent double-check"
            alt="High-risk medication dispensing after a second clinician countersigns"
            label="REDESIGN"
          />
        </div>
      </article>

      <article className="dotcare-story-block dotcare-provenance-block">
        <header>
          <p className="eyebrow">Clinical provenance</p>
          <h3>History answers who, to whom, from which lot and when.</h3>
          <p>The clinical record and financial ledger become complementary views instead of one billing table carrying a clinical name.</p>
        </header>
        <div className="dotcare-comparison-grid">
          <EvidenceMedia
            src="/screens/dotcare/dispense-history.webp"
            title="Live dispense history"
            alt="Live DotCare dispense history shown primarily as a financial ledger"
            label="LIVE"
          />
          <EvidenceMedia
            src="/screens/dotcare-redesign/medication-history.png"
            fullSrc="/screens/dotcare/medication-history@2x.png"
            title="Redesigned medication history"
            alt="Redesigned clinical medication history separated from the billing ledger"
            label="REDESIGN"
          />
        </div>
        <EvidenceMedia
          src="/screens/dotcare-redesign/dispense-provenance.png"
          fullSrc="/screens/dotcare/dispense-provenance@2x.png"
          title="Dispense record with full provenance"
          alt="Dispense record showing pharmacist, recipient, lot and timestamps"
          label="REDESIGN"
          highDensityInline
        />
      </article>

      <article className="dotcare-story-block dotcare-behaviour-block">
        <header>
          <p className="eyebrow">Interaction model</p>
          <h3>The prototype defines behaviour—not merely screens.</h3>
          <p>Loading, contention, service failure, read-only recovery and role capability states are specified because that is where enterprise workflows break.</p>
        </header>
        <div className="dotcare-behaviour-sequence">
          <EvidenceMedia
            src="/screens/dotcare-redesign/worklist-loading.png"
            fullSrc="/screens/dotcare/worklist-loading@2x.png"
            title="Worklist loading state"
            alt="DotCare Pharmacy Worklist loading state"
            label="REDESIGN"
          />
          <EvidenceMedia
            src="/screens/dotcare-redesign/worklist-read-only.png"
            fullSrc="/screens/dotcare/worklist-read-only@2x.png"
            title="Connection lost — read-only recovery"
            alt="DotCare Pharmacy Worklist in a read-only recovery state after connection loss"
            label="REDESIGN"
          />
          <figure className="prototype-walkthrough">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/screens/dotcare-redesign/worklist.png"
              aria-label="DotCare Pharmacy golden-path prototype walkthrough from Worklist to clinical provenance"
            >
              <source src="/video/dotcare-interaction-walkthrough.mp4" type="video/mp4" />
              Your browser does not support embedded video. <a href="/video/dotcare-interaction-walkthrough.mp4">Open the walkthrough video.</a>
            </video>
            <figcaption>
              <span>Golden-path walkthrough · 50 sec</span>
              <strong>Worklist → verify → resolve → fulfil → charge → dispense → trace.</strong>
              <p>Cursor-guided walkthrough composed from the frozen finished prototype. This is redesign evidence—not deployed-product footage.</p>
            </figcaption>
          </figure>
        </div>
      </article>

      <article className="dotcare-system-block">
        <div>
          <p className="eyebrow">System thinking</p>
          <h3>One interaction-state contract across the workflow.</h3>
          <p>The design system gives selection, disclosure, severity, resolution and focus states a consistent meaning wherever they appear.</p>
        </div>
        <dl>
          <div><dt>Universal</dt><dd>Default · Hover · Pressed · Focus-visible · Disabled</dd></div>
          <div><dt>Selection</dt><dd>Selected only within an exclusive group</dd></div>
          <div><dt>Disclosure</dt><dd>Open and expanded never masquerade as completion</dd></div>
          <div><dt>Clinical</dt><dd>Severity and resolution have distinct state rules</dd></div>
        </dl>
      </article>

      <div className="dotcare-outcomes">
        <p className="eyebrow">Design outcome</p>
        <h3>What changed at the product level.</h3>
        <ul>
          <li><span>Patient search</span><strong>Operational worklist</strong></li>
          <li><span>Implicit medication handling</span><strong>Explicit verification</strong></li>
          <li><span>Dismissible warnings</span><strong>Resolvable safety states</strong></li>
          <li><span>Charge &amp; dispense</span><strong>Separate accountable events</strong></li>
          <li><span>Billing history</span><strong>Clinical provenance + financial ledger</strong></li>
          <li><span>Static screens</span><strong>Specified interaction behaviour</strong></li>
        </ul>
        <blockquote>The redesign did not add a safety layer on top of DotCare Pharmacy. It made the pharmacist’s professional act part of the workflow itself.</blockquote>
      </div>
    </section>
  );
}
