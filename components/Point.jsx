const Point = (props) => {
  return (
    <div>
      <div className="flex mb-[16px] justify-start items-center font-inter">
        <div className="bg-[#2667FF] rounded-[50%] w-[28px] h-[28px] mr-[16px] text-center text-[1rem] font-inter text-[#fff] ">
          i
        </div>
        <div className="p-[0.25rem] font-[400] text-[1rem] leading-[1.7] tracking-[-0.015em] sm:text-[12px] md:text-[15px] flex items-center">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default Point;
