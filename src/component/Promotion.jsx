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
        slidesPerView={4}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {PromotionImages.map((img) => (
          <SwiperSlide key={img.id}>
            <figure className="overflow-hidden w-50 h-20 object-cover p-2.5">
              <img src={img.src} alt={img.alt} className="w-full h-full" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
