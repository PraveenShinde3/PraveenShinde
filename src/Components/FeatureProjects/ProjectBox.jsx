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
      className="flex gap-10 border-[3px] border-black p-5 my-10 hover:bg-slate-100 "
    >
      <div className="w-1/12 hidden lg:block">
        <img className="w-full " src={props.img} alt="" />
      </div>
      <div className="w-11/12">
        <h1 className="text-xl px-2 font-bold">{props.title}</h1>
        <p className="text-lg opacity-70 p-2">{props.description}</p>
        <div className="px-2">
          <Tag tags={props.tags} />
        </div>

        <CustomLink text={props.linkText} url={props.linkUrl} />
      </div>
    </div>
  );
};

export default memo(ProjectBox);
