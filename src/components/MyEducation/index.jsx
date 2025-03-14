import React from "react";
import { StyledMyEducation } from "./MyEducation.style";
import { Typewriter } from "react-simple-typewriter";

const education = [
  {
    place: "Govt. Islamia College, Lahore",
    duration: "2020 – 2022",
    course: "Intermediate in Computer Science",
    desc: "During my ICS studies, I explored C++ which sparked my passion for web development and laid the groundwork for my journey into the tech industry.",
  },
  {
    place: "Virtual University of Pakistan",
    duration: "2022 – 2026",
    course: "B.S. in Computer Science",
    desc: "Pursuing a Bachelor's in Computer Science, I am gaining in-depth knowledge of programming and web technologies. My focus is on front-end and back-end development, with expertise in React.js, Next.js, and API integration.",
  },
];

const MyEducation = () => {
  return (
    <StyledMyEducation className="container">
      <h2>
        <span className="primary-text">My</span>{" "}
        <Typewriter
          words={["Education"]}
          loop={true}
          typeSpeed={50}
          delaySpeed={1000}
          cursor
        />
      </h2>
      <div className="education-wrap">
        {education?.map((data, index) => (
          <div className="education" key={index}>
            <div className="col">
              <h4>{data?.place}</h4>
              <span className="time">{data?.duration}</span>
            </div>
            <div className="circle"></div>
            <div className="col">
              <h4>{data?.course}</h4>
              <span className="desc">{data?.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </StyledMyEducation>
  );
};

export default MyEducation;
