"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        slidesPerView='auto'
        className='mySwiper'
      >
        {[0, 1, 2, 3].map((id) => (
          <SwiperSlide className='max-w-max' key={id}>
            <Image
              src='/hero.webp'
              alt='hero'
              height={552}
              width={1000}
              className='object-cover rounded-[16px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
