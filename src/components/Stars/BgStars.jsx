'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function BackgroundStars() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    // background: { color: { value: "#0F172A" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
    },
    particles: {
      number: { value: 250, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: true, speed: 0.3, opacity_min: 0.4, sync: false },
      },
      size: { value: { min: 0.6, max: 1.6 } },
      move: { enable: true, speed: 0.1, direction: 'none', outModes: { default: 'out' } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="homeStars"
      init={particlesInit}
      options={particlesOptions}
      className="fixed inset-0"
      style={{ width: '100%', height: '150%' }}
    />
  );
}

export const BackgroundGradient = () => {
  const pageHeight = window.scrollY
  console.log(pageHeight)
  return (
<></>
  )
}
