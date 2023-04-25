import React from "react";
import Navbar from "../components/Navbar";

const membership = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fff]">
        <div className="page-padding">
          <div className="max-w-[72.5rem] mx-auto">
            <div className="mt-[102px] flex flex-col gl:ml-[50px] relative">
              <div className="absolute w-[100%] h-auto top-0 left-0 mt-[80px]">
                <div className=" max-w-[486px] font-[500] text-[2rem] leading-[3rem] tracking-[-0.005em] font-['ClashDisplay-Variable'] mb-[20px]">
                  Virtual Internship Missions are here to help you excel
                </div>
                <div className="font-inter font-[400] text-[1.125rem] leading-[2rem] tracking-[-0.01em] max-w-[471px] mb-[40px]">
                  If you are serious about getting your dream internships, you
                  need more than certifications and capstone projects
                </div>
                <div className="flex items-start flex-col">
                  <div className="blue-button py-[0.875rem] text-[1rem] leading-[1.7] tracking-[-0.015em] font-inter ">
                    Apply for scholorship
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gl:ml-[90px] mb-[-50px] ">
                <svg
                  width="400"
                  height="473"
                  viewBox="0 0 450 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_38_106)">
                    <path
                      d="M254.377 353.173C253.135 353.8 251.802 354.227 250.427 354.437L235.415 356.735C234.823 384.563 245.438 411.204 265.41 431.176C266.499 432.271 267.794 433.14 269.22 433.73C270.647 434.321 272.176 434.623 273.72 434.619C276.859 434.619 279.81 433.397 282.029 431.177L338.47 374.738C359.747 353.461 362.565 320.25 345.169 295.77C345.033 295.579 344.919 295.378 344.795 295.182C321.542 315.104 295.961 332.16 268.299 346.137L254.377 353.173ZM88.5453 192.556C88.7559 191.181 89.1828 189.847 89.81 188.605L92.1286 184.018C107.709 153.183 127.078 124.966 149.967 99.6917C149.452 99.4084 148.956 99.0913 148.483 98.7425C124.224 80.5483 89.7301 83.0294 68.2452 104.513L11.8045 160.953C7.22273 165.535 7.22273 172.991 11.8045 177.573C31.782 197.55 58.4181 208.163 86.2469 207.57L88.5453 192.556ZM251.752 324.957L256.408 322.604C337.004 281.878 398.334 213.313 429.869 128.957L319.676 18.7638C233.328 48.1324 160.4 110.49 118.058 191.262L251.752 324.957ZM240.725 127.434C251.498 116.66 265.822 110.727 281.059 110.727C296.296 110.727 310.62 116.66 321.393 127.434C332.167 138.207 338.1 152.532 338.1 167.768C338.1 183.005 332.167 197.329 321.393 208.102C310.619 218.876 296.296 224.809 281.059 224.809C265.822 224.809 251.499 218.876 240.725 208.102C229.952 197.329 224.018 183.004 224.018 167.768C224.018 152.532 229.952 138.207 240.725 127.434ZM349.259 11.0584L438.39 100.189C442.975 79.3793 446.965 50.9256 449.944 17.3127C450.304 13.2425 448.943 9.38146 446.111 6.44064C443.287 3.50949 439.486 2.00304 435.429 2.21662C400.495 4.00255 370.915 7.06203 349.259 11.0584ZM221.672 332.165L110.818 221.31L104.521 262.447C104.203 264.555 104.382 266.708 105.047 268.734C105.711 270.759 106.841 272.601 108.345 274.112L168.871 334.638C170.381 336.143 172.223 337.274 174.249 337.938C176.275 338.602 178.428 338.782 180.536 338.462L221.672 332.165Z"
                      fill="#E5E6EC"
                    />
                    <path
                      d="M259.369 146.078C253.575 151.872 250.385 159.574 250.385 167.767C250.385 175.961 253.575 183.663 259.369 189.457C265.163 195.25 272.864 198.441 281.058 198.441C289.252 198.441 296.954 195.251 302.748 189.457C308.542 183.663 311.732 175.961 311.732 167.767C311.732 159.574 308.542 151.872 302.748 146.079C296.954 140.285 289.253 137.094 281.058 137.094C272.865 137.094 265.163 140.285 259.369 146.078ZM103.922 343.882C98.7742 338.733 90.4263 338.733 85.2777 343.882L42.2051 386.954C37.0565 392.103 37.0565 400.45 42.2051 405.599C44.7794 408.173 48.1536 409.46 51.5268 409.46C54.9 409.46 58.275 408.174 60.8485 405.599L103.922 362.525C109.071 357.377 109.071 349.03 103.922 343.882ZM65.5788 305.539C60.431 300.39 52.0832 300.39 46.9345 305.539L3.86196 348.612C-1.28667 353.761 -1.28667 362.108 3.86196 367.256C6.43628 369.831 9.8104 371.118 13.1836 371.118C16.5569 371.118 19.9319 369.831 22.5053 367.256L65.5788 324.183C70.7283 319.034 70.7283 310.687 65.5788 305.539ZM123.62 382.224L80.5465 425.297C75.3979 430.446 75.3979 438.793 80.5465 443.942C81.7693 445.168 83.2223 446.14 84.822 446.803C86.4217 447.466 88.1366 447.806 89.8682 447.804C93.2423 447.804 96.6165 446.517 99.1899 443.942L142.263 400.868C147.412 395.72 147.412 387.373 142.263 382.224C137.116 377.075 128.769 377.075 123.62 382.224Z"
                      fill="#E5E6EC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_38_106">
                      <rect width="450" height="450" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] text-[#fff] relative">
        <div className="page-padding">
          <div className="max-w-[72.5rem] mx-auto">
            <div className="gl:pt-[8.75rem] gl:px-[8rem] gl:pb-[8rem] p-[4rem] sm:p-[3rem] grid grid-rows-[auto] auto-cols-[1fr] grid-cols-[3fr_1fr] sm:grid-cols-[1fr] md:grid-cols-[1fr]">
              <div>
                <div className=" font-[500] text-[1.75rem] leading-[2.125rem] tracking-[-0.005em] font-['ClashDisplay-Variable'] mb-[30px]">
                  BrightIntern is a platform for top 1% internships
                </div>
                <div className="font-inter font-[400] text-[1.125rem] leading-[2em] tracking-[-0.015em] mb-[40px] opacity-[0.6]">
                  As a platform aimed at building a community of top 1% interns,
                  BrightIntern is highly selective and students who are
                  committed to showcase their skills to companies and excel in
                  their career are only awarded with membership with acceptance
                  rate less than 5%
                </div>
              </div>
              <div className="gl:pl-[2.5rem] md:pt-[2rem] md:flex md:justify-center md:items-center ">
                <img
                  src="https://ik.imagekit.io/hamysab/Vector__1_.png?updatedAt=1679650916238"
                  className="dm:w-[180px] dm:h-[180px] flex-grow-0 flex-shrink-0 basis-auto"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="page-padding">
          <div className="max-w-[72.5rem] mx-auto">
            <div className="grid grid-rows-[auto] auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr] gap-[5rem] pt-[7.25rem] pb-[4.875rem]">
              <div className="flex flex-col justify-center items-center">
                <div className="font-[700] font-['ClashDisplay-Variable'] text-[96px] leading-[118px] tracking-[-0.005em] text-[#000] opacity-[0.25]">
                  50+
                </div>
                <div className="font-['ClashDisplay-Variable'] font-[500] text-[24px] leading-[30px] tracking-[-0.005em] text-[#000]">
                  early stage startups
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-[700] font-['ClashDisplay-Variable'] text-[96px] leading-[118px] tracking-[-0.005em] text-[#000] opacity-[0.25]">
                  200+
                </div>
                <div className="font-['ClashDisplay-Variable'] font-[500] text-[24px] leading-[30px] tracking-[-0.005em] text-[#000]">
                  virtual internship missions
                </div>
              </div>{" "}
              <div className="flex flex-col justify-center items-center">
                <div className="font-[700] font-['ClashDisplay-Variable'] text-[96px] leading-[118px] tracking-[-0.005em] text-[#000] opacity-[0.25]">
                  100+
                </div>
                <div className="font-['ClashDisplay-Variable'] font-[500] text-[24px] leading-[30px] tracking-[-0.005em] text-[#000]">
                  dream companies
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pb-[5rem]">
              <p className="font-inter font-[400] text-[1.125rem] leading-[2em] tracking-[-0.015em] text-[#000] max-w-[624px]">
                The online courses generally have very low completion rate, that
                is students barely have enough motivation to work hard daily and
                complete the training/course.
                <br></br>
                <br></br>
                With actual early stage startups being associated with virtual
                internship missions, we want to ensure that accepted students
                complete the missions and receieve a feedback on their work.
              </p>
            </div>
            <div className="flex items-center gap-x-[1.875rem] rounded-[1.875rem] px-[3.125rem] py-[2rem] bg-[#F4F5F7] ">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto rounded-[0.5rem]">
                <div className="flex ">
                  <div className="font-['ClashDisplay-Variable'] text-[#c3c4c6] text-[8rem] leading-[9.8rem] font-[700] text-center tracking-[-0.005em]">
                    100$
                  </div>
                </div>
              </div>

              <div className="druk font-[400] text-[1.125rem] leading-[2em] tracking-[-0.015em] items-center ">
                In order to ensure that accepted students are serious about
                completing the virtual internship missions, BrightIntern
                requires only the accepted students to pay a small commitment
                fee of $100
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default membership;
