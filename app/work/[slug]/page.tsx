import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import FullCaseStudy from "./FullCaseStudy";
import ScreenGallery from "./ScreenGallery";
import DotCareCaseStudy from "./DotCareCaseStudy";
import EvidenceMedia from "./EvidenceMedia";
import HealthAppWalkthrough from "./HealthAppWalkthrough";
import PharmacyBiCaseStudy from "./PharmacyBiCaseStudy";
import DaoudCaseStudy from "./DaoudCaseStudy";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — Karim Fakhry`;
  const socialImage = project.screens[0]?.image ?? project.thumbnail;
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      ...(socialImage ? { images: [{ url: socialImage, alt: `${project.title} case study` }] } : { images: [] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      ...(socialImage ? { images: [socialImage] } : { images: [] }),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const isOriginalProduct = project.caseStudyMode === "product";
  const isManagerialSolution = project.caseStudyMode === "managerial";
  const isPharmacyRedesign = project.caseStudyMode === "pharmacy-redesign";
  const isBiProduct = project.caseStudyMode === "bi-product";
  const isCommerceConcept = project.caseStudyMode === "commerce-concept";

  return (
    <main className={`project-page ${project.theme}`}>
      <header className="project-header">
        <Link className="wordmark" href="/" aria-label="Karim Fakhry portfolio home">
          KF<span>.</span>
        </Link>
        <nav className="project-header-nav" aria-label="Project navigation">
          <a className="case-study-header-link" href="#executive-summary">Case study ↓</a>
          <Link className="back-link" href="/#work">← All projects</Link>
        </nav>
      </header>

      <section className="project-hero">
        <div className="project-hero-title">
          <p className="eyebrow">{project.number} · {project.type} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-summary-lead">{project.summary}</p>
          <div className="project-actions">
            <a className="project-primary-action" href="#executive-summary">
              Read the case study <span aria-hidden="true">↓</span>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel ?? "Open live project"} ↗</a>
            )}
          </div>
        </div>
        <div className="project-facts">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Scope</span><strong>{project.scope}</strong></div>
          <div><span>Platform</span><strong>{project.platform}</strong></div>
          <div><span>Status</span><strong>{project.status}</strong></div>
        </div>
      </section>

      <section className="executive-section" id="executive-summary">
        <div className="case-study-intro">
          <p className="eyebrow">Executive summary</p>
          <h2>{isOriginalProduct ? "The product in brief." : isManagerialSolution ? "The managerial solution in brief." : isPharmacyRedesign ? "The Pharmacy redesign in brief." : isBiProduct ? "The Pharmacy BI product in brief." : isCommerceConcept ? "The ecommerce concept in brief." : "The project in three points."}</h2>
          <p>{project.method}</p>
        </div>
        <div className="executive-grid">
          <article><span>01</span><h3>Problem</h3><p>{project.executiveSummary.problem}</p></article>
          <article><span>02</span><h3>Approach</h3><p>{project.executiveSummary.approach}</p></article>
          <article><span>03</span><h3>{isManagerialSolution ? "Managerial outcome" : isBiProduct ? "Product system" : isCommerceConcept ? "Concept system" : "Design outcome"}</h3><p>{project.executiveSummary.result}</p></article>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="case-study-intro evidence-intro">
          <p className="eyebrow">{isOriginalProduct ? "Product evidence" : isManagerialSolution ? "How the solution helps" : isPharmacyRedesign ? "Evidence and scope" : isBiProduct ? "Product depth" : isCommerceConcept ? "Concept scope" : "What I found"}</p>
          <h2>{isOriginalProduct ? "What the work had to handle." : isManagerialSolution ? "A clearer way to monitor and improve performance." : isPharmacyRedesign ? "A real product problem. A prototype response." : isBiProduct ? "A connected system for pharmacy decisions." : isCommerceConcept ? "A fashion experience shaped as one system." : "The signals that shaped the redesign."}</h2>
          <p>{isOriginalProduct ? "The most important operational challenges visible in the OPD and Pharmacy work." : isManagerialSolution ? "The management moments the product brings into one connected workflow." : isPharmacyRedesign ? "Live product evidence remains distinct from redesign artefacts, and no deployment outcomes are claimed." : isBiProduct ? "The system’s analytical range, access model and theme architecture—without turning demo metrics into business claims." : isCommerceConcept ? "The design dimensions represented in the portfolio concept, without claiming commissioned or production outcomes." : "Key facts from the live product, its content and the working team process."}</p>
        </div>
        <div className="evidence-grid">
          {project.evidence.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="user-context">
          <p className="eyebrow">{isOriginalProduct ? "People doing the work" : isManagerialSolution ? "Who the solution supports" : isPharmacyRedesign ? "People in the workflow" : isBiProduct ? "Decision makers" : isCommerceConcept ? "Shopping contexts" : "Key journeys"}</p>
          <ul>{project.primaryUsers.map((user) => <li key={user}>{user}</li>)}</ul>
        </div>
      </section>

      {project.journey && (
        <section className="journey-section" id="journey-map">
          <div className="case-study-intro">
            <p className="eyebrow">Journey comparison</p>
            <h2>One visit, fewer disconnected moments.</h2>
            <p>A screen-by-screen comparison of the existing flow and the redesign. No assumed tap counts or post-launch claims.</p>
          </div>
          <div className="journey-map" aria-label="Existing and redesigned patient journey">
            <div className="journey-map-head"><span>Stage</span><span>Existing app</span><span>Redesign</span></div>
            {project.journey.map((step, index) => (
              <article key={step.stage}>
                <div className="journey-stage"><small>{String(index + 1).padStart(2, "0")}</small><strong>{step.stage}</strong></div>
                <p className="journey-before">{step.before}</p>
                <p className="journey-after">{step.after}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {!isPharmacyRedesign && !isBiProduct && (
        <section className="decision-section" id="decisions">
          <div className="case-study-intro">
            <p className="eyebrow">Key product decisions</p>
            <h2>{isOriginalProduct ? "How we made complex hospital work easier to follow." : isManagerialSolution ? "How the product supports better performance management." : isCommerceConcept ? "The decisions that shape the experience." : "The decisions that changed the experience."}</h2>
          </div>
          <div className="decision-list">
            {project.chapters.map((chapter) => (
              <article key={chapter.number}>
                <span>{chapter.number}</span>
                <h3>{chapter.title}</h3>
                <div><small>{isOriginalProduct ? "Operational need" : isManagerialSolution ? "Managerial challenge" : isCommerceConcept ? "Design challenge" : "Before"}</small><p>{chapter.problem}</p></div>
                <div><small>{isOriginalProduct ? "Design decision" : isManagerialSolution ? "Product response" : isCommerceConcept ? "Design decision" : "Design response"}</small><p>{chapter.response}</p></div>
              </article>
            ))}
          </div>
        </section>
      )}

      {(["academy", "health-web", "health-app", "kpi-hub"] as const).includes(project.id as "academy" | "health-web" | "health-app" | "kpi-hub") && (
        <HealthAppWalkthrough projectId={project.id as "academy" | "health-web" | "health-app" | "kpi-hub"} />
      )}

      {isPharmacyRedesign && <DotCareCaseStudy />}

      {isBiProduct && <PharmacyBiCaseStudy />}

      {isCommerceConcept && <DaoudCaseStudy />}

      {project.visual === "kpi" ? (
        <section className="kpi-showcase" id="product">
          <div className="case-study-intro">
            <p className="eyebrow">The role-based product</p>
            <h2>One performance process. Two clear points of view.</h2>
            <p>The manager gets a workspace for action and follow-up. Each employee gets a private report they can understand and use.</p>
          </div>
          <div className="kpi-role-grid kpi-evidence-grid">
            <article className="kpi-role-card kpi-role-featured">
              <div className="kpi-role-copy"><p className="eyebrow">Manager view</p><h3>Monitor the team and see where attention is needed.</h3><p>The manager overview connects overall performance, employee status and the active sprint so a problem can be identified before opening the individual report.</p></div>
              <EvidenceMedia src="/screens/kpi-performance/manager-overview.png" fullSrc="/screens/kpi-performance/manager-overview@2x.png" title="Manager overview" alt="KPI Performance Hub Manager overview showing team performance, sprint status and employees needing attention" label="PRODUCT" highDensityInline eager />
            </article>
            <article className="kpi-role-card kpi-role-featured">
              <div className="kpi-role-copy"><p className="eyebrow">Employee view</p><h3>Understand personal performance without exposing the team.</h3><p>Each employee sees their own KPI breakdown, latest sprint, trend and team-level context—enough for self-awareness and a useful one-to-one.</p></div>
              <EvidenceMedia src="/screens/kpi-performance/employee-overview.png" fullSrc="/screens/kpi-performance/employee-overview@2x.png" title="Employee overview" alt="KPI Performance Hub Employee overview showing private performance and KPI context" label="PRODUCT" highDensityInline />
            </article>
            <article className="kpi-role-card">
              <div className="kpi-role-copy"><p className="eyebrow">Manager drill-down</p><h3>Move from a team signal to the individual detail.</h3><p>The report keeps KPI breakdown, previous-sprint context and employee status together for managerial follow-up.</p></div>
              <EvidenceMedia src="/screens/kpi-performance/manager-employee-report.png" fullSrc="/screens/kpi-performance/manager-employee-report@2x.png" title="Manager employee report" alt="Manager view of an individual employee KPI report" label="PRODUCT" />
            </article>
            <article className="kpi-role-card">
              <div className="kpi-role-copy"><p className="eyebrow">Employee history</p><h3>See performance across reporting periods.</h3><p>Sprint history gives the employee a consistent view of change over time without turning the portfolio story into dashboard vanity metrics.</p></div>
              <EvidenceMedia src="/screens/kpi-performance/employee-sprints.png" fullSrc="/screens/kpi-performance/employee-sprints@2x.png" title="Employee sprint history" alt="Employee view of periodic KPI reports and sprint history" label="PRODUCT" />
            </article>
          </div>
        </section>
      ) : !isPharmacyRedesign && !isBiProduct && !isCommerceConcept ? (
        <>
          <section className="screen-section" id="redesign-screens">
            <div className="screen-heading">
              <p className="eyebrow">{isOriginalProduct ? "Selected product screens" : "Selected redesign screens"}</p>
              <h2>{isOriginalProduct ? "The strongest workflows from DotCare." : "The product, not just the process."}</h2>
              <p>{isOriginalProduct ? "OPD and Pharmacy screens showing the design decisions in context. Open any screen for the full-resolution view." : "Open any screen to inspect the responsive product work."}</p>
            </div>
            <ScreenGallery
              projectTitle={project.title}
              screens={project.screens}
              isApp={project.id === "health-app"}
              isProduct={isOriginalProduct}
            />
          </section>

          {project.image && (
            <section className="complete-section" id="original-presentation">
              <div>
                <p className="eyebrow">Original editorial presentation</p>
                <h2>The current case study, preserved.</h2>
              </div>
              <p>
                This long-form visual remains available for comparison and rollback. Its key narrative now also appears above as accessible web content.
              </p>
              <FullCaseStudy image={project.image} title={project.title} />
            </section>
          )}
        </>
      ) : null}

      {isPharmacyRedesign && project.image && (
        <section className="complete-section" id="source-presentation">
          <div>
            <p className="eyebrow">Source presentation</p>
            <h2>The complete 15-scene evidence set.</h2>
          </div>
          <p>The web case study above adapts its strongest arguments for browser reading. The original long-form artefact remains available at full resolution.</p>
          <FullCaseStudy image={project.image} title={project.title} />
        </section>
      )}

      <a className="next-project" href={`/work/${nextProject.slug}`}>
        <span>Next project</span>
        <strong>{nextProject.title}</strong>
        <span aria-hidden="true">→</span>
      </a>

      <footer>
        <div>
          <p className="footer-mark">KF<span>.</span></p>
          <p>Karim Fakhry · Product Design Manager</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/karimfakhry/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:kia2001@gmail.com">Email ↗</a>
          <a href="/resume/Karim-Fakhry-Resume-2026.pdf" target="_blank">Résumé ↗</a>
          <Link href="/">Portfolio home ↑</Link>
        </div>
      </footer>
    </main>
  );
}
