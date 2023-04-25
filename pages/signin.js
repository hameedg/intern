import React from "react";
import Footer from "../components/Footer";
import Instant from "../components/New components/Instant";

const signin = () => {
  return (
    <>
      <div className="box-border min-h-[100vh] relative bg-[#000] text-[#fff]">
        <div className="absolute top-0 left-0 h-[100%] w-[50vw] border-r border-solid border-[#333] bg-[#111] z-[0] lg:hidden"></div>
        <div className="max-w-[100%] mx-auto w-[100%] px-[24px]">
          <div className="flex-1 justify-start items-center gl:flex-row gl:flex-wrap min-h-[100vh] pb-[48px] flex relative min-w-[1px] max-w-[100%]">
            <div className="flex-1 justify-center items-center gl:ml-0 flex flex-col relative min-w-[1px] max-w-[100%]">
              <div>
                <div className="flex-grow-0 flex-shrink-0 basis-auto justify-start items-start flex flex-col relative min-w-[1px] max-w-[100%]  ">
                  <span className="mt-[47px] block w-[1px] h-[1px] min-w-[1px] min-h-[1px] ml-[23px] "></span>
                  <div className="logo-svg w-[9rem] font-['ClashDisplay-Variable'] font-[600] text-[1.25rem] text-[#fff]">
                    brightintern
                  </div>
                  <span className="mt-[47px] block w-[1px] h-[1px] min-w-[1px] min-h-[1px] ml-[23px] "></span>

                  <div className="flex-1 justify-start items-stretch gl:basis-auto gl:mt-0 flex flex-col relative min-w-[1px] max--[100%] ">
                    <div className="flex-grow-0 flex-shrink-0 basis-auto justify-start items-stretch gl:mt-0 flex flex-col relative min-w-[1px] max-w-[100%]  ">
                      <Instant />
                      <div className="mt-[24px]">
                        <Instant />
                      </div>
                      <div className="mt-[24px]">
                        <Instant />
                      </div>
                      <div className="mt-[24px]">
                        <Instant />
                      </div>
                    </div>
                    <span className="mt-[23px] block w-[1px] h-[1px] min-w-[1px] min-h-[1px] ml-[23px] "></span>
                    <div className="flex-1 justify-start items-stretch flex flex-col relative min-w-[1px] max-w-[100%] mt-[24px]">
                      <small className="text-[0.875rem] tracking-[0.1rem] mt-0 pl-0 text-[#888] font-[700] uppercase mb-[24px] ">
                        Proudly Serving Amazing Companies
                      </small>
                      <span className="mt-[11px] block w-[1px] h-[1px] min-w-[1px] min-h-[1px] ml-[23px]"></span>
                      <div className="grid auto-cols-[1fr] auto-rows-auto grid-cols-[1fr_1fr_1fr_1fr] ">
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ce0065bd70d4d4c7589_airbnb.svg"></img>
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ca7f704a3823a2d86fc_netflix.svg"></img>{" "}
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4c863f6855096fb71819_meta.svg"></img>{" "}
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cd668f6c35385fda40b_spotify.svg"></img>{" "}
                      </div>
                      <div className="grid auto-cols-[1fr] auto-rows-auto grid-cols-[1fr_1fr_1fr_1fr] mt-[24px]">
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ccb639fb5b7da395f93_amazon.svg"></img>{" "}
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cc2e3351f353bbe4c14_oracle.svg"></img>{" "}
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cbbdd6a138a4bca22cb_microsoft.svg"></img>{" "}
                        <img
                          className="relative flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem] w-[8rem]"
                          src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cb183f8c0be558447e5_google.svg"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 justify-start items-stretch ml-[144px] flex flex-col relative min-w-[1px] max-w-[100%]]">
              <div className="pt-[48px] max-w-[360px] flex-1 justify-start items-stretch">
                <h1 className="font-[600] text-[3rem] tracking-[-0.066875rem] my-0 leading-[1.2] text-center">
                  Join the best
                  <br></br>
                  frontend teams
                </h1>
                <span className="block mt-[47px] w-[1px] h-[1px] ml-[23px]"></span>
                <div className="flex flex-col items-center justify-start ">
                  <div className="w-[100%] max-w-[320px] ">
                    <span className="block relative rounded-[5px] ">
                      <button className="min-w-[100%] min-h-[100%] text-[#fff] bg-[#24292e] border border-solid border-[#24292e] h-[48px] text-[1rem] leading-[1.5rem] rounded-[5px] px-[12px] flex justify-center items-center transition-all relative cursor-pointer">
                        <span className="flex mr-[6px] ">
                          <svg
                            aria-label="github"
                            height="20"
                            viewBox="0 0 14 14"
                            width="20">
                            <path
                              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                              fill="currentColor"
                              fill-rule="nonzero"></path>
                          </svg>
                        </span>
                        <span>Continue with GitHub</span>
                      </button>
                    </span>
                    <span className="block mt-[11px] w-[1px] h-[1px] ml-[23px]"></span>
                    <span className="block relative rounded-[5px] ">
                      <button className="min-w-[100%] min-h-[100%] text-[#fff] bg-[#24292e] border border-solid border-[#24292e] h-[48px] text-[1rem] leading-[1.5rem] rounded-[5px] px-[12px] flex justify-center items-center transition-all relative cursor-pointer">
                        <span className="flex mr-[6px] ">
                          <svg
                            aria-label="github"
                            height="20"
                            viewBox="0 0 14 14"
                            width="20">
                            <path
                              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                              fill="currentColor"
                              fill-rule="nonzero"></path>
                          </svg>
                        </span>
                        <span>Continue with GitHub</span>
                      </button>
                    </span>
                    <span className="block mt-[11px] w-[1px] h-[1px] ml-[23px]"></span>{" "}
                    <span className="block relative rounded-[5px] ">
                      <button className="min-w-[100%] min-h-[100%] text-[#fff] bg-[#24292e] border border-solid border-[#24292e] h-[48px] text-[1rem] leading-[1.5rem] rounded-[5px] px-[12px] flex justify-center items-center transition-all relative cursor-pointer">
                        <span className="flex mr-[6px] ">
                          <svg
                            aria-label="github"
                            height="20"
                            viewBox="0 0 14 14"
                            width="20">
                            <path
                              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                              fill="currentColor"
                              fill-rule="nonzero"></path>
                          </svg>
                        </span>
                        <span>Continue with GitHub</span>
                      </button>
                    </span>
                    <span className="block mt-[23px] w-[1px] h-[1px] ml-[23px]"></span>{" "}
                    <hr className="border-b border-solid border-[#333] mt-[-1px]"></hr>
                    <span className="block mt-[23px] w-[1px] h-[1px] ml-[23px]"></span>{" "}
                    <span className="block relative rounded-[5px] ">
                      <button className="min-w-[100%] min-h-[100%] text-[#fff] bg-[#24292e] border border-solid border-[#24292e] h-[48px] text-[1rem] leading-[1.5rem] rounded-[5px] px-[12px] flex justify-center items-center transition-all relative cursor-pointer">
                        <span className="flex mr-[6px] ">
                          <svg
                            aria-label="github"
                            height="20"
                            viewBox="0 0 14 14"
                            width="20">
                            <path
                              d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                              fill="currentColor"
                              fill-rule="nonzero"></path>
                          </svg>
                        </span>
                        <span>Continue with GitHub</span>
                      </button>
                    </span>
                    <span className="block mt-[23px] w-[1px] h-[1px] ml-[23px]"></span>{" "}
                    <div className="text-center justify-start items-stretch ">
                      <span className="text-[#3291ff] ">
                        Continue with Email →
                      </span>
                    </div>
                  </div>
                </div>
                <span className="block mt-[47px] w-[1px] h-[1px] ml-[23px]"></span>{" "}
                <div className="flex justify-center">
                  <div className="max-w-[35ch] text-[1rem] font-[400] leading-[1.6] text-[#888]">
                    By clicking continue, you agree to our
                    <div className="inline-flex items-center text-[#fff] ">
                      Terms of Service
                    </div>
                    &nbsp; and
                    <div className="inline-flex items-center text-[#fff] ">
                      &nbsp; Privacy Policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signin;

/*

*/
