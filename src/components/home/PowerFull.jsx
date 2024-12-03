import React from 'react';
import CommonSecHeading from '../common/CommonSecHeading';
import { BtnIcon } from '../common/Icon';
import CommonPayCardHeading from '../common/CommonPayCardHeading';
import { PAY_CARD_DATA } from '../common/Helper';
import CommonPayParaText from '../common/CommonPayParaText';
import CommonAmount from '../common/CommonAmount';
import CommonPaybtn from '../common/CommonPaybtn';

const PowerFull = () => {
  return (
    <>
      <div className="pt-[147px] max-xl:pt-16 max-md:pt-10 max-sm:pt-5">
        <CommonSecHeading
          SectionHeading="Powerful features for" SectionSpanHeading=" powerful creators"
        />
        <p className="text-center font-normal text-xl text-[#191D23] pt-5 pb-10 max-md:pb-5">
          Choose a plan that’s right for you
        </p>
        <div className="flex items-center gap-6 justify-center">
          <p className="font-normal text-base text-[#191D23]">Pay Monthly</p>
          <BtnIcon />
          <p className="font-normal text-base text-[#191D23]">Pay Yearly</p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-6 mt-12 max-xl:mt-7 max-md:mt-4 flex-wrap pb-24 max-md:pb-10 max-sm:pb-5">
        {PAY_CARD_DATA.map((data, i) => (
          <div key={i} className="">
            <CommonPayCardHeading CommonPayCardHeadingText={data.heading} />
            <CommonPayParaText CommonPayParaContent={data.para} />
            <CommonAmount PayAmount={data.amountText} MonthText={data.month} />
            <CommonPaybtn PayCardBtn={data.btn} />
            {data.payContent.map((obj, idx) => (
              <div className='flex gap-3 mb-3' key={idx}>
                {obj.icon}
                {obj.para}
              </div>
            ))} 
          </div>
        ))}
      </div>
    </>
  );
};

export default PowerFull;
