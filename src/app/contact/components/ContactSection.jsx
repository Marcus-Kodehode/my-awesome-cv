"use client";
import React from "react";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import ContactStars from "./ContactStars";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <ContactStars /> */}
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto space-y-20">
        <h2 className="text-4xl font-bold text-center text-star">Get in Touch</h2>

        {/* 🟪 Vis anbefalinger først */}
        <Testimonials />

        {/* 🟩 Deretter kontaktskjema */}
        <ContactForm />
      </div>
    </section>
    
  );
}
