import React from "react";
import { liquidStyles } from "./styles/styles";
import Image from "next/image";
import { Grid } from "@mui/material";

function Skill({
  skill,
}: {
  skill: { id: number; name: string; image: string };
}) {
  return (
    <Grid
      size={2}
      className={`${liquidStyles.card} flex flex-col gap-4 w-32 h-52  items-center `}
    >
      <Image
        src={skill.image}
        alt="alt"
        width={100}
        height={100}
        className="object-fit"
      />
      <h3 className="text-xl text-white ">{skill.name}</h3>
    </Grid>
  );
}

export default Skill;
