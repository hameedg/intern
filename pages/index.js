import Navbar from "../components/Navbar";
import Point from "../components/Point";
import Footer from "../components/Footer";
import StepCard from "../components/StepCard";
import Home from "../components/Home";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#1b1b1b] text-[#fff]">
        {/* <div className="page-padding">
          <div className="max-w-[72.5rem] mx-auto">
            <div className=" md:gap-y-[2rem] py-[4.3rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="ml-[50px] mt-[100px] max-w-[550px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <h1
                  className={`text-[48px] font-['ClashDisplay-Variable']  sm:text-[50px] mt-[50px] tracking-normal sm:tracking-[-0.025em] leading-[60px] font-[600] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}
                >
                  Discover your dream career with work experience
                </h1>
                <p className=" text-[1rem] font-[400] tracking-[-0.015em] leading-[1.7] font-inter mb-8 mt-0">
                  Don t settle for a course or certificate because it is the
                  work experience that matters for companies.
                </p>
              </div>
              <div className="flex h-[20rem] lg:h-[18rem] justify-center items-center flex-grow-[1] flex-shrink-[1] basis-[0%]">
                <img
                  src="https://static.rock.so/file/KXnDyMYp/V8lLJao8/4103c73765c43f95566b243fae2ccfbe/t-Group2.png"
                  className="relative h-[100%] inline-block max-w-[100%] align-middle"
                ></img>
              </div>
            </div>
          </div>
        </div> */}
        <Home />
      </div>
      <div className="overflow-hidden bg-[#0c0c0c] text-[#fff]">
        <div className="flex pt-[3.785rem] pb-[2.5rem] flex-col items-center text-center">
          <div className="text-[#fff] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
            Get your dream internship
          </div>
          <div className="flex w-[100%] mt-[1.75rem] items-center flex-row">
            <div className="animate-[marquee_40s_linear_infinite] flex items-center">
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ce0065bd70d4d4c7589_airbnb.svg"></img>
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ca7f704a3823a2d86fc_netflix.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4c863f6855096fb71819_meta.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cd668f6c35385fda40b_spotify.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4ccb639fb5b7da395f93_amazon.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cc2e3351f353bbe4c14_oracle.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cbbdd6a138a4bca22cb_microsoft.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4cb183f8c0be558447e5_google.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4c9b9e4d531eedbcc004_cisco.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4c903722a10a912590f3_linkedin.svg"></img>{" "}
              <img
                className="relative mr-[3rem] flex-grow-0 flex-shrink-0 basis-auto opacity-[0.4] h-[3rem]"
                src="https://global-uploads.webflow.com/632462c7dd8a9705db7948c2/633b4c7d65dbb898805009ac_uber.svg"></img>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff]">
        <div className="page-padding">
          <div className="max-w-[72.5rem] mx-auto">
            <div className="md:gap-y-[2rem] py-[4.3rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
              <div className="gl:ml-[50px] max-w-[500px] font-['ClashDisplay-Variable'] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                <div className="text-[#000] text-[1.5rem] mb-[1rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500] flex justify-center items-center">
                  Showcase your skills with proof-of-work
                </div>
                <p className="text-[1rem] mb-8 leading-[1.7] font-inter tracking-[-0.015em]">
                  It's tough to convey your skill, passion, and uniqueness in a
                  cover letter or resume. A proof of work is the most effective
                  way to impress companies and begin a conversation with a
                  company.
                </p>

                <p className="text-[1rem] mb-8 leading-[1.7] font-inter tracking-[-0.015em]">
                  The most impactful way to communicate your skillset isn't to
                  tell people what you can do, it's to show them your work.
                </p>
              </div>
              <div className="flex h-[20rem] lg:h-[18rem] justify-center items-center flex-grow-[1] flex-shrink-[1] basis-[0%]">
                <img
                  src="https://ik.imagekit.io/internquest/Intern_Quest/hr.svg"
                  loading="lazy"
                  alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2]">
        <div className="section1-wrapper">
          <div className="section1-container">
            <div className="pt-0 px-0 pb-[5rem]"></div>
            <div className="md:grid-cols-[1fr] grid auto-cols-[1fr] gap-x-[2rem] gap-y-[2rem] grid-cols-[1fr_1fr] grid-rows-[auto]">
              <div className="gl:ml-[50px] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] flex items-center max-w-[500px]">
                <h2 className="font-['ClashDisplay-Variable'] font-[600] text-[2rem] leading-[39px] sm:text-[1.5rem] sm:leading-[1.5] sm:font-[500]">
                  Are any of these challenges familier to you.?{" "}
                </h2>
                <div className="pt-0 px-0 pb-[2rem]"></div>

                <div className="pt-0 px-0 pb-[2rem]"></div>
              </div>
              <div className=" dm:w-[600px] opacity-[1] sm:list-disc col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] p-[1.5rem] rounded-[1rem] bg-[#fff]">
                <Point name={"No work experience?"} />
                <Point name={"Not getting shortlisted for job interview?"} />
                <Point name={"Unable to find the role you are looking for?"} />
                <Point
                  name={
                    "Finding it difficult to get referrals for your dream companies?"
                  }
                />
                <Point
                  name={
                    "Not landing any opportunity due to lack of experience?"
                  }
                />
              </div>
            </div>
            <div className="pt-0 px-0 pb-[5rem]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-[617px] mx-auto bg-white pb-12 mt-16 ma  ">
        <h3
          className={`sm:text-[1.5rem] sm:leading-[1.5] sm:font-[500] font-['ClashDisplay-Variable'] text-[1.875rem] sm-mid-tablet:leading-snug antialiased tracking-[0] text-center font-[550] mb-6`}>
          A new way to get best internship oppurtunities
        </h3>
        <p className="text-[1rem] mb-8 leading-[1.7] text-center font-inter tracking-[-0.015em]">
          BrightIntern is building a platform where students can learn and
          unleash their potential with us through virtual internships to get
          best internship opportunities and referrals to dream internships
        </p>
      </div>

      {/* <div className="bg-[#1b1b1b]">
        <div className="page-padding">
          <div className="max-w-[1000px] mx-auto">
            <div className="p-large"></div>
            <div className="text-center">
              <h3
                className={`font-['ClashDisplay-Variable'] text-[#ffff] text-[30px] sm-mid-tablet:leading-snug antialiased text-center font-[600] mb-6`}>
                Steps to kick-start your
                <br></br>
                growth journey
              </h3>

              <div className="p-large"></div>
              <div className="grid gap-x-[2rem] gap-y-[4rem] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] grid-rows-[auto_auto] sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr]">
                <StepCard
                  number={"01"}
                  content={
                    "Choose a career path you are interested in pursuing"
                  }
                />
                <StepCard
                  number={"02"}
                  content={"Select a track that fits your career goals"}
                />
                <StepCard
                  number={"03"}
                  content={"Develop the necessary skills to master the role"}
                />
                <StepCard
                  number={"04"}
                  content={"Get matched to emerging startups and companies."}
                />
                <StepCard
                  number={"05"}
                  content={"Complete assignments to showcase your competencies"}
                />
                <StepCard
                  number={"06"}
                  content={
                    "Present your ideas & solutions with respect to problem statements"
                  }
                />
                <StepCard
                  number={"07"}
                  content={
                    "Get introduced to your team members & start working with the companies"
                  }
                />
                <StepCard
                  number={"08"}
                  content={"Select a track that fits your career goals"}
                />
                <StepCard
                  number={"09"}
                  content={"Get matched to emerging startups and companies."}
                />
              </div>
              <div className="p-large"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#fff] text-[#000]">
        <div className="pt-[5rem] pb-[5rem] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
          <div className="relative z-[11] w-[100%] max-w-[914px] md:flex-col">
            <h2 className="mb-[30px] font-['ClashDisplay-Variable'] font-[600] text-[32px] leading-[39px] flex justify-center text-center">
              Get work experience
              <br></br>
              Get hired
            </h2>
            <div className="p-medium"></div>
            <div className="flex items-center flex-col">
              <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                Join the Conversation
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
