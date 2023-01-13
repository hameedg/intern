const Card4 = (props) => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] ">
      <div className="w-[56px] h-[56px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src={props.img}
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[1.125rem] font-[600] font-['ClashDisplay-Variable'] ">
          {props.text}
        </p>
        <p className="text-[#495057] text-[1rem] tracking-[-0.015em] leading-[1.75rem]">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Card4;
