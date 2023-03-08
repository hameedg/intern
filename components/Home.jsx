const Home = () => {
  return (
    <>
      <div className="bg-[#1b1b1b] text-[#fff] ">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
            <div className=" md:gap-y-[2rem] py-[4.3rem] gap-x-[4rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="max-w-[700px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <h1
                  className={`text-[3rem] font-['ClashDisplay-Variable'] sm:text-[2.1rem] sm: mt-[50px] tracking-normal sm:leading-[3rem] leading-[3.75rem] font-[600] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}>
                  Changing the way students get internships
                </h1>
                <p className=" text-[1.125rem] font-[400] tracking-[-0.015em] leading-[1.7] font-inter mb-8 mt-0 text-[#9f9f9f]">
                  A proof-of-talent internship platform that helps students get
                  internships through "virtual internship quests" aimed at
                  making students stand out with a kickass proof of work
                  demonstrating their skills helping startups build the next big
                  thing
                </p>
                <div className="flex items-center flex-col">
                  <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                    Intern Today
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

export default Home;
