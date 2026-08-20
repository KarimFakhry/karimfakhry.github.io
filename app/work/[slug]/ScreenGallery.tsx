"use client";

import { useEffect, useState } from "react";
import type { ProjectScreen } from "../../data/projects";

export default function ScreenGallery({
  projectTitle,
  screens,
  isApp,
}: {
  projectTitle: string;
  screens: ProjectScreen[];
  isApp: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + screens.length) % screens.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % screens.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, screens.length]);

  const activeScreen = activeIndex === null ? null : screens[activeIndex];

  return (
    <>
      <div className={`screen-grid ${isApp ? "app-grid" : ""}`}>
        {screens.map((screen, index) => (
          <button
            className={`screen-card ${screen.device} ${index === 0 ? "featured" : ""}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Enlarge ${screen.title}`}
            key={screen.image}
          >
            <span className="screen-frame">
              <img
                src={screen.image}
                alt={`${projectTitle} — ${screen.title}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="screen-zoom" aria-hidden="true">Enlarge ↗</span>
            </span>
            <span className="screen-caption">
              {screen.title}<small>Click to enlarge</small>
            </span>
          </button>
        ))}
      </div>

      {activeScreen && activeIndex !== null ? (
        <div
          className="screen-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreen.title} enlarged screen`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="lightbox-toolbar">
            <div>
              <strong>{activeScreen.title}</strong>
              <span>{activeIndex + 1} / {screens.length}</span>
            </div>
            <button type="button" onClick={() => setActiveIndex(null)} autoFocus>
              Close <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className={`lightbox-image ${activeScreen.device}`}>
            <img
              src={activeScreen.image}
              alt={`${projectTitle} — ${activeScreen.title} enlarged`}
            />
          </div>

          <div className="lightbox-navigation" aria-label="Screen navigation">
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + screens.length) % screens.length)}
              aria-label="Previous screen"
            >
              ← <span>Previous</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % screens.length)}
              aria-label="Next screen"
            >
              <span>Next</span> →
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
