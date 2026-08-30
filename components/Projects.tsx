"use client"
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductCard from "./ProjectCard";
import { liquidStyles } from "./styles/styles";
import { FadeIn } from "./Animation";

const testimonials = [
  {
    id: 1,
    quote:
      "A web application built to handle persistent state synchronization and dynamic client-side routing. Key technical implementations include dedicated detail pages, a random place selection algorithm, and a globally synchronized `Mark as Visited` state manager that allows users to toggle or unmark visited locations in real time from any page across the app.",
    title: "Historical Places - Travel Suggestion App",
    image: "/images/projects/historical-places.jpeg",
    live: "https://historical-places-6h8dk2ysr-harrys-projects-65613e14.vercel.app/",
    source: "https://github.com/HGarry/historical-places",
  },
  {
    id: 2,
    quote:
      "A fast, responsive web application built with Next.js and React that delivers an end-to-end shopping experience from product browsing to checkout. It leverages TanStack Query for optimized data fetching and caching, paired with Zustand for lightweight global cart state management, and features flexible styling using Tailwind CSS and Material UI components.",
    title: "Shopper – Next.js Mini E-Commerce Platform",
    image: "/images/projects/mini-e-commerce.jpeg",
    live: "https://mini-ecommerce-rosy.vercel.app/",
    source: "https://github.com/HGarry/mini-ecommerce",
  },
  {
    id: 3,
    quote:
      "An interactive e-commerce product page built with React and Tailwind CSS featuring a dynamic lightbox image gallery, item quantity selector, and functional shopping cart overlay. It effectively manages state for cart additions while delivering a seamless, mobile-first responsive shopping experience.",
    title: "E-commerce Product Page",
    image: "/images/projects/e-commerce-page.webp",
    live: "https://ecommerce-product-page-main-ruby-five.vercel.app/",
    source: "https://github.com/HGarry/ecommerce-product-page-main",
  },
  {
    id: 4,
    quote:
      "A modern, responsive landing page for a virtual reality company built with React and Tailwind CSS. It features an interactive mobile navigation menu, custom photo grids, and hover effects for highlighted creations, demonstrating clean component architecture and utility-first responsive styling.",
    title: "Loop Landing Studio",
    image: "/images/projects/movie-landing-page.webp",
    live: "https://loopstudio-landing-page-ecru.vercel.app/",
    source: "https://github.com/HGarry/loopstudio-landing-page",
  },
  {
    id: 5,
    quote:
      "A responsive analytics dashboard built with React and Tailwind CSS that aggregates social media metrics across multiple platforms. Featuring a dynamic dark/light mode toggle, it showcases clean component architecture, state management, and mobile-first utility-first styling.",
    title: "Social Media Dashboard",
    image: "/images/projects/social-media.webp",
    live: "https://social-media-dashboard-two-mauve.vercel.app/",
    source: "https://github.com/HGarry/social-media-dashboard",
  },
  {
    id: 6,
    quote:
      "A responsive productivity dashboard built with React and Tailwind CSS to track daily, weekly, and monthly metrics. It dynamically renders activity cards from local JSON data using React state management, showcasing modern component architecture, utility-first styling, and mobile-first responsive design.",
    title: "Time Tracking Dashboard",
    image: "/images/projects/time-tracking.webp",
    live: "https://time-tracking-dashboard-main-s4b6.vercel.app/",
    source: "https://github.com/HGarry/time-tracking-dashboard-main",
  },
  // {
  //   id: 7,
  //   quote:
  //     "A sleek and modern landing page designed for a creative agency. The project emphasizes visual storytelling with bold typography, vibrant imagery, and clear calls to action. The layout adapts seamlessly across devices, ensuring an optimal user experience on both desktop and mobile.",
  //   title: "Agency Landing Page",
  //   image: "/images/projects/agency-landing-page.webp",
  //   live: "https://agency-landing-page-amber-rho.vercel.app/",
  //   source: "https://github.com/HGarry/agency-landing-page",
  // },
  // {
  //   id: 8,
  //   quote:
  //     "A responsive landing page component focused on showcasing social proof through customer ratings and testimonials. The layout highlights brand trust using structured visual hierarchy and modern UI/UX principles.",
  //   title: "Social Proof Section",
  //   image: "/images/projects/social-proof-section.webp",
  //   live: "https://social-proof-section-iota-snowy.vercel.app/",
  //   source: "https://github.com/HGarry/social-proof-section",
  // },
  // {
  //   id: 9,
  //   quote:
  //     "A clean and responsive results summary card that displays a user's test score along with category-based performance data. The component is designed with a strong visual hierarchy to emphasize the overall result and uses color-coded sections for clarity and readability.",
  //   title: "Results Summary Component",
  //   image: "/images/projects/result-summary.webp",
  //   live: "https://result-summary-bay-eight.vercel.app/",
  //   source: "https://github.com/HGarry/result-summary",
  // },
  // {
  //   id: 10,
  //   quote:
  //     "A modern and responsive card layout featuring three distinct product/service previews with icons, titles, descriptions, and call-to-action buttons. The goal of this challenge was to practice component-based layout design and responsive styling techniques.",
  //   title: "3-column Preview Card Component",
  //   image: "/images/projects/3-column.webp",
  //   live: "https://3-clolum-preview-card.vercel.app/",
  //   source: "https://github.com/HGarry/3-column-preview-card",
  // },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    if (absOffset > 2) {
      return {
        opacity: 0,
        pointerEvents: "none" as const,
        transform: "scale(0)",
      };
    }

    const translateX = offset * 330;
    const translateZ = absOffset * 240;
    const rotateY = offset * -28;
    const scale = 1 - absOffset * 0.1;
    const opacity = 1 - absOffset * 0.25;
    const zIndex = 20 - absOffset;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <section
      id="projects"
      className="relative text-white py-12 px-4 overflow-hidden flex flex-col items-center justify-center md:gap-16 scroll-mt-20"
    >
      <FadeIn direction="up" >
        <div className="relative flex flex-col items-center mt-6 mb-4">
        <div className="px-4 py-1.5 rounded-full text-xl sm:text-2xl tracking-widest font-extrabold uppercase bg-white/5 border border-white/10 backdrop-blur-md">
         <span aria-hidden="true" className="text-amber-300">Pro</span>jects
        </div>
      </div>
      </FadeIn>

      {/* 3D Carousel Stage */}
      <FadeIn direction="right" delay={0.15}>
      <div
        className="relative w-full max-w-7xl h-110 sm:h-115 flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {testimonials.map((item, index) => {
            const style = getCardStyle(index);

            return (
              <ProductCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                style={style}
              />
            );
          })}
        </div>
      </div>
      </FadeIn>

      {/* Controls */}
      <FadeIn direction="up" delay={0.3}>
      <div className={`relative flex items-center gap-2 ${liquidStyles.button}`}>
        <IconButton onClick={handlePrev} aria-label="Previous Project" size="small" sx={{ color: "#fafafa" }}>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={handleNext} aria-label="Next Project" size="small" sx={{ color: "#fafafa" }}>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </div>
      </FadeIn>
    </section>
  );
}