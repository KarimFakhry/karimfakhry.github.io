"use client";

import { useState } from "react";

export default function FullCaseStudy({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button className="case-study-load" type="button" onClick={() => setIsOpen(true)}>
        Open the complete case study <span aria-hidden="true">↓</span>
      </button>
    );
  }

  return (
    <div className="project-case-study">
      <div className="case-study-toolbar">
        <button type="button" onClick={() => setIsOpen(false)}>
          Close case study <span aria-hidden="true">↑</span>
        </button>
        <a href={image} target="_blank" rel="noreferrer">Open full resolution ↗</a>
      </div>
      <img
        src={image}
        alt={`${title} original editorial presentation. The case-study narrative and evidence are available as accessible text above.`}
        decoding="async"
      />
    </div>
  );
}
