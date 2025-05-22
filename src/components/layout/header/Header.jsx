'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import StarsBackground from "./StarsBackground";
import Logo from "./Logo";
import LogoAndTitle from "./LogoAndTitle";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isStartScreen = pathname === "/startscreen";

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      // Manuell scroll ned = skjul etter liten delay
      const isScrollingDown = delta > 5 && currentY > 100;

      if (isScrollingDown) {
        timeoutId = setTimeout(() => {
          setHidden(true);
        }, 150);
      }

      // Scroll opp = vis umiddelbart
      if (delta < -5) {
        setHidden(false);
      }

      lastScrollY = currentY;
      setScrolled(currentY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
        relative h-full max-w-6xl mx-auto overflow-hidden transition-colors duration-300
        ${scrolled ? "bg-transparent" : "bg-star-gradient shadow-md rounded-b-2xl"}
      `}>
        {/* <StarsBackground transparent={scrolled} /> */}

        <div className="relative z-10 flex flex-col h-full gap-4 px-6 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link href="/home#hero" aria-label="Gå til toppen">
              <Logo />
            </Link>
            <LogoAndTitle />
          </div>
          <div className="hidden md:flex">
            <NavBar />
          </div>
          <div className="self-end pr-4 -mt-2 md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
