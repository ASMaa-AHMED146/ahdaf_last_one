// import React from 'react';
// import Slider from "../sliders/ServSlider";
// import Item from '../Items/ServiceItem';
// import { SwiperSlide } from 'swiper/react'; 

// export default function ServicesItem({ records }) {
//   const array = records[1]?.sub_services;
//   const services = records[3]?.sub_services || [];


//   return (
//     <>
//         <div>
//       <Slider title="خدمات منزلية" paragraph="خدمات تنظيف شاملة تتناسب مع احتياجات منزلك">
//         {array?.map((el, index) => (
//           <SwiperSlide key={el.id || index}> 
//             <Item id={3} el={el} />
//           </SwiperSlide>
//         ))}
//       </Slider>
//     </div>
//     <div>
//       <Slider title="خدمات منزلية" paragraph="خدمات تنظيف شاملة تتناسب مع احتياجات منزلك">
//         {services?.map((el, index) => (
//           <SwiperSlide key={el.id || index}> 
//             <Item id={12} el={el} />
//           </SwiperSlide>
//         ))}
//       </Slider>
//     </div>
//     </>
//   );
// }
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "../sliders/ServSlider";
import Item from '../Items/ServiceItem';

export default function ServicesItem({ records }) {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  
  const array = records[1]?.sub_services;
  const services = records[3]?.sub_services || [];

  return (
    <>
      <div>
        <Slider 
          title={t('homeServices.title')} 
          paragraph={t('homeServices.description')}
        >
          {array?.map((el, index) => (
            <SwiperSlide key={el.id || index}> 
              <Item id={3} el={el} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <div>
        <Slider 
          title={t('commercialServices.title')} 
          paragraph={t('commercialServices.description')}
        >
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