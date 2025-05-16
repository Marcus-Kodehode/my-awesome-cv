"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import InfoCard from "./InfoCard";
import { CARDS_DATA } from "@/data/cardsdata";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full max-w-5xl py-8 mx-auto">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 bg-opacity-50 rounded-full top-1/2 bg-space-light text-star hover:bg-opacity-80"
      >
        ‹
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 transition -translate-y-1/2 bg-opacity-50 rounded-full top-1/2 bg-space-light text-star hover:bg-opacity-80"
      >
        ›
      </button>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop
        speed={600}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {CARDS_DATA.map((card, idx) => (
          <SwiperSlide key={idx}>
            <InfoCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
