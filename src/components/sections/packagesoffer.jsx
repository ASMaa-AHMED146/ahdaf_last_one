import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


export default function Service() {
    const [showservices,setshowservices]=useState(true)
  return (
    <div>
      <div className='bg-[#1A74740A] flex justify-between px-[10px] py-[15px] items-center rounded-[10px]'>
        <p className='text-[#F36C35] font-[700] text-[32px]'>الخدمات التي توفرها الباقة</p>
       {
         showservices? <IoIosArrowDown className='text-[25px]' style={{color:'#F36C35'}} onClick={()=>setshowservices(!showservices)} />: <IoIosArrowUp className='text-[25px]' style={{color:'#F36C35'}} onClick={()=>setshowservices(!showservices)}/>
       }
        </div> 
        {
            showservices&&(
                <>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </>
            )
        }
       <div className='flex gap-[12px]'>
         <button className='flex items-center gap-[7px] text-[#1A7474]  border-[1px] border-[#1A7474] py-[7px] px-[30px] rounded-[10px] mt-[50px] cursor-pointer'>
            <BiPhoneCall style={{color:'#1A7474'}}/>اتصل بنا 
        </button>
        <button className='flex items-center bg-[#45B224] gap-[7px] text-[#FAFAFA] border-[1px]  py-[7px] px-[30px] rounded-[10px] mt-[50px] cursor-pointer'>
             <BsWhatsapp style={{color:'#FAFAFA'}}/>اتصل بنا 
        </button>
       </div>
       <div className='my-[30px] text-center '>
         <button className='border-[1px] border-[#F36C35] text-[#F36C35] rounded-[5px] w-[50%] py-[10px] cursor-pointer'>احجز الان</button>
       </div>
    </div>
  )
}

function Item ()
{
    return(
        <>
            <div className='flex gap-[18px] mt-[30px] '> 
                <FaRegCircleCheck className='text-[45px]' style={{color:'#F36C35'}}/>
                <p className='font-[400] text-[24px] text-[#707070]'>خدمات إصلاح كهربائية احترافية لجميع احتياجات منزلك. نتعامل مع كل شيء من إصلاح المنافذ والمفاتيح إلى استكشاف المشكلات الكهربائية المعقدة وإصلاحها، مما يضمن عمل الأنظمة الكهربائية في منزلك بأمان وكفاءة.</p>
            </div>
        </>
    )
}