'use client';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavButtons from '@/components/base/NavButtons';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // ESC-key handling + scroll lock
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', handleKey);
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <>
      {/* Hamburger / X toggle icon */}
      <div className="fixed z-[999] right-4 top-5 md:hidden">
        <button
          className="text-3xl text-accent"
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 transition-opacity duration-300 ease-in-out bg-black/70 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center w-screen h-screen gap-8 text-xl bg-space-light text-star animate-slide-in">
            <NavButtons href="#about" onClick={() => setOpen(false)}>About</NavButtons>
            <NavButtons href="#skills" onClick={() => setOpen(false)}>Skills</NavButtons>
            <NavButtons href="#experience" onClick={() => setOpen(false)}>Experience</NavButtons>
            <NavButtons href="#contact" onClick={() => setOpen(false)}>Contact</NavButtons>
          </div>
        </div>
      )}
    </>
  );
}
