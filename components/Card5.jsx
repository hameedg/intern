const Card5 = () => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] shadow-[0_0_2px_rgba(0_0_0_/_10%)] ">
      <div className="w-[40px] h-[40px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src="https://static.rock.so/file/6KNZ2ZMK~/6KNZ2ZMK/ea6da641323a3f35e36258683e21aa01/t-image.png"
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[16px] font-[500] md:text-[15px] ">
          Diverse Community
        </p>
        <p className="text-[#495057] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[15px]">
          You can be a part of our community, as the masterclasses engage in
          mentor and peer learning creating diversity.
        </p>
      </div>
    </div>
  );
};

export default Card5;
