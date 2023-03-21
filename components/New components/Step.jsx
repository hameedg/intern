import React from "react";

const Step = (props) => {
  return (
    <>
      <div>
        <h1 className="text-[#1b1b1b14] text-[6rem] leading-[1] m-0 font-[700]">
          {props.no}
        </h1>
        <div className="pb-[0.5rem]"></div>
        <div className="font-[500] text-[1rem] leading-[1.5] text-[#1b1b1b]">
          Get Started
        </div>
        <p className="text-[1rem] font-[400] text-[#1b1b1b] leading-[1.5]">
          Enroll and follow the instructions to get started with the project
        </p>
      </div>
    </>
  );
};

export default Step;
