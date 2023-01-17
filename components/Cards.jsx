import { useState } from "react";
import JobCard from "./JobCard";

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
          {" "}
          <div className="container mx-auto ">
            <div className="mt-[34px] font-['ClashDisplay-Variable'] max-w-[900px]  font-[500] text-[1.5rem] leading-[3rem] tracking-[0.02em] text-[#000]">
              Get your dream internship with work experience
            </div>
            <div className="max-w-[660px] max-h-[161px] font-inter font-[400] text-[1.125rem] leading-[2rem]  tracking-[-0.01em] text-[#000] mt-[10px] mb-[30px]">
              Complete quests, gain work experience by helping startups build
              the products of tomorrow and get rewarded with referrals to your
              dream internships.
              <br></br>
            </div>
          </div>
          <div className="p-[0.9375rem] border rounded-sm">
            <p className="text-[0.8125rem] font-inter uppercase font-medium mb-[0.9375rem]">
              Dream Internships of january
            </p>
            <div className="grid gl:grid-cols-3 gap-[0.9375rem] grid-rows-[auto] ms:grid-cols-1 dm:grid-cols-2">
              <div onClick={handle}>
                <JobCard
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Netflix.png"
                  name="Design Technology Intern - Experience Design"
                  text="Netflix"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Tesla.png"
                  name="Maps & Autopilot Navigation Internship, Vehicle Software
                (Sum.."
                  text="Tesla"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Forbes Editorial Internship - Summer 2023"
                  text="Forbes"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Forbes.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="UX/UI Tools Programmer Intern - Unreal Engine"
                  text="Epic Games"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Epic_Games.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="MBA Intern - Strategic Finance & Analytics"
                  text="Airbnb"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Airbnb.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Summer Internship, User Research | Platform Mission (EMEA)"
                  text="Spotify"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Spotify.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Human Resources Summer Internship 2023"
                  text="Procter & Gamble"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/P_G.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Dev Degree Intern, 2023"
                  text="Shopify"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Shopify.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Security Engineering Intern, Security, Privacy, Assurance"
                  text="Netflix"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Netflix.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Data Science Intern, Decisions - Inference (Summer 2023)"
                  text="Lyft"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Lyft.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Data Science Intern, Decisions - Inference (Summer 2023)"
                  text="Lyft"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Lyft.png"
                />
              </div>
              <div onClick={handle}>
                <JobCard
                  name="Associate Solutions Architect Internship - Summer 2023 Sing..."
                  text="Amazon Web Services(AWS)"
                  img="https://ik.imagekit.io/internquest/Intern_Quest/AWS.png"
                />
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
