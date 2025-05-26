"use client";
import React from "react";
import { PROJECTS } from "../data/projectsData";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {PROJECTS.map((proj, idx) => (
        <div
          key={idx}
          className="
            overflow-hidden rounded-xl border border-space-light/20 
            bg-space-light/15 transition-all duration-300
            hover:shadow-2xl hover:scale-[1.015] hover:border-accent/40
          "
        >
          <img
            src={proj.imgSrc}
            alt={`${proj.title} screenshot`}
            className="object-cover w-full h-40 transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4">
            <h4 className="mb-2 text-xl font-semibold text-star">
              {proj.title}
            </h4>
            <p className="mb-2 text-secondary">{proj.tech.join(", ")}</p>
            {proj.status && (
              <p className="mb-4 text-sm text-secondary">
                <span className="font-medium text-highlight">Status:</span>{" "}
                <span
                  className={`${
                    proj.status.toLowerCase().includes("progress")
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {proj.status}
                </span>
              </p>
            )}
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
