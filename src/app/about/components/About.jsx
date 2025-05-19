"use client";
import AboutStars from "./AboutStars";
import IntroText from "./IntroText"; // du kan også fjerne hvis du ønsker alt custom
import AboutCarousel from "./AboutCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 overflow-hidden bg-base-gradient lg:py-32"
    >
      {/* Stjerner bak */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <AboutStars />
      </div>

      {/* Innhold */}
      <div className="container relative mx-auto space-y-16">
        {/* 2×2 grid med tekst */}
        <div className="grid grid-cols-1 gap-12 text-white lg:grid-cols-2">
          {/* Venstre kolonne: Om meg */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg leading-relaxed">
              I’m a frontend developer with a passion for crafting clean, accessible interfaces and delightful user experiences. My journey started with vanilla JavaScript, and today I build scalable applications with Next.js and Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed">
              I love leading and motivating others, and I’m skilled at selling ideas and solutions. I value responsibility, high work capacity, success and recognition, and see myself as energetic, ambitious, and social.
            </p>
          </div>

          {/* Høyre kolonne: Ferdigheter */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">My Skills</h2>
            <p className="text-lg leading-relaxed">
              Strong organizational and procedural skills: I excel at creating step-by-step systems, ensuring that tasks are completed efficiently and resources are used optimally.
            </p>
            <p className="text-lg leading-relaxed">
              Highly dependable and decisive: I value structure, predictability and clear goals. My motivators include challenge, influence and setting ambitious targets.
            </p>
          </div>
        </div>

        {/* Karusell med egenskaps‐kort */}
        <AboutCarousel />
      </div>
    </section>
  );
}

