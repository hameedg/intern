import React from "react";

const JobCard = (props) => {
  return (
    <>
      <div className="border p-[0.9375rem] group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
        <button type="button" className="text-left w-full">
          <div className="flex justify-between mb-2.5">
            <img
              width="90"
              height="90"
              className="rounded-md"
              src={props.img}
              alt="company_logo"
            ></img>
            <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl"></div>
          </div>
          <h4 className="font-medium text-base leading-[1.5] mb-2 font-inter">
            {props.name}
          </h4>
          <div className="flex items-center cursor-pointer mb-3 break-words truncate">
            <p className=" hover:text-highlight leading-4 text-sm font-inter">
              {props.text}
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default JobCard;
