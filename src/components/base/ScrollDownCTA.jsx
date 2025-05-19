"use client";
import { useEffect, useState, useCallback } from "react";
import { FaChevronDown } from "react-icons/fa";

/**
 * A fixed “scroll to next section” button.
 * Automatically steps through ['hero','about','skills','experience','contact'].
 */
export default function ScrollDownCTA({
  sections = ["hero", "about", "skills", "experience", "contact"],
}) {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  // Keep track of which section is at least 60% in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll to the next section (or back to the first)
  const handleClick = useCallback(() => {
    const idx = sections.indexOf(currentSection);
    const next =
      idx === -1 || idx === sections.length - 1
        ? sections[0]
        : sections[idx + 1];
    const el = document.getElementById(next);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection, sections]);

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 p-3 transition-transform duration-300 rounded-full shadow-lg  bottom-6 right-6 bg-highlight text-star hover:scale-110"
      aria-label="Scroll to next section"
    >
      <FaChevronDown size={24} />
    </button>
  );
}
