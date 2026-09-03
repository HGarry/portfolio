"use client";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import TestimonialCarousel from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        className="w-screen h-screen bg-cover bg-no-repeat fixed top-0 left-0 z-[-1]"
      ></div>
      <HeroSection />
      <Skills />
      <TestimonialCarousel />
      <Contact />
    </div>
  );
}
