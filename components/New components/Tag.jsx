import React from "react";

const Tag = (props) => {
  return (
    <>
      <div className=" flex items-center flex-col ">
        <div className="bg-[#F2F2F2] lg:relative py-[0.625rem] text-[1rem] leading-[1.063] flex px-[1rem] justify-center items-center ease-in font-inter text-[#000] rounded-[15px] tracking-[-0.015em] text-center cursor-pointer hover:bg-[#2667ff] hover:text-[#fff] font-[400]">
          {props.name}
        </div>
      </div>
    </>
  );
};

export default Tag;

/*
<div className="flex items-center flex-col">
<div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
  Start your journey today
</div>
</div>


*/
