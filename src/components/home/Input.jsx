import React from 'react'
import { SearchIcon } from '../common/Icon';


const Input = () => {
  return (
    <div>
      <div className="flex max-w-[435px] bg-[#E9E9E9] border border-solid border-[#BDBDBD] rounded-[15px] items-center justify-between mt-10 max-lg:mt-5">
        <div className="flex items-center gap-4 my-3 ms-3">
        <SearchIcon/>
          <input
            type="text"
            placeholder="Search"
            className="text-black font-normal text-base placeholder:text-black placeholder:text-base bg-transparent outline-none"
          />
        </div>
        <button className="my-[3px] me-[3px] py-[14px] px-7 border border-solid border-[#FF5501] bg-[#FF5501] rounded-[13px] max-w-[90px] text-white font-lato font-semibold text-base">
          Start
        </button>
      </div>
    </div>
  );
}

export default Input