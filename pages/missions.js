import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CardM from "../components/New components/CardM";
import Step from "../components/New components/Step";
import Typewriter from "typewriter-effect";
import TagContainer from "../components/New components/TagContainer";
import NavCard from "../components/NavCard";
import MissionCard from "../components/New components/MissionCard";
import Footer from "../components/Footer";
import CardF from "../components/New components/CardF";
import MCard from "../components/New components/MCard";

const missions = () => {
  const [open, setOpen] = useState(false);

  function handly() {
    setOpen(!open);
  }
  return (
    <>
      <Navbar />
      <div className="bg-[#1b1b1b] box-border ">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto w-[100%]">
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div className="pb-[5rem] md:pb-[1.5rem]"></div>
            <div className="relative w-[60%] mx-auto pt-[4rem] pb-[8rem] text-[#f4f5f7] sm:w-[100%] md:w-[100%] lg:w-[100%] ">
              <h1 className="text-center m-0 text-[2rem] leading-[3rem] tracking-[-0.005em] font-[500] box-border md:text-[1.5rem] font-['ClashDisplay-Variable']">
                #ProveYourself with the skills not certificates
              </h1>
              <div className="pb-[1rem]"></div>
              <div className="flex items-center justify-center">
                <p className="font-inter font-[400] text-[1.125rem] leading-[2em] tracking-[-0.015em] text-[#fff] max-w-[624px] text-center">
                  Showcase your skills by competing with the best & completing
                  virtual internship missions
                </p>
              </div>
              {/* <img
                src="https://global-uploads.webflow.com/632462c7dd8a9721c67948b1/63ce6d64c8b33ab4c42e00ba_Group%202-p-500.png"
                className="left-auto top-auto right-[-39%] bottom-[25%] absolute align-middle inline-block max-w-[100%] lg:hidden w-[200px]"></img>
              <img
                src="https://global-uploads.webflow.com/632462c7dd8a9721c67948b1/63ce6d645fad4a05d592c601_Group%201.png"
                className="absolute left-[-39%] top-auto right-auto bottom-[25%] align-middle inline-block max-w-[100%] w-[200px] lg:hidden"></img> */}
              <div className="pb-[2rem]"></div>

              <div className="flex items-center flex-col">
                <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                  Start your journey today
                </div>
                <div className="absolute left-[66%] top-[50%] flex ">
                  <svg
                    width="40"
                    height="120"
                    viewBox="0 0 141 169"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M139.47 159.719C130.07 143.019 118.69 126.659 104.11 114.139C105.877 111.222 107.396 108.161 108.65 104.989C117.35 82.9393 110.65 57.5193 94.9 40.3893C76.43 20.2793 49.51 15.5093 24.63 23.8193L37.29 11.2793C42.89 5.72926 34.54 -3.28074 28.91 2.27926L2.53004 28.3893C-0.469964 31.3893 0.240036 35.7493 3.53004 38.1193C11.0191 43.5112 19.1351 47.9739 27.7 51.4093C35.02 54.4093 38.51 42.6093 31.23 39.6393C29.06 38.7493 26.95 37.7793 24.87 36.7493C42.21 29.5493 61.32 30.0693 77.05 40.9393C90.44 50.1893 99.67 66.0993 100.26 82.4493C100.483 90.9098 98.4092 99.2726 94.26 106.649C89.9991 103.781 85.5031 101.279 80.82 99.1693C67.92 93.4093 51.57 91.2593 41.01 102.709C32.11 112.369 34.56 126.859 44.79 134.529C56.1 142.999 72.23 140.529 83.85 133.999C88.6154 131.301 92.9418 127.891 96.6801 123.889C109.87 135.339 120.02 150.239 128.55 165.389C132.46 172.299 143.35 166.609 139.47 159.719ZM70.79 126.329C65.45 127.929 59.2 128.529 54.09 125.879C48.98 123.229 45.6 117.039 49.35 111.879C56.94 101.389 73.22 108.529 81.94 113.429C83.65 114.429 85.3099 115.429 86.9399 116.509C82.4642 121.084 76.9109 124.46 70.79 126.329Z"
                      fill="#ffffff"
                      opacity="0.6"
                    />
                  </svg>
                  <p className="mt-[60px] ml-[10px] font-lico text-[1.5rem] tracking-[0]">
                    25 students started their<br></br> missions this month
                  </p>
                </div>
              </div>
              <div className="absolute top-[-20%] left-[-60%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnsSvgjs="http://svgjs.com/svgjs"
                  width="454"
                  height="530"
                  x="0"
                  y="0"
                  viewBox="0 0 300 300"
                  xmlSpace="preserve">
                  <g>
                    <circle
                      cx="198"
                      cy="48"
                      r="4"
                      fill="#a4a4a4"
                      data-original="#000000"></circle>
                    <path
                      d="M238 156c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 16c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zM217.516 80.484c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172L226 77.656l2.828 2.828c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172a4 4 0 0 0 0-5.656L231.656 72l2.828-2.828a4 4 0 1 0-5.656-5.656L226 66.344l-2.828-2.828a4 4 0 1 0-5.656 5.656L220.344 72l-2.828 2.828a3.997 3.997 0 0 0 0 5.656z"
                      fill="#a4a4a4"
                      data-original="#000000"></path>
                    <path
                      d="M254 118c0-9.926-8.074-18-18-18h-50.568c-1.789-6.881-7.999-12-15.432-12s-13.643 5.119-15.432 12H77.432A15.979 15.979 0 0 0 66 88.568V64h16v4a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V44a4 4 0 0 0-4-4H90v-4a4 4 0 0 0-4-4H66v-4a4 4 0 0 0-8 0v60.568C51.119 90.357 46 96.567 46 104c0 8.822 7.178 16 16 16 7.433 0 13.643-5.119 15.432-12h77.136c1.789 6.881 7.999 12 15.432 12s13.643-5.119 15.432-12H236c5.514 0 10 4.486 10 10v12c0 5.514-4.486 10-10 10h-98.568c-1.789-6.881-7.999-12-15.432-12s-13.643 5.119-15.432 12H68c-9.926 0-18 8.074-18 18v8c0 9.926 8.074 18 18 18h72c5.514 0 10 4.486 10 10 0 9.926 8.074 18 18 18h18.568c1.789 6.881 7.999 12 15.432 12s13.643-5.119 15.432-12H236c5.514 0 10 4.486 10 10v12c0 5.514-4.486 10-10 10h-58.568c-1.789-6.881-7.999-12-15.432-12s-13.643 5.119-15.432 12H130v-24a4 4 0 0 0-4-4h-20v-4.146c0-4.33-3.523-7.854-7.854-7.854H81.854c-4.33 0-7.854 3.523-7.854 7.854V216H54a4 4 0 0 0-4 4v52a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-20h16.568c1.789 6.881 7.999 12 15.432 12s13.643-5.119 15.432-12H236c9.926 0 18-8.074 18-18v-12c0-9.926-8.074-18-18-18h-18.568c-1.789-6.881-7.999-12-15.432-12s-13.643 5.119-15.432 12H168c-5.514 0-10-4.486-10-10 0-9.926-8.074-18-18-18H68c-5.514 0-10-4.486-10-10v-8c0-5.514 4.486-10 10-10h38.568c1.789 6.881 7.999 12 15.432 12s13.643-5.119 15.432-12H236c9.926 0 18-8.074 18-18zM98 48v16h-8V48zm-16-8v16H66V40zm-20 72c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm108 0c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zM81.854 212H98v4H81.928zM122 224v8.792l-32 7.111-32-7.111V224zm0 44H58v-27.014l31.133 6.918c.285.065.576.096.867.096s.582-.031.867-.096L122 240.986zm40-12c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm40-56c4.412 0 8 3.588 8 8s-3.588 8-8 8-8-3.588-8-8 3.588-8 8-8zm-80-48c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8z"
                      fill="#a4a4a4"
                      data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[4rem]"></div>
      </div>
      <div className="overflow-hidden bg-[#0c0c0c] text-[#fff]">
        <div className="flex pt-[3.785rem] pb-[2.5rem] flex-col items-center text-center">
          <div className="text-[#fff] text-[5rem]  leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
            <Typewriter
              options={{
                strings: ["InternSource", "InternHacks", "InternWorks"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto">
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div className="overflow-hidden bg-[#FFF] text-[#0c0c0c]">
              <div className="flex pt-[3.5rem] pb-[2.5rem] flex-col items-center text-center">
                <div className="text-[#0c0c0c] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
                  It’s time to put your skills at work
                </div>
              </div>
            </div>
            <div className="flex pt-[1rem] pb-[2.5rem] flex-col items-center">
              <TagContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto">
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div className="overflow-hidden bg-[#FFF] text-[#0c0c0c]">
              <div className="flex pt-[3.5rem] pb-[1rem] flex-col items-center text-center">
                <div className="text-[#0c0c0c] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
                  Become internship ready with virtual internship missions
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pb-[1rem]">
              <p className="font-inter font-[400] text-[1.125rem] leading-[2em] tracking-[-0.015em] text-[#000] max-w-[624px] text-center">
                If you are serious about getting your dream internships, you
                need more than certifications and capstone projects
              </p>
            </div>
            <div className=" pt-[1rem] pb-[2.5rem] items-center grid-cols-[1fr_1fr_1fr] grid-rows-[auto] grid auto-cols-[1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
              {/* ---------- */}
              <MissionCard name="Frontend Development" />
              <MissionCard name="Backend Development" />
              <MissionCard name="Mobile App Development" />
              <MissionCard name="Graphic Design" />
              <MissionCard name="UI/UX Design" />
              <MissionCard name="Human Resources" />
              <MissionCard name="Sales & Marketing" />
              <MissionCard name="Content Writing " />
              <MissionCard name="Social Media Marketing" />
              <MissionCard name="Product Management" />
              <MissionCard name="DevOps" />
              <MissionCard name="Digital Marketing" />
            </div>
          </div>
        </div>
      </div>
      <div className="page-padding">
        <div className="2xl:max-w-[62.5rem] max-w-[72.5rem] mx-auto">
          <div className="flex pt-[5.78125rem] pb-[8rem] flex-col items-stretch md:pt-[1.5rem] md:pb-[3.3125rem] ">
            <div className="overflow-hidden bg-[#FFF] text-[#0c0c0c]">
              <div className="flex pt-[3.5rem] pb-[2.5rem] flex-col items-start text-center">
                <div className="text-[#0c0c0c] text-[2rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
                  Accelerating careers globally
                </div>
              </div>
            </div>
            {!open ? (
              <>
                <div className="flex justify-between items-start md:flex-col md:items-stretch md:gap-y-[1rem] md:grid-cols-[100%]  ">
                  <div className="w-[48.28%] md:w-[100%]">
                    <div className="w-auto grid auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:gap-y-[1rem]">
                      <CardF
                        img="https://ik.imagekit.io/brightintern/home_page/Uzochukwu-min.png"
                        con="I have completed multiple online courses and bootcamps that are claimed to be the best but BrightIntern is actually solving the problem for students helping them identify the skills they are lacking through virtual internship missions"
                      />
                      <CardF
                        img="https://ik.imagekit.io/brightintern/home_page/Nikitha-min.png"
                        con="I applied for various internships but never got selected for one as I just completed certifications and ended with a number of certificates.  BrightIntern helped me with virtual internship missions so that I can actually put my skills at work and gain experience"
                      />
                    </div>
                  </div>
                  <div className="w-[48.28%] md:w-[100%] pt-[3.125rem] grid flex-shrink-0 flex-grow-0 basis-auto auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:pt-0 md:gap-y-[1rem]">
                    <CardF
                      img="https://ik.imagekit.io/brightintern/home_page/Anusha-min.png"
                      con="BrightIntern is a great platform with missions to get hands-on experience solving the problems of startups. My journey with BrightIntern was awesome and it feels great that I was a part of it."
                    />
                    <CardF
                      con="
At first, I joined because it seemed like a great opportunity to learn and put my skills at work. It turned out to be an amazing experience. Loved the way students can get referrals by giving their best performance in the missions."
                    />
                  </div>
                </div>
                <div className="block relative w-[100%] mt-[2.625rem] mb-[2px] items-center">
                  <div className="absolute inset-0 w-[100%] h-[1px]">
                    <div
                      className="rotate-[-180deg] absolute left-[0%] top-auto right-[0%] bottom-[0%] w-[100%] pb-[30.96551724%] md:pb-[55.62589928%] lg:pb-[51.96551724%] "
                      style={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 13.86%, rgba(255, 255, 255, 0) 100%)",
                      }}></div>
                  </div>
                </div>
                <div
                  onClick={handly}
                  className="block mx-auto text-[0.875rem] tracking-[-0.015em] hover:bg-[#2667ff] hover:text-[#fff] py-[0.625rem] px-[1rem] border border-solid border-[#f2f2f2] rounded-[0.25rem] bg-transparent transition-all text-[#0c0c0c] cursor-pointer mt-[-70px] z-[99] font-inter">
                  Show More
                </div>
              </>
            ) : (
              <div className="flex justify-between items-start md:flex-col md:items-stretch md:gap-y-[1rem] md:grid-cols-[100%]  ">
                <div className="w-[48.28%] md:w-[100%]">
                  <div className="w-auto grid auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:gap-y-[1rem]">
                    <CardF
                      img="https://ik.imagekit.io/brightintern/home_page/Uzochukwu-min.png"
                      con="I have completed multiple online courses and bootcamps that are claimed to be the best but BrightIntern is actually solving the problem for students helping them identify the skills they are lacking through virtual internship missions"
                    />
                    <CardF
                      img="https://ik.imagekit.io/brightintern/home_page/Nikitha-min.png"
                      con="I applied for various internships but never got selected for one as I just completed certifications and ended with a number of certificates.  BrightIntern helped me with virtual internship missions so that I can actually put my skills at work and gain experience"
                    />
                    <CardF con="The best part of BrightIntern is that the virtual internship missions are actually related to early stage startups and you would receive a feedback on your work" />
                    <CardF con="With BrightIntern, I got to work on four virtual internship missions which helped me strengthen my experience as a Backend Developer" />
                    <CardF
                      con="The virtual internship missions I completed as a part of BrightIntern helped me get a design internship as I was able to showcase my work rather than a portfolio of capstone designs
"
                    />
                  </div>
                </div>
                <div className="w-[48.28%] md:w-[100%] pt-[3.125rem] grid flex-shrink-0 flex-grow-0 basis-auto auto-cols-[1fr] auto-rows-[max-content] gap-y-[2.5rem] grid-cols-[1fr] grid-rows-[max-content] md:pt-0 md:gap-y-[1rem]">
                  <CardF
                    img="https://ik.imagekit.io/brightintern/home_page/Anusha-min.png"
                    con="BrightIntern is a great platform with missions to get hands-on experience solving the problems of startups. My journey with BrightIntern was awesome and it feels great that I was a part of it."
                  />
                  <CardF
                    con="
At first, I joined because it seemed like a great opportunity to learn and put my skills at work. It turned out to be an amazing experience. Loved the way students can get referrals by giving their best performance in the missions."
                  />
                  <CardF
                    img="https://ik.imagekit.io/brightintern/home_page/Deepika-min.png"
                    con="I especially like the fact that the missions are set at a higher standard of work which are actually related to early stage startups, and you are constantly being pushed to refine your skills further"
                  />
                  <CardF
                    con="Joining BrightIntern is the best thing I have ever done. The virtual internship gave me the experience I needed in content marketing.
"
                  />
                  <CardF con="After discovering the idea, I got the conviction that BrightIntern is disrupting the way companies hire interns in the near future" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto bg-[#F4F5F7] rounded-[30px] gl:h-[480px]">
            <div className="overflow-hidden text-[#0c0c0c]">
              <div className="flex pt-[4rem] pb-[3rem] flex-col items-center text-center">
                <div className="text-[#0c0c0c] text-[1.25rem] leading-[1.75] font-['ClashDisplay-Variable'] font-[500] max-w-[626px] md:px-[1rem]">
                  Take action to puruse your dream career by completing virtual
                  internship missions and prove your skills with results
                </div>
              </div>
            </div>
            <div className="grid auto-cols-[1fr] grid-rows-[auto] grid-cols-[1fr_1fr] md:grid-cols-[1fr] gap-[2rem] px-[4rem] md:px-[1rem]">
              <MCard
                no="01"
                name="Be no.1 like Google search engine, 
Youtube and Android"
              />
              <MCard
                no="02"
                name="Obsess with customer like Amazon to
solve problems according to changing trends"
              />
              <MCard
                no="03"
                name="Move fast like Meta. Build and learn
faster than anyone else."
              />
              <MCard
                no="04"
                name="Build great products like Apple. that are 
not just good, but also awe-inspiring"
              />
            </div>
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
          </div>
        </div>
      </div>
      <Footer />
      {/*
        snapped at 20 march 4:52 for later
         <div className="bg-[#fff]">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto w-[100%]">
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div>
              <div className="grid justify-center justify-items-center auto-cols-[1fr] gap-x-[1.5rem] gap-y-[1.5rem] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
                <CardM />
                <CardM />
                <CardM />
                <CardM />
                <CardM />
                <CardM />
              </div>
            </div>

            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#e6e6e6]"></div>
      <div className="">
        <div className="page-padding ">
          <div className="max-w-[72.5rem] !mx-auto w-[100%]">
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div className="grid grid-rows-[auto] auto-cols-[1fr] gap-x-[2.5rem] gap-y-[2rem] grid-cols-[1fr_1fr] md:gap-y-[1rem] md:grid-cols-[1fr]">
              <div>
                <div className="text-[0.75rem] text-[#2667ff] font-[600] ">
                  HOW IT WORKS
                </div>
                <div className="pb-[0.5rem]"></div>
                <h3 className="text-[2rem] leading-[1.25] font-[700]">
                  The journey you will take
                </h3>
              </div>
              <div className="grid auto-cols-[1fr] gap-x-[2.5rem] gap-y-[2rem] grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:gap-y-[1rem] md:grid-cols-[1fr]">
                <Step no="1" />
                <Step no="2" />
                <Step no="3" />
                <Step no="4" />
              </div>
            </div>

            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default missions;
