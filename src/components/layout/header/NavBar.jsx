"use client";

import { usePathname } from "next/navigation";
import NavButtons from "@/components/base/NavButtons";

export default function NavBar() {
  const pathname = usePathname();

  // Skjul Navbar på startscreen
  if (pathname === "/" || pathname === "/startscreen") {
    return null;
  }

  return (
    <nav className="flex pr-2 space-x-6">
      {/* hash‐links – scroll={false} for å bruke scroll-behavior: smooth */}
      <NavButtons href="#about" scroll={false}>About</NavButtons>
      <NavButtons href="#skills" scroll={false}>Skills</NavButtons>
      <NavButtons href="#experience" scroll={false}>Experience</NavButtons>
      <NavButtons href="#contact" scroll={false}>Contact</NavButtons>
    </nav>
  );
}
