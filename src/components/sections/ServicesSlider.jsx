import React from 'react';
import Slider from "../sliders/ServSlider";
import Item from '../Items/ServiceItem';
import { SwiperSlide } from 'swiper/react'; 

export default function ServicesItem({ records }) {
  const array = records[1]?.sub_services;
  const services = records[3]?.sub_services || [];


  return (
    <>
        <div>
      <Slider title="خدمات منزلية" paragraph="خدمات تنظيف شاملة تتناسب مع احتياجات منزلك">
        {array?.map((el, index) => (
          <SwiperSlide key={el.id || index}> 
            <Item id={3} el={el} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
    <div>
      <Slider title="خدمات منزلية" paragraph="خدمات تنظيف شاملة تتناسب مع احتياجات منزلك">
        {services?.map((el, index) => (
          <SwiperSlide key={el.id || index}> 
            <Item id={12} el={el} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
    </>
  );
}