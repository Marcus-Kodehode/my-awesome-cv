"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AboutStars() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: { color: { value: "transparent" } },  // <- transparent now
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 120, density: { enable: true, area: 1000 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,  // lighter than Home
        random: true,
        anim: { enable: false },
      },
      size: { value: { min: 0.4, max: 1.2 } },
      move: { enable: true, speed: 0.05, outModes: { default: "out" } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="aboutStars"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

