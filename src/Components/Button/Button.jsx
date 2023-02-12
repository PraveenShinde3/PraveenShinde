import React from "react";

const Button = (props) => {
  return (
    <div>
      <a
        className="bg-black w-fit py-3 px-10 text-[#e6e2d9] font-bold"
        href={props.link}
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
