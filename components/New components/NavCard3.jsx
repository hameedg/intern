import React from "react";

const NavCard3 = (props) => {
  return (
    <>
      <div className="flex items-start gap-x-[0.75rem] rounded-[1rem] p-[1rem] hover:bg-[#1b1b1b]">
        <div
          className={`flex w-[3rem] h-[3rem] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto rounded-[0.5rem] ${props.style}`}>
          <div className="flex ">{props.svg}</div>
        </div>
        <div>
          <div className="font-[400] text-[1rem] font-inter leading-[1.43] tracking-[0.015625rem] ">
            {props.name}
          </div>
          <div className="text-[0.825rem] text-[grey] ">
            Get matched to unique job opportunities according to your interest
            and expertise
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCard3;

{
  /* <div className="flex p-[1rem] items-start gap-x-[0.75rem] rounded-[1rem] transition-all duration-[0.3s] max-w-[100%] ">
<div className="bg-[#fe1755] flex w-[3rem] h-[3rem] items-center flex-grow-0 flex-shrink-0 basis-auto rounded-[0.5rem] ">
  <div className="flex w-[24px] h-[24px] ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"></path>
    </svg>
  </div>
  <div className="">
    <div className="font-[400] text-[1rem] font-inter leading-[1.43] tracking-[0.015625rem] ">
      Jobs
    </div>
    <div className="text-[0.825rem] text-[grey] ">
      Get matched to unique job opportunities according to your interest
      and expertise
    </div>
  </div>
</div>
</div> */
}
