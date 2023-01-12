const Card3 = () => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] hover:shadow-md ">
      <div className="w-[40px] h-[40px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src="https://uploads-ssl.webflow.com/62bf0e5f584c8d82b4ebc07e/62f931efb5d6729512dc2aff_emojis-completion06.png"
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[16px] font-[500] md:text-[15px] ">
          Interview Preparations
        </p>
        <p className="text-[#495057] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[15px]">
          Improve your interview technique and resume with access to career
          resources.
        </p>
      </div>
    </div>
  );
};

export default Card3;
