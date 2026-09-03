import dynamic from "next/dynamic";
import Image from "next/image";

import HeroSection from "@/components/HeroSection";

const Skills = dynamic(() => import("@/components/Skills"));
const TestimonialCarousel = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <HeroSection />
      <Skills />
      <TestimonialCarousel />
      <Contact />
    </div>
  );
}