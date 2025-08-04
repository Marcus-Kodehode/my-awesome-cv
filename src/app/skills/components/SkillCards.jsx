"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillCards() {
  const skillCards = [
    {
      title: "Frontend Development",
      desc: "Focused on building structured, user-friendly interfaces with HTML, CSS, JavaScript and React. Actively exploring Next.js, Vue, Tailwind and TypeScript to level up both frontend logic and visual polish.",
    },
    {
      title: "Customer Service & Communication",
      desc: "Over 10 years of experience meeting people with calm, clarity and care. I bring that same mindset into tech — honest, user-focused, and easy to work with.",
    },
    {
      title: "Problem Solving & Analysis",
      desc: "Analytical by nature and grounded in structure. I approach challenges by breaking them down into manageable steps, validating early, and working consistently toward practical, dependable solutions.",
    },
    {
      title: "Teamwork & Leadership",
      desc: "I’m dependable and loyal in team settings. I support others, keep calm under pressure, and help build a positive atmosphere — even when deadlines get close.",
    },
    {
      title: "Adaptability & Learning",
      desc: "Curious by nature and always building. I pick up new tools quickly and enjoy improving both how I code and how I collaborate.",
    },
    {
      title: "Detail-Oriented & Dependable",
      desc: "I care about doing things right. From file structure to bug tracking, I value clean systems, clear logic, and delivering work people can rely on.",
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
