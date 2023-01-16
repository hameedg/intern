import { useState } from "react";
import NavCard from "../components/NavCard";
import Link from "next/link";

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
            <div className="logo-svg w-[9rem] ">
              <svg
                viewBox="0 0 421 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.68 9.256V0.759999H0.88V9.256H11.68ZM11.68 49V12.928H0.88V49H11.68ZM28.1331 49V30.784C28.1331 24.664 30.5811 21.928 37.4211 21.928C44.0451 21.928 46.4211 24.376 46.4211 30.136V49H57.2211V26.536C57.2211 18.544 52.5411 12.208 42.6771 12.208C33.2451 12.208 28.9251 17.968 27.9891 24.016H27.3411V12.928H17.3331V49H28.1331ZM88.1007 49V39.28H81.6207C77.8047 39.28 76.4367 38.344 76.4367 34.744V21.856H88.1007V12.928H76.4367V5.944H65.6367V12.928H59.9487V21.856H65.6367V35.968C65.6367 45.04 70.7487 49 79.1727 49H88.1007ZM111.298 49.72C122.746 49.72 130.378 44.248 130.378 36.4V35.608H119.578V36.328C119.578 39.424 117.346 41.08 110.938 41.08C103.954 41.08 101.362 38.704 101.074 33.16H130.45C130.594 31.936 130.738 31 130.738 29.704C130.738 18.4 122.89 12.208 111.082 12.208C99.2016 12.208 91.0656 19.48 91.0656 31C91.0656 43.816 99.2736 49.72 111.298 49.72ZM110.866 20.632C117.202 20.632 120.082 22.72 120.37 27.472H101.218C101.722 22.792 104.458 20.632 110.866 20.632ZM146.118 49V28.12C146.118 23.584 147.846 21.352 152.67 21.352C157.062 21.352 158.646 23.08 158.646 27.04V30.784H169.445V24.808C169.445 17.752 166.134 12.208 158.07 12.208C150.798 12.208 146.982 16.672 145.974 22.504H145.326V12.928H135.318V49H146.118ZM184.157 49V30.784C184.157 24.664 186.605 21.928 193.445 21.928C200.069 21.928 202.445 24.376 202.445 30.136V49H213.245V26.536C213.245 18.544 208.565 12.208 198.701 12.208C189.269 12.208 184.949 17.968 184.013 24.016H183.365V12.928H173.357V49H184.157ZM234.332 49.72C242.684 49.72 247.292 45.616 248.516 39.28H249.092V61.24H259.892V12.928H249.812V22.792H249.092C247.796 15.88 243.188 12.208 234.692 12.208C223.604 12.208 217.412 19.552 217.412 31C217.412 42.448 223.532 49.72 234.332 49.72ZM228.356 31C228.356 24.376 231.596 22.144 238.508 22.144C245.42 22.144 249.092 24.52 249.092 30.928V31.504C249.092 37.696 245.348 39.856 238.508 39.856C231.596 39.856 228.356 37.552 228.356 31ZM280.511 49.72C290.015 49.72 294.407 44.032 295.343 37.984H295.919V49H305.999V12.928H295.199V31.216C295.199 37.336 292.679 40.072 285.623 40.072C278.783 40.072 276.335 37.624 276.335 31.792V12.928H265.535V35.392C265.535 43.456 270.359 49.72 280.511 49.72ZM330.673 49.72C342.121 49.72 349.753 44.248 349.753 36.4V35.608H338.953V36.328C338.953 39.424 336.721 41.08 330.313 41.08C323.329 41.08 320.737 38.704 320.449 33.16H349.825C349.969 31.936 350.113 31 350.113 29.704C350.113 18.4 342.265 12.208 330.457 12.208C318.577 12.208 310.441 19.48 310.441 31C310.441 43.816 318.649 49.72 330.673 49.72ZM330.241 20.632C336.577 20.632 339.457 22.72 339.745 27.472H320.593C321.097 22.792 323.833 20.632 330.241 20.632ZM372.909 49.72C384.069 49.72 390.765 45.256 390.765 38.488C390.765 32.512 387.165 29.272 377.517 28.192L369.812 27.256C365.061 26.68 364.053 25.888 364.053 24.016C364.053 21.712 365.421 20.776 370.82 20.776C377.445 20.776 378.885 22.288 378.885 25.24V25.672H389.685V25.456C389.685 16.672 382.989 12.208 371.181 12.208C358.797 12.208 353.397 17.248 353.397 23.584C353.397 29.632 357.429 32.872 364.629 33.664L374.781 34.888C379.029 35.464 380.109 36.04 380.109 38.056C380.109 40.216 378.741 41.152 372.98 41.152C366.861 41.152 364.845 40.288 364.845 37.048V36.4H354.045V36.616C354.045 44.968 360.741 49.72 372.909 49.72ZM420.538 49V39.28H414.058C410.242 39.28 408.874 38.344 408.874 34.744V21.856H420.538V12.928H408.874V5.944H398.074V12.928H392.386V21.856H398.074V35.968C398.074 45.04 403.186 49 411.61 49H420.538Z"
                  fill="white"
                />
              </svg>
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
              <div className=" tracking-[-0.015em] z-[999] flex flex-col justify-center items-center rounded-[0.5rem] relative text-left mx-auto">
                <div
                  className="mr-[4px] text-[0.875rem] leading-[1.43] font-[500] tracking-[0.015635rem] bg-[#222222] rounded-[0.5rem] hover:bg-[#2667ff] flex h-auto pt-[0.375rem] pr-[0.83333rem] pl-[0.833333333rem] pb-[0.375rem] items-center relative align-top text-left mx-auto"
                  onClick={handle}
                >
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
                      stroke="#ffffff"
                    >
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
                  <nav className="w-[18rem] p-[0.5rem] absolute left-[0%] top-[144%] right-[0%] bottom-[auto] z-[1000] rounded-[0.5rem] bg-[#0c0c0c]">
                    <div className="grid gap-x-[1rem] grid-cols-1">
                      <NavCard />
                      <NavCard />
                      <NavCard />
                      <NavCard />
                      <NavCard />
                      <NavCard />
                    </div>
                  </nav>
                ) : null}
              </div>
              <Link href="/about">
                <div className="button-css">About</div>
              </Link>
              <Link href="/community">
                <div className="button-css">Community</div>
              </Link>{" "}
              <Link href="/earn">
                <div className="button-css">Earn</div>
              </Link>{" "}
              <Link href="/jobs">
                <div className="button-css">Jobs</div>
              </Link>
            </div>
          </div>
          <div className="blue-button">Sign Up</div>
          <div
            className="p-[10px] relative float-right text-[24px] md:block hidden md:ml-[5px]"
            onClick={handly}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="fill-[#fff]"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
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
