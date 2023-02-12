import React from "react";
import "aos/dist/aos.css";

const ExperienceBox = (props) => {
  return (
    <div
      data-aos="fade-right"
      className="my-10 border-[3px] border-black p-5 flex flex-col md:flex-row gap-10 hover:bg-slate-100"
    >
      <div className="w-full md:w-2/12">
        <p>{props.years}</p>
      </div>
      <div className="w-full md:w-10/12">
        <p className="font-bold">{props.role}</p>
        <p>{props.company}</p>
        <p className="py-2">{props.description}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
