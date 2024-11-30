import React from 'react'

const CardPara = ({ CardParaText }) => {
  return (
    <div>
      <p className="text-base font-light text-[#101010] max-w-[305px] pt-4">{CardParaText}</p>
    </div>
  );
};

export default CardPara