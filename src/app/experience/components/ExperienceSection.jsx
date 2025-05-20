"use client";
import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectGrid from "./ProjectGrid";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto px-4 py-20 scroll-mt-[var(--header-height)] bg-about-gradient"
    >
      <h2 className="mb-12 text-4xl font-bold text-star">Experience & Projects</h2>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* VENSTRE: Work History */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-star">Work History</h3>
          <ExperienceTimeline />
        </div>

        {/* HØYRE: Selected Projects */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-star">Selected Projects</h3>
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
