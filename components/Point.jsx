const Point = (props) => {
  return (
    <div>
      <div className="flex gap-x-[1rem] gap-y-[0.5rem] justify-start items-center font-inter sm:items-start">
        <div className="flex ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_421_8584)">
              <path
                d="M13.9997 2.33301C7.55967 2.33301 2.33301 7.55967 2.33301 13.9997C2.33301 20.4397 7.55967 25.6663 13.9997 25.6663C20.4397 25.6663 25.6663 20.4397 25.6663 13.9997C25.6663 7.55967 20.4397 2.33301 13.9997 2.33301ZM13.9997 19.833C13.358 19.833 12.833 19.308 12.833 18.6663V13.9997C12.833 13.358 13.358 12.833 13.9997 12.833C14.6413 12.833 15.1663 13.358 15.1663 13.9997V18.6663C15.1663 19.308 14.6413 19.833 13.9997 19.833ZM15.1663 10.4997H12.833V8.16634H15.1663V10.4997Z"
                fill="#2667FF"></path>
            </g>
            <defs>
              <clipPath id="clip0_421_8584">
                <rect width="28" height="28" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="p-[0.25rem] font-[400] ms:text-[1.125rem] text-[1rem] leading-[1.7] tracking-[-0.015em] flex items-center">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default Point;
