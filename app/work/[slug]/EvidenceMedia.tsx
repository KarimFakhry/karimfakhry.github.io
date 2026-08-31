"use client";

import { useEffect, useState } from "react";

export default function EvidenceMedia({
  src,
  fullSrc,
  title,
  alt,
  label,
  device = "desktop",
  highDensityInline = false,
  eager = false,
}: {
  src: string;
  fullSrc?: string;
  title: string;
  alt: string;
  label: "LIVE" | "REDESIGN" | "PRODUCT";
  device?: "desktop" | "tablet" | "mobile";
  highDensityInline?: boolean;
  eager?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const enlargedSrc = fullSrc ?? src;
  const inlineSrc = highDensityInline && fullSrc ? fullSrc : src;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="evidence-media"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Enlarge ${title}`}
      >
        <span className={`evidence-media-label ${label.toLowerCase()}`}>{label}</span>
        <img
          src={inlineSrc}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <span className="evidence-media-action" aria-hidden="true">Enlarge ↗</span>
      </button>

      {isOpen ? (
        <div
          className="screen-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged screen`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="lightbox-toolbar">
            <div><strong>{title}</strong><span>{label}</span></div>
            <div className="lightbox-actions">
              <a href={enlargedSrc} target="_blank" rel="noreferrer">Original size ↗</a>
              <button type="button" onClick={() => setIsOpen(false)} autoFocus>
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div className={`lightbox-image ${device}`}>
            <img src={enlargedSrc} alt={`${alt} — enlarged`} />
          </div>
        </div>
      ) : null}
    </>
  );
}
