import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import  Button from '../components/common/button/Button'
export default function Login() {
  return (
    <div>
      <Main>
        <div className="md:pr-[40px] pr-[20px] ">
            <div className="">
                <img src={Logo} alt="" className="h-[100px]" />
            </div>
            <div>
                <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">تسجيل الدخول!</h1>
                <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">مرحبًا بك! سجّل الدخول للوصول بسهولة إلى خدماتنا وإدارة حسابك بكل أمان. فقط أدخل بياناتك وابدأ تجربتك معنا.</p>
            </div>
            <form action="" className="w-[95%]">
                <Input label='البريد الالكتروني' type={"email"} name={'email'}/>
                <Input label='كلمة المرور' type={"password"} name={'password'}/>
                <p className="text-[14px] font-[400] text-[#AFAFAF] cursor-pointer">نسيت كلمة المرور؟</p>
                <Button text={'تسجيل دخول'} color='#1A7474'/>
            </form>
        </div>
      </Main>
    </div>
  )
}
