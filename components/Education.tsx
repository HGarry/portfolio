import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { liquidStyles } from "./styles/styles";

type EducationProps = {
  edu: {
    image: string;
    name: string;
    description: string;
  };
};

function Education({ edu }: EducationProps) {
  return (
    <Grid
      size={4}
      className={`${liquidStyles.card} flex flex-col gap-4 w-2xl  items-center `}
    >
      <Image
        src={edu.image}
        alt={edu.name}
        width={100}
        height={100}
        className="object-fit"
      />
      <h3 className="text-xl text-white ">{edu.name}</h3>
      <p>{edu.description}</p>
    </Grid>
  );
}

export default Education;
