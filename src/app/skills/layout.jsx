"use client";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";


export default function SkillsLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
