"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LogoAndTitle from "./LogoAndTitle";
import NavBar from "./NavBar";

export default function Header() {
  const pathname = usePathname();
  const isStartScreen = pathname === "/startscreen";

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 100);
      setScrolled(currentY > 10);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full h-32 md:h-28
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${isStartScreen ? "pointer-events-none" : "pointer-events-auto opacity-100"}
      `}
    >
      <div className={`
        relative h-full max-w-6xl mx-auto overflow-hidden pointer-events-auto
        transition-colors duration-300 rounded-b-2xl
        ${scrolled
          ? "bg-space/60 backdrop-blur-sm"
          : "bg-star-gradient backdrop-blur-md shadow-md"}
      `}>
        <div className="relative z-10 flex flex-col h-full gap-4 px-6 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link href="/home#hero" aria-label="Back to top">
              <Logo />
            </Link>
            <LogoAndTitle />
          </div>

          <div className="hidden md:flex">
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
}
