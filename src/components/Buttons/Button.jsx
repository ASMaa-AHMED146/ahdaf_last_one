import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Button({ nextSlide, prevSlide, isBeginning, isEnd }) {
  const prevButtonClasses = `
    cursor-pointer text-[30px] 
    ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}
  `;
  
  const nextButtonClasses = `
    cursor-pointer text-[30px] 
    ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <div className='flex border-[#1A7474] border-[1px] rounded-[20px] w-[80px] justify-center p-[5px]'>
      
      {/* زر الرجوع */}
      <div onClick={isBeginning ? null : prevSlide}>
        <IoIosArrowForward className={prevButtonClasses} style={{color:'#2d2d2dae'}}/>
      </div>
      
      <div className='w-[1px] h-[20px] bg-[#F36C35] mt-[5px]'></div>
      
      {/* زر التقدم */}
      <div onClick={isEnd ? null : nextSlide}>
        <IoIosArrowBack className={nextButtonClasses} style={{color:'#2d2d2dae'}}/>
      </div>
    </div>
  );
}