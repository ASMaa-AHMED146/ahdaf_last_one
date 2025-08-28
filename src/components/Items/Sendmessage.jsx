import React from 'react'

export default function Sendmessage() {
  return (
    <div className=' px-[30px] lg:py-[10px] '>
      <div className='text-center'>ارسال رساله</div>
      <div >
        <label htmlFor="name" className=''>الاسم</label>
         <br />
        <input id='name' type="text" className='border-[#C2C2C2] border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]' />
       
      </div>
      <div className='my-[10px]'>
        <label htmlFor="email">البريد الالكتروني</label>
         <br />
        <input id='email' type="email" className='border-[#C2C2C2] border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]'/>
      </div>
      <div>
        <label htmlFor="textarea">استفسارك</label>
         <br />
        <textarea name="" cols={20} id="textarea" className='border-[#C2C2C2] resize-none border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]  '></textarea>
      </div>
      <button className='bg-[#F36C35] cursor-pointer text-white w-full py-[8px] my-[17px] rounded-[10px]'>ارسال</button>
    </div>
  )
}
