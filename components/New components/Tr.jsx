import React from "react";

const Tr = (props) => {
  return (
    <>
      <td className="text-left w-[9%] border-b border-solid border-[#eff2f5] p-[10px] bg-[#fff] font-[500] whitespace-nowrap">
        <div>{props.no}</div>
      </td>
      <td className="text-left w-[50%] border-b border-solid border-[#eff2f5] p-[10px] bg-[#fff] font-[500] whitespace-nowrap">
        <div className="flex items-center cursor-pointer">
          <div className="flex items-center justify-center leading-[32px] w-[32px] h-[32px] rounded-[100%] bg-no-repeat bg-[length:16px] bg-center  ">
            <img src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"></img>
          </div>

          <div className="ml-[12px] flex flex-row  ">
            <span>g***e</span>
          </div>
        </div>
      </td>
      <td className="text-right w-[41%] border-b border-solid border-[#eff2f5] p-[10px] bg-[#fff] font-[500] whitespace-nowrap">
        <div>128340</div>
      </td>
    </>
  );
};

export default Tr;
