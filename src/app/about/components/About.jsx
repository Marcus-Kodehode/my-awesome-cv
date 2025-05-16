"use client";
import AboutStars from "./AboutStars";
import Profile from "./Profile";
import IntroText from "./IntroText";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 overflow-hidden bg-base-gradient lg:py-32"
    >
      {/* Bakgrunnsstjerner */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <AboutStars />
      </div>

      {/* Hoved-innhold */}
      <div className="container relative mx-auto space-y-16">
        {/* 1) Intro + profilbilde */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Venstre kolonne: tekst */}
          <div className="space-y-6 text-white">
            <h2 className="text-4xl font-bold">About Me</h2>
            <IntroText />
            {/* Her kan du legge til flere punkter eller en kort bio */}
            <p className="text-secondary">
              {/* Placeholder: skriv litt om bakgrunn, interesser, motivasjon osv. */}
              I’m a frontend developer with a passion for crafting clean, 
              accessible interfaces and delightful user experiences. 
              My journey started with vanilla JavaScript, and today I build 
              scalable applications with Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Høyre kolonne: profilbilde med border */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-48 overflow-hidden border-4 rounded-full shadow-xl md:w-64 md:h-64 border-highlight">
              <Profile />
            </div>
          </div> */}
        </div>

        {/* 2) Carousel med kort */}
        <AboutCarousel />
      </div>
    </section>
  );
}

