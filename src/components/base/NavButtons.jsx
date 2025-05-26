"use client";
import { useEffect, useState } from "react";

export default function NavButtons({ href, children, onClick }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.querySelector(href);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const isVisible = rect.top <= 120 && rect.bottom >= 120;
      setIsActive(isVisible);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [href]);

  return (
    <a
      href={href}
      onClick={onClick} // ✅ Legg til denne linjen
      className={`relative px-1 transition-colors duration-200 
        ${isActive ? "text-highlight font-semibold" : "text-secondary"} 
        hover:text-highlight
        after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-highlight 
        after:origin-left after:transition-transform after:duration-300 
        after:w-full ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"} 
        after:transform`}
    >
      {children}
    </a>
  );
}
