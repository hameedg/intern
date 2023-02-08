import Navbar from "../components/Navbar";
import NewCard from "../components/NewCard";
import FAQ from "../components/FAQ";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Footer from "../components/Footer";

const internship = () => {
  return (
    <>
      <div className="bg-[#1b1b1b] font-inter">
        <Navbar />

        {/* frontend development */}
        <div className="section1">
          <div className="section1-wrapper">
            <div className="section1-container flex justify-center">
              <div className="section1-inner">
                <div className="padding"></div>
                <h1 className="tag-line font-['ClashDisplay-Variable'] text-center text-[2.4rem] gl:font-[600] gl:leading-[1.5rem] gl:tracking-[0.01em]">
                  Frontend Development Internship
                </h1>
                <div className="pt-0 px-0 pb-[2rem]"></div>
                <div className="flex flex-row gap-[2rem]">
                  <div className="blue-button">Register Today</div>
                </div>
                <div className="pt-0 px-0 pb-[6rem]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------- */}

        <div className="section1 bg-[#0c0c0c] p-[2rem]">
          <div className="section1-wrapper">
            <div className="section1-container">
              <div className="text-[#fff] flex justify-around sm:flex-col items-center">
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text ">Commitment</p>
                  <p>20-24 hours/week</p>
                </div>
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text">Duration</p>
                  <p>3 Months</p>
                </div>{" "}
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text">Location</p>
                  <p>Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next section */}
        <div className="bg-[#fff]">
          <div className="section1-wrapper">
            <div className="section1-container">
              <div className="px-0 pt-0 pb-[6rem]"></div>
              <div className="md:grid-cols-[1fr] md:gap-y-[1rem] grid grid-rows-[auto] auto-cols-[1fr] gap-x-[2.5rem] gap-y-[2rem] grid-cols-[1fr_1fr] ">
                <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]  ">
                  <h3 className="tag-line font-['ClashDisplay-Variable'] font-[600] w-[350px] gl:ml-[100px] leading-[1.5] text-[1.9rem]">
                    Selected intern s day-to-day responsibilities include:
                  </h3>
                </div>
                <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]  ">
                  <div className="table col-start-1 row-start-1 col-end-2 row-end-2 ">
                    <ul className="list-disc text-[1rem] tracking-[-0.015em]">
                      <li className="leading-[1.75rem] text-[1rem]">
                        Building reusable components and front-end pages using
                        React/Next.js
                      </li>
                      <li className="leading-[1.75rem] text-[1rem]">
                        Optimizing components for maximum performance across a
                        vast array of web-capable devices and browsers
                      </li>
                      <li className="leading-[2rem] text-[1rem]">
                        Translating designs and wireframes into code of good
                        quality
                      </li>
                      <li className="leading-[2rem] text-[1rem]">
                        Developing new user-facing features using React/Next.js
                      </li>
                      <li className="leading-[2rem] text-[1rem]">
                        Building, debugging and fixing the frontend issues
                      </li>
                      <li className="leading-[2rem] text-[1rem]">
                        Creating and maintaining technical documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-0 px-0 pb-[6rem]"></div>
            </div>
          </div>
        </div>
        {/* ---------------- */}

        {/* next section */}
        <div className="bg-[#1b1b1b]">
          <div className="section1-wrapper">
            <div className="section1-container">
              <div className="px-0 pt-0 pb-[6rem]"></div>
              <h3 className="tag-line text-center text-[#fff] font-['ClashDisplay-Variable'] sm:text-[2rem]">
                What you could win
              </h3>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid auto-cols-[1fr] gap-x-[2rem] gap-y-[2rem] grid-cols-[1fr_1fr_1fr] grid-rows-[auto]">
                <NewCard
                  no="01"
                  name="Completion Rewards"
                  para="10,000 IQT Tokens in completion rewards depending on quests completed"
                />
                <NewCard
                  no="02"
                  name="Internship Offer"
                  para="Best performers receive full-time internship offers from startups"
                />
                <NewCard
                  no="03"
                  name="Referral"
                  para="Top performers also receive referrals to leading tech companies"
                />
              </div>
              <div className="px-0 pt-0 pb-[6rem]"></div>
            </div>
          </div>
        </div>
        {/* -------- */}
        <div className="bg-[#fff] text-[#000]">
          <div className="pt-[60px] pb-[50px] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
            <div className="relative z-[11] w-[100%] md:flex-col">
              <div className="font-['ClashDisplay-Variable'] max-w-[800px] sm:text-[30px] mx-auto text-center md:text-[35px] lg:text-[38px] lg:leading-[100%] text-[2rem] leading-[58px] sm:leading-[1.3] font-[600]">
                Who is this Internship curated for?
              </div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] mt-[64px] grid-rows-[auto] grid auto-cols-[1fr] gap-x-[1.8rem] gap-y-[3rem] grid-cols-[1fr_1fr_1fr] ">
                <Card4
                  text="Students"
                  para="wanting to learn new skills/upskill and gain work experience"
                  img="https://www.linkpicture.com/q/62f931550825c85c0425bae1_Group-16733.png"
                />
                <Card4
                  text="Fresh Graduates"
                  para="Fresh off the boat graduates who want to land their dream job."
                  img="https://static.rock.so/file/6KNZ2ZMK~/6KNZ2ZMK/c7cc72aafa183d12b04e6f9462aaa9a0/t-image.png"
                />
                <Card4
                  text="Working Professionals"
                  para="who want to grow in their career and become an expert"
                  img="https://www.linkpicture.com/q/62f931550825c8398d25bad9_Ellipse-2600.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="bg-[#fafafa] text-[#000]">
          <div className="pt-[60px] pb-[50px] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
            <div className="relative z-[11] w-[100%] md:flex-col">
              <div className="font-['ClashDisplay-Variable'] max-w-[800px] sm:text-[30px] mx-auto text-center md:text-[35px] lg:text-[38px] lg:leading-[100%] text-[2rem] sm:leading-[1.4] leading-[58px] font-[600]">
                Learning experience designed for career success
              </div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] mt-[64px] grid-rows-[auto] grid auto-cols-[1fr] gap-x-[1.8rem] gap-y-[3rem] grid-cols-[1fr_1fr_1fr] ">
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Live_Sessions.svg"
                  title="Live Sessions"
                  text="Our live sessions will help you engage and connect with professionals from leading
                  tech companies to learn more."
                />
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Performance_Learning.svg"
                  title="Performance Learning"
                  text="Reinforce your learnings after each assignment/quest with mentor led feedback sessions or
                  work reviews and receive guidance on the areas you need to improve.
                  "
                />
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Career_Advancement.svg"
                  title="Career Advancement"
                  text="Skill, Reskill and Upskill with real work experience. Learn what you need to get where you
                  want to and advance in your career"
                />{" "}
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Diverse_Community.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675700738525"
                  title="Diverse Community"
                  text="Be a part of our diverse community of talented individuals where you can grow as an
                  individual, learn new skills and advance your career"
                />{" "}
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Discover_your_dream_job.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675700738493"
                  title="Discover Your Dream Job"
                  text="Get your dream job with the experience of building the startups of tomorrow being a part of them"
                />{" "}
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Project_based_learning.svg"
                  title="Project Based Learning"
                  text="You will experience the experiential learning at its best as you will be working with
                  startups for real"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ------ */}
        {/* next section  */}
        <div className="bg-[#fff] text-[#000]">
          <div className="pt-[60px] pb-[50px] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
            <div className="relative z-[11] w-[100%] md:flex-col">
              <div className="font-['ClashDisplay-Variable'] max-w-[800px] sm:leading-[1.4] sm:text-[30px] mx-auto text-center md:text-[35px] lg:text-[38px] lg:leading-[100%] text-[2rem] leading-[58px] font-[600]">
                Benefits you receive upon completion
              </div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] mt-[64px] grid-rows-[auto] grid auto-cols-[1fr] gap-x-[1.8rem] gap-y-[3rem] grid-cols-[1fr_1fr_1fr] ">
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Interview_Preparations.svg"
                  title="Interview Preparations"
                  text="Discover smart, unique perspectives on Interview Preparation to establish yourself as a top
                  candidate during the hiring process"
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Guaranteed_Interview.svg"
                  title="Guaranteed Interviews"
                  text="Best performers will get a guaranteed interview for internships with PPOs from leading tech
                  companies and startups"
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Internship_Completion_Certificate.svg"
                  title="Internship Completion Certificate"
                  text="Showcase your proof of work with an experience letter and celebrate your wins along with
                  internship certificate"
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Featured_Opportunities.svg"
                  title="Featured Opportunities"
                  text="Get on the fast track and apply on the go to exclusive handpicked opportunities
                  "
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Exclusive_Community_Access.svg"
                  title="Exclusive Community Access"
                  text="Get exclusive access to interns who interned with industries leading employers, mentors
                  working at the world's best companies, startup founders and more.."
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/Access_Resources.svg"
                  title="Access Resources"
                  text="Enhance your learning experience with access to multiple authentic resources"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ---------- */}

        {/* faq section */}
        <div className="bg-[#fff]">
          <div className="p-[3.75rem] md:px-[1.5rem] lg:p-[2.8846153846153846rem_2rem] ">
            <div className="max-w-[82.5rem] mx-auto w-full">
              <div className="sm:pt-[1rem] sm:pb-[0.5rem] sm:px-[0.5rem] md:pt-[2rem] md:pb-[1rem] md:px-[1rem] lg:pt-[2.8846153846153846rem] lg:pb-[1.923076923076923rem] lg:px-[1.923076923076923rem] lg:flex-col flex mx-auto py-[3.75rem] px-[5rem] justify-between items-start rounded-[1rem] bg-[#f4f5f7]">
                <div className="md:mb-[1.5rem] md:mx-[1rem] lg:w-auto lg:mb-[2rem] lg:px-[0.5rem] w-[34%] font-inter text-[1rem] leading-[1.5] font-[400]">
                  <h2 className="tag-line md:text-[2rem] md:leading-[1.25] font-['ClashDisplay-Variable'] font-[600]">
                    Frequently asked questions
                  </h2>
                </div>
                <div className="lg:w-[100%] grid w-[57%] auto-cols-[1fr] auto-rows-max gap-x-0 gap-y-[1rem] grid-cols-[1fr] grid-rows-[max-content]">
                  <FAQ
                    ques="Who can apply for this internship ?"
                    mat="Students who completed at least two quests and having relevant skills/interests are eligible to apply
for this internship."
                  />
                  <FAQ
                    ques="How are interns matched to startups?"
                    mat="After completing the quests, students are matched to startups based on their ideas of interest and a
variety of factors including, but not limited to problem solving skills, innovative index, level of product
ownership etc."
                  />
                  <FAQ
                    ques="Will I receive a certificate upon completion of internship?"
                    mat="Yes! You will be receiving the internship completion certificate along with an experience letter from the
                    startup you will be working with"
                  />
                  <FAQ
                    ques="What is the criteria for one to get referrals upon completion?"
                    mat="Given the fact that our quests and internships are very competitive, the best performers or top 1%
                    interns can expect to get referrals to leading tech companies and startups"
                  />
                  <FAQ
                    ques="I was rejected, can I be reconsidered or apply again?"
                    mat="Unfortunately, due to the overwhelming demand from students, we cannot reconsider applications
                    after they have been rejected. However, we welcome anyone who meets the internship criteria to
                    reapply for a future internship"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------- */}

        <div className="bg-[#fff]">
          <div className="section1-wrapper">
            <div className="section1-container">
              <div className="pt-0 px-0 pb-[6rem]"></div>
              <div className="md:grid-cols-[1fr] grid auto-cols-[1fr] gap-x-[2rem] gap-y-[2rem] grid-cols-[1fr_1fr] grid-rows-[auto]">
                <div className="col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]">
                  <h2 className="tag-line md:text-[2rem] md:leading-[1.25] tracking-0 font-['ClashDisplay-Variable'] font-[600]">
                    Grow in the career you want{" "}
                  </h2>
                  <div className="pt-0 px-0 pb-[2rem]"></div>
                  <p className="text-[1.125rem] leading-[2rem] tracking-[-0.01em]">
                    There's no end to learning but there are endless beginnings.
                    We bring you an exciting internship opportunity to take your
                    career to the next level.
                    <br></br>
                    <br></br>
                    Apply today and take the first step towards the career of
                    your dreams. The time is now⏳
                  </p>
                  <div className="pt-0 px-0 pb-[2rem]"></div>
                  <div className="flex justify-start">
                    <div className="blue-button py-[0.875rem]">Contact us</div>
                  </div>
                </div>
                <div className="justify-self-end self-center col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]">
                  <img
                    src="https://ik.imagekit.io/internquest/Intern_Quest/Grow_in_the_career_you_want.svg"
                    loading="lazy"
                    alt=""></img>
                </div>
              </div>
              <div className="pt-0 px-0 pb-[6rem]"></div>
            </div>
          </div>
        </div>

        {/* ----------- */}
        <div className="bg-[#1b1b1b] text-[#fff]">
          <div className="pt-[5rem] pb-[5rem] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
            <div className="relative z-[11] w-[100%] max-w-[914px] md:flex-col">
              <h2 className="mb-[30px] font-clash font-[600] text-[32px] font-['ClashDisplay-Variable'] leading-[39px] flex justify-center text-center">
                Start your internship today
              </h2>

              <div className="flex items-center flex-col">
                <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                  Join the Conversation
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default internship;
