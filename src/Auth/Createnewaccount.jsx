import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import  Button from '../components/common/button/Button'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import useregister from "../hooks/useRegister"

export default function Createnewaccount() {
  const nav=useNavigate();
  const state=useSelector((state)=>state.Auth);
  const {loading,error,errors,submitForm,register,handleSubmit}=useregister();
  console.log(error);
  
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
            <form action="" onSubmit={handleSubmit(submitForm)} className="w-[95%]">
                <Input errors={errors.name?.message} register={register} label='الاسم بالكامل' type={"text"} name={'name'}/>
                <Input errors={errors.email?.message} register={register} label='البريد الالكتروني' type={"email"} name={'email'}/>
                <Input errors={errors.phone_number?.message} register={register} label='رقم الهاتف' type={"number"} name={'phone_number'}/>
                <Input errors={errors.password?.message} register={register} label='كلمة المرور' type={"password"} name={'password'}/>
                <Input errors={errors.password_confirmation?.message} register={register} label='تأكيد كلمة المرور' type={"password"} name={'password_confirmation'}/>
                <Button text={'انشاء حساب'} color='#1A7474'/>
            </form>
            <p className="text-center">لديك حساب بالفعل ؟ <span className="text-[#F36C35] font-[500] text-[20px] cursor-pointer" onClick={()=>nav('/auth')
            }>تسجيل الدخول</span></p>
        </div>
      </Main>
    </div>
  )
}

 function Input({label,type,name,register,errors}) {

  return (
    <div className='my-[10px]'>
      <label htmlFor={name} className='text-[19px] text-[#2D2D2D] '>{label}</label>
      <br/>
      <input {...register(name)} onBlur={onblur}  id={name} type={type} className='border-[1px] border-[#DDDDDD] w-full mt-[5px]  p-[8px] rounded-[8px]'/>
      {
        errors && <p>{errors}</p>
      }
    </div>
  )
}