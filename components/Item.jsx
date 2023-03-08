import React from "react";

const Item = (props) => {
  return (
    <div className="flex gap-x-[0.5rem] p-[1rem] items-center rounded-[1rem] bg-[#fff] shadow-sm md:p-[0.5rem] md:justify-center">
      <div className="w-[0.5rem] h-[0.5rem] rounded-[1rem] bg-[#2667ff] flex-grow-0 flex-shrink-0 basis-auto"></div>
      <div className="text-[1.2rem] leading-[1.2] font-[500]">{props.name}</div>
    </div>
  );
};

export default Item;
