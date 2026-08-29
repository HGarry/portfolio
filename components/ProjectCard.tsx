import Image from "next/image";
import React from "react";
import { liquidStyles } from "./styles/styles";

type ProjectCardProps = {
  item: {
    id: string | number;
    title: string;
    quote: string;
    image: string;
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
      className={`${liquidStyles.card} absolute w-[600px] sm:w-[340px] h-[480px] p-6 transition-all duration-500 ease-out cursor-pointer hover:border-orange-500/50 select-none flex flex-col justify-between]`}
    >
      <div>
        {/* Styled Quote Icon (99) */}
        <div className="text-orange-500 font-serif text-3xl font-bold leading-none mb-3">
          <Image src={item.image} alt="Quote Icon" width={500} height={500} />
        </div>

        {/* Rating Stars */}
        <div className="mb-4">
          <h3>{item.title}</h3>
        </div>

        {/* Quote Text */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
          {item.quote}
        </p>
      </div>

      {/* Author Info */}
      {/* <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Avatar
                    sx={{
                      bgcolor: "#f97316",
                      color: "#000",
                      width: 36,
                      height: 36,
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    {item.avatar}
                  </Avatar>
                  <div>
                    <h4 className="text-xs font-semibold text-white leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-400">{item.title}</p>
                  </div>
                </div> */}
    </div>
  );
}

export default ProjectCard;
