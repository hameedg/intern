const StepCard = (props) => {
  return (
    <div className="pr-[1rem] pb-[1rem] pl-[1.5rem] rounded-[1rem] bg-[#252525] max-w-[310px] max-h-[117.95px]">
      <div className="flex w-[3rem] h-[3rem] mt-[-1.5rem] justify-center items-center rounded-[5rem] bg-[#2667ff] ">
        <h5 className="text-[#fff] text-[0.938rem] leading-[1.5rem] tracking-[-0.015em] font-[600]">
          {props.number}
        </h5>
      </div>
      <div className="pb-[1rem] "></div>
      <h5 className="text-[#fff] text-[0.938rem] leading-[1.5rem] tracking-[-0.015em] font-[600] text-start font-inter">
        {props.content}
      </h5>
      <br></br>
    </div>
  );
};

export default StepCard;
