import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Heading({service,sub}) {
  return (
    <div className='bg-[#F36C3514] p-[20px] '>
      <p ><span className='text-[#C5C5C5] flex items-center gap-[12px] font-[600] text-[24px]'>الرئسيه<FaArrowLeftLong/><span className={`${sub?'text-[#C5C5C5] ':' text-[#F36C35]'}  font-[600] text-[24px]`}>{service}</span>
      {sub?
      <>
        <FaArrowLeftLong/><span className='text-[#F36C35] font-[600] text-[24px]'>{sub}</span>
      </>
      :null}
       </span>
       </p>
    </div>
  )
}
