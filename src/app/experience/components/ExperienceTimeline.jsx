"use client";
import React from "react";
import { EXPERIENCE } from "../data/experienceData";

export default function ExperienceTimeline() {
  return (
    <ul className="relative ml-4 border-l-2 border-space-light">
      {EXPERIENCE.map((job, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-highlight ring-4 ring-base-gradient">
            <div className="w-2 h-2 rounded-full bg-star" />
          </span>
          <div className="text-lg font-semibold text-star">{job.role}</div>
          <div className="text-secondary">{job.company}</div>
          <div className="text-sm italic text-secondary">
            {job.from} – {job.to}
          </div>
        </li>
      ))}
    </ul>
  );
}
