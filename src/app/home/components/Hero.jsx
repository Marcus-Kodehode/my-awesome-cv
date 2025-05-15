'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HomeStars from './HomeStars';
import ScrollDownCTA from '@/components/base/ScrollDownCTA';

export default function Hero() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) setUserName(storedName);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-32 bg-gradient-to-b from-space to-[#0C1A32] flex items-center"
    >
      <HomeStars />

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl px-6 mx-auto text-star md:flex-row md:items-center md:justify-between">
        {/* Tekstvenstre */}
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl drop-shadow-glow">
            Welcome{userName ? `, ${userName}` : ''}!
          </h1>
          <p className="text-lg leading-relaxed md:text-xl text-secondary drop-shadow">
            I'm Marcus — a creative problem solver with a passion for crafting intuitive, high-quality digital experiences.
            Whether it's designing seamless interfaces, optimizing performance, or improving user journeys, I care deeply about building things that are not only beautiful but meaningful.
            With a sharp eye for detail and a user-first mindset, I bring together design and functionality to create products that feel as good as they look.

          </p>
        </div>

        {/* Bilde høyre */}
        <div className="flex justify-center mt-12 md:mt-0 md:w-1/2">
          <div className="rounded-[25%] p-[3px] bg-gradient-to-br from-highlight to-accent shadow-xl">
            <Image
              src="/me.jpg"
              alt="Marcus Børresen"
              width={320}
              height={400}
              className="object-cover rounded-[25%] w-[240px] h-[320px] bg-space drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <ScrollDownCTA targetId="about" />
    </section>
  );
}
