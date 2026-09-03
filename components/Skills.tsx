import React from "react";
import Grid from "@mui/material/Grid";
import Skill from "./Skill";
import Education from "./Education";
import { StaggerGrid, FadeIn } from "./Animation";

const skills = [
  {
    id: 1,
    name: "HTML",
    image: "/images/skills/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/images/skills/css-3.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/images/skills/java-script.png",
  },
  {
    id: 4,
    name: "Next.js",
    image: "/images/skills/nextjs-icon.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    image: "/images/skills/tailwind-css.png",
  },
  {
    id: 6,
    name: "Zustand",
    image: "/images/skills/zustand.svg",
  },
  {
    id: 7,
    name: "TanStack Query",
    image: "/images/skills/tanstack.svg",
  },
  {
    id: 8,
    name: "TypeScript",
    image: "/images/skills/ts-logo.svg",
  },
  {
    id: 9,
    name: "GitHub",
    image: "/images/skills/github.svg",
  },
];

const educations = [
  {
    id: 1,
    name: "MT Coding Tech",
    image: "/images/education/mt-coding-tech.jpg",
    description:
      "An intensive, hands-on frontend web development program designed to build production-ready skills in modern web design and application architecture. The curriculum moves from foundational web design principles to building full-stack frontend applications with React and Next.js, incorporating industry-standard state management, component libraries, and AI-assisted workflows.",
  },
  {
    id: 2,
    name: "freeCodeCamp",
    image: "/images/education/freecodecamp.svg",
    description:
      "A comprehensive, project-based certification covering fundamental web technologies and responsive design principles. The curriculum focuses on structuring semantic web content, styling modern user interfaces, and ensuring cross-device compatibility and web accessibility.",
  },
  {
    id: 3,
    name: "Udemy",
    image: "/images/education/udemy.png",
    description:
      "An enterprise-level React course focusing on building large-scale, production-ready web applications. The curriculum covers full-stack web concepts, modern state management paradigms, design patterns, and application architecture.",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="lg:w-[80%] md:w-[90%] mx-auto min-h-screen text-white py-12 px-4 sm:px-6 overflow-hidden flex flex-col gap-8 scroll-mt-24"
    >
      {/* 1. Skills Heading */}
      <FadeIn direction="up">
        <div className="flex justify-center">
          <h2 className="px-3 py-1 rounded-full text-2xl text-center tracking-widest font-extrabold uppercase bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            S
            <span aria-hidden="true" className="text-amber-300">
              kill
            </span>
            s
          </h2>
        </div>
      </FadeIn>

      <StaggerGrid className="w-full mb-8">
        <Grid container spacing={3} className="w-full">
          {skills.map((skill) => (
            <Skill key={skill.id} {...skill} />
          ))}
        </Grid>
      </StaggerGrid>

      <FadeIn direction="up">
        <div className="flex justify-center">
          <h2 className="px-3 py-1 rounded-full text-2xl text-center tracking-widest font-extrabold uppercase bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            Educati
            <span aria-hidden="true" className="text-amber-300">
              on
            </span>
          </h2>
        </div>
      </FadeIn>

      <StaggerGrid className="w-full">
        <Grid container spacing={3} className="w-full">
          {educations.map((education) => (
            <Education key={education.id} {...education} />
          ))}
        </Grid>
      </StaggerGrid>
    </section>
  );
}

export default Skills;
