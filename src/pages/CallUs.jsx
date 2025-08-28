import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import Sendmessage from '../components/Items/Sendmessage';
import Heading from "../components/common/Heading/Headind"

export default function Callus() {
  return (
<div >
  <Heading sub={'اتصل بنا'}/>
      <div className='py-[50px] lg:px-[80px] px-[20px] flex flex-col'>
      <div className='flex gap-[30px] flex-col lg:flex-row'>
        <div className='lg:w-[60%] gap-[50px]'>
          <div>
            <h1 className='font-[700] text-[24px] mb-[15px] '>تواصل معنا</h1>
            <p className='text-[#707070] mb-[15px] text-[23px] '>
              هل لديك أي استفسار أو تحتاج إلى مساعدة؟ فريقنا جاهز لخدمتك على مدار الساعة. 
              تواصل معنا الآن وسنرد عليك في أسرع وقت ممكن!
            </p>
          </div>

          <div className='my-[40px] px-[30px]'>
            <Item title={"العنوان :"} data={"15 شارع البرشاء 1 دبي الإمارات العربية المتحدة"}/>
            <Item title={"رقم الجوال :"} data={"01090009330 / 00971551310922"}/>
            <Item title={"البريد الالكتروني :"} data={"info@dubai-hotel-service.com"}/>
          </div>
        </div>
        
        <div className='lg:w-[40%] lg:p-[50px]'>
          <Sendmessage/>
        </div>
      </div>

      {/* قسم الخريطة - تم تعديله ليكون أسفل المحتوى */}
      <div className='mt-[50px] w-full' style={{ height: '500px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7225.473505439694!2d55.200687!3d25.110771!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA2JzM4LjgiTiA1NcKwMTInMTEuNyJF!5e0!3m2!1sen!2seg!4v1752661912734!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقعنا على الخريطة"
        />
      </div>
    </div>
</div>
  )
}

function Item({title,data}) {
  return (
    <div className='flex gap-[20px] items-center my-[20px]'>
      <div className='bg-[#F36C35] w-[35px] h-[35px] rounded-[100%] flex items-center justify-center'>
        <SlLocationPin style={{color:'white'}}/>
      </div>
      <div>
        <h1 className='text-[23px]'>{title}</h1>
        <p className='text-[#707070]'>{data}</p>
      </div>
    </div>
  )
}