import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import FullCaseStudy from "./FullCaseStudy";
import ScreenGallery from "./ScreenGallery";

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
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      images: [{ url: project.screens[0].image, alt: `${project.title} redesign` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [project.screens[0].image],
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
        <a className="wordmark" href="/" aria-label="Karim Fakhry portfolio home">
          KF<span>.</span>
        </a>
        <nav className="project-header-nav" aria-label="Project navigation">
          <a className="case-study-header-link" href="#complete-case-study">Complete case study ↓</a>
          <a className="back-link" href="/#work">← All projects</a>
        </nav>
      </header>

      <section className="project-hero">
        <div className="project-hero-title">
          <p className="eyebrow">{project.number} · {project.type} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-summary-lead">{project.summary}</p>
          <div className="project-actions">
            <a className="project-primary-action" href="#complete-case-study">
              View complete case study <span aria-hidden="true">↓</span>
            </a>
            <a href="#redesign-screens">Browse redesign screens</a>
          </div>
        </div>
        <div className="project-facts">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Scope</span><strong>{project.scope}</strong></div>
          <div><span>Platform</span><strong>{project.platform}</strong></div>
        </div>
      </section>

      <section className="project-story">
        <div>
          <p className="eyebrow">The challenge</p>
          <p>{project.challenge}</p>
        </div>
        <div>
          <p className="eyebrow">The outcome</p>
          <p>{project.outcome}</p>
        </div>
      </section>

      <section className="complete-section" id="complete-case-study">
        <div>
          <p className="eyebrow">Complete case study</p>
          <h2>The full story, from evidence to outcome.</h2>
        </div>
        <p>
          Explore the complete editorial case study documenting the research,
          design decisions and responsive system behind this redesign.
        </p>
        <FullCaseStudy image={project.image} title={project.title} />
      </section>

      <section className="screen-section" id="redesign-screens">
        <div className="screen-heading">
          <p className="eyebrow">Selected redesign screens</p>
          <h2>The product, not just the process.</h2>
          <p>Click any screen to enlarge it here without leaving the portfolio.</p>
        </div>
        <ScreenGallery
          projectTitle={project.title}
          screens={project.screens}
          isApp={project.id === "health-app"}
        />
      </section>

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
          <a href="/">Portfolio home ↑</a>
        </div>
      </footer>
    </main>
  );
}
