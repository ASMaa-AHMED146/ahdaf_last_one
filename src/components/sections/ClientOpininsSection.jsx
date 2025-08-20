import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import actGetFeedback from '../../store/feedback/act/actGetFeedback';
import Opinin from "../Items/ClientOpininItems";
import '../../styles/ClientOpininsdotSlice.css'; 

export default function ClientOpininsSection() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const array = state.feed.items[0]?.data ?? [];

    const swiperRef = useRef(null);

    useEffect(() => {
        const promise = dispatch(actGetFeedback());
        return () => {
            if (promise && promise.abort) {
                promise.abort();
            }
        };
    }, [dispatch]);

    if (!array.length) {
        return <div className="text-center p-10">...جاري تحميل آراء العملاء</div>;
    }

    const next = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const previous = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className="pb-[80px] px-4" dir="rtl">
            <h2 className="font-[500] text-[30px] mb-[20px] text-start px-[40px]">
                اراء عملائنا
            </h2>

            <div className="swiper-container">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    pagination={{
                        el: '.dots-container',
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: Math.min(3, array.length),
                        },
                        768: {
                            slidesPerView: Math.min(2, array.length),
                        },
                    }}
                >
                    {array.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <Opinin feedback={feedback} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 ">
                <button
                    onClick={previous}
                    className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A7474]  transition-all duration-300"
                    aria-label="السابق"
                >
                    <GrNext className="text-xl " style={{ color: '#707070' }} />
                </button>

                <div className="dots-container max-w-[200px] gap-[2px]  lg:max-w-[220px]  flex lg:gap-2 "></div>

                <button
                    onClick={next}
                    className="bg-[#F6F6F6] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1A7474] transition-all duration-300"
                    aria-label="التالي"
                >
                    <GrPrevious className="text-xl hover:text-white" style={{ color: '#707070' }} />
                </button>
            </div>
        </div>
    );
}