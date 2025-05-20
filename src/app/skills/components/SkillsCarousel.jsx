"use client";
import React from "react";
import IconImage from "./IconImage"; // 🔧 korrekt relativ bane

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
  ];

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="flex whitespace-nowrap w-max animate-scrollLoop">
        {icons.map((name, i) => (
          <div key={`a-${i}`} className="flex-shrink-0 w-24 h-24 mx-4 opacity-80 hover:opacity-100">
            <IconImage name={name} />
          </div>
        ))}
        {icons.map((name, i) => (
          <div key={`b-${i}`} className="flex-shrink-0 w-24 h-24 mx-4 opacity-80 hover:opacity-100">
            <IconImage name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
