import React from 'react'

const Button = () => {
  return (
    <div>
      <div className="flex items-center gap-7 mt-9">
        <button className='text-white font-semibold  whitespace-nowrap font-lato text-base py-[14px] px-6 max-w-[102px] border border-solid border-white rounded-full hover:bg-white hover:text-[#43BBFF] duration-200 transition-all ease-linear'>Sign up</button>
        <button className='text-white font-semibold  whitespace-nowrap font-lato text-base py-[14px] px-6 max-w-[102px] border border-solid border-white rounded-full hover:bg-white hover:text-[#43BBFF] duration-200 transition-all ease-linear'>Login</button>
      </div>
    </div>
  );
}

export default Button