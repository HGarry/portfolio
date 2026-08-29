import Image from "next/image";
import React from "react";
import { liquidStyles } from "./styles/styles";

function HeroSection() {
  return (
    <div
      id="home"
      // style={{ backgroundImage: "url('/images/hero.jpg')" }}
      className="lg:w-screen w-full bg-cover overflow-hidden p-4 sm:p-6 md:p-8 lg:p-0 lg:pt-5 lg:px-8 flex flex-col justify-center pt-36"
    >
      <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between lg:gap-0 lg:h-screen">
        <div
          style={{ borderRadius: "51% 49% 80% 20% / 34% 30% 70% 66% " }}
          className={`left w-full lg:w-xl lg:p-20 ${liquidStyles.card}`}
        >
          <h1
            className={`text-5xl mb-6 sm:text-6xl lg:text-7xl lg:mb-12 ${liquidStyles.heroHeadline} `}
          >
            Hi, I&apos;m Harry
          </h1>
          <p className={`${liquidStyles.glowTextCyan}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            molestias qui quisquam repudiandae magnam eos dolor ex sed
            repellendus beatae fugiat! Laborum accusantium pariatur obcaecati
            sint expedita odio quo qui.
          </p>
        </div>
        <div className={`${liquidStyles.img} rounded-4xl`}>
          <Image
            src="/images/profile.JPG"
            alt="profile"
            width="500"
            height="500"
            className="h-auto w-full rounded-4xl"
          />
          <ul className="flex flex-row mt-4 justify-around">
            <li>
              <Image
                src="/images/github.png"
                width={500}
                height={500}
                className={`w-8 ${liquidStyles.icon}`}
                alt="github"
              />
            </li>
            <li>
              <Image
                src="/images/email.png"
                width={500}
                height={500}
                className={`w-8 ${liquidStyles.icon}`}
                alt="email"
              />
            </li>
            <li>
              <Image
                src="/images/linkedin-logo.png"
                width={500}
                height={500}
                className={`w-8 object-contain ${liquidStyles.icon}`}
                alt="linkedin"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
