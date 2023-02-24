import React from "react";
import Button from "../Button/Button";
import CustomLink from "../CustomLink/CustomLink";
import { toast } from "react-toastify";
import CopyIcon from "../../images/copy.svg";
import "react-toastify/dist/ReactToastify.css";

const Intro = () => {
  const notify = () => {
    toast.success("Copied", {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("shindepraveen64@gmail.com");
    notify();
  };

  return (
    <div className="py-10 lg:py-20 lg:px-20" data-aos="fade-up">
      <p className="px-2 text-xl">Praveen Shinde,</p>
      <p className=" text-6xl font-bold py-10">
        Software Developer building future with code.
      </p>
      <Button text="Download CV" link="" />
      <p className="py-32 text-xl">
        "Hello, I am <span className="font-bold">Praveen Shinde</span>, a
        skilled software developer and devops professional based in Mumbai ,
        with over <span className="font-bold">2 years</span> of experience in
        the field. I am currently a part of the dynamic team at
        <span className="font-bold"> TCS</span> where I have been able to work
        on diverse projects and gain valuable industry insights.
        <br />
        <br /> My expertise in various programming languages and development
        frameworks allows me to bring complex ideas to life and deliver
        high-quality, scalable software solutions.
        <br />
        <br />I am driven by the desire to learn, grow, and make a positive
        impact in the world through technology. I am eager to share my past
        projects and experiences through this portfolio, and I hope it will
        provide you with a glimpse into my skills and passion for software
        development and devops. Thank you for visiting my website!"
      </p>
      <div>
        <CustomLink
          url="https://leetcode.com/shindepraveen002/"
          text="leetcode"
        />
        <CustomLink url="https://github.com/PraveenShinde3" text="github" />
        <div
          className="flex h-10 p-2 gap-2 w-fit cursor-pointer "
          onClick={copyToClipboard}
        >
          <p className="underline underline-offset-4 font-bold ">
            shindepraveen002@gmail.com
          </p>
          <img className="w-fit" src={CopyIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
