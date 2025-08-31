import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import  Button from '../components/common/button/Button'
export default function Forgetpassword() {
  return (
    <div>
      <Main>
        <div className="lg:p-[50px] p-[20px] ">
            <div className="">
                <img src={Logo} alt="" className="h-[100px]" />
            </div>
            <div>
                <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">نسيت كلمه المرور</h1>
                <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">برجاء ادخال البريد الالكتروني لتلقي رمز التاكيد لتعيين كلمة المرور الخاصة بك</p>
            </div>
            <form action="" className="w-[95%]">
                <Input label='البريد الالكتروني' type={"email"} name={'email'}/>
                <Button text={'ارسال'} color='#1A7474'/>
            </form>
        </div>
      </Main>
    </div>
  )
}
