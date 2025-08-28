import React from 'react'
// import { CiUser } from "react-icons/ci";
// import { MdPhoneInTalk } from "react-icons/md";
// import { MdOutlineTimer } from "react-icons/md";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { MdOutlineEmail } from "react-icons/md";
// import { VscNewFile } from "react-icons/vsc";
// import { CgCalendarDates } from "react-icons/cg";
// import { Link } from 'react-router-dom';
import img from "../assets/images/Booking.svg"
import "../styles/inputnumber.css"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import bookingSchema from '../validtions/bookingSchema';
import axios from 'axios';

{/* <CiUser className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}} /> */}

export default function Booking() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        resolver: zodResolver(bookingSchema),
      });

        const submitForm =async(data)=>{
        console.log(data);
         const message = `
          حجز جديد:
          الاسم: ${data.username}
          رقم الهاتف: ${data.phoneNumber}
          وقت الخدمة: ${data.serviceTime}
          البريد الإلكتروني: ${data.email}
          اسم الخدمة: ${data.serviceName}
          تاريخ الخدمة: ${data.serviceDate}
          العنوان: ${data.address}
        `;
        const phoneNumber = "201098757146"; // WhatsApp number with country code
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

         setTimeout(() => {
          reset(); // Reset form fields
          window.location.reload(); // Refresh page
        }, 2000);

        }

  return (
    <form onSubmit={handleSubmit(submitForm)
    } className='py-[50px] px-[20px] md:px-[0px]'>
        <div>
            <img src={img} alt="" className='m-auto'/>
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-[30px] md:px-[70px] pt-[20px]'>


             <div className='left w-[100%] lg:w-[50%] '>
                <Data errors={errors.username?.message} register={register} label={'اسم المستخدم'} type={"text"}  link={'username'} />
                <Data errors={errors.phoneNumber?.message} register={register} label={'رقم الهاتف'} type={"number"}  link={'phoneNumber'} />
                <Data errors={errors.serviceTime?.message} register={register} label={'وقت الخدمه'} type={"time"}  link={'serviceTime'} />
            {/* <div className='flex flex-col relative my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]'>اسم المستخدم</label>
                <input type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>

            </div> */}
            {/* <div className='flex flex-col relative my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]' > رقم الهاتف</label>
                <input type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>
                <MdPhoneInTalk className='absolute top-[40px] right-[15px] text-[20px] ' style={{color:'#676767'}}/>
            </div>
            <div className='flex flex-col relative  my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]' > وقت الخدمة</label>
                <input  type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>
                <MdOutlineTimer className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}}/>
            </div> */}
           
        </div>

        <div className='lg:w-[50%] w-[100%] '>
                <Data errors={errors.email?.message} register={register} label={'البريد الالكنروني'} type={"email"}  link={'email'} />
                <Data errors={errors.serviceName?.message} register={register} label={'اسم الخدمه'} type={"text"}  link={'serviceName'} />
                <Data errors={errors.serviceDate?.message} register={register} label={'تاريخ الخدمه'} type={"date"}  link={'serviceDate'} />            
            {/* <div className='flex flex-col relative my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]'>البريد الالكتروني</label>
                <input type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>
                <MdOutlineEmail className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}}/>
            </div>
            <div className='flex flex-col relative my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]' >اسم الخدمة</label>
                <input type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>
                <VscNewFile className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}}/>
            </div>
            <div className='flex flex-col relative  my-[15px]'>
                <label htmlFor="username" className='font-[500] text-[17px] mb-[5px]' >تاريخ الخدمة</label>
                <input type="text" id='username' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' placeholder=''/>
                <CgCalendarDates className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}}/>
            </div> */}
            
        </div>

        </div>

            <div className='flex flex-col relative my-[10px] md:px-[70px] '>
                <label htmlFor="location" className='font-[500] text-[17px] mb-[5px]'>العنوان بالكامل </label>
                <input type="text" id='location' className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px]  ' {...register('address')} placeholder=''/>
                {errors.address?.message && <p className="text-red-500">{errors.address?.message}</p>}
            </div>

        {/* <div className=' text-center md:mt-[50px] mt-[25px] ' > */}
           <button to={'/booking'} className='text-[#1A7474] text-center md:mt-[50px] mt-[25px] border-[1px] border-[#1A7474] py-[8px] text-[20px] md:w-[50%] lg:w-[35%] w-full rounded-[15px] block m-auto cursor-pointer'>تأكيد الحجز</button>
        {/* </div> */}

    </form>
  )
}

function Data({label, type,link,errors,register})
{
    return(
        <>
            <div className='flex flex-col my-[10px] relative'>
                <label htmlFor={link} className='font-[500] text-[17px] mb-[15px]'>{label}</label>
                <input  {...register(link)} type={type} id={link} className='border-[#C5C5C5] border-[1px] rounded-[5px] w-full p-[10px] ' />
                {errors && <p className="text-red-500">{errors}</p>}
                {/* <CgCalendarDates className='absolute top-[40px] right-[15px] text-[20px]' style={{color:'#676767'}}/> */}
            </div>
        </>
    )
}
