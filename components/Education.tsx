import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { liquidStyles } from "./styles/styles";
import { StaggerItem } from "./Animation";

type EducationProps = {
  edu: {
    image: string;
    name: string;
    description: string;
  };
};

function Education({ image, name, description }: EducationProps["edu"]) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
      <StaggerItem className="w-full h-full">
        <div
          className={`${liquidStyles.card} w-full h-full flex flex-col gap-4 items-center `}
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
        </div>
      </StaggerItem>
    </Grid>
  );
}

export default Education;
