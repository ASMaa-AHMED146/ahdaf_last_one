// import React from 'react'
// import { SwiperSlide } from 'swiper/react'; 
// import Slider from "../sliders/ServSlider";
// import Item from '../Items/ServicePage';

// export default function CommonSlider({array}) {
//   return (
//     <div className=''>
//       <Slider title="خدمات منزلية" paragraph="خدمات تنظيف شاملة تتناسب مع احتياجات منزلك" >
//         {array?.map((el, index) => (
//           <SwiperSlide key={el.id || index} className=''> 
//             <Item id={el.id} el={el} />
//           </SwiperSlide>
//         ))}
//       </Slider>
//     </div>
//   )
// }
import React from 'react';
import { SwiperSlide } from 'swiper/react'; 
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "../sliders/ServSlider";
import Item from '../Items/ServicePage';

export default function CommonSlider({ array, titleKey, descriptionKey }) {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div className=''>
      <Slider 
        title={titleKey ? t(titleKey) : t('homeServices.title')} 
        paragraph={descriptionKey ? t(descriptionKey) : t('homeServices.description')}
      >
        {array?.map((el, index) => (
          <SwiperSlide key={el.id || index} className=''> 
            <Item id={el.id} el={el} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}