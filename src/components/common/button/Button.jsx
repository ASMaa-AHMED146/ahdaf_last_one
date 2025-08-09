import React from 'react'

export default function Button({color,text}) {
    console.log(color);
    
  return (
    <div className={` round my-[15px] `}>
      <button className={`w-full py-[10px] rounded-[10px] cursor-pointer text-white bg-[${color}] `}>{text}</button>
    </div>
  )
}
