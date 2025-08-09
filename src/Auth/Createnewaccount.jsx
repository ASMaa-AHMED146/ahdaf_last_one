import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import  Button from '../components/common/button/Button'
export default function Createnewaccount() {
  return (
    <div>
      <Main>
        <div className="md:pr-[40px] pr-[20px] ">
            <div className="">
                <img src={Logo} alt="" className="h-[80px]" />
            </div>
            <div>
                <h1 className="text-[#2D2D2D] font-[700] text-[25px]  ">انشاء حساب جديد!</h1>
                <p className="text-[#707070] font-[500] text-[17px]">أنشئ حسابك الآن واستمتع بالوصول السريع إلى جميع خدماتنا. فقط أدخل بياناتك الأساسية وابدأ تجربتك بكل سهولة!</p>
            </div>
            <form action="" className="w-[95%]">
                <Input label='الاسم بالكامل' type={"text"} name={'first name'}/>
                <Input label='البريد الالكتروني' type={"email"} name={'email'}/>
                <Input label='رقم الهاتف' type={"number"} name={'number'}/>
                <Input label='كلمة المرور' type={"password"} name={'password'}/>
                <Input label='تأكيد كلمة المرور' type={"password"} name={'passwordconf'}/>
                <Button text={'انشاء حساب'} color='#1A7474'/>
            </form>
            <p className="text-center">لديك حساب بالفعل ؟ <span className="text-[#F36C35] font-[500] text-[20px] cursor-pointer">تسجيل الدخول</span></p>
        </div>
      </Main>
    </div>
  )
}

 function Input({label,type,name}) {
  return (
    <div className='my-[10px]'>
      <label htmlFor={name} className='text-[19px] text-[#2D2D2D] '>{label}</label>
      <br/>
      <input id={name} type={type} className='border-[1px] border-[#DDDDDD] w-full mt-[5px]  p-[8px] rounded-[8px]'/>
    </div>
  )
}