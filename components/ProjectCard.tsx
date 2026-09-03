import Image from "next/image";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { liquidStyles } from "./styles/styles";

type ProjectCardProps = {
  item: {
    id: string | number;
    title: string;
    quote: string;
    image: string;
    live: string;
    source: string;
  };
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  style?: React.CSSProperties;
};

function ProjectCard({
  item,
  index,
  activeIndex,
  setActiveIndex,
  style,
}: ProjectCardProps) {
  const isActive = index === activeIndex;

  return (
    <div
      onClick={() => setActiveIndex(index)}
      style={style}
      className={`${liquidStyles.card} absolute w-[90vw] max-w-85 md:w-130 p-4 sm:p-6 transition-all duration-500 ease-out cursor-pointer select-none flex flex-col justify-between ${
        !isActive ? "hidden md:block" : "block"
      }`}
    >
      <div>
        {/* Project Image */}
        <div className="w-full h-36 sm:h-48 relative mb-3 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={`Screenshot of ${item.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="mb-2">
          <h3 className="text-base sm:text-xl font-bold line-clamp-1">
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
          {item.quote}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center mt-4">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${liquidStyles.button} flex items-center gap-2 text-xs sm:text-sm px-3`}
          >
            Live Site
            <ArrowOutwardIcon fontSize="small" />
          </a>
          <a
            href={item.source}
            target="_blank"
            rel="noopener noreferrer"
            className={`${liquidStyles.button} flex items-center gap-2 text-xs sm:text-sm px-3`}
          >
            Source Code
            <GitHubIcon fontSize="small" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;