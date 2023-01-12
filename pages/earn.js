import Typewriter from "typewriter-effect";

const earn = () => {
  return (
    <>
      <div className="bg-[#000] text-[#fff] h-[100vh]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
            <div className=" md:gap-y-[2rem] py-[4.3rem] gap-x-[4rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="max-w-[460px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <h1
                  className={`text-[5rem] font-['ClashDisplay-Variable'] sm:text-[2.1rem] sm: mt-[50px] tracking-normal sm:leading-[3rem] leading-[6rem] font-[600] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}
                >
                  <Typewriter
                    options={{
                      strings: ["Learn.", "Upskill.", "Get rewarded"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <div className=" text-[1.125rem] font-[400] tracking-[-0.015em] leading-[2rem] font-inter mb-8 mt-0 text-[#9f9f9f]">
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
                  src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                  className="relative inline-block align-middle rounded-[25px] gl:h-[400px] gl:w-[500px] w-[350px] h-[250px]"
                ></img>
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
