'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import StartStars from './components/StartStars';



export default function StartScreen() {
  const router = useRouter();
  const [inputName, setInputName] = useState('');

  // ❌ Fjern redirect automatisk på refresh
  // → Vi lar brukeren selv trykke "Enter"

  const handleStart = () => {
    if (inputName.trim()) {
      localStorage.setItem('userName', inputName.trim());
      router.push('/home');
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-space text-star">
      {/* Bakgrunnsstjerner */}
      <StartStars />

      {/* Innhold */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 text-center bg-white border shadow-lg bg-opacity-5 backdrop-blur-sm border-white/10 rounded-xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl drop-shadow-md text-star">
            Welcome, what's your name?
        </h1>
        <input
            type="text"
            placeholder="Enter your first name..."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
        />
        <button
            onClick={handleStart}
            className="px-6 py-2 mt-4 text-white transition rounded-md bg-highlight hover:bg-opacity-90"
        >
            Enter
        </button>
        </div>

    </div>
  );
}
