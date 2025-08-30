import React from 'react'
import { SwiperSlide } from 'swiper/react'; 
import Slider from "../sliders/ServSlider";
import Item from '../Items/ServicePage';

export default function CommonSlider({array ,title,paragraph}) {
  return (
    <div className=''>
      <Slider title={title} paragraph={paragraph}>
        {array?.map((el, index) => (
          <SwiperSlide key={el.id || index} className=''> 
            <Item id={el.id} el={el} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
