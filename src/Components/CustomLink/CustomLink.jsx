import React from "react";

const CustomLink = (props) => {
  return (
    <div className="p-2 font-bold">
      <a href={props.url} target="_blank" rel="noreferrer">
        <span className="underline underline-offset-4">{props.text}</span> ↗
      </a>
    </div>
  );
};

export default CustomLink;
