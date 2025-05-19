'use client';

export default function ContactSection() {
  return (
    <section className="container px-4 py-12 mx-auto lg:py-24">
      <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
      {/* Kontaktinformasjon / skjema */}
      <p className="mb-4">Feel free to drop me a line at <a href="mailto:marcus@example.com" className="text-accent">marcus@example.com</a></p>
      <ul className="space-y-2">
        <li>LinkedIn: <a href="#" className="text-accent">/in/marcus</a></li>
        <li>GitHub: <a href="#" className="text-accent">github.com/marcus</a></li>
      </ul>
    </section>
  );
}
