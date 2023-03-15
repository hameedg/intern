import { useState } from "react";
import NavCard from "../components/NavCard";
import Link from "next/link";
import NavCard1 from "./NavCard1";

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
        <div className="navbar-inner">
          <a className="navbar-logo">
            <div className="logo-svg w-[9rem] font-['ClashDisplay-Variable'] font-[600] text-[1.25rem]">
              brightintern
            </div>
          </a>

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
                  Internships
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
                      <Link href="/internships/frontend-development-internship">
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
                      </Link>
                    </div>
                  </nav>
                ) : null}
              </div>
              <Link href="/about">
                <div className="button-css mr-[0.5rem]">About</div>
              </Link>
              <Link href="/community">
                <div className="button-css mr-[0.5rem]">Community</div>
              </Link>{" "}
              <Link href="/earn">
                <div className="button-css mr-[0.5rem]">Earn</div>
              </Link>{" "}
              {/* ----------- */}
              <div className="group inline-block relative mr-[0.5rem] cursor-pointer tracking-[-0.015em] z-[999] flex flex-col justify-center items-center rounded-[0.5rem] relative text-left mx-auto">
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
                  {/* <img
                    src="https://klasha.com/_next/static/media/dropdown.827ae27f.svg"
                    className="ml-[6px]"
                  ></img> */}
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
              </div>
              {/* ------- */}
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
              <div className="opacity-[1] items-start w-[100%] h-[100%] p-[3.375rem] flex-col bg-[#1b1b1b] flex">
                <div className="flex flex-col">
                  <p className="text-[#808080] text-[0.825rem] font-inter leading-[1.5] font-[400]">
                    Internships
                  </p>
                  <div className="pt-0 pl-0 pr-0 pb-[1.125rem]"></div>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    Frontend Development
                  </p>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    Backend Development
                  </p>{" "}
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    Full-Stack Development
                  </p>{" "}
                </div>
                <div className="pt-0 pl-0 pr-0 pb-[1.125rem]"></div>

                <div className="flex flex-col">
                  <div className="pt-0 pl-0 pr-0 pb-[1.125rem]"></div>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/about">About</Link>
                  </p>
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/community">Community</Link>
                  </p>{" "}
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/earn">Earn</Link>
                  </p>{" "}
                  <p className="text-[1rem] mb-[1.5rem] leading-[1.33] font-inter font-[500] tracking-[0.015625rem]">
                    <Link href="/jobs">Jobs</Link>
                  </p>{" "}
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
