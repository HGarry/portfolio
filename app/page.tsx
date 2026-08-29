"use client";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import TestimonialCarousel from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
      className="bg-cover bg-no-repeat"
    >
      <HeroSection />
      <Skills />
      <TestimonialCarousel />
      <Contact />
    </div>
  );
}
