import React from "react";
import Certification from "../../Components/Certification/Certification";
import FeatureProjects from "../../Components/FeatureProjects/FeatureProjects";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import Intro from "../../Components/Intro/Intro";
import Skills from "../../Components/Skills/Skills";
import WorkExperience from "../../Components/WorkExperience/WorkExperience";

import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <div className=" mx-auto px-6 py-20 md:px-10 md:py-24 md:w-10/12">
        <Intro />
        <HorizontalLine />
        <FeatureProjects />
        <HorizontalLine />
        <WorkExperience />
        <HorizontalLine />
        <Skills />
        <HorizontalLine />
        <Certification />
      </div>
    </div>
  );
};

export default Home;
