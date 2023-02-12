import React from "react";

const Tag = (props) => {
  return (
    <div className="flex flex-wrap  gap-2 text-[10px] ">
      {props.tags !== "undefined" ? (
        props.tags.map((tag, index) => (
          <div key={index} className=" underline underline-offset-2  py-1">
            {tag}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Tag;
