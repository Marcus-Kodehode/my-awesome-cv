"use client";
import React from "react";
import IconImage from "./IconImage";

export default function SkillsCarousel() {
  const icons = [
    "html",
    "css",
    "javascript",
    "react",
    "vite",
    "next",
    "tailwind",
    "vercel",
    "cssmodules",
    "github",
    "figma",
    "typescript",
    "vue",
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-[480px] min-h-[9rem] overflow-x-hidden overflow-y-visible">
        <div className="flex gap-8 w-max animate-scrollLoop">
          {[...icons, ...icons].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-24 h-24 cursor-pointer group"
            >
              <IconImage
                name={name}
                className="object-contain w-full h-full transition-opacity duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
