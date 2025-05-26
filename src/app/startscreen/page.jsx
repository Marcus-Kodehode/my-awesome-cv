"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import StartStars from "./components/StartStars";
import { FaSpinner } from "react-icons/fa";

export default function StartScreenPage() {
  const router = useRouter();
  const [inputName, setInputName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = (e) => {
    e.preventDefault();
    const name = inputName.trim();
    if (name) {
      setIsLoading(true);
      localStorage.setItem("userName", name);
      setTimeout(() => {
        router.push("/home");
      }, 2000); // Simulert lasting
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-space text-star">
      <StartStars />

      {/* Card eller Spinner */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 text-center transition-all duration-500 ease-in-out bg-white border shadow-lg bg-opacity-5 backdrop-blur-sm border-white/10 rounded-xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4 animate-fadeIn">
            <FaSpinner className="text-3xl animate-spin text-highlight" />
            <p className="text-lg font-semibold">Loading your journey...</p>
          </div>
        ) : (
          <>
            <h1 className="mb-3 text-3xl font-bold drop-shadow-md text-star md:text-4xl">
              Welcome to My Digital Résumé!
            </h1>
            <p className="mb-6 text-sm text-secondary">
              This is a fully custom-built, interactive CV created by me from scratch using modern web technologies. Let’s get started — what’s your name?
            </p>

            <form onSubmit={handleStart} className="space-y-4">
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
          </>
        )}
      </div>
    </div>
  );
}
