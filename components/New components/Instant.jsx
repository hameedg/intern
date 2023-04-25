import React from "react";

const Instant = () => {
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 basis-auto justify-start items-start flex gl:flex-row relative min-w-[1px] max-w-[100%] ">
        <div className="flex-grow-0 flex-shrink-0 basis-auto justify-start items-stretch flex flex-col relative min-w-[1px] max-w-[100%] ">
          <span className="mt-[7px] block w-[1px] h-[1px] min-w-[1px] min-h-[1px] ml-[23px]"></span>
          <svg
            data-testid="geist-icon"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            style={{ color: "#0070f3" }}>
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="#0070f3"
              stroke="#0070f3"></path>
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              fill="none"
              stroke="#fff"></path>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 basis-auto justify-start items-stretch flex flex-col relative min-w-[1px] max-w-[100%] ml-[12px]">
          <div className="flex-1 justify-start items-stretch gl:basis-auto flex relative flex-col min-w-[1px] max-w-[100%] ">
            <h3 className="font-[700] text-[1.5rem] tracking-[-.02976rem] leading-[1.5] text-[#fff]">
              Instant edge deploys
            </h3>
          </div>
          <div className="flex-1 justify-start items-stretch gl:basis-auto flex relative flex-col min-w-[1px] max-w-[100%] mt-[5px]">
            <p className="max-w-[28ch] text-[1rem] font-[400] leading-[1.6] text-[#888]">
              Push to git and your website is live. Zero configuration required.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instant;
