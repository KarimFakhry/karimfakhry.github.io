"use client";

import { useEffect, useState } from "react";

const legacyWork = [
  { title: "AHBS", meta: "Healthcare business solutions · 2019", thumb: "/legacy/ahbs-card-800.jpg", image: "/legacy/ahbs.jpg" },
  { title: "Arsann", meta: "Parking services · 2018", thumb: "/legacy/arsann-card-800.jpg", image: "/legacy/arsann.jpg" },
  { title: "Andalusia Dental", meta: "Healthcare website · 2018", thumb: "/legacy/andalusia-dental-card-800.jpg", image: "/legacy/andalusia-dental.jpg" },
  { title: "Andalusia Wellness", meta: "Healthcare website · 2020", thumb: "/legacy/andalusia-wellness-card-800.png", image: "/legacy/andalusia-wellness.jpg" },
];

export default function LegacyWorkArchive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : legacyWork[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + legacyWork.length) % legacyWork.length);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % legacyWork.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="legacy-grid">
        {legacyWork.map((item, index) => (
          <button type="button" className="legacy-card" onClick={() => setActiveIndex(index)} key={item.title}>
            <span className="legacy-thumb"><img src={item.thumb} alt="" loading="lazy" decoding="async" /><i aria-hidden="true">View full page ↗</i></span>
            <strong>{item.title}</strong>
            <span>{item.meta}</span>
          </button>
        ))}
      </div>

      {active && activeIndex !== null ? (
        <div className="screen-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} full-page design`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <div className="lightbox-toolbar">
            <div><strong>{active.title}</strong><span>{active.meta}</span></div>
            <div className="lightbox-actions">
              <a href={active.image} target="_blank" rel="noreferrer">Original size ↗</a>
              <button type="button" onClick={() => setActiveIndex(null)} autoFocus>Close <span aria-hidden="true">×</span></button>
            </div>
          </div>
          <div className="lightbox-image legacy-lightbox-image"><img src={active.image} alt={`${active.title} full-page website design`} /></div>
          <div className="lightbox-navigation" aria-label="Legacy project navigation">
            <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + legacyWork.length) % legacyWork.length)} aria-label="Previous legacy project">← <span>Previous</span></button>
            <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % legacyWork.length)} aria-label="Next legacy project"><span>Next</span> →</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
