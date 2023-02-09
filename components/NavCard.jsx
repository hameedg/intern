const NavCard = (props) => {
  return (
    <div className="flex items-start gap-x-[0.75rem] rounded-[1rem] p-[1rem] hover:bg-[#1b1b1b]">
      <div className="flex w-[1.5rem] h-[1.5rem] justify-center items-center flex-grow-0 flex-shrink-0 basis-auto rounded-[0.5rem] bg-[#2667ff]">
        <div className="flex ">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.25959 10.1472C3.98453 12.2527 3.82064 14.3713 3.76859 16.4942C6.64737 17.6967 9.40374 19.1735 11.9996 20.9042C14.5957 19.1735 17.3525 17.6967 20.2316 16.4942C20.1795 14.3713 20.0156 12.2527 19.7406 10.1472M4.25859 10.1472C3.3802 9.85186 2.49387 9.58076 1.60059 9.33416C4.86398 7.04608 8.34758 5.08938 11.9996 3.49316C15.6516 5.08905 19.1352 7.04541 22.3986 9.33316C21.5026 9.58116 20.6156 9.85316 19.7406 10.1472M4.25859 10.1472C6.92724 11.0443 9.51653 12.1622 11.9996 13.4892C14.4823 12.1622 17.0713 11.0444 19.7396 10.1472M6.74959 15.0002V11.3252C8.44632 10.2705 10.1989 9.30843 11.9996 8.44316M4.99259 19.9932C5.55056 19.4366 5.99302 18.7752 6.29455 18.047C6.59608 17.3189 6.75072 16.5383 6.74959 15.7502V14.2502M6.74959 15.0002C6.9485 15.0002 7.13926 14.9211 7.27992 14.7805C7.42057 14.6398 7.49959 14.4491 7.49959 14.2502C7.49959 14.0513 7.42057 13.8605 7.27992 13.7198C7.13926 13.5792 6.9485 13.5002 6.74959 13.5002C6.55067 13.5002 6.35991 13.5792 6.21926 13.7198C6.0786 13.8605 5.99959 14.0513 5.99959 14.2502C5.99959 14.4491 6.0786 14.6398 6.21926 14.7805C6.35991 14.9211 6.55067 15.0002 6.74959 15.0002Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </div>
      </div>
      <div>
        <div className="font-[500] text-[1rem] font-inter leadding-[1.7] tracking-[-0.015em] mb-[3px] ">
          {props.name}
        </div>
        {/* <div className="text-[0.875rem] text-[#808080] leading-[1.7] font-inter tracking-[-0.015em]">
          Expert-led live sessions that prepare you for the real world
        </div> */}
      </div>
    </div>
  );
};

export default NavCard;
