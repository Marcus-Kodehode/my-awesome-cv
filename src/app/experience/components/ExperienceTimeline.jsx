"use client";
import React, { useState } from "react";
import { EXPERIENCE } from "../data/experienceData";
import { parse, differenceInMonths } from "date-fns";

export default function ExperienceTimeline() {
  const [selected, setSelected] = useState(null);

  function handleClick(job) {
    setSelected(job);
  }

  function calculateDuration(from, to) {
    const fromDate = parse(from, "MMM yyyy", new Date());
    const toDate = parse(to, "MMM yyyy", new Date());
    const totalMonths = differenceInMonths(toDate, fromDate);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let result = "";
    if (years > 0) result += years + " year" + (years > 1 ? "s" : "");
    if (months > 0) result += (years > 0 ? " " : "") + months + " month" + (months > 1 ? "s" : "");
    return result || "Less than a month";
  }

  return (
    <>
      <div className="relative flex items-start justify-start md:ml-8">
        <div className="relative z-10 w-full max-w-md p-6 transition-all duration-300 border shadow-xl rounded-3xl border-space-light/30 bg-space-light/10 backdrop-blur-md">

          <h2 className="relative z-10 mb-8 text-2xl font-bold text-center text-star">
            Work History
          </h2>

          <ul className="relative z-10 ml-4 border-l-2 border-space-light/30">
            {EXPERIENCE.map((job, idx) => {
              const isActive = selected?.role === job.role;

              return (
                <li
                  key={idx}
                  className="flex flex-col items-start px-2 py-1 mb-10 ml-6 transition rounded-lg group hover:bg-space-light/5"
                >
                  {/* Sirkel med glow og puls */}
                  <button
                    onClick={() => handleClick(job)}
                    className={`absolute z-10 -left-4 w-8 h-8 rounded-full
                      flex items-center justify-center focus:outline-none
                      transition-all duration-300 ease-in-out
                      ${isActive
                        ? "bg-highlight ring-4 ring-accent/60 scale-110 animate-pulseShadow"
                        : "bg-highlight/70 ring-2 ring-highlight/30 hover:scale-105 hover:ring-highlight"}
                    `}
                    aria-label={"More about " + job.role}
                  >
                    <div className="w-2 h-2 rounded-full bg-star" />
                  </button>

                  {/* Klikkbar tittel */}
                  <button
                    onClick={() => handleClick(job)}
                    className={`text-left text-lg font-semibold transition-all duration-300
                      focus:outline-none
                      underline underline-offset-4
                      ${isActive
                        ? "text-accent"
                        : "text-star hover:text-accent hover:underline text-highlight/70"}
                    `}
                  >
                    {job.role}
                  </button>


                  <div className="text-sm italic text-secondary mt-0.5">
                    {job.from} – {job.to}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70">
          <div className="relative w-full max-w-lg p-6 shadow-2xl bg-base-gradient text-star rounded-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute text-xl top-3 right-4 text-secondary hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="mb-2 text-2xl font-semibold">{selected.role}</h3>
            <p className="mb-2 text-sm italic text-secondary">
              {selected.company} • {selected.from} – {selected.to}{" "}
              <span className="text-highlight">
                ({calculateDuration(selected.from, selected.to)})
              </span>
            </p>
            {selected.details ? (
              <p className="text-sm whitespace-pre-line text-secondary">
                {selected.details}
              </p>
            ) : (
              <p className="text-sm italic text-secondary opacity-60">
                No additional details available.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
