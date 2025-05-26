"use client";

import { TESTIMONIALS } from "@/app/contact/data/testimonialsData";
import { FaQuoteLeft } from "react-icons/fa";

const parseDate = (periodStr) => {
  const endStr = periodStr.split("–").pop().trim();
  // Eksempel: "Dec 2024" eller "2016"
  const hasMonth = isNaN(Date.parse(endStr)) === false;
  return hasMonth ? new Date(endStr) : new Date(endStr + "-12-31");
};

export default function Testimonials() {
  const sortedTestimonials = [...TESTIMONIALS].sort(
    (a, b) => parseDate(b.period) - parseDate(a.period)
  );

  return (
    <section className="space-y-12">
      <h3 className="text-3xl font-bold text-center text-star">
        Testimonials from Employers & Colleagues
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedTestimonials.map((testimonial, idx) => (
          <article
            key={idx}
            className="relative flex flex-col justify-between h-full p-6 transition-all duration-300 border shadow-sm rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:shadow-xl hover:border-highlight"
          >
            <div className="absolute flex items-center justify-center w-10 h-10 rounded-full shadow-lg -top-4 -left-4 bg-highlight text-space">
              <FaQuoteLeft className="text-md" />
            </div>

            <p className="mb-6 text-sm leading-relaxed whitespace-pre-line text-secondary">
              {testimonial.text}
            </p>

            <div className="pt-4 mt-auto border-t border-space-light/30">
              <p className="text-sm font-semibold text-star">{testimonial.name}</p>
              <p className="text-sm text-highlight">
                {testimonial.title}, {testimonial.company}
              </p>
              <p className="text-xs italic text-secondary">{testimonial.period}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
