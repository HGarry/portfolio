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
  setActiveIndex: (index: number) => void;
  style?: React.CSSProperties;
};

function ProjectCard({ item, index, setActiveIndex, style }: ProjectCardProps) {
  return (
    <div
      key={item.id}
      onClick={() => setActiveIndex(index)}
      style={style}
      className={`${liquidStyles.card} absolute w-[600px] sm:w-[340px] p-6 transition-all duration-500 ease-out cursor-pointer hover:border-orange-500/50 select-none flex flex-col justify-between]`}
    >
      <div>
        {/* Styled Quote Icon (99) */}
        <div className="text-orange-500 font-serif text-3xl font-bold leading-none mb-3">
          <Image
            src={item.image}
            alt={`Screenshot of ${item.title}`}
            width={500}
            height={500}
          />
        </div>

        {/* Rating Stars */}
        <div className="mb-4">
          <h3>{item.title}</h3>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
          {item.quote}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            className={`${liquidStyles.button} flex items-center gap-2 mt-3`}
          >
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Live Site
            </a>
            <ArrowOutwardIcon />
          </button>
          <button
            className={`${liquidStyles.button} flex items-center gap-2 mt-3`}
          >
            <a
              href={item.source}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Source Code
            </a>
            <GitHubIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
