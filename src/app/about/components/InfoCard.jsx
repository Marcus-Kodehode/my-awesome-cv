// src/app/about/components/InfoCard.jsx
"use client";

export default function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="
      h-full flex flex-col max-w-xs w-full
      bg-space-light/5    /* Diskret bakgrunn */
      rounded-lg          /* Myke hjørner */
      overflow-hidden     /* Klipp alt som stikker utenfor */
    ">
      {/* Bilde */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Tekst */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-2 text-lg font-semibold text-star">{title}</h3>
        <p className="flex-1 text-secondary">{description}</p>
      </div>
    </div>
  );
}

