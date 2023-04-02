import React, { memo } from "react";
import CustomLink from "../CustomLink/CustomLink";
import "aos/dist/aos.css";
import Tag from "../Tag/Tag";

const ProjectBox = (props) => {
  let tags = props.tags;

  console.log(tags);
  return (
    <div
      data-aos="fade-up"
      className="flex lg:gap-10 p-2 flex-col lg:flex-row border-[3px] border-black  my-10 hover:bg-slate-100 "
    >
      <div className="w-full lg:w-6/12">
        <img className="w-full " src={props.img} alt="" />
      </div>
      <div className="w-full lg:w-6/12 px-4 py-4 flex flex-col justify-center lg:items-start">
        <h1 className="text-xl px-2 font-bold">{props.title}</h1>
        <p className="text-md opacity-70 p-2">{props.description}</p>
        <div className="px-2">
          <Tag tags={props.tags} />
        </div>

        <CustomLink text={props.linkText} url={props.linkUrl} />
      </div>
    </div>
  );
};

export default memo(ProjectBox);
