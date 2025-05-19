'use client';

export default function ExperienceSection() {
  return (
    <section className="container px-4 py-12 mx-auto lg:py-24">
      <h2 className="mb-6 text-3xl font-bold">Experience</h2>
      {/* Legg inn dine arbeids- eller prosjekt-erfaringer her */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Frontend Developer @ Acme Corp</h3>
          <p className="text-secondary">2022–Present</p>
          <p>Building responsive React-baserte dashboards for B2B-kunder.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Web Intern @ Startup X</h3>
          <p className="text-secondary">2021–2022</p>
          <p>Lagde prototyper i Next.js og Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
