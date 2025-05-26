"use client";

export default function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="
      flex flex-col w-full h-full 
      max-w-[22rem] mx-auto 
      overflow-hidden rounded-lg 
      bg-space-light/5
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
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2 text-lg font-semibold text-star">{title}</h3>
        <p className="flex-1 text-secondary">{description}</p>
      </div>
    </div>
  );
}
