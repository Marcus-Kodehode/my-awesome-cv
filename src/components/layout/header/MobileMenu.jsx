"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavButtons from "@/components/base/NavButtons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="pr-2 text-3xl text-accent"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="absolute right-0 z-50 w-48 p-4 mt-2 space-y-3 rounded-lg shadow-lg bg-space bg-opacity-95">
          <NavButtons href="#about">About</NavButtons>
          <NavButtons href="#skills">Skills</NavButtons>
          <NavButtons href="#experience">Experience</NavButtons>
          <NavButtons href="#contact">Contact</NavButtons>
        </div>
      )}
    </div>
  );
}
