import Cards from "../components/Cards";
import Footer from "../components/Footer";

const dummy = () => {
  return (
    <>
      {/* <div className="block opacity-[1] z-[2000] text-center fixed top-0 left-0 w-[100%] h-[100%] overflow-x-hidden overflow-y-auto">
        <div className="max-w-[400px] min-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto flex items-center relative w-auto pointer-events-none ">
          <div className="relative flex flex-col w-[100%] pointer-events-auto bg-[#fff] bg-clip-padding rounded-[12px]">
            <div className="items-center flex-col text-center justify-center flex pt-[32px] pr-[32px] pl-[32px] pb-0 ">
              <h2 className="text-[28px] mb-[8px] ">Log in or sign up</h2>
              <p className="leading-[1.5] text-[16px] font-[400] mb-[8px] text-center">
                You need to have an account to continue to that content.
              </p>
            </div>
            <div className="relative flex-grow-[1] flex-shrink-[1] basis-auto pt-0 px-[32px] pb-[32px] ">
              <div className="blue-button">Sign Up</div>
              <div className="white-button mt-[8px]  border border-[#2667ff] hover:bg-[#f3f3f5]">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="group">
        <p>Some content that is always visible.</p>
        <p class="invisible group-hover:visible">
          I am hidden until my parent is hovered!
        </p>
      </div>
    </>
  );
};

export default dummy;

/**
 * 
 *       <div className="relative">
        <div
          class={
            !drop
              ? "w-full h-screen bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center"
              : "w-full h-screen bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center blur-sm fixed"
          }
        >
          <button className="text-[#fff] bg-[#000]" onClick={handle}>
            hello
          </button>
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />

          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
        </div>

      </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * {drop ? (
  <div className="block opacity-[1] z-[2000] text-center fixed top-0 left-0 w-[100%] h-[100%] overflow-x-hidden overflow-y-auto">
    <div className="max-w-[400px] min-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto flex items-center relative w-auto pointer-events-none ">
      <div className="relative flex flex-col w-[100%] pointer-events-auto bg-[#fff] bg-clip-padding rounded-[12px]">
        <div className="items-center flex-col text-center justify-center flex pt-[32px] pr-[32px] pl-[32px] pb-0 ">
          <h2 className="text-[28px] mb-[8px] ">Log in or sign up</h2>
          <p className="leading-[1.5] text-[16px] font-[400] mb-[8px] text-center">
            You need to have an account to continue to that content.
          </p>
        </div>
        <div className="relative flex-grow-[1] flex-shrink-[1] basis-auto pt-0 px-[32px] pb-[32px] ">
          <div className="blue-button">Sign Up</div>
          <div className="white-button mt-[8px]  border border-[#2667ff] hover:bg-[#f3f3f5]">
            Sign Up
          </div>
          <hr className="mt-[16px] mb-[16px] border border-[solid] border-[#e0e0e0]"></hr>
          <div
            className="white-button hover:bg-[#fff]"
            onClick={handle}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  </div>
) : null}**/
