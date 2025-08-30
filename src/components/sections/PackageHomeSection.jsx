// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import actGetPacksges from '../../store/packages/act/actGetPackages';
// import Slider from "../sliders/PackagesSlider";
// import { SwiperSlide } from 'swiper/react'; 
// import PackageItem from "../Items/PackageItem"
// import CircularProgress from '@mui/material/CircularProgress';
// import actGetOffers from '../../store/offers/act/actGetOffers';

// export default function PackageHomeSection() {
//     const dispatch=useDispatch();
//     useEffect(()=>{
//         dispatch(actGetPacksges());
//         dispatch(actGetOffers());
//     },[dispatch])
//     const {items,loading,error}=useSelector((state)=>state.package);
//     const {records}=useSelector((state)=>state.offer)

    
    
//     const array=items.packages || [];
//     const offers=records.offers || [];

    

//     if(loading==='pending')
//     {
//         return <div>
//             <CircularProgress className='w-[150px] h-[150px]'/>
//         </div>
//     }
    
//   return (
//     <>
//         <div className=' w-full h-[100%]'>
//             <Slider   title="باقاتنا المصممة خصيصًا لك" paragraph="استكشف مجموعة متنوعة من الباقات التي تناسب جميع احتياجاتك، سواء للتنظيف، التعقيم، أو خدمات الصيانة. اختر الباقة المثالية لك واستمتع براحة البال وجودة الخدمة." space={400} >
//         {array?.map((el, index) => (
//           <SwiperSlide key={el.id || index} className=''> 
//             <PackageItem  el={el} />
//           </SwiperSlide>
//         ))}
//       </Slider>
//         </div>
//         <div className=' w-full h-[100%]'>
//             <Slider   title="عروضنا المميزة بانتظارك!" paragraph="اكتشف مجموعة من العروض الحصرية التي توفر لك خدماتنا المميزة بأسعار تنافسية. لا تفوت الفرصة، واغتنم أفضل الصفقات لتنظيف وتعقيم منزلك بكل احترافية." space={400} >
//         {offers?.map((el, index) => (
//           <SwiperSlide key={el.id || index} className=''> 
//             <PackageItem  el={el} />
//           </SwiperSlide>
//         ))}
//       </Slider>
//         </div>
//     </>
//   )
// }
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperSlide } from 'swiper/react'; 
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";
import CircularProgress from '@mui/material/CircularProgress';

import actGetPacksges from '../../store/packages/act/actGetPackages';
import actGetOffers from '../../store/offers/act/actGetOffers';
import Slider from "../sliders/PackagesSlider";
import PackageItem from "../Items/PackageItem"

export default function PackageHomeSection() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { isArabic } = useLanguage();

    useEffect(() => {
        dispatch(actGetPacksges());
        dispatch(actGetOffers());
    }, [dispatch])

    const { items, loading, error } = useSelector((state) => state.package);
    const { records } = useSelector((state) => state.offer)

    const array = items.packages || [];
    const offers = records.offers || [];

    if (loading === 'pending') {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <CircularProgress className='w-[150px] h-[150px]' />
            </div>
        )
    }

    return (
        <>
            <div className='w-full h-[100%]'>
                <Slider   
                    title={t('packages.title')} 
                    paragraph={t('packages.description')} 
                    space={400} 
                >
                    {array?.map((el, index) => (
                        <SwiperSlide key={el.id || index} className=''> 
                            <PackageItem el={el} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
            <div className='w-full h-[100%]'>
                <Slider   
                    title={t('offers.title')} 
                    paragraph={t('offers.description')} 
                    space={400} 
                >
                    {offers?.map((el, index) => (
                        <SwiperSlide key={el.id || index} className=''> 
                            <PackageItem el={el} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </>
    )
}