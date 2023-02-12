import React from "react";
import ProjectBox from "../../Components/FeatureProjects/ProjectBox";
import BinaryCode from "../../images/BinaryCode.svg";
import Notes from "../../images/Notes.svg";
import Password from "../../images/Password.svg";
import DockerImage from "../../images/cloud.svg";

const Project = () => {
  return (
    <div className="container mx-auto ">
      <div className=" mx-auto px-6 py-20 md:px-10 md:py-24 md:w-10/12">
        <p className=" text-3xl md:text-4xl font-bold py-10">Project</p>
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
          tags={["React js", "Tailwind css", "JavaScript"]}
          linkUrl="https://notes-webapp.pages.dev/"
        />
        <ProjectBox
          img={DockerImage}
          title="Dockerization of Node js App"
          description="Creates secure, random passwords for users to use for their various online accounts and information. The goal of the project is to provide users with a tool to easily generate strong and unique passwords, thereby increasing the security of their online accounts."
          linkText="Blog "
          tags={["Docker", "Linux", "Azure", "Node js"]}
          linkUrl="https://medium.com/@shindepraveen002/step-by-step-guide-to-dockerizing-a-node-js-application-115b903d8460"
        />
        <ProjectBox
          img={Password}
          title="Random Password Generator"
          description="Creates secure, random passwords for users to use for their various online accounts and information. The goal of the project is to provide users with a tool to easily generate strong and unique passwords, thereby increasing the security of their online accounts."
          linkText="generates-random-password.netlify.app"
          tags={["Html", "Css", "JavaScript"]}
          linkUrl="https://generates-random-password.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Project;
