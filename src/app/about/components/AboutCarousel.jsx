// src/app/about/components/AboutCarousel.jsx
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InfoCard from "./InfoCard";
import { CARDS_DATA } from "@/data/cardsdata";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutCarousel() {
  // callback-refs slik at Swiper finner dem ved init
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <div className="relative w-full max-w-5xl py-8 mx-auto">
      {/* ← Prev-knapp */}
      <button
        ref={setPrevEl}
        className={[
          "absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2",
          "rounded-full p-1.5 text-star z-20",
          "bg-space-light/30 hover:bg-space-light/50",
          "border border-star/20 hover:border-star",
          "transition-all duration-200 ease hover:shadow-lg",
        ].join(" ")}
        aria-label="Forrige"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next → */}
      <button
        ref={setNextEl}
        className={[
          "absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2",
          "rounded-full p-1.5 text-star z-20",
          "bg-space-light/30 hover:bg-space-light/50",
          "border border-star/20 hover:border-star",
          "transition-all duration-200 ease hover:shadow-lg",
        ].join(" ")}
        aria-label="Neste"
      >
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop
        speed={600}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl, nextEl }}
        pagination={{
          el: paginationEl,
          clickable: true,
          bulletClass: [
            "swiper-pagination-bullet",
            "w-1.5 h-1.5",               /* 6px */
            "rounded-full",
            "bg-highlight/50",           /* 50% opacity */
            "transition-transform duration-200 ease",
            "hover:scale-125",
          ].join(" "),
          bulletActiveClass: [
            "swiper-pagination-bullet-active",
            "w-2 h-2",                   /* 8px */
            "bg-gradient-to-r from-highlight to-accent",
            "opacity-100",
            "shadow-md",
          ].join(" "),
        }}
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {CARDS_DATA.map((card, idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-stretch justify-center" /* sørger for lik høyde */
          >
            <InfoCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginering under */}
      <div
        ref={setPaginationEl}
        className="mx-auto mt-6 flex justify-center space-x-2 max-w-[6rem]"
      />
    </div>
);
}
