import React from "react";
import "aos/dist/aos.css";

const Logo = (props) => {
  return (
    <div
      data-aos="flip-left"
      className="flex-1 flex flex-col justify-center items-center gap-4"
    >
      <div className="text-center">
        <img className="w-16 md:w-20" src={props.iconSrc} alt="" />
      </div>
      <div className="text-center">
        <p className="font-bold">{props.iconName}</p>
      </div>
    </div>
  );
};

export default Logo;
