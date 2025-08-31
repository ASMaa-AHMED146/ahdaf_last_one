// import Main from "./mainpage"
// import React from "react"
// import Logo from "../assets/images/logo.png"
// import Input from '../Auth/Input'
// import  Button from '../components/common/button/Button'
// export default function Forgetpassword() {
//   return (
//     <div>
//       <Main>
//         <div className="lg:p-[50px] p-[20px] ">
//             <div className="">
//                 <img src={Logo} alt="" className="h-[100px]" />
//             </div>
//             <div>
//                 <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">نسيت كلمه المرور</h1>
//                 <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">برجاء ادخال البريد الالكتروني لتلقي رمز التاكيد لتعيين كلمة المرور الخاصة بك</p>
//             </div>
//             <form action="" className="w-[95%]">
//                 <Input label='البريد الالكتروني' type={"email"} name={'email'}/>
//                 <Button text={'ارسال'} color='#1A7474'/>
//             </form>
//         </div>
//       </Main>
//     </div>
//   )
// }
import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import  Button from '../components/common/button/Button'
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetUI } from "../store/varfication/verfyrSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import forgetPasswordSchema from "../validtions/forgetSchema"
import actEmailVerfy from "../store/varfication/actEmailVerfy"

export default function Forgetpassword() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {loading,error}=useSelector((state)=>state.verf) ;

const {
  register,
  handleSubmit,
  getFieldState,
  trigger,
  formState: { errors },
 } = useForm({
  mode: "onBlur",
  resolver: zodResolver(forgetPasswordSchema),
 });

 const submitForm =async(data)=>{
 console.log(data)
 dispatch(actEmailVerfy(data)).unwrap()
 .then(() => {
  navigate('/auth/setpassword');});

 useEffect(()=>{
  dispatch(resetUI());
  return()=>{
   dispatch(resetUI());
  }
 },[dispatch])

 }
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
            <form action="" className="w-[95%]" onSubmit={handleSubmit(submitForm)}>
                <Input  errors={errors.email?.message} 
                  register={register} 
                  label='البريد الالكتروني' 
                  type={"email"} 
                  name={'email'}/>
                  {
 error && <p className="text-red-500 text-center text-[20px] ">{error}</p>
 }
                <Button 
                 text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>} 
                 color="#1A7474"  disabled={loading === 'pending'} />
            </form>
        </div>
      </Main>
    </div>
  )
}
