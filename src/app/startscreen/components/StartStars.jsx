'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function StartStars() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Memoiserte konfigurasjoner for å unngå re-render
  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    background: { color: { value: "#0F172A" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
    },
    particles: {
      number: { value: 200, density: { enable: true, area: 900 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 0.3, opacity_min: 0.3, sync: false },
      },
      size: { value: { min: 0.7, max: 1.8 } },
      move: {
        enable: true,
        speed: 0.12,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="startstars"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
