const Card4 = () => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] sm:p-[16px] p-[24px] rounded-[6px] bg-[#fff] ">
      <div className="w-[56px] h-[56px] rounded-0 overflow-hidden mb-[24px]">
        <img
          src="https://static.rock.so/file/6KNZ2ZMK~/6KNZ2ZMK/c7cc72aafa183d12b04e6f9462aaa9a0/t-image.png"
          className="max-w-full align-middle inline-block"
        ></img>
      </div>
      <div className="flex flex-col gap-y-[8px] sm:items-start">
        <p className="sm:mt-[5px] pb-0 text-[16px] font-[600] md:text-[15px] ">
          Fresh Graduates
        </p>
        <p className="text-[#495057] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[15px]">
          Fresh off the boat marketers who want to land their dream job.
        </p>
      </div>
    </div>
  );
};

export default Card4;
