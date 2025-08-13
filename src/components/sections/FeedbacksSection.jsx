import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import actGetFeedback from "../../store/feedback/act/actGetFeedback";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import img from "../../assets/images/feedbackbackground.jpg";
import Feedbackitem from '../Items/FeedbackItem';

export default function FeedbacksSection() {
    const dispatch = useDispatch();
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        dispatch(actGetFeedback());
    }, [dispatch]);

    const { items, loading, error } = useSelector((state) => state.feed);
    const feedarray = items[0]?.data || [];

    const swiperSettings = {
        spaceBetween: 30,
        slidesPerView: 1, // شاشة صغيرة (أقل من 768px)
        breakpoints: {
            768: {
                slidesPerView: 2, // شاشة متوسطة (768px فما فوق)
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3, // شاشة كبيرة (1024px فما فوق)
                spaceBetween: 30
            }
        },
        pagination: {
            clickable: true,
        },
        // modules: [Pagination],
    };

    return (
        <div 
            className='p-[50px] flex relative h-[500px] md:mt-[50px] mt-[20px]' 
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='w-full h-full bg-[#000000D9] absolute top-0 left-0 z-1'></div>
            
            <div className='flex absolute w-full h-full top-0 right-0 z-30 items-center justify-center '>
                <button onClick={() => swiper?.slidePrev()} className="focus:outline-none md:mx-0 mx-[10px] ">
                    <SlArrowRight className='text-[40px] hover:scale-110 transition-transform cursor-pointer' style={{ color: "#FE8400" }} />
                </button>
                
                <div className=' w-[60%] lg:w-[70%] md:w-[80%] h-[100%] flex flex-col  '> 
                    <Swiper onSwiper={setSwiper} {...swiperSettings} className=' h-[100%] w-full flex items-center'>
                        {
                            feedarray.map((el) => (
                                <SwiperSlide key={el.id} className=' py-[100px] flex'>
                                    <div className='md:px-[10px] lg:px-[30px] px-[2px] '>
                                        <Feedbackitem el={el} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                
                <button onClick={() => swiper?.slideNext()} className="focus:outline-none md:mx-0 mx-[10px]">
                    <SlArrowLeft className='text-[40px] hover:scale-110 transition-transform cursor-pointer' style={{ color: "#FE8400" }} />
                </button>
            </div>
        </div>
    );
}