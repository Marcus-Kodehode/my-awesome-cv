'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import StarsBackground from "./StarsBackground";
import Logo from "./Logo";
import LogoAndTitle from "./LogoAndTitle";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isStartScreen = pathname === "/startscreen";

  // Skjul header ved scroll ned
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 100);
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
        ${isStartScreen
          ? "pointer-events-none"
          : "pointer-events-auto opacity-100"}
      `}
    >
      <div className="relative h-full max-w-6xl mx-auto overflow-hidden shadow-md pointer-events-auto rounded-b-2xl bg-star-gradient backdrop-blur-md">
        <StarsBackground />

        <div className="relative z-10 flex flex-col h-full gap-4 px-6 pt-4 md:flex-row md:items-center md:justify-between">
          {/* Kun logo er klikkbar */}
          <div className="flex items-center gap-4">
            <Link href="/home#hero" aria-label="Gå til toppen">
              <Logo />
            </Link>
            <LogoAndTitle />
          </div>

          {/* Desktop-nav */}
          <div className="hidden md:flex">
            <NavBar />
          </div>

          {/* Mobil-nav */}
          <div className="self-end pr-4 -mt-2 md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
