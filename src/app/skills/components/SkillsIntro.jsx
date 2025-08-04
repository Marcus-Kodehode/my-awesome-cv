"use client";

export default function SkillsIntro() {
  return (
    <>
      {/* Heading + short intro */}
      <div>
        <h2 className="text-4xl font-bold text-star">My Skills</h2>
        <p className="max-w-2xl mt-4 text-secondary">
          I build thoughtful, reliable frontend solutions with a focus on structure, accessibility and user experience.  
          My code is clean, responsive and grounded in real-world usage — not just theory.
        </p>
      </div>

      {/* Secondary description */}
      <div className="max-w-3xl">
        <p className="text-secondary">
          I bring a steady and organized mindset to every project. I thrive in clear systems, value collaboration, and always look to improve — both in how I work and what I deliver.  
          Still early in my developer journey, but learning fast and building with purpose.
        </p>
      </div>
    </>
  );
}
