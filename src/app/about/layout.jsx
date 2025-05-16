"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
