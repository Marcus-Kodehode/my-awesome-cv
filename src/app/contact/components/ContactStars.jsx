"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ContactStars() {
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
        repulse: { distance: 80, duration: 0.3 },
      },
    },
    particles: {
      number: {
        value: 70, // færre stjerner
        density: { enable: true, area: 1000 },
      },
      color: { value: "#E0F2FE" }, // blek blåhvit
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: true,
      },
      size: {
        value: { min: 0.5, max: 1.5 },
      },
      move: {
        enable: true,
        speed: 0.02,
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="contactStars"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
