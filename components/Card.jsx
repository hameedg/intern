import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-[#fff] flex w-[100%] h-[100%] border border-solid border-[#000] rounded-[25px] pl-[3rem] pr-[2rem] pt-[2.25rem] pb-[3.75rem]">
        <div className="flex flex-col">
          <div className="text-[#dfdfe4] font-clash font-[700] text-[40px] leading-[49px]  font-['ClashDisplay-Variable']">
            {props.name}
          </div>
          <div className="mt-[20px] font-clash font-[500] text-[24px] leading-[2.4rem] tracking-[0.02em] text-[#000]  font-['ClashDisplay-Variable']">
            {props.title}
          </div>
          <div>{props.tag}</div>

          <div className="mt-[20px] font-clash font-[500] text-[20px] leading-[2.4rem] tracking-[0.02em]  font-['ClashDisplay-Variable'] text-[#000]">
            {props.title1}
          </div>
          <div className="mt-[20px] font-inter font-[400] text-[1.125rem] leading-[1.75rem] tracking-[-0.01em]">
            {props.para}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

/*
 */
