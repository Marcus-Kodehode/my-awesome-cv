"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import StartStars from "./components/StartStars";

export default function StartScreenPage() {
  const router = useRouter();
  const [inputName, setInputName] = useState("");

  const handleStart = (e) => {
    e.preventDefault();
    const name = inputName.trim();
    if (name) {
      localStorage.setItem("userName", name);
      router.push("/home");
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-space text-star">
      {/* Stjernene i bakgrunnen */}
      <StartStars />

      {/* Selve kortet */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 text-center bg-white border shadow-lg bg-opacity-5 backdrop-blur-sm border-white/10 rounded-xl">
        <h1 className="mb-6 text-3xl font-bold drop-shadow-md text-star md:text-4xl">
          Welcome! What’s your name?
        </h1>

        <form onSubmit={handleStart} className="space-y-4">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 text-white transition rounded-md bg-highlight hover:bg-opacity-90"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
