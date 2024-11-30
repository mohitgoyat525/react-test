import React from 'react'

const CommonPaybtn = ({ PayCardBtn }) => {
  return (
      <div><button className='mt-6 mb-10 max-lg:mb-5 w-[341px] border border-solid border-[#FF5501] py-3 flex items-center justify-center text-[#FF5501] bg-white text-base font-semibold '>{PayCardBtn}</button></div>
  )
}

export default CommonPaybtn