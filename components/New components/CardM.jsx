import React from "react";

const CardM = () => {
  return (
    <>
      <div className="overflow-hidden rounded-[1rem] bg-[#fff] shadow-md">
        <div className="relative flex overflow-hidden h-[120px] p-[1rem] flex-col justify-between items-start ">
          <div className="relative z-[20] inline py-[6px] px-[8px] rounded-[6px] bg-[#fe1755] text-[0.875rem] leading-[1.2] font-[500]">
            Product
          </div>
          <div className="z-[20] font-[700] relative text-[1.125rem] text-[#fff] font-['ClashDisplay-Variable']">
            Map the Customer Experience and Craft a Winning Value Proposition
          </div>
          <div
            className="absolute top-0 left-0 bottom-0 right-0 z-[11] overflow-hidden rounded-t-[0.5rem]"
            style={{
              backgroundImage:
                "linear-gradient(180deg,hsla(0,0%,100%,.1),rgba(0,0,0,.8) 75%)",
            }}></div>
          <img
            src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/63fc66fb7c31a3089302c139_PM%20Project-p-800.jpg"
            className="absolute left-0 top-0 right-0 bottom-0 z-[10] align-middle inline-block max-w-[100%]"></img>
        </div>
        <div className="p-[1rem] ">
          <p className="my-0 text-[1rem] leading-[1.5] font-[400]">
            From validating the problem to writing a compelling value
            proposition, learn the essential steps to creating a successful
            product.
          </p>
        </div>
        <div className="h-[1px] bg-[#e6e6e6]"></div>
        <div className="flex p-[1rem] items-center ">
          <a className="py-[6px] px-[12px] border border-solid border-[#e6e6e6] rounded-[0.5rem] bg-[#fff] text-[#1b1b1b] font-[500] inline-block cursor-pointer">
            Start Project
          </a>
        </div>
      </div>
    </>
  );
};

export default CardM;
