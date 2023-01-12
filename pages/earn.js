const earn = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div className="flex flex-row flex-wrap">
          <div className="w-[50vw] h-[100vh] relative z-[1] bg-[#f3f3f5]"></div>
          <div>
            <p className="text-[80px] font-[700] font-['ClashDisplay-Variable'] text-[#949498] ml-[6rem] mt-[8rem]">
              Learn.<br></br> Upskill.<br></br> Get rewarded{" "}
            </p>
            <div className="max-w-[40vw] ml-[6rem] mt-[2rem] text-[1.125rem] leading-[2rem] font-inter">
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
      </div>
    </>
  );
};

export default earn;
