import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import FullCaseStudy from "./FullCaseStudy";
import ScreenGallery from "./ScreenGallery";
import KpiProjectPreview from "../../components/KpiProjectPreview";

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
              Read executive summary <span aria-hidden="true">↓</span>
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
          <h2>Problem, approach and result—in two minutes.</h2>
          <p>{project.method}</p>
        </div>
        <div className="executive-grid">
          <article><span>01</span><h3>Problem</h3><p>{project.executiveSummary.problem}</p></article>
          <article><span>02</span><h3>Approach</h3><p>{project.executiveSummary.approach}</p></article>
          <article><span>03</span><h3>Result</h3><p>{project.executiveSummary.result}</p></article>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="case-study-intro evidence-intro">
          <p className="eyebrow">Evidence from the project</p>
          <h2>Observed facts, not invented research.</h2>
          <p>These findings come from the source product, screen inventory, operating model or implemented system.</p>
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
          <p className="eyebrow">Primary decision contexts</p>
          <ul>{project.primaryUsers.map((user) => <li key={user}>{user}</li>)}</ul>
        </div>
      </section>

      <section className="decision-section" id="decisions">
        <div className="case-study-intro">
          <p className="eyebrow">Key product decisions</p>
          <h2>How the evidence changed the experience.</h2>
        </div>
        <div className="decision-list">
          {project.chapters.map((chapter) => (
            <article key={chapter.number}>
              <span>{chapter.number}</span>
              <h3>{chapter.title}</h3>
              <div><small>Observed problem</small><p>{chapter.problem}</p></div>
              <div><small>Design response</small><p>{chapter.response}</p></div>
            </article>
          ))}
        </div>
      </section>

      {project.visual === "kpi" ? (
        <section className="kpi-showcase" id="product">
          <div className="case-study-intro">
            <p className="eyebrow">The operational product</p>
            <h2>Designed to be used, not only presented.</h2>
            <p>The interface separates quick daily work from deeper sprint review, while role-based access protects employee reports.</p>
          </div>
          <KpiProjectPreview />
          <a className="showcase-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open the live KPI Performance Hub <span>↗</span></a>
        </section>
      ) : (
        <>
          <section className="screen-section" id="redesign-screens">
            <div className="screen-heading">
              <p className="eyebrow">Selected redesign screens</p>
              <h2>The product, not just the process.</h2>
              <p>Open any screen to inspect the responsive product work.</p>
            </div>
            <ScreenGallery
              projectTitle={project.title}
              screens={project.screens}
              isApp={project.id === "health-app"}
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
          <a href="mailto:kja2001@gmail.com">Email ↗</a>
          <a href="/resume/Karim-Fakhry-Resume-2026.pdf" target="_blank">Résumé ↗</a>
          <Link href="/">Portfolio home ↑</Link>
        </div>
      </footer>
    </main>
  );
}
