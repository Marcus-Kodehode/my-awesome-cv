"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactStars from "./ContactStars";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-24">
      {/* Bakgrunn */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Sømløs stjernehimmel → soloppgang */}
        <div className="absolute inset-0" />
        {/* <ContactStars /> */}
      </div>

      {/* Innhold */}
      <div className="container relative z-10 max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-star">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  );
}
