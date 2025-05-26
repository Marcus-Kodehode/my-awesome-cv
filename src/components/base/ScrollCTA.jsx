"use client";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ScrollCTA({
  sections = ["hero", "about", "skills", "experience", "contact"],
}) {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "contact") {
            setIsContactVisible(true);
          } else if (entry.target.id === "contact") {
            setIsContactVisible(false);
          }

          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = () => {
    if (isContactVisible) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const idx = sections.indexOf(currentSection);
      const next =
        idx === -1 || idx === sections.length - 1
          ? sections[0]
          : sections[idx + 1];
      const el = document.getElementById(next);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg bg-highlight text-star hover:scale-110 transition-all duration-500 ease-in-out
        opacity-100 animate-fadeIn
      `}
      aria-label={isContactVisible ? "Scroll to top" : "Scroll to next section"}
    >
      {isContactVisible ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
    </button>
  );
}
