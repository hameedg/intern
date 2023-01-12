import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <>
      <>
        <div>
          <Navbar />
          {/* ------------------------------ */}

          <div className="min-h-[100vh] bg-[#1b1b1b] flex justify-center items-center flex-col">
            <div className="w-[474px] h-[161px] font-clash font-[600] text-[64px] leading-[79px] text-center text-[#fff] font-['ClashDisplay-Variable']">
              Dare to dream. Dare to{" "}
              <span className="text-[#7E8EF1]">intern.</span>
            </div>
            <div className="mt-[19px] w-[660px] h-[56px] font-inter font-[400] text-[18px] leading-[22px] text-center tracking-[-0.01em] text-[#fff]">
              We re building a new path for students to gain work experience by
              completing virtual internships and ship meaningful products for
              startups of tomorrow.
            </div>
          </div>
          {/* ---------------------- */}
          <div className="bg-[#fff] px-[6.625rem] pt-[9.5rem] pb-[8.375rem]">
            <div className="mx-auto flex flex-col gap-[5rem] flex-wrap">
              <div className="flex flex-row gap-[4.25rem]">
                <div className="w-[60%]">
                  <Card
                    name="Our Story"
                    title="Helping students accelerate their careers
with work experience"
                    para="There is an incredible gap between the world of learning 
and work. InternQuest started with the belief that work
experience is the only thing that can bridge this opportunity
gap by enabling every student to launch and develop a career 
from anywhere."
                  />
                </div>
                <div
                  className="w-[40%]
]"
                >
                  <Card
                    name="Goal"
                    title="Helping students  get their
dream internships with
work experience "
                    para="Get your dream internship"
                    title1="My Dream Internship"
                    tag={
                      <div className="mt-[20px] text-[16px] leading-[26px flex flex-row sm:ml-[12px] sm:pl-[12px]">
                        <div className="ml-[-5px] box-content w-[50px] h-[50px] sm:w-[24px] sm:h-[24px] text-[16px] relative flex items-center flex-shrink-0 leading-[1] rounded-[50%] overflow-hidden z-[2] ">
                          <img
                            src="data:image/png;base64,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"
                            className="w-[100%] h-[100%] text-center object-cover "
                          ></img>
                        </div>
                        <div className="ml-[-20px] box-content w-[50px] h-[50px] sm:w-[24px] sm:h-[24px] text-[16px] relative flex items-center flex-shrink-0 leading-[1] rounded-[50%] overflow-hidden z-[2] ">
                          <img
                            src="data:image/jpeg;base64,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"
                            className="w-[100%] h-[100%] text-center object-cover "
                          ></img>
                        </div>
                        <div className="ml-[-20px] box-content w-[50px] h-[50px] sm:w-[24px] sm:h-[24px] text-[16px] relative flex items-center flex-shrink-0 leading-[1] rounded-[50%] overflow-hidden z-[2] ">
                          <img
                            src="data:image/png;base64,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"
                            className="w-[100%] h-[100%] text-center object-cover "
                          ></img>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
              <div>
                <div className="bg-[#fff] border gap-[30px] flex flex-row border-solid border-[#000] rounded-[25px] pl-[3rem] pr-[2rem] pt-[2.25rem] pb-[3.75rem]">
                  <div className="flex flex-col">
                    <div className="text-[#ED5A5A] font-['ClashDisplay-Variable'] font-[700] text-[40px] leading-[49px]">
                      Proof of work
                    </div>
                    <div className="mt-[20px] font-clash font-[500] text-[24px] font-['ClashDisplay-Variable'] leading-[30px] tracking-[0.02em] text-[#000]">
                      Transforming opportunity into results by making students
                      collaborate to build the next big thing
                    </div>
                  </div>
                  <div className="flex justify-center items-center font-inter font-[400] text-[18px] leading-[22px] tracking-[-0.01em]">
                    We believe that talent is equally distributed but
                    opportunity is not and everyone is driven by an innate
                    desire to learn and grow. By equipping people with in-demand
                    skills, and work experience, we can help them redefine their
                    careers. On the other hand, in collaboration with emerging
                    startups, we make students ship their products thereby
                    creating new skill standards and showing the proof of skills
                    for the same.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------ */}

          <div className="bg-[#F5F5F5] flex flex-col px-[6.625rem] pt-[3.125rem] pb-[8.375rem]">
            <div className="w-[1027px] font-['ClashDisplay-Variable'] h-[188px] ml-[106px] fonr-clash font-[700] text-[180px] leading-[221px] text-[#DFDFE4]">
              Our vision
            </div>
            <div className="mt-[34px] font-['ClashDisplay-Variable'] ml-[130px] w-[900px] h-[84px] font-[500] text-[30px] leading-[37px] tracking-[0.02em] text-[#000]">
              Developing a globally competitive talent pipeline by establishing
              new skill standards
            </div>
            <div className="mt-[34px] ml-[130px] w-[784px] h-[150px] font-[400] text-[18px] leading-[22px] tracking-[-0.01em] text-[#000]">
              We envision a future where anyone, anywhere, at anytime of their
              career is able to get today’s most in-demand skills and real-world
              experience they need to start their dream career without barriers
              like price, location, prior experience, or socio-economic
              background being an obstacle. One where untapped diverse talent is
              seen as a sustainable competitive advantage to propel the global
              economy.
            </div>
          </div>
          <Footer />
        </div>
      </>
    </>
  );
};

export default about;
