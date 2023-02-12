import React from "react";
import StarburstShape from "../../images/StarburstShape.svg";
import ProjectBox from "./ProjectBox";
import BinaryCode from "../../images/BinaryCode.svg";
import Notes from "../../images/Notes.svg";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const FeatureProjects = () => {
  return (
    <div className=" md:px-20" data-aos="fade-up">
      <div className="flex">
        <img className="w-10" src={StarburstShape} alt="" />
        <p className=" text-3xl md:text-6xl font-bold py-10">Feature Project</p>
      </div>
      <div>
        <ProjectBox
          img={BinaryCode}
          title="Code crack"
          description="Website to prepare your coding interview which covers DSA and step wise guide "
          linkText="code-crack.pages.dev"
          tags={["React js", "Tailwind css"]}
          linkUrl="https://code-crack.pages.dev/"
        />
        <ProjectBox
          img={Notes}
          title="Notes Web App"
          description="Effortlessly store and manage your notes, to-do lists, ideas, and anything else you need to remember, all in one accessible platform."
          linkText="notes-webapp.pages.dev"
          tags={["React js", "Tailwind css","JavaScript"]}
          linkUrl="https://notes-webapp.pages.dev/"
        />
        <NavLink to={"/projects"}>More Projects ↗</NavLink>
      </div>
    </div>
  );
};

export default FeatureProjects;
