import React from "react";
import StarburstShape from "../../images/StarburstShape.svg";
import ProjectBox from "./ProjectBox";
import CodeCrack from "../../images/CodeCrackScreen.svg";
import WebPageSnap from "../../images/WebPageSnap.svg";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const FeatureProjects = () => {
  return (
    <div className=" lg:px-20" data-aos="fade-up">
      <div className="flex">
        <img className="w-10" src={StarburstShape} alt="" />
        <p className=" text-3xl md:text-6xl font-bold py-10">Feature Project</p>
      </div>
      <div>
        <ProjectBox
          img={CodeCrack}
          title="Code crack (Ongoing)"
          description="Website to prepare your coding interview which covers DSA and step wise guide "
          linkText="code-crack.pages.dev"
          tags={["React js", "Tailwind css"]}
          linkUrl="https://code-crack.pages.dev/"
        />
        <ProjectBox
          img={WebPageSnap}
          title="Web Page Snap"
          description="Website to to take picture perfect screenshot of any website using the URL of that website"
          linkText="webpagesnap.pages.dev"
          tags={["React js", "Tailwind css", "Node Js", "Puppeteer"]}
          linkUrl="https://webpagesnap.pages.dev/"
        />
        <NavLink to={"/projects"}>More Projects ↗</NavLink>
      </div>
    </div>
  );
};

export default FeatureProjects;
