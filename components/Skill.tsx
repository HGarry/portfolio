import React from "react";
import { liquidStyles } from "./styles/styles";
import Image from "next/image";
import { Grid } from "@mui/material";
import { StaggerItem } from "./Animation";

interface SkillProps {
  name: string;
  image: string;
}

function Skill({ name, image }:  SkillProps ) {
  return (
    <Grid
      size={{ xs: 12, sm: 4, md: 3, lg: 2 }}
      
    >
      <StaggerItem className="h-full w-full">
      <div className={`${liquidStyles.card}w-full h-full flex flex-col gap-4 items-center `}>
    <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="object-fit"
      />
      <h3 className="text-xl text-white ">{name}</h3>
      </div>
      </StaggerItem>
      
    </Grid>
  );
}

export default Skill;
