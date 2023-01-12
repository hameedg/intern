const Card5 = (props) => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] hover:shadow-md ">
      <div className="w-[40px] h-[40px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src={props.img}
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[16px] font-[500] md:text-[15px] ">
          {props.title}
        </p>
        <p className="text-[#495057] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[15px]">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card5;
