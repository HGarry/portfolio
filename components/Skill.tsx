import React from "react";
import { liquidStyles } from "./styles/styles";
import Image from "next/image";
import { Grid } from "@mui/material";

interface SkillProps {
  name: string;
  image: string;
}

function Skill({ name, image }:  SkillProps ) {
  return (
    <Grid
      size={2}
      className={`${liquidStyles.card} flex flex-col gap-4 w-32 h-52  items-center `}
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="object-fit"
      />
      <h3 className="text-xl text-white ">{name}</h3>
    </Grid>
  );
}

export default Skill;
