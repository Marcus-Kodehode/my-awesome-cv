// src/app/home/page.jsx
'use client';

import ScrollSpy from '@/components/base/ScrollSpy';
import Hero from './components/Hero';
import About from '@/app/about/components/About';

// ** HER ER DET DU MANGLET: **
import SkillsPage from '@/app/skills/page'; // eller '@/app/skills/SkillsPage'
import ExperienceSection from './components/ExperienceSection'
import ContactPage from '@/app/contact/page';

export default function HomePage() {
  return (
    <>
      <ScrollSpy sections={['hero','about','skills','experience','contact']} />

      <main>
        <section id="hero" className="scroll-mt-[var(--header-height)]">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-[var(--header-height)]">
          <About />
        </section>

        <section id="skills" className="scroll-mt-[var(--header-height)]">
          <SkillsPage />
        </section>

        <section id="experience" className="scroll-mt-[var(--header-height)]">
          <ExperiencePage />
        </section>

        <section id="contact" className="scroll-mt-[var(--header-height)]">
          <ContactPage />
        </section>
      </main>
    </>
  );
}
