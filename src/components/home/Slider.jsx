import React from "react";
import Slider from "react-slick";
import { CARD_DATA } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PeopleIcon } from "../common/Icon";
import CardHeading from "../common/CardHeading";
import CardPara from "../common/CardPara";

function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-center font-semibold text-[#101010] text-[40px] max-lg:text-3xl max-md:text-2xl pt-[135px] max-2xl:pt-24 max-xl:pt-11 max-lg:pt-4">
        Lorem ipsum
      </h2>
      <div className="slider-container py-8 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl">
          <Slider {...settings}>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
            <div>
              {CARD_DATA.map((obj, i) => (
                <div
                  key={i}
                  className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
                >
                  <PeopleIcon />
                  <CardHeading CardHeadings={obj.heading} />
                  <CardPara CardParaText={obj.para} />
                </div>
              ))}
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SimpleSlider;

