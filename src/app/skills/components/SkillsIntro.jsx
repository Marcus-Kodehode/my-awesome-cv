"use client";

export default function SkillsIntro() {
  return (
    <>
      {/* Heading + short intro */}
      <div>
        <h2 className="text-4xl font-bold text-star">My Skills</h2>
        <p className="max-w-2xl mt-4 text-secondary">
          I deliver production-ready, high-performance web applications with a focus
          on accessibility, clean code and user-centric design.
        </p>
      </div>

      {/* Secondary description */}
      <div className="max-w-3xl">
        <p className="text-secondary">
          My approach blends analytical rigor and creativity. I thrive in collaborative
          environments, learn new tools rapidly, and maintain structure and clarity
          throughout every project.
        </p>
      </div>
    </>
  );
}
