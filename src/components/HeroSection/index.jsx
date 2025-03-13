import React from "react";
import Image from "next/image";
import { StyledHeroSection } from "./HeroSection.style";
import Banner from "../../../public/images/heroBanner.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <StyledHeroSection className="container">
      <div className="col-1">
        <h2>
          Hi, I'm <span className="primary-text">Umar Raza</span>
        </h2>
        <h2 className="title">
          <span className="primary-text">Front-End</span>
          <Typewriter
            words={[" Web Developer"]}
            loop={true}
            typeSpeed={50}
            delaySpeed={1000}
            cursor
          />
        </h2>
        <p>
          I specialize in crafting seamless, responsive, and visually appealing
          web applications. With expertise in modern front-end technologies like
          React.js, Next.js, and Styled-Components, I focus on building
          interactive user interfaces that enhance user experience. My goal is
          to create efficient, scalable, and accessible web solutions that align
          with the latest industry standards.
        </p>
      </div>
      <div className="col-2">
        <Image src={Banner} alt="Banner" className="banner" />
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
