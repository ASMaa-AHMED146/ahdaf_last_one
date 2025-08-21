import React, { useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from '../Buttons/Button';

export default function ServicesSlider({ children, title, paragraph }) {
  const [swiper, setSwiper] = useState(null);

  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: 1, // شاشة صغيرة (أقل من 640px)
    breakpoints: {
      640: {
        slidesPerView: 2, // شاشة متوسطة (640px فما فوق)
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4, // شاشة كبيرة (1024px فما فوق)
        spaceBetween: 30
      }
    },
    pagination: {
      clickable: true,
    },
    // modules: [Pagination],
  };

  return (
    <div className="w-fullpt-5 md:px-12 px-5">
      <div className="flex justify-between pt-10 pb-5 px-6">
        <div>
          <h1 className="text-3xl font-medium">{title}</h1>
          <p className="mt-2 mb-5 md:text-xl">{paragraph}</p>
        </div>
        <div>
          {swiper && (
            <Button
              nextSlide={() => swiper.slideNext()}
              prevSlide={() => swiper.slidePrev()}
            />
          )}
        </div>
      </div>
      <Swiper onSwiper={setSwiper} {...swiperSettings}>
        {children}
      </Swiper>
    </div>
  );
}