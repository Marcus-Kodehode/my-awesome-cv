"use client";

import { useEffect } from "react";

export default function ScrollSpy({
  sections = ["hero", "about", "skills", "experience", "contact"],
  threshold = 0.6,
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const base = window.location.pathname.replace(/#.*$/, "");
            window.history.replaceState(null, "", `${base}#${id}`);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, threshold]);

  return null;
}
