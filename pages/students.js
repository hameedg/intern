import React from "react";
import Typewriter from "typewriter-effect";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

const students = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#1b1b1b] text-[#fff]">
        <div className="bg-[#1b1b1b] text-[#fff] ">
          <div className="page-padding ">
            <div className="max-w-[72.5rem] mx-auto pt-[2rem]">
              <div className=" md:gap-y-[2rem] py-[4.3rem] gap-x-[4rem] flex justify-center items-center md:pt-[6.7rem] md:flex-col lg:pt-[5.8rem] lg:pb-[3rem] ">
                <div className="max-w-[700px] leading-[59.04px]  mb-0 flex-shrink-0 flex-grow-0 basis-auto z-[1] flex flex-col items-start lg:static lg:pb-[2.2rem] md:w-auto md:max-w-[none] md:text-center md:items-center">
                  <h1
                    className={`text-[2.5rem] font-['ClashDisplay-Variable'] sm:text-[2.1rem] sm: mt-[50px] tracking-normal sm:leading-[3rem] leading-[3.75rem] font-[500] mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug`}>
                    Build a work profile that gets you
                    <Typewriter
                      options={{
                        strings: ["referrals", "dream internships"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p className=" text-[1.25rem] font-[400] tracking-[-0.015em] leading-[1.7] font-inter mb-8 mt-0 text-[#9f9f9f]">
                    No more being ghosted. Stand out with a kickass work
                    portfolio demonstrating your skills by completing virtual
                    internships
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
      </div>
      <div className="overflow-hidden bg-[#0c0c0c] text-[#fff]">
        <div className="flex pt-[3.785rem] pb-[2.5rem] flex-col items-center text-center">
          <div className="text-[#fff] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
            A better way to land your dream internship
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="page-padding">
          <div className="max-w-[65rem] mx-auto">
            <div className="flex pt-[80px] pb-[2rem] flex-col items-center text-center">
              <div className="text-[#000] text-[1.5rem] leading-[1.33] font-['ClashDisplay-Variable'] font-[500]">
                Changing the approach...
              </div>
            </div>
            <div className="sm:grid-cols-[1fr]    grid-rows-[auto] grid auto-cols-[1fr] gap-x-[1.8rem] gap-y-[3rem] grid-cols-[1fr_1fr]">
              <Card
                title="Before BrightIntern"
                para="Overwhelmed applying for jobs, demoralised by lack of feedback, forever writing resumes, cover letters, and chasing recruiters."
              />
              <Card
                title="After BrightIntern"
                para="Focused time building and learning, supported by a community of like-minded builders, get referred by simply demonstrating your work experience."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffff] text-[#000] ">
        <div className="page-padding ">
          <div className="max-w-[617px] mx-auto bg-white  mt-[100px]   ">
            <h3
              className={`sm:text-[1.5rem] sm:leading-[1.5] sm:font-[500] font-['ClashDisplay-Variable'] text-[1.875rem] sm-mid-tablet:leading-snug antialiased tracking-[0] text-center font-[550] mb-[1rem]`}>
              Focus on what matters most ⏳
            </h3>
            <p className="text-[1rem] mb-8 leading-[1.7] text-center font-inter tracking-[-0.015em]">
              Keep learning and grow your skills by completing our missions,
              building your portfolio, and getting noticed by companies.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="p-[3.75rem] pt-[0] md:px-[1.5rem] lg:p-[2.8846153846153846rem_2rem] ">
          <div className="max-w-[82.5rem] mx-auto w-full">
            <div className="sm:pt-[1rem] sm:pb-[0.5rem] sm:px-[0.5rem] md:pt-[2rem] md:pb-[1rem] md:px-[1rem] 2xl:pt-[2.8846153846153846rem] 2xl:pb-[1.923076923076923rem] 2xl:px-[1.923076923076923rem] 2xl:flex-col flex mx-auto py-[3.75rem] px-[5rem] justify-center items-center rounded-[1rem] bg-[#f4f5f7]">
              <div className="lg:w-[100%] grid w-[57%] auto-cols-[1fr] auto-rows-max gap-x-0 gap-y-[1rem] grid-cols-[1fr] grid-rows-[max-content]">
                <FAQ
                  ques=" Show don’t tell"
                  mat="It’s impossible to convey your skill, passion, and uniqueness in a cover letter or CV. The most impactful way to communicate your skills isn’t to tell people what you can do, it’s to show them your work."
                />
                <FAQ
                  ques=" Virtual Internships to inspire you"
                  mat="Sometimes the hardest part of building a new project is knowing what to build. On BrightIntern, you’ll find a series of virtual internships and real-world projects to challenge and inspire you to gain more work experience."
                />
                <FAQ
                  ques="Spend more time building & less time applying"
                  mat="Cover letters, connecting on LinkedIn, re-working your CV, applying on internship portals and networking meet-ups. There are plenty of ways to spend time looking for an internship. But where you’ll see the biggest impact is to focus on continuing to learn and build interesting things to share with the right people.                  "
                />
                <FAQ
                  ques="It’s all about work experience"
                  mat="Building work experience is the best way to improve, learn valuable new skills, and impress companies.
                  "
                />
                <FAQ
                  ques=" You’re not alone, join our community"
                  mat="Find peers & grow your skills together, get support when you feel lost or stuck, have your code reviewed, and get feedback on your work.
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffff] text-[#000] mb-[60px]">
        <div className="page-padding ">
          <div className="max-w-[80rem] mx-auto bg-white">
            <div className="text-[7rem] font-[600] font-['ClashDisplay-Variable'] flex items-center justify-center text-[#dfdfe4]">
              Be a brightintern
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default students;
