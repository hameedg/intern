import { useState } from "react";
import NavCard from "../components/NavCard";
import Link from "next/link";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  function handle() {
    setDrop(!drop);
  }
  return (
    <div className="navbar z-[999]">
      <div className="navbar-wrapper">
        <div className="navbar-inner">
          <a className="navbar-logo">
            <div className="logo-svg">
              <svg
                height="100%"
                viewBox="0 0 162 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4 7.48C20.36 7.48 22.7867 8.54667 24.68 10.68C26.6 12.8133 27.56 16.2533 27.56 21V30H19.76V21.12C19.76 19.4133 19.64 17.9733 19.4 16.8C19.1867 15.6267 18.6667 14.64 17.84 13.84C17.0133 13.04 15.76 12.64 14.08 12.64C12.32 12.64 11 13.0533 10.12 13.88C9.26667 14.7067 8.72 15.72 8.48 16.92C8.24 18.0933 8.12 19.52 8.12 21.2V30H0.32V0.4H8.12V10.88C10.1467 8.61333 13.24 7.48 17.4 7.48ZM37.7684 0.4H29.9684V5.84H37.7684V0.4ZM37.7684 30H29.9684V7H37.7684V30ZM48.0791 11.84C50.1591 9.57333 53.4257 8.22667 57.8791 7.8V14.04H52.8791C51.0391 14.04 49.7857 14.68 49.1191 15.96C48.4791 17.24 48.1591 18.9733 48.1591 21.16V30H40.3591V8.2H47.3191L48.0791 11.84ZM74.4809 7.24C78.1609 7.24 81.4543 7.88 84.3609 9.16C87.2676 10.44 88.7209 12.6933 88.7209 15.92V30H81.4409L80.8009 26.68V26.48C80.1876 27.7067 78.7743 28.6667 76.5609 29.36C74.3743 30.0533 71.9876 30.4 69.4009 30.4C67.3209 30.4 65.2143 29.9733 63.0809 29.12C60.9476 28.24 59.8809 26.36 59.8809 23.48C59.8809 20.7333 60.7876 18.92 62.6009 18.04C64.4409 17.16 66.4143 16.72 68.5209 16.72C72.6009 16.72 75.4276 16.6933 77.0009 16.64C78.5743 16.56 79.6009 16.4133 80.0809 16.2C80.5876 15.9867 80.8543 15.6 80.8809 15.04V14.6C80.8543 13.6667 80.1876 12.9467 78.8809 12.44C77.6009 11.9067 76.1209 11.64 74.4409 11.64C72.6276 11.64 71.0809 11.9467 69.8009 12.56C68.5476 13.1467 67.9209 14.0667 67.9209 15.32H60.1209C60.1209 13.2667 60.8943 11.64 62.4409 10.44C64.0143 9.24 65.8809 8.41333 68.0409 7.96C70.2276 7.48 72.3743 7.24 74.4809 7.24ZM80.8409 19.12C79.5609 19.7067 77.6009 20 74.9609 20C73.1743 20 71.7743 20.0667 70.7609 20.2C69.7743 20.3333 69.0409 20.5733 68.5609 20.92C68.1076 21.24 67.8676 21.72 67.8409 22.36C67.9209 23.24 68.3743 23.9067 69.2009 24.36C70.0543 24.8133 71.4809 25.04 73.4809 25.04C76.1209 25.04 78.0009 24.4667 79.1209 23.32C80.2676 22.1733 80.8409 20.7867 80.8409 19.16V19.12ZM120.136 18.72C120.109 20.9067 119.642 22.8933 118.736 24.68C117.856 26.44 116.616 27.84 115.016 28.88C113.416 29.8933 111.589 30.4 109.536 30.4C104.709 30.48 101.136 29.4667 98.8156 27.36L98.3356 29.92H91.3356V0.439999H99.1356V10.64C101.482 8.48 104.949 7.4 109.536 7.4C111.616 7.4 113.456 7.93333 115.056 9C116.656 10.04 117.896 11.4133 118.776 13.12C119.656 14.8267 120.109 16.6267 120.136 18.52V18.64V18.72ZM105.496 25.64C106.936 25.64 108.162 25.32 109.176 24.68C110.189 24.0133 110.936 23.1467 111.416 22.08C111.922 21.0133 112.189 19.8667 112.216 18.64C112.189 17.5733 111.922 16.5467 111.416 15.56C110.909 14.5733 110.149 13.7733 109.136 13.16C108.149 12.52 106.936 12.2 105.496 12.2C103.602 12.2 102.069 12.84 100.896 14.12C99.7223 15.3733 99.1356 17 99.1356 19V19.04C99.1356 20.1867 99.4023 21.2667 99.9356 22.28C100.469 23.2933 101.216 24.1067 102.176 24.72C103.162 25.3333 104.269 25.64 105.496 25.64ZM129.917 30H122.117V0.4H129.917V30ZM161.9 19.8H140.14C140.3 21.6667 140.993 23.2133 142.22 24.44C143.473 25.64 145.193 26.24 147.38 26.24C148.553 26.24 149.647 26.04 150.66 25.64C151.7 25.24 152.527 24.6667 153.14 23.92C153.78 23.1733 154.1 22.32 154.1 21.36H161.9C161.9 23.2 161.313 24.84 160.14 26.28C158.993 27.6933 157.327 28.8 155.14 29.6C152.953 30.4 150.353 30.8 147.34 30.8C144.567 30.8 142.02 30.3067 139.7 29.32C137.38 28.3333 135.553 26.9467 134.22 25.16C132.887 23.3467 132.22 21.28 132.22 18.96C132.22 16.6133 132.887 14.5467 134.22 12.76C135.553 10.9467 137.367 9.56 139.66 8.6C141.953 7.61333 144.513 7.12 147.34 7.12C150.22 7.12 152.753 7.6 154.94 8.56C157.127 9.52 158.82 10.88 160.02 12.64C161.247 14.3733 161.873 16.4133 161.9 18.76V18.96H161.94H161.9V19.8ZM147.38 11.56C143.753 11.56 141.473 13.12 140.54 16.24H153.82C153.1 13.12 150.953 11.56 147.38 11.56Z"
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
              <div className="  z-[999] flex flex-col justify-center items-center rounded-[0.5rem] relative text-left mx-auto">
                <div
                  className="mr-[4px] bg-[#222222] rounded-[0.5rem] hover:bg-[#2667ff] flex h-auto pt-[0.375rem] pr-[0.83333rem] pl-[0.833333333rem] pb-[0.375rem] items-center relative align-top text-left mx-auto"
                  onClick={handle}
                >
                  Resources
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
          <div className="p-[10px] relative float-right text-[24px] md:block hidden md:ml-[5px]">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
