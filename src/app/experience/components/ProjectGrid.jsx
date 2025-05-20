"use client";
import React from "react";
import { PROJECTS } from "../data/projectsData";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {PROJECTS.map((proj, idx) => (
        <div
          key={idx}
          className="overflow-hidden transition-shadow rounded-lg bg-space-light/5 hover:shadow-lg"
        >
          <img
            src={proj.imgSrc}
            alt={`${proj.title} screenshot`}
            className="object-cover w-full h-40"
          />
          <div className="p-4">
            <h4 className="mb-2 text-xl font-semibold text-star">
              {proj.title}
            </h4>
            <p className="mb-4 text-secondary">{proj.tech.join(", ")}</p>
            <div className="flex space-x-4">
              <a
                href={proj.linkLive}
                target="_blank"
                rel="noreferrer"
                className="text-highlight hover:underline"
              >
                Live
              </a>
              <a
                href={proj.linkCode}
                target="_blank"
                rel="noreferrer"
                className="text-highlight hover:underline"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
