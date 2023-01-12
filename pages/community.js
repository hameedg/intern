import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
const community = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center min-h-[360px]">
          <div className=" font-['ClashDisplay-Variable'] h-[125px] w-[510px] font-[600] text-[48px] leading-[59.04px] text-center mt-[186px] ">
            Work in a fast-paced,
            <span className="text-[#7E8EF1]"> &nbsp; global team</span>
          </div>
          <div className="mt-[15px] w-[570px] h-[51px] font-[400] text-[1.125rem] leading-[1.75rem] tracking-[-0.01em] text-center font-inter">
            Team up with some amazing individuals across the world passionate
            about building the next big thing and showcasing their skills
          </div>
        </div>
        <div className="mt-[100px]">
          <Map />
        </div>
        <div className="mt-[142px] flex flex-col ml-[105px] mb-[106px]">
          <div className="h-[145px] w-[748px] font-[500] text-[1.75rem] leading-[2.5rem]  font-['ClashDisplay-Variable']">
            There is immense power when a group of people with similar interests
            get together to work towards the same goals.
          </div>
          <div className="font-inter font-[400] text-[1.125rem] leading-[2rem] tracking-[-0.01em] w-[650px] h-[88px]">
            Imagine having a community of like-minded aspiring talented
            individuals from all over the world who are in this with you—where
            you can grow as an individual, learn new skills and advance your
            career.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default community;
