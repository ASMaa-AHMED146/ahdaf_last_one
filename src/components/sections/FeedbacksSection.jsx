import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actGetFeedback from "../../store/feedback/act/actGetFeedback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import img from "../../assets/images/feedbackbackground.jpg";
import Feedbackitem from '../Items/FeedbackItem';

export default function FeedbacksSection() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actGetFeedback());
    }, [dispatch]);

    const { items, loading, error } = useSelector((state) => state.feed);
    const feedarray = items[0]?.data || [];

    const sliderRef = useRef(null);
 
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };
 
    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div 
            className='p-[50px] flex relative h-[500px]' 
            style={{
                backgroundImage: `url(${img})`, // ✅ تم تصحيح الخطأ هنا
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='w-full h-full bg-[#000000D9] absolute top-0 left-0 z-1'></div>
            
            <div className='flex absolute w-full h-full top-0 right-0 z-30 items-center justify-center'>
                <button onClick={prevSlide} className="focus:outline-none md:mx-0 mx-[10px]">
                    <SlArrowRight className='text-[40px] hover:scale-110 transition-transform cursor-pointer' style={{ color: "#FE8400" }} />
                </button>
                
                <div className='w-[60%] lg:w-[70%] md:w-[80%] flex flex-col'> 
                    <Slider ref={sliderRef} {...settings} className='flex-col'>
                        {
                            feedarray.map((el) => (
                                <div className='md:px-[10px] lg:px-[30px] px-[2px]' key={el.id}>
                                    <Feedbackitem el={el} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                
                <button onClick={nextSlide} className="focus:outline-none md:mx-0 mx-[10px]">
                    <SlArrowLeft className='text-[40px] hover:scale-110 transition-transform cursor-pointer' style={{ color: "#FE8400" }} />
                </button>
            </div>
        </div>
    );
}