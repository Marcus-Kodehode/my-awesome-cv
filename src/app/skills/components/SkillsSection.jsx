"use client";

import SkillsCarousel from "./SkillsCarousel";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-4 py-20 bg-about-gradient scroll-mt-[var(--header-height)]"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-star">My Skills</h2>
        <p className="text-secondary">
          I excel at building scalable user interfaces with React and Next.js,
          crafting responsive layouts in Tailwind, and optimizing performance
          for lightning-fast experiences.
        </p>

        {/* 1) Grid med tekniske og personlige ferdigheter */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg bg-space-light/5">
            <h3 className="mb-2 font-semibold text-star">Frontend Development</h3>
            <p className="text-secondary">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
          <div className="p-6 rounded-lg bg-space-light/5">
            <h3 className="mb-2 font-semibold text-star">Performance &amp; SEO</h3>
            <p className="text-secondary">
              Lazy loading, Code splitting, Accessibility
            </p>
          </div>
          <div className="p-6 rounded-lg bg-space-light/5">
            <h3 className="mb-2 font-semibold text-star">UI/UX Design</h3>
            <p className="text-secondary">
              Responsive design, Animations, Prototyping
            </p>
          </div>
        </div>

        {/* 2) Evig loop-karusell med alle ikonene */}
        <SkillsCarousel />
      </div>
    </section>
  );
}
