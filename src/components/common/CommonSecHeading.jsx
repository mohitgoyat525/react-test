import React from 'react'

const CommonSecHeading = ({ SectionHeading, SectionSpanHeading }) => {
  return (
    <div>
      <h2 className="text-center font-semibold text-[#191D23] text-[40px] max-lg:text-3xl max-md:text-2xl">
        {SectionHeading}
        <span
          className="text-[#409DEE]">{SectionSpanHeading}</span>
      </h2>
    </div>
  );
};

export default CommonSecHeading