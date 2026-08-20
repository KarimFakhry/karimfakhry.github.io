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
      <button type="button" onClick={() => setIsOpen(false)}>
        Close complete case study <span aria-hidden="true">↑</span>
      </button>
      <img
        src={image}
        alt={`${title} original editorial presentation. The case-study narrative and evidence are available as accessible text above.`}
        decoding="async"
      />
    </div>
  );
}
