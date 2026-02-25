import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';

import PromotionImages from '@/assets/promotion';

export const Promotion = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={false}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {PromotionImages.map((img) => (
          <SwiperSlide key={img.id}>
            <figure className="overflow-hidden md:w-50 md:h-22 w-28 h-14 object-cover p-2.5 mx-auto">
              <img src={img.src} alt={img.alt} className="w-full h-full" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
