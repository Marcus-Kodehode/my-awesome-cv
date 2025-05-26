"use client";
import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectGrid from "./ProjectGrid";
import ExperienceStars from "./ExperienceStars";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-slate-500/30 relative scroll-mt-[var(--header-height)] px-4 py-20"
    >
      {/* Gradient + stjernehimmel-bakgrunn */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient som blir lysere nedover */}
        <div className="absolute inset-0" />
        {/* Partikler over gradienten */}
        {/* <ExperienceStars /> */}
      </div>

      {/* Innhold */}
      <div className="container relative z-10 mx-auto space-y-16">
        <h2 className="mb-12 text-4xl font-bold text-star">Experience & Projects</h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <ExperienceTimeline />
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-star">Selected Projects</h3>
            <ProjectGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
