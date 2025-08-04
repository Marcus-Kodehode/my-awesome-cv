"use client";
import { useEffect, useState } from "react";

export default function useScrollHide() {
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

  return { hidden, scrolled };
}
