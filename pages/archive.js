import React from "react";
import Item from "../components/Item";
import Logo from "../components/Logo";
import Target from "../components/Target";

const archive = () => {
  return (
    <>
      <div className="page-padding">
        <div className="pt-0 px-0 pb-[6rem]"></div>
        <div className="section1-container">
          <div className="rounded-[1rem] bg-[#f2f2f2]">
            <div className="pt-0 px-0 pb-[6rem]"></div>
            <h2 className="text-center mt-0 mb-0 text-[2.5rem] leading-[1.2] font-[700]">
              Our mentors are experienced
              <br></br>
              to help you with
            </h2>
            <div className="pt-0 px-0 pb-[2rem]"></div>
            <div className="flex flex-col justify-center items-center gap-[2rem] sm:flex-col sm:items-center md:gap-y-[1rem]">
              <div className="flex flex-row gap-[2rem] sm:flex-col sm:gap-y-[1rem] md:items-center md:gap-x-[1rem]">
                <Item name="Career Planning" />
                <Item name="Job Search" />
                <Item name="CV Writing" />
              </div>
              <div className="flex flex-row gap-[2rem] sm:flex-col sm:gap-y-[1rem] md:items-center md:gap-x-[1rem]">
                <Item name="Mock Interviews" />
                <Item name="Product Management" />
                <Item name="Data Analytics" />
              </div>{" "}
              <div className="flex flex-row gap-[2rem] sm:flex-col sm:gap-y-[1rem] md:items-center md:gap-x-[1rem]">
                <Item name="Growth Marketing" />
                <Item name="Sales" />
                <Item name="Marketing" />
                <Item name="Interview Preparations" />
              </div>
            </div>
            <div className="pt-0 px-0 pb-[2rem]"></div>
            <div className="flex justify-center">
              <div className="blue-button py-[0.875rem]">Book a mentor</div>
            </div>
            <div className="pt-0 px-0 pb-[6rem]"></div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[6rem]"></div>
      </div>
      <div className="pt-0 px-0 pb-[6rem]"></div>
      <div className="pt-0 px-0 pb-[6rem]"></div>
      <div className="overflow-hidden bg-[#1b1b1b] text-[#fff] ">
        <div className="page-padding">
          <div className="section1-container">
            <div className="flex pt-[4.4375rem] pb-[5rem] flex-col items-center text-center">
              <div className="mb-[1rem]">
                <div className="max-w-[23ch] mx-auto text-[3.7vh] my-0 leading-[1.2] font-[700]">
                  Connect with companies that are looking for talent
                </div>
              </div>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="blue-button py-[0.875rem]">Book a mentor</div>
              <div className="w-[85.51724137931035%] mt-[3rem] mx-auto ">
                <div className="grid justify-between auto-cols-[1fr] auto-rows-[max-content] gap-y-[1.5rem] grid-cols-[22.580645161290324%_22.580645161290324%_22.580645161290324%_22.580645161290324%] grid-rows-[max-content]">
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 px-0 pb-[6rem]"></div>
      <div className="page-padding">
        <div className="section1-container">
          <div className="flex overflow-hidden justify-between rounded-[1rem] bg-[#1b1b1b] ">
            <div className="flex py-[4rem] pr-0 pl-[4rem] flex-col justify-center flex-1 ">
              <h3 className="text-[#fff] mt-0 mb-0 text-[2rem] leading-[1.25] font-[700]">
                Don’t know where to
                <br></br>
                start your career?
              </h3>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="flex justify-start">
                <div className="blue-button py-[0.875rem]">
                  Get started now!
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center flex-1">
              <img
                src="https://global-uploads.webflow.com/632462c7dd8a9721c67948b1/633c2c989fe3ac3c3c358b75_qureos-opengraph-image.png"
                className="max-w-[102%] align-middle "></img>
            </div>
          </div>
          <div className="pt-0 px-0 pb-[6rem]"></div>
        </div>
      </div>
      <div className="pt-0 px-0 pb-[6rem]"></div>
      <div className="relative z-[1] bg-[#f4f5f7]">
        <div className="page-padding">
          <div className="section1-container">
            <div className="flex py-[5rem] flex-col items-center">
              <h2 className="my-0 text-[2.5rem] leading-[1.2] font-[700] ">
                Putting “you” at the center of it all.
              </h2>
              <div className="relative grid w-[100%] mt-[3.5rem] auto-cols-[1fr] auto-rows-[max-content] gap-[2.5rem] grid-cols-[1fr_1fr] grid-rows-[max-content]">
                <Target />
                <div className="flex justify-end">
                  <div className="w-[0%] h-[131.672px]"></div>
                  <div className="bg-[#fff] text-[#000] relative overflow-hidden w-[81.96428571428572%] pt-[1rem] pb-[1.5rem] px-[1.5rem] flex-grow-0 flex-shrink-0 basis-auto rounded-[1rem]">
                    <h3 className="relative mb-[0.75rem] text-[1.5rem] leading-[1.33] font-[600] tracking-[0.015625rem] mt-0 ">
                      Exclusive Mentors
                    </h3>
                    <p className="relative mb-0 mt-0 ">
                      Our mentors are the heart of Qureos. They’re impact driven
                      members of our community who go out of their way to make
                      your career goals a reality.
                    </p>
                  </div>
                </div>
                <Target />
                <div className="flex justify-end">
                  <div className="w-[0%] h-[131.672px]"></div>
                  <div className="bg-[#fff] text-[#000] relative overflow-hidden w-[81.96428571428572%] pt-[1rem] pb-[1.5rem] px-[1.5rem] flex-grow-0 flex-shrink-0 basis-auto rounded-[1rem]">
                    <h3 className="relative mb-[0.75rem] text-[1.5rem] leading-[1.33] font-[600] tracking-[0.015625rem] mt-0 ">
                      Exclusive Mentors
                    </h3>
                    <p className="relative mb-0 mt-0 ">
                      Our mentors are the heart of Qureos. They’re impact driven
                      members of our community who go out of their way to make
                      your career goals a reality.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 right-0 bottom-0 z-[-1] flex justify-center items-center">
                  <div className="flex w-[1px] h-[1px] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto ">
                    <div className="flex w-[20.4375rem] h-[20.4375rem] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto border-dashed border border-[#c3c4c6] rounded-[100%]">
                      <div className="flex w-[11.3125rem] h-[11.3125rem] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto border-solid border border-[#2667ff4d] bg-[#d1d2f94d] text-[4rem] leading-[1] text-center rounded-[100%]">
                        <div className="absolute opacity-[1]">✋</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default archive;
