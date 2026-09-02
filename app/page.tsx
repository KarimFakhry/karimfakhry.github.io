import { projects } from "./data/projects";
import HealthAppProjectPreview from "./components/HealthAppProjectPreview";
import {
  AcademyProjectPreview,
  DaoudProjectPreview,
  DotCareProjectPreview,
  HealthWebsiteProjectPreview,
  KpiEditorialPreview,
  PharmacyBiProjectPreview,
} from "./components/EditorialProjectPreviews";
import LegacyWorkArchive from "./components/LegacyWorkArchive";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Karim Fakhry, home">
          KF<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="mailto:kia2001@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Karim Fakhry · Product Design Manager</p>
            <h1>
              I design <em>clarity</em> for complex digital products.
            </h1>
            <p className="hero-intro">
              I lead a 13-person design team across healthcare and education,
              connecting product strategy, systems and craft to turn complex
              services into coherent experiences.
            </p>
            <div className="hero-actions">
              <a href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a href="/resume/Karim-Fakhry-Resume-2026.pdf" target="_blank">Résumé ↗</a>
              <a href="mailto:kia2001@gmail.com">Email</a>
            </div>
          </div>

          <aside className="hero-projects" aria-label="Featured projects">
            <div className="hero-projects-heading">
              <span>Selected case studies</span>
              <span>2026</span>
            </div>
            {projects.map((project) => (
              <a className={`hero-project ${project.theme}`} href={`/work/${project.slug}`} key={project.id}>
                <span className="hero-project-number">{project.number}</span>
                <span className="hero-project-image" aria-hidden="true">
                  {project.visual === "kpi" ? (
                    <span className="kpi-mini">
                      <span className="kpi-mini-manager">
                        <span className="kpi-mini-bar"><i /><i /><i /></span>
                        <span className="kpi-mini-body">
                          <span className="kpi-mini-sidebar"><i className="active" /><i /><i /></span>
                          <span className="kpi-mini-content">
                            <b />
                            <span className="kpi-mini-cards"><i /><i /><i /></span>
                            <span className="kpi-mini-lines"><i /><i /><i /></span>
                          </span>
                        </span>
                      </span>
                      <span className="kpi-mini-employee">
                        <span className="kpi-mini-bar"><i /><i /></span>
                        <span className="kpi-mini-report"><b /><i /><i /><i /></span>
                      </span>
                    </span>
                  ) : project.id === "health-app" ? (
                    <span className="health-app-mini">
                      <img src="/screens/health-app/home.png" alt="" />
                      <img src="/screens/health-app/booking-summary.png" alt="" />
                    </span>
                  ) : project.id === "academy" ? (
                    <span className="academy-mini">
                      <img src="/screens/academy/course-listing.webp" alt="" />
                      <img src="/screens/academy/course-detail-mobile.webp" alt="" />
                    </span>
                  ) : project.id === "health-web" ? (
                    <span className="health-web-mini">
                      <img src="/screens/health-website/doctors-listing.webp" alt="" />
                      <img src="/screens/health-website/booking-confirmation-mobile.webp" alt="" />
                    </span>
                  ) : project.id === "dotcare" ? (
                    <span className="dotcare-mini">
                      <img src="/screens/dotcare-redesign/worklist.png" alt="" />
                      <img src="/screens/dotcare-redesign/verification.png" alt="" />
                    </span>
                  ) : project.id === "pharmacy-bi" ? (
                    <span className="pharmacy-bi-mini">
                      <img src="/screens/pharmacy-bi/overview.png" alt="" />
                      <img src="/screens/pharmacy-bi/overview-dark.png" alt="" />
                    </span>
                  ) : project.id === "daoud-tycoons" ? (
                    <span className="daoud-mini">
                      <img src="/screens/daoud-tycoons/hero-desktop.webp" alt="" />
                      <img src="/screens/daoud-tycoons/mobile-pdp.webp" alt="" />
                    </span>
                  ) : (
                    <img src={project.thumbnail} alt="" decoding="async" />
                  )}
                </span>
                <span className="hero-project-name">
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                </span>
                <span className="hero-project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </aside>
        </div>

        <div className="hero-footer">
          <p>Alexandria, Egypt · Available internationally</p>
          <p>22 years in digital products · 9+ years leading teams</p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2026</p>
          <h2>Patient journeys.<br />Clinical operations. Leadership.</h2>
          <p>
            Seven evidence-led case studies spanning discovery, product strategy,
            enterprise systems and the operating model behind a design team.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.theme}`} key={project.id}>
              <a
                className="project-visual"
                href={`/work/${project.slug}`}
                aria-label={`Explore ${project.title} project`}
              >
                {project.visual === "kpi" ? (
                  <KpiEditorialPreview />
                ) : project.id === "health-app" ? (
                  <HealthAppProjectPreview />
                ) : project.id === "academy" ? (
                  <AcademyProjectPreview />
                ) : project.id === "health-web" ? (
                  <HealthWebsiteProjectPreview />
                ) : project.id === "dotcare" ? (
                  <DotCareProjectPreview />
                ) : project.id === "pharmacy-bi" ? (
                  <PharmacyBiProjectPreview />
                ) : project.id === "daoud-tycoons" ? (
                  <DaoudProjectPreview />
                ) : (
                  <span className="project-image-window">
                    <img
                      src={project.thumbnail}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                )}
                <span className="open-label">
                  Explore project <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="project-meta">
                <div className="project-index">{project.number}</div>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3><a href={`/work/${project.slug}`}>{project.title}</a></h3>
                  <p className="project-summary">{project.summary}</p>
                  <ul aria-label="Project disciplines">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-lead">
          <p className="eyebrow">How I work</p>
          <h2>I build the conditions for strong design—not only the screens.</h2>
        </div>
        <div className="about-grid">
          <div>
            <span>01</span>
            <h3>Product direction</h3>
            <p>I turn evidence, service constraints and business goals into a focused direction teams can execute.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Systems that scale</h3>
            <p>I built and own the design system used across patient-facing products and hospital operations.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Team leadership</h3>
            <p>I grew the team from four to thirteen designers, with clearer governance, critique, QA and handoff standards.</p>
          </div>
        </div>
      </section>

      <section className="legacy-section" id="earlier-web-design">
        <div className="legacy-heading">
          <div>
            <p className="eyebrow">Earlier web design · 2018–2020</p>
            <h2>Visual craft from an earlier chapter.</h2>
          </div>
          <p>A selective archive—not modern UX case studies. These four projects show the visual and web-design foundation that preceded my product and systems work.</p>
        </div>
        <LegacyWorkArchive />
      </section>

      <footer>
        <div>
          <p className="footer-mark">KF<span>.</span></p>
          <p>Karim Fakhry · Product Design Manager</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/karimfakhry/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:kia2001@gmail.com">Email ↗</a>
          <a href="/resume/Karim-Fakhry-Resume-2026.pdf" target="_blank">Résumé ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
