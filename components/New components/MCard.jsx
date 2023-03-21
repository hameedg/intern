import React from "react";

const MCard = (props) => {
  return (
    <>
      <div className="flex items-center gap-x-[1.5rem] rounded-[1.25rem] p-[1rem] bg-[#fff] ">
        <div className="flex w-[4.375rem] h-[3.75rem] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto rounded-[0.5rem]">
          <div className="flex ">
            <div className="font-['ClashDisplay-Variable'] text-[#EDEDED] text-[3rem] leading-[59px] font-[700] text-center tracking-[-0.015em]">
              {props.no}
            </div>
          </div>
        </div>

        <div className="font-[400] text-[1rem] font-inter leading-[1.75] tracking-[-0.015em] lg:mb-[3px] items-center">
          {props.name}
        </div>
        {/* <div className="text-[0.875rem] text-[#808080] leading-[1.7] font-inter tracking-[-0.015em]">
          Expert-led live sessions that prepare you for the real world
        </div> */}
      </div>
    </>
  );
};

export default MCard;
