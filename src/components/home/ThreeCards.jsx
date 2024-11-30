import React from 'react'
import { CARD_DATA } from '../common/Helper'
import { BluePeopleIcon } from '../common/Icon'
import CardHeading from '../common/CardHeading'
import CardPara from '../common/CardPara'
import CommonSecHeading from '../common/CommonSecHeading'
const ThreeCards = () => {
  return (
    <>
          <div className='pt-[72px] max-lg:pt-10 max-md:pt-5'>
              <CommonSecHeading
                  SectionHeading="Lorem ipsum"/>
              <div className='flex items-center justify-center gap-6 mt-10 max-lg:mt-5 flex-wrap'>
                  <div> 
                  {CARD_DATA.map((value, i) => (
                      <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                          <BluePeopleIcon />
                          <CardHeading CardHeadings={value.heading} />
                          <CardPara CardParaText={value.para} />
                      </div>
                  ))}
                  </div>
                  <div>
                      {CARD_DATA.map((value, i) => (
                          <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                              <BluePeopleIcon />
                              <CardHeading CardHeadings={value.heading} />
                              <CardPara CardParaText={value.para} />
                          </div>
                      ))}
                  </div>
                  <div>
                      {CARD_DATA.map((value, i) => (
                          <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                              <BluePeopleIcon />
                              <CardHeading CardHeadings={value.heading} />
                              <CardPara CardParaText={value.para} />
                          </div>
                      ))}
                  </div>
              </div>
              <div className='flex items-center justify-center gap-6 flex-wrap mt-6'>
                  <div>
                      {CARD_DATA.map((value, i) => (
                          <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                              <BluePeopleIcon />
                              <CardHeading CardHeadings={value.heading} />
                              <CardPara CardParaText={value.para} />
                          </div>
                      ))}
                  </div>
                  <div>
                      {CARD_DATA.map((value, i) => (
                          <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                              <BluePeopleIcon />
                              <CardHeading CardHeadings={value.heading} />
                              <CardPara CardParaText={value.para} />
                          </div>
                      ))}
                  </div>
                  <div>
                      {CARD_DATA.map((value, i) => (
                          <div key={i} className='border border-solid border-white bg-[#CFEEFF] rounded-3xl w-full max-w-[365px] px-[30px] py-5'>
                              <BluePeopleIcon />
                              <CardHeading CardHeadings={value.heading} />
                              <CardPara CardParaText={value.para} />
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          </>
  )
}

export default ThreeCards
