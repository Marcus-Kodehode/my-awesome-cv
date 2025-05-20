"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function SkillsStars() {
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
        value: 90, // litt færre partikler = mer "luftig"
        density: { enable: true, area: 1000 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.6, // lysere stjerner enn forrige
        random: true,
        anim: { enable: false },
      },
      size: {
        value: { min: 0.6, max: 1.8 }, // litt større
      },
      move: {
        enable: true,
        speed: 0.03, // enda saktere bevegelse
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="skillsStars"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
