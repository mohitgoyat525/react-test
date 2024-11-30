import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const MySwiper = () => {
  return (
    <>
      <h2 className="text-center font-semibold text-[40px] max-xl:text-3xl max-md:text-2xl text-[#0A0A0A]">
        Lorem ipsum dolor sit amet
      </h2>
      <div className="swiper-container py-8 flex items-center justify-center">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
          className="w-full max-w-7xl"
        >
          <SwiperSlide>
            <div className="p-4 bg-[#FFF3ED] rounded-3xl border border-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Slide 1</h3>
              <p>Content for slide 1.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-[#FFF3ED] rounded-3xl border border-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Slide 2</h3>
              <p>Content for slide 2.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-[#FFF3ED] rounded-3xl border border-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Slide 3</h3>
              <p>Content for slide 3.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-[#FFF3ED] rounded-3xl border border-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Slide 4</h3>
              <p>Content for slide 4.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MySwiper;
