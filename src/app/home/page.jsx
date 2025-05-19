'use client';

import ScrollSpy from '@/components/base/ScrollSpy';
import Hero from './components/Hero';
import About from '@/app/about/components/About';
import SkillsSection from '@/app/skills/components/SkillsSection';
import ExperienceSection from '@/app/experience/components/ExperienceSection';
import ContactSection from '@/app/contact/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* ScrollSpy holder styr på hvilken seksjon som er i viewport */}
      <ScrollSpy sections={['hero', 'about', 'skills', 'experience', 'contact']} />

      <main>
        <section id="hero" className="scroll-mt-[var(--header-height)]">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-[var(--header-height)]">
          <About />
        </section>

        <section id="skills" className="scroll-mt-[var(--header-height)]">
          <SkillsSection />
        </section>

        <section id="experience" className="scroll-mt-[var(--header-height)]">
          <ExperienceSection />
        </section>

        <section id="contact" className="scroll-mt-[var(--header-height)]">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
