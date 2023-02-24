import React from "react";
import ExperienceBox from "./ExperienceBox";
import "aos/dist/aos.css";

const WorkExperience = () => {
  return (
    <div data-aos="fade-up" className="lg:px-20">
      <div>
        <p className=" text-3xl md:text-4xl font-bold py-10">Work Experience</p>
      </div>
      <ExperienceBox
        years="2021 - Present"
        role="System Engineer"
        company="TCS (Tata Consultuncy Service)"
        description="Troubleshooting software bugs, answering technical questions, and providing step-by-step instructions to resolve issues"
      />
    </div>
  );
};

export default WorkExperience;
