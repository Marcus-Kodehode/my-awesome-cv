"use client";
import Hero from "./components/Hero";
import About from "@/app/about/components/About";
// …

export default function Page() {
  return (
    <main>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      {/* … */}
    </main>
  );
}
