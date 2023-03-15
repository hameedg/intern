import { useState } from "react";

const FAQ = (props) => {
  const [bye, setBye] = useState(false);

  const click = (e) => {
    setBye((f) => !f);
  };

  return (
    <div className="p-[0.5rem] rounded-[1rem] bg-[#fff]">
      <div
        className={
          bye
            ? "md:pr-[2.6875rem] md:pl-[1rem] text-[#fff] bg-[#2667ff] relative py-[0.9375rem] px-[4.6875rem] rounded-[0.75rem] cursor-pointer"
            : "md:pr-[2.6875rem] md:pl-[1rem] text-[#000] bg-[#fff] relative py-[0.9375rem] px-[4.6875rem] rounded-[0.75rem] cursor-pointer"
        }
        onClick={click}>
        <h3 className="font-['ClashDisplay-Variable'] leading-[1.5] font-[500] text-[1.125rem]">
          {props.ques}
        </h3>
        <div className="md:top-[1.2rem] md:w-[1rem] md:h-[1rem] absolute left-auto top-[1.4125rem] right-[1rem] bottom-auto w-[1.25rem] h-[1.25rem]">
          <div className="w-full h-full justify-center items-center">
            <svg
              height="100%"
              viewBox="0 0 20 20"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2969_49330)">
                <path
                  d="M8.75 1.25L8.75 8.75L1.25 8.75C0.918479 8.75 0.600537 8.8817 0.366116 9.11612C0.131696 9.35054 -4.51605e-07 9.66848 -4.37114e-07 10C-4.22623e-07 10.3315 0.131696 10.6495 0.366116 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25L8.75 11.25L8.75 18.75C8.75 19.0815 8.88169 19.3995 9.11611 19.6339C9.35054 19.8683 9.66848 20 10 20C10.3315 20 10.6495 19.8683 10.8839 19.6339C11.1183 19.3995 11.25 19.0815 11.25 18.75L11.25 11.25L18.75 11.25C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75L11.25 8.75L11.25 1.25C11.25 0.918479 11.1183 0.600536 10.8839 0.366115C10.6495 0.131694 10.3315 -4.51605e-07 10 -4.37114e-07C9.66848 -4.22623e-07 9.35053 0.131694 9.11611 0.366115C8.88169 0.600536 8.75 0.91848 8.75 1.25Z"
                  fill="currentcolor"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={
          bye
            ? "overflow-hidden pr-[1.5rem] pl-[0.8125rem] rounded-[1rem] md:px-[1rem] ease-in transition-all delay-[700]"
            : "hidden"
        }>
        <div className="h-[1rem]"></div>
        <div className=""></div>
        <p className="text-[0.9375rem] leading-[1.75rem] tracking-[-0.015em] font-inter">
          {" "}
          {props.mat}
        </p>
        <div className="h-[1rem]"></div>
      </div>
    </div>
  );
};

export default FAQ;
