const Card5 = (props) => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] shadow-[0_0_2px_rgba(0_0_0_/_20%)] hover:shadow-md ">
      <div className="w-[60px] h-[60px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src={props.img}
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[1.125rem] font-[500] font-['ClashDisplay-Variable']">
          {props.title}
        </p>
        <p className="text-[#495057] text-[1rem] tracking-[-0.015em] leading-[1.75rem] ">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card5;
