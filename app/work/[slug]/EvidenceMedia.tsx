"use client";

import { useEffect, useState } from "react";

export default function EvidenceMedia({
  src,
  title,
  alt,
  label,
  eager = false,
}: {
  src: string;
  title: string;
  alt: string;
  label: "LIVE" | "REDESIGN" | "PRODUCT";
  eager?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
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
              <a href={src} target="_blank" rel="noreferrer">Original size ↗</a>
              <button type="button" onClick={() => setIsOpen(false)} autoFocus>
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div className="lightbox-image">
            <img src={src} alt={`${alt} — enlarged`} />
          </div>
        </div>
      ) : null}
    </>
  );
}
