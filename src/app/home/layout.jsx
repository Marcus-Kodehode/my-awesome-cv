// src/app/home/layout.jsx
"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackgroundStars, { BackgroundGradient } from "../../components/Stars/BgStars";

export default function HomeLayout({ children }) {
  return (
    <>
    <div className="z-10 bg-gradient-to-b from-space via-90% via-slate-700 to-91% to-yellow-500">
      <Header />
      {children}
      <Footer />
      <BackgroundStars/>
      </div>
      {/* <BackgroundGradient/> */}
    </>
  );
}
