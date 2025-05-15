'use client';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollDownCTA({ sections = [] }) {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextSectionId = sections[currentIndex + 1];
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 p-3 text-white transition-transform duration-300 rounded-full shadow-lg bottom-6 right-6 bg-highlight hover:scale-110"
      aria-label="Scroll to next section"
    >
      <FaChevronDown size={24} />
    </button>
  );
}
