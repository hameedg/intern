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
                  img="https://ik.imagekit.io/internquest/Intern_Quest/live_sessions.png"
                  title="Live Sessions"
                  text="You will experience interactive learning at its best. Our live masterclasses will help you engage and participate to learn more."
                />
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/performance.png"
                  title="Performance Learning"
                  text="Reinforce your learnings after each masterclass by mentor designed hands-on projects and receive guidance on career success."
                />
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/certificate.png"
                  title="Evaluation & Certificates"
                  text="Get immediate feedback and ratings upon completion of your projects by our leading mentors and get awarded with certificates."
                />
                <Card5
                  img="https://ik.imagekit.io/internquest/Intern_Quest/diverse_community.png"
                  title="Diverse Community"
                  text="You can be a part of our community, as the masterclasses engage in mentor and peer learning creating diversity."
                />
                <Card5
                  img=""
                  title="Discover Your Dream Job"
                  text="After project submission, you can kickstart your career by getting hired in world leading organizations."
                />
                <Card5
                  img=""
                  title="Mentor Based Learning"
                  text="We offer 1 on 1 support from top mentors to help guide you towards a more successful career journey."
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
                  img=""
                  title="Interview Preparations"
                  text="Improve your interview technique and resume with access to career resources."
                />
                <Card3
                  img=""
                  title="Guaranteed Interview"
                  text="The top 10% will get a guaranteed interview for job opportunities  with industries leading employers."
                />
                <Card3
                  img=""
                  title="Certificate Achievement"
                  text="Show employers that you have a clear understanding of the core concepts of data analysis."
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/62f931efb5d6721391dc2af7_emojis-completion02.png"
                  title="Featured Jobs"
                  text="Get on the fast track to in-demand jobs in growth hacking and more."
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/62f931efb5d672df37dc2af9_emojis-completion01.png"
                  title="Exclusive Community Access"
                  text="Access exclusive live sessions, panel discussions and group coaching with mentors and entrepreneurs from around the world."
                />
                <Card3
                  img="https://ik.imagekit.io/internquest/Intern_Quest/62f931efb5d6722a83dc2afd_emojis-completion05.png"
                  title="Access Resources"
                  text="Enhance your learning experience with access to multiple authentic resources."
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
                  <FAQ />
                  <FAQ />
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
                    Our team of experienced career professionals are available
                    to help you set a development plan to accelerate your
                    career. Get in touch!
                  </p>
                  <div className="pt-0 px-0 pb-[2rem]"></div>
                  <div className="flex justify-start">
                    <div className="blue-button py-[0.875rem]">Contact us</div>
                  </div>
                </div>
                <div className="justify-self-end self-center col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]">
                  <img
                    src="https://global-uploads.webflow.com/632462c7dd8a9721c67948b1/634c71f437a65300b1906170_contact-section-img.webp"
                    loading="lazy"
                    alt=""
                  ></img>
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
