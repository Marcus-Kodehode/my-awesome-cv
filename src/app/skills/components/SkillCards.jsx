"use client";

import React from "react";

export default function SkillCards() {
  const skillCards = [
    {
      title: "Frontend Development",
      desc: "Ambitious frontend developer skilled in HTML, CSS, JavaScript, React and Vite. Quick to adopt Next.js and Tailwind, and experienced with Git, VS Code and Vercel deployments.",
    },
    {
      title: "Customer Service & Communication",
      desc: "Reliable service professional with 10+ years in retail. Strong in customer dialogue, problem-solving at the point of sale, and building trustful relationships both in writing and in person.",
    },
    {
      title: "Problem Solving & Analysis",
      desc: "Highly structured and conscientious—breaks complex issues into clear steps, iterates solutions rapidly, and ensures accuracy under tight deadlines.",
    },
    {
      title: "Teamwork & Leadership",
      desc: "Collaborative team player who enjoys sharing knowledge and mentoring peers. Proactive in creating a supportive, learning-focused environment.",
    },
    {
      title: "Adaptability & Learning",
      desc: "Fast learner with high openness to new ideas and tools. Continuously updates skills in web tech, best practices and safety procedures.",
    },
    {
      title: "Detail-Oriented & Dependable",
      desc: "Consistently delivers well-tested, robust work thanks to disciplined planning and emotional stability—even under pressure.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillCards.map((skill, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 p-6 rounded-lg bg-space-light/5
                     transition-transform hover:scale-[1.015] hover:shadow-lg duration-300"
        >
          <h3 className="font-semibold text-star">{skill.title}</h3>
          <p className="text-secondary">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
}
