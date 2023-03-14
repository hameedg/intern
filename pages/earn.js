import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import CountUp from "react-countup";
import Tr from "../components/New components/Tr";

const earn = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fff] text-[#000] h-[100vh]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
            <div className=" md:gap-y-[2rem] py-[4.3rem] gap-x-[4rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="max-w-[460px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <h1
                  className={`text-[3.5rem] font-['ClashDisplay-Variable'] sm:text-[2.1rem] sm: mt-[50px] tracking-normal sm:leading-[3rem] leading-[4rem] font-[600] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}>
                  <Typewriter
                    options={{
                      strings: ["Learn.", "Upskill.", "Get rewarded"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <div className=" text-[1.125rem] font-[400] tracking-[-0.015em] leading-[2rem] font-inter mb-8 mt-0 text-[#000]">
                  It&#39;s time get rewarded for learning new skills,
                  implementing them in real time helping startups build the next
                  big thing and gaining work experience
                  <p className="mt-[2rem]">
                    Complete the quests and earn utility tokens for
                    demonstrating your skills
                  </p>
                </div>

                <div className="flex items-center flex-col">
                  <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                    Intern Today
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <img
                  src="https://ik.imagekit.io/internquest/Intern_Quest/reward__2_.svg"
                  className="relative inline-block align-middle rounded-[25px] gl:h-[500px] gl:w-[600px] w-[400px] h-[300px]"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative px-[3%] box-border lg:px-[5%] maybe">
          <div className="flex pt-[5rem] pb-[4.8rem] flex-col items-center w-[100%] max-w-[128rem] mx-auto lg:pt-[8.4rem] lg:max-w-[64rem] md:pt-[4.4rem] md:pb-[3.6rem] sm:pb-[3.2rem]">
            <div className="text-[1.5rem] font-['ClashDisplay-Variable'] leading-[1.2] font-[500] lg:text-[1.6rem] ">
              Since January 2023
            </div>
            <div className="mt-[2.4rem] font-['ClashDisplay-Variable'] mb-[4.8rem] text-[10rem] leading-[1] font-[300] lg:mb-[2.8rem] lg:text-[10rem] md:text-[11.4vw] sm:text-[14vw]">
              BRI&nbsp;
              <span>
                <CountUp end={112500} duration={1} />
              </span>
            </div>
            <p className="w-[100%] max-w-[720px] text-[1.125rem] tracking-[-0.015em] font-inter text-center mb-0 leading-[2rem] mt-0 lg:leading-[1.5] md:text-[2rem] ">
              We've paid out over 100k BRI Tokens to interns and BrightIntern
              has helped over 100+ students get rewarded for completing virtual
              internship missions
            </p>
          </div>
        </div>
        <div className="page-padding ">
          <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
            <div className="box-border ">
              <div className="w-[100%] px-[16px] mx-auto 3xl:max-w-[1402px]">
                <div className="flex pt-[48px] md:flex-col md:pt-[20px] ">
                  <div className="w-[100%] flex-grow">
                    <div className="relative ">
                      <h1 className="text-[2em] my-[0.67em] font-bold">
                        CoinMarketCap Diamonds Leaderboard
                      </h1>
                      <p className="mb-[32px] leading-[1.5] text-[14px] lg:overflow-hidden">
                        Highest accumulated CoinMarketCap Diamonds rankings.
                        <div className="float-right lg:mt-[16px] lg:float-left lg:w-[100%]">
                          Last update: Since January 2023 15:30
                        </div>
                      </p>
                      <div className="sm:overflow-x-scroll ">
                        <table className="m-auto text-[14px] w-[100%]">
                          <thead className="sticky z-[120]">
                            <tr>
                              <th className="text-left border-t border-b sticky top-0 border-solid border-[#eff2f5] bg-[#fff] py-[11px] px-[10px] z-[90] text-[12px] ">
                                Rank
                              </th>
                              <th className="text-left border-t border-b sticky top-0 border-solid border-[#eff2f5] bg-[#fff] py-[11px] px-[10px] z-[90] text-[12px] ">
                                User
                              </th>
                              <th className="text-right border-t border-b sticky top-0 border-solid border-[#eff2f5] bg-[#fff] py-[11px] px-[10px] z-[90] text-[12px] ">
                                Accumulated Diamonds Balance
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <Tr no="1" />
                            </tr>
                            <tr>
                              <Tr no="2" />
                            </tr>
                            <tr>
                              <Tr no="3" />
                            </tr>
                            <tr>
                              <Tr no="4" />
                            </tr>
                            <tr>
                              <Tr no="5" />
                            </tr>
                            <tr>
                              <Tr no="6" />
                            </tr>
                            <tr>
                              <Tr no="7" />
                            </tr>
                            <tr>
                              <Tr no="8" />
                            </tr>
                            <tr>
                              <Tr no="9" />
                            </tr>
                          </tbody>
                        </table>
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

export default earn;

{
  /* <div className="">
<div className="flex flex-row flex-wrap">
  <div className="w-[50vw] relative z-[1] bg-[#f3f3f5]"></div>
  <div className="max-w-[40vw] ">
    <p className="text-[80px] font-[700] font-['ClashDisplay-Variable'] text-[#949498] ml-[6rem] mt-[8rem]">
      Learn.<br></br> Upskill.<br></br> Get rewarded{" "}
    </p>
    <div className="ml-[6rem] mt-[2rem] text-[1.125rem] leading-[2rem] font-inter">
      It&#39;s time to get rewarded for learning new skills,
      implementing them in real time helping startups build the next big
      thing and gaining work experience
      <p className="mt-[2rem]">
        Complete the quests and earn utility tokens for demonstrating
        your skills
      </p>
    </div>
  </div>
</div>
</div> */
}
