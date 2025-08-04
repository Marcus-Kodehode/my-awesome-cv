"use client";

export default function SkillsIntro() {
  return (
    <div className="space-y-6">
      {/* Heading + intro */}
      <div>
        <h2 className="text-4xl font-bold text-star">My Skills</h2>
        <p className="mt-4 text-lg leading-relaxed text-secondary">
          I build thoughtful, reliable frontend solutions with a focus on structure, accessibility and user experience.  
          My code is clean, responsive and grounded in real-world usage — not just theory.
        </p>
      </div>

      {/* Secondary description med korrekt spacing */}
      <div className="mt-6">
        <p className="text-lg leading-relaxed text-secondary">
          I bring a steady and organized mindset to every project. I thrive in clear systems, value collaboration, and always look to improve — both in how I work and what I deliver.  
          Still early in my developer journey, but learning fast and building with purpose.
        </p>
      </div>
    </div>
  );
}
