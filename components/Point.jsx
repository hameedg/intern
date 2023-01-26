const Point = (props) => {
  return (
    <div>
      <div className="flex mb-[16px] justify-start items-center font-inter">
        <div className="gl:bg-[#2667FF] gl:rounded-[50%] gl:w-[28px] gl:h-[28px] mr-[16px] gl:text-center text-[1rem] font-inter text-[#fff] bg-[#2667FF] rounded-[50%] w-[8px] h-[8px]"></div>
        <div className="p-[0.25rem] font-[400] ms:text-[1.125rem] text-[1rem] leading-[1.7] tracking-[-0.015em] flex items-center">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default Point;
