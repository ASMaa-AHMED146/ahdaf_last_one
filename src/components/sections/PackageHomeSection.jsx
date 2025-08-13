import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actGetPacksges from '../../store/packages/act/actGetPackages';
import Slider from "../sliders/PackagesSlider";
import { SwiperSlide } from 'swiper/react'; 
import PackageItem from "../Items/PackageItem"
import CircularProgress from '@mui/material/CircularProgress';
import actGetOffers from '../../store/offers/act/actGetOffers';

export default function PackageHomeSection() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actGetPacksges());
        dispatch(actGetOffers());
    },[dispatch])
    const {items,loading,error}=useSelector((state)=>state.package);
    const {records}=useSelector((state)=>state.offer)

    
    
    const array=items[1]?.packages ||[];
    const offers=records[2]?.offers || []

    if(loading==='pending')
    {
        return <div>
            <CircularProgress className='w-[150px] h-[150px]'/>
        </div>
    }
    
  return (
    <>
        <div className=' w-full h-[100%]'>
            <Slider   title="باقاتنا المصممة خصيصًا لك" paragraph="استكشف مجموعة متنوعة من الباقات التي تناسب جميع احتياجاتك، سواء للتنظيف، التعقيم، أو خدمات الصيانة. اختر الباقة المثالية لك واستمتع براحة البال وجودة الخدمة." space={400} >
        {array?.map((el, index) => (
          <SwiperSlide key={el.id || index} className=''> 
            <PackageItem  el={el} />
          </SwiperSlide>
        ))}
      </Slider>
        </div>
        <div className=' w-full h-[100%]'>
            <Slider   title="عروضنا المميزة بانتظارك!" paragraph="اكتشف مجموعة من العروض الحصرية التي توفر لك خدماتنا المميزة بأسعار تنافسية. لا تفوت الفرصة، واغتنم أفضل الصفقات لتنظيف وتعقيم منزلك بكل احترافية." space={400} >
        {offers?.map((el, index) => (
          <SwiperSlide key={el.id || index} className=''> 
            <PackageItem  el={el} />
          </SwiperSlide>
        ))}
      </Slider>
        </div>
    </>
  )
}
