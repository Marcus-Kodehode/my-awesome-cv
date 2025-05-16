"use client";

export default function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="p-6 transition shadow-lg bg-space-light bg-opacity-40 rounded-2xl hover:shadow-xl">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-40 mb-4 rounded-lg"
      />
      <h3 className="mb-2 text-xl font-semibold text-star">{title}</h3>
      <p className="leading-relaxed text-secondary">{description}</p>
    </div>
  );
}
