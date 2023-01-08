const Home = () => {
  return (
    <>
      <div className="bg-[#1b1b1b] text-[#fff] ">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
            <div className=" md:gap-y-[2rem] py-[4.3rem] gap-x-[4rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="max-w-[460px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <h1
                  className={`text-[48px] font-clash sm:text-[50px] mt-[50px] tracking-normal sm:tracking-[-0.025em] leading-[60px] font-[600] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}
                >
                  Discover your dream career with work experience
                </h1>
                <p className=" text-[1rem] font-[400] tracking-[-0.015em] leading-[1.7] font-inter mb-8 mt-0 text-[#9f9f9f]">
                  Don t settle for a course or certificate because it is the
                  work experience that matters for companies.
                </p>
                <div className="flex items-center flex-col">
                  <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                    Intern Today
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <img
                  src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                  className="relative inline-block align-middle rounded-[25px] h-[400px] w-[500px]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;