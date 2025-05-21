"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ExperienceStars() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: { color: { value: "transparent" } },
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
      number: {
        value: 110, // Flere for liv
        density: { enable: true, area: 900 },
      },
      color: { value: "#F1F5F9" }, // Mer sølvhvit
      shape: { type: "circle" },
      opacity: {
        value: 0.75,
        random: true,
      },
      size: {
        value: { min: 0.8, max: 2.5 },
      },
      move: {
        enable: true,
        speed: 0.045,
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="experienceStars"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
