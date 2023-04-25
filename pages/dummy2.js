import React, { useState } from "react";
import CardF from "../components/New components/CardF";
import Tag from "../components/New components/Tag";

const dummy2 = () => {
  const [open, setOpen] = useState(false);

  function handly() {
    setOpen(!open);
  }
  return (
    <>
      {/* <div className="bg-[#0c0c0c] text-[#f5f5f5]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto w-[100%]">
            <div className="pb-[6rem] md:pb-[3.5rem] lg:pb-[5rem]"></div>
            <div className="">
              <div className="grid auto-cols-[1fr] gap-[2rem] grid-cols-[2.75fr_1fr] grid-rows-[auto] md:grid-cols-[1fr]">
                <div className="">
                  <div className="flex box-border ">
                    <svg
                      width="101"
                      height="77"
                      viewBox="0 0 101 77"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.5676 36.3422H44.3581V77H0V45.6549C0 30.6637 3.10886 19.6096 9.32658 12.4926C15.6959 5.37562 26.1599 1.21141 40.7185 0L47.0878 20.6696C38.292 20.821 32.3018 21.9567 29.1171 24.0767C26.0841 26.1967 24.5676 30.2852 24.5676 36.3422ZM78.4797 36.3422H98.2703V77H53.9122V45.6549C53.9122 30.6637 57.021 19.6096 63.2387 12.4926C69.6081 5.37562 80.0721 1.21141 94.6306 0L101 20.6696C92.2042 20.821 86.214 21.9567 83.0293 24.0767C79.9962 26.1967 78.4797 30.2852 78.4797 36.3422Z"
                        fill="white"
                        fill-opacity="0.08"></path>
                    </svg>
                  </div>
                  <h3 className="mt-[-2rem] mb-0 text-[2rem] leading-[1.25] font-[700] sm:text-[1.5rem]">
                    If you are looking to stay competitive, get upskilled, and
                    join a network of industry experts and peers on the same
                    journey as yours, then joining the Qureos Community is
                    highly recommended.
                  </h3>
                  <div className="pb-[3rem] lg:pb-[2.5rem] md:pb-[1.5rem]"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-[1rem] leading-[1.5] font-[400]">
                      Abubakar Gana
                    </div>
                    <div className="text-[1rem] leading-[1.5] font-[400] opacity-[0.6]">
                      Founder, Outliers NG
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center rounded-[1rem] bg-[url('https://global-uploads.webflow.com/632462c7dd8a9721c67948b1/6375e2dd280e6959e67b47a4_abubakrghana.png')] bg-[50%_50%] bg-cover sm:h-[200px] md:h-[200px]">
                  <div className="flex h-[100%] w-[100%] justify-center items-center max-w-[100%] "></div>
                </div>
              </div>
            </div>

            <div className="pb-[6rem] md:pb-[3.5rem] lg:pb-[5rem]"></div>
          </div>
        </div>
      </div>
      <div className="page-padding">
        <div className="2xl:max-w-[62.5rem] max-w-[72.5rem] mx-auto">
          <div className="flex pt-[5.78125rem] pb-[9.8125rem] flex-col items-stretch md:pt-[1.5rem] md:pb-[3.3125rem] ">
            <div className="max-w-[28.5rem] mb-[2.5rem] md:mx-auto md:text-center ">
              <h2 className="mt-0 mb-0 text-[2.5rem] leading-[1.2] font-[700] md:text-[1.5rem] md:leading-[1.33] md:tracking-[0.015625rem] sm:text-[2rem]">
                Accelerating careers globaly
              </h2>
            </div>
            {!open ? (
              <>
                <div className="flex justify-between items-start md:flex-col md:items-stretch md:gap-y-[1rem] md:grid-cols-[100%]  ">
                  <div className="w-[48.28%] md:w-[100%]">
                    <div className="w-auto grid auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:gap-y-[1rem]">
                      <CardF />
                      <CardF />
                      <CardF />
                      <CardF />
                    </div>
                  </div>
                  <div className="w-[48.28%] md:w-[100%] pt-[3.125rem] grid flex-shrink-0 flex-grow-0 basis-auto auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:pt-0 md:gap-y-[1rem]">
                    <CardF />
                    <CardF />
                    <CardF />
                    <CardF />
                  </div>
                </div>
                <div className="block relative w-[100%] mt-[2.625rem] mb-[2px] items-center">
                  <div className="absolute inset-0 w-[100%] h-[1px]">
                    <div
                      className="rotate-[-180deg] absolute left-[0%] top-auto right-[0%] bottom-[0%] w-[100%] pb-[30.96551724%] md:pb-[55.62589928%] lg:pb-[51.96551724%] "
                      style={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 13.86%, rgba(255, 255, 255, 0) 100%)",
                      }}></div>
                  </div>
                </div>
                <div
                  onClick={handly}
                  className="block mx-auto py-[0.625rem] px-[1rem] border border-solid border-[#f2f2f2] rounded-[0.25rem] bg-transparent transition-all text-[#0c0c0c] cursor-pointer">
                  Show More
                </div>
              </>
            ) : (
              <div className="flex justify-between items-start md:flex-col md:items-stretch md:gap-y-[1rem] md:grid-cols-[100%]  ">
                <div className="w-[48.28%] md:w-[100%]">
                  <div className="w-auto grid auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:gap-y-[1rem]">
                    <CardF />
                    <CardF />
                    <CardF />
                    <CardF />

                    <CardF />
                    <CardF />
                  </div>
                </div>
                <div className="w-[48.28%] md:w-[100%] pt-[3.125rem] grid flex-shrink-0 flex-grow-0 basis-auto auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:pt-0 md:gap-y-[1rem]">
                  <CardF />
                  <CardF />
                  <CardF />
                  <CardF />
                  <CardF />
                  <CardF />
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}

      {/* terms and stuff */}
      {/* <div className="font-inter font-[400] leading-[160%] text-[16px] text-[#000] bg-[#fff] ">
        <div className="pt-[176px] px-0 pb-[144px] relative 2xl:pt-[112px] ">
          <div className="max-w-[1320px] my-0 mx-auto py-0 px-[50px] w-[100%] xl:max-w-[100%] xl:my-0 xl:mx-auto xl:py-0 xl:px-[16px] xl:w-[100%]">
            <div className="flex justify-between items-start max-w-[1080px] my-0 mx-auto gap-[40px] lg:flex-col lg:gap-0 ">
              <div
                style={{ boxShadow: "-10px 10px 0 #000" }}
                className="bg-[#fff] p-[40px] rounded-[8px] border border-solid border-[#000] flex-grow-0 flex-shrink-[1] basis-[532px] sticky top-[100px] lg:static lg:top-0 lg:flex-shrink lg:flex-grow lg:basis-[100%] lg:mb-[64px] lg:w-[100%] lg:p-[32px]  ">
                <ul className="flex flex-col text-[20px] leading-[133%] font-[400] tracking-[-0.02em] m-0 p-0 list-none ">
                  <li>Terms of use</li>
                  <li className="mt-[24px]">Privacy Policy</li>
                  <li className="mt-[24px]">Security Policy</li>
                  <li className="mt-[24px]">
                    Our fraud protection and security promise
                  </li>
                  <li className="mt-[24px]">
                    Klasha’s modern slavery statement
                  </li>
                  <li className="mt-[24px]">Klasha terms of service</li>
                  <li className="mt-[24px]">Contact us</li>
                </ul>
              </div>
              <div className="flex-grow-0 flex-shrink basis-[664px] ">
                <h4 className="mt-0 mb-[32px] before:h-[140px] before:mt-[-140px] text-[40px]">
                  Terms of use
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Tag />

    </>
  );
};

export default dummy2;
