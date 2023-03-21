import React from "react";

const CardF = (props) => {
  return (
    <>
      <div className="overflow-hidden p-[2rem] rounded-[1rem] bg-[#fff] border transition-all md:p-[1.5rem]">
        <div className="flex mb-[1rem] justify-between md:mb-[1.5rem] ">
          <div className="flex items-start ">
            <img
              src={props.img}
              className="block overflow-hidden w-[2.5rem] h-[2.5rem] mr-[1rem] flex-shrink-0 flex-grow-0 basis-auto rounded-[100%] object-cover"></img>
            <div className="">
              <p className="text-[0.875rem] leading-[1.43] font-[400] tracking-[0.015625rem] ">
                Manaal Khan
              </p>
              <p className="text-[#393939] text-[0.875rem] leading-[1.43] tracking-[0.015625rem] mb-0">
                UAE
              </p>
            </div>
          </div>
        </div>
        <p className="text-[0.875rem] tracking-[-0.015em] text-[#1b1b1b] leading-[1.75] font-[400] font-inter">
          {props.con}
        </p>
      </div>
    </>
  );
};

export default CardF;
