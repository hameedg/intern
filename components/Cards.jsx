import { useState } from "react";

const Cards = () => {
  const [drop, setDrop] = useState(false);

  function handle() {
    setDrop(!drop);
  }
  return (
    <>
      {/* sm:max-w-[512px] md:max-w-[770px] lg:max-w-[1024px] */}
      <div className="relative">
        <div
          className={
            !drop
              ? "container rounded-md max-w-[62.5rem] mt-[120px] p-0 mx-auto bg-white mb-8 "
              : "container rounded-md max-w-[62.5rem] mt-[120px] p-0 mx-auto bg-white mb-8 100vh 100vw fixed top-0 right-0 bottom-0 left-0 backdrop-blur-[3px] " /**fixed */
          }
        >
          <div className="p-[0.9375rem] border rounded-sm">
            <p className="text-[0.8125rem] uppercase font-medium mb-[0.9375rem]">
              new Job on canvas
            </p>
            <div className="grid gl:grid-cols-3 gap-[0.9375rem] grid-rows-[auto] ms:grid-cols-1 dm:grid-cols-2">
              <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
                <button type="button" className="text-left w-full">
                  <div className="flex justify-between mb-2.5">
                    <img
                      width="90"
                      height="90"
                      className="rounded-md"
                      src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                      alt="company_logo"
                    ></img>
                    <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                      Internship
                    </div>
                  </div>
                  <h4 className="font-medium text-base leading-snug mb-2">
                    Product Manager
                  </h4>
                  <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                    <p className="hover:underline hover:text-highlight leading-4 text-sm">
                      Samsung Research America
                    </p>
                  </div>
                </button>
                <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      data-v-4a7785f2=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="bookmark"
                      role="img"
                      width="10.5"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className=" inline-block"
                    >
                      <path
                        data-v-4a7785f2=""
                        fill="currentColor"
                        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                      ></path>
                    </svg>
                    <span className="inline-block">Save</span>
                  </button>
                  <button
                    onClick={handle}
                    type="button"
                    className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bolt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                    >
                      <path
                        fill="white"
                        d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                        className=""
                      ></path>
                    </svg>
                    Get Referral
                  </button>
                </div>
              </div>
              <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
                <button type="button" className="text-left w-full">
                  <div className="flex justify-between mb-2.5">
                    <img
                      width="90"
                      height="90"
                      className="rounded-md"
                      src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                      alt="company_logo"
                    ></img>
                    <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                      Internship
                    </div>
                  </div>
                  <h4 className="font-medium text-base leading-snug mb-2">
                    Product Manager
                  </h4>
                  <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                    <p className="hover:underline hover:text-highlight leading-4 text-sm">
                      Samsung Research America
                    </p>
                  </div>
                </button>
                <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      data-v-4a7785f2=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="bookmark"
                      role="img"
                      width="10.5"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className=" inline-block"
                    >
                      <path
                        data-v-4a7785f2=""
                        fill="currentColor"
                        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                      ></path>
                    </svg>
                    <span className="inline-block">Save</span>
                  </button>
                  <button
                    onClick={handle}
                    type="button"
                    className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bolt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                    >
                      <path
                        fill="white"
                        d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                        className=""
                      ></path>
                    </svg>
                    Get Referral
                  </button>
                </div>
              </div>
              <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
                <button type="button" className="text-left w-full">
                  <div className="flex justify-between mb-2.5">
                    <img
                      width="90"
                      height="90"
                      className="rounded-md"
                      src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                      alt="company_logo"
                    ></img>
                    <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                      Internship
                    </div>
                  </div>
                  <h4 className="font-medium text-base leading-snug mb-2">
                    Product Manager
                  </h4>
                  <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                    <p className="hover:underline hover:text-highlight leading-4 text-sm">
                      Samsung Research America
                    </p>
                  </div>
                </button>
                <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      data-v-4a7785f2=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="bookmark"
                      role="img"
                      width="10.5"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className=" inline-block"
                    >
                      <path
                        data-v-4a7785f2=""
                        fill="currentColor"
                        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                      ></path>
                    </svg>
                    <span className="inline-block">Save</span>
                  </button>
                  <button
                    onClick={handle}
                    type="button"
                    className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bolt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                    >
                      <path
                        fill="white"
                        d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                        className=""
                      ></path>
                    </svg>
                    Get Referral
                  </button>
                </div>
              </div>
              <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
                <button type="button" className="text-left w-full">
                  <div className="flex justify-between mb-2.5">
                    <img
                      width="90"
                      height="90"
                      className="rounded-md"
                      src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
                      alt="company_logo"
                    ></img>
                    <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
                      Internship
                    </div>
                  </div>
                  <h4 className="font-medium text-base leading-snug mb-2">
                    Product Manager
                  </h4>
                  <div className="flex items-center cursor-pointer mb-3 break-words truncate">
                    <p className="hover:underline hover:text-highlight leading-4 text-sm">
                      Samsung Research America
                    </p>
                  </div>
                </button>
                <hr className="my-[0.9375rem] mx-[calc(-0.9375rem)] bg-border"></hr>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      data-v-4a7785f2=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="bookmark"
                      role="img"
                      width="10.5"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className=" inline-block"
                    >
                      <path
                        data-v-4a7785f2=""
                        fill="currentColor"
                        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
                      ></path>
                    </svg>
                    <span className="inline-block">Save</span>
                  </button>
                  <button
                    onClick={handle}
                    type="button"
                    className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bolt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className=" overflow-hidden inline-block h-4 mr-2 align-[-0.125em]"
                    >
                      <path
                        fill="white"
                        d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                      ></path>
                    </svg>
                    Get Referral
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {drop ? (
          <div className="bg-[#000000b3] block opacity-[1] z-[2000] text-center fixed top-0 left-0 w-[100%] h-[100%] overflow-x-hidden overflow-y-auto">
            <div className="max-w-[400px] min-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto flex items-center relative w-auto pointer-events-none ">
              <div className="relative flex flex-col w-[100%] pointer-events-auto bg-[#fff] bg-clip-padding rounded-[12px]">
                <div className="items-center flex-col text-center justify-center flex pt-[32px] pr-[32px] pl-[32px] pb-0 ">
                  <h2 className="text-[28px] mb-[8px] ">Log in or sign up</h2>
                  <p className="leading-[1.5] text-[16px] font-[400] mb-[8px] text-center">
                    You need to have an account to continue to that content.
                  </p>
                </div>
                <div className="relative flex-grow-[1] flex-shrink-[1] basis-auto pt-0 px-[32px] pb-[32px] ">
                  <div className="blue-button py-[0.6rem] border-[#2667ff]">
                    Sign Up
                  </div>
                  <div className="white-button mt-[10px]  border border-[#2667ff] hover:bg-[#f3f3f5] text-[#2667ff]">
                    Sign Up
                  </div>
                  <hr className="mt-[16px] mb-[16px] border border-[solid] border-[#e0e0e0]"></hr>
                  <div
                    className="white-button hover:bg-[#fff] text-[#2667ff]"
                    onClick={handle}
                  >
                    Close
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cards;
