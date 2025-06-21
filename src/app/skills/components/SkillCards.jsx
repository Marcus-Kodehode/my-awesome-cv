"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillCards() {
  const skillCards = [
    {
      title: "Frontend Development",
      desc: "Ambitious frontend developer skilled in HTML, CSS, JavaScript, React and Vite. Quick to adopt Next.js and Tailwind, and used with Git, VS Code and Vercel deployments. Currently training in Vue",
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
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 p-6 transition-all duration-300 ease-in-out border shadow-sm cursor-default group rounded-xl bg-space-light/20 border-space-light/40 hover:shadow-xl hover:bg-space-light/30 hover:border-accent/50"
          // 🌟 Uncomment for subtle 3D tilt
          // onMouseMove={(e) => {
          //   const rect = e.currentTarget.getBoundingClientRect();
          //   const x = e.clientX - rect.left;
          //   const y = e.clientY - rect.top;
          //   e.currentTarget.style.transform = `rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${(rect.height / 2 - y) / 20}deg)`;
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
          // }}
        >
          <h3 className="text-lg font-semibold transition-colors duration-300 text-star group-hover:text-accent">
            {skill.title}
          </h3>
          <p className="text-sm leading-relaxed text-secondary">
            {skill.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
