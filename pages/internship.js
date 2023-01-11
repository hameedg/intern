import Navbar from "../components/Navbar";
import NewCard from "../components/NewCard";
import FAQ from "../components/FAQ";
import Card3 from "../components/Card3";

const internship = () => {
  return (
    <>
      <div className="bg-[#1b1b1b]">
        <Navbar />

        {/* frontend development */}
        <div className="section1">
          <div className="section1-wrapper">
            <div className="section1-container flex justify-center">
              <div className="section1-inner items-start">
                <div className="padding"></div>
                <h1 className="tag-line">Frontend Development</h1>
                <div className="pt-0 px-0 pb-[2rem]"></div>
                <div className="flex flex-row gap-[2rem]">
                  <div className="blue-button">Register Today</div>
                  <div className="section1-date flex-col items-start">
                    <p className="date-text">Submissions close in</p>
                    <p className="date">December 5, 2022</p>
                  </div>
                </div>
                <div className="pt-0 px-0 pb-[6rem]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------- */}

        <div className="section1 bg-[#0c0c0c]">
          <div className="section1-wrapper">
            <div className="section1-container">
              <div className="text-[#fff] flex justify-around sm:flex-col items-center">
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text">Commitment</p>
                  <p>12-24 hours/week</p>
                  <p>over 12 weeks</p>
                </div>
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text">Commitment</p>
                  <p>12-24 hours/week</p>
                  <p>over 12 weeks</p>
                </div>{" "}
                <div className=" h-[77px] w-[145px] flex flex-col justify-center items-center">
                  <p className="date-text">Commitment</p>
                  <p>12-24 hours/week</p>
                  <p>over 12 weeks</p>
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
                  <h3 className="tag-line">What we looking for</h3>
                </div>
                <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1]  ">
                  <div className="table col-start-1 row-start-1 col-end-2 row-end-2">
                    <p>
                      <strong>Outline</strong>
                    </p>
                    <p>
                      Entrepreneurship through acquisition allows individuals
                      interested in running their own business enterprises, to
                      acquire and operate a small to medium size business that
                      is cash flow positive (consistently makes money). The
                      focus of these new entrepreneurs is to find strategic
                      growth avenues in the companies they acquire.{" "}
                    </p>
                    <p>
                      <br></br>
                      <strong>How The Model Works</strong>
                    </p>
                    <p>
                      The entrepreneur or ‘Searcher’ raises a small fund from
                      investors to sustain themselves for the duration of the
                      search; this is known as a Search Fund. Once the Searcher
                      has found the company they want to acquire, the investors
                      that helped them raise the search fund, fund the
                      acquisition of the company. On average a search takes
                      between 12-18 months to conclude, but it can take much
                      longer or shorter depending on the individual Searcher and
                      their target market.&nbsp;
                    </p>
                    <p>‍</p>
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
              <h3 className="tag-line text-center text-[#fff]">
                What you could win
              </h3>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="pt-0 px-0 pb-[2rem]"></div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] grid auto-cols-[1fr] gap-x-[2rem] gap-y-[2rem] grid-cols-[1fr_1fr_1fr] grid-rows-[auto]">
                <NewCard />
                <NewCard />
                <NewCard />
              </div>
              <div className="px-0 pt-0 pb-[6rem]"></div>
            </div>
          </div>
        </div>
        {/* -------- */}

        {/* faq section */}
        <div className="bg-[#fff]">
          <div className="p-[3.75rem] md:px-[1.5rem] lg:p-[2.8846153846153846rem_2rem] ">
            <div className="max-w-[82.5rem] mx-auto w-full">
              <div className="sm:pt-[1rem] sm:pb-[0.5rem] sm:px-[0.5rem] md:pt-[2rem] md:pb-[1rem] md:px-[1rem] lg:pt-[2.8846153846153846rem] lg:pb-[1.923076923076923rem] lg:px-[1.923076923076923rem] lg:flex-col flex mx-auto py-[3.75rem] px-[5rem] justify-between items-start rounded-[1rem] bg-[#f4f5f7]">
                <div className="md:mb-[1.5rem] md:mx-[1rem] lg:w-auto lg:mb-[2rem] lg:px-[0.5rem] w-[34%] font-inter text-[1rem] leading-[1.5] font-[400]">
                  <h2 className="tag-line md:text-[2rem] md:leading-[1.25]">
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

        {/* next section  */}
        <div className="bg-[#fff] text-[#000]">
          <div className="pt-[94px] pb-[135px] relative flex w-[90%] max-w-[1160px] mx-auto justify-center items-center md:pt-[60px] md:pb-[120px] sm:w-[90%] lg:flex-col">
            <div className="relative z-[11] w-[100%] md:flex-col">
              <div className="mb-[30px] max-w-[800px] sm:text-[30px] mx-auto text-center md:text-[35px] lg:text-[38px] lg:leading-[100%] text-[40px] leading-[58px] tracking-[-0.04em] font-[700]">
                Choose a track that fits your career goals
              </div>
              <div className="sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] mt-[64px] grid-rows-[auto] grid auto-cols-[1fr] gap-x-[1.8rem] gap-y-[3rem] grid-cols-[1fr_1fr_1fr] ">
                <Card3 />
                <Card3 />
                <Card3 />
                <Card3 />
                <Card3 />
                <Card3 />
              </div>
            </div>
          </div>
        </div>
        {/* ---------- */}
      </div>
    </>
  );
};

export default internship;
