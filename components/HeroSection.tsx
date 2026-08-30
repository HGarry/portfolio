import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          
          className={`left w-full lg:w-xl lg:p-5`}
        >
          <h1
            className={`text-5xl mb-6 sm:text-6xl lg:text-7xl lg:mb-12 ${liquidStyles.heroHeadline} `}
          >
            Hi, I&apos;m <span className="text-amber-300"> Harry</span>
          </h1>
          <p className={`${liquidStyles.glowTextCyan} text-xl pr-10`}>
            &quot;Frontend Developer crafting clean, responsive, and data-driven
            web applications with React, Next.js, and Tailwind CSS. Focused on
            building production-ready user interfaces with solid state
            management and intuitive interactions.&quot;
          </p>
          <button
            className={`${liquidStyles.button} ${liquidStyles.glowTextWhite} cursor-pointer mt-4 mr-2`}
          >
            <a
              href="#projects"
              rel="noopener noreferrer"
            >
              View Projects
            </a>
          </button>
          {/* <button
            className={`${liquidStyles.iconBox} ${liquidStyles.glowTextWhite} mt-4 cursor-pointer`}
          >
            Download Resume / CV
          </button> */}
        </div>
        <div className={`lg:max-w-lg w-full ${liquidStyles.card}`}>
          <Image
            src="/images/profile.JPG"
            alt="profile"
            width="500"
            height="500"
            className="h-auto w-full rounded-4xl"
          />
          <ul className="flex flex-row mt-4 gap-6 justify-center items-center">
            <li className={`text-2xl ${liquidStyles.glowTextWhite}`}><span className="text-amber-300">Find</span> Me On:</li>
            <li>
              <a href="https://github.com/HGarry" target="_blank" rel="noopener noreferrer">
                <GitHubIcon
                  sx={{ width: 48, height: 48 }}
                  className={`${liquidStyles.icon}`}
                />
              </a>
            </li>
            {/* <li>
              <a href="mailto:harrynotberry@gmail.com">
                <EmailIcon
                  sx={{ width: 48, height: 48 }}
                  className={`${liquidStyles.icon}`}
                />
              </a>
            </li> */}
            <li>
              <a href="https://www.linkedin.com/in/kaung-si-thu-hein/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon
                  sx={{ width: 48, height: 48 }}
                className={`${liquidStyles.icon}`}
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
