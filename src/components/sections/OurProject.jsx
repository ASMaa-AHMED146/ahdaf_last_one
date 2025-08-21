import React, { useState, useEffect, useRef } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useSelector } from 'react-redux';
import '../../styles/OurProjects.css'; 


export default function Ourprojects({images}) {
  const swiperRef = useRef(null);
  
  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevious = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div className="pb-[50px] px-4 " dir="rtl">
      <h2 className="font-[500] text-[30px] mb-[20px] text-start px-[40px] ">أعمالنا</h2>
      {images.length > 0 ? (
        <>
          <div className="slider-container">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={images.length > 1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function (index, className) {
                  return `<span class="${className}"></span>`;
                },
              }}
              breakpoints={{
                1024: {
                  slidesPerView: Math.min(3, images.length),
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: Math.min(2, images.length),
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                 nextEl: '.custom-next-btn',
                 prevEl: '.custom-prev-btn',
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="px-2">
                    <img
                      src={image}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-48 object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={handlePrevious}
                className="custom-prev-btn bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A7474] transition-all duration-300"
                aria-label="السابق"
              >
                <GrNext className="text-xl hover:text-white" style={{ color: '#707070' }} />
              </button>

              <div className="dots-container mx-4">
                <div className="swiper-pagination-custom flex gap-2"></div>
              </div>

              <button
                onClick={handleNext}
                className="custom-next-btn bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A7474] transition-all duration-300"
                aria-label="التالي"
              >
                <GrPrevious className="text-xl hover:text-white" style={{ color: '#707070' }} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-10">لا توجد صور متاحة حالياً</div>
      )}
    </div>
  );
}