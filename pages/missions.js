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
            <div className="pb-[3rem] md:pb-[1.5rem]"></div>
            <div className="relative w-[60%] mx-auto pt-[4rem] pb-[8rem] text-[#f4f5f7] sm:w-[100%] md:w-[100%] lg:w-[100%]">
              <h1 className="text-center m-0 text-[3rem] leading-[1.25] font-[600] box-border md:text-[2rem] font-['ClashDisplay-Variable']">
                #ProveYourself with the skills not certificates
              </h1>
              <div className="pb-[1rem]"></div>
              <p className="pt-0 pb-0 text-center mt-0 mb-0 text-[1rem] leading-[1.5] font-[400] font-inter">
                Showcase your skills by competing with the best & completing
                virtual internship missions
              </p>
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
              </div>
            </div>
          </div>
        </div>
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
              <div className="flex pt-[3.5rem] pb-[2.5rem] flex-col items-center text-center">
                <div className="text-[#0c0c0c] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
                  Become internship ready with virtual internship missions
                </div>
              </div>
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
