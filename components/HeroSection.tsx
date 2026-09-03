import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { liquidStyles } from "./styles/styles";
import { FadeIn } from "./Animation";
import DownloadCVButton from "./DownloadCV";

function HeroSection() {
  return (
    <section
      id="home"
      // style={{ backgroundImage: "url('/images/hero.jpg')" }}
      className="lg:w-screen w-full bg-cover overflow-hidden p-4 sm:p-6 md:p-8 lg:p-0 lg:pt-5 lg:px-8 flex flex-col justify-center pt-36 scroll-mt-24"
    >
      <div className="lg:w-[80%] md:w-[90%] mx-auto flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between lg:gap-0 lg:h-screen">
        <div className={`left w-full lg:w-xl lg:p-5`}>
          <FadeIn direction="right" delay={0.3}>
            <h1
              className={`text-5xl mb-6 sm:text-6xl lg:text-7xl lg:mb-12 ${liquidStyles.heroHeadline} `}
            >
              Hi, I&apos;m <span className="text-amber-300"> Harry</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <p className={`${liquidStyles.glowTextCyan} text-2xl`}>
              Frontend Developer crafting clean, responsive, and data-driven web
              applications with React, Next.js, and Tailwind CSS. Focused on
              building production-ready user interfaces with solid state
              management and intuitive interactions.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <button
              className={`${liquidStyles.buttonHero} ${liquidStyles.glowTextWhite} cursor-pointer mt-4 mr-2`}
            >
              <a href="#projects" rel="noopener noreferrer">
                View Projects
              </a>
            </button>
            <DownloadCVButton />
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={0.3}>
          <div className={`lg:max-w-lg w-full ${liquidStyles.card}`}>
            <Image
              src="/images/profile.JPG"
              alt="Harry's profile picture"
              width={400}
              height={400}
              priority
              quality={80}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 400px"
              className="h-auto w-full rounded-4xl object-cover"
            />
            <ul className="flex flex-row mt-4 gap-6 justify-center items-center">
              <li className={`text-2xl ${liquidStyles.glowTextWhite}`}>
                <span className="text-amber-300">Find</span> Me On:
              </li>
              <li>
                <a
                  href="https://github.com/HGarry"
                  target="_blank"
                  aria-label="GitHub Profile"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://www.linkedin.com/in/kaung-si-thu-hein/"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    sx={{ width: 48, height: 48 }}
                    className={`${liquidStyles.icon}`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default HeroSection;
