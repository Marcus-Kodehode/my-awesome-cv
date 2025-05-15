"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function StarsBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: { color: { value: "#0F172A" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
    },
    particles: {
      number: { value: 300, density: { enable: true, area: 1000 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.4, sync: false },
      },
      size: { value: { min: 0.5, max: 1.7 } },
      move: { enable: true, speed: 0.15, direction: "none", outModes: { default: "out" } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
