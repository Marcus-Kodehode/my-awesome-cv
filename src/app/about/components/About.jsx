// src/app/about/components/About.jsx
"use client";

import AboutStars from "./AboutStars";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 overflow-hidden lg:py-32"
    >
      {/* Stjerner bak */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <AboutStars />
      </div>

      {/* Innhold */}
      <div className="container relative mx-auto space-y-16">
        {/* 2×2 grid med tekst */}
        <div className="grid items-start grid-cols-1 gap-12 text-white lg:grid-cols-2">
          {/* Venstre kolonne: Om meg */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg leading-relaxed">
              I’m a junior frontend developer currently studying through Kodehode. Since January, I’ve been building projects using HTML, CSS, JavaScript, React and most recently Next.js and Tailwind CSS. I enjoy translating ideas into responsive, user-friendly interfaces that are structured, fast and accessible.
            </p>
            <p className="text-lg leading-relaxed">
              My background is in customer service and relations work — where clear communication, structure and solving problems under pressure were part of the daily routine. That mindset still guides how I work: steady, practical, and focused on delivering value to real users.
            </p>
          </div>

          {/* Høyre kolonne: Personlig profil */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Personal Profile</h2>
            <p className="text-lg leading-relaxed">
              Highly organized and methodical: I break down complex challenges into clear, step-by-step processes, ensuring timely delivery and optimal resource use. My background in customer service has sharpened my attention to detail and my ability to adapt on the fly.
            </p>
            <p className="text-lg leading-relaxed">
              Proactive learner & team player: I thrive on sharing knowledge, mentoring peers and collaborating across functions. Curiosity and creativity drive me to experiment with new tools and set ambitious personal goals.
            </p>
          </div>
        </div>

        {/* Karusell med egenskaps-kort */}
        <AboutCarousel />
      </div>
    </section>
  );
}
