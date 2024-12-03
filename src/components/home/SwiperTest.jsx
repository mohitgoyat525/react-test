
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";
import { SWIPER_TEST_DATA } from '../common/Helper';

const SwiperTest = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h2 className="text-center font-semibold text-[#101010] text-[40px] max-lg:text-3xl max-md:text-2xl pt-[135px] max-2xl:pt-24 max-xl:pt-11 max-lg:pt-4">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="font-lato font-medium text-base text-[#0A0A0A] text-center pb-11 max-lg:pb-6 max-sm:pb-4">
          Lorem ipsum dolor sit amet consectetur. Amet varius in enim.
        </p>
        <div className="w-full max-w-7xl">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              320: { slidesPerView: 1, spaceBetween: 10 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {SWIPER_TEST_DATA.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <img
                    className="w-full max-w-[267px] rounded-lg"
                    src={data.imgSrc}
                    alt='images'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default SwiperTest;
