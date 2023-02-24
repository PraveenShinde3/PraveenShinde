import React from "react";
import Logo from "./Logo";
import ReactLogo from "../../images/icons/react.svg";
import DockerLogo from "../../images/icons/docker.svg";
import AzureLogo from "../../images/icons/azure.svg";
import JavaLogo from "../../images/icons/java.svg";
import JavaScriptLogo from "../../images/icons/javascript.svg";
import JenkinsLogo from "../../images/icons/jenkins.svg";
import NodejsLogog from "../../images/icons/node-js.svg";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div data-aos="fade-up" className=" lg:px-20">
      <div>
        <p className=" text-3xl md:text-4xl font-bold py-10">Skills</p>
      </div>
      <div className="flex flex-wrap gap-20 lg:gap-10 m-10">
        <Logo iconSrc={ReactLogo} iconName="React" />
        <Logo iconSrc={JavaLogo} iconName="Java" />
        <Logo iconSrc={JavaScriptLogo} iconName="JavaScript" />
        <Logo iconSrc={AzureLogo} iconName="Azure" />
        <Logo iconSrc={DockerLogo} iconName="Docker" />
        <Logo iconSrc={JenkinsLogo} iconName="Jenkins" />
        <Logo iconSrc={NodejsLogog} iconName="Node Js" />
      </div>
    </div>
  );
};

export default Skills;
