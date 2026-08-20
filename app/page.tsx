import { projects } from "./data/projects";

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
              I lead product design across healthcare and education—connecting
              research, systems and craft to turn complexity into useful,
              coherent experiences.
            </p>
            <div className="hero-actions">
              <a href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a href="https://www.linkedin.com/in/karimfakhry/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
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
                  <img src={project.thumbnail} alt="" decoding="async" />
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
          <p>Strategy · Systems · Design leadership</p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2026</p>
          <h2>Three redesigns.<br />One principle: clarity.</h2>
          <p>
            End-to-end case studies spanning discovery, product thinking,
            interface systems and the details that make an experience work.
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
                <span className="project-image-window">
                  <img
                    src={project.thumbnail}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>
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
          <h2>Direction when it’s complex. Detail where it matters.</h2>
        </div>
        <div className="about-grid">
          <div>
            <span>01</span>
            <h3>Strategy & research</h3>
            <p>I turn evidence, constraints and business goals into a focused product direction.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Systems & craft</h3>
            <p>I design coherent experiences that scale across products, platforms and teams.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Design leadership</h3>
            <p>I help teams make stronger decisions, raise quality and connect design to outcomes.</p>
          </div>
        </div>
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
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
