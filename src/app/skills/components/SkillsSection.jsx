"use client";

import React from "react";
import SkillsIntro from "./SkillsIntro";
import SkillCards from "./SkillCards";
import SkillStars from "./SkillStars";
import SkillsCarousel from "./SkillsCarousel";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-4 py-20 scroll-mt-[var(--header-height)]"
    >
      {/* Background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        {/* <SkillStars /> */}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto space-y-16">
        {/* Intro + description */}
        <SkillsIntro />

        {/* Skill cards grid */}
        <SkillCards />

        {/* Icon carousel */}
        <SkillsCarousel />
      </div>
    </section>
  );
}
