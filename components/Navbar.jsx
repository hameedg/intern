import { useState } from "react";
import NavCard from "../components/NavCard";
import Link from "next/link";
import NavCard1 from "./NavCard1";
import NavCard3 from "./New components/NavCard3";
import Com from "../public/assets/Com";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);

  function handle() {
    setDrop(!drop);
  }
  function handly() {
    setOpen(!open);
  }
  return (
    <div className="navbar z-[999]">
      <div className="navbar-wrapper">
        <div className="navbar-inner max-w-[72.5rem] mx-auto">
          <div className="flex gap-[40px]">
            <div>
              <div className="logo-svg w-[9rem] font-['ClashDisplay-Variable'] font-[600] text-[1.25rem]">
                brightintern
              </div>
            </div>

            {/* <a
            className={
              "text-black bg-white text-sm rounded-full cursor-pointer relative flex leading-[1.6em] px-3 py-1"
            }
          >
            Resources
            <img
              src="https://klasha.com/_next/static/media/dropdown.827ae27f.svg"
              className="ml-[6px]"
            ></img>
          </a> */}
            <div className="navbar-list">
              <div className="list-items">
                <div className="mr-[0.5rem] cursor-pointer tracking-[-0.015em] z-[999] flex flex-col justify-center items-center rounded-[0.5rem] relative text-left mx-auto">
                  <div
                    className="font-inter button-css mr-[4px] text-[0.875rem] leading-[1.43] font-[500] tracking-[0.015635rem] bg-[#222222] rounded-[0.5rem] hover:bg-[#2667ff] flex h-auto pt-[0.375rem] pr-[0.83333rem] pl-[0.833333333rem] pb-[0.375rem] items-center relative align-top text-left mx-auto"
                    onClick={handle}>
                    Explore
                    <div className="ml-[6px]">
                      <svg
                        fill="#ffffff"
                        height="12px"
                        width="15px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />{" "}
                        </g>
                      </svg>
                    </div>
                    {/* <img
                    src="https://klasha.com/_next/static/media/dropdown.827ae27f.svg"
                    className="ml-[6px]"
                  ></img> */}
                  </div>
                  {drop ? (
                    <nav className="w-[22rem] p-[0.5rem] absolute left-[0%] top-[144%] right-[0%] bottom-[auto] z-[1000] rounded-[0.5rem] bg-[#0c0c0c]">
                      <div className="grid gap-x-[1rem] grid-cols-1">
                        {/* <Link href="/internships/frontend-development-internship">
                          <NavCard name="Frontend Development Internship" />
                        </Link>
                        <Link href="/internships/backend-development-internship">
                          <NavCard name="Backend Development Intenships" />
                        </Link>
                        <Link href="/internships/ui-ux-design-internship">
                          <NavCard name="UI/UX Development Internship" />
                        </Link>
                        <Link href="/internships/graphic-design-internship">
                          <NavCard name="Graphic Design Internship" />
                        </Link>
                        <Link href="/internships/content-writing-internship">
                          <NavCard name="Content Writing Internship" />
                        </Link>
                        <Link href="/internships/human-resources-internship">
                          <NavCard name="Human Resources Internship" />
                        </Link> */}
                        <Link href="/about">
                          <NavCard3
                            style="bg-[#fe1755]"
                            name="About us"
                            svg={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                class="w-7 h-7"
                                x="0"
                                y="0"
                                viewBox="0 0 24 24"
                                xmlSpace="preserve">
                                <g>
                                  <path
                                    d="M13.5 24h-3c-.7 0-1.5-.6-1.5-1.8v-2.1c0-1-.5-1.9-1.3-2.6C5.9 16.1 5 14.1 5 11.9c.1-3.8 3.2-6.8 6.9-6.9 1.9 0 3.7.7 5 2s2.1 3.1 2.1 5c0 2.1-.9 4.1-2.6 5.4-.9.7-1.4 1.8-1.4 2.8v2.3c0 .8-.7 1.5-1.5 1.5zM12 6c-3.2 0-5.9 2.7-6 5.9 0 1.9.8 3.7 2.3 4.8 1.1.9 1.7 2.1 1.7 3.4v2.1c0 .2 0 .8.5.8h3c.3 0 .5-.2.5-.5v-2.3c0-1.3.7-2.7 1.8-3.6 1.4-1.1 2.2-2.8 2.2-4.6 0-1.6-.6-3.1-1.8-4.3C15.1 6.6 13.6 6 12 6z"
                                    fill="#ffffff"
                                    data-original="#ffffff"></path>
                                  <path
                                    d="M14.5 21h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM12 3c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5zM18.7 5.8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7L19 5.7s-.2.1-.3.1zM23.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM20.1 20.6c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7 0 .1-.1.1-.3.1zM3.9 20.6c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7l-1.4 1.4c-.1.1-.2.1-.3.1zM2.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM5.3 5.8c-.1 0-.3 0-.4-.1L3.5 4.2c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7-.1.1-.2.2-.3.2zM16 12.5c-.3 0-.5-.2-.5-.5 0-1.9-1.6-3.5-3.5-3.5-.3 0-.5-.2-.5-.5s.2-.5.5-.5c2.5 0 4.5 2 4.5 4.5 0 .3-.2.5-.5.5z"
                                    fill="#ffffff"
                                    data-original="#ffffff"></path>
                                </g>
                              </svg>
                            }
                          />
                        </Link>
                        <Link href="/students">
                          <NavCard3
                            style="bg-[#8b31ff]"
                            name="For students"
                            svg={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                class="w-7 h-7"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve">
                                <g>
                                  <path
                                    d="M100.174 22.261h33.391v89.043c0 6.186 2.537 11.789 6.623 15.827-4.398 12.765-6.623 26.119-6.623 39.825 0 16.524 3.239 32.559 9.626 47.661 6.167 14.581 14.994 27.673 26.234 38.914 11.241 11.241 24.333 20.067 38.914 26.234 15.101 6.387 31.137 9.626 47.661 9.626s32.559-3.239 47.66-9.626c14.581-6.167 27.673-14.994 38.914-26.234 11.241-11.241 20.067-24.333 26.234-38.914 6.388-15.101 9.626-31.137 9.626-47.661 0-13.706-2.226-27.06-6.624-39.825 4.087-4.038 6.624-9.642 6.624-15.827V22.271h22.498v53.511c0 6.147 4.983 11.13 11.13 11.13s11.13-4.983 11.13-11.13V11.14c0-6.147-4.983-11.13-11.13-11.13L100.174 0c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.131 11.13 11.131zM256 267.13c-55.236 0-100.174-44.938-100.174-100.174 0-11.511 1.915-22.711 5.696-33.391h188.955c3.782 10.68 5.696 21.881 5.696 33.391.001 55.237-44.937 100.174-100.173 100.174zm100.173-155.826H155.826V22.261h200.348zM457.853 386.427c-6.167-14.581-14.993-27.673-26.233-38.913s-24.333-20.066-38.913-26.233c-15.101-6.387-31.136-9.626-47.66-9.626a11.134 11.134 0 0 0-7.871 3.26l-81.171 81.175-81.178-81.178a11.13 11.13 0 0 0-7.87-3.26c-16.524 0-32.559 3.239-47.661 9.626-14.581 6.167-27.673 14.994-38.914 26.234-11.241 11.241-20.067 24.333-26.234 38.914-6.387 15.102-9.626 31.137-9.626 47.661v22.261c0 14.865 5.789 28.841 16.3 39.352S85.309 512 100.174 512h311.652c14.865 0 28.841-5.789 39.352-16.3s16.3-24.487 16.3-39.352v-22.261c0-16.524-3.238-32.559-9.625-47.66zm-12.636 69.921c0 18.412-14.979 33.391-33.391 33.391H100.174c-18.412 0-33.391-14.979-33.391-33.391v-22.261c0-53.726 42.511-97.708 95.664-100.073l85.688 85.688a11.132 11.132 0 0 0 15.741 0l85.681-85.686c53.151 2.365 95.661 46.347 95.661 100.071v22.261z"
                                    fill="#ffffff"
                                    data-original="#ffffff"></path>
                                </g>
                              </svg>
                            }
                          />
                        </Link>
                        <Link href="membership">
                          <NavCard3
                            style="bg-[#2667ff]"
                            name="Membership"
                            svg={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-7 h-7"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve">
                                <path
                                  d="m428.336 176.832-35.419-25.634v-44.51a14.998 14.998 0 0 0-23.924-12.05l-35.812 26.53-41.973-14.234a14.999 14.999 0 0 0-19.019 19.019L286.4 167.86l-26.439 35.134a14.999 14.999 0 0 0 11.982 24.015h44.439l25.641 35.984a14.996 14.996 0 0 0 26.534-4.25l13.146-42.292 42.292-13.146a15 15 0 0 0 4.341-26.473zm-63.066 13.315a15 15 0 0 0-9.869 9.869l-6.507 20.933-12.57-17.641a14.993 14.993 0 0 0-12.213-6.295h-22.112l13.131-17.449a15 15 0 0 0 2.22-13.834l-6.996-20.632 20.631 6.997a14.995 14.995 0 0 0 13.743-2.152l18.196-13.481v22.394c0 4.81 2.308 9.329 6.204 12.148l17.342 12.551-21.2 6.592zm-100.162 77.9-21.208-21.21c-5.855-5.856-15.351-5.857-21.209 0-5.857 5.857-5.857 15.352 0 21.209l21.209 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.392 5.857-5.857 5.857-15.352 0-21.209zm63.627 63.624-21.208-21.208c-5.856-5.856-15.352-5.857-21.209 0-5.857 5.857-5.857 15.352 0 21.209l21.21 21.209a14.951 14.951 0 0 0 10.604 4.392c3.837 0 7.676-1.464 10.604-4.393 5.855-5.858 5.855-15.353-.001-21.209z"
                                  fill="#ffffff"
                                  data-original="#000000"
                                />
                                <path
                                  d="M494.426 163.512c0-12.017 4.681-23.315 13.178-31.813 2.816-2.812 4.396-6.627 4.396-10.604s-1.58-7.791-4.393-10.604L401.563 4.447a14.998 14.998 0 0 0-21.208 0c-8.497 8.497-19.796 13.177-31.813 13.177s-23.315-4.68-31.812-13.177c-5.856-5.856-15.352-5.856-21.206-.002L4.395 295.464a14.996 14.996 0 0 0-.002 21.211c17.541 17.542 17.541 46.085 0 63.627-5.857 5.857-5.857 15.352 0 21.209l106.044 106.044a14.998 14.998 0 0 0 21.208 0c8.497-8.498 19.796-13.177 31.812-13.177 12.017 0 23.315 4.68 31.813 13.177a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.675-1.464 10.602-4.391l291.127-291.02a14.997 14.997 0 0 0 .002-21.211c-8.499-8.499-13.179-19.798-13.179-31.814zm-17.579 41.361L204.824 476.796c-12.163-8.078-26.431-12.414-41.365-12.414-14.935 0-29.2 4.335-41.362 12.412l-86.956-86.955c16.516-24.972 16.516-57.731.002-82.703l123.46-123.414c-5.372 5.885-5.228 15.004.464 20.696l21.209 21.208a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.392 5.857-5.857 5.857-15.352 0-21.209l-21.209-21.208c-5.69-5.691-14.807-5.835-20.693-.466l147.594-147.54c12.162 8.077 26.431 12.413 41.364 12.413 14.935 0 29.201-4.335 41.363-12.412l86.944 86.943c-8.076 12.163-12.412 26.429-12.412 41.363 0 14.933 4.336 29.2 12.412 41.362z"
                                  data-original="#000000"
                                  fill="#ffffff"
                                />
                                <path
                                  d="M163.458 263.654c-5.856-5.857-15.352-5.857-21.208 0L78.622 327.28c-5.857 5.857-5.857 15.352 0 21.209 2.928 2.928 6.767 4.393 10.604 4.393s7.676-1.464 10.604-4.393l63.627-63.627c5.858-5.856 5.858-15.351.001-21.208zm42.418 42.417c-5.855-5.857-15.351-5.857-21.209 0l-63.627 63.626c-5.857 5.856-5.857 15.352 0 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.393l63.627-63.626c5.858-5.857 5.858-15.352.001-21.209zm42.416 42.418c-5.855-5.858-15.351-5.858-21.208 0l-63.627 63.627c-5.857 5.857-5.857 15.352 0 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.464 10.604-4.393l63.627-63.627c5.856-5.857 5.856-15.352 0-21.209z"
                                  fill="#ffffff"
                                  data-original="#000000"
                                />
                              </svg>
                            }
                          />
                        </Link>
                        <Link href="/community">
                          <NavCard3
                            style="bg-[#ffaa00]"
                            name="Community"
                            svg={<Com />}
                          />
                        </Link>
                      </div>
                    </nav>
                  ) : null}
                </div>
                <Link href="/missions">
                  <div className="button-css mr-[0.5rem] text-[0.875rem]">
                    Missions
                  </div>
                </Link>
                <Link href="/referrals">
                  <div className="button-css mr-[0.5rem]">Referrals</div>
                </Link>{" "}
                <Link href="/earn">
                  <div className="button-css mr-[0.5rem]">Earn</div>
                </Link>
                <Link href="/dream-internships">
                  <div className="button-css mr-[0.5rem]">
                    Dream Internships
                  </div>
                </Link>
                {/* ----------- */}
                {/* <div className="group inline-block relative mr-[0.5rem] cursor-pointer tracking-[-0.015em] z-[999] flex flex-col justify-center items-center rounded-[0.5rem] relative text-left mx-auto">
                  <div className=" font-inter button-css mr-[4px] text-[0.875rem] leading-[1.43] font-[500] tracking-[0.015635rem] bg-[#222222] rounded-[0.5rem] hover:bg-[#2667ff] flex h-auto pt-[0.375rem] pr-[0.83333rem] pl-[0.833333333rem] pb-[0.375rem] items-center relative align-top text-left mx-auto">
                    For You
                    <div className="ml-[6px]">
                      <svg
                        fill="#ffffff"
                        height="12px"
                        width="15px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />{" "}
                        </g>
                      </svg>
                    </div>
                 
                  </div>

                  <nav className=" hidden group-hover:block w-[24rem] p-[0.5rem] absolute left-[0%] top-[100%] right-[0%] bottom-[auto] z-[1000] rounded-[0.5rem] bg-[#0c0c0c]">
                    <div className="grid gap-x-[1rem] grid-cols-1">
                      <Link href="/dream-internships">
                        <NavCard1
                          name="Dream Internships"
                          text="Get rewarded with referrals to your dream internships."
                        />
                      </Link>
                      <NavCard1
                        name="Dream Internships"
                        text="Connect over a one-on-one meet with startups building the next big thing"
                      />
                    </div>
                  </nav>
                </div> */}
                {/* ------- */}
              </div>
            </div>
          </div>
          <div className="blue-button">
            <Link href="/signup">Sign Up</Link>
          </div>
          <div
            className="p-[10px] relative float-right text-[24px] md:block hidden md:ml-[5px]"
            onClick={handly}>
            <button class="flex items-center space-x-2 focus:outline-none">
              <div class="w-6 flex items-center justify-center relative">
                <span
                  className={
                    open
                      ? "transform transition w-full h-px bg-current absolute translate-y-0 rotate-45"
                      : "-translate-y-2 transform transition w-full h-px bg-current absolute"
                  }></span>

                <span
                  className={
                    open
                      ? "transform transition w-full h-px bg-current absolute opacity-0 translate-x-3"
                      : "opacity-100 transform transition w-full h-px bg-current absolute"
                  }></span>

                <span
                  className={
                    open
                      ? "transform transition w-full h-px bg-current absolute translate-y-0 -rotate-45"
                      : "translate-y-2 transform transition w-full h-px bg-current absolute"
                  }></span>
              </div>
            </button>
          </div>
          {open ? (
            <div className="flex fixed left-0 top-0 right-0 bottom-0 mt-[4.125rem] flex-col items-start dm:hidden">
              <div className="opacity-[1] items-start w-[100%] h-[100%] py-[3.375rem] pl-[2rem] flex-col bg-[#1b1b1b] flex">
                <div className="flex flex-col w-[100%]">
                  <ul>
                    <li className="py-[10px] w-[100%] border-b border-solid border-[#2d2d2d]">
                      <div
                        className="py-[20px] font-inter font-[400] text-[14px] leading-[24px] transition-all flex"
                        onClick={handle}>
                        <span className="mr-[8px] cursor-pointer">Explore</span>
                        <svg
                          fill="#ffffff"
                          height="12px"
                          width="15px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 330 330"
                          xmlSpace="preserve"
                          stroke="#ffffff"
                          className="mt-[6px]">
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              id="XMLID_225_"
                              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            />{" "}
                          </g>
                        </svg>
                      </div>
                      {drop ? (
                        <ul className="static max-h-[340px] transition-all">
                          <li className="flex-col bg-transparent pb-[24px] flex justify-center min-w-[100%]">
                            <ul className="ml-0 flex-col gap-0 flex-grow flex-shrink basis-[100%] flex flex-wrap">
                              <Link href="/about">
                                <li className="flex-shrink flex-grow basis-[100%] relative">
                                  <div className="font-inter ml-[35px] font-[400] text-[16px] leading-[160%] mb-[2px] text-[#fff] relative transition-all">
                                    About us
                                  </div>
                                  <div className="w-[28px] h-[28px] top-[2px] left-0 absolute">
                                    <div className="bg-[#fe1755] rounded-[5px]">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                        class="w-7 h-7"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve">
                                        <g>
                                          <path
                                            d="M13.5 24h-3c-.7 0-1.5-.6-1.5-1.8v-2.1c0-1-.5-1.9-1.3-2.6C5.9 16.1 5 14.1 5 11.9c.1-3.8 3.2-6.8 6.9-6.9 1.9 0 3.7.7 5 2s2.1 3.1 2.1 5c0 2.1-.9 4.1-2.6 5.4-.9.7-1.4 1.8-1.4 2.8v2.3c0 .8-.7 1.5-1.5 1.5zM12 6c-3.2 0-5.9 2.7-6 5.9 0 1.9.8 3.7 2.3 4.8 1.1.9 1.7 2.1 1.7 3.4v2.1c0 .2 0 .8.5.8h3c.3 0 .5-.2.5-.5v-2.3c0-1.3.7-2.7 1.8-3.6 1.4-1.1 2.2-2.8 2.2-4.6 0-1.6-.6-3.1-1.8-4.3C15.1 6.6 13.6 6 12 6z"
                                            fill="#000000"
                                            data-original="#000000"></path>
                                          <path
                                            d="M14.5 21h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zM12 3c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5zM18.7 5.8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7L19 5.7s-.2.1-.3.1zM23.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM20.1 20.6c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7 0 .1-.1.1-.3.1zM3.9 20.6c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7l-1.4 1.4c-.1.1-.2.1-.3.1zM2.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM5.3 5.8c-.1 0-.3 0-.4-.1L3.5 4.2c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7-.1.1-.2.2-.3.2zM16 12.5c-.3 0-.5-.2-.5-.5 0-1.9-1.6-3.5-3.5-3.5-.3 0-.5-.2-.5-.5s.2-.5.5-.5c2.5 0 4.5 2 4.5 4.5 0 .3-.2.5-.5.5z"
                                            fill="#000000"
                                            data-original="#000000"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </li>
                              </Link>
                              <Link href="/students">
                                <li className="flex-shrink flex-grow basis-[100%] relative mt-[10px]">
                                  <div className="font-inter ml-[35px] font-[400] text-[16px] leading-[160%] mb-[2px] text-[#fff] relative transition-all">
                                    For students
                                  </div>
                                  <div className="w-[28px] h-[28px] top-[2px] left-0 absolute">
                                    <div className="bg-[#8b31ff] rounded-[5px]">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                        class="w-7 h-7"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve">
                                        <g>
                                          <path
                                            d="M100.174 22.261h33.391v89.043c0 6.186 2.537 11.789 6.623 15.827-4.398 12.765-6.623 26.119-6.623 39.825 0 16.524 3.239 32.559 9.626 47.661 6.167 14.581 14.994 27.673 26.234 38.914 11.241 11.241 24.333 20.067 38.914 26.234 15.101 6.387 31.137 9.626 47.661 9.626s32.559-3.239 47.66-9.626c14.581-6.167 27.673-14.994 38.914-26.234 11.241-11.241 20.067-24.333 26.234-38.914 6.388-15.101 9.626-31.137 9.626-47.661 0-13.706-2.226-27.06-6.624-39.825 4.087-4.038 6.624-9.642 6.624-15.827V22.271h22.498v53.511c0 6.147 4.983 11.13 11.13 11.13s11.13-4.983 11.13-11.13V11.14c0-6.147-4.983-11.13-11.13-11.13L100.174 0c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.131 11.13 11.131zM256 267.13c-55.236 0-100.174-44.938-100.174-100.174 0-11.511 1.915-22.711 5.696-33.391h188.955c3.782 10.68 5.696 21.881 5.696 33.391.001 55.237-44.937 100.174-100.173 100.174zm100.173-155.826H155.826V22.261h200.348zM457.853 386.427c-6.167-14.581-14.993-27.673-26.233-38.913s-24.333-20.066-38.913-26.233c-15.101-6.387-31.136-9.626-47.66-9.626a11.134 11.134 0 0 0-7.871 3.26l-81.171 81.175-81.178-81.178a11.13 11.13 0 0 0-7.87-3.26c-16.524 0-32.559 3.239-47.661 9.626-14.581 6.167-27.673 14.994-38.914 26.234-11.241 11.241-20.067 24.333-26.234 38.914-6.387 15.102-9.626 31.137-9.626 47.661v22.261c0 14.865 5.789 28.841 16.3 39.352S85.309 512 100.174 512h311.652c14.865 0 28.841-5.789 39.352-16.3s16.3-24.487 16.3-39.352v-22.261c0-16.524-3.238-32.559-9.625-47.66zm-12.636 69.921c0 18.412-14.979 33.391-33.391 33.391H100.174c-18.412 0-33.391-14.979-33.391-33.391v-22.261c0-53.726 42.511-97.708 95.664-100.073l85.688 85.688a11.132 11.132 0 0 0 15.741 0l85.681-85.686c53.151 2.365 95.661 46.347 95.661 100.071v22.261z"
                                            fill="#000000"
                                            data-original="#000000"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </li>
                              </Link>
                              <Link href="/membership">
                                <li className="flex-shrink flex-grow basis-[100%] relative mt-[10px]">
                                  <div className="font-inter ml-[35px] font-[400] text-[16px] leading-[160%] mb-[2px] text-[#fff] relative transition-all">
                                    Membership
                                  </div>
                                  <div className="w-[28px] h-[28px] top-[2px] left-0 absolute">
                                    <div className="bg-[#2667ff] rounded-[5px]">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-7 h-7"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve">
                                        <path
                                          d="m428.336 176.832-35.419-25.634v-44.51a14.998 14.998 0 0 0-23.924-12.05l-35.812 26.53-41.973-14.234a14.999 14.999 0 0 0-19.019 19.019L286.4 167.86l-26.439 35.134a14.999 14.999 0 0 0 11.982 24.015h44.439l25.641 35.984a14.996 14.996 0 0 0 26.534-4.25l13.146-42.292 42.292-13.146a15 15 0 0 0 4.341-26.473zm-63.066 13.315a15 15 0 0 0-9.869 9.869l-6.507 20.933-12.57-17.641a14.993 14.993 0 0 0-12.213-6.295h-22.112l13.131-17.449a15 15 0 0 0 2.22-13.834l-6.996-20.632 20.631 6.997a14.995 14.995 0 0 0 13.743-2.152l18.196-13.481v22.394c0 4.81 2.308 9.329 6.204 12.148l17.342 12.551-21.2 6.592zm-100.162 77.9-21.208-21.21c-5.855-5.856-15.351-5.857-21.209 0-5.857 5.857-5.857 15.352 0 21.209l21.209 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.392 5.857-5.857 5.857-15.352 0-21.209zm63.627 63.624-21.208-21.208c-5.856-5.856-15.352-5.857-21.209 0-5.857 5.857-5.857 15.352 0 21.209l21.21 21.209a14.951 14.951 0 0 0 10.604 4.392c3.837 0 7.676-1.464 10.604-4.393 5.855-5.858 5.855-15.353-.001-21.209z"
                                          data-original="#000000"
                                        />
                                        <path
                                          d="M494.426 163.512c0-12.017 4.681-23.315 13.178-31.813 2.816-2.812 4.396-6.627 4.396-10.604s-1.58-7.791-4.393-10.604L401.563 4.447a14.998 14.998 0 0 0-21.208 0c-8.497 8.497-19.796 13.177-31.813 13.177s-23.315-4.68-31.812-13.177c-5.856-5.856-15.352-5.856-21.206-.002L4.395 295.464a14.996 14.996 0 0 0-.002 21.211c17.541 17.542 17.541 46.085 0 63.627-5.857 5.857-5.857 15.352 0 21.209l106.044 106.044a14.998 14.998 0 0 0 21.208 0c8.497-8.498 19.796-13.177 31.812-13.177 12.017 0 23.315 4.68 31.813 13.177a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.675-1.464 10.602-4.391l291.127-291.02a14.997 14.997 0 0 0 .002-21.211c-8.499-8.499-13.179-19.798-13.179-31.814zm-17.579 41.361L204.824 476.796c-12.163-8.078-26.431-12.414-41.365-12.414-14.935 0-29.2 4.335-41.362 12.412l-86.956-86.955c16.516-24.972 16.516-57.731.002-82.703l123.46-123.414c-5.372 5.885-5.228 15.004.464 20.696l21.209 21.208a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.392 5.857-5.857 5.857-15.352 0-21.209l-21.209-21.208c-5.69-5.691-14.807-5.835-20.693-.466l147.594-147.54c12.162 8.077 26.431 12.413 41.364 12.413 14.935 0 29.201-4.335 41.363-12.412l86.944 86.943c-8.076 12.163-12.412 26.429-12.412 41.363 0 14.933 4.336 29.2 12.412 41.362z"
                                          data-original="#000000"
                                        />
                                        <path
                                          d="M163.458 263.654c-5.856-5.857-15.352-5.857-21.208 0L78.622 327.28c-5.857 5.857-5.857 15.352 0 21.209 2.928 2.928 6.767 4.393 10.604 4.393s7.676-1.464 10.604-4.393l63.627-63.627c5.858-5.856 5.858-15.351.001-21.208zm42.418 42.417c-5.855-5.857-15.351-5.857-21.209 0l-63.627 63.626c-5.857 5.856-5.857 15.352 0 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.465 10.604-4.393l63.627-63.626c5.858-5.857 5.858-15.352.001-21.209zm42.416 42.418c-5.855-5.858-15.351-5.858-21.208 0l-63.627 63.627c-5.857 5.857-5.857 15.352 0 21.209a14.952 14.952 0 0 0 10.604 4.393c3.837 0 7.676-1.464 10.604-4.393l63.627-63.627c5.856-5.857 5.856-15.352 0-21.209z"
                                          data-original="#000000"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </li>
                              </Link>
                              <Link href="/community">
                                <li className="flex-shrink flex-grow basis-[100%] relative mt-[10px]">
                                  <div className="font-inter ml-[35px] font-[400] text-[16px] leading-[160%] mb-[2px] text-[#fff] relative transition-all">
                                    Community
                                  </div>
                                  <div className="w-[28px] h-[28px] top-[2px] left-0 absolute">
                                    <div className="bg-[#ffaa00] rounded-[5px]">
                                      <Com />
                                    </div>
                                  </div>
                                </li>
                              </Link>
                            </ul>
                          </li>
                        </ul>
                      ) : null}
                      {/* ------ */}
                    </li>
                  </ul>
                </div>
                <div className="pt-0 pl-0 pr-0 pb-[1.125rem]"></div>

                <div className="flex flex-col">
                  <div className="pt-0 pl-0 pr-0 pb-[1.125rem]"></div>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/missions">Missions</Link>
                  </p>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/referrals">Referrals</Link>
                  </p>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/earn">Earn</Link>
                  </p>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/dream-internships">Dream Internships</Link>
                  </p>
                </div>
                <div className="blue-button">Become a Member</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
