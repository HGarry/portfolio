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

function Education({ image, name, description }: EducationProps['edu']) {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
      className={`${liquidStyles.card} flex flex-col gap-4 w-2xl  items-center `}
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="object-fit"
      />
      <h3 className="text-xl text-white ">{name}</h3>
      <p>{description}</p>
    </Grid>
  );
}

export default Education;
