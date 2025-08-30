import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Service({ servicesArray }) {
    console.log(servicesArray);

    const [showservices, setshowservices] = useState(true);
    const nav = useNavigate();

    function whatscall() {
        const phoneNumber = "201098757146";
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    }

    function phonecall() {
        const phoneNumber = "01098757146";
        window.open(`tel:${phoneNumber}`, "_self");
    }

    // هنا هتحط الشرط عشان تتأكد إن الـ servicesArray موجودة قبل ما تستخدمها
    // لو مش موجودة أو مش مصفوفة، الكود هيرجع null ومش هيعرض أي حاجة
    if (!servicesArray || !Array.isArray(servicesArray) || servicesArray.length === 0) {
        return null; // or you can return <p>No services found.</p>
    }

    // هنا الكود بتاعك هيشتغل عادي لأنك متأكد إن الـ servicesArray موجودة وفيها عناصر
    return (
        <>
            <div className='bg-[#1A74740A] flex justify-between px-[10px] py-[15px] items-center rounded-[10px]'>
                <p className='text-[#F36C35] font-[700] lg:text-[32px] text-[25px]'>الخدمات التي توفرها الباقة</p>
                {showservices ?
                    <IoIosArrowDown className='text-[25px]' style={{ color: '#F36C35' }} onClick={() => setshowservices(!showservices)} /> :
                    <IoIosArrowUp className='text-[25px]' style={{ color: '#F36C35' }} onClick={() => setshowservices(!showservices)} />
                }
            </div>
            {
                showservices && (
                    <>
                        {
                            servicesArray.map((el, index) => (<Item el={el} key={index} />))
                        }
                    </>
                )
            }
            <div className='flex gap-[12px]'>
                <button onClick={() => phonecall()} className='flex items-center gap-[7px] text-[#1A7474] border-[1px] border-[#1A7474] py-[7px] px-[30px] rounded-[10px] mt-[50px] cursor-pointer'>
                    <BiPhoneCall style={{ color: '#1A7474' }} />اتصل بنا
                </button>
                <button onClick={() => whatscall()} className='flex items-center bg-[#45B224] gap-[7px] text-[#FAFAFA] border-[1px] py-[7px] px-[30px] rounded-[10px] mt-[50px] cursor-pointer'>
                    <BsWhatsapp style={{ color: '#FAFAFA' }} />واتساب
                </button>
            </div>
            <div className='my-[30px] text-center'>
                <button onClick={() => nav('/booking')} className='border-[1px] border-[#F36C35] text-[#F36C35] rounded-[5px] w-[50%] py-[10px] cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95'>احجز الان</button>
            </div>
        </>
    );
}

function Item({ el }) {
    return (
        <>
            <div className='flex gap-[18px] mt-[30px]'>
                <FaRegCircleCheck className='lg:text-[45px] text-[50px]' style={{ color: '#F36C35' }} />
                <p className='font-[400] lg:text-[24px] text-[#707070]'>{el} </p>
            </div>
        </>
    );
}