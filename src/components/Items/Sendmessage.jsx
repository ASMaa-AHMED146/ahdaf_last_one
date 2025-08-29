import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../../validtions/callingSchema"

export default function Sendmessage() {
    const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm({
            mode: "onBlur",
            resolver: zodResolver(schema),
          });

         const submitForm = (data) => {
        console.log(data);
        const message = `
         رسالة جديدة:
         الاسم: ${data.name}
         البريد الإلكتروني: ${data.email}
         الاستفسار: ${data.message}
         `;
        const phoneNumber = "201098757146"; // رقم الواتساب مع رمز الدولة
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        // إعادة ضبط النموذج بعد إرساله
        setTimeout(() => {
            reset();
            window.location.reload();
        }, 2000);
    };



  return (
    <form className=' px-[30px] lg:py-[10px] ' onSubmit={handleSubmit(submitForm)}>
      <div className='text-center'>ارسال رساله</div>
      <div >
        <label htmlFor="name" className=''>الاسم</label>
         <br />
        <input {...register('name')}  id='name' type="text" className='border-[#C2C2C2] border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]' />
        {errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
      </div>
      <div className='my-[10px]'>
        <label htmlFor="email">البريد الالكتروني</label>
         <br />
        <input {...register('email')} id='email' type="email" className='border-[#C2C2C2] border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]'/>
        {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="textarea">استفسارك</label>
         <br />
        <textarea {...register('message')}  cols={20} id="textarea" className='border-[#C2C2C2] resize-none border-[1px] w-full rounded-[5px] p-[5px] mt-[7px]  '></textarea>
        {errors.message?.message && <p className="text-red-500">{errors.message?.message}</p>}
      </div>
      <button className='bg-[#F36C35] cursor-pointer text-white w-full py-[8px] my-[17px] rounded-[10px]'>ارسال</button>
    </form>
  )
}
