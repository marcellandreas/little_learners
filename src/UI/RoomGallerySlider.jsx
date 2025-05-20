import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const RoomGallerySlider = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, prevRef, nextRef]);

  return (
    <div className="flex col-span-3 md:col-span-3 flex-col relative">
      {/* SLIDER */}
      <div className="absolute top-[-20%] md:top-[-30%] left-1/2 -translate-x-1/2 transform w-full px-[30px] lg:px-10 z-10">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-5"
        >
          {data?.image.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt=""
                className="h-[200px] w-full object-cover rounded-[10px] border-2 border-grey-15"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* CARD CONTENT */}
      <div className="flex pt-[180px] px-[30px] lg:px-10 pb-[30px] flex-col gap-5 rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e]">
        <div className="flex flex-col md:flex-row gap-5 md:justify-between md:items-center">
          <div className="flex gap-4 justify-center md:order-2">
            <button
              ref={prevRef}
              className="flex !z-50 p-3 gap-[10px] rounded-md border-2 border-grey-20 bg-white"
            >
              <MdArrowBack className="w-6 h-6" />
            </button>
            <button
              ref={nextRef}
              className="flex z-50 p-3 gap-[10px] rounded-md border-2 border-grey-20 bg-white"
            >
              <MdArrowForward className="w-6 h-6" />
            </button>
          </div>
          <h3 className="text-grey-10 text-center font-raleway text-3xl 2xl:text-4xl font-bold">
            {data.name}
          </h3>
        </div>
        <p className="text-grey-30 md:text-left md:text-xl text-center font-outfit font-medium text-lg">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default RoomGallerySlider;
