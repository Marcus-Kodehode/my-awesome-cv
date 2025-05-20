"use client";
import React from "react";
import Image from "next/image";

export default function IconImage({ name, size = 96, className = "" }) {
  if (!name) return null;

  return (
    <div className="relative flex items-center justify-center w-24 h-24 cursor-pointer group">
      <Image
        src={`/images/icons/${name}.png`}
        alt={name}
        width={size}
        height={size}
        className={`object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${className}`}
      />

      {/* Hover label */}
      <div className="absolute bottom-[-2rem] scale-90 px-2 py-1 rounded bg-space-light text-accent text-xs shadow-md shadow-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
        {name.toUpperCase()}
      </div>
    </div>
  );
}
