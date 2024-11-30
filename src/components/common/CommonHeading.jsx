import React from 'react'

const CommonHeading = ({ HeroSectionHeading }) => {
  return (
    <div>
      <h1 className='text-white font-extrabold text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-lato max-w-[786px] text-center pt-5'>{HeroSectionHeading}</h1>
    </div>
  );
};

export default CommonHeading