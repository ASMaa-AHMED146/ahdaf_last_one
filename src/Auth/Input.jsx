import React from 'react'

export default function Input({label,type,name}) {
  return (
    <div className='my-[20px]'>
      <label htmlFor={name} className='text-[22px] text-[#2D2D2D]'>{label}</label>
      <br/>
      <input id={name} type={type} className='border-[1px] border-[#DDDDDD] w-full  p-[8px] rounded-[8px] mt-[15px]'/>
    </div>
  )
}
